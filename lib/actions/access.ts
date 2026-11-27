import type { PhaseARole } from "../auth/roles";

/** RBAC server-side: apenas MENTOR_OWNER administra colaboradores e grants. */
export function assertMentorOwner(role: PhaseARole): void {
  if (role !== "MENTOR_OWNER") {
    throw new Error("FORBIDDEN");
  }
}
