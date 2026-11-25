import { describe, expect, it } from "vitest";
import {
  ITEM_BANK_PUBLISHABLE,
  PHASE_A_SHAPE,
  PHASE_A_VERSIONS,
} from "../../lib/config/versions";

describe("Fase A — versões congeladas", () => {
  it("mantém o instrumento e o banco no estado DRAFT", () => {
    expect(PHASE_A_VERSIONS.instrument).toBe("MGH-P1.0");
    expect(PHASE_A_VERSIONS.itemBank).toBe("BANK-0.2");
    expect(PHASE_A_VERSIONS.itemBankStatus).toBe("DRAFT");
    expect(ITEM_BANK_PUBLISHABLE).toBe(false);
  });

  it("preserva a forma estrutural de 48 cenários e 56 respostas", () => {
    expect(PHASE_A_SHAPE.scenarios).toBe(48);
    expect(PHASE_A_SHAPE.scoredResponses).toBe(56);
    expect(PHASE_A_SHAPE.pcChoices).toBe(24);
    expect(PHASE_A_SHAPE.prcForcedChoices).toBe(8);
    expect(PHASE_A_SHAPE.prcIndependentGroups).toBe(4);
    expect(PHASE_A_SHAPE.prcIndependentRatings).toBe(12);
    expect(PHASE_A_SHAPE.drItems).toBe(12);
    expect(PHASE_A_SHAPE.selfItems).toBe(8);
    expect(PHASE_A_SHAPE.internalRgItems).toBe(6);
  });

  it("congela a ordem e as regras de randomização", () => {
    expect(PHASE_A_SHAPE.firstScenario).toBe("PC-001");
    expect(PHASE_A_SHAPE.lastScenario).toBe("PC-011R");
    expect(PHASE_A_SHAPE.drRandomizable).toBe(false);
    expect(PHASE_A_SHAPE.selfScored).toBe(false);
    expect(PHASE_A_SHAPE.feedbackScored).toBe(false);
    expect(PHASE_A_SHAPE.rgScored).toBe(false);
  });

  it("não expõe texto de item ou opção no registry", () => {
    expect(Object.keys(PHASE_A_SHAPE)).not.toContain("items");
    expect(Object.keys(PHASE_A_SHAPE)).not.toContain("options");
  });
});
