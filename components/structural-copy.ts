/**
 * Textos de domínio da superfície estrutural (P6).
 *
 * TODO o texto de instrumento, cenário, opção, SELF, feedback, confirmação e
 * consentimento é o marcador sintético obrigatório. Nenhuma redação definitiva,
 * canônica ou jurídica é produzida aqui.
 */
export const PLACEHOLDER = "[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]";

/** Contagens estruturais do plano operacional — não são dados de resposta. */
export const SCENARIO_TOTAL = 48;
export const SELF_TOTAL = 8;

export const AUTOSAVE_LABELS = {
  idle: "Nenhuma resposta registrada nesta demonstração.",
  saving: "Registrando resposta…",
  saved: "Resposta registrada nesta demonstração.",
  error: "Não foi possível registrar. Nada foi salvo.",
} as const;

export type AutosaveState = keyof typeof AUTOSAVE_LABELS;

/** Rótulos de controle (UI), distintos do texto de consentimento. */
export const CONSENT_CONTROLS = {
  accept: "Aceitar",
  decline: "Não aceitar",
} as const;

export type ConsentDecision = keyof typeof CONSENT_CONTROLS;
