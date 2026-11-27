import { describe, expect, it } from "vitest";
import { resolveAuthIdentity } from "../../lib/auth/identity";
import { hashPassword } from "../../lib/auth/password";
import { setPrismaForTests } from "../../lib/db/client";
import { createFakeClient, type CallLog } from "../data/fakes";

const tenantId = "22222222-2222-4222-8222-222222222222";
const userId = "11111111-1111-4111-8111-111111111111";
const passwordHash = hashPassword("senha-sintetica-de-teste");

function installFake(
  credential: unknown,
  membership: unknown,
): CallLog[] {
  const { client, calls } = createFakeClient();
  const surface = client as unknown as Record<string, unknown>;
  surface.authCredential = {
    findUnique: async (args: unknown) => {
      calls.push({ kind: "authCredential.findUnique", args });
      return credential;
    },
  };
  surface.tenantMembership = {
    findFirst: async (args: unknown) => {
      calls.push({ kind: "tenantMembership.findFirst", args });
      return membership;
    },
  };
  setPrismaForTests(client);
  return calls;
}

const activeCredential = {
  active: true,
  passwordHash,
  userId,
  tenantId,
  mustChangePassword: true,
};
const activeMembership = { active: true, role: "MENTOR_OWNER" };

describe("F0 — resolução da credencial", () => {
  it("só consulta o tenant depois de conferir a senha", async () => {
    const calls = installFake(activeCredential, activeMembership);

    await expect(
      resolveAuthIdentity("owner@example.test", "senha-sintetica-de-teste"),
    ).resolves.toEqual({
      userId,
      tenantId,
      role: "MENTOR_OWNER",
      mustChangePassword: true,
    });

    expect(calls.map((call) => call.kind)).toContain("authCredential.findUnique");
    expect(calls.map((call) => call.kind)).toContain("$transaction.begin");
    expect(calls.map((call) => call.kind)).toContain("tenantMembership.findFirst");

    const membershipCall = calls.find(
      (call) => call.kind === "tenantMembership.findFirst",
    );
    expect(membershipCall?.args).toMatchObject({
      where: { tenantId, userId, active: true },
    });

    const setting = calls.find((call) => call.kind === "$queryRaw");
    expect(setting?.args).toMatchObject({ values: [tenantId] });
  });

  it("rejeita senha errada sem tocar em tabela tenant-scoped", async () => {
    const calls = installFake(activeCredential, activeMembership);

    await expect(
      resolveAuthIdentity("owner@example.test", "senha-errada"),
    ).resolves.toBeNull();

    expect(calls.map((call) => call.kind)).not.toContain("$transaction.begin");
    expect(calls.map((call) => call.kind)).not.toContain(
      "tenantMembership.findFirst",
    );
  });

  it("rejeita credencial inativa", async () => {
    const calls = installFake(
      { ...activeCredential, active: false },
      activeMembership,
    );

    await expect(
      resolveAuthIdentity("owner@example.test", "senha-sintetica-de-teste"),
    ).resolves.toBeNull();
    expect(calls.map((call) => call.kind)).not.toContain("$transaction.begin");
  });

  it("rejeita associação inativada ou papel deferido", async () => {
    installFake(activeCredential, { active: false, role: "MENTOR_OWNER" });
    await expect(
      resolveAuthIdentity("owner@example.test", "senha-sintetica-de-teste"),
    ).resolves.toBeNull();

    installFake(activeCredential, { active: true, role: "MENTOR_ASSISTANT" });
    await expect(
      resolveAuthIdentity("owner@example.test", "senha-sintetica-de-teste"),
    ).resolves.toBeNull();
  });

  it("propaga a obrigatoriedade de trocar a senha sem alterar a ordem", async () => {
    const calls = installFake(
      { ...activeCredential, mustChangePassword: false },
      activeMembership,
    );

    const identity = await resolveAuthIdentity(
      "owner@example.test",
      "senha-sintetica-de-teste",
    );
    expect(identity?.mustChangePassword).toBe(false);
    expect(calls.map((call) => call.kind)).toEqual([
      "authCredential.findUnique",
      "$transaction.begin",
      "$queryRaw",
      "tenantMembership.findFirst",
      "$transaction.commit",
    ]);
  });
});
