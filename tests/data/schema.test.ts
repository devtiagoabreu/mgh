import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const schema = readFileSync(
  resolve(process.cwd(), "prisma/schema.prisma"),
  "utf8",
);

interface ParsedModel {
  readonly name: string;
  readonly body: string;
}

function models(): ParsedModel[] {
  const result: ParsedModel[] = [];
  const pattern = /model\s+(\w+)\s*\{([\s\S]*?)\n\}/g;
  for (const match of schema.matchAll(pattern)) {
    result.push({ name: match[1], body: match[2] });
  }
  return result;
}

const DEMO_MODELS = new Set(["DemoLogin", "DemoSession"]);

const MODEL_NAMES = [
  "Tenant",
  "User",
  "TenantMembership",
  "ParticipantIdentity",
  "InstrumentVersion",
  "ItemBankVersion",
  "ScoringVersion",
  "SequenceVersion",
  "GoldenDatasetVersion",
  "Run",
  "ResponseRaw",
  "ResponseEvent",
  "DerivedScoreRun",
  "DerivedScoreValue",
  "ChangeLog",
  "Occurrence",
  "AuditLog",
];

describe("P1/P2 — schema tenant-scoped", () => {
  it("coloca tenantId mapeado para tenant_id em TODA tabela de tenant", () => {
    const parsed = models().filter((model) => !DEMO_MODELS.has(model.name));
    expect(parsed.map((model) => model.name).sort()).toEqual(
      [...MODEL_NAMES].sort(),
    );
    for (const model of parsed) {
      expect(
        model.body,
        `modelo ${model.name} sem tenantId mapeado`,
      ).toMatch(/tenantId\s+String\s+@map\("tenant_id"\)/);
    }
  });

  it("mantém a credencial da demonstração fora do escopo tenant", () => {
    const demo = models().filter((model) => DEMO_MODELS.has(model.name));
    expect(demo.map((model) => model.name).sort()).toEqual([
      "DemoLogin",
      "DemoSession",
    ]);
    for (const model of demo) {
      expect(model.body, `modelo ${model.name} com tenantId`).not.toMatch(
        /tenantId/,
      );
    }
    expect(demo.find((model) => model.name === "DemoLogin")?.body).toMatch(
      /passwordHash\s+String\s+@map\("password_hash"\)/,
    );
    expect(demo.find((model) => model.name === "DemoSession")?.body).toMatch(
      /tokenHash\s+String\s+@unique\s+@map\("token_hash"\)/,
    );
  });

  it("mantém apenas os papéis da Fase A e nenhum MENTOR_ASSISTANT", () => {
    const roleEnum = schema.match(/enum PhaseARole\s*\{([\s\S]*?)\}/)?.[1] ?? "";
    expect(roleEnum).toContain("PLATFORM_ADMIN");
    expect(roleEnum).toContain("MENTOR_OWNER");
    expect(roleEnum).toContain("MENTEE");
    expect(roleEnum).not.toContain("MENTOR_ASSISTANT");
    const executableSchema = schema
      .split("\n")
      .filter((line) => !line.trimStart().startsWith("//"))
      .join("\n");
    expect(executableSchema).not.toContain("MENTOR_ASSISTANT");
  });

  it("mantém RAW e eventos append-only, sem updatedAt", () => {
    for (const name of ["ResponseRaw", "ResponseEvent"]) {
      const model = models().find((candidate) => candidate.name === name);
      expect(model, `modelo ${name} ausente`).toBeDefined();
      expect(model?.body).not.toMatch(/updatedAt/);
    }
    expect(schema).toMatch(/@@unique\(\[tenantId, runId, sequenceIndex\]\)/);
  });

  it("separa PII no Vault e mantém tabelas analíticas sem PII", () => {
    const piiPattern = /\b(email|displayName|fullName|phone|cpf)\w*\b/i;
    for (const model of models()) {
      const hasPii = piiPattern.test(model.body);
      if (model.name === "ParticipantIdentity") {
        expect(hasPii).toBe(true);
        expect(model.body).toMatch(/@@schema\("vault"\)/);
      } else {
        expect(hasPii, `PII em ${model.name}`).toBe(false);
      }
    }
  });

  it("versiona catálogo e derivados por runId + versões", () => {
    for (const name of [
      "InstrumentVersion",
      "ItemBankVersion",
      "ScoringVersion",
      "SequenceVersion",
      "GoldenDatasetVersion",
    ]) {
      expect(schema).toContain(`model ${name} {`);
    }
    expect(schema).toMatch(
      /@@unique\(\[tenantId, runId, scoringVersionId, itemBankVersionId\]\)/,
    );
    const run = models().find((model) => model.name === "Run");
    expect(run?.body).toContain("instrumentVersionId");
    expect(run?.body).toContain("itemBankVersionId");
    expect(run?.body).toContain("scoringVersionId");
    expect(run?.body).toContain("sequenceVersionId");
  });

  it("registra AuditLog com ator, ação, escopo, motivo e timestamp UTC", () => {
    const audit = models().find((model) => model.name === "AuditLog");
    for (const field of [
      "actor",
      "action",
      "tenantScope",
      "reason",
      "timestampUtc",
    ]) {
      expect(audit?.body, `AuditLog sem ${field}`).toContain(field);
    }
  });
});
