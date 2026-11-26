import {
  FINAL_BUTTON,
  FINAL_TEXT,
  FINAL_TITLE,
} from "@/lib/canonical/instrument";

/** Encerramento literal: sem parabéns, sem relatório e sem score. */
export function NeutralConfirmation({ onFinish }: { onFinish: () => void }) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-confirmation-title">
      <h2 id="mgh-confirmation-title" className="mgh-heading-2">
        {FINAL_TITLE}
      </h2>
      {FINAL_TEXT.map((paragraph) => (
        <p key={paragraph} className="mgh-copy">
          {paragraph}
        </p>
      ))}
      <div className="mgh-actions">
        <button type="button" className="mgh-button" onClick={onFinish}>
          {FINAL_BUTTON}
        </button>
      </div>
    </section>
  );
}
