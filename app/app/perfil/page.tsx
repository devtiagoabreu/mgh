import { logoutAction } from "@/app/actions/auth";
import { AppearanceSelector } from "@/components/appearance-selector";
import { parseStoredPreference } from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { findUserAppearancePreference } from "@/lib/db/repositories";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Perfil — MGH — Fase A",
};

/** Superfície autenticada de preferências. Nenhum dado do instrumento aqui. */
export default async function ProfilePage() {
  const { session, context } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email) redirect("/login");

  const user = await findUserAppearancePreference(await getPrisma(), context);
  const stored = (user as { appearancePreference?: unknown } | null)
    ?.appearancePreference;

  return (
    <div className="mgh-shell">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core</p>
          <h1 className="mgh-heading-1">Perfil</h1>
        </div>
        <div className="mgh-actions">
          <Link href="/app" className="mgh-button mgh-button--secondary">
            Voltar ao instrumento
          </Link>
          <div className="mgh-header__session">
            <span className="mgh-kicker">{email}</span>
            <form action={logoutAction}>
              <button type="submit" className="mgh-button mgh-button--ghost">
                Encerrar sessão
              </button>
            </form>
          </div>
        </div>
      </header>
      <main id="mgh-conteudo" className="mgh-main" tabIndex={-1}>
        <AppearanceSelector preference={parseStoredPreference(stored)} />
      </main>
    </div>
  );
}
