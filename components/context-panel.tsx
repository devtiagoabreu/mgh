"use client";

import { useId, useState, type FormEvent } from "react";
import {
  CONTEXT_FIELDS,
  CONTEXT_FROZEN,
} from "@/lib/canonical/instrument";

/**
 * Contexto profissional — não pontuado. Rótulos e opções literais de docs/002.
 * O campo de liderados só aparece quando a resposta é "Sim".
 */
export function ContextPanel({ onContinue }: { onContinue: () => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const titleId = useId();

  function setValue(id: string, value: string) {
    setAnswers((current) => {
      const next = { ...current, [id]: value };
      if (id === "lidera-pessoas" && value !== "Sim") {
        delete next["quantas-pessoas"];
      }
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onContinue();
  }

  return (
    <form className="mgh-card" onSubmit={handleSubmit} aria-labelledby={titleId}>
      <h2 id={titleId} className="mgh-heading-2">
        Contexto profissional
      </h2>
      <p className="mgh-copy">{CONTEXT_FROZEN}</p>
      <p className="mgh-note">
        Nada disso altera diretamente o escore MGH. São metadados para análise
        posterior.
      </p>

      {CONTEXT_FIELDS.map((field) => {
        const conditional =
          "conditionalOn" in field &&
          answers[field.conditionalOn] !== field.conditionalValue;
        if (conditional) {
          return null;
        }
        const legendId = `${titleId}-${field.id}`;
        return (
          <fieldset key={field.id} className="mgh-fieldset">
            <legend className="mgh-legend" id={legendId}>
              {field.label}
            </legend>
            {"optional" in field && field.optional ? (
              <p className="mgh-field-help">opcional.</p>
            ) : null}
            {field.options.length === 0 ? (
              <input
                className="mgh-input"
                type="text"
                value={answers[field.id] ?? ""}
                onChange={(event) => setValue(field.id, event.target.value)}
                aria-labelledby={legendId}
              />
            ) : (
              <div className="mgh-choice-list">
                {field.options.map((option) => (
                  <label
                    key={option}
                    className={`mgh-choice ${
                      answers[field.id] === option ? "mgh-choice--selected" : ""
                    }`}
                  >
                    <input
                      className="mgh-choice__input"
                      type="radio"
                      name={`mgh-context-${field.id}`}
                      value={option}
                      checked={answers[field.id] === option}
                      onChange={() => setValue(field.id, option)}
                    />
                    <span className="mgh-choice__text">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </fieldset>
        );
      })}

      <div className="mgh-actions">
        <button type="submit" className="mgh-button">
          Continuar
        </button>
      </div>
    </form>
  );
}
