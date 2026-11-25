import { createHash } from "node:crypto";
import { configError } from "./errors";

/**
 * Serialização canônica: chaves ordenadas por code point, sem locale, sem
 * dependência da ordem de inserção do objeto. Nunca usa relógio ou aleatoriedade.
 */
export function canonicalize(value: unknown): string {
  if (value === null) return "null";

  if (typeof value === "string" || typeof value === "boolean") {
    return JSON.stringify(value);
  }

  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw configError("non-finite number cannot be canonicalized");
    }
    return JSON.stringify(value === 0 ? 0 : value);
  }

  if (Array.isArray(value)) {
    return `[${value.map((entry) => canonicalize(entry)).join(",")}]`;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, entry]) => entry !== undefined)
      .sort(([left], [right]) => (left < right ? -1 : left > right ? 1 : 0));
    const body = entries
      .map(([key, entry]) => `${JSON.stringify(key)}:${canonicalize(entry)}`)
      .join(",");
    return `{${body}}`;
  }

  throw configError(`unsupported canonicalization type: ${typeof value}`);
}

/** Hash SHA-256 estável de qualquer valor serializado canonicamente. */
export function canonicalHash(value: unknown): string {
  return createHash("sha256").update(canonicalize(value)).digest("hex");
}

/** Objeto com chaves inseridas em ordem canônica. */
export function sortedRecord<T>(
  record: Readonly<Record<string, T>>,
): Record<string, T> {
  const sorted: Record<string, T> = {};
  const keys = Object.keys(record).sort((left, right) =>
    left < right ? -1 : left > right ? 1 : 0,
  );
  for (const key of keys) sorted[key] = record[key] as T;
  return sorted;
}
