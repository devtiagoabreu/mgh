import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Acesso — MGH — Fase A",
};

export default function LoginPage() {
  return (
    <div className="mgh-shell">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core</p>
          <h1 className="mgh-heading-1">Acesso à demonstração</h1>
        </div>
      </header>
      <main id="mgh-conteudo" className="mgh-main" tabIndex={-1}>
        <LoginForm />
      </main>
    </div>
  );
}
