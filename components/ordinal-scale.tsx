"use client";

import { useId } from "react";

type OrdinalScaleProps = {
  name: string;
  legend: string;
  value: string;
  onChange: (value: string) => void;
  describedBy?: string;
};

/** Escala ordinal de 1 a 5: radios nativos, sem pré-seleção. */
export function OrdinalScale({
  name,
  legend,
  value,
  onChange,
  describedBy,
}: OrdinalScaleProps) {
  const legendId = useId();

  return (
    <fieldset className="mgh-fieldset" aria-describedby={describedBy}>
      <legend className="mgh-legend" id={legendId}>
        {legend}
      </legend>
      <div className="mgh-choice-list mgh-choice-list--inline">
        {Array.from({ length: 5 }, (_, index) => {
          const point = String(index + 1);
          const pointValue = `ponto-${point}`;
          return (
            <label
              key={pointValue}
              className={`mgh-choice mgh-choice--compact ${
                value === pointValue ? "mgh-choice--selected" : ""
              }`}
            >
              <input
                className="mgh-choice__input"
                type="radio"
                name={name}
                value={pointValue}
                checked={value === pointValue}
                onChange={() => onChange(pointValue)}
                aria-labelledby={legendId}
                required
              />
              <span className="mgh-choice__text mgh-scale__point">
                <span className="mgh-visually-hidden">
                  {`Ponto ${point} de 5: `}
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
