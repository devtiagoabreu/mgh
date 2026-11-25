import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import {
  assertServiceRoleAudit,
  withServiceRoleAudit,
} from "../../lib/db/audit";
import { createFakeClient } from "./fakes";

const tenantId = "22222222-2222-4222-8222-222222222222";
const ctx = createTenantContextFromVerifiedClaims({
  userId: "11111111-1111-4111-8111-111111111111",
  tenantId,
  role: "PLATFORM_ADMIN",
  sessionId: "33333333-3333-4333-8333-333333333333",
});

const receipt = {
  actor: "service-role-synthetic",
  action: "SYNTHETIC_MAINTENANCE",
  tenantScope: tenantId,
  reason: "SYNTHETIC_TEST_ONLY",
};

describe("P1 — auditoria obrigatória de service role", () => {
  it("falha fechado sem recibo de auditoria completo", () => {
    expect(() => assertServiceRoleAudit(undefined)).toThrow(
      "SERVICE_ROLE_AUDIT_REQUIRED",
    );
    expect(() =>
      assertServiceRoleAudit({ actor: "x", action: "y", tenantScope: tenantId }),
    ).toThrow("SERVICE_ROLE_AUDIT_INCOMPLETE");
    expect(() =>
      assertServiceRoleAudit({ ...receipt, timestampUtc: "2026-01-01" }),
    ).toThrow("SERVICE_ROLE_AUDIT_INVALID_TIMESTAMP");
  });

  it("registra AuditLog com ator, ação, escopo, motivo e timestamp UTC", async () => {
    const { client, calls } = createFakeClient();
    const result = await withServiceRoleAudit(client, ctx, receipt, async () => {
      return "operation-ok";
    });
    expect(result).toBe("operation-ok");
    const audit = calls.find((call) => call.kind === "auditLog.create");
    const data = (audit?.args as { data: Record<string, unknown> }).data;
    expect(data.actor).toBe(receipt.actor);
    expect(data.action).toBe(receipt.action);
    expect(data.tenantScope).toBe(tenantId);
    expect(data.reason).toBe(receipt.reason);
    expect(data.tenantId).toBe(tenantId);
    expect(data.timestampUtc).toBeInstanceOf(Date);
  });

  it("rejeita escopo de auditoria de outro tenant", async () => {
    const { client } = createFakeClient();
    await expect(
      withServiceRoleAudit(
        client,
        ctx,
        { ...receipt, tenantScope: "44444444-4444-4444-8444-444444444444" },
        async () => "never",
      ),
    ).rejects.toThrow("TENANT_SCOPE_MISMATCH");
  });
});
