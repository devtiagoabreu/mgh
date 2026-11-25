import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const seed = readFileSync(resolve(process.cwd(), "prisma/seed.ts"), "utf8");

describe("P2 — seed sintético", () => {
  it("marca explicitamente todo o seed como sintético/não canônico", () => {
    expect(seed).toContain("SYNTHETIC_");
    expect(seed).toContain("[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]");
    expect(seed).toContain("NÃO contém nomes");
  });

  it("executa dentro de transação com sessão de tenant parametrizada", () => {
    expect(seed).toContain("withTenantTransaction");
    expect(seed).toContain("createTenantContextFromVerifiedClaims");
    expect(seed).not.toContain("${");
  });

  it("não contém PII real, textos canônicos, SELF ou consentimento", () => {
    const executableSeed = seed
      .split("\n")
      .filter((line) => !line.trimStart().startsWith("*"))
      .filter((line) => !line.trimStart().startsWith("//"))
      .filter((line) => !line.trimStart().startsWith("/*"))
      .join("\n");
    const forbidden = [
      "@gmail.com",
      "@hotmail.com",
      "@outlook.com",
      "@empresa",
      "João",
      "Maria",
      "SELF",
      "LIKERT",
      "likert",
    ];
    for (const term of forbidden) {
      expect(
        executableSeed,
        `termo proibido no seed: ${term}`,
      ).not.toContain(term);
    }
    expect(executableSeed).not.toMatch(
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
    );
  });

  it("usa apenas identificadores placeholders para refs e versões", () => {
    const refs = [...seed.matchAll(/\b(?:version|Ref|scenarioRef|optionRef):\s*"([^"]+)"/g)].map(
      (match) => match[1],
    );
    expect(refs.length).toBeGreaterThan(0);
    for (const ref of refs) {
      expect(ref).toMatch(/^(SYNTHETIC_|\[PLACEHOLDER SINTÉTICO)/);
    }
  });

  it("não faz upsert/update/delete em tabelas append-only", () => {
    expect(seed).not.toMatch(/db\.responseRaw\.upsert/);
    expect(seed).not.toMatch(/db\.responseEvent\.upsert/);
    expect(seed).not.toMatch(/db\.response(?:Raw|Event)\.(?:update|delete)/);
  });
});
