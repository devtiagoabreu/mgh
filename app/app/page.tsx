import { StructuralPreview } from "@/components/structural-preview";
import { parseStoredPreference } from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { findUserAppearancePreference } from "@/lib/db/repositories";
import { redirect } from "next/navigation";

/** Área autenticada. O tenant vem somente da sessão verificada. */
export default async function WorkspacePage() {
  const { session, context } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email) redirect("/login");

  const user = await findUserAppearancePreference(await getPrisma(), context);
  const stored = (user as { appearancePreference?: unknown } | null)
    ?.appearancePreference;

  return (
    <StructuralPreview
      username={email}
      appearancePreference={parseStoredPreference(stored)}
    />
  );
}
