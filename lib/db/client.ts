import { asTenantDbClient, type TenantDbClient } from "./types";

/**
 * Singleton do Prisma para serverless (Vercel + Neon pooled).
 *
 * - DATABASE_URL é a string pooled usada no runtime.
 * - DIRECT_URL é usada apenas pelo CLI de migrations (prisma/prisma.config.ts).
 * - O adapter é registrado no bootstrap do servidor (fora do escopo de dados)
 *   com `configurePrismaAdapter()`, ou carregado sob demanda se o pacote
 *   `@prisma/adapter-pg` estiver disponível.
 */

type AdapterFactory = () => unknown;

interface PrismaGlobal {
  mghPrisma?: TenantDbClient;
  mghPrismaAdapterFactory?: AdapterFactory;
}

const globalForPrisma = globalThis as unknown as PrismaGlobal;

export function configurePrismaAdapter(factory: AdapterFactory): void {
  if (typeof factory !== "function") {
    throw new Error("INVALID_PRISMA_ADAPTER_FACTORY");
  }
  globalForPrisma.mghPrismaAdapterFactory = factory;
}

async function loadPooledAdapterFactory(): Promise<AdapterFactory> {
  if (globalForPrisma.mghPrismaAdapterFactory) {
    return globalForPrisma.mghPrismaAdapterFactory;
  }
  const pooledUrl = process.env.DATABASE_URL;
  if (!pooledUrl) {
    throw new Error("DATABASE_URL_REQUIRED: pooled runtime URL is missing");
  }
  const adapterModuleName = "@prisma/adapter-pg";
  let adapterModule: Record<string, unknown>;
  try {
    adapterModule = await import(adapterModuleName);
  } catch {
    throw new Error(
      "PRISMA_PG_ADAPTER_REQUIRED: register an adapter with configurePrismaAdapter()",
    );
  }
  const PrismaPg = adapterModule.PrismaPg;
  if (typeof PrismaPg !== "function") {
    throw new Error("PRISMA_PG_ADAPTER_INVALID");
  }
  return () => new (PrismaPg as new (options: { connectionString: string }) => unknown)({
    connectionString: pooledUrl,
  });
}

export async function getPrisma(): Promise<TenantDbClient> {
  if (globalForPrisma.mghPrisma) {
    return globalForPrisma.mghPrisma;
  }
  const adapterFactory = await loadPooledAdapterFactory();
  const { PrismaClient } = await import("@prisma/client");
  const options = {
    adapter: adapterFactory(),
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  } as unknown as ConstructorParameters<typeof PrismaClient>[0];
  const client = asTenantDbClient(new PrismaClient(options));
  globalForPrisma.mghPrisma = client;
  return client;
}

/** Permite injetar um cliente fake em testes sem tocar no singleton real. */
export function setPrismaForTests(client: TenantDbClient): void {
  globalForPrisma.mghPrisma = client;
}
