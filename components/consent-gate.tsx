"use client";

import { useId, useState, type FormEvent } from "react";
import {
  CONSENT_CONTROLS,
  PLACEHOLDER,
  type ConsentDecision,
} from "./structural-copy";

type ConsentGateProps = {
  onDecision: (decision: ConsentDecision) => void;
};

/**
 * Estrutura de consentimento — sem registro, sem persistência e sem redação
 * definitiva. Nenhuma opção vem pré-marcada; o opt-out é visível e equivalente.
 */
export function ConsentGate({ onDecision }: ConsentGateProps) {
  const [choice, setChoice] = useState<"" | ConsentDecision>("");
  const [error, setError] = useState(false);
  const helpId = useId();
  const errorId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (choice === "") {
      setError(true);
      return;
    }
    setError(false);
    onDecision(choice);
  }

  return (
    <form className="mgh-card" onSubmit={handleSubmit}>
      <h2 className="mgh-heading-2">{PLACEHOLDER}</h2>
      <p className="mgh-copy">{PLACEHOLDER}</p>
      <p className="mgh-copy mgh-copy--muted">{PLACEHOLDER}</p>

      <fieldset
        className="mgh-fieldset"
        aria-describedby={error ? `${helpId} ${errorId}` : helpId}
      >
        <legend className="mgh-legend">{PLACEHOLDER}</legend>
        <div className="mgh-choice-list">
          {(Object.keys(CONSENT_CONTROLS) as ConsentDecision[]).map((key) => (
            <label
              key={key}
              className={`mgh-choice ${choice === key ? "mgh-choice--selected" : ""}`}
            >
              <input
                className="mgh-choice__input"
                type="radio"
                name="mgh-consent"
                value={key}
                checked={choice === key}
                onChange={() => {
                  setChoice(key);
                  setError(false);
                }}
                required
              />
              <span className="mgh-choice__text">
                {CONSENT_CONTROLS[key]} — {PLACEHOLDER}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p id={helpId} className="mgh-field-help">
        Nenhuma escolha é salva nesta demonstração estrutural.
      </p>
      {error ? (
        <p id={errorId} className="mgh-field-error" role="alert">
          Selecione uma opção para continuar.
        </p>
      ) : null}

      <div className="mgh-actions">
        <button type="submit" className="mgh-button">
          Continuar
        </button>
      </div>
    </form>
  );
}
