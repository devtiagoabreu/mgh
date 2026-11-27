-- AlterTable
ALTER TABLE "auth_credentials" ADD COLUMN     "must_change_password" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "tool_grants" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tool_key" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "tool_grants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tool_grants_tenant_id_tool_key_idx" ON "tool_grants"("tenant_id", "tool_key");

-- CreateIndex
CREATE UNIQUE INDEX "tool_grants_tenant_id_userId_tool_key_key" ON "tool_grants"("tenant_id", "userId", "tool_key");

-- AddForeignKey
ALTER TABLE "tool_grants" ADD CONSTRAINT "tool_grants_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tool_grants" ADD CONSTRAINT "tool_grants_tenant_id_userId_fkey" FOREIGN KEY ("tenant_id", "userId") REFERENCES "users"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- tool_grants
ALTER TABLE public."tool_grants" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."tool_grants" FORCE ROW LEVEL SECURITY;
CREATE POLICY "tool_grants_tenant_select" ON public."tool_grants" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tool_grants_tenant_insert" ON public."tool_grants" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tool_grants_tenant_update" ON public."tool_grants" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tool_grants_tenant_delete" ON public."tool_grants" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

