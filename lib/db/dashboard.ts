import type { VerifiedTenantContext } from "../auth/tenant";
import type { MghOperationalRaw } from "../metrics/dashboard";
import { requireVerifiedTenantContext, tenantScopedWhere } from "./context";
import { withTenantTransaction } from "./session";
import type { TenantDbClient } from "./types";

interface DistinctCountRow {
  readonly count?: unknown;
}

/**
 * Contagens operacionais lidas do PostgreSQL local com RLS ativo.
 *
 * Todas as consultas usam o tenant da sessão verificada e rodam na mesma
 * transação com `set_config('app.current_tenant_id', ...)`. Nenhuma resposta
 * individual, score ou dado de participante é lido aqui: `participantRef` é
 * opaco e entra apenas em um `COUNT(DISTINCT ...)`.
 */
export async function getMghOperationalRaw(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<MghOperationalRaw> {
  const verified = requireVerifiedTenantContext(ctx);
  return withTenantTransaction(client, verified, async (tx) => {
    const completedRuns = await tx.run.count({
      where: tenantScopedWhere(verified, { status: "COMPLETED" }),
    });
    const inProgressRuns = await tx.run.count({
      where: tenantScopedWhere(verified, { status: "IN_PROGRESS" }),
    });
    const invalidatedRuns = await tx.run.count({
      where: tenantScopedWhere(verified, { status: "INVALIDATED" }),
    });
    const responseRawCount = await tx.responseRaw.count({
      where: tenantScopedWhere(verified),
    });
    const activeMembers = await tx.tenantMembership.count({
      where: tenantScopedWhere(verified, { active: true }),
    });

    // O valor do tenant é parâmetro ligado; nenhum identificador é concatenado.
    const distinctRows = await tx.$queryRaw<DistinctCountRow[]>`
      SELECT COUNT(DISTINCT "participantRef")::bigint AS "count"
      FROM "runs"
      WHERE "tenant_id" = ${verified.tenantId}::uuid
        AND "status"::text = 'COMPLETED'
    `;
    const distinctValue = Number(distinctRows[0]?.count ?? 0);
    if (!Number.isSafeInteger(distinctValue) || distinctValue < 0) {
      throw new Error("INVALID_OPERATIONAL_COUNT: participantsWithCompletedRun");
    }

    return {
      completedRuns,
      inProgressRuns,
      invalidatedRuns,
      participantsWithCompletedRun: distinctValue,
      responseRawCount,
      activeMembers,
    };
  });
}
