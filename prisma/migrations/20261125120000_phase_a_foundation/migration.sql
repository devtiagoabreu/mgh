-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "vault";

-- CreateEnum
CREATE TYPE "PhaseARole" AS ENUM ('PLATFORM_ADMIN', 'MENTOR_OWNER', 'MENTEE');

-- CreateEnum
CREATE TYPE "RunStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'INVALIDATED');

-- CreateTable
CREATE TABLE "tenants" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant_memberships" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "role" "PhaseARole" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "tenant_memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vault"."participant_identities" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "participantRef" TEXT NOT NULL,
    "displayNameEnc" BYTEA,
    "emailEnc" BYTEA,
    "consentRef" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "participant_identities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instrument_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "instrument_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_bank_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "itemCount" INTEGER NOT NULL DEFAULT 0,
    "canonicalTextPresent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "item_bank_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scoring_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" TEXT NOT NULL,
    "ruleCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scoring_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sequence_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" TEXT NOT NULL,
    "scenarioCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sequence_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "golden_dataset_versions" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "version" TEXT NOT NULL,
    "caseCount" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'WAITING_BANK',
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "golden_dataset_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "runs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "participantRef" TEXT NOT NULL,
    "status" "RunStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "instrumentVersionId" UUID NOT NULL,
    "itemBankVersionId" UUID NOT NULL,
    "scoringVersionId" UUID NOT NULL,
    "sequenceVersionId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMPTZ(3),
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "response_raws" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "runId" UUID NOT NULL,
    "sequenceIndex" INTEGER NOT NULL,
    "scenarioRef" TEXT NOT NULL,
    "optionRef" TEXT NOT NULL,
    "recordedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "response_raws_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "response_events" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "runId" UUID NOT NULL,
    "eventType" TEXT NOT NULL,
    "occurredAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "response_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "derived_score_runs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "runId" UUID NOT NULL,
    "scoringVersionId" UUID NOT NULL,
    "itemBankVersionId" UUID NOT NULL,
    "inputHash" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'COMPUTED',
    "computedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "derived_score_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "derived_score_values" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "derivedScoreRunId" UUID NOT NULL,
    "dimensionRef" TEXT NOT NULL,
    "value" DECIMAL(12,6) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "derived_score_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "change_logs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "changes" JSONB,
    "occurredAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "change_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occurrences" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "runId" UUID,
    "occurrenceType" TEXT NOT NULL,
    "occurredAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "occurrences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "actor" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "tenantScope" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "resource" TEXT,
    "changes" JSONB,
    "timestampUtc" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tenants_tenant_id_idx" ON "tenants"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_tenant_id_key" ON "tenants"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_tenant_id_id_key" ON "tenants"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "users_tenant_id_idx" ON "users"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_tenant_id_id_key" ON "users"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "tenant_memberships_tenant_id_role_idx" ON "tenant_memberships"("tenant_id", "role");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_memberships_tenant_id_userId_key" ON "tenant_memberships"("tenant_id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_memberships_tenant_id_id_key" ON "tenant_memberships"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "participant_identities_tenant_id_userId_idx" ON "vault"."participant_identities"("tenant_id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "participant_identities_tenant_id_id_key" ON "vault"."participant_identities"("tenant_id", "id");

-- CreateIndex
CREATE UNIQUE INDEX "participant_identities_tenant_id_participantRef_key" ON "vault"."participant_identities"("tenant_id", "participantRef");

