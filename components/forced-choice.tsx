"use client";

import { PLACEHOLDER } from "./structural-copy";

type ChoiceOption = {
  id: string;
  label: string;
};

type ForcedChoiceProps = {
  name: string;
  options: readonly ChoiceOption[];
  value: string;
  onChange: (value: string) => void;
  describedBy?: string;
};

/**
 * Escolha forçada com radio nativo e `<fieldset>/<legend>`. Nenhuma opção vem
 * pré-selecionada; `required` impede o avanço sem resposta.
 */
export function ForcedChoice({
  name,
  options,
  value,
  onChange,
  describedBy,
}: ForcedChoiceProps) {
  return (
    <fieldset className="mgh-fieldset" aria-describedby={describedBy}>
      <legend className="mgh-legend">{PLACEHOLDER}</legend>
      <div className="mgh-choice-list">
        {options.map((option, index) => (
          <label
            key={option.id}
            className={`mgh-choice ${value === option.id ? "mgh-choice--selected" : ""}`}
          >
            <input
              className="mgh-choice__input"
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              required
            />
            <span className="mgh-choice__text">
              <span className="mgh-visually-hidden">
                {`Opção ${String.fromCharCode(65 + index)}: `}
              </span>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
