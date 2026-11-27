import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Seed idempotente da autenticação real.
 *
 * A senha nunca é lida nem escrita aqui: apenas um hash scrypt já calculado.
 * Variáveis exigidas (fora do Git): AUTH_SEED_PASSWORD_HASH e DIRECT_URL.
 * IDs e e-mails abaixo são sintéticos, reservados ao domínio .test, e não
 * representam participantes, mentor real nem dado canônico da metodologia.
 */
const passwordHash = process.env.AUTH_SEED_PASSWORD_HASH;
const directUrl = process.env.DIRECT_URL;

if (!passwordHash || !directUrl) {
  throw new Error("AUTH_SEED_ENV_REQUIRED");
}
if (!/^scrypt\$[0-9a-f]{32}\$[0-9a-f]{128}$/.test(passwordHash)) {
  throw new Error("AUTH_SEED_PASSWORD_HASH_INVALID");
}

const tenantId = process.env.AUTH_SEED_TENANT_ID ?? "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";

const identities = [
  {
    email: "owner@example.test",
    userId: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
    role: "MENTOR_OWNER",
  },
  {
    email: "mentee@example.test",
    userId: "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
    role: "MENTEE",
  },
];

if (process.env.NODE_ENV !== "production") {
  identities.push({
    email: "admin@example.test",
    userId: "dddddddd-dddd-4ddd-8ddd-dddddddddddd",
    role: "PLATFORM_ADMIN",
  });
}

const adapter = new PrismaPg({ connectionString: directUrl });
const prisma = new PrismaClient({ adapter });

try {
  // RLS FORCE: toda escrita tenant-scoped precisa do setting na transação.
  await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT set_config('app.current_tenant_id', ${tenantId}, true)`;
    await tx.tenant.upsert({
      where: { id: tenantId },
      create: { id: tenantId, tenantId },
      update: {},
    });

    for (const identity of identities) {
      await tx.user.upsert({
        where: { tenantId_id: { tenantId, id: identity.userId } },
        create: { id: identity.userId, tenantId },
        update: {},
      });

      await tx.tenantMembership.upsert({
        where: { tenantId_userId: { tenantId, userId: identity.userId } },
        create: {
          tenantId,
          userId: identity.userId,
          role: identity.role,
          active: true,
        },
        update: { role: identity.role, active: true },
      });
    }
  });

  // Fora do tenant: auth_credentials não tem RLS e é a origem do login.
  for (const identity of identities) {
    await prisma.authCredential.upsert({
      where: { email: identity.email },
      create: {
        email: identity.email,
        passwordHash,
        userId: identity.userId,
        tenantId,
        active: true,
      },
      update: { passwordHash, userId: identity.userId, tenantId, active: true },
    });
  }

  console.log(`Auth seed: ok (${identities.length} identidades sintéticas)`);
} finally {
  await prisma.$disconnect();
}
