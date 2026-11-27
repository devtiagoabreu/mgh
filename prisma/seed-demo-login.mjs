import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Seed idempotente da credencial local da demonstração.
 *
 * A senha não é lida nem escrita aqui: apenas o hash scrypt já calculado.
 * Variáveis exigidas (fora do Git): DEMO_SEED_USERNAME e DEMO_PASSWORD_HASH.
 * DIRECT_URL é usada porque este seed é uma operação de escrita no banco.
 */
const username = process.env.DEMO_SEED_USERNAME;
const passwordHash = process.env.DEMO_PASSWORD_HASH;
const directUrl = process.env.DIRECT_URL;

if (!username || !passwordHash || !directUrl) {
  throw new Error("DEMO_SEED_ENV_REQUIRED");
}
if (!/^scrypt\$[0-9a-f]{32}\$[0-9a-f]{128}$/.test(passwordHash)) {
  throw new Error("DEMO_PASSWORD_HASH_INVALID");
}

const adapter = new PrismaPg({ connectionString: directUrl });
const prisma = new PrismaClient({ adapter });

try {
  await prisma.demoLogin.upsert({
    where: { username },
    create: { username, passwordHash, active: true },
    update: { passwordHash, active: true },
  });
  console.log("Demo login seed: ok");
} finally {
  await prisma.$disconnect();
}
