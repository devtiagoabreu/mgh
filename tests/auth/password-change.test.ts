import { describe, expect, it } from "vitest";
import { changePassword } from "../../lib/auth/password-change";
import { PASSWORD_CHANGE_ERROR } from "../../lib/auth/password-change-state";
import { hashPassword, verifyPassword } from "../../lib/auth/password";
import { createTenantContextFromVerifiedClaims } from "../../lib/auth/tenant";
import { createFakeClient } from "../data/fakes";
import type { AuthDbClient } from "../../lib/db/types";

const tenantId = "22222222-2222-4222-8222-222222222222";
const userId = "11111111-1111-4111-8111-111111111111";
const sessionId = "33333333-3333-4333-8333-333333333333";
const temporaryHash = hashPassword("senha-temporaria-de-teste");

function installCredential(credential: unknown) {
  const { client, calls } = createFakeClient();
  const surface = client as unknown as Record<string, unknown>;
  surface.authCredential = {
    ...(surface.authCredential as object),
    findUnique: async (args: unknown) => {
      calls.push({ kind: "authCredential.findUnique", args });
      return credential;
    },
    findFirst: async (args: unknown) => {
      calls.push({ kind: "authCredential.findFirst", args });
      return credential;
    },
    updateMany: async (args: unknown) => {
      calls.push({ kind: "authCredential.updateMany", args });
      return { count: 1 };
    },
  };
  return { client: client as AuthDbClient, calls };
}

const ctx = createTenantContextFromVerifiedClaims({
  userId,
  tenantId,
  role: "MENTOR_OWNER",
  sessionId,
});

describe("F5.1 — troca da senha temporária", () => {
  it("valida a senha atual antes de gravar o novo hash", async () => {
    const { client, calls } = installCredential({
      passwordHash: temporaryHash,
      active: true,
    });

    await changePassword(client, ctx, {
      currentPassword: "senha-temporaria-de-teste",
      newPassword: "senha-definitiva-de-teste",
    });

    const update = calls.find((call) => call.kind === "authCredential.updateMany");
    const data = (update?.args as { data: { passwordHash: string } }).data;
    expect(verifyPassword("senha-definitiva-de-teste", data.passwordHash)).toBe(
      true,
    );
    expect(JSON.stringify(calls)).not.toContain("senha-temporaria-de-teste");
    expect(JSON.stringify(calls)).not.toContain("senha-definitiva-de-teste");
  });

  it("rejeita senha atual incorreta sem gravar", async () => {
    const { client, calls } = installCredential({
      passwordHash: temporaryHash,
      active: true,
    });

    await expect(
      changePassword(client, ctx, {
        currentPassword: "senha-errada",
        newPassword: "senha-definitiva-de-teste",
      }),
    ).rejects.toThrow(PASSWORD_CHANGE_ERROR);
    expect(
      calls.some((call) => call.kind === "authCredential.updateMany"),
    ).toBe(false);
  });

  it("filtra a credencial por userId e tenantId verificados", async () => {
    const { client, calls } = installCredential({
      passwordHash: temporaryHash,
      active: true,
    });

    await changePassword(client, ctx, {
      currentPassword: "senha-temporaria-de-teste",
      newPassword: "senha-definitiva-de-teste",
    });

    const find = calls.find((call) => call.kind === "authCredential.findFirst");
    expect(find?.args).toEqual({
      where: { userId, tenantId, active: true },
    });
    const update = calls.find((call) => call.kind === "authCredential.updateMany");
    expect(update?.args).toEqual({
      where: { userId, tenantId },
      data: expect.objectContaining({ mustChangePassword: false }),
    });
  });
});
