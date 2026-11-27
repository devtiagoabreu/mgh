-- CreateTable
CREATE TABLE "demo_logins" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "demo_logins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demo_sessions" (
    "id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "login_id" UUID NOT NULL,
    "expires_at" TIMESTAMPTZ(3) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "demo_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "demo_logins_username_key" ON "demo_logins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "demo_sessions_token_hash_key" ON "demo_sessions"("token_hash");

-- CreateIndex
CREATE INDEX "demo_sessions_login_id_idx" ON "demo_sessions"("login_id");

-- CreateIndex
CREATE INDEX "demo_sessions_expires_at_idx" ON "demo_sessions"("expires_at");

-- AddForeignKey
ALTER TABLE "demo_sessions" ADD CONSTRAINT "demo_sessions_login_id_fkey" FOREIGN KEY ("login_id") REFERENCES "demo_logins"("id") ON DELETE CASCADE ON UPDATE CASCADE;
