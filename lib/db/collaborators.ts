import { randomUUID } from "node:crypto";
import { COLLABORATOR_ROLE } from "../auth/collaborator";
import { hashPassword } from "../auth/password";
import type { VerifiedTenantContext } from "../auth/tenant";
import { tenantScopedData, tenantScopedWhere } from "./context";
import type { TenantDbClient } from "./types";
import {
  assertWorkspaceToolKey,
  type WorkspaceToolKey,
} from "../tools/catalog";

export interface CollaboratorRecord {
  readonly id: string;
  readonly email: string;
  readonly role: string;
}

/** Senha temporária gerada no servidor; o texto claro nunca é persistido. */
export function generateTemporaryPassword(): string {
  return randomUUID().replaceAll("-", "") + "Aa7!";
}

/**
 * Cria usuário, associação e grant no tenant verificado. A credencial global
 * é gravada depois, fora da transação tenant. Senha em claro existe apenas no
 * retorno, para exibição única na resposta.
 */
export async function createCollaborator(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: {
    readonly email: string;
    readonly toolKey: WorkspaceToolKey;
  },
): Promise<{ record: CollaboratorRecord; temporaryPassword: string }> {
  const toolKey = assertWorkspaceToolKey(input.toolKey);
  const temporaryPassword = generateTemporaryPassword();
  const passwordHash = hashPassword(temporaryPassword);
  const userId = randomUUID();
  const now = new Date();

  await db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${ctx.tenantId}, true)`;
    await tx.user.create({
      data: tenantScopedData(ctx, {
        id: userId,
        createdAt: now,
        updatedAt: now,
        deletedAt: null,
      }),
    });
    await tx.tenantMembership.create({
      data: tenantScopedData(ctx, {
        id: randomUUID(),
        userId,
        role: COLLABORATOR_ROLE,
        active: true,
        createdAt: now,
        updatedAt: now,
      }),
    });
    await tx.toolGrant.create({
      data: tenantScopedData(ctx, {
        id: randomUUID(),
        userId,
        toolKey,
        active: true,
        createdAt: now,
        updatedAt: now,
      }),
    });
  });

  // auth_credentials é global: não há RLS e não entra na transação tenant.
  await db.authCredential.create({
    data: {
      email: input.email,
      passwordHash,
      userId,
      tenantId: ctx.tenantId,
      active: true,
      mustChangePassword: true,
    },
  });

  return {
    record: { id: userId, email: input.email, role: "MENTEE" },
    temporaryPassword,
  };
}

export async function listCollaborators(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<CollaboratorRecord[]> {
  const rows = await db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${ctx.tenantId}, true)`;
    return tx.tenantMembership.findMany({
      where: {
        ...tenantScopedWhere(ctx),
        active: true,
        role: COLLABORATOR_ROLE,
      },
      orderBy: { userId: "asc" },
    });
  });
  const userIds = rows.flatMap((row) => {
    const membership = row as { active?: unknown; role?: unknown; userId?: unknown };
    if (
      membership.active !== true ||
      membership.role !== COLLABORATOR_ROLE ||
      typeof membership.userId !== "string"
    ) {
      return [];
    }
    return [membership.userId];
  });
  if (userIds.length === 0) return [];

  // E-mail fica na credencial global; a leitura é filtrada pelo tenant
  // verificado e pelos usuários já selecionados por RLS.
  const credentials = await db.authCredential.findMany({
    where: {
      userId: { in: userIds },
      tenantId: ctx.tenantId,
      active: true,
    },
    select: { userId: true, email: true },
  });
  const emailByUser = new Map<string, string>();
  for (const credential of credentials) {
    const item = credential as { userId?: unknown; email?: unknown };
    if (typeof item.userId === "string" && typeof item.email === "string") {
      emailByUser.set(item.userId, item.email);
    }
  }
  return userIds.flatMap((userId) => {
    const email = emailByUser.get(userId);
    return email
      ? [{ id: userId, email, role: COLLABORATOR_ROLE } as CollaboratorRecord]
      : [];
  });
}

/** Concede a todos os colaboradores ativos exceto outros MENTOR_OWNER. */
export async function grantToolToCollaborators(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  toolKey: WorkspaceToolKey,
): Promise<number> {
  assertWorkspaceToolKey(toolKey);
  const collaborators = await listCollaborators(db, ctx);
  let grants = 0;
  await db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${ctx.tenantId}, true)`;
    for (const collaborator of collaborators) {
      const existing = await tx.toolGrant.findFirst({
        where: {
          ...tenantScopedWhere(ctx),
          userId: collaborator.id,
          toolKey,
        },
        select: { id: true },
      });
      if (existing) continue;
      await tx.toolGrant.create({
        data: tenantScopedData(ctx, {
          id: randomUUID(),
          userId: collaborator.id,
          toolKey,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      });
      grants += 1;
    }
  });
  return grants;
}

export async function revokeToolFromAllCollaborators(
  db: TenantDbClient,
  ctx: VerifiedTenantContext,
  toolKey: WorkspaceToolKey,
): Promise<number> {
  assertWorkspaceToolKey(toolKey);
  const collaborators = await listCollaborators(db, ctx);
  if (collaborators.length === 0) return 0;
  return db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${ctx.tenantId}, true)`;
    const result = await tx.toolGrant.updateMany({
      where: {
        ...tenantScopedWhere(ctx),
        userId: { in: collaborators.map((item) => item.id) },
        toolKey,
        active: true,
      },
      data: { active: false, updatedAt: new Date() },
    });
    return (result as { count?: number }).count ?? 0;
  });
}
