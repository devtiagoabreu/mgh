import { canonicalHash, sortedRecord } from "./canonical";
import {
  configError,
  incompleteInput,
  nonScoredDomain,
  ScoreEngineError,
  unknownOption,
  versionMismatch,
} from "./errors";
import type {
  ComputeScoreInput,
  DerivationOp,
  DerivationRule,
  GoldenCase,
  GoldenCaseResult,
  GoldenReport,
  ItemRule,
  RankingGroup,
  RawResponse,
  ScoreResult,
  ScoreValue,
  ScoringRules,
  ScoreVersionSet,
} from "./types";

const RULES_SCHEMA = "SCORE_RULES_V1" as const;
const RESULT_SCHEMA = "SCORE_RESULT_V1" as const;

const SCORED_DOMAINS = new Set(["PC", "PRC", "DR"]);

/**
 * SELF, feedback pós-teste e RG-01..RG-06 são domínios não pontuáveis.
 * A detecção é estrutural (domínio/campo), não depende de texto canônico.
 */
const NON_SCORED_TOKEN =
  /(^|[-_:])(SELF|FEEDBACK|RG|RELATION_GROUP)([-_:]|$)/i;

/** Nomes proibidos: o motor não implementa nenhuma dessas métricas. */
const PROHIBITED_METRIC =
  /(balance|dr[-_.]?total|master|consistency|honest|lie|diagnos|competenc|resilien|stabilit|compatib)/i;

const DERIVATION_OPS: ReadonlySet<DerivationOp> = new Set([
  "SUM_WEIGHTS_BY_TARGET",
  "RELATIVE_SHARE",
  "TIE_AWARE_RANKING",
  "RANK_GAP",
  "NORMALIZED_ENTROPY",
  "MEAN_BY_TARGET",
  "LINEAR_NORMALIZE",
]);

const SOURCE_REQUIRED_OPS: ReadonlySet<DerivationOp> = new Set([
  "RELATIVE_SHARE",
  "TIE_AWARE_RANKING",
  "RANK_GAP",
  "NORMALIZED_ENTROPY",
  "LINEAR_NORMALIZE",
]);

type NumericMap = Record<string, number>;

function isNumericMap(value: ScoreValue): value is NumericMap {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every(
      (entry) => typeof entry === "number" && Number.isFinite(entry),
    )
  );
}

function isRankingGroups(value: ScoreValue): value is readonly RankingGroup[] {
  return (
    Array.isArray(value) &&
    value.every(
      (group) =>
        typeof group === "object" &&
        group !== null &&
        typeof group.value === "number" &&
        Number.isFinite(group.value) &&
        Array.isArray(group.targets),
    )
  );
}

function assertNoNonScoredDomain(input: ComputeScoreInput): void {
  const rawRecord = input.raw as unknown as Record<string, unknown>;
  for (const key of Object.keys(rawRecord)) {
    if (NON_SCORED_TOKEN.test(key)) {
      throw nonScoredDomain(`raw field ${key} is not scoreable`);
    }
  }
  for (const response of input.raw.responses) {
    for (const token of [response.domain, response.itemId, response.targetId, response.optionId]) {
      if (typeof token === "string" && NON_SCORED_TOKEN.test(token)) {
        throw nonScoredDomain(`response contains non-scored token ${token}`);
      }
    }
  }
  for (const itemId of input.rules.itemOrder) {
    if (NON_SCORED_TOKEN.test(itemId)) {
      throw nonScoredDomain(`itemOrder contains non-scored item ${itemId}`);
    }
  }
  for (const [itemId, rule] of Object.entries(input.rules.rulesByItemId)) {
    if (NON_SCORED_TOKEN.test(itemId) || !SCORED_DOMAINS.has(rule.domain)) {
      throw nonScoredDomain(`rule ${itemId} is not scoreable`);
    }
  }
  for (const derivation of input.rules.derivations) {
    for (const token of [derivation.id, derivation.outputKey]) {
      if (NON_SCORED_TOKEN.test(token) || PROHIBITED_METRIC.test(token)) {
        throw nonScoredDomain(`derivation ${token} is not scoreable`);
      }
    }
  }
}

