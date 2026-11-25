import { PLACEHOLDER } from "./structural-copy";

/** Feedback estrutural: sem score, sem perfil e sem interpretação. */
export function FeedbackPanel() {
  return (
    <section className="mgh-card" aria-labelledby="mgh-feedback-title">
      <h2 id="mgh-feedback-title" className="mgh-heading-2">
        Feedback
      </h2>
      <p className="mgh-copy">{PLACEHOLDER}</p>
      <p className="mgh-note">Não entra no cálculo.</p>
    </section>
  );
}
