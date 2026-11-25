import type { ReactNode } from "react";
import { PLACEHOLDER } from "./structural-copy";

type EmptyStateProps = {
  action?: ReactNode;
};

/** Vazio: borda tracejada e texto sintético; distinto de erro e bloqueio. */
export function EmptyState({ action }: EmptyStateProps) {
  return (
    <section className="mgh-state mgh-state--empty" aria-labelledby="mgh-empty-title">
      <h3 id="mgh-empty-title" className="mgh-heading-3">
        Nada para mostrar
      </h3>
      <p className="mgh-copy">{PLACEHOLDER}</p>
      {action}
    </section>
  );
}