function assertVersionsMatch(
  versions: ScoreVersionSet,
  compatibility: ScoringRules["compatibleVersions"],
): void {
  for (const name of ["instrument", "itemBank", "scoring"] as const) {
    if (typeof versions[name] !== "string" || versions[name].length === 0) {
      throw versionMismatch(`${name} is required`);
    }
  }
  const pairs: readonly (readonly [string, string | undefined, readonly string[] | undefined])[] = [
    ["instrument", versions.instrument, compatibility.instrument],
    ["itemBank", versions.itemBank, compatibility.itemBank],
    ["scoring", versions.scoring, compatibility.scoring],
    ["sequence", versions.sequence, compatibility.sequence],
    ["goldenDataset", versions.goldenDataset, compatibility.goldenDataset],
  ];
  for (const [name, value, allowed] of pairs) {
    if (allowed === undefined) continue;
    if (typeof value !== "string" || !allowed.includes(value)) {
      throw versionMismatch(`${name} ${String(value)} is not compatible`);
    }
  }
}

function validateTargets(rule: ItemRule): void {
  if (!Array.isArray(rule.targets) || rule.targets.length === 0) {
    throw configError(`rule ${rule.itemId} has no targets`);
  }
  const seen = new Set<string>();
  for (const target of rule.targets) {
    if (typeof target !== "string" || target.length === 0 || seen.has(target)) {
      throw configError(`rule ${rule.itemId} has invalid target ${String(target)}`);
    }
    seen.add(target);
  }
}

function validateItemRule(rule: ItemRule, index: number): void {
  const itemId = rule.itemId;
  if (itemId.length === 0) throw configError("empty itemId in rule");
  if (!SCORED_DOMAINS.has(rule.domain)) {
    throw configError(`rule ${rule.itemId} has unknown domain ${rule.domain}`);
  }
  if (rule.order !== index) {
    throw configError(`rule ${rule.itemId} order diverges from itemOrder`);
  }
  if (typeof rule.randomizable !== "boolean") {
    throw configError(`rule ${rule.itemId} has invalid randomizable flag`);
  }
  if (rule.domain === "DR" && rule.randomizable) {
    throw configError(`DR item ${rule.itemId} cannot be randomizable`);
  }
  validateTargets(rule);

  if (rule.mode === "CHOICE") {
    if (!Array.isArray(rule.options) || rule.options.length === 0) {
      throw configError(`rule ${rule.itemId} has no options`);
    }
    const seen = new Set<string>();
    for (const option of rule.options) {
      if (
        typeof option.optionId !== "string" ||
        option.optionId.length === 0 ||
        seen.has(option.optionId)
      ) {
        throw configError(`rule ${rule.itemId} has invalid option ${String(option.optionId)}`);
      }
      seen.add(option.optionId);
      if (!rule.targets.includes(option.targetId)) {
        throw configError(`option ${option.optionId} targets unknown target`);
      }
      if (!Number.isFinite(option.weight) || option.weight < 0) {
        throw configError(`option ${option.optionId} has invalid weight`);
      }
    }
    return;
  }

  if (rule.mode !== "RATING") {
    throw configError(`rule ${itemId} has unknown mode`);
  }
  if (
    !Number.isFinite(rule.min) ||
    !Number.isFinite(rule.max) ||
    rule.min >= rule.max
  ) {
    throw configError(`rating rule ${rule.itemId} has invalid range`);
  }
}

function isSubsequenceOfItemOrder(
  candidate: readonly string[],
  itemOrder: readonly string[],
): boolean {
  let cursor = 0;
  for (const value of candidate) {
    while (cursor < itemOrder.length && itemOrder[cursor] !== value) cursor += 1;
    if (cursor === itemOrder.length) return false;
    cursor += 1;
  }
  return true;
}

