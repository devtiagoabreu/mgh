import { describe, expect, it } from "vitest";
import {
  AGGREGATE_MIN_N,
  deriveMghOperationalMetrics,
  type MghOperationalRaw,
} from "../../lib/metrics/dashboard";

function raw(overrides: Partial<MghOperationalRaw> = {}): MghOperationalRaw {
  return {
    completedRuns: 0,
    inProgressRuns: 0,
    invalidatedRuns: 0,
    participantsWithCompletedRun: 0,
    responseRawCount: 0,
    activeMembers: 0,
    ...overrides,
  };
}

describe("F4.1 — métricas operacionais do MGH", () => {
  it("mostra zeros reais e suprime a taxa abaixo do corte mínimo", () => {
    const metrics = deriveMghOperationalMetrics(raw());

    expect(metrics.totalRuns).toBe(0);
    expect(metrics.completedRuns).toBe(0);
    expect(metrics.participantsWithCompletedRun).toBe(0);
    expect(metrics.completionRate).toBeNull();
    expect(metrics.completionRateSuppressed).toBe(true);
    expect(Object.isFrozen(metrics)).toBe(true);
  });

  it("suprime a taxa quando n < 5 mesmo havendo conclusões", () => {
    const metrics = deriveMghOperationalMetrics(
      raw({ completedRuns: 2, inProgressRuns: 2 }),
    );

    expect(metrics.totalRuns).toBe(4);
    expect(metrics.completionRate).toBeNull();
    expect(metrics.completionRateSuppressed).toBe(true);
  });

  it("calcula a taxa somente com n >= 5", () => {
    const metrics = deriveMghOperationalMetrics(
      raw({ completedRuns: 3, inProgressRuns: 1, invalidatedRuns: 1 }),
    );

    expect(metrics.totalRuns).toBe(AGGREGATE_MIN_N);
    expect(metrics.completionRateSuppressed).toBe(false);
    expect(metrics.completionRate).toBe(60);
  });

  it("rejeita contagens inválidas em vez de exibir número incorreto", () => {
    expect(() =>
      deriveMghOperationalMetrics(raw({ completedRuns: -1 })),
    ).toThrow("INVALID_OPERATIONAL_COUNT");
    expect(() =>
      deriveMghOperationalMetrics(raw({ responseRawCount: 1.5 })),
    ).toThrow("INVALID_OPERATIONAL_COUNT");
  });
});
