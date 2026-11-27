import { describe, expect, it } from "vitest";
import {
  findUserAppearancePreference,
  setUserAppearancePreference,
} from "../../lib/db/repositories";
import { createFakeClient } from "../data/fakes";

const ctx = {
  userId: "11111111-1111-4111-8111-111111111111",
  tenantId: "22222222-2222-4222-8222-222222222222",
  role: "MENTOR_OWNER",
  sessionId: "33333333-3333-4333-8333-333333333333",
} as const;

describe("F1 — repositório de preferência", () => {
  it("lê o usuário com filtro tenant-scoped", async () => {
    const { client, calls } = createFakeClient();
    await findUserAppearancePreference(client, ctx);
    expect(calls).toContainEqual({
      kind: "user.findFirst",
      args: { where: { tenantId: ctx.tenantId, id: ctx.userId } },
    });
  });

  it("grava a preferência com filtro tenant-scoped", async () => {
    const { client, calls } = createFakeClient();
    await setUserAppearancePreference(client, ctx, "DARK");
    expect(calls).toContainEqual({
      kind: "user.update",
      args: {
        where: { tenantId: ctx.tenantId, id: ctx.userId },
        data: { appearancePreference: "DARK" },
      },
    });
  });

  it("falha fechado com contexto incompleto, antes de qualquer escrita", async () => {
    const { client, calls } = createFakeClient();
    const tampered = { ...ctx, sessionId: "not-a-uuid" };
    await expect(
      setUserAppearancePreference(client, tampered, "DARK"),
    ).rejects.toThrow();
    expect(calls.some((call) => call.kind === "user.update")).toBe(false);
  });
});
