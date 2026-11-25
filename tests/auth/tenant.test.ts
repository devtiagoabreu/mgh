import { describe, expect, it } from "vitest";
import {
  assertTenantMatches,
  createTenantContextFromVerifiedClaims,
  tenantWhere,
} from "../../lib/auth/tenant";
import { assertPhaseARole, isPhaseARole } from "../../lib/auth/roles";

const userId = "11111111-1111-4111-8111-111111111111";
const tenantId = "22222222-2222-4222-8222-222222222222";
const sessionId = "33333333-3333-4333-8333-333333333333";

describe("Fase A — contrato de tenant", () => {
  it("aceita apenas claims verificados bem formados", () => {
    const ctx = createTenantContextFromVerifiedClaims({
      userId,
      tenantId,
      role: "MENTOR_OWNER",
      sessionId,
    });

    expect(ctx.tenantId).toBe(tenantId);
    expect(ctx.role).toBe("MENTOR_OWNER");
    expect(tenantWhere(ctx)).toEqual({ tenantId });
  });

  it("falha fechado sem tenant ou com papel deferido", () => {
    expect(() =>
      createTenantContextFromVerifiedClaims({
        userId,
        tenantId: undefined,
        role: "MENTOR_OWNER",
        sessionId,
      }),
    ).toThrow("INVALID_TENANT_ID");

    expect(() =>
      createTenantContextFromVerifiedClaims({
        userId,
        tenantId,
        role: "MENTOR_ASSISTANT",
        sessionId,
      }),
    ).toThrow("FORBIDDEN_ROLE");
  });

  it("rejeita recurso de outro tenant", () => {
    const ctx = createTenantContextFromVerifiedClaims({
      userId,
      tenantId,
      role: "MENTEE",
      sessionId,
    });

    expect(() =>
      assertTenantMatches(ctx, "44444444-4444-4444-8444-444444444444"),
    ).toThrow("TENANT_MISMATCH");
  });

  it("reconhece somente os papéis da Fase A", () => {
    expect(isPhaseARole("PLATFORM_ADMIN")).toBe(true);
    expect(isPhaseARole("MENTOR_OWNER")).toBe(true);
    expect(isPhaseARole("MENTEE")).toBe(true);
    expect(isPhaseARole("MENTOR_ASSISTANT")).toBe(false);
    expect(() => assertPhaseARole("ADMIN")).toThrow("FORBIDDEN_ROLE");
  });
});
