"use client";

import { useId, useState, type FormEvent } from "react";
import {
  CONSENT_BUTTON,
  CONSENT_CHECKBOXES,
  CONSENT_DECLINE,
  CONSENT_STATEMENT,
} from "@/lib/canonical/instrument";
import type { ConsentDecision } from "./structural-copy";

type ConsentGateProps = {
  onDecision: (decision: ConsentDecision) => void;
};

/**
 * Consentimento: texto metodológico literal de docs/002. Não é a redação
 * jurídica final. Nenhuma caixa vem marcada; recusar não registra resposta.
 */
export function ConsentGate({ onDecision }: ConsentGateProps) {
  const [accepted, setAccepted] = useState<boolean[]>(() =>
    CONSENT_CHECKBOXES.map(() => false),
  );
  const allAccepted = accepted.every(Boolean);
  const statementId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!allAccepted) {
      return;
    }
    onDecision("accept");
  }

  return (
    <form className="mgh-card" onSubmit={handleSubmit}>
      <h2 className="mgh-heading-2">Consentimento</h2>
      <p id={statementId} className="mgh-copy">
        {CONSENT_STATEMENT}
      </p>
      <p className="mgh-note">
        Texto metodológico do piloto. A redação jurídica final e o aviso de
        privacidade ainda dependem de revisão.
      </p>

      <div className="mgh-choice-list">
        {CONSENT_CHECKBOXES.map((label, index) => (
          <label key={label} className="mgh-choice">
            <input
              className="mgh-choice__input"
              type="checkbox"
              checked={accepted[index]}
              onChange={(event) => {
                const next = [...accepted];
                next[index] = event.target.checked;
                setAccepted(next);
              }}
              aria-describedby={statementId}
            />
            <span className="mgh-choice__text">{label}</span>
          </label>
        ))}
      </div>

      <div className="mgh-actions">
        <button type="submit" className="mgh-button" disabled={!allAccepted}>
          {CONSENT_BUTTON}
        </button>
        <button
          type="button"
          className="mgh-button mgh-button--secondary"
          onClick={() => onDecision("decline")}
        >
          {CONSENT_DECLINE}
        </button>
      </div>
    </form>
  );
}
