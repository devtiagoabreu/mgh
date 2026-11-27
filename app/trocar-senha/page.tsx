import { PasswordChangeForm } from "@/components/password-change-form";
import { requireVerifiedSession } from "@/lib/auth/session";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trocar senha — MGH — Fase A",
};

/** Rota fora de /app: o layout do workspace redireciona para cá quando exigido. */
export default async function PasswordChangePage() {
  await requireVerifiedSession();

  return (
    <div className="mgh-shell">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core</p>
          <h1 className="mgh-heading-1">Primeira senha</h1>
        </div>
      </header>
      <main id="mgh-conteudo" className="mgh-main" tabIndex={-1}>
        <PasswordChangeForm />
      </main>
    </div>
  );
}
