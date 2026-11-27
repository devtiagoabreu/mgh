import type { VerifiedTenantContext } from "../auth/tenant";
import type { TenantDbClient } from "../db/types";
import { tenantScopedWhere } from "../db/context";
import { withTenantTransaction } from "../db/session";
import { assertWorkspaceToolKey, type WorkspaceToolKey } from "./catalog";

/** Acesso efetivo a um instrumento concedido e ativo no tenant verificado. */
export async function hasToolGrant(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  toolKey: WorkspaceToolKey,
): Promise<boolean> {
  assertWorkspaceToolKey(toolKey);
  const count = await withTenantTransaction(db, ctx, (tx) =>
    tx.toolGrant.count({
      where: {
        ...tenantScopedWhere(ctx),
        userId: ctx.userId,
        toolKey,
        active: true,
      },
    }),
  );
  return count > 0;
}

/** Lista ordenada e deduplicada das chaves concedidas ao usuário da sessão. */
export async function listGrantedToolKeys(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<WorkspaceToolKey[]> {
  const grants = await withTenantTransaction(db, ctx, (tx) =>
    tx.toolGrant.findMany({
      where: {
        ...tenantScopedWhere(ctx),
        userId: ctx.userId,
        active: true,
      },
      select: { toolKey: true },
      orderBy: { toolKey: "asc" },
    }),
  );
  const keys = new Set<string>();
  for (const grant of grants) {
    const toolKey = (grant as { toolKey?: unknown }).toolKey;
    if (typeof toolKey === "string") {
      try {
        keys.add(assertWorkspaceToolKey(toolKey));
      } catch {
        // Chave fora da allowlist nunca é devolvida à superfície.
      }
    }
  }
  return [...keys] as WorkspaceToolKey[];
}
