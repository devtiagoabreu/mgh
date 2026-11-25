import { PLACEHOLDER } from "./structural-copy";

/** Confirmação neutra: sem parabéns, sem relatório, sem próxima ação vendida. */
export function NeutralConfirmation() {
  return (
    <section className="mgh-card" aria-labelledby="mgh-confirmation-title">
      <h2 id="mgh-confirmation-title" className="mgh-heading-2">
        Confirmação
      </h2>
      <p className="mgh-copy">{PLACEHOLDER}</p>
    </section>
  );
}
