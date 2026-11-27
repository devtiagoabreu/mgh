import { WorkspaceNav } from "@/components/workspace-nav";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { listGrantedToolKeys } from "@/lib/tools/access";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Workspace — MGH — Fase A",
};

/**
 * Casca autenticada do workspace. O tenant vem somente da sessão verificada;
 * a navegação não recebe tenant nem papel como parâmetro de request.
 */
export default async function WorkspaceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { session, context } = await requireVerifiedSession();
  if (session.user?.mghMustChangePassword === true) {
    redirect("/trocar-senha");
  }
  const grants = await listGrantedToolKeys(await getPrisma(), context);

  return (
    <div className="mgh-workspace">
      <WorkspaceNav
        canManageCollaborators={context.role === "MENTOR_OWNER"}
        hasMghGrant={grants.includes("MGH")}
      />
      <div className="mgh-workspace__content">{children}</div>
    </div>
  );
}
