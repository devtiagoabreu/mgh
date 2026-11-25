/**
 * SYNTHETIC FIXTURE — NON-CANONICAL / NÃO CANÔNICO.
 *
 * Todos os IDs, rótulos e pesos abaixo usam o prefixo SYNTHETIC_ e existem
 * apenas para exercitar a matemática do motor. Nenhum option_id, texto de
 * item, texto de opção ou peso canônico de BANK-0.2 / ANX-005 / ANX-015 foi
 * copiado, inferido ou reconstruído. As versões são lidas de lib/config,
 * que é somente leitura para este agente.
 */
import { PHASE_A_SHAPE, PHASE_A_VERSIONS } from "../../lib/config/versions";
import type {
  ChoiceItemRule,
  ChoiceOptionRule,
  ComputeScoreInput,
  DerivationRule,
  ItemRule,
  RawResponse,
  ResponseRaw,
  ScoringRules,
  ScoreVersionSet,
} from "../../lib/engine";

export const NEW_SCORING_VERSION = "SCORE-P1.1-SYNTHETIC" as const;
export const DIVERGENT_SCORING_VERSION = "SCORE-DIVERGENTE-SYNTHETIC" as const;

const PC_TARGETS = [
  "SYNTHETIC_TARGET_D",
  "SYNTHETIC_TARGET_I",
  "SYNTHETIC_TARGET_S",
  "SYNTHETIC_TARGET_C",
] as const;

const PRC_TARGETS = [
  "SYNTHETIC_MODALITY_V",
  "SYNTHETIC_MODALITY_A",
  "SYNTHETIC_MODALITY_C",
] as const;

const PRC_SHORT: Readonly<Record<(typeof PRC_TARGETS)[number], string>> = {
  SYNTHETIC_MODALITY_V: "V",
  SYNTHETIC_MODALITY_A: "A",
  SYNTHETIC_MODALITY_C: "C",
};

const DR_AXES = [
  "SYNTHETIC_AXIS_SPEED",
  "SYNTHETIC_AXIS_IMPACT",
  "SYNTHETIC_AXIS_PERSISTENCE",
  "SYNTHETIC_AXIS_EXTERNALIZATION",
] as const;

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export const PC_ITEM_IDS: readonly string[] = Array.from(
  { length: PHASE_A_SHAPE.pcChoices },
  (_, index) => `SYNTHETIC_PC_ITEM_${pad(index + 1)}`,
);

export const PRC_FORCED_ITEM_IDS: readonly string[] = Array.from(
  { length: PHASE_A_SHAPE.prcForcedChoices },
  (_, index) => `SYNTHETIC_PRC_FORCED_ITEM_${pad(index + 1)}`,
);

export const PRC_RATING_ITEM_IDS: readonly string[] = Array.from(
  { length: PHASE_A_SHAPE.prcIndependentRatings },
  (_, index) => {
    const group = Math.floor(index / PRC_TARGETS.length) + 1;
    const target = PRC_TARGETS[index % PRC_TARGETS.length] as (typeof PRC_TARGETS)[number];
    return `SYNTHETIC_PRC_RATING_ITEM_${pad(group)}_${PRC_SHORT[target]}`;
  },
);

export const DR_ITEM_IDS: readonly string[] = Array.from(
  { length: PHASE_A_SHAPE.drItems },
  (_, index) => `SYNTHETIC_DR_ITEM_${pad(index + 1)}`,
);

