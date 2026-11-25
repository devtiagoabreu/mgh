"use client";

import { PLACEHOLDER } from "./structural-copy";

type SelfPromptProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

/** SELF: registro reflexivo fora do score. Pular não gera penalidade. */
export function SelfPrompt({ id, value, onChange }: SelfPromptProps) {
  return (
    <div className="mgh-card">
      <label className="mgh-legend" htmlFor={id}>
        {PLACEHOLDER}
      </label>
      <textarea
        id={id}
        className="mgh-textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={`${id}-help`}
        rows={3}
      />
      <p id={`${id}-help`} className="mgh-field-help">
        {PLACEHOLDER}
      </p>
      <p className="mgh-note">Não entra no cálculo.</p>
    </div>
  );
}
