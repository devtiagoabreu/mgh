/**
 * Códigos de erro do Score Engine da Fase A.
 * Nenhum código aqui cria regra de score: são apenas estados de falha.
 */
export const SCORE_ERROR_CODES = [
  "VERSION_MISMATCH",
  "CONFIG_ERROR",
  "INCOMPLETE_INPUT",
  "UNKNOWN_OPTION",
  "NON_SCORED_DOMAIN_PRESENT",
] as const;

export type ScoreErrorCode = (typeof SCORE_ERROR_CODES)[number];

/** Erro tipado e determinístico; nunca carrega relógio, IO ou score parcial. */
export class ScoreEngineError extends Error {
  readonly code: ScoreErrorCode;
  readonly detail: string;

  constructor(code: ScoreErrorCode, detail: string) {
    super(`${code}: ${detail}`);
    this.name = "ScoreEngineError";
    this.code = code;
    this.detail = detail;
  }
}

export function versionMismatch(detail: string): ScoreEngineError {
  return new ScoreEngineError("VERSION_MISMATCH", detail);
}

export function configError(detail: string): ScoreEngineError {
  return new ScoreEngineError("CONFIG_ERROR", detail);
}

export function incompleteInput(detail: string): ScoreEngineError {
  return new ScoreEngineError("INCOMPLETE_INPUT", detail);
}

export function unknownOption(detail: string): ScoreEngineError {
  return new ScoreEngineError("UNKNOWN_OPTION", detail);
}

export function nonScoredDomain(detail: string): ScoreEngineError {
  return new ScoreEngineError("NON_SCORED_DOMAIN_PRESENT", detail);
}
