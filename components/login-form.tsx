"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { INITIAL_LOGIN_STATE } from "@/lib/auth/login-state";

/** Formulário de acesso à demonstração. A credencial vive só no banco. */
export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    INITIAL_LOGIN_STATE,
  );

  return (
    <section className="mgh-card" aria-labelledby="mgh-login-title">
      <h2 id="mgh-login-title" className="mgh-heading-2">
        Entrar
      </h2>
      <p className="mgh-copy mgh-copy--muted">
        O instrumento fica disponível somente após o acesso.
      </p>
      <form action={formAction} className="mgh-login-form">
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-login-username">
            Usuário
          </label>
          <input
            id="mgh-login-username"
            name="username"
            className="mgh-input"
            autoComplete="username"
            maxLength={64}
            required
          />
        </div>
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-login-password">
            Senha
          </label>
          <input
            id="mgh-login-password"
            name="password"
            type="password"
            className="mgh-input"
            autoComplete="current-password"
            maxLength={128}
            required
          />
        </div>
        {state.error ? (
          <p className="mgh-field-error" role="alert">
            {state.error}
          </p>
        ) : null}
        <div className="mgh-actions">
          <button type="submit" className="mgh-button" disabled={pending}>
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </div>
      </form>
    </section>
  );
}
