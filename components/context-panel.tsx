import { PLACEHOLDER } from "./structural-copy";

/** Contexto anterior ao instrumento: texto sintético, sem redação definitiva. */
export function ContextPanel() {
  return (
    <section className="mgh-card" aria-labelledby="mgh-context-title">
      <h2 id="mgh-context-title" className="mgh-heading-2">
        Contexto
      </h2>
      <p className="mgh-copy">{PLACEHOLDER}</p>
      <p className="mgh-copy mgh-copy--muted">{PLACEHOLDER}</p>
      <p className="mgh-note">Não é diagnóstico, laudo ou decisão automática.</p>
    </section>
  );
}
