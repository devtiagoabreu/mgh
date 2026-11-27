import { describe, expect, it } from "vitest";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import { verifyPassword } from "../../lib/auth/password";
import {
  createCollaborator,
  listCollaborators,
} from "../../lib/db/collaborators";
import { tenantScopedData, tenantScopedWhere } from "../../lib/db/context";
import { createFakeClient } from "./fakes";

const tenantId = "22222222-2222-4222-8222-222222222222";
const userId = "11111111-1111-4111-8111-111111111111";
const sessionId = "33333333-3333-4333-8333-333333333333";
const ctx = createTenantContextFromVerifiedClaims({
  userId,
  tenantId,
  role: "MENTOR_OWNER",
  sessionId,
});

describe("F5.1 — colaboradores tenant-scoped", () => {
  it("grava somente o hash da senha temporária devolvida uma vez", async () => {
    const { client, calls } = createFakeClient();

    const result = await createCollaborator(client, ctx, {
      email: "colaborador@example.test",
      toolKey: "MGH",
    });

    expect(result.record.email).toBe("colaborador@example.test");
    expect(result.record.role).toBe("MENTEE");
    expect(result.temporaryPassword.length).toBeGreaterThan(20);
    const credentialCreate = calls.find(
      (call) => call.kind === "authCredential.create",
    );
    const data = credentialCreate?.args as {
      data: { passwordHash: string; mustChangePassword: boolean };
    };
    expect(
      verifyPassword(result.temporaryPassword, data.data.passwordHash),
    ).toBe(true);
    expect(data.data.mustChangePassword).toBe(true);
    const grantCreate = calls.find((call) => call.kind === "toolGrant.create");
    expect(grantCreate?.args).toMatchObject({
      data: {
        ...tenantScopedWhere(ctx),
        userId: result.record.id,
        toolKey: "MGH",
        active: true,
      },
    });
    const serialized = JSON.stringify(calls);
    expect(serialized).not.toContain(result.temporaryPassword);
  });

  it("exclui outros MENTOR_OWNER e lê e-mail da credencial global filtrada", async () => {
    const { client, calls } = createFakeClient({
      delegates: {
        tenantMembership: {
          findMany: async () => [
            {
              userId: "aaa",
              active: true,
              role: "MENTEE",
            },
            {
              userId: "bbb",
              active: true,
              role: "MENTOR_OWNER",
            },
          ],
        },
        authCredential: {
          findMany: async () => [
            { userId: "aaa", email: "membro@example.test" },
          ],
        },
      },
    });

    await expect(listCollaborators(client, ctx)).resolves.toEqual([
      { id: "aaa", email: "membro@example.test", role: "MENTEE" },
    ]);
    const membershipArgs = (
      calls.find((call) => call.kind === "tenantMembership.findMany")?.args ??
      {}
    ) as { where: Record<string, unknown> };
    expect(membershipArgs.where).toEqual({
      ...tenantScopedWhere(ctx),
      active: true,
      role: "MENTEE",
    });
    const credentialArgs = (
      calls.find((call) => call.kind === "authCredential.findMany")?.args ?? {}
    ) as { where: Record<string, unknown> };
    expect(credentialArgs.where).toEqual({
      userId: { in: ["aaa"] },
      tenantId,
      active: true,
    });
  });

  it("usa tenantScopedData para escritas tenant-scoped", () => {
    expect(
      tenantScopedData(ctx, { id: userId, email: "membro@example.test" }),
    ).toEqual({
      id: userId,
      email: "membro@example.test",
      tenantId,
    });
  });
});