-- CreateIndex
CREATE INDEX "instrument_versions_tenant_id_idx" ON "instrument_versions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "instrument_versions_tenant_id_version_key" ON "instrument_versions"("tenant_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "instrument_versions_tenant_id_id_key" ON "instrument_versions"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "item_bank_versions_tenant_id_idx" ON "item_bank_versions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "item_bank_versions_tenant_id_version_key" ON "item_bank_versions"("tenant_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "item_bank_versions_tenant_id_id_key" ON "item_bank_versions"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "scoring_versions_tenant_id_idx" ON "scoring_versions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "scoring_versions_tenant_id_version_key" ON "scoring_versions"("tenant_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "scoring_versions_tenant_id_id_key" ON "scoring_versions"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "sequence_versions_tenant_id_idx" ON "sequence_versions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "sequence_versions_tenant_id_version_key" ON "sequence_versions"("tenant_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "sequence_versions_tenant_id_id_key" ON "sequence_versions"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "golden_dataset_versions_tenant_id_idx" ON "golden_dataset_versions"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "golden_dataset_versions_tenant_id_version_key" ON "golden_dataset_versions"("tenant_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "golden_dataset_versions_tenant_id_id_key" ON "golden_dataset_versions"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "runs_tenant_id_status_idx" ON "runs"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "runs_tenant_id_createdAt_idx" ON "runs"("tenant_id", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "runs_tenant_id_id_key" ON "runs"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "response_raws_tenant_id_runId_idx" ON "response_raws"("tenant_id", "runId");

-- CreateIndex
CREATE UNIQUE INDEX "response_raws_tenant_id_id_key" ON "response_raws"("tenant_id", "id");

-- CreateIndex
CREATE UNIQUE INDEX "response_raws_tenant_id_runId_sequenceIndex_key" ON "response_raws"("tenant_id", "runId", "sequenceIndex");

-- CreateIndex
CREATE INDEX "response_events_tenant_id_runId_occurredAt_idx" ON "response_events"("tenant_id", "runId", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "response_events_tenant_id_id_key" ON "response_events"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "derived_score_runs_tenant_id_runId_idx" ON "derived_score_runs"("tenant_id", "runId");

-- CreateIndex
CREATE UNIQUE INDEX "derived_score_runs_tenant_id_runId_scoringVersionId_itemBan_key" ON "derived_score_runs"("tenant_id", "runId", "scoringVersionId", "itemBankVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "derived_score_runs_tenant_id_id_key" ON "derived_score_runs"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "derived_score_values_tenant_id_derivedScoreRunId_idx" ON "derived_score_values"("tenant_id", "derivedScoreRunId");

-- CreateIndex
CREATE UNIQUE INDEX "derived_score_values_tenant_id_derivedScoreRunId_dimensionR_key" ON "derived_score_values"("tenant_id", "derivedScoreRunId", "dimensionRef");

-- CreateIndex
CREATE UNIQUE INDEX "derived_score_values_tenant_id_id_key" ON "derived_score_values"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "change_logs_tenant_id_entityType_entityId_idx" ON "change_logs"("tenant_id", "entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "change_logs_tenant_id_id_key" ON "change_logs"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "occurrences_tenant_id_runId_occurredAt_idx" ON "occurrences"("tenant_id", "runId", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "occurrences_tenant_id_id_key" ON "occurrences"("tenant_id", "id");

-- CreateIndex
CREATE INDEX "audit_logs_tenant_id_timestampUtc_idx" ON "audit_logs"("tenant_id", "timestampUtc");

-- CreateIndex
CREATE UNIQUE INDEX "audit_logs_tenant_id_id_key" ON "audit_logs"("tenant_id", "id");

-- AddForeignKey
ALTER TABLE "tenant_memberships" ADD CONSTRAINT "tenant_memberships_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tenant_memberships" ADD CONSTRAINT "tenant_memberships_tenant_id_userId_fkey" FOREIGN KEY ("tenant_id", "userId") REFERENCES "users"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vault"."participant_identities" ADD CONSTRAINT "participant_identities_tenant_id_userId_fkey" FOREIGN KEY ("tenant_id", "userId") REFERENCES "users"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "runs" ADD CONSTRAINT "runs_tenant_id_instrumentVersionId_fkey" FOREIGN KEY ("tenant_id", "instrumentVersionId") REFERENCES "instrument_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "runs" ADD CONSTRAINT "runs_tenant_id_itemBankVersionId_fkey" FOREIGN KEY ("tenant_id", "itemBankVersionId") REFERENCES "item_bank_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "runs" ADD CONSTRAINT "runs_tenant_id_scoringVersionId_fkey" FOREIGN KEY ("tenant_id", "scoringVersionId") REFERENCES "scoring_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "runs" ADD CONSTRAINT "runs_tenant_id_sequenceVersionId_fkey" FOREIGN KEY ("tenant_id", "sequenceVersionId") REFERENCES "sequence_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_raws" ADD CONSTRAINT "response_raws_tenant_id_runId_fkey" FOREIGN KEY ("tenant_id", "runId") REFERENCES "runs"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_events" ADD CONSTRAINT "response_events_tenant_id_runId_fkey" FOREIGN KEY ("tenant_id", "runId") REFERENCES "runs"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "derived_score_runs" ADD CONSTRAINT "derived_score_runs_tenant_id_runId_fkey" FOREIGN KEY ("tenant_id", "runId") REFERENCES "runs"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "derived_score_runs" ADD CONSTRAINT "derived_score_runs_tenant_id_scoringVersionId_fkey" FOREIGN KEY ("tenant_id", "scoringVersionId") REFERENCES "scoring_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "derived_score_runs" ADD CONSTRAINT "derived_score_runs_tenant_id_itemBankVersionId_fkey" FOREIGN KEY ("tenant_id", "itemBankVersionId") REFERENCES "item_bank_versions"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "derived_score_values" ADD CONSTRAINT "derived_score_values_tenant_id_derivedScoreRunId_fkey" FOREIGN KEY ("tenant_id", "derivedScoreRunId") REFERENCES "derived_score_runs"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrences" ADD CONSTRAINT "occurrences_tenant_id_runId_fkey" FOREIGN KEY ("tenant_id", "runId") REFERENCES "runs"("tenant_id", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ---------------------------------------------------------------------------
-- Integridade do tenant raiz
-- ---------------------------------------------------------------------------
ALTER TABLE public."tenants"
  ADD CONSTRAINT "tenants_tenant_id_matches_id" CHECK ("tenant_id" = "id");

-- ---------------------------------------------------------------------------
-- RLS: ENABLE + FORCE em TODA tabela de tenant.
-- O valor vem exclusivamente da sessão verificada:
--   set_config('app.current_tenant_id', $1, true)  (parâmetro do Prisma)
-- Nenhum valor de cliente é interpolado neste arquivo.
-- Políticas separadas por SELECT/INSERT/UPDATE/DELETE; falha fechada quando
-- a configuração está ausente (NULL::uuid não iguala nenhuma linha).
-- ---------------------------------------------------------------------------

-- tenants
ALTER TABLE public."tenants" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."tenants" FORCE ROW LEVEL SECURITY;
CREATE POLICY "tenants_tenant_select" ON public."tenants" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenants_tenant_insert" ON public."tenants" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenants_tenant_update" ON public."tenants" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenants_tenant_delete" ON public."tenants" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- users
ALTER TABLE public."users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."users" FORCE ROW LEVEL SECURITY;
CREATE POLICY "users_tenant_select" ON public."users" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "users_tenant_insert" ON public."users" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "users_tenant_update" ON public."users" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "users_tenant_delete" ON public."users" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- tenant_memberships
ALTER TABLE public."tenant_memberships" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."tenant_memberships" FORCE ROW LEVEL SECURITY;
CREATE POLICY "tenant_memberships_tenant_select" ON public."tenant_memberships" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenant_memberships_tenant_insert" ON public."tenant_memberships" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenant_memberships_tenant_update" ON public."tenant_memberships" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "tenant_memberships_tenant_delete" ON public."tenant_memberships" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- vault.participant_identities (único local com PII, cifrada)
ALTER TABLE vault."participant_identities" ENABLE ROW LEVEL SECURITY;
ALTER TABLE vault."participant_identities" FORCE ROW LEVEL SECURITY;
CREATE POLICY "participant_identities_tenant_select" ON vault."participant_identities" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "participant_identities_tenant_insert" ON vault."participant_identities" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "participant_identities_tenant_update" ON vault."participant_identities" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "participant_identities_tenant_delete" ON vault."participant_identities" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- instrument_versions
ALTER TABLE public."instrument_versions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."instrument_versions" FORCE ROW LEVEL SECURITY;
CREATE POLICY "instrument_versions_tenant_select" ON public."instrument_versions" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "instrument_versions_tenant_insert" ON public."instrument_versions" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "instrument_versions_tenant_update" ON public."instrument_versions" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "instrument_versions_tenant_delete" ON public."instrument_versions" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- item_bank_versions
ALTER TABLE public."item_bank_versions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."item_bank_versions" FORCE ROW LEVEL SECURITY;
CREATE POLICY "item_bank_versions_tenant_select" ON public."item_bank_versions" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "item_bank_versions_tenant_insert" ON public."item_bank_versions" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "item_bank_versions_tenant_update" ON public."item_bank_versions" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "item_bank_versions_tenant_delete" ON public."item_bank_versions" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- scoring_versions
ALTER TABLE public."scoring_versions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."scoring_versions" FORCE ROW LEVEL SECURITY;
CREATE POLICY "scoring_versions_tenant_select" ON public."scoring_versions" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "scoring_versions_tenant_insert" ON public."scoring_versions" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "scoring_versions_tenant_update" ON public."scoring_versions" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "scoring_versions_tenant_delete" ON public."scoring_versions" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- sequence_versions
ALTER TABLE public."sequence_versions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."sequence_versions" FORCE ROW LEVEL SECURITY;
CREATE POLICY "sequence_versions_tenant_select" ON public."sequence_versions" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "sequence_versions_tenant_insert" ON public."sequence_versions" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "sequence_versions_tenant_update" ON public."sequence_versions" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "sequence_versions_tenant_delete" ON public."sequence_versions" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- golden_dataset_versions
ALTER TABLE public."golden_dataset_versions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."golden_dataset_versions" FORCE ROW LEVEL SECURITY;
CREATE POLICY "golden_dataset_versions_tenant_select" ON public."golden_dataset_versions" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "golden_dataset_versions_tenant_insert" ON public."golden_dataset_versions" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "golden_dataset_versions_tenant_update" ON public."golden_dataset_versions" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "golden_dataset_versions_tenant_delete" ON public."golden_dataset_versions" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- runs
ALTER TABLE public."runs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."runs" FORCE ROW LEVEL SECURITY;
CREATE POLICY "runs_tenant_select" ON public."runs" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "runs_tenant_insert" ON public."runs" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "runs_tenant_update" ON public."runs" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "runs_tenant_delete" ON public."runs" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- response_raws (APPEND-ONLY)
ALTER TABLE public."response_raws" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."response_raws" FORCE ROW LEVEL SECURITY;
CREATE POLICY "response_raws_tenant_select" ON public."response_raws" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "response_raws_tenant_insert" ON public."response_raws" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "response_raws_tenant_update" ON public."response_raws" FOR UPDATE TO PUBLIC
  USING (false) WITH CHECK (false);
CREATE POLICY "response_raws_tenant_delete" ON public."response_raws" FOR DELETE TO PUBLIC
  USING (false);

-- response_events (APPEND-ONLY)
ALTER TABLE public."response_events" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."response_events" FORCE ROW LEVEL SECURITY;
CREATE POLICY "response_events_tenant_select" ON public."response_events" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "response_events_tenant_insert" ON public."response_events" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "response_events_tenant_update" ON public."response_events" FOR UPDATE TO PUBLIC
  USING (false) WITH CHECK (false);
CREATE POLICY "response_events_tenant_delete" ON public."response_events" FOR DELETE TO PUBLIC
  USING (false);

-- derived_score_runs
ALTER TABLE public."derived_score_runs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."derived_score_runs" FORCE ROW LEVEL SECURITY;
CREATE POLICY "derived_score_runs_tenant_select" ON public."derived_score_runs" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_runs_tenant_insert" ON public."derived_score_runs" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_runs_tenant_update" ON public."derived_score_runs" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_runs_tenant_delete" ON public."derived_score_runs" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- derived_score_values
ALTER TABLE public."derived_score_values" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."derived_score_values" FORCE ROW LEVEL SECURITY;
CREATE POLICY "derived_score_values_tenant_select" ON public."derived_score_values" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_values_tenant_insert" ON public."derived_score_values" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_values_tenant_update" ON public."derived_score_values" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "derived_score_values_tenant_delete" ON public."derived_score_values" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- change_logs
ALTER TABLE public."change_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."change_logs" FORCE ROW LEVEL SECURITY;
CREATE POLICY "change_logs_tenant_select" ON public."change_logs" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "change_logs_tenant_insert" ON public."change_logs" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "change_logs_tenant_update" ON public."change_logs" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "change_logs_tenant_delete" ON public."change_logs" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- occurrences
ALTER TABLE public."occurrences" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."occurrences" FORCE ROW LEVEL SECURITY;
CREATE POLICY "occurrences_tenant_select" ON public."occurrences" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "occurrences_tenant_insert" ON public."occurrences" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "occurrences_tenant_update" ON public."occurrences" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "occurrences_tenant_delete" ON public."occurrences" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- audit_logs
ALTER TABLE public."audit_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."audit_logs" FORCE ROW LEVEL SECURITY;
CREATE POLICY "audit_logs_tenant_select" ON public."audit_logs" FOR SELECT TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "audit_logs_tenant_insert" ON public."audit_logs" FOR INSERT TO PUBLIC
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "audit_logs_tenant_update" ON public."audit_logs" FOR UPDATE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
CREATE POLICY "audit_logs_tenant_delete" ON public."audit_logs" FOR DELETE TO PUBLIC
  USING ("tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- ---------------------------------------------------------------------------
-- Append-only: barreira física adicional além das policies (BYPASSRLS também
-- fica impedido de UPDATE/DELETE em RAW e eventos).
-- ---------------------------------------------------------------------------
CREATE FUNCTION public.mgh_reject_append_only_mutation() RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'APPEND_ONLY: UPDATE/DELETE bloqueado em %', TG_TABLE_NAME;
END;
$$;

CREATE TRIGGER "response_raws_no_update"
  BEFORE UPDATE ON public."response_raws"
  FOR EACH ROW EXECUTE FUNCTION public.mgh_reject_append_only_mutation();
CREATE TRIGGER "response_raws_no_delete"
  BEFORE DELETE ON public."response_raws"
  FOR EACH ROW EXECUTE FUNCTION public.mgh_reject_append_only_mutation();
CREATE TRIGGER "response_events_no_update"
  BEFORE UPDATE ON public."response_events"
  FOR EACH ROW EXECUTE FUNCTION public.mgh_reject_append_only_mutation();
CREATE TRIGGER "response_events_no_delete"
  BEFORE DELETE ON public."response_events"
  FOR EACH ROW EXECUTE FUNCTION public.mgh_reject_append_only_mutation();
