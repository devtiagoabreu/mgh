import type { VerifiedTenantContext } from "../auth/tenant";
import { requireVerifiedTenantContext, tenantScopedData } from "./context";
import { withTenantTransaction } from "./session";
import type { TenantDbClient } from "./types";

/**
 * Recibo obrigatório para qualquer operação com service_role/BYPASSRLS.
 * O runtime completo de service role está fora deste escopo; o contrato e o
 * teste garantem que nenhuma chamada seja feita sem ator e motivo.
 */
export interface ServiceRoleAuditReceipt {
  readonly actor: string;
  readonly action: string;
  readonly tenantScope: string;
  readonly reason: string;
  readonly timestampUtc?: Date;
}

function nonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function assertServiceRoleAudit(
  receipt: unknown,
): asserts receipt is ServiceRoleAuditReceipt {
  if (typeof receipt !== "object" || receipt === null) {
    throw new Error("SERVICE_ROLE_AUDIT_REQUIRED");
  }
  const value = receipt as Record<string, unknown>;
  if (
    !nonEmptyString(value.actor) ||
    !nonEmptyString(value.action) ||
    !nonEmptyString(value.tenantScope) ||
    !nonEmptyString(value.reason)
  ) {
    throw new Error("SERVICE_ROLE_AUDIT_INCOMPLETE");
  }
  if (
    value.timestampUtc !== undefined &&
    !(value.timestampUtc instanceof Date)
  ) {
    throw new Error("SERVICE_ROLE_AUDIT_INVALID_TIMESTAMP");
  }
}

export async function withServiceRoleAudit<T>(
  client: TenantDbClient,
  ctx: VerifiedTenantContext,
  receipt: unknown,
  operation: (tx: TenantDbClient) => Promise<T>,
): Promise<T> {
  const verified = requireVerifiedTenantContext(ctx);
  assertServiceRoleAudit(receipt);
  if (
    receipt.tenantScope !== verified.tenantId &&
    receipt.tenantScope !== "ALL_TENANTS"
  ) {
    throw new Error("TENANT_SCOPE_MISMATCH");
  }

  return withTenantTransaction(client, verified, async (tx) => {
    const result = await operation(tx);
    await tx.auditLog.create({
      data: tenantScopedData(verified, {
        actor: receipt.actor,
        action: receipt.action,
        tenantScope: receipt.tenantScope,
        reason: receipt.reason,
        timestampUtc: receipt.timestampUtc ?? new Date(),
      }),
    });
    return result;
  });
}
