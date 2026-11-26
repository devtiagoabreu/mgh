"use client";

import {
  SELF_ITEMS,
  SELF_SCALE_ANCHORS,
} from "@/lib/canonical/instrument";
import { OrdinalScale } from "./ordinal-scale";

type SelfPanelProps = {
  values: Record<string, string>;
  onChange: (code: string, value: string) => void;
};

/** Oito afirmações auxiliares, fora do score (transcritas de docs/002). */
export function SelfPanel({ values, onChange }: SelfPanelProps) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-self-title">
      <h2 id="mgh-self-title" className="mgh-heading-2">
        Registro reflexivo
      </h2>
      <p className="mgh-field-help">{SELF_SCALE_ANCHORS}</p>
      {SELF_ITEMS.map((item, index) => (
        <div key={item.code} className="mgh-self-item">
          <p className="mgh-kicker">{`${index + 1} de ${SELF_ITEMS.length}`}</p>
          <OrdinalScale
            name={`mgh-self-${item.code}`}
            legend={item.statement}
            value={values[item.code] ?? ""}
            onChange={(value) => onChange(item.code, value)}
          />
        </div>
      ))}
      <p className="mgh-note">Não entra no cálculo.</p>
    </section>
  );
}
