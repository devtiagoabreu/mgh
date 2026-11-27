"use server";

import { signOut } from "../../auth";
import { changePassword } from "../../lib/auth/password-change";
import {
  PASSWORD_CHANGE_ERROR,
  type PasswordChangeState,
} from "../../lib/auth/password-change-state";
import { requireVerifiedSession } from "../../lib/auth/session";
import { getAuthDb } from "../../lib/db/client";

/**
 * A sessão JWT antiga ainda carrega `mghMustChangePassword=true`. Por isso a
 * troca termina em signOut: o novo login reconstrói o token com o claim limpo.
 */
export async function changePasswordAction(
  _state: PasswordChangeState,
  formData: FormData,
): Promise<PasswordChangeState> {
  const { context } = await requireVerifiedSession();

  try {
    await changePassword(await getAuthDb(), context, {
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
    });
  } catch {
    return { error: PASSWORD_CHANGE_ERROR };
  }

  await signOut({ redirectTo: "/login" });
  return { error: null };
}
