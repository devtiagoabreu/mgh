import type { RefObject } from "react";
import {
  FINAL_BUTTON,
  FINAL_TEXT,
  FINAL_TITLE,
} from "@/lib/canonical/instrument";

type NeutralConfirmationProps = {
  buttonRef: RefObject<HTMLButtonElement | null>;
  onFinish: () => void;
};

/** Encerramento literal: sem parabéns, sem relatório e sem score. */
export function NeutralConfirmation({
  buttonRef,
  onFinish,
}: NeutralConfirmationProps) {
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
        <button
          ref={buttonRef}
          type="button"
          className="mgh-button"
          onClick={onFinish}
        >
          {FINAL_BUTTON}
        </button>
      </div>
    </section>
  );
}
