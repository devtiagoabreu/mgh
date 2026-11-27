import { StructuralPreview } from "@/components/structural-preview";
import { requireVerifiedSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

/** Área autenticada. O tenant vem somente da sessão verificada. */
export default async function WorkspacePage() {
  const { session } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email) redirect("/login");

  return <StructuralPreview username={email} />;
}
