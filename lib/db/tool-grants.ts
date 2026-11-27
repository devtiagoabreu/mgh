import type { VerifiedTenantContext } from "../auth/tenant";
import { tenantScopedData, tenantScopedWhere } from "./context";
import { withTenantTransaction } from "./session";
import type { TenantDbClient } from "./types";
import {
  assertWorkspaceToolKey,
  type WorkspaceToolKey,
} from "../tools/catalog";

/** Repositório tenant-scoped de concessões. Nenhuma chave externa sem ctx. */
export async function listToolGrants(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  userId?: string,
): Promise<unknown[]> {
  return withTenantTransaction(db, ctx, (tx) =>
    tx.toolGrant.findMany({
      where: {
        ...tenantScopedWhere(ctx),
        ...(userId ? { userId } : {}),
        active: true,
      },
    }),
  );
}

export async function findToolGrant(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  userId: string,
  toolKey: WorkspaceToolKey,
): Promise<unknown | null> {
  assertWorkspaceToolKey(toolKey);
  return withTenantTransaction(db, ctx, (tx) =>
    tx.toolGrant.findFirst({
      where: {
        ...tenantScopedWhere(ctx),
        userId,
        toolKey,
      },
    }),
  );
}

/** Nunca apaga o grant: revogação é `active=false`, preservando auditoria. */
export async function setToolGrantActive(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  userId: string,
  toolKey: WorkspaceToolKey,
  active: boolean,
): Promise<void> {
  assertWorkspaceToolKey(toolKey);
  await db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${ctx.tenantId}, true)`;
    const existing = await tx.toolGrant.findFirst({
      where: {
        ...tenantScopedWhere(ctx),
        userId,
        toolKey,
      },
      select: { id: true },
    });
    if (existing) {
      await tx.toolGrant.update({
        where: { id: (existing as { id: string }).id },
        data: { active, updatedAt: new Date() },
      });
      return;
    }
    await tx.toolGrant.create({
      data: tenantScopedData(ctx, {
        id: crypto.randomUUID(),
        userId,
        toolKey,
        active,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    });
  });
}
