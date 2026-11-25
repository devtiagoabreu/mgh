import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  canonicalHash,
  canonicalize,
  computeScore,
  verifyGoldenCases,
} from "../../lib/engine";
import {
  buildGoldenCases,
  GOLDEN_CASE_IDS,
  type GoldenCaseId,
} from "./golden-cases";
import { createBaseInput } from "./fixtures";

function runGolden(id: GoldenCaseId) {
  const cases = buildGoldenCases().filter((caseItem) => caseItem.id === id);
  expect(cases).toHaveLength(1);
  const report = verifyGoldenCases(cases);
  const result = report.cases[0];
  expect(result).toBeDefined();
  expect(result?.ok, `${result?.id}: ${result?.observed} ${result?.note ?? ""}`).toBe(true);
  return result;
}

describe("P5 — Score Engine puro", () => {
  it("G1: completo 56/56 produz saída tipada e versionada", () => {
    const result = runGolden("P5-01-complete-56");
    expect(result?.observed).toMatch(/^OK [a-f0-9]{64}$/);
  });

  it("G2: 55/56 retorna INCOMPLETE_INPUT", () => {
    const result = runGolden("P5-02-incomplete-55");
    expect(result?.observed).toContain("INCOMPLETE_INPUT");
  });

  it("G3: opção desconhecida retorna UNKNOWN_OPTION", () => {
    const result = runGolden("P5-03-unknown-option");
    expect(result?.observed).toContain("UNKNOWN_OPTION");
  });

  it("G4: versão divergente retorna VERSION_MISMATCH", () => {
    const result = runGolden("P5-04-version-mismatch");
    expect(result?.observed).toContain("VERSION_MISMATCH");
  });

  it("G5: regra ausente retorna CONFIG_ERROR", () => {
    const result = runGolden("P5-05-missing-rule");
    expect(result?.observed).toContain("CONFIG_ERROR");
  });

  it("G6: SELF/feedback/RG injetados retornam NON_SCORED_DOMAIN_PRESENT", () => {
    const result = runGolden("P5-06-non-scored-domain");
    expect(result?.observed).toContain("NON_SCORED_DOMAIN_PRESENT");
  });

  it("G7: DR reordenado retorna CONFIG_ERROR sem reordenar silenciosamente", () => {
    const result = runGolden("P5-07-dr-reordered");
    expect(result?.observed).toContain("DR_ORDER_DIVERGENCE");
  });

  it("G8: recomputação idêntica gera o mesmo outputHash", () => {
    runGolden("P5-08-identical-recompute");
  });

  it("G9: nova versão de scoring gera novo derivado e registra a versão", () => {
    runGolden("P5-09-new-scoring-version");
  });

  it("verifyGoldenCases aprova os nove casos de uma vez", () => {
    const report = verifyGoldenCases(buildGoldenCases());
    expect(report.cases.map((caseItem) => caseItem.id)).toEqual([...GOLDEN_CASE_IDS]);
    expect(report.ok, JSON.stringify(report.cases)).toBe(true);
  });

  it("erro não produz score parcial", () => {
    const input = createBaseInput();
    const incomplete = {
      ...input,
      raw: { ...input.raw, responses: input.raw.responses.slice(0, -1) },
    };
    expect(() => computeScore(incomplete)).toThrowError(
      expect.objectContaining({ code: "INCOMPLETE_INPUT" }),
    );
  });
});

describe("P5 — serialização canônica", () => {
  it("ordena chaves e ignora a ordem de inserção", () => {
    expect(canonicalize({ b: 2, a: 1 })).toBe('{"a":1,"b":2}');
    expect(canonicalHash({ b: 2, a: 1 })).toBe(canonicalHash({ a: 1, b: 2 }));
  });

  it("hash é estável entre recomputações do mesmo input", () => {
    const first = computeScore(createBaseInput());
    const second = computeScore(createBaseInput());
    expect(first.outputHash).toBe(second.outputHash);
    expect(first.values).toEqual(second.values);
  });
});

describe("P5 — auditoria estática do motor", () => {
  it("não contém DB, rede, relógio, random ou process.env", () => {
    const files = [
      "lib/engine/canonical.ts",
      "lib/engine/errors.ts",
      "lib/engine/index.ts",
      "lib/engine/score.ts",
      "lib/engine/types.ts",
    ];
    const forbidden = [
      "Date.now(",
      "Math.random(",
      "process.env",
      "fetch(",
      "setTimeout(",
      "new Date(",
      "prisma",
    ];
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      for (const token of forbidden) {
        expect(source.includes(token), `${file} contém ${token}`).toBe(false);
      }
    }
  });
});
