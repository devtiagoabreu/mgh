import type { TenantDbClient } from "../../lib/db/types";

export interface CallLog {
  readonly kind: string;
  readonly args: unknown;
}

export interface FakeClient {
  readonly client: TenantDbClient;
  readonly calls: CallLog[];
}

function delegate(name: string, calls: CallLog[]) {
  return {
    findFirst: async (args: unknown) => {
      calls.push({ kind: `${name}.findFirst`, args });
      return null;
    },
    findMany: async (args?: unknown) => {
      calls.push({ kind: `${name}.findMany`, args });
      return [];
    },
    create: async (args: unknown) => {
      calls.push({ kind: `${name}.create`, args });
      return {};
    },
    upsert: async (args: unknown) => {
      calls.push({ kind: `${name}.upsert`, args });
      return {};
    },
    count: async (args?: unknown) => {
      calls.push({ kind: `${name}.count`, args });
      return 0;
    },
    update: async (args: unknown) => {
      calls.push({ kind: `${name}.update`, args });
      return {};
    },
    delete: async (args: unknown) => {
      calls.push({ kind: `${name}.delete`, args });
      return {};
    },
  };
}

const DELEGATE_NAMES = [
  "tenant",
  "user",
  "tenantMembership",
  "participantIdentity",
  "instrumentVersion",
  "itemBankVersion",
  "scoringVersion",
  "sequenceVersion",
  "goldenDatasetVersion",
  "run",
  "responseRaw",
  "responseEvent",
  "derivedScoreRun",
  "derivedScoreValue",
  "changeLog",
  "occurrence",
  "auditLog",
] as const;

export function createFakeClient(): FakeClient {
  const calls: CallLog[] = [];
  const delegates: Record<string, unknown> = {};
  for (const name of DELEGATE_NAMES) {
    delegates[name] = delegate(name, calls);
  }
  const client = {
    $queryRaw: async (strings: TemplateStringsArray, ...values: unknown[]) => {
      calls.push({
        kind: "$queryRaw",
        args: { strings: [...strings], values: [...values] },
      });
      return [];
    },
    $transaction: async <T>(fn: (tx: TenantDbClient) => Promise<T>) => {
      calls.push({ kind: "$transaction.begin", args: undefined });
      const result = await fn(client as unknown as TenantDbClient);
      calls.push({ kind: "$transaction.commit", args: undefined });
      return result;
    },
    ...delegates,
  } as unknown as TenantDbClient;
  return { client, calls };
}
