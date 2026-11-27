import { describe, expect, it } from "vitest";
import {
  APPEARANCE_COOKIE,
  appearanceBootScript,
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

  it("o script de boot só aplica o cookie validado, sem localStorage", () => {
    const script = appearanceBootScript();
    expect(script).toContain(APPEARANCE_COOKIE);
    expect(script).toContain("document.cookie");
    expect(script).not.toContain("localStorage");
    expect(script).toMatch(/t!=='light'&&t!=='dark'/);
    expect(script).toContain("prefers-color-scheme: dark");
  });
});
