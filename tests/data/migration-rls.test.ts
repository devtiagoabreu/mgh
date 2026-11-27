import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const schema = readFileSync(
  resolve(process.cwd(), "prisma/schema.prisma"),
  "utf8",
);

const migrationsDir = resolve(process.cwd(), "prisma/migrations");
const sql = readdirSync(migrationsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((entry) =>
    readFileSync(join(migrationsDir, entry.name, "migration.sql"), "utf8"),
  )
  .join("\n");

interface TableInfo {
  readonly qualified: string;
  readonly short: string;
}

function tenantTables(): TableInfo[] {
  const result: TableInfo[] = [];
  const pattern = /model\s+(\w+)\s*\{([\s\S]*?)\n\}/g;
  for (const match of schema.matchAll(pattern)) {
    const modelName = match[1];
    // auth_credentials guarda o vínculo userId/tenantId, mas não participa do
    // isolamento RLS: é consultado no login, antes de haver sessão verificada.
    if (modelName === "AuthCredential") continue;
    const body = match[2];
    const mapName = body.match(/@@map\("([^"]+)"\)/)?.[1];
    if (!mapName) continue;
    if (!/tenantId\s+String\s+@map\("tenant_id"\)/.test(body)) continue;
    const vault = /@@schema\("vault"\)/.test(body);
    result.push({
      qualified: vault ? `vault."${mapName}"` : `public."${mapName}"`,
      short: mapName,
    });
  }
  return result;
}

function policyBlock(table: string, action: string): string {
  const pattern = new RegExp(
    `CREATE POLICY "${table}_tenant_${action}"[\\s\\S]*?;`,
  );
  return sql.match(pattern)?.[0] ?? "";
}

describe("P1 — migration RLS", () => {
  it("habilita e força RLS em toda tabela de tenant", () => {
    const tables = tenantTables();
    expect(tables.length).toBe(18);
    for (const table of tables) {
      expect(
        sql,
        `${table.qualified} sem ENABLE ROW LEVEL SECURITY`,
      ).toContain(`ALTER TABLE ${table.qualified} ENABLE ROW LEVEL SECURITY;`);
      expect(
        sql,
        `${table.qualified} sem FORCE ROW LEVEL SECURITY`,
      ).toContain(`ALTER TABLE ${table.qualified} FORCE ROW LEVEL SECURITY;`);
    }
  });

  it("tem políticas separadas de SELECT/INSERT/UPDATE/DELETE por tabela", () => {
    for (const table of tenantTables()) {
      for (const action of ["select", "insert", "update", "delete"]) {
        const block = policyBlock(table.short, action);
        expect(block, `${table.short} sem política ${action}`).not.toBe("");
        expect(block).toContain(`FOR ${action.toUpperCase()} TO PUBLIC`);
        expect(block).toContain("ON " + table.qualified);
      }
    }
  });

  it("usa somente a sessão verificada como claim de tenant", () => {
    const setting = "current_setting('app.current_tenant_id', true)";
    for (const table of tenantTables()) {
      for (const action of ["select", "insert", "update", "delete"]) {
        if (
          (table.short === "response_raws" ||
            table.short === "response_events") &&
          (action === "update" || action === "delete")
        ) {
          continue;
        }
        expect(policyBlock(table.short, action)).toContain(setting);
      }
    }
    expect(sql).not.toContain("${");
  });

  it("adiciona a coluna de primeira senha sem incluir auth_credentials no RLS", () => {
    const migration = readFileSync(
      resolve(
        process.cwd(),
        "prisma/migrations/20261127190000_f5_1_tool_grants/migration.sql",
      ),
      "utf8",
    );
    expect(migration).toContain(
      'ALTER TABLE "auth_credentials" ADD COLUMN     "must_change_password" BOOLEAN NOT NULL DEFAULT false;',
    );
    expect(migration).not.toContain(
      'ALTER TABLE public."auth_credentials" ENABLE ROW LEVEL SECURITY',
    );
    expect(migration).not.toContain("password_hash");
  });

  it("bloqueia UPDATE/DELETE de RAW e eventos por policy e trigger", () => {
    for (const table of ["response_raws", "response_events"]) {
      const update = policyBlock(table, "update");
      const remove = policyBlock(table, "delete");
      expect(update).toContain("USING (false)");
      expect(update).toContain("WITH CHECK (false)");
      expect(remove).toContain("USING (false)");
      expect(sql).toContain(`CREATE TRIGGER "${table}_no_update"`);
      expect(sql).toContain(`CREATE TRIGGER "${table}_no_delete"`);
    }
    for (const table of ["response_raws", "response_events"]) {
      const createTable = sql.match(
        new RegExp(`CREATE TABLE (?:public\\.)?"${table}" \\([\\s\\S]*?\\);`),
      )?.[0];
      expect(createTable, `CREATE TABLE ${table} ausente`).toBeDefined();
      expect(createTable).not.toMatch(/updated_at|"updatedAt"/);
    }
  });
});
