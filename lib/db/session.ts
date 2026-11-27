import { assertUuid, type VerifiedTenantContext } from "../auth/tenant";
import { requireVerifiedTenantContext } from "./context";
import type { TenantDbClient } from "./types";

export const TENANT_SESSION_SETTING = "app.current_tenant_id" as const;

/**
 * Configura o tenant da transação com parâmetro ligado do Prisma.
 * Nunca concatena o valor do tenant na string SQL.
 */
export async function setTenantSession(
  client: Pick<TenantDbClient, "$queryRaw">,
  ctx: VerifiedTenantContext,
): Promise<void> {
  const verified = requireVerifiedTenantContext(ctx);
  await client.$queryRaw<unknown[]>`
    SELECT set_config('app.current_tenant_id', ${verified.tenantId}, true)
  `;
}

/**
 * Usado somente na resolução da credencial: o tenantId vem de registro
 * verificado no banco (senha conferida), nunca de request. A operação ainda
 * roda em transação com RLS ativo, como qualquer acesso de tenant.
 */
export async function withCredentialTenant<T>(
  client: TenantDbClient,
  tenantId: string,
  operation: (tx: TenantDbClient) => Promise<T>,
): Promise<T> {
  const verifiedTenantId = assertUuid(tenantId, "CREDENTIAL_TENANT_ID");
  return client.$transaction(async (tx) => {
    await tx.$queryRaw<unknown[]>`
      SELECT set_config('app.current_tenant_id', ${verifiedTenantId}, true)
    `;
    return operation(tx);
  });
}

/** Toda operação de tenant passa por transação com a sessão configurada. */
export async function withTenantTransaction<T>(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  operation: (tx: TenantDbClient) => Promise<T>,
): Promise<T> {
  const verified = requireVerifiedTenantContext(ctx);
  return client.$transaction(async (tx) => {
    await setTenantSession(tx, verified);
    return operation(tx);
  });
}
