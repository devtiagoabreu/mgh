import type { ScoreErrorCode } from "./errors";

/** Domínios que podem entrar no cálculo. SELF/feedback/RG nunca entram. */
export type ScoredDomain = "PC" | "PRC" | "DR";
export type NonScoredDomain = "SELF" | "FEEDBACK" | "RG";
export type ResponseDomain = ScoredDomain | NonScoredDomain;

/** Versões da entrada. Nenhuma é inferida pelo motor. */
export interface ScoreVersionSet {
  instrument: string;
  itemBank: string;
  scoring: string;
  sequence?: string;
  goldenDataset?: string;
}

/** Compatibilidade declarada pela regra injetada. */
export interface ScoreVersionCompatibility {
  instrument: readonly string[];
  itemBank: readonly string[];
  scoring: readonly string[];
  sequence?: readonly string[];
  goldenDataset?: readonly string[];
}

export interface ChoiceOptionRule {
  optionId: string;
  targetId: string;
  weight: number;
}

export interface ItemRuleBase {
  itemId: string;
  domain: ScoredDomain;
  /** Posição canônica no itemOrder; usada para checar a ordem do DR. */
  order: number;
  targets: readonly string[];
  randomizable: boolean;
}

export interface ChoiceItemRule extends ItemRuleBase {
  mode: "CHOICE";
  options: readonly ChoiceOptionRule[];
}

export interface RatingItemRule extends ItemRuleBase {
  mode: "RATING";
  min: number;
  max: number;
}

export type ItemRule = ChoiceItemRule | RatingItemRule;

/**
 * Operações matemáticas genéricas. Não são regras metodológicas novas:
 * a regra injetada escolhe quais operações aplicar e sobre quais alvos.
 */
export type DerivationOp =
  | "SUM_WEIGHTS_BY_TARGET"
  | "RELATIVE_SHARE"
  | "TIE_AWARE_RANKING"
  | "RANK_GAP"
  | "NORMALIZED_ENTROPY"
  | "MEAN_BY_TARGET"
  | "LINEAR_NORMALIZE";

export interface DerivationRule {
  id: string;
  op: DerivationOp;
  outputKey: string;
  domain: ScoredDomain;
  itemIds?: readonly string[];
  targets?: readonly string[];
  sourceId?: string;
  min?: number;
  max?: number;
  slots?: readonly (readonly [number, number])[];
}

/** Regras canônicas injetadas. O motor não contém IDs, textos ou pesos. */
export interface ScoringRules {
  schema: "SCORE_RULES_V1";
  compatibleVersions: ScoreVersionCompatibility;
  expectedResponseCount: number;
  itemOrder: readonly string[];
  rulesByItemId: Readonly<Record<string, ItemRule>>;
  derivations: readonly DerivationRule[];
}

/** Uma resposta pontuável já registrada no RAW imutável. */
export interface RawResponse {
  itemId: string;
  domain: ResponseDomain;
  optionId?: string;
  targetId?: string;
  rating?: number;
  sequenceIndex: number;
}

export interface ResponseRaw {
  runId: string;
  responses: readonly RawResponse[];
}

export interface ComputeScoreInput {
  raw: ResponseRaw;
  versions: ScoreVersionSet;
  rules: ScoringRules;
}

export interface RankingGroup {
  value: number;
  targets: readonly string[];
}

export type ScoreValue = number | Record<string, number> | readonly RankingGroup[];

export interface ScoreResult {
  schema: "SCORE_RESULT_V1";
  runId: string;
  versions: ScoreVersionSet;
  rawHash: string;
  rulesHash: string;
  inputHash: string;
  outputHash: string;
  values: Readonly<Record<string, ScoreValue>>;
}

export type GoldenAssertionResult = boolean | string | void;

export type GoldenExpectation =
  | {
      status: "OK";
      expectedOutputHash?: string;
      assert?: (result: ScoreResult) => GoldenAssertionResult;
    }
  | { status: "ERROR"; code: ScoreErrorCode };

export interface GoldenCase {
  id: string;
  input: ComputeScoreInput;
  expectation: GoldenExpectation;
}

export interface GoldenCaseResult {
  id: string;
  ok: boolean;
  expected: string;
  observed: string;
  note?: string;
}

export interface GoldenReport {
  ok: boolean;
  cases: readonly GoldenCaseResult[];
}
