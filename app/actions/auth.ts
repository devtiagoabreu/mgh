"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  INVALID_CREDENTIALS_MESSAGE,
  type LoginState,
} from "@/lib/auth/login-state";

const LoginSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(128),
});

/** Auth.js devolve uma URL com `error=` ou lança AuthError. Nunca detalha. */
function failedSignIn(result: unknown): boolean {
  if (typeof result === "string") {
    return /[?&]error=/.test(result);
  }
  if (typeof result === "object" && result !== null && "url" in result) {
    return /[?&]error=/.test(String((result as { url: unknown }).url));
  }
  return false;
}

export async function loginAction(
  _state: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: INVALID_CREDENTIALS_MESSAGE };
  }

  try {
    const result = await signIn("credentials", {
      email: parsed.data.email.toLowerCase(),
      password: parsed.data.password,
      redirect: false,
      redirectTo: "/app",
    });
    if (failedSignIn(result)) {
      return { error: INVALID_CREDENTIALS_MESSAGE };
    }
  } catch {
    return { error: INVALID_CREDENTIALS_MESSAGE };
  }

  redirect("/app");
}

export async function logoutAction(): Promise<void> {
  await signOut({ redirectTo: "/login" });
}
