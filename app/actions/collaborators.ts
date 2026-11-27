"use server";

import { assertMentorOwner } from "@/lib/actions/access";
import {
  COLLABORATOR_ACTION_ERROR,
  type CollaboratorActionState,
} from "@/lib/actions/collaborator-state";
import { requireVerifiedSession } from "@/lib/auth/session";
import {
  createCollaborator,
  grantToolToCollaborators,
  revokeToolFromAllCollaborators,
} from "@/lib/db/collaborators";
import { getPrisma } from "@/lib/db/client";
import { assertWorkspaceToolKey } from "@/lib/tools/catalog";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateSchema = z.object({
  email: z.string().trim().email().max(254),
  toolKey: z.string().min(1).max(64),
});

const ToolSchema = z.object({
  toolKey: z.string().min(1).max(64),
});

function failure(): CollaboratorActionState {
  return { error: COLLABORATOR_ACTION_ERROR, temporaryPassword: null };
}

/** Toda ação valida papel e tenant da sessão antes de tocar no banco. */
async function authorize(): Promise<ReturnType<typeof requireVerifiedSession>> {
  const verified = await requireVerifiedSession();
  assertMentorOwner(verified.context.role);
  return verified;
}

export async function createCollaboratorAction(
  _state: CollaboratorActionState,
  formData: FormData,
): Promise<CollaboratorActionState> {
  const parsed = CreateSchema.safeParse({
    email: formData.get("email"),
    toolKey: formData.get("toolKey"),
  });
  if (!parsed.success) return failure();

  try {
    const toolKey = assertWorkspaceToolKey(parsed.data.toolKey);
    const { context } = await authorize();
    const result = await createCollaborator(await getPrisma(), context, {
      email: parsed.data.email.toLowerCase(),
      toolKey,
    });
    revalidatePath("/app/profissionais");
    return { error: null, temporaryPassword: result.temporaryPassword };
  } catch {
    return failure();
  }
}

export async function grantToolAction(
  _state: CollaboratorActionState,
  formData: FormData,
): Promise<CollaboratorActionState> {
  const parsed = ToolSchema.safeParse({ toolKey: formData.get("toolKey") });
  if (!parsed.success) return failure();

  try {
    const toolKey = assertWorkspaceToolKey(parsed.data.toolKey);
    const { context } = await authorize();
    await grantToolToCollaborators(await getPrisma(), context, toolKey);
    revalidatePath("/app/profissionais");
    return { error: null, temporaryPassword: null };
  } catch {
    return failure();
  }
}

export async function revokeToolAction(
  _state: CollaboratorActionState,
  formData: FormData,
): Promise<CollaboratorActionState> {
  const parsed = ToolSchema.safeParse({ toolKey: formData.get("toolKey") });
  if (!parsed.success) return failure();

  try {
    const toolKey = assertWorkspaceToolKey(parsed.data.toolKey);
    const { context } = await authorize();
    await revokeToolFromAllCollaborators(await getPrisma(), context, toolKey);
    revalidatePath("/app/profissionais");
    return { error: null, temporaryPassword: null };
  } catch {
    return failure();
  }
}
