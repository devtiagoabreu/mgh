"use client";

import { setAppearanceAction } from "@/app/actions/appearance";
import {
  applyAppearanceAttributes,
  type AppearanceChoice,
  type AppearancePreference,
} from "@/lib/appearance/preference";

const OPTIONS: ReadonlyArray<{
  value: AppearanceChoice;
  label: string;
  help: string;
}> = [
  {
    value: "LIGHT",
    label: "Claro",
    help: "Superfície clara da Fase A.",
  },
  {
    value: "DARK",
    label: "Escuro",
    help: "Superfície escura com o MGH Design System v1.0.",
  },
  {
    value: "SYSTEM",
    label: "Seguir o sistema",
    help: "Usa a configuração de cor do dispositivo.",
  },
];

function resolvedSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Seletor completo de aparência. O `User` continua sendo a fonte
 * autoritativa; aqui a escolha é apenas aplicada na hora e enviada ao servidor
 * pelo próprio formulário. Nenhum dado do instrumento é lido ou gravado.
 */
export function AppearanceSelector({
  preference,
}: {
  preference: AppearancePreference | null;
}) {
  function choose(choice: AppearanceChoice) {
    applyAppearanceAttributes(
      choice === "SYSTEM"
        ? resolvedSystemTheme()
        : choice === "DARK"
          ? "dark"
          : "light",
    );
  }

  return (
    <section className="mgh-card" aria-labelledby="mgh-profile-appearance-title">
      <div className="mgh-card__header">
        <h2 id="mgh-profile-appearance-title" className="mgh-heading-2">
          Aparência
        </h2>
      </div>
      <p className="mgh-copy mgh-copy--muted">
        A escolha é aplicada imediatamente e salva quando você confirma.
      </p>
      <form action={setAppearanceAction}>
        <fieldset className="mgh-fieldset">
          <legend className="mgh-legend">Tema</legend>
          <div className="mgh-choice-list mgh-appearance-options">
            {OPTIONS.map((option) => (
              <label key={option.value} className="mgh-choice">
                <input
                  className="mgh-choice__input"
                  type="radio"
                  name="appearance"
                  value={option.value}
                  defaultChecked={(preference ?? "SYSTEM") === option.value}
                  onChange={() => choose(option.value)}
                />
                <span className="mgh-choice__text">
                  {option.label} — {option.help}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="mgh-actions">
          <button type="submit" className="mgh-button">
            Salvar aparência
          </button>
        </div>
      </form>
    </section>
  );
}
