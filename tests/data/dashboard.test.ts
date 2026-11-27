import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import { getMghOperationalRaw } from "../../lib/db/dashboard";
import type { TenantDbClient } from "../../lib/db/types";
import { createFakeClient, type CallLog } from "./fakes";

const tenantA = "22222222-2222-4222-8222-222222222222";
const tenantB = "44444444-4444-4444-8444-444444444444";
const userId = "11111111-1111-4111-8111-111111111111";
const sessionId = "33333333-3333-4333-8333-333333333333";

function ctxA() {
  return createTenantContextFromVerifiedClaims({
    userId,
    tenantId: tenantA,
    role: "MENTOR_OWNER",
    sessionId,
  });
}

function fakeWithCounts() {
  const { client, calls } = createFakeClient();
  const counts: Record<string, Record<string, number>> = {
    run: { COMPLETED: 5, IN_PROGRESS: 2, INVALIDATED: 1 },
    responseRaw: { ALL: 37 },
    tenantMembership: { ALL: 3 },
  };

  for (const [name, values] of Object.entries(counts)) {
    const delegate = client[name as keyof TenantDbClient] as {
      count: (args?: unknown) => Promise<number>;
    };
    delegate.count = async (args?: unknown) => {
      calls.push({ kind: `${name}.count`, args });
      const where = (args as { where?: Record<string, unknown> } | undefined)
        ?.where;
      const key = name === "run" ? String(where?.status ?? "ALL") : "ALL";
      return values[key] ?? 0;
    };
  }

  const originalQueryRaw = client.$queryRaw.bind(client);
  client.$queryRaw = async <T = unknown>(
    strings: TemplateStringsArray,
    ...values: readonly unknown[]
  ) => {
    const sql = strings.join(" ");
    if (sql.includes('COUNT(DISTINCT "participantRef")')) {
      calls.push({
        kind: "$queryRaw.distinct",
        args: { strings: [...strings], values: [...values] },
      });
      return [{ count: 2 }] as T;
    }
    return originalQueryRaw<T>(strings, ...values);
  };

  return { client, calls };
}

function argsOf(call: CallLog | undefined): {
  strings?: string[];
  values?: unknown[];
  where?: Record<string, unknown>;
} {
  return (call?.args ?? {}) as {
    strings?: string[];
    values?: unknown[];
    where?: Record<string, unknown>;
  };
}

describe("F4.1 — contagens operacionais tenant-scoped", () => {
  it("lê contagens reais e conta participantes com COUNT(DISTINCT)", async () => {
    const { client, calls } = fakeWithCounts();

    const result = await getMghOperationalRaw(client, ctxA());

    expect(result).toEqual({
      completedRuns: 5,
      inProgressRuns: 2,
      invalidatedRuns: 1,
      participantsWithCompletedRun: 2,
      responseRawCount: 37,
      activeMembers: 3,
    });

    const setup = calls.find(
      (call) =>
        call.kind === "$queryRaw" &&
        argsOf(call).strings?.join(" ").includes("set_config"),
    );
    expect(argsOf(setup).values).toEqual([tenantA]);

    const distinct = calls.find((call) => call.kind === "$queryRaw.distinct");
    const distinctArgs = argsOf(distinct);
    expect(distinctArgs.values).toEqual([tenantA]);
    expect(distinctArgs.strings?.join("$1")).toContain(
      'COUNT(DISTINCT "participantRef")',
    );
    expect(distinctArgs.strings?.join("$1")).toContain(
      '"tenant_id" = $1::uuid',
    );
    expect(distinctArgs.strings?.join(" ")).not.toContain(tenantA);
    expect(distinctArgs.strings?.join(" ")).not.toContain(tenantB);
  });

  it("mantém toda contagem no tenant verificado e não lê respostas individuais", async () => {
    const { client, calls } = fakeWithCounts();

    await getMghOperationalRaw(client, ctxA());

    const countCalls = calls.filter((call) => call.kind.endsWith(".count"));
    expect(countCalls).toHaveLength(5);
    for (const call of countCalls) {
      expect(argsOf(call).where?.tenantId).toBe(tenantA);
      expect(argsOf(call).where?.tenantId).not.toBe(tenantB);
    }
    expect(calls.some((call) => call.kind === "run.findMany")).toBe(false);
    expect(calls.some((call) => call.kind === "responseRaw.findMany")).toBe(
      false,
    );
    expect(calls.at(-1)?.kind).toBe("$transaction.commit");
  });

  it("rejeita contexto inválido antes de qualquer consulta", async () => {
    const { client, calls } = fakeWithCounts();

    await expect(
      getMghOperationalRaw(client, {
        userId,
        tenantId: undefined,
        role: "MENTOR_OWNER",
        sessionId,
      } as never),
    ).rejects.toThrow("INVALID_TENANT_ID");

    expect(calls).toHaveLength(0);
  });
});
