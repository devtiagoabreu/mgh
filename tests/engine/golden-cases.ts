/**
 * Golden cases P5 — todos sintéticos e não canônicos.
 * IDs de itens/opções/alvos/pesos vêm de fixtures.ts (SYNTHETIC_*).
 */
import { computeScore } from "../../lib/engine";
import type { GoldenCase, RawResponse } from "../../lib/engine";
import {
  cloneInput,
  createBaseInput,
  createSyntheticRules,
  DIVERGENT_SCORING_VERSION,
  DR_ITEM_IDS,
  mutableOptions,
  mutableRules,
  NEW_SCORING_VERSION,
} from "./fixtures";

export const GOLDEN_CASE_IDS = [
  "P5-01-complete-56",
  "P5-02-incomplete-55",
  "P5-03-unknown-option",
  "P5-04-version-mismatch",
  "P5-05-missing-rule",
  "P5-06-non-scored-domain",
  "P5-07-dr-reordered",
  "P5-08-identical-recompute",
  "P5-09-new-scoring-version",
] as const;

export type GoldenCaseId = (typeof GOLDEN_CASE_IDS)[number];

export function buildGoldenCases(): readonly GoldenCase[] {
  const complete = createBaseInput();
  const baseline = computeScore(complete);

  const incomplete = {
    ...complete,
    raw: { ...complete.raw, responses: complete.raw.responses.slice(0, -1) },
  };

  const unknownOption = cloneInput(complete);
  (unknownOption.raw.responses[0] as RawResponse).optionId = "SYNTHETIC_UNKNOWN_OPTION";

  const versionMismatch = {
    ...complete,
    versions: { ...complete.versions, scoring: DIVERGENT_SCORING_VERSION },
  };

  const missingRule = cloneInput(complete);
  delete mutableRules(missingRule)[missingRule.rules.itemOrder[0] as string];

  const nonScored = cloneInput(complete);
  const rawRecord = nonScored.raw as unknown as Record<string, unknown>;
  rawRecord.feedback = { synthetic: true };
  (nonScored.raw.responses as RawResponse[]).push({
    itemId: "SELF-01",
    domain: "SELF",
    sequenceIndex: 56,
  });
  (nonScored.raw.responses as RawResponse[]).push({
    itemId: "RG-01",
    domain: "RG",
    sequenceIndex: 57,
  });

  const reordered = cloneInput(complete);
  const drResponses = reordered.raw.responses.filter((response) =>
    response.itemId.startsWith("SYNTHETIC_DR_ITEM_"),
  );
  const first = drResponses[0] as RawResponse;
  const second = drResponses[1] as RawResponse;
  const swap = first.sequenceIndex;
  first.sequenceIndex = second.sequenceIndex;
  second.sequenceIndex = swap;

  const newVersion = createSyntheticRules();
  const changedRule = mutableRules({ ...complete, rules: newVersion })[
    DR_ITEM_IDS[0] as string
  ];
  mutableOptions(changedRule as NonNullable<typeof changedRule>)[1]!.weight = 4;
  const newVersionInput = {
    ...complete,
    versions: { ...complete.versions, scoring: NEW_SCORING_VERSION },
    rules: newVersion,
  };

  return [
    {
      id: "P5-01-complete-56",
      input: complete,
      expectation: {
        status: "OK",
        assert: (result) => {
          if (result.values["pc.raw"] === undefined) return "pc.raw missing";
          if (result.versions.scoring !== complete.versions.scoring) {
            return "scoring version not registered";
          }
          return true;
        },
      },
    },
    {
      id: "P5-02-incomplete-55",
      input: incomplete,
      expectation: { status: "ERROR", code: "INCOMPLETE_INPUT" },
    },
    {
      id: "P5-03-unknown-option",
      input: unknownOption,
      expectation: { status: "ERROR", code: "UNKNOWN_OPTION" },
    },
    {
      id: "P5-04-version-mismatch",
      input: versionMismatch,
      expectation: { status: "ERROR", code: "VERSION_MISMATCH" },
    },
    {
      id: "P5-05-missing-rule",
      input: missingRule,
      expectation: { status: "ERROR", code: "CONFIG_ERROR" },
    },
    {
      id: "P5-06-non-scored-domain",
      input: nonScored,
      expectation: { status: "ERROR", code: "NON_SCORED_DOMAIN_PRESENT" },
    },
    {
      id: "P5-07-dr-reordered",
      input: reordered,
      expectation: { status: "ERROR", code: "CONFIG_ERROR" },
    },
    {
      id: "P5-08-identical-recompute",
      input: complete,
      expectation: {
        status: "OK",
        assert: (result) => {
          const replay = computeScore(cloneInput(complete));
          return replay.outputHash === result.outputHash
            ? true
            : "recompute outputHash diverged";
        },
      },
    },
    {
      id: "P5-09-new-scoring-version",
      input: newVersionInput,
      expectation: {
        status: "OK",
        assert: (result) => {
          if (result.outputHash === baseline.outputHash) {
            return "new scoring version did not change outputHash";
          }
          if (result.versions.scoring !== NEW_SCORING_VERSION) {
            return "new scoring version not registered";
          }
          if (computeScore(cloneInput(complete)).outputHash !== baseline.outputHash) {
            return "previous derived output changed";
          }
          return true;
        },
      },
    },
  ];
}
