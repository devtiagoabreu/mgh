import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const schema = readFileSync(
  resolve(process.cwd(), "prisma/schema.prisma"),
  "utf8",
);
const sql = readFileSync(
  resolve(
    process.cwd(),
    "prisma/migrations/20261125120000_phase_a_foundation/migration.sql",
  ),
  "utf8",
);

interface TableInfo {
  readonly qualified: string;
  readonly short: string;
}

function tenantTables(): TableInfo[] {
  const result: TableInfo[] = [];
  const pattern = /model\s+\w+\s*\{([\s\S]*?)\n\}/g;
  for (const match of schema.matchAll(pattern)) {
    const body = match[1];
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
    expect(tables.length).toBe(17);
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
