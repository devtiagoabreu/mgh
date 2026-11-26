import {
  PRE_INSTRUCTIONS,
  PRE_INSTRUCTIONS_BUTTON,
  PRE_INSTRUCTIONS_TITLE,
} from "@/lib/canonical/instrument";

/** P-04 — instruções antes dos cenários (08-data-model-e-prototipo.md). */
export function PreInstructions({ onStart }: { onStart: () => void }) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-pre-title">
      <h2 id="mgh-pre-title" className="mgh-heading-2">
        {PRE_INSTRUCTIONS_TITLE}
      </h2>
      {PRE_INSTRUCTIONS.map((paragraph) => (
        <p key={paragraph} className="mgh-copy">
          {paragraph}
        </p>
      ))}
      <div className="mgh-actions">
        <button type="button" className="mgh-button" onClick={onStart}>
          {PRE_INSTRUCTIONS_BUTTON}
        </button>
      </div>
    </section>
  );
}
