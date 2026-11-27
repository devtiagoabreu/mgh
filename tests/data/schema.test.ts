import { readFileSync, readdirSync } from "node:fs";
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

const NON_TENANT_MODELS = new Set(["AuthCredential"]);

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
    const parsed = models().filter((model) => !NON_TENANT_MODELS.has(model.name));
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

  it("remove o login legado da demonstração", () => {
    const names = models().map((model) => model.name);
    expect(names).not.toContain("DemoLogin");
    expect(names).not.toContain("DemoSession");
    expect(schema).not.toMatch(/demo_logins|demo_sessions|mgh_demo_session/);

    const dropMigration = readdirSync(
      resolve(process.cwd(), "prisma/migrations"),
    ).find((name) => name.endsWith("_drop_demo_login"));
    if (!dropMigration) throw new Error("DROP_DEMO_MIGRATION_MISSING");
    const migration = readFileSync(
      resolve(process.cwd(), "prisma/migrations", dropMigration, "migration.sql"),
      "utf8",
    );
    expect(migration).toContain('DROP TABLE "demo_sessions"');
    expect(migration).toContain('DROP TABLE "demo_logins"');
  });

  it("mantém a credencial real fora do escopo RLS", () => {
    const auth = models().find((model) => model.name === "AuthCredential");
    expect(auth, "modelo AuthCredential ausente").toBeDefined();
    expect(auth?.body).toMatch(/email\s+String\s+@unique/);
    expect(auth?.body).toMatch(
      /passwordHash\s+String\s+@map\("password_hash"\)/,
    );
    const migration = readFileSync(
      resolve(
        process.cwd(),
        "prisma/migrations/20261127120000_auth_credentials/migration.sql",
      ),
      "utf8",
    );
    expect(migration).toContain('CREATE TABLE "auth_credentials"');
    expect(migration).not.toContain("ROW LEVEL SECURITY");
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
    const piiAllowed = new Set(["ParticipantIdentity", "AuthCredential"]);
    for (const model of models()) {
      const hasPii = piiPattern.test(model.body);
      if (piiAllowed.has(model.name)) {
        expect(hasPii).toBe(true);
        if (model.name === "ParticipantIdentity") {
          expect(model.body).toMatch(/@@schema\("vault"\)/);
        } else {
          expect(model.body).toMatch(/email\s+String\s+@unique/);
        }
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

  it("persiste a preferência de aparência no User, sem terceiro valor", () => {
    const user = models().find((model) => model.name === "User");
    expect(user?.body).toMatch(
      /appearancePreference\s+AppearancePreference\?\s+@map\("appearance_preference"\)/,
    );
    const preferenceEnum =
      schema.match(/enum AppearancePreference\s*\{([\s\S]*?)\}/)?.[1] ?? "";
    expect(preferenceEnum).toContain("LIGHT");
    expect(preferenceEnum).toContain("DARK");
    expect(preferenceEnum).not.toContain("SYSTEM");

    const migration = readFileSync(
      resolve(
        process.cwd(),
        "prisma/migrations/20261127180000_appearance_preference/migration.sql",
      ),
      "utf8",
    );
    expect(migration).toContain(
      'CREATE TYPE "AppearancePreference" AS ENUM (\'LIGHT\', \'DARK\')',
    );
    expect(migration).toContain(
      'ADD COLUMN "appearance_preference" "AppearancePreference"',
    );
  });
});
