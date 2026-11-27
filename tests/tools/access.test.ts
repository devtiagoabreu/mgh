import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import { tenantScopedWhere } from "../../lib/db/context";
import { listGrantedToolKeys } from "../../lib/tools/access";
import { createFakeClient } from "../data/fakes";

const tenantId = "22222222-2222-4222-8222-222222222222";
const userId = "11111111-1111-4111-8111-111111111111";
const sessionId = "33333333-3333-4333-8333-333333333333";
const ctx = createTenantContextFromVerifiedClaims({
  userId,
  tenantId,
  role: "MENTOR_OWNER",
  sessionId,
});

describe("F5.1 — acesso por grant ativo", () => {
  it("só devolve chaves da allowlist e ignorando grants inativos", async () => {
    const { client, calls } = createFakeClient();
    const surface = client as unknown as Record<string, unknown>;
    surface.toolGrant = {
      findMany: async (args: unknown) => {
        calls.push({ kind: "toolGrant.findMany", args });
        return [
          { toolKey: "MGH" },
          { toolKey: "MGH" },
          { toolKey: "OUTRO" },
        ];
      },
    };

    await expect(listGrantedToolKeys(client, ctx)).resolves.toEqual(["MGH"]);
    const findManyCall = calls.find((call) => call.kind === "toolGrant.findMany");
    const args = (findManyCall?.args ?? {}) as { where: Record<string, unknown> };
    expect(args.where).toEqual({
      ...tenantScopedWhere(ctx),
      userId,
      active: true,
    });
    expect(findManyCall?.kind).toBe("toolGrant.findMany");
    expect(args.where).not.toHaveProperty("tenantId", undefined);
  });
});
