"use client";

import { useActionState } from "react";
import {
  createCollaboratorAction,
  grantToolAction,
  revokeToolAction,
} from "../app/actions/collaborators";
import { TEMPORARY_PASSWORD_NOTICE } from "../lib/auth/collaborator";
import {
  INITIAL_COLLABORATOR_ACTION_STATE,
  type CollaboratorActionState,
} from "../lib/actions/collaborator-state";
import { WORKSPACE_TOOL_KEYS } from "../lib/tools/catalog";

type Action = (
  state: CollaboratorActionState,
  formData: FormData,
) => Promise<CollaboratorActionState>;

function ToolGrantForm({
  action,
  label,
  secondary = false,
}: {
  readonly action: Action;
  readonly label: string;
  readonly secondary?: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    action,
    INITIAL_COLLABORATOR_ACTION_STATE,
  );
  const toolKey = WORKSPACE_TOOL_KEYS[0];
  return (
    <form action={formAction} className="mgh-inline-form">
      <input type="hidden" name="toolKey" value={toolKey} />
      <button
        className={secondary ? "mgh-button mgh-button--secondary" : "mgh-button"}
        type="submit"
        disabled={pending}
      >
        {pending ? "Aguarde…" : label}
      </button>
      {state.error ? (
        <p className="mgh-field-error" role="alert">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}

/** Cadastro com senha temporária gerada no servidor e exibida uma única vez. */
export function CreateCollaboratorForm() {
  const [state, formAction, pending] = useActionState(
    createCollaboratorAction,
    INITIAL_COLLABORATOR_ACTION_STATE,
  );
  const toolKey = WORKSPACE_TOOL_KEYS[0];
  return (
    <section className="mgh-card" aria-labelledby="mgh-novo-colaborador">
      <h2 id="mgh-novo-colaborador" className="mgh-heading-2">
        Novo colaborador
      </h2>
      <form action={formAction} className="mgh-login-form">
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-colaborador-email">
            E-mail
          </label>
          <input
            id="mgh-colaborador-email"
            name="email"
            type="email"
            className="mgh-input"
            autoComplete="off"
            maxLength={254}
            required
          />
        </div>
        <div className="mgh-field">
          <label className="mgh-label" htmlFor="mgh-colaborador-instrumento">
            Instrumento
          </label>
          <select
            id="mgh-colaborador-instrumento"
            name="toolKey"
            className="mgh-input"
            defaultValue={toolKey}
          >
            {WORKSPACE_TOOL_KEYS.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        {state.error ? (
          <p className="mgh-field-error" role="alert">
            {state.error}
          </p>
        ) : null}
        <button className="mgh-button" type="submit" disabled={pending}>
          {pending ? "Cadastrando…" : "Cadastrar"}
        </button>
      </form>
      {state.temporaryPassword ? (
        <div className="mgh-callout" role="status">
          <p>{TEMPORARY_PASSWORD_NOTICE}</p>
          <code className="mgh-temporary-password">
            {state.temporaryPassword}
          </code>
        </div>
      ) : null}
    </section>
  );
}

/** Grants são por workspace e por instrumento; MGH é a única chave atual. */
export function ToolGrantsForm() {
  const toolKey = WORKSPACE_TOOL_KEYS[0];
  return (
    <section className="mgh-card" aria-labelledby="mgh-grants-title">
      <h2 id="mgh-grants-title" className="mgh-heading-2">
        Instrumentos
      </h2>
      <p className="mgh-copy mgh-copy--muted">
        A concessão vale para todos os profissionais ativos deste workspace.
        Nenhum resultado ou resposta individual é exibido.
      </p>
      <div className="mgh-actions">
        <ToolGrantForm action={grantToolAction} label={`Conceder ${toolKey}`} />
        <ToolGrantForm
          action={revokeToolAction}
          label={`Revogar ${toolKey}`}
          secondary
        />
      </div>
    </section>
  );
}
