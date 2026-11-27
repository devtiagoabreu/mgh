import type { VerifiedTenantContext } from "../auth/tenant";
import { tenantScopedData, tenantScopedWhere } from "./context";
import { withTenantTransaction } from "./session";
import type { TenantDbClient } from "./types";

/**
 * Repositórios tenant-scoped. Não existem métodos de UPDATE/DELETE para
 * ResponseRaw/ResponseEvent: invalidação é por evento, nunca mutação in place.
 */

export interface AppendRawInput {
  readonly runId: string;
  readonly sequenceIndex: number;
  readonly scenarioRef: string;
  readonly optionRef: string;
}

export interface AppendEventInput {
  readonly runId: string;
  readonly eventType: string;
}

export interface CreateDerivedScoreRunInput {
  readonly runId: string;
  readonly scoringVersionId: string;
  readonly itemBankVersionId: string;
  readonly inputHash: string;
}

export function findRunById(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  id: string,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.run.findFirst({ where: tenantScopedWhere(ctx, { id }) }),
  );
}

export function listRuns(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<unknown[]> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.run.findMany({ where: tenantScopedWhere(ctx) }),
  );
}

export function appendResponseRaw(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: AppendRawInput,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.responseRaw.create({ data: tenantScopedData(ctx, { ...input }) }),
  );
}

export function appendResponseEvent(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: AppendEventInput,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.responseEvent.create({ data: tenantScopedData(ctx, { ...input }) }),
  );
}

export function createDerivedScoreRun(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: CreateDerivedScoreRunInput,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.derivedScoreRun.create({ data: tenantScopedData(ctx, { ...input }) }),
  );
}

export function findDerivedScoreRun(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: Pick<
    CreateDerivedScoreRunInput,
    "runId" | "scoringVersionId" | "itemBankVersionId"
  >,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.derivedScoreRun.findFirst({ where: tenantScopedWhere(ctx, { ...input }) }),
  );
}

export function addDerivedScoreValue(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: {
    readonly derivedScoreRunId: string;
    readonly dimensionRef: string;
    readonly value: string;
  },
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.derivedScoreValue.create({ data: tenantScopedData(ctx, { ...input }) }),
  );
}

export function recordOccurrence(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  input: { readonly runId: string | null; readonly occurrenceType: string },
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.occurrence.create({ data: tenantScopedData(ctx, { ...input }) }),
  );
}

export function listAuditLogs(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<unknown[]> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.auditLog.findMany({ where: tenantScopedWhere(ctx) }),
  );
}

// ---------------------------------------------------------------------------
// F1 — preferência de aparência. Nunca é dado do produto nem entra em score.
// O userId vem do contexto verificado da sessão, nunca de request.
// ---------------------------------------------------------------------------

export type AppearancePreferenceValue = "LIGHT" | "DARK";

export function findUserAppearancePreference(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.user.findFirst({ where: tenantScopedWhere(ctx, { id: ctx.userId }) }),
  );
}

export function setUserAppearancePreference(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  appearancePreference: AppearancePreferenceValue,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.user.update({
      where: tenantScopedWhere(ctx, { id: ctx.userId }),
      data: { appearancePreference },
    }),
  );
}

/** Volta a "seguir o sistema": a coluna nullable passa a ser null. */
export function clearUserAppearancePreference(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
): Promise<unknown> {
  return withTenantTransaction(client, ctx, (tx) =>
    tx.user.update({
      where: tenantScopedWhere(ctx, { id: ctx.userId }),
      data: { appearancePreference: null },
    }),
  );
}
