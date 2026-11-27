import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { resolveAuthIdentity } from "@/lib/auth/identity";

/**
 * Autenticação real da Fase A.
 *
 * O JWT carrega apenas claims verificados no login: userId, tenantId e role.
 * sessionId é o `jti` gerado pelo Auth.js. Nenhum middleware e nenhuma leitura
 * de header/query decide o tenant; lib/auth/session.ts revalida antes do DAL.
 */
const CredentialsSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(128),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost:
    process.env.AUTH_TRUST_HOST === "true" ||
    process.env.VERCEL === "1" ||
    process.env.NODE_ENV !== "production",
  pages: { signIn: "/login" },
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 },
  providers: [
    Credentials({
      name: "Credencial MGH",
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const parsed = CredentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const identity = await resolveAuthIdentity(
          parsed.data.email.toLowerCase(),
          parsed.data.password,
        );
        if (!identity) return null;

        return {
          id: identity.userId,
          email: parsed.data.email.toLowerCase(),
          name: null,
          mghUserId: identity.userId,
          mghTenantId: identity.tenantId,
          mghRole: identity.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user?.mghUserId && user.mghTenantId && user.mghRole) {
        token.mghUserId = user.mghUserId;
        token.mghTenantId = user.mghTenantId;
        token.mghRole = user.mghRole;
        // ID estável da sessão: o jti do Auth.js é regenerado a cada encode.
        token.mghSessionId = crypto.randomUUID();
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.mghUserId = token.mghUserId;
        session.user.mghTenantId = token.mghTenantId;
        session.user.mghRole = token.mghRole;
        session.user.mghSessionId = token.mghSessionId ?? token.jti;
      }
      return session;
    },
  },
});
