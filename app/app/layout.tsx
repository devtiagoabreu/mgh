import { WorkspaceNav } from "@/components/workspace-nav";
import { requireVerifiedSession } from "@/lib/auth/session";
import type { Metadata } from "next";

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
  await requireVerifiedSession();

  return (
    <div className="mgh-workspace">
      <WorkspaceNav />
      <div className="mgh-workspace__content">{children}</div>
    </div>
  );
}
