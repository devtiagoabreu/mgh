type ErrorStateProps = {
  onRetry: () => void;
};

/**
 * Falha recuperável que impede o avanço: `role="alert"` + ação explícita.
 * A mensagem não afirma que algo foi salvo.
 */
export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <section
      className="mgh-state mgh-state--error"
      role="alert"
      aria-labelledby="mgh-error-title"
    >
      <h3 id="mgh-error-title" className="mgh-heading-3">
        Não foi possível carregar
      </h3>
      <p className="mgh-copy">
        Nenhuma resposta foi registrada. Você pode tentar novamente.
      </p>
      <div className="mgh-actions">
        <button
          type="button"
          className="mgh-button mgh-button--secondary"
          onClick={onRetry}
        >
          Tentar novamente
        </button>
      </div>
    </section>
  );
}
