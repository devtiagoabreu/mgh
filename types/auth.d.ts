export {};

/**
 * Extensões de tipo do Auth.js. Nenhum campo é confiável por si só: a sessão
 * verificada revalida todos eles em lib/auth/session.ts antes de virar tenant.
 */
declare module "next-auth" {
  interface User {
    mghUserId?: string;
    mghTenantId?: string;
    mghRole?: string;
    mghMustChangePassword?: boolean;
  }

  interface Session {
    user?: User & {
      mghSessionId?: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    mghUserId?: string;
    mghTenantId?: string;
    mghRole?: string;
    mghMustChangePassword?: boolean;
    mghSessionId?: string;
  }
}
