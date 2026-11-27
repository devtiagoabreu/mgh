import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function source(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

describe("F3 — seletor de aparência e ativação do DS", () => {
  it("protege Perfil com sessão verificada e sem dados do instrumento", () => {
    const page = source("app/app/perfil/page.tsx");
    expect(page).toContain("requireVerifiedSession()");
    expect(page).toContain("findUserAppearancePreference");
    expect(page).toContain("<AppearanceSelector");
    expect(page).not.toContain("@/lib/canonical/instrument");
  });

  it("oferece três opções e grava no User com escopo de sessão", () => {
    const selector = source("components/appearance-selector.tsx");
    for (const value of ["LIGHT", "DARK", "SYSTEM"]) {
      expect(selector).toContain(`value: "${value}"`);
    }
    expect(selector).toContain('name="appearance"');
    expect(selector).toContain("setAppearanceAction");
  });

  it("limpa cookie e coluna ao seguir o sistema, e revalida as duas rotas", () => {
    const action = source("app/actions/appearance.ts");
    expect(action).toContain("AppearanceChoiceSchema");
    expect(action).toContain('parsed.data === "SYSTEM"');
    expect(action).toContain("clearUserAppearancePreference");
    expect(action).toContain("store.delete(APPEARANCE_COOKIE)");
    expect(action).toContain('revalidatePath("/app")');
    expect(action).toContain('revalidatePath("/app/perfil")');
  });

  it("liga o cabeçalho do instrumento ao Perfil", () => {
    const preview = source("components/structural-preview.tsx");
    expect(preview).toContain('href="/app/perfil"');
  });

  it("usa um único helper para aplicar tema e DS no cliente", () => {
    const toggle = source("components/theme-toggle.tsx");
    const selector = source("components/appearance-selector.tsx");
    expect(toggle).toContain("applyAppearanceAttributes(");
    expect(selector).toContain("applyAppearanceAttributes(");
    const assignment = /dataset\.theme\s*=(?!=)/;
    expect(assignment.test(toggle)).toBe(false);
    expect(assignment.test(selector)).toBe(false);
    expect(assignment.test(source("lib/appearance/preference.ts"))).toBe(true);
  });
});