function validateDerivations(rules: ScoringRules): void {
  const ids = new Set<string>();
  const outputKeys = new Set<string>();
  rules.derivations.forEach((derivation, index) => {
    if (typeof derivation.id !== "string" || derivation.id.length === 0) {
      throw configError("derivation has empty id");
    }
    if (ids.has(derivation.id)) {
      throw configError(`duplicate derivation id ${derivation.id}`);
    }
    ids.add(derivation.id);
    if (
      typeof derivation.outputKey !== "string" ||
      derivation.outputKey.length === 0 ||
      outputKeys.has(derivation.outputKey)
    ) {
      throw configError(`invalid derivation outputKey ${derivation.outputKey}`);
    }
    outputKeys.add(derivation.outputKey);
    if (!DERIVATION_OPS.has(derivation.op)) {
      throw configError(`unknown derivation op ${String(derivation.op)}`);
    }
    if (!SCORED_DOMAINS.has(derivation.domain)) {
      throw configError(`derivation ${derivation.id} has unknown domain`);
    }
    if (PROHIBITED_METRIC.test(derivation.id) || PROHIBITED_METRIC.test(derivation.outputKey)) {
      throw configError(`derivation ${derivation.id} requests a prohibited metric`);
    }
    if (SOURCE_REQUIRED_OPS.has(derivation.op) && !derivation.sourceId) {
      throw configError(`derivation ${derivation.id} requires sourceId`);
    }
    if (derivation.sourceId) {
      const earlier = rules.derivations
        .slice(0, index)
        .some((candidate) => candidate.id === derivation.sourceId);
      if (!earlier) {
        throw configError(`derivation ${derivation.id} references unknown source`);
      }
    }
    if (derivation.itemIds !== undefined) {
      if (!isSubsequenceOfItemOrder(derivation.itemIds, rules.itemOrder)) {
        throw configError(`derivation ${derivation.id} itemIds are out of canonical order`);
      }
      for (const itemId of derivation.itemIds) {
        const rule = rules.rulesByItemId[itemId];
        if (!rule || rule.domain !== derivation.domain) {
          throw configError(`derivation ${derivation.id} selects an invalid item`);
        }
      }
    }
    if (derivation.targets !== undefined) {
      if (derivation.targets.length === 0) {
        throw configError(`derivation ${derivation.id} has empty targets`);
      }
      const seen = new Set<string>();
      for (const target of derivation.targets) {
        if (typeof target !== "string" || seen.has(target)) {
          throw configError(`derivation ${derivation.id} has invalid target`);
        }
        seen.add(target);
      }
    }
    if (derivation.op === "LINEAR_NORMALIZE") {
      if (
        !Number.isFinite(derivation.min) ||
        !Number.isFinite(derivation.max) ||
        (derivation.min as number) >= (derivation.max as number)
      ) {
        throw configError(`derivation ${derivation.id} has invalid normalization range`);
      }
    }
    if (derivation.op === "RANK_GAP") {
      const slots = derivation.slots ?? [
        [1, 2],
        [2, 3],
      ];
      for (const slot of slots) {
        if (
          !Array.isArray(slot) ||
          slot.length !== 2 ||
          !Number.isInteger(slot[0]) ||
          !Number.isInteger(slot[1]) ||
          slot[0] < 1 ||
          slot[1] < 1
        ) {
          throw configError(`derivation ${derivation.id} has invalid slots`);
        }
      }
    }
  });
}

function validateRules(rules: ScoringRules): void {
  if (rules.schema !== RULES_SCHEMA) {
    throw configError("unsupported scoring rules schema");
  }
  if (
    !Number.isInteger(rules.expectedResponseCount) ||
    rules.expectedResponseCount <= 0 ||
    rules.itemOrder.length !== rules.expectedResponseCount
  ) {
    throw configError("itemOrder length diverges from expectedResponseCount");
  }
  const seen = new Set<string>();
  rules.itemOrder.forEach((itemId, index) => {
    if (typeof itemId !== "string" || itemId.length === 0 || seen.has(itemId)) {
      throw configError(`invalid item at position ${index}`);
    }
    seen.add(itemId);
    const rule = rules.rulesByItemId[itemId];
    if (!rule) throw configError(`missing rule for ${itemId}`);
    if (rule.itemId !== itemId) throw configError(`rule key mismatch for ${itemId}`);
    validateItemRule(rule, index);
  });
  for (const itemId of Object.keys(rules.rulesByItemId)) {
    if (!seen.has(itemId)) {
      throw configError(`rule ${itemId} is absent from itemOrder`);
    }
  }
  validateDerivations(rules);
}

