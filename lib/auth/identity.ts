import { getAuthDb, getPrisma } from "../db/client";
import { withCredentialTenant } from "../db/session";
import { verifyPassword } from "./password";
import { isPhaseARole, type PhaseARole } from "./roles";

/**
 * Resolve a credencial para uma identidade verificada.
 *
 * Ordem obrigatória: (1) localizar e-mail no registro global, (2) conferir a
 * senha com hash, (3) apenas então consultar a associação tenant-scoped com
 * RLS ativo. Nenhum dado de request é usado como tenant.
 */
export interface VerifiedAuthIdentity {
  readonly userId: string;
  readonly tenantId: string;
  readonly role: PhaseARole;
  readonly mustChangePassword: boolean;
}

type StoredCredential = {
  readonly active: boolean;
  readonly passwordHash: string;
  readonly userId: string;
  readonly tenantId: string;
  readonly mustChangePassword: boolean;
};

type StoredMembership = {
  readonly active: boolean;
  readonly role: string;
};

export async function resolveAuthIdentity(
  email: string,
  password: string,
): Promise<VerifiedAuthIdentity | null> {
  const authDb = await getAuthDb();
  const credential = (await authDb.authCredential.findUnique({
    where: { email },
  })) as StoredCredential | null;

  if (!credential?.active) return null;
  if (!verifyPassword(password, credential.passwordHash)) return null;

  const prisma = await getPrisma();
  const membership = (await withCredentialTenant(
    prisma,
    credential.tenantId,
    (tx) =>
      tx.tenantMembership.findFirst({
        where: {
          tenantId: credential.tenantId,
          userId: credential.userId,
          active: true,
        },
      }),
  )) as StoredMembership | null;

  if (!membership?.active || !isPhaseARole(membership.role)) return null;

  return {
    userId: credential.userId,
    tenantId: credential.tenantId,
    role: membership.role,
    mustChangePassword: credential.mustChangePassword === true,
  };
}
