import type { ReactNode } from "react";

type EmptyStateProps = {
  action?: ReactNode;
};

/** Vazio: borda tracejada e texto sintético; distinto de erro e bloqueio. */
export function EmptyState({ action }: EmptyStateProps) {
  return (
    <section className="mgh-state mgh-state--empty" aria-labelledby="mgh-empty-title">
      <h2 id="mgh-empty-title" className="mgh-heading-2">
        Nada para mostrar
      </h2>
      <p className="mgh-copy">
        Estado estrutural sem conteúdo. Nenhuma resposta do instrumento é
        exibida aqui.
      </p>
      {action}
    </section>
  );
}