function buildDerivations(): readonly DerivationRule[] {
  return [
    {
      id: "synthetic.pc.sum",
      op: "SUM_WEIGHTS_BY_TARGET",
      outputKey: "pc.raw",
      domain: "PC",
      itemIds: PC_ITEM_IDS,
      targets: [...PC_TARGETS],
    },
    {
      id: "synthetic.pc.relative",
      op: "RELATIVE_SHARE",
      outputKey: "pc.relative",
      domain: "PC",
      sourceId: "synthetic.pc.sum",
    },
    {
      id: "synthetic.pc.ranking",
      op: "TIE_AWARE_RANKING",
      outputKey: "pc.ranking",
      domain: "PC",
      sourceId: "synthetic.pc.sum",
    },
    {
      id: "synthetic.pc.gaps",
      op: "RANK_GAP",
      outputKey: "pc.gaps",
      domain: "PC",
      sourceId: "synthetic.pc.ranking",
      slots: [
        [1, 2],
        [2, 3],
      ],
    },
    {
      id: "synthetic.pc.entropy",
      op: "NORMALIZED_ENTROPY",
      outputKey: "pc.entropy",
      domain: "PC",
      sourceId: "synthetic.pc.relative",
    },
    {
      id: "synthetic.prc.forced.sum",
      op: "SUM_WEIGHTS_BY_TARGET",
      outputKey: "prc.forced.raw",
      domain: "PRC",
      itemIds: PRC_FORCED_ITEM_IDS,
      targets: [...PRC_TARGETS],
    },
    {
      id: "synthetic.prc.forced.relative",
      op: "RELATIVE_SHARE",
      outputKey: "prc.forced.relative",
      domain: "PRC",
      sourceId: "synthetic.prc.forced.sum",
    },
    {
      id: "synthetic.prc.independent.mean",
      op: "MEAN_BY_TARGET",
      outputKey: "prc.independent.mean",
      domain: "PRC",
      itemIds: PRC_RATING_ITEM_IDS,
      targets: [...PRC_TARGETS],
    },
    {
      id: "synthetic.prc.independent.normalized",
      op: "LINEAR_NORMALIZE",
      outputKey: "prc.independent.normalized",
      domain: "PRC",
      sourceId: "synthetic.prc.independent.mean",
      min: 1,
      max: 5,
    },
    {
      id: "synthetic.dr.axis.sum",
      op: "SUM_WEIGHTS_BY_TARGET",
      outputKey: "dr.axes.raw",
      domain: "DR",
      itemIds: DR_ITEM_IDS,
      targets: [...DR_AXES],
    },
    {
      id: "synthetic.dr.axis.normalized",
      op: "LINEAR_NORMALIZE",
      outputKey: "dr.axes.normalized",
      domain: "DR",
      sourceId: "synthetic.dr.axis.sum",
      min: 3,
      max: 12,
    },
  ];
}

/** Regras sintéticas frescas; o motor nunca fornece IDs ou pesos próprios. */
export function createSyntheticRules(): ScoringRules {
  const pcRules: ChoiceItemRule[] = PC_ITEM_IDS.map((itemId) => ({
    itemId,
    domain: "PC",
    order: 0,
    targets: [...PC_TARGETS],
    randomizable: true,
    mode: "CHOICE",
    options: PC_TARGETS.map((targetId, index) => ({
      optionId: `${itemId}_OPT_${index + 1}`,
      targetId,
      weight: 1,
    })),
  }));

  const prcForcedRules: ChoiceItemRule[] = PRC_FORCED_ITEM_IDS.map((itemId) => ({
    itemId,
    domain: "PRC",
    order: 0,
    targets: [...PRC_TARGETS],
    randomizable: true,
    mode: "CHOICE",
    options: PRC_TARGETS.map((targetId, index) => ({
      optionId: `${itemId}_OPT_${index + 1}`,
      targetId,
      weight: 1,
    })),
  }));

  const prcRatingRules: ItemRule[] = PRC_RATING_ITEM_IDS.map((itemId) => {
    const target = PRC_TARGETS.find((candidate) => itemId.endsWith(PRC_SHORT[candidate]));
    if (!target) throw new Error("synthetic fixture target not found");
    return {
      itemId,
      domain: "PRC",
      order: 0,
      targets: [target],
      randomizable: false,
      mode: "RATING",
      min: 1,
      max: 5,
    };
  });

  const drRules: ChoiceItemRule[] = DR_ITEM_IDS.map((itemId, index) => {
    const axis = DR_AXES[Math.floor(index / 3)] as (typeof DR_AXES)[number];
    const syntheticWeights = axis === "SYNTHETIC_AXIS_PERSISTENCE"
      ? [1, 2, 3, 4]
      : [4, 3, 2, 1];
    return {
      itemId,
      domain: "DR",
      order: 0,
      targets: [axis],
      randomizable: false,
      mode: "CHOICE",
      options: syntheticWeights.map((weight, optionIndex) => ({
        optionId: `${itemId}_OPT_${optionIndex + 1}`,
        targetId: axis,
        weight,
      })),
    };
  });

  const orderedRules = [...pcRules, ...prcForcedRules, ...prcRatingRules, ...drRules].map(
    (rule, index) => ({ ...rule, order: index }),
  ) as ItemRule[];

  const rulesByItemId: Record<string, ItemRule> = {};
  for (const rule of orderedRules) rulesByItemId[rule.itemId] = rule;

  return {
    schema: "SCORE_RULES_V1",
    compatibleVersions: {
      instrument: [PHASE_A_VERSIONS.instrument],
      itemBank: [PHASE_A_VERSIONS.itemBank],
      scoring: [PHASE_A_VERSIONS.scoring, NEW_SCORING_VERSION],
      sequence: [PHASE_A_VERSIONS.sequence],
      goldenDataset: [PHASE_A_VERSIONS.goldenDataset],
    },
    expectedResponseCount: PHASE_A_SHAPE.scoredResponses,
    itemOrder: orderedRules.map((rule) => rule.itemId),
    rulesByItemId,
    derivations: buildDerivations(),
  };
}

