"use client";

import { setAppearanceAction } from "@/app/actions/appearance";
import type { AppearancePreference } from "@/lib/appearance/preference";
import { useEffect, useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

/**
 * Alterna o tema e persiste a escolha via Server Action. O cookie-espelho é
 * gravado no servidor; aqui a mudança é aplicada na hora para não esperar o
 * arredondamento da rede. A fonte autoritativa continua sendo o `User`.
 */
export function ThemeToggle({
  preference,
}: {
  preference: AppearancePreference | null;
}) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => preference === "DARK",
  );
  const label = isDark ? "Ativar modo claro" : "Ativar modo escuro";

  // Após a revalidação, reconcilia o DOM com a fonte autoritativa.
  // Sem preferência salva, mantém a decisão do script de boot (sistema).
  useEffect(() => {
    if (preference === null) return;
    const target = preference === "DARK" ? "dark" : "light";
    if (document.documentElement.dataset.theme !== target) {
      document.documentElement.dataset.theme = target;
    }
  }, [preference]);

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    const formData = new FormData();
    formData.set("appearance", next.toUpperCase());
    void setAppearanceAction(formData);
  }

  return (
    <button
      type="button"
      className="mgh-icon-button"
      onClick={toggle}
      title={label}
      aria-label={label}
    >
      {isDark ? (
        <svg
          className="mgh-icon-button__icon"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
      ) : (
        <svg
          className="mgh-icon-button__icon"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}
