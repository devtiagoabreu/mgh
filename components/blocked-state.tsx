import type { ReactNode } from "react";

type BlockedStateProps = {
  /** Razão em nível de interface — nunca redação de consentimento. */
  reason?: ReactNode;
};

/**
 * Bloqueio de acesso: também é `role="alert"`, mas não oferece "tentar de novo"
 * — a distinção visual é a borda de cautela e a ausência de ação automática.
 */
export function BlockedState({ reason }: BlockedStateProps) {
  return (
    <section
      className="mgh-state mgh-state--blocked"
      role="alert"
      aria-labelledby="mgh-blocked-title"
    >
      <h3 id="mgh-blocked-title" className="mgh-heading-3">
        Acesso indisponível
      </h3>
      <p className="mgh-copy">
        {reason ?? "Acesso indisponível nesta demonstração estrutural."}
      </p>
      <p className="mgh-note">Nenhuma resposta foi registrada.</p>
    </section>
  );
}
