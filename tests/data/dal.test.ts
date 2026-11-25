import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import { tenantScopedWhere } from "../../lib/db/context";
import { appendResponseRaw, findRunById } from "../../lib/db/repositories";
import { setTenantSession, withTenantTransaction } from "../../lib/db/session";
import { createFakeClient } from "./fakes";

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

describe("P2 — DAL parametrizada e tenant-scoped", () => {
  it("configura a sessão com parâmetro ligado, sem interpolação", async () => {
    const { client, calls } = createFakeClient();
    await setTenantSession(client, ctxA());

    const raw = calls.find((call) => call.kind === "$queryRaw");
    expect(raw).toBeDefined();
    const args = raw?.args as { strings: string[]; values: unknown[] };
    expect(args.values).toEqual([tenantA]);
    expect(args.strings.join("$1")).toContain(
      "set_config('app.current_tenant_id', $1, true)",
    );
    expect(args.strings.join(" ")).not.toContain(tenantA);
  });

  it("rejeita tentativa de passar tenantId externo no where", () => {
    expect(() =>
      tenantScopedWhere(ctxA(), { tenantId: tenantB } as Record<string, unknown>),
    ).toThrow("TENANT_ID_FROM_CLIENT_FORBIDDEN");
  });

  it("usa transação com sessão configurada antes da query", async () => {
    const { client, calls } = createFakeClient();
    await withTenantTransaction(client, ctxA(), async () => {
      expect(calls.map((call) => call.kind)).toEqual([
        "$transaction.begin",
        "$queryRaw",
      ]);
      return "ok";
    });
    expect(calls.at(-1)?.kind).toBe("$transaction.commit");
  });

  it("teste cross-tenant negativo: nunca consulta o tenant B", async () => {
    const { client, calls } = createFakeClient();
    await findRunById(client, ctxA(), "run-do-tenant-b");
    const find = calls.find((call) => call.kind === "run.findFirst");
    const args = find?.args as { where: Record<string, unknown> };
    expect(args.where.tenantId).toBe(tenantA);
    expect(args.where.tenantId).not.toBe(tenantB);
  });

  it("append de RAW injeta tenantId do contexto e nunca faz update/delete", async () => {
    const { client, calls } = createFakeClient();
    await appendResponseRaw(client, ctxA(), {
      runId: "run-a",
      sequenceIndex: 1,
      scenarioRef: "[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]",
      optionRef: "[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]",
    });
    const create = calls.find((call) => call.kind === "responseRaw.create");
    const args = create?.args as { data: Record<string, unknown> };
    expect(args.data.tenantId).toBe(tenantA);
    expect(calls.some((call) => call.kind.startsWith("responseRaw.update"))).toBe(
      false,
    );
    expect(calls.some((call) => call.kind.startsWith("responseRaw.delete"))).toBe(
      false,
    );
  });
});
