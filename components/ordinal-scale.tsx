"use client";

import { PLACEHOLDER } from "./structural-copy";

type OrdinalScaleProps = {
  name: string;
  points: number;
  value: string;
  onChange: (value: string) => void;
  describedBy?: string;
};

/** Escala ordinal: radios nativos, sem pré-seleção e sem linguagem de acerto. */
export function OrdinalScale({
  name,
  points,
  value,
  onChange,
  describedBy,
}: OrdinalScaleProps) {
  return (
    <fieldset className="mgh-fieldset" aria-describedby={describedBy}>
      <legend className="mgh-legend">{PLACEHOLDER}</legend>
      <div className="mgh-choice-list">
        {Array.from({ length: points }, (_, index) => {
          const point = String(index + 1);
          const pointValue = `ponto-${point}`;
          return (
            <label
              key={pointValue}
              className={`mgh-choice ${value === pointValue ? "mgh-choice--selected" : ""}`}
            >
              <input
                className="mgh-choice__input"
                type="radio"
                name={name}
                value={pointValue}
                checked={value === pointValue}
                onChange={() => onChange(pointValue)}
                required
              />
              <span className="mgh-choice__text mgh-scale__point">
                <span className="mgh-visually-hidden">
                  {`Ponto ${point} de ${points}: `}
                </span>
                {point}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
