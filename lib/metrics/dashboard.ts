/**
 * Métricas operacionais do motor MGH — F4.1.
 *
 * São contagens de execução e de registro, não KPIs de pessoas. Nenhum valor
 * aqui é score, D/I/S/C, agregado de resposta ou conclusão sobre participante.
 * A definição de cada número está em docs/plano-de-desenvolvimento.md (F4.1).
 */

/** Corte mínimo para exibir um agregado (docs/governanca/02-claims-e-evidencia.md §4). */
export const AGGREGATE_MIN_N = 5 as const;

export interface MghOperationalRaw {
  readonly completedRuns: number;
  readonly inProgressRuns: number;
  readonly invalidatedRuns: number;
  readonly participantsWithCompletedRun: number;
  readonly responseRawCount: number;
  readonly activeMembers: number;
}

export interface MghOperationalMetrics extends MghOperationalRaw {
  readonly totalRuns: number;
  /** `null` quando o corte é menor que `AGGREGATE_MIN_N`. */
  readonly completionRate: number | null;
  readonly completionRateSuppressed: boolean;
}

function assertCount(value: number, field: keyof MghOperationalRaw): number {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`INVALID_OPERATIONAL_COUNT: ${field}`);
  }
  return value;
}

/**
 * Deriva apresentação e regra de supressão sem consultar banco nem relógio.
 * A taxa só aparece quando há pelo menos `AGGREGATE_MIN_N` execuções.
 */
export function deriveMghOperationalMetrics(
  raw: MghOperationalRaw,
): MghOperationalMetrics {
  const completedRuns = assertCount(raw.completedRuns, "completedRuns");
  const inProgressRuns = assertCount(raw.inProgressRuns, "inProgressRuns");
  const invalidatedRuns = assertCount(raw.invalidatedRuns, "invalidatedRuns");
  const participantsWithCompletedRun = assertCount(
    raw.participantsWithCompletedRun,
    "participantsWithCompletedRun",
  );
  const responseRawCount = assertCount(raw.responseRawCount, "responseRawCount");
  const activeMembers = assertCount(raw.activeMembers, "activeMembers");

  const totalRuns = completedRuns + inProgressRuns + invalidatedRuns;
  const completionRateSuppressed = totalRuns < AGGREGATE_MIN_N;

  return Object.freeze({
    completedRuns,
    inProgressRuns,
    invalidatedRuns,
    participantsWithCompletedRun,
    responseRawCount,
    activeMembers,
    totalRuns,
    completionRate: completionRateSuppressed
      ? null
      : Math.round((completedRuns / totalRuns) * 100),
    completionRateSuppressed,
  });
}
