"use client";

import { useId } from "react";
import type { RatingScenario } from "@/lib/canonical/instrument";

type RatingGroupProps = {
  scenario: RatingScenario;
  values: Record<string, string>;
  onChange: (subitemIndex: number, value: string) => void;
  describedBy?: string;
};

/** Telas PRC de avaliação independente: três recursos, escala 1 a 5 fixa. */
export function RatingGroup({
  scenario,
  values,
  onChange,
  describedBy,
}: RatingGroupProps) {
  const groupId = useId();

  return (
    <div className="mgh-rating-group">
      <p className="mgh-copy">{scenario.instruction}</p>
      {scenario.anchors ? (
        <p className="mgh-field-help">{scenario.anchors}</p>
      ) : null}
      {scenario.subitems.map((subitem, index) => {
        const legendId = `${groupId}-${index}`;
        return (
          <fieldset
            key={subitem}
            className="mgh-fieldset"
            aria-describedby={describedBy}
          >
            <legend className="mgh-legend" id={legendId}>
              {subitem}
            </legend>
            <div className="mgh-choice-list mgh-choice-list--inline">
              {Array.from({ length: 5 }, (_, step) => {
                const point = String(step + 1);
                const value = `ponto-${point}`;
                return (
                  <label
                    key={value}
                    className={`mgh-choice mgh-choice--compact ${
                      values[index] === value ? "mgh-choice--selected" : ""
                    }`}
                  >
                    <input
                      className="mgh-choice__input"
                      type="radio"
                      name={`${groupId}-${index}`}
                      value={value}
                      checked={values[index] === value}
                      onChange={() => onChange(index, value)}
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
      })}
    </div>
  );
}
