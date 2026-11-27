"use server";

import {
  APPEARANCE_COOKIE,
  AppearanceChoiceSchema,
  toCookieValue,
} from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import {
  clearUserAppearancePreference,
  setUserAppearancePreference,
} from "@/lib/db/repositories";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

/**
 * Grava a preferência no User (fonte autoritativa) e no cookie-espelho.
 * "SYSTEM" limpa a coluna e remove o espelho: o boot passa a consultar
 * prefers-color-scheme. Valor fora da allowlist é ignorado; usuário e tenant
 * vêm da sessão verificada, nunca do formulário.
 */
export async function setAppearanceAction(formData: FormData): Promise<void> {
  const parsed = AppearanceChoiceSchema.safeParse(formData.get("appearance"));
  if (!parsed.success) return;

  const { context } = await requireVerifiedSession();
  const prisma = await getPrisma();
  const store = await cookies();

  if (parsed.data === "SYSTEM") {
    await clearUserAppearancePreference(prisma, context);
    store.delete(APPEARANCE_COOKIE);
  } else {
    await setUserAppearancePreference(prisma, context, parsed.data);
    store.set(APPEARANCE_COOKIE, toCookieValue(parsed.data), {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  revalidatePath("/app");
  revalidatePath("/app/mgh");
  revalidatePath("/app/perfil");
}
