import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { PASSWORD_MAX_LENGTH } from "./password-limits";

const SCRYPT_KEY_LENGTH = 64;
export { PASSWORD_MAX_LENGTH } from "./password-limits";

/** Hash scrypt com salt aleatório. Nunca guarda a senha em texto claro. */
export function hashPassword(password: string): string {
  if (!password || password.length > PASSWORD_MAX_LENGTH) {
    throw new Error("INVALID_PASSWORD");
  }
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH).toString("hex");
  return `scrypt$${salt}$${derived}`;
}

/** Comparação em tempo constante contra o hash armazenado no banco. */
export function verifyPassword(password: string, stored: string): boolean {
  if (!password || password.length > PASSWORD_MAX_LENGTH) {
    return false;
  }
  const [algorithm, salt, encoded] = stored.split("$");
  if (algorithm !== "scrypt" || !salt || !encoded) {
    return false;
  }
  let expected: Buffer;
  try {
    expected = Buffer.from(encoded, "hex");
  } catch {
    return false;
  }
  if (expected.length !== SCRYPT_KEY_LENGTH) {
    return false;
  }
  const actual = scryptSync(password, salt, SCRYPT_KEY_LENGTH);
  return timingSafeEqual(expected, actual);
}

/** Formato aceito pelo seed: scrypt$salt_hex$derived_hex. */
export const PASSWORD_HASH_PATTERN =
  /^scrypt\$[0-9a-f]{32}\$[0-9a-f]{128}$/;
