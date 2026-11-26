import {
  POST_SCENARIO_TEXT,
  POST_SCENARIO_TITLE,
} from "@/lib/canonical/instrument";

/** Transição literal entre o cenário 48 e o registro reflexivo. */
export function TransitionPanel({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-transition-title">
      <h2 id="mgh-transition-title" className="mgh-heading-2">
        {POST_SCENARIO_TITLE}
      </h2>
      {POST_SCENARIO_TEXT.map((paragraph) => (
        <p key={paragraph} className="mgh-copy">
          {paragraph}
        </p>
      ))}
      <div className="mgh-actions">
        <button type="button" className="mgh-button" onClick={onContinue}>
          Continuar
        </button>
      </div>
    </section>
  );
}
