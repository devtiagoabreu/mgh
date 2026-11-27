import { z } from "zod";

/**
 * Preferência de aparência — F1.
 *
 * O banco (`User.appearancePreference`) é a fonte autoritativa. O cookie é
 * apenas um espelho legível para o script de boot: ambos são validados por
 * allowlist, nunca confiados como inteiros. Ausência significa "seguir o
 * sistema". Nenhum valor aqui é dado do produto, score ou relatório.
 */

export const APPEARANCE_COOKIE = "mgh-appearance" as const;

/**
 * O DS v1.0 foi especificado somente sobre fundos escuros. Por isso o
 * atributo `data-ds` existe apenas quando o tema resolvido é escuro; no tema
 * claro a camada P6 permanece integralmente responsável pela superfície.
 */
export const MGH_DS_ATTRIBUTE_VALUE = "mgh-v1" as const;

export const AppearancePreferenceSchema = z.enum(["LIGHT", "DARK"]);
export type AppearancePreference = z.infer<typeof AppearancePreferenceSchema>;

/** Três opções do seletor completo: claro, escuro ou seguir o sistema. */
export const AppearanceChoiceSchema = z.enum(["LIGHT", "DARK", "SYSTEM"]);
export type AppearanceChoice = z.infer<typeof AppearanceChoiceSchema>;

/** Valores do espelho no cookie, em minúsculas. */
const CookieAppearanceSchema = z.enum(["light", "dark"]);

export function parseStoredPreference(
  raw: unknown,
): AppearancePreference | null {
  const parsed = AppearancePreferenceSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
}

/** Um valor de cookie inválido nunca é normalizado nem assumido. */
export function parseAppearanceCookieValue(
  raw: unknown,
): AppearancePreference | null {
  const parsed = CookieAppearanceSchema.safeParse(raw);
  return parsed.success
    ? (parsed.data.toUpperCase() as AppearancePreference)
    : null;
}

export function toCookieValue(
  preference: AppearancePreference,
): "light" | "dark" {
  return preference.toLowerCase() as "light" | "dark";
}

/**
 * Aplica tema e DS ao documento. Única fonte de verdade para o par de
 * atributos: chamada pelo toggle do cabeçalho e pelo seletor de Perfil.
 */
export function applyAppearanceAttributes(theme: "light" | "dark"): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dataset.theme = theme;
  if (theme === "dark") root.dataset.ds = MGH_DS_ATTRIBUTE_VALUE;
  else delete root.dataset.ds;
}

/**
 * Script aplicado antes da primeira pintura. Lê somente o cookie-espelho;
 * valores duplicados ou fora da allowlist caem no sistema. Sem localStorage:
 * o espelho é o cookie, validado no servidor quando gravado.
 */
export function appearanceBootScript(): string {
  return [
    "try{",
    `var p='${APPEARANCE_COOKIE}=';`,
    "var c=document.cookie.split(';').map(function(x){return x.trim()}).filter(function(x){return x.indexOf(p)===0});",
    "var t=c.length===1?c[0].slice(p.length):'';",
    "if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}",
    `document.documentElement.dataset.theme=t;`,
    `if(t==='dark'){document.documentElement.dataset.ds='${MGH_DS_ATTRIBUTE_VALUE}'}else{delete document.documentElement.dataset.ds}`,
    "}catch(e){document.documentElement.dataset.theme='light';delete document.documentElement.dataset.ds;}",
  ].join("");
}
