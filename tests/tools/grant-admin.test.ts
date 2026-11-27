import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import {
  grantToolToCollaborators,
  revokeToolFromAllCollaborators,
} from "../../lib/db/collaborators";
import { tenantScopedWhere } from "../../lib/db/context";
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

const collaborators = [
  { userId: "aaa", active: true, role: "MENTEE" },
  { userId: "bbb", active: true, role: "MENTEE" },
];

const credentials = [
  { userId: "aaa", email: "a@example.test" },
  { userId: "bbb", email: "b@example.test" },
];

function memberClient() {
  return createFakeClient({
    delegates: {
      tenantMembership: { findMany: async () => collaborators },
      authCredential: { findMany: async () => credentials },
    },
  });
}

describe("F5.1 — concessão e revogação tenant-scoped", () => {
  it("concede MGH aos colaboradores ativos sem duplicar grants", async () => {
    const { client, calls } = memberClient();
    const surface = client as unknown as Record<string, unknown>;
    let existing = 0;
    surface.toolGrant = {
      ...(surface.toolGrant as object),
      findFirst: async (args: unknown) => {
        calls.push({ kind: "toolGrant.findFirst", args });
        existing += 1;
        return existing === 1 ? { id: "existing" } : null;
      },
    };

    await expect(grantToolToCollaborators(client, ctx, "MGH")).resolves.toBe(1);
    const creates = calls.filter((call) => call.kind === "toolGrant.create");
    expect(creates).toHaveLength(1);
    const data = creates[0]?.args as { data: Record<string, unknown> };
    expect(data.data).toMatchObject({
      ...tenantScopedWhere(ctx),
      userId: "bbb",
      toolKey: "MGH",
      active: true,
    });
  });

  it("revoga somente grants ativos dos colaboradores do tenant", async () => {
    const { client, calls } = memberClient();

    await expect(
      revokeToolFromAllCollaborators(client, ctx, "MGH"),
    ).resolves.toBe(1);
    const update = calls.find((call) => call.kind === "toolGrant.updateMany");
    expect(update?.args).toEqual({
      where: {
        ...tenantScopedWhere(ctx),
        userId: { in: ["aaa", "bbb"] },
        toolKey: "MGH",
        active: true,
      },
      data: { active: false, updatedAt: expect.any(Date) },
    });
  });
});
