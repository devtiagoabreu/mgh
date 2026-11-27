import { redirect } from "next/navigation";
import { getPrisma } from "../db/client";
import type { VerifiedTenantContext } from "../auth/tenant";
import { hasToolGrant } from "./access";
import type { WorkspaceToolKey } from "./catalog";

/** Porta servidora: sem grant ativo, a rota nunca renderiza o instrumento. */
export async function requireToolAccess(
  context: VerifiedTenantContext,
  toolKey: WorkspaceToolKey,
): Promise<void> {
  if (!(await hasToolGrant(await getPrisma(), context, toolKey))) {
    redirect("/app");
  }
}
