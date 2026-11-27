-- Registro de autenticação global, FORA do escopo tenant.
-- Esta tabela NÃO recebe RLS: o login precisa localizar o e-mail antes de
-- existir uma sessão de tenant verificada. A coluna tenant_id é apenas vínculo
-- com users/tenant_memberships, nunca critério de isolamento de acesso.

CREATE TABLE "auth_credentials" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "auth_credentials_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "auth_credentials_email_key" ON "auth_credentials"("email");
CREATE INDEX "auth_credentials_tenant_id_user_id_idx" ON "auth_credentials"("tenant_id", "user_id");
