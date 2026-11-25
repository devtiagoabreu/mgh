/**
 * Matriz de papéis da Fase A (PROD-TEN-001).
 * MENTOR_ASSISTANT está DEFERIDO e não existe nesta fase.
 */
export const PHASE_A_ROLES = Object.freeze({
  PLATFORM_ADMIN: "PLATFORM_ADMIN",
  MENTOR_OWNER: "MENTOR_OWNER",
  MENTEE: "MENTEE",
} as const);

export type PhaseARole =
  (typeof PHASE_A_ROLES)[keyof typeof PHASE_A_ROLES];

export const DEFERRED_ROLES = Object.freeze({
  MENTOR_ASSISTANT: "DEFERIDO",
} as const);

const ROLE_SET: ReadonlySet<string> = new Set(Object.values(PHASE_A_ROLES));

export function isPhaseARole(value: unknown): value is PhaseARole {
  return typeof value === "string" && ROLE_SET.has(value);
}

export function assertPhaseARole(value: unknown): PhaseARole {
  if (!isPhaseARole(value)) {
    throw new Error("FORBIDDEN_ROLE");
  }
  return value;
}
