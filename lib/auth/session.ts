import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";
import {
  createTenantContextFromVerifiedClaims,
  type VerifiedTenantContext,
} from "./tenant";

/**
 * Ponte entre a sessão assinada do Auth.js e o contrato de tenant.
 * Falha fechada: claims ausentes ou malformados não viram contexto.
 */
export async function getVerifiedSession(): Promise<{
  session: Session;
  context: VerifiedTenantContext;
} | null> {
  const session = await auth();
  if (!session?.user) return null;

  try {
    const context = createTenantContextFromVerifiedClaims({
      userId: session.user.mghUserId,
      tenantId: session.user.mghTenantId,
      role: session.user.mghRole,
      sessionId: session.user.mghSessionId,
    });
    return { session, context };
  } catch {
    return null;
  }
}

export async function requireVerifiedSession(): Promise<{
  session: Session;
  context: VerifiedTenantContext;
}> {
  const verified = await getVerifiedSession();
  if (!verified) redirect("/login");
  return verified;
}
