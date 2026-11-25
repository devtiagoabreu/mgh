export { canonicalHash, canonicalize, sortedRecord } from "./canonical";
export {
  configError,
  incompleteInput,
  nonScoredDomain,
  ScoreEngineError,
  SCORE_ERROR_CODES,
  unknownOption,
  versionMismatch,
} from "./errors";
export type { ScoreErrorCode } from "./errors";
export { computeScore, verifyGoldenCases } from "./score";
export type {
  ChoiceItemRule,
  ChoiceOptionRule,
  ComputeScoreInput,
  DerivationOp,
  DerivationRule,
  GoldenAssertionResult,
  GoldenCase,
  GoldenCaseResult,
  GoldenExpectation,
  GoldenReport,
  ItemRule,
  NonScoredDomain,
  RankingGroup,
  RatingItemRule,
  RawResponse,
  ResponseDomain,
  ResponseRaw,
  ScoreResult,
  ScoredDomain,
  ScoreValue,
  ScoringRules,
  ScoreVersionCompatibility,
  ScoreVersionSet,
} from "./types";
