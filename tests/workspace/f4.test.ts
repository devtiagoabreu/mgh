import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function source(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

describe("F4 — casca SaaS do workspace", () => {
  it("protege todas as rotas /app com sessão verificada", () => {
    const layout = source("app/app/layout.tsx");
    expect(layout).toContain("requireVerifiedSession()");
    expect(layout).toContain("<WorkspaceNav");
    expect(layout).toContain('className="mgh-workspace"');
  });

  it("oferece apenas três destinos e marca o link ativo", () => {
    const nav = source("components/workspace-nav.tsx");
    expect(nav).toContain('href: "/app"');
    expect(nav).toContain('href: "/app/mgh"');
    expect(nav).toContain('href: "/app/perfil"');
    expect(nav).toContain("usePathname");
    expect(nav).toContain('aria-current={pathname === href ? "page" : undefined}');
    expect(nav).toContain('aria-label="Navegação do workspace"');
  });

  it("oculta a navegação com drawer mobile e sidebar recolhível", () => {
    const nav = source("components/workspace-nav.tsx");
    const css = source("app/globals.css");
    expect(nav).toContain("drawerOpen");
    expect(nav).toContain("collapsed");
    expect(nav).toContain("aria-expanded={drawerOpen}");
    expect(nav).toContain('aria-controls="mgh-nav-drawer"');
    expect(nav).toContain('aria-controls="mgh-nav-list"');
    expect(nav).toContain('event.key === "Escape"');
    expect(nav).toContain('setAttribute("inert", "")');
    expect(nav).toContain('removeAttribute("inert")');
    expect(nav).toContain('querySelector<HTMLElement>(".mgh-skip-link")');
    expect(nav).toContain("requestAnimationFrame");
    expect(nav).toContain('window.matchMedia("(min-width: 60rem)")');
    expect(css).toContain(".mgh-workspace .mgh-nav-toggle");
    expect(css).toContain(".mgh-sidebar .mgh-sidebar__collapse");
    expect(css).toContain(".mgh-sidebar--open");
    expect(css).toContain(".mgh-sidebar--collapsed");
    expect(css).toContain(".mgh-nav-backdrop");
  });

  it("não nomeia módulos congelados do Parking Lot", () => {
    const nav = source("components/workspace-nav.tsx");
    const home = source("app/app/page.tsx");
    const text = `${nav}\n${home}`;
    for (const frozen of [
      "Mapa de Relação",
      "Sala de Comando Humana",
      "dashboard organizacional",
      "MGH 360",
      "matching",
      "compatibilidade percentual",
    ]) {
      expect(text).not.toContain(frozen);
    }
    expect(nav).toContain("indisponíveis");
  });

  it("exibe KPIs operacionais reais e o campo de limitação obrigatório", () => {
    const home = source("app/app/page.tsx");
    expect(home).toContain("requireVerifiedSession()");
    expect(home).toContain("getMghOperationalRaw");
    expect(home).toContain("deriveMghOperationalMetrics");
    expect(home).toContain('href="/app/mgh"');
    expect(home).toContain("Execuções concluídas");
    expect(home).toContain("Taxa de conclusão");
    expect(home).toContain("O que estes dados NÃO permitem dizer:");
    expect(home).toContain("participante real foi liberado");
    expect(home).not.toContain("@/lib/canonical/instrument");
    expect(home).not.toContain("@/lib/engine");
    expect(home).not.toContain("D/I/S/C");
  });

  it("estilos do dashboard usam tokens e sobrevivem a forced-colors", () => {
    const css = source("app/globals.css");
    for (const selector of [
      ".mgh-shell--dashboard",
      ".mgh-dashboard__intro",
      ".mgh-section-heading",
      ".mgh-badge",
      ".mgh-kpi-grid",
      ".mgh-kpi__value",
      ".mgh-card--module",
      ".mgh-dashboard__versions",
    ]) {
      expect(css).toContain(selector);
    }
    const forced = css.slice(css.indexOf("@media (forced-colors: active)"));
    expect(forced).toContain(".mgh-kpi");
    expect(forced).toContain(".mgh-badge");
  });

  it("move o instrumento para /app/mgh sem alterar o componente", () => {
    const modulePage = source("app/app/mgh/page.tsx");
    expect(modulePage).toContain("<StructuralPreview");
    expect(modulePage).toContain("requireVerifiedSession()");
    expect(modulePage).toContain("findUserAppearancePreference");
  });

  it("atualiza o retorno do Perfil e a revalidação da preferência", () => {
    expect(source("app/app/perfil/page.tsx")).toContain('href="/app/mgh"');
    expect(source("app/actions/appearance.ts")).toContain(
      'revalidatePath("/app/mgh")',
    );
  });
});
