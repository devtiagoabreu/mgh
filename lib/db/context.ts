import {
  createTenantContextFromVerifiedClaims,
  tenantWhere,
  type VerifiedTenantContext,
} from "../auth/tenant";

/**
 * A DAL nunca aceita tenantId externo. O contexto é revalidado aqui e o
 * `where` de toda query é montado por `tenantScopedWhere`.
 */
export function requireVerifiedTenantContext(
  ctx: unknown,
): VerifiedTenantContext {
  if (typeof ctx !== "object" || ctx === null) {
    throw new Error("TENANT_CONTEXT_REQUIRED");
  }
  const candidate = ctx as VerifiedTenantContext;
  return createTenantContextFromVerifiedClaims({
    userId: candidate.userId,
    tenantId: candidate.tenantId,
    role: candidate.role,
    sessionId: candidate.sessionId,
  });
}

export function tenantScopedWhere<T extends Record<string, unknown>>(
  ctx: VerifiedTenantContext,
  extra?: T,
): { tenantId: string } & Omit<T, "tenantId"> {
  const verified = requireVerifiedTenantContext(ctx);
  if (extra !== undefined && "tenantId" in extra) {
    throw new Error("TENANT_ID_FROM_CLIENT_FORBIDDEN");
  }
  return Object.freeze({
    ...(extra ?? {}),
    ...tenantWhere(verified),
  }) as { tenantId: string } & Omit<T, "tenantId">;
}

/** Usado em `create`: o tenantId sempre vem do contexto verificado. */
export function tenantScopedData<T extends Record<string, unknown>>(
  ctx: VerifiedTenantContext,
  data: T,
): { tenantId: string } & Omit<T, "tenantId"> {
  return tenantScopedWhere(ctx, data);
}