function validateResponses(
  input: ComputeScoreInput,
): Map<string, RawResponse> {
  const { raw, rules } = input;
  if (typeof raw.runId !== "string" || raw.runId.length === 0) {
    throw configError("runId is required");
  }
  if (!Array.isArray(raw.responses)) {
    throw incompleteInput("responses are missing");
  }
  if (raw.responses.length !== rules.expectedResponseCount) {
    throw incompleteInput(
      `expected ${rules.expectedResponseCount} responses, received ${raw.responses.length}`,
    );
  }

  const byItemId = new Map<string, RawResponse>();
  for (const response of raw.responses) {
    if (!rules.itemOrder.includes(response.itemId)) {
      throw unknownOption(`unknown item ${response.itemId}`);
    }
    const rule = rules.rulesByItemId[response.itemId];
    if (!rule) throw configError(`missing rule for ${response.itemId}`);
    if (response.domain !== rule.domain) {
      throw configError(`domain mismatch for ${response.itemId}`);
    }
    if (byItemId.has(response.itemId)) {
      throw incompleteInput(`duplicate response for ${response.itemId}`);
    }
    byItemId.set(response.itemId, response);

    if (rule.mode === "CHOICE") {
      if (typeof response.optionId !== "string") {
        throw incompleteInput(`optionId missing for ${response.itemId}`);
      }
      if (!rule.options.some((option) => option.optionId === response.optionId)) {
        throw unknownOption(`unknown option ${response.optionId}`);
      }
    } else {
      if (
        typeof response.targetId !== "string" ||
        !rule.targets.includes(response.targetId)
      ) {
        throw unknownOption(`unknown rating target ${String(response.targetId)}`);
      }
      if (
        typeof response.rating !== "number" ||
        !Number.isFinite(response.rating) ||
        response.rating < rule.min ||
        response.rating > rule.max
      ) {
        throw unknownOption(`out-of-range rating for ${response.itemId}`);
      }
    }

    if (
      rule.domain === "DR" &&
      response.sequenceIndex !== rule.order
    ) {
      throw configError(
        `DR_ORDER_DIVERGENCE: ${response.itemId} received at ${response.sequenceIndex}, canonical ${rule.order}`,
      );
    }
  }
  if (byItemId.size !== rules.expectedResponseCount) {
    throw incompleteInput("response coverage is incomplete");
  }
  return byItemId;
}

function selectedItemIds(rules: ScoringRules, derivation: DerivationRule): readonly string[] {
  return derivation.itemIds !== undefined
    ? derivation.itemIds
    : rules.itemOrder.filter(
        (itemId) => rules.rulesByItemId[itemId]?.domain === derivation.domain,
      );
}

function resolveTargets(
  rules: ScoringRules,
  derivation: DerivationRule,
  itemIds: readonly string[],
): readonly string[] {
  if (derivation.targets !== undefined) return derivation.targets;
  const found = new Set<string>();
  for (const itemId of itemIds) {
    for (const target of rules.rulesByItemId[itemId]?.targets ?? []) {
      found.add(target);
    }
  }
  return [...found].sort((left, right) => (left < right ? -1 : left > right ? 1 : 0));
}

function zeroMap(targets: readonly string[]): NumericMap {
  const map: NumericMap = {};
  for (const target of targets) map[target] = 0;
  return map;
}

function sourceValue(
  derivation: DerivationRule,
  state: ReadonlyMap<string, ScoreValue>,
): ScoreValue {
  const value = derivation.sourceId ? state.get(derivation.sourceId) : undefined;
  if (value === undefined) {
    throw configError(`derivation ${derivation.id} has no source value`);
  }
  return value;
}

