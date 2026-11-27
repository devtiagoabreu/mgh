"use client";

import { useActionState } from "react";
import { changePasswordAction } from "../app/actions/password";
import { INITIAL_PASSWORD_CHANGE_STATE } from "../lib/auth/password-change-state";
import { PASSWORD_MAX_LENGTH } from "../lib/auth/password-limits";

/** Formulário fora do workspace para destravar o acesso após senha temporária. */
export function PasswordChangeForm() {
  const [state, formAction, pending] = useActionState(
    changePasswordAction,
    INITIAL_PASSWORD_CHANGE_STATE,
  );

  return (
    <section className="mgh-card" aria-labelledby="mgh-password-change-title">
      <h2 id="mgh-password-change-title" className="mgh-heading-2">
        Trocar senha
      </h2>
      <p className="mgh-copy mgh-copy--muted">
        Defina uma nova senha para continuar. Nenhuma senha é exibida ou
        registrada nesta tela.
      </p>
      <form action={formAction} className="mgh-login-form">
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-password-current">
            Senha atual
          </label>
          <input
            id="mgh-password-current"
            name="currentPassword"
            type="password"
            className="mgh-input"
            autoComplete="current-password"
            maxLength={PASSWORD_MAX_LENGTH}
            required
          />
        </div>
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-password-new">
            Nova senha
          </label>
          <input
            id="mgh-password-new"
            name="newPassword"
            type="password"
            className="mgh-input"
            autoComplete="new-password"
            maxLength={PASSWORD_MAX_LENGTH}
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
            {pending ? "Alterando…" : "Alterar senha"}
          </button>
        </div>
      </form>
    </section>
  );
}
