"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { verifyDemoPassword } from "@/lib/auth/demo-password";
import {
  createDemoSession,
  deleteDemoSession,
} from "@/lib/auth/demo-session";
import {
  INVALID_CREDENTIALS_MESSAGE,
  type LoginState,
} from "@/lib/auth/login-state";
import { getPrisma } from "@/lib/db/client";

const LoginSchema = z.object({
  username: z.string().trim().min(1).max(64),
  password: z.string().min(1).max(128),
});

type StoredLogin = {
  id: string;
  passwordHash: string;
  active: boolean;
};

export async function loginAction(
  _state: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const rawUsername = formData.get("username");
  const rawPassword = formData.get("password");
  const parsed = LoginSchema.safeParse({
    username: typeof rawUsername === "string" ? rawUsername : "",
    password: typeof rawPassword === "string" ? rawPassword : "",
  });

  if (!parsed.success) {
    return { error: INVALID_CREDENTIALS_MESSAGE };
  }

  const prisma = await getPrisma();
  const login = (await prisma.demoLogin.findUnique({
    where: { username: parsed.data.username },
  })) as StoredLogin | null;

  if (!login?.active || !verifyDemoPassword(parsed.data.password, login.passwordHash)) {
    return { error: INVALID_CREDENTIALS_MESSAGE };
  }

  await createDemoSession(login.id);
  redirect("/");
}

export async function logoutAction(formData: FormData): Promise<void> {
  void formData;
  await deleteDemoSession();
  redirect("/login");
}
