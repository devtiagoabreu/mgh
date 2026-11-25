"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "mgh-theme";

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

function getServerSnapshot() {
  return false;
}

/** Alterna o atributo `data-theme`; componentes nunca trocam de classe. */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Preferência não persistida; o tema atual continua aplicado.
    }
  }

  return (
    <button
      type="button"
      className="mgh-button mgh-button--ghost"
      onClick={toggle}
      aria-pressed={isDark}
    >
      Modo escuro
    </button>
  );
}
