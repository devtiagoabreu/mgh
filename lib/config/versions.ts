/**
 * Versões congeladas da Fase A. Fonte: docs/002/00-mapa-de-fatiamento.md.
 * Nenhum valor aqui pode ser alterado sem decisão metodológica registrada.
 */
export const PHASE_A_VERSIONS = Object.freeze({
  phase: "A",
  instrument: "MGH-P1.0",
  itemBank: "BANK-0.2",
  itemBankStatus: "DRAFT" as const,
  scoring: "SCORE-P1.0",
  sequence: "ANX-004 v0.1",
  goldenDataset: "GOLDEN-P1.0",
} as const);

export type PhaseAInstrumentVersion = typeof PHASE_A_VERSIONS.instrument;
export type PhaseAItemBankVersion = typeof PHASE_A_VERSIONS.itemBank;
export type PhaseAScoringVersion = typeof PHASE_A_VERSIONS.scoring;

/** Gate metodológico: publicação exige banco canônico fechado. */
export const ITEM_BANK_PUBLISHABLE = false as const;

/** Contagens estruturais — sem qualquer texto de item ou opção. */
export const PHASE_A_SHAPE = Object.freeze({
  scenarios: 48,
  scoredResponses: 56,
  pcChoices: 24,
  prcForcedChoices: 8,
  prcIndependentGroups: 4,
  prcIndependentRatingsPerGroup: 3,
  prcIndependentRatings: 12,
  drItems: 12,
  selfItems: 8,
  internalRgItems: 6,
  firstScenario: "PC-001",
  lastScenario: "PC-011R",
  drRandomizable: false as const,
  selfScored: false as const,
  feedbackScored: false as const,
  rgScored: false as const,
} as const);
