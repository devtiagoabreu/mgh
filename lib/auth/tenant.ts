import { assertPhaseARole, type PhaseARole } from "./roles";

/**
 * Contrato de tenant (PROD-TEN-001).
 *
 * Este módulo NÃO lê request, header, query, body, cookie ou parâmetro de rota.
 * A única origem aceita é uma sessão/JWT já verificada por lib/auth.
 * Falha always fails closed.
 */
export interface VerifiedTenantContext {
  readonly userId: string;
  readonly tenantId: string;
  readonly role: PhaseARole;
  readonly sessionId: string;
}

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Valida um UUID sem conferir procedência. A procedência é de quem chama. */
export function assertUuid(value: unknown, field: string): string {
  if (typeof value !== "string" || !UUID_PATTERN.test(value)) {
    throw new Error(`INVALID_${field}`);
  }
  return value;
}

export function createTenantContextFromVerifiedClaims(input: {
  userId: unknown;
  tenantId: unknown;
  role: unknown;
  sessionId: unknown;
}): VerifiedTenantContext {
  return Object.freeze({
    userId: assertUuid(input.userId, "USER_ID"),
    tenantId: assertUuid(input.tenantId, "TENANT_ID"),
    role: assertPhaseARole(input.role),
    sessionId: assertUuid(input.sessionId, "SESSION_ID"),
  });
}

/** Toda query de tenant deve passar por aqui. Nunca aceita tenant externo. */
export function tenantWhere(ctx: VerifiedTenantContext): {
  tenantId: string;
} {
  return Object.freeze({ tenantId: ctx.tenantId });
}

export function assertTenantMatches(
  ctx: VerifiedTenantContext,
  resourceTenantId: string,
): void {
  if (resourceTenantId !== ctx.tenantId) {
    throw new Error("TENANT_MISMATCH");
  }
}
