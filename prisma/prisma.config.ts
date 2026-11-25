/**
 * Configuração do CLI Prisma (Prisma 7) — escopo de dados da Fase A.
 *
 * - `schema`/`migrations` são relativos a este arquivo (prisma/).
 * - Migrations usam DIRECT_URL (conexão direta). Runtime usa DATABASE_URL
 *   (pooled) via adapter registrado em lib/db/client.ts.
 * - `url` vazio falha fechado em comandos que conectam ao banco; `validate` e
 *   `generate` continuam funcionando sem banco real.
 *
 * NOTA: o CLI precisa de `--config prisma/prisma.config.ts` porque o arquivo
 * está dentro do escopo de escrita de dados; criar `prisma.config.ts` na raiz
 * depende do agente responsável pelo bootstrap.
 */
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "schema.prisma",
  migrations: {
    path: "migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DIRECT_URL ?? "",
  },
});
