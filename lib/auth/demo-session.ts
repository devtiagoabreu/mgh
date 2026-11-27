import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { getPrisma } from "@/lib/db/client";

export const DEMO_SESSION_COOKIE = "mgh_demo_session" as const;
export const DEMO_SESSION_TTL_SECONDS = 8 * 60 * 60;

type StoredSession = {
  expiresAt: Date;
  login: { id: string; username: string; active: boolean };
};

export function hashDemoSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/** Cria a sessão no banco e devolve o token bruto somente no cookie HttpOnly. */
export async function createDemoSession(loginId: string): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + DEMO_SESSION_TTL_SECONDS * 1000);
  const prisma = await getPrisma();

  await prisma.demoSession.create({
    data: {
      tokenHash: hashDemoSessionToken(token),
      loginId,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(DEMO_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: DEMO_SESSION_TTL_SECONDS,
  });
}

/** Retorna a credencial autenticada ou null. Nunca confia só no cookie. */
export async function getAuthenticatedDemoLogin(): Promise<{
  id: string;
  username: string;
} | null> {
  const token = (await cookies()).get(DEMO_SESSION_COOKIE)?.value;
  if (!token) return null;

  const prisma = await getPrisma();
  const session = (await prisma.demoSession.findUnique({
    where: { tokenHash: hashDemoSessionToken(token) },
    include: { login: true },
  })) as StoredSession | null;

  if (!session?.login.active) return null;
  if (session.expiresAt.getTime() <= Date.now()) return null;

  return { id: session.login.id, username: session.login.username };
}

/** Remove a sessão do banco e apaga o cookie. */
export async function deleteDemoSession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(DEMO_SESSION_COOKIE)?.value;
  if (token) {
    const prisma = await getPrisma();
    await prisma.demoSession.deleteMany({
      where: { tokenHash: hashDemoSessionToken(token) },
    });
  }
  cookieStore.delete(DEMO_SESSION_COOKIE);
}