export function createSyntheticVersions(): ScoreVersionSet {
  return {
    instrument: PHASE_A_VERSIONS.instrument,
    itemBank: PHASE_A_VERSIONS.itemBank,
    scoring: PHASE_A_VERSIONS.scoring,
    sequence: PHASE_A_VERSIONS.sequence,
    goldenDataset: PHASE_A_VERSIONS.goldenDataset,
  };
}

/** 56 respostas sintéticas, na ordem canônica do fixture. */
export function createCompleteRaw(runId = "SYNTHETIC_RUN_A"): ResponseRaw {
  const responses: RawResponse[] = [];
  let sequenceIndex = 0;

  for (const itemId of PC_ITEM_IDS) {
    const itemIndex = PC_ITEM_IDS.indexOf(itemId);
    const targetIndex = Math.min(3, Math.floor(itemIndex / 6));
    responses.push({
      itemId,
      domain: "PC",
      optionId: `${itemId}_OPT_${targetIndex + 1}`,
      sequenceIndex: sequenceIndex++,
    });
  }

  for (const itemId of PRC_FORCED_ITEM_IDS) {
    const itemIndex = PRC_FORCED_ITEM_IDS.indexOf(itemId);
    const targetIndex = itemIndex < 4 ? 0 : itemIndex < 7 ? 1 : 2;
    responses.push({
      itemId,
      domain: "PRC",
      optionId: `${itemId}_OPT_${targetIndex + 1}`,
      sequenceIndex: sequenceIndex++,
    });
  }

  const syntheticRatings: Readonly<Record<string, number>> = { V: 5, A: 4, C: 3 };
  for (const itemId of PRC_RATING_ITEM_IDS) {
    const itemIndex = PRC_RATING_ITEM_IDS.indexOf(itemId);
    const group = Math.floor(itemIndex / PRC_TARGETS.length) + 1;
    const rating = group === 3 && itemId.endsWith("_V") ? 4 : (syntheticRatings[itemId.slice(-1)] as number);
    responses.push({
      itemId,
      domain: "PRC",
      targetId: PRC_TARGETS.find((target) => itemId.endsWith(PRC_SHORT[target])),
      rating,
      sequenceIndex: sequenceIndex++,
    });
  }

  for (const itemId of DR_ITEM_IDS) {
    const itemIndex = DR_ITEM_IDS.indexOf(itemId);
    const isPersistence =
      DR_AXES[Math.floor(itemIndex / 3)] === "SYNTHETIC_AXIS_PERSISTENCE";
    responses.push({
      itemId,
      domain: "DR",
      optionId: `${itemId}_OPT_${isPersistence ? 3 : 2}`,
      sequenceIndex: sequenceIndex++,
    });
  }

  return { runId, responses };
}

export function createBaseInput(): ComputeScoreInput {
  return {
    raw: createCompleteRaw(),
    versions: createSyntheticVersions(),
    rules: createSyntheticRules(),
  };
}

export function cloneInput(input: ComputeScoreInput): ComputeScoreInput {
  return JSON.parse(JSON.stringify(input)) as ComputeScoreInput;
}

/** Acesso mutável somente para montar variantes inválidas dos golden cases. */
export function mutableRules(
  input: ComputeScoreInput,
): Record<string, ItemRule> {
  return input.rules.rulesByItemId as Record<string, ItemRule>;
}

export function mutableOptions(
  rule: ItemRule,
): ChoiceOptionRule[] {
  return (rule as ChoiceItemRule).options as ChoiceOptionRule[];
}
