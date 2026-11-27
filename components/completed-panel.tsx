import { COMPLETED_TEXT, COMPLETED_TITLE } from "@/lib/canonical/instrument";

/**
 * P-14 — Tela final (08:1893-1909). Encerramento sem resultado, score ou
 * perfil. O botão de reinício é apenas controle da demonstração.
 */
export function CompletionPanel({ onRestart }: { onRestart: () => void }) {
  return (
    <section className="mgh-card" aria-labelledby="mgh-completed-title">
      <h2 id="mgh-completed-title" className="mgh-heading-2">
        {COMPLETED_TITLE}
      </h2>
      {COMPLETED_TEXT.map((paragraph) => (
        <p key={paragraph} className="mgh-copy">
          {paragraph}
        </p>
      ))}
      <div className="mgh-actions">
        <button
          type="button"
          className="mgh-button mgh-button--secondary"
          onClick={onRestart}
        >
          Reiniciar demonstração
        </button>
      </div>
    </section>
  );
}
