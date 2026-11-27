import { StructuralPreview } from "@/components/structural-preview";
import { parseStoredPreference } from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { findUserAppearancePreference } from "@/lib/db/repositories";
import { requireToolAccess } from "@/lib/tools/require";
import { redirect } from "next/navigation";

export const metadata = {
  title: "MGH — Sequência do instrumento — Fase A",
};

/** Módulo MGH. O tenant vem somente da sessão verificada. */
export default async function ModulePage() {
  const { session, context } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email || session.user?.mghMustChangePassword === true) {
    redirect("/trocar-senha");
  }
  await requireToolAccess(context, "MGH");

  const db = await getPrisma();
  const user = await findUserAppearancePreference(db, context);
  const stored = (user as { appearancePreference?: unknown } | null)
    ?.appearancePreference;

  return (
    <StructuralPreview
      username={email}
      appearancePreference={parseStoredPreference(stored)}
    />
  );
}
