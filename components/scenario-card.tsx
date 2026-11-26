import type { ReactNode } from "react";
import {
  SCENARIO_TOTAL,
  type Scenario,
} from "@/lib/canonical/instrument";

type ScenarioCardProps = {
  scenario: Scenario;
  headingId: string;
  children: ReactNode;
};

/**
 * Uma situação por tela. O progresso usa a linguagem do produto — "Seu Mapa
 * está X% construído" — calculado por cenário, nunca por resposta pontuável.
 * Códigos, lentes e facetas não aparecem para o participante.
 */
export function ScenarioCard({
  scenario,
  headingId,
  children,
}: ScenarioCardProps) {
  const percent = Math.floor((scenario.order / SCENARIO_TOTAL) * 100);

  return (
    <section className="mgh-card" aria-labelledby={headingId}>
      <div className="mgh-progress">
        <p className="mgh-progress__label">
          {`Seu Mapa está ${percent}% construído.`}
        </p>
        <progress
          className="mgh-progress__track"
          value={scenario.order}
          max={SCENARIO_TOTAL}
          aria-label="Progresso do instrumento"
          aria-valuetext={`${percent}% construído`}
        />
      </div>

      <h2 id={headingId} className="mgh-heading-2">
        {scenario.prompt}
      </h2>
      {children}
    </section>
  );
}