function evaluateDerivation(
  derivation: DerivationRule,
  rules: ScoringRules,
  responses: ReadonlyMap<string, RawResponse>,
  state: ReadonlyMap<string, ScoreValue>,
): ScoreValue {
  switch (derivation.op) {
    case "SUM_WEIGHTS_BY_TARGET": {
      const itemIds = selectedItemIds(rules, derivation);
      const targets = resolveTargets(rules, derivation, itemIds);
      if (targets.length === 0) throw configError(`derivation ${derivation.id} has no targets`);
      const accumulator = zeroMap(targets);
      for (const itemId of itemIds) {
        const rule = rules.rulesByItemId[itemId];
        const response = responses.get(itemId);
        if (!rule || rule.mode !== "CHOICE" || !response) {
          throw configError(`derivation ${derivation.id} selected a non-choice item`);
        }
        const option = rule.options.find((entry) => entry.optionId === response.optionId);
        if (!option || !targets.includes(option.targetId)) {
          throw configError(`derivation ${derivation.id} has an unmapped option`);
        }
        accumulator[option.targetId] = (accumulator[option.targetId] ?? 0) + option.weight;
      }
      return sortedRecord(accumulator);
    }

    case "MEAN_BY_TARGET": {
      const itemIds = selectedItemIds(rules, derivation);
      const targets = resolveTargets(rules, derivation, itemIds);
      if (targets.length === 0) throw configError(`derivation ${derivation.id} has no targets`);
      const sums = zeroMap(targets);
      const counts = zeroMap(targets);
      for (const itemId of itemIds) {
        const rule = rules.rulesByItemId[itemId];
        const response = responses.get(itemId);
        if (!rule || rule.mode !== "RATING" || !response) {
          throw configError(`derivation ${derivation.id} selected a non-rating item`);
        }
        const target = response.targetId as string;
        if (!targets.includes(target) || typeof response.rating !== "number") {
          throw configError(`derivation ${derivation.id} has an invalid rating`);
        }
        sums[target] = (sums[target] ?? 0) + response.rating;
        counts[target] = (counts[target] ?? 0) + 1;
      }
      const means: NumericMap = {};
      for (const target of targets) {
        const count = counts[target] ?? 0;
        if (count === 0) throw configError(`derivation ${derivation.id} has an empty target`);
        means[target] = (sums[target] ?? 0) / count;
      }
      return sortedRecord(means);
    }

    case "RELATIVE_SHARE": {
      const source = sourceValue(derivation, state);
      if (!isNumericMap(source)) throw configError(`derivation ${derivation.id} needs a numeric map`);
      const values = Object.values(source);
      const total = values.reduce((sum, value) => sum + value, 0);
      if (total === 0) throw configError(`derivation ${derivation.id} has zero total`);
      const relative: NumericMap = {};
      for (const [key, value] of Object.entries(source)) relative[key] = value / total;
      return sortedRecord(relative);
    }

    case "TIE_AWARE_RANKING": {
      const source = sourceValue(derivation, state);
      if (!isNumericMap(source)) throw configError(`derivation ${derivation.id} needs a numeric map`);
      const groups = new Map<number, string[]>();
      for (const [target, value] of Object.entries(source)) {
        const bucket = groups.get(value) ?? [];
        bucket.push(target);
        groups.set(value, bucket);
      }
      const ranking: RankingGroup[] = [...groups.entries()]
        .sort(([left], [right]) => right - left)
        .map(([value, targets]) => ({
          value,
          targets: [...targets].sort((left, right) =>
            left < right ? -1 : left > right ? 1 : 0,
          ),
        }));
      return ranking;
    }

    case "RANK_GAP": {
      const source = sourceValue(derivation, state);
      if (!isRankingGroups(source)) throw configError(`derivation ${derivation.id} needs a ranking`);
      if (source.length === 0) throw configError(`derivation ${derivation.id} has empty ranking`);
      const slots = derivation.slots ?? [
        [1, 2],
        [2, 3],
      ];
      const valueAt = (slot: number): number =>
        (source[slot - 1] ?? source[source.length - 1]).value;
      const gaps: NumericMap = {};
      for (const [first, second] of slots) {
        gaps[`GAP${first}${second}`] = valueAt(first) - valueAt(second);
      }
      return sortedRecord(gaps);
    }

    case "NORMALIZED_ENTROPY": {
      const source = sourceValue(derivation, state);
      if (!isNumericMap(source)) throw configError(`derivation ${derivation.id} needs a numeric map`);
      const size = Object.keys(source).length;
      if (size === 0) throw configError(`derivation ${derivation.id} has empty entropy source`);
      if (size === 1) return 0;
      const denominator = Math.log(size);
      const entropy = Object.values(source).reduce((sum, probability) => {
        if (probability < 0) throw configError(`derivation ${derivation.id} has negative probability`);
        return probability === 0 ? sum : sum - probability * Math.log(probability);
      }, 0);
      return entropy / denominator;
    }

    case "LINEAR_NORMALIZE": {
      const source = sourceValue(derivation, state);
      if (!isNumericMap(source)) throw configError(`derivation ${derivation.id} needs a numeric map`);
      const min = derivation.min as number;
      const max = derivation.max as number;
      if (max <= min) throw configError(`derivation ${derivation.id} has invalid range`);
      const normalized: NumericMap = {};
      for (const [key, value] of Object.entries(source)) {
        normalized[key] = ((value - min) / (max - min)) * 100;
      }
      return sortedRecord(normalized);
    }
  }
}

