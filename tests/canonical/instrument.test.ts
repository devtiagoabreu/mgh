import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CONSENT_STATEMENT,
  FEEDBACK_ITEMS,
  FROZEN_OPENING_VARIANT,
  OPENING_INSTRUCTIONS,
  SCENARIOS,
  SCENARIO_TOTAL,
  SCORED_RESPONSE_TOTAL,
  SELF_ITEMS,
} from "../../lib/canonical/instrument";

const root = process.cwd();
const scenarioSource = readFileSync(
  resolve(
    root,
    "docs/002/fontes/mapa-de-governo-humano/07-evidencias-e-pilotagem.md",
  ),
  "utf8",
);
const bankSource = readFileSync(
  resolve(root, "docs/002/fontes/anx-003-xlsx/01-00-readme.md"),
  "utf8",
);
const handoffSource = readFileSync(
  resolve(
    root,
    "docs/002/fontes/mapa-de-governo-humano/16-handoff-02-architecture-e-instrument.md",
  ),
  "utf8",
);

const unbold = (text: string) => text.replace(/\*\*/g, "");
const sourceLines = scenarioSource.split(/\r?\n/).map((line) => unbold(line.trim()));
const scenarioRegistry = bankSource
  .split("## 02_RESPONSE_SCHEMA")[0]
  .split("## 01_P1_SCENARIOS")[1];
const bankCodes = Array.from(
  scenarioRegistry.matchAll(/^\| (\d{1,2}) \| ([A-Z]+-\d+[A-Z]*) \|/gm),
).map((match) => ({ order: Number(match[1]), code: match[2] }));

describe("Instrumento canônico exibido na Fase A", () => {
  it("mantém 48 cenários, 56 respostas pontuáveis e 8 itens SELF", () => {
    expect(SCENARIOS).toHaveLength(48);
    expect(SCENARIO_TOTAL).toBe(48);
    expect(SCORED_RESPONSE_TOTAL).toBe(56);
    expect(SELF_ITEMS).toHaveLength(8);
    expect(SELF_ITEMS.map((item) => item.code)).toEqual(
      Array.from({ length: 8 }, (_, index) => `SELF-0${index + 1}`),
    );
  });

  it("segue a ordem e os códigos do registro ANX-003", () => {
    expect(bankCodes).toHaveLength(48);
    expect(
      SCENARIOS.map((scenario) => ({
        order: scenario.order,
        code: scenario.code,
      })),
    ).toEqual(bankCodes);
  });

  it("usa apenas enunciados e alternativas presentes no documento mestre", () => {
    for (const scenario of SCENARIOS) {
      expect(sourceLines).toContain(scenario.prompt);
      const strings =
        scenario.kind === "choice" ? scenario.options : scenario.subitems;
      for (const text of strings) {
        expect(sourceLines.some((line) => line.endsWith(text))).toBe(true);
      }
    }
  });

  it("transcreve consentimento, SELF, feedback e abertura sem reescrita", () => {
    const plainSource = unbold(scenarioSource);
    expect(plainSource).toContain(CONSENT_STATEMENT);
    for (const item of SELF_ITEMS) {
      expect(plainSource).toContain(item.statement);
    }
    for (const item of FEEDBACK_ITEMS) {
      expect(plainSource).toContain(item.question);
    }
    for (const paragraph of OPENING_INSTRUCTIONS) {
      expect(plainSource).toContain(paragraph);
    }
    expect(FROZEN_OPENING_VARIANT).toHaveLength(7);
    const plainHandoff = unbold(handoffSource);
    for (const paragraph of FROZEN_OPENING_VARIANT) {
      expect(plainHandoff).toContain(paragraph);
    }
  });
});
