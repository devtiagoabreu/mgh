import { describe, expect, it } from "vitest";
import {
  APPEARANCE_COOKIE,
  AppearanceChoiceSchema,
  MGH_DS_ATTRIBUTE_VALUE,
  appearanceBootScript,
  applyAppearanceAttributes,
  parseAppearanceCookieValue,
  parseStoredPreference,
  toCookieValue,
} from "../../lib/appearance/preference";

describe("F1 — preferência de aparência", () => {
  it("aceita apenas LIGHT/DARK como valor persistido", () => {
    expect(parseStoredPreference("LIGHT")).toBe("LIGHT");
    expect(parseStoredPreference("DARK")).toBe("DARK");
    for (const raw of [null, undefined, "", "light", "SYSTEM", 1, {}]) {
      expect(parseStoredPreference(raw)).toBeNull();
    }
  });

  it("aceita apenas light/dark no cookie-espelho", () => {
    expect(parseAppearanceCookieValue("light")).toBe("LIGHT");
    expect(parseAppearanceCookieValue("dark")).toBe("DARK");
    for (const raw of [
      null,
      undefined,
      "",
      "LIGHT",
      "DARK",
      "system",
      "blue",
      0,
    ]) {
      expect(parseAppearanceCookieValue(raw)).toBeNull();
    }
  });

  it("escreve o cookie em minúsculas", () => {
    expect(toCookieValue("LIGHT")).toBe("light");
    expect(toCookieValue("DARK")).toBe("dark");
  });

  it("aceita apenas três opções no seletor completo", () => {
    expect(AppearanceChoiceSchema.parse("LIGHT")).toBe("LIGHT");
    expect(AppearanceChoiceSchema.parse("DARK")).toBe("DARK");
    expect(AppearanceChoiceSchema.parse("SYSTEM")).toBe("SYSTEM");
    expect(AppearanceChoiceSchema.safeParse("system").success).toBe(false);
  });

  it("o script de boot só aplica o cookie validado, sem localStorage", () => {
    const script = appearanceBootScript();
    expect(script).toContain(APPEARANCE_COOKIE);
    expect(script).toContain("document.cookie");
    expect(script).not.toContain("localStorage");
    expect(script).toMatch(/t!=='light'&&t!=='dark'/);
    expect(script).toContain("prefers-color-scheme: dark");
  });

  it("ativa o DS somente no tema escuro, antes da primeira pintura", () => {
    const script = appearanceBootScript();
    expect(script).toContain(
      `document.documentElement.dataset.ds='${MGH_DS_ATTRIBUTE_VALUE}'`,
    );
    expect(script).toContain("delete document.documentElement.dataset.ds");
  });

  it("mantém tema e DS sincronizados no cliente", () => {
    const previous = (globalThis as { document?: unknown }).document;
    const dataset: Record<string, string> = {};
    (globalThis as { document?: unknown }).document = {
      documentElement: { dataset },
    };
    try {
      applyAppearanceAttributes("dark");
      expect(dataset).toEqual({
        theme: "dark",
        ds: MGH_DS_ATTRIBUTE_VALUE,
      });
      applyAppearanceAttributes("light");
      expect(dataset).toEqual({ theme: "light" });
    } finally {
      (globalThis as { document?: unknown }).document = previous;
    }
  });
});
