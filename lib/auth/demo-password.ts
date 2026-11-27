import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const SCRYPT_KEY_LENGTH = 64;
const MAX_PASSWORD_LENGTH = 128;

/** Hash de senha para a credencial da demonstração. Nunca guarda texto claro. */
export function hashDemoPassword(password: string): string {
  if (!password || password.length > MAX_PASSWORD_LENGTH) {
    throw new Error("INVALID_DEMO_PASSWORD");
  }
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH).toString("hex");
  return `scrypt$${salt}$${derived}`;
}

/** Comparação em tempo constante contra o hash armazenado no banco. */
export function verifyDemoPassword(password: string, stored: string): boolean {
  if (!password || password.length > MAX_PASSWORD_LENGTH) {
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
