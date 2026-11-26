"use client";

type ForcedChoiceProps = {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  describedBy?: string;
};

/**
 * Escolha forçada com radio nativo e `<fieldset>/<legend>`. Nenhuma opção vem
 * pré-selecionada; `required` impede o avanço sem resposta. Os rótulos são
 * literais do instrumento; "Alternativas" é rótulo de interface.
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
      <legend className="mgh-visually-hidden">Alternativas</legend>
      <div className="mgh-choice-list">
        {options.map((option, index) => {
          const optionValue = `opcao-${index + 1}`;
          return (
            <label
              key={optionValue}
              className={`mgh-choice ${value === optionValue ? "mgh-choice--selected" : ""}`}
            >
              <input
                className="mgh-choice__input"
                type="radio"
                name={name}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                required
              />
              <span className="mgh-choice__text">
                <span className="mgh-visually-hidden">
                  {`Opção ${String.fromCharCode(65 + index)}: `}
                </span>
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
