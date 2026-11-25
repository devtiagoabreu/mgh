/**
 * Seed 100% sintético para branches preview/qa/recovery.
 * NÃO contém nomes, e-mails, IDs canônicos, textos de item/opção, rótulos SELF
 * nem conteúdo de consentimento. Toda linha é marcada como SYNTHETIC_.
 *
 * Roda dentro de transação com `set_config('app.current_tenant_id', $1, true)`
 * para respeitar ENABLE/FORCE RLS sem valor interpolado em SQL.
 */
import { createTenantContextFromVerifiedClaims } from "../lib/auth/tenant";
import { getPrisma } from "../lib/db/client";
import { withTenantTransaction } from "../lib/db/session";

const TENANT_ID = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const USER_ID = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const SESSION_ID = "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee";
const IDS = {
  membership: "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
  participant: "dddddddd-dddd-4ddd-8ddd-dddddddddddd",
  instrument: "11111111-1111-4111-8111-111111111111",
  itemBank: "22222222-2222-4222-8222-222222222222",
  scoring: "33333333-3333-4333-8333-333333333333",
  sequence: "44444444-4444-4444-8444-444444444444",
  golden: "55555555-5555-4555-8555-555555555555",
  run: "66666666-6666-4666-8666-666666666666",
  raw: "77777777-7777-4777-8777-777777777777",
  event: "88888888-8888-4888-8888-888888888888",
  derivedRun: "99999999-9999-4999-8999-999999999999",
  derivedValue: "abababab-abab-4bab-8bab-abababababab",
  changeLog: "bcbcbcbc-bcbc-4cbc-8cbc-bcbcbcbcbcbc",
  occurrence: "cdcdcdcd-cdcd-4dcd-8dcd-cdcdcdcdcdcd",
  auditLog: "dededede-dede-4ede-8ede-dededededede",
} as const;

const PLACEHOLDER = "[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]";

