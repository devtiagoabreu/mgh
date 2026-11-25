import type { ReactNode } from "react";
import { PLACEHOLDER, SCENARIO_TOTAL } from "./structural-copy";

type ScenarioCardProps = {
  /** Índice 1-based do cenário na sequência fixa. */
  index: number;
  headingId: string;
  children: ReactNode;
};

/**
 * Uma tela por cenário. O progresso é semântico (`<progress>` + texto x/48),
 * nunca pela contagem de respostas pontuáveis, e não há contador de tempo nem
 * reforço gamificado.
 */
export function ScenarioCard({
  index,
  headingId,
  children,
}: ScenarioCardProps) {
  return (
    <section className="mgh-card" aria-labelledby={headingId}>
      <div className="mgh-progress">
        <div className="mgh-progress__meta">
          <span>{`Cenário ${index} de ${SCENARIO_TOTAL}`}</span>
          <span className="mgh-progress__count" aria-hidden="true">
            {`${index}/${SCENARIO_TOTAL}`}
          </span>
        </div>
        <progress
          className="mgh-progress__track"
          value={index}
          max={SCENARIO_TOTAL}
          aria-label="Progresso do instrumento"
          aria-valuetext={`${index} de ${SCENARIO_TOTAL} cenários`}
        />
      </div>

      <h2 id={headingId} className="mgh-heading-2">
        {PLACEHOLDER}
      </h2>
      <p className="mgh-copy">{PLACEHOLDER}</p>
      {children}
    </section>
  );
}
