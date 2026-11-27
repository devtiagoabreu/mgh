"use server";

import {
  APPEARANCE_COOKIE,
  AppearancePreferenceSchema,
  toCookieValue,
} from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { setUserAppearancePreference } from "@/lib/db/repositories";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const AppearanceInputSchema = z.object({
  appearance: AppearancePreferenceSchema,
});

/**
 * Grava a preferência no User (fonte autoritativa) e no cookie-espelho.
 * Valor fora da allowlist é ignorado: nunca vira preferência nem cookie.
 * Usuário e tenant vêm da sessão verificada, não do formulário.
 */
export async function setAppearanceAction(formData: FormData): Promise<void> {
  const parsed = AppearanceInputSchema.safeParse({
    appearance: formData.get("appearance"),
  });
  if (!parsed.success) return;

  const { context } = await requireVerifiedSession();
  await setUserAppearancePreference(
    await getPrisma(),
    context,
    parsed.data.appearance,
  );

  const store = await cookies();
  store.set(APPEARANCE_COOKIE, toCookieValue(parsed.data.appearance), {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  revalidatePath("/app");
}
