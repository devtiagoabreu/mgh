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
    expect(layout).toContain("<WorkspaceNav />");
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

  it("mantém a visão geral estrutural, sem dados do instrumento", () => {
    const home = source("app/app/page.tsx");
    expect(home).toContain("requireVerifiedSession()");
    expect(home).toContain('href="/app/mgh"');
    expect(home).toContain("Nenhum participante real foi liberado");
    expect(home).not.toContain("@/lib/canonical/instrument");
    expect(home).not.toContain("@/lib/engine");
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