function snapshotVersions(versions: ScoreVersionSet): ScoreVersionSet {
  const entries: readonly (readonly [string, string | undefined])[] = [
    ["instrument", versions.instrument],
    ["itemBank", versions.itemBank],
    ["scoring", versions.scoring],
    ["sequence", versions.sequence],
    ["goldenDataset", versions.goldenDataset],
  ];
  const snapshot: Record<string, string> = {};
  for (const [key, value] of entries) {
    if (value !== undefined) snapshot[key] = value;
  }
  return sortedRecord(snapshot) as unknown as ScoreVersionSet;
}

/**
 * Score Engine puro. Entrada = RAW + versões + regras injetadas.
 * Saída = valores derivados e hashes determinísticos, ou erro tipado.
 * Nenhum caminho de código acessa DB, rede, relógio, random, env ou IA.
 */
export function computeScore(input: ComputeScoreInput): ScoreResult {
  assertNoNonScoredDomain(input);
  assertVersionsMatch(input.versions, input.rules.compatibleVersions);
  validateRules(input.rules);
  const responses = validateResponses(input);

  const state = new Map<string, ScoreValue>();
  const values: Record<string, ScoreValue> = {};
  for (const derivation of input.rules.derivations) {
    const value = evaluateDerivation(derivation, input.rules, responses, state);
    state.set(derivation.id, value);
    values[derivation.outputKey] = value;
  }

  const base = {
    schema: RESULT_SCHEMA,
    runId: input.raw.runId,
    versions: snapshotVersions(input.versions),
    rawHash: canonicalHash(input.raw),
    rulesHash: canonicalHash(input.rules),
    inputHash: canonicalHash({
      raw: input.raw,
      versions: input.versions,
      rules: input.rules,
    }),
    values: sortedRecord(values),
  };
  return { ...base, outputHash: canonicalHash(base) };
}

function verifyOne(caseItem: GoldenCase): GoldenCaseResult {
  const expected =
    caseItem.expectation.status === "OK"
      ? `OK${caseItem.expectation.expectedOutputHash ? ` ${caseItem.expectation.expectedOutputHash}` : ""}`
      : `ERROR ${caseItem.expectation.code}`;

  try {
    const result = computeScore(caseItem.input);
    if (caseItem.expectation.status === "ERROR") {
      return {
        id: caseItem.id,
        ok: false,
        expected,
        observed: `OK ${result.outputHash}`,
      };
    }
    const notes: string[] = [];
    if (
      caseItem.expectation.expectedOutputHash &&
      result.outputHash !== caseItem.expectation.expectedOutputHash
    ) {
      notes.push(`outputHash diverged: ${result.outputHash}`);
    }
    if (caseItem.expectation.assert) {
      const assertion = caseItem.expectation.assert(result);
      if (assertion === false) notes.push("assertion returned false");
      if (typeof assertion === "string" && assertion.length > 0) notes.push(assertion);
    }
    return {
      id: caseItem.id,
      ok: notes.length === 0,
      expected,
      observed: `OK ${result.outputHash}`,
      ...(notes.length > 0 ? { note: notes.join("; ") } : {}),
    };
  } catch (error) {
    const observed =
      error instanceof ScoreEngineError
        ? `ERROR ${error.code}: ${error.detail}`
        : `THROWN ${String(error)}`;
    const ok =
      caseItem.expectation.status === "ERROR" &&
      error instanceof ScoreEngineError &&
      error.code === caseItem.expectation.code;
    return { id: caseItem.id, ok, expected, observed };
  }
}

/** Executa golden cases sintéticos sem vitest, banco, rede ou relógio. */
export function verifyGoldenCases(cases: readonly GoldenCase[]): GoldenReport {
  const results = cases.map(verifyOne);
  return { ok: results.every((result) => result.ok), cases: results };
}
