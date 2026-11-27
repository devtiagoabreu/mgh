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

export const AppearancePreferenceSchema = z.enum(["LIGHT", "DARK"]);
export type AppearancePreference = z.infer<typeof AppearancePreferenceSchema>;

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
    "document.documentElement.dataset.theme=t;",
    "}catch(e){document.documentElement.dataset.theme='light';}",
  ].join("");
}