async function main(): Promise<void> {
  const db = await getPrisma();
  const ctx = createTenantContextFromVerifiedClaims({
    userId: USER_ID,
    tenantId: TENANT_ID,
    role: "PLATFORM_ADMIN",
    sessionId: SESSION_ID,
  });

  await withTenantTransaction(db, ctx, async (tx) => {
    await tx.tenant.upsert({
      where: { id: TENANT_ID },
      create: { id: TENANT_ID, tenantId: TENANT_ID },
      update: {},
    });
    await tx.user.upsert({
      where: { id: USER_ID },
      create: { id: USER_ID, tenantId: TENANT_ID },
      update: {},
    });
    await tx.tenantMembership.upsert({
      where: { id: IDS.membership },
      create: {
        id: IDS.membership,
        tenantId: TENANT_ID,
        userId: USER_ID,
        role: "MENTOR_OWNER",
        active: true,
      },
      update: {},
    });
    await tx.participantIdentity.upsert({
      where: { id: IDS.participant },
      create: {
        id: IDS.participant,
        tenantId: TENANT_ID,
        userId: USER_ID,
        participantRef: "SYNTHETIC_PARTICIPANT_REF",
        displayNameEnc: null,
        emailEnc: null,
        consentRef: null,
      },
      update: {},
    });

    await tx.instrumentVersion.upsert({
      where: { id: IDS.instrument },
      create: {
        id: IDS.instrument,
        tenantId: TENANT_ID,
        version: "SYNTHETIC_INSTRUMENT",
      },
      update: {},
    });
    await tx.itemBankVersion.upsert({
      where: { id: IDS.itemBank },
      create: {
        id: IDS.itemBank,
        tenantId: TENANT_ID,
        version: "SYNTHETIC_BANK",
        status: "DRAFT",
      },
      update: {},
    });
    await tx.scoringVersion.upsert({
      where: { id: IDS.scoring },
      create: {
        id: IDS.scoring,
        tenantId: TENANT_ID,
        version: "SYNTHETIC_SCORING",
        ruleCount: 0,
      },
      update: {},
    });
    await tx.sequenceVersion.upsert({
      where: { id: IDS.sequence },
      create: {
        id: IDS.sequence,
        tenantId: TENANT_ID,
        version: "SYNTHETIC_SEQUENCE",
      },
      update: {},
    });
    await tx.goldenDatasetVersion.upsert({
      where: { id: IDS.golden },
      create: {
        id: IDS.golden,
        tenantId: TENANT_ID,
        version: "SYNTHETIC_GOLDEN",
      },
      update: {},
    });

    await tx.run.upsert({
      where: { id: IDS.run },
      create: {
        id: IDS.run,
        tenantId: TENANT_ID,
        participantRef: "SYNTHETIC_PARTICIPANT_REF",
        instrumentVersionId: IDS.instrument,
        itemBankVersionId: IDS.itemBank,
        scoringVersionId: IDS.scoring,
        sequenceVersionId: IDS.sequence,
      },
      update: {},
    });

    // RAW e eventos são append-only: nunca upsert/update/delete.
    const existingRaw = await tx.responseRaw.findFirst({
      where: { id: IDS.raw, tenantId: TENANT_ID },
    });
    if (!existingRaw) {
      await tx.responseRaw.create({
        data: {
          id: IDS.raw,
          tenantId: TENANT_ID,
          runId: IDS.run,
          sequenceIndex: 1,
          scenarioRef: PLACEHOLDER,
          optionRef: PLACEHOLDER,
        },
      });
    }
    const existingEvent = await tx.responseEvent.findFirst({
      where: { id: IDS.event, tenantId: TENANT_ID },
    });
    if (!existingEvent) {
      await tx.responseEvent.create({
        data: {
          id: IDS.event,
          tenantId: TENANT_ID,
          runId: IDS.run,
          eventType: "SYNTHETIC_EVENT",
        },
      });
    }

    await tx.derivedScoreRun.upsert({
      where: { id: IDS.derivedRun },
      create: {
        id: IDS.derivedRun,
        tenantId: TENANT_ID,
        runId: IDS.run,
        scoringVersionId: IDS.scoring,
        itemBankVersionId: IDS.itemBank,
        inputHash: "SYNTHETIC_INPUT_HASH",
      },
      update: {},
    });
    await tx.derivedScoreValue.upsert({
      where: { id: IDS.derivedValue },
      create: {
        id: IDS.derivedValue,
        tenantId: TENANT_ID,
        derivedScoreRunId: IDS.derivedRun,
        dimensionRef: "SYNTHETIC_DIMENSION",
        value: "0",
      },
      update: {},
    });
    await tx.changeLog.upsert({
      where: { id: IDS.changeLog },
      create: {
        id: IDS.changeLog,
        tenantId: TENANT_ID,
        entityType: "SYNTHETIC_ENTITY",
        entityId: IDS.run,
        action: "SYNTHETIC_ACTION",
        reason: "SYNTHETIC_SEED",
        actor: "SYNTHETIC_SEED_JOB",
      },
      update: {},
    });
    await tx.occurrence.upsert({
      where: { id: IDS.occurrence },
      create: {
        id: IDS.occurrence,
        tenantId: TENANT_ID,
        runId: IDS.run,
        occurrenceType: "SYNTHETIC_OCCURRENCE",
      },
      update: {},
    });
    await tx.auditLog.upsert({
      where: { id: IDS.auditLog },
      create: {
        id: IDS.auditLog,
        tenantId: TENANT_ID,
        actor: "SYNTHETIC_SERVICE_ROLE",
        action: "SYNTHETIC_SEED",
        tenantScope: TENANT_ID,
        reason: "SYNTHETIC_SEED_ONLY",
      },
      update: {},
    });
  });
}

main().catch((error: unknown) => {
  console.error("SEED_FAILED", error instanceof Error ? error.message : "UNKNOWN");
  process.exitCode = 1;
});
