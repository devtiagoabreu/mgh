import { z } from "zod";
import type { AuthDbClient } from "../db/types";
import { hashPassword, verifyPassword } from "./password";
import { PASSWORD_MAX_LENGTH } from "./password-limits";
import { PASSWORD_CHANGE_ERROR } from "./password-change-state";
import type { VerifiedTenantContext } from "./tenant";

/**
 * Troca da senha temporária. A credencial é global, mas toda leitura e escrita
 * é filtrada pelo userId e pelo tenantId do contexto verificado da sessão.
 * Nenhuma senha em claro é gravada ou devolvida.
 */
const PasswordChangeSchema = z
  .object({
    currentPassword: z.string().min(1).max(PASSWORD_MAX_LENGTH),
    newPassword: z.string().min(1).max(PASSWORD_MAX_LENGTH),
  })
  .refine((value) => value.newPassword !== value.currentPassword);

export async function changePassword(
  authDb: AuthDbClient,
  ctx: VerifiedTenantContext,
  input: { readonly currentPassword: unknown; readonly newPassword: unknown },
): Promise<void> {
  const parsed = PasswordChangeSchema.safeParse(input);
  if (!parsed.success) throw new Error(PASSWORD_CHANGE_ERROR);

  const credential = await authDb.authCredential.findFirst({
    where: {
      userId: ctx.userId,
      tenantId: ctx.tenantId,
      active: true,
    },
  });
  const stored = (credential as { passwordHash?: unknown } | null)?.passwordHash;
  if (
    typeof stored !== "string" ||
    !verifyPassword(parsed.data.currentPassword, stored)
  ) {
    throw new Error(PASSWORD_CHANGE_ERROR);
  }

  const passwordHash = hashPassword(parsed.data.newPassword);
  await authDb.authCredential.updateMany({
    where: { userId: ctx.userId, tenantId: ctx.tenantId },
    data: { passwordHash, mustChangePassword: false },
  });
}
