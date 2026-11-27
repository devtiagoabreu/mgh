import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const source = readFileSync(
  resolve(root, "docs/mgh-design-system/mgh-design-system-01.md"),
  "utf8",
);
const css = readFileSync(resolve(root, "app/mgh-ds-v1.css"), "utf8");
const layout = readFileSync(resolve(root, "app/layout.tsx"), "utf8");

const declaration = (token: string): string => {
  const match = css.match(new RegExp(`${token}:\\s*([^;]+);`));
  expect(match, `token ausente: ${token}`).not.toBeNull();
  return match![1]
    .replace(/\s+/g, " ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();
};

const typography = source.split("### 2.2.")[1].split("---")[0];
const hasTypography = (
  label: string,
  size: string,
  leading: string,
  weight: string,
) => {
  const line = typography
    .split(/\r?\n/)
    .find((candidate) => candidate.includes(`**${label}**`));
  expect(line, `estilo ausente: ${label}`).toBeDefined();
  expect(line).toContain(`\`${size}\``);
  expect(line).toContain(`\`Line Height: ${leading}\``);
  expect(line).toContain(`\`Font Weight: ${weight}`);
};

const rgb = (hex: string) => {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((index) =>
    parseInt(value.slice(index, index + 2), 16),
  );
};

const luminance = (hex: string) => {
  const [red, green, blue] = rgb(hex).map((channel) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

/* Cálculo derivado (WCAG 2.x sRGB), não valor definido pela metodologia. */
const contrast = (foreground: string, background: string): string => {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort(
    (first, second) => second - first,
  );
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
};

const colors: Array<[string, string]> = [
  ["--mgh-ds-primitive-color-obsidian-950", "#0B0E1B"],
  ["--mgh-ds-primitive-color-obsidian-900", "#0F172A"],
  ["--mgh-ds-primitive-color-obsidian-800", "#13192E"],
  ["--mgh-ds-primitive-color-obsidian-700", "#1E293B"],
  ["--mgh-ds-primitive-color-purple-electric", "#8B5CF6"],
  ["--mgh-ds-primitive-color-purple-glow", "#7C3AED"],
  ["--mgh-ds-primitive-color-cyan-vibrant", "#06B6D4"],
  ["--mgh-ds-primitive-color-cyan-light", "#38BDF8"],
  ["--mgh-ds-primitive-color-emerald", "#10B981"],
  ["--mgh-ds-primitive-color-rose", "#EF4444"],
  ["--mgh-ds-primitive-color-dominance", "#F43F5E"],
  ["--mgh-ds-primitive-color-influence", "#F59E0B"],
  ["--mgh-ds-primitive-color-compliance", "#3B82F6"],
  ["--mgh-ds-primitive-color-magenta", "#EC4899"],
];

describe("MGH Design System v1.0 em CSS", () => {
  it("transcreve as cores literais da especificação", () => {
    for (const [token, hex] of colors) {
      expect(source, `hex ausente na fonte: ${hex}`).toContain(hex);
      expect(declaration(token)).toBe(hex);
    }
    expect(source).toContain("rgba(255, 255, 255, 0.08)");
    expect(declaration("--mgh-ds-primitive-color-border-glass")).toBe(
      "rgba(255, 255, 255, 0.08)",
    );
    expect(source).toContain("text-white");
    expect(declaration("--mgh-ds-primitive-color-text")).toBe("#FFFFFF");
  });

  it("traduz classes literais das seções 3 e 4 sem inventar valores", () => {
    expect(source).toContain("border-white/5");
    expect(declaration("--mgh-ds-primitive-color-border-subtle")).toBe(
      "rgba(255, 255, 255, 0.05)",
    );
    expect(source).toContain("bg-purple-500/10");
    expect(declaration("--mgh-ds-primitive-color-purple-soft")).toBe(
      "rgba(139, 92, 246, 0.10)",
    );
    expect(declaration("--mgh-ds-primitive-color-text-muted")).toBe(
      "var(--mgh-primitive-color-n-300)",
    );
  });

  it("transcreve tipografia, raios, sombras e movimentos documentados", () => {
    hasTypography("Display H1", "32px", "40px", "700 (Bold)");
    hasTypography("Heading H2", "24px", "32px", "600 (SemiBold)");
    hasTypography("Heading H3", "18px", "24px", "600 (SemiBold)");
    hasTypography("Body Normal", "14px", "20px", "400 (Regular)");
    hasTypography("Body Small", "12px", "16px", "500 (Medium)");
    expect(typography).toContain("`13px`");
    expect(typography).toContain("JetBrains Mono");

    expect(declaration("--mgh-ds-primitive-font-display")).toBe("32px");
    expect(declaration("--mgh-ds-primitive-font-h2")).toBe("24px");
    expect(declaration("--mgh-ds-primitive-font-h3")).toBe("18px");
    expect(declaration("--mgh-ds-primitive-font-body")).toBe("14px");
    expect(declaration("--mgh-ds-primitive-font-small")).toBe("12px");
    expect(declaration("--mgh-ds-primitive-font-mono")).toBe("13px");
    expect(declaration("--mgh-ds-primitive-weight-semibold")).toBe("600");

    for (const [token, value] of [
      ["--mgh-ds-primitive-radius-sm", "6px"],
      ["--mgh-ds-primitive-radius-md", "12px"],
      ["--mgh-ds-primitive-radius-lg", "16px"],
      ["--mgh-ds-primitive-radius-xl", "24px"],
      ["--mgh-ds-primitive-radius-2xl", "20px"],
      ["--mgh-ds-primitive-radius-3xl", "24px"],
      ["--mgh-ds-primitive-shadow-card", "0 10px 30px -10px rgba(0, 0, 0, 0.5)"],
    ] as Array<[string, string]>) {
      expect(source).toContain(value);
      expect(declaration(token)).toBe(value);
    }

    /* duration-200/300 são classes documentadas, não literais ms. */
    expect(source).toContain("duration-200");
    expect(declaration("--mgh-ds-primitive-motion-200")).toBe("200ms");
    expect(source).toContain("duration-300");
    expect(declaration("--mgh-ds-primitive-motion-300")).toBe("300ms");
  });

  it("usa os glows da seção 2.3 e registra a divergência da seção 5", () => {
    expect(declaration("--mgh-ds-primitive-shadow-glow-purple")).toBe(
      "0 0 20px rgba(139, 92, 246, 0.35)",
    );
    expect(declaration("--mgh-ds-primitive-shadow-glow-cyan")).toBe(
      "0 0 20px rgba(6, 182, 212, 0.35)",
    );
    expect(source).toContain("0 0 20px rgba(139, 92, 246, 0.35)");
    expect(source).toContain("0 0 25px rgba(139, 92, 246, 0.3)");
    expect(css).not.toContain("0 0 25px rgba(139, 92, 246, 0.3)");
  });

  it("transcreve os gradientes e as cores das lentes diagnósticas", () => {
    expect(declaration("--mgh-ds-primitive-gradient-mesh")).toBe(
      "linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #EC4899 100%)",
    );
    expect(declaration("--mgh-ds-primitive-gradient-progress")).toBe(
      "linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)",
    );
    expect(declaration("--mgh-ds-primitive-gradient-dr")).toBe(
      "linear-gradient(#8B5CF6, #06B6D4)",
    );
    expect(declaration("--mgh-ds-color-dominance")).toBe(
      "var(--mgh-ds-primitive-color-dominance)",
    );
    expect(declaration("--mgh-ds-color-visual")).toBe(
      "var(--mgh-ds-primitive-color-purple-electric)",
    );
    expect(declaration("--mgh-ds-color-kinesthetic")).toBe(
      "var(--mgh-ds-primitive-color-magenta)",
    );
  });

  it("ativa por data-ds sem alterar data-theme nem componentes", () => {
    expect(css).toContain(':root[data-ds="mgh-v1"]');
    expect(css).not.toContain("[data-theme");
    expect(declaration("--mgh-color-surface")).toBe(
      "var(--mgh-ds-primitive-color-obsidian-950)",
    );
    expect(declaration("--mgh-color-action-bg")).toBe(
      "var(--mgh-ds-primitive-color-purple-electric)",
    );
    expect(declaration("--mgh-color-focus")).toBe(
      "var(--mgh-ds-primitive-color-purple-glow)",
    );
    const globals = layout.indexOf('import "./globals.css";');
    const ds = layout.indexOf('import "./mgh-ds-v1.css";');
    expect(globals).toBeGreaterThanOrEqual(0);
    expect(ds).toBeGreaterThan(globals);
  });

  it("mantém valores crus somente na camada primitiva", () => {
    const rawColor = /(#[0-9a-fA-F]{3,8}\b|rgba?\(|oklch\()/;
    let inPrimitive = false;
    for (const line of css.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (trimmed.startsWith("*") || trimmed.startsWith("/*")) continue;
      if (trimmed.startsWith("--mgh-ds-primitive-")) {
        inPrimitive = !trimmed.endsWith(";");
        continue;
      }
      if (inPrimitive) {
        if (trimmed.endsWith(";")) inPrimitive = false;
        continue;
      }
      if (rawColor.test(line)) {
        throw new Error(`valor cru fora da camada primitiva: ${trimmed}`);
      }
    }
  });

  it("registra contrastes calculados dos pares descritos na especificação", () => {
    const obsidian950 = "#0B0E1B";
    const obsidian900 = "#0F172A";
    const obsidian800 = "#13192E";
    const white = "#FFFFFF";
    const purple = "#8B5CF6";
    const purpleGlow = "#7C3AED";
    const cyanLight = "#38BDF8";
    const emerald = "#10B981";
    const rose = "#EF4444";

    expect(contrast(white, obsidian950)).toBe("19.22");
    expect(contrast(purple, obsidian950)).toBe("4.54");
    expect(contrast(purple, obsidian900)).toBe("4.22");
    expect(contrast(cyanLight, obsidian900)).toBe("8.33");
    expect(contrast(emerald, obsidian800)).toBe("6.86");
    expect(contrast(rose, obsidian950)).toBe("5.11");
    expect(contrast(purpleGlow, obsidian800)).toBe("3.06");

    /* FINDING da F2: o documento define text-white sobre purple-electric;
     * o cálculo derivado dá 4.23:1, abaixo de 4.5:1 para texto normal.
     * Decisão F3 (usuário, 27/11/2026): manter o fundo e trocar o texto para
     * obsidian-950, que resulta em 4.54:1. Nenhuma cor foi inventada. */
    expect(contrast(white, purple)).toBe("4.23");
    expect(contrast(obsidian950, purple)).toBe("4.54");
    expect(declaration("--mgh-color-action-fg")).toBe(
      "var(--mgh-ds-primitive-color-obsidian-950)",
    );
    expect(declaration("--mgh-color-positive-fg")).toBe(
      "var(--mgh-ds-primitive-color-emerald)",
    );
    expect(declaration("--mgh-color-caution-fg")).toBe(
      "var(--mgh-ds-primitive-color-influence)",
    );
    expect(declaration("--mgh-color-danger-border")).toBe(
      "var(--mgh-ds-primitive-color-rose)",
    );
  });
});
