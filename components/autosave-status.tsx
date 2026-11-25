import { AUTOSAVE_LABELS, type AutosaveState } from "./structural-copy";

type AutosaveStatusProps = {
  state?: AutosaveState;
};

/**
 * Status de autosave. `role="status"` anuncia mudanças sem roubar o foco.
 * Falha bloqueante de carregamento/acesso usa `role="alert"` nos estados
 * `ErrorState` / `BlockedState`, não aqui.
 */
export function AutosaveStatus({ state = "idle" }: AutosaveStatusProps) {
  return (
    <p
      className={`mgh-autosave mgh-autosave--${state}`}
      role="status"
      aria-live="polite"
    >
      {AUTOSAVE_LABELS[state]}
    </p>
  );
}
