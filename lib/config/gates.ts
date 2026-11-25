import { ITEM_BANK_PUBLISHABLE, PHASE_A_VERSIONS } from "./versions";

function readBoolean(name: string, fallback: boolean): boolean {
  const raw = process.env[name];
  if (raw === undefined || raw === "") return fallback;
  if (raw === "true") return true;
  if (raw === "false") return false;
  throw new Error(`Invalid boolean in ${name}; expected true or false`);
}

/**
 * Gates da Fase A. O padrão é sempre o mais restritivo.
 * Nenhuma variável MGH_* pode ser usada para liberar conteúdo canônico.
 */
export const PHASE_A_GATES = Object.freeze({
  phase: PHASE_A_VERSIONS.phase,
  requireCanonicalItems: readBoolean("MGH_REQUIRE_CANONICAL_ITEMS", true),
  allowRealParticipants: readBoolean("MGH_ALLOW_REAL_PARTICIPANTS", false),
  aiEnabled: readBoolean("MGH_AI_ENABLED", false),
  allowIndividualResponseAccess: readBoolean(
    "MGH_ALLOW_INDIVIDUAL_RESPONSE_ACCESS",
    false,
  ),
  drRandomization: readBoolean("MGH_DR_RANDOMIZATION", false),
  selfInScore: readBoolean("MGH_SELF_IN_SCORE", false),
  itemBankPublishable: ITEM_BANK_PUBLISHABLE,
} as const);

export function assertPublishableInstrument(): void {
  if (
    PHASE_A_GATES.requireCanonicalItems &&
    !PHASE_A_GATES.itemBankPublishable
  ) {
    throw new Error(
      "SOURCE_REQUIRED: BANK-0.2 is DRAFT; canonical texts and option IDs are required before publication",
    );
  }
}

export function assertNoAiInPhaseA(): void {
  if (PHASE_A_GATES.aiEnabled) {
    throw new Error("AI is outside Phase A (REQ-PROD-003)");
  }
}
