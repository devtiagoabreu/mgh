import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("Fase A — gates de segurança", () => {
  it("permanece fechado por padrão", async () => {
    vi.resetModules();
    vi.stubEnv("MGH_ALLOW_REAL_PARTICIPANTS", "");
    vi.stubEnv("MGH_AI_ENABLED", "");
    vi.stubEnv("MGH_ALLOW_INDIVIDUAL_RESPONSE_ACCESS", "");
    vi.stubEnv("MGH_DR_RANDOMIZATION", "");
    vi.stubEnv("MGH_SELF_IN_SCORE", "");

    const { PHASE_A_GATES } = await import("../../lib/config/gates");

    expect(PHASE_A_GATES.allowRealParticipants).toBe(false);
    expect(PHASE_A_GATES.aiEnabled).toBe(false);
    expect(PHASE_A_GATES.allowIndividualResponseAccess).toBe(false);
    expect(PHASE_A_GATES.drRandomization).toBe(false);
    expect(PHASE_A_GATES.selfInScore).toBe(false);
    expect(PHASE_A_GATES.itemBankPublishable).toBe(false);
  });

  it("bloqueia publicação enquanto o banco estiver DRAFT", async () => {
    vi.resetModules();
    const { assertPublishableInstrument } = await import(
      "../../lib/config/gates"
    );

    expect(() => assertPublishableInstrument()).toThrow("SOURCE_REQUIRED");
  });

  it("rejeita IA na Fase A mesmo se a variável tentar habilitar", async () => {
    vi.resetModules();
    vi.stubEnv("MGH_AI_ENABLED", "true");
    const { assertNoAiInPhaseA } = await import("../../lib/config/gates");

    expect(() => assertNoAiInPhaseA()).toThrow("REQ-PROD-003");
  });
});
