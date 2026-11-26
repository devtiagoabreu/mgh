import {
  OPENING_BUTTON,
  OPENING_INSTRUCTIONS,
  OPENING_TITLE,
} from "@/lib/canonical/instrument";

/** TELA 0 — boas-vindas: texto metodológico congelado (item 34 do handoff). */
export function OpeningPanel({ onStart }: { onStart: () => void }) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-opening-title">
      <h2 id="mgh-opening-title" className="mgh-heading-2">
        {OPENING_TITLE}
      </h2>
      {OPENING_INSTRUCTIONS.map((paragraph) => (
        <p key={paragraph} className="mgh-copy">
          {paragraph}
        </p>
      ))}
      <div className="mgh-actions">
        <button type="button" className="mgh-button" onClick={onStart}>
          {OPENING_BUTTON}
        </button>
      </div>
    </section>
  );
}
