import { logoutAction } from "@/app/actions/auth";
import { requireVerifiedSession } from "@/lib/auth/session";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Visão geral — MGH — Fase A",
};

/**
 * Visão geral estrutural do workspace. Sem score, KPIs, contagens, respostas
 * individuais ou nomes de módulos do Parking Lot.
 */
export default async function WorkspaceHome() {
  const { session } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email) redirect("/login");

  return (
    <div className="mgh-shell" id="mgh-app-shell">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core</p>
          <h1 className="mgh-heading-1">Visão geral</h1>
        </div>
        <div className="mgh-actions">
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
        <section className="mgh-card" aria-labelledby="mgh-module-active">
          <h2 id="mgh-module-active" className="mgh-heading-2">
            Módulo ativo
          </h2>
          <p className="mgh-copy">
            MGH — sequência estrutural do instrumento. Nenhuma resposta é
            registrada nesta demonstração.
          </p>
          <Link href="/app/mgh" className="mgh-button">
            Abrir MGH
          </Link>
        </section>

        <section className="mgh-card" aria-labelledby="mgh-modules-other">
          <h2 id="mgh-modules-other" className="mgh-heading-2">
            Demais módulos
          </h2>
          <p className="mgh-copy mgh-copy--muted">
            Indisponíveis nesta fase.
          </p>
        </section>

        <section className="mgh-card" aria-labelledby="mgh-demo-state">
          <h2 id="mgh-demo-state" className="mgh-heading-2">
            Estado da demonstração
          </h2>
          <p className="mgh-copy">
            Nenhum participante real foi liberado. Sem score, KPIs ou respostas
            individuais.
          </p>
        </section>
      </main>
    </div>
  );
}
