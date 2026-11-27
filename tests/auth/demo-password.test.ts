import { describe, expect, it } from "vitest";
import {
  hashDemoPassword,
  verifyDemoPassword,
} from "../../lib/auth/demo-password";

describe("credencial da demonstração", () => {
  it("gera um hash scrypt com salt e derivação em hexadecimal", () => {
    expect(hashDemoPassword("senha-sintetica")).toMatch(
      /^scrypt\$[0-9a-f]{32}\$[0-9a-f]{128}$/,
    );
  });

  it("aceita a senha correta e rejeita senha diferente", () => {
    const stored = hashDemoPassword("senha-sintetica");
    expect(verifyDemoPassword("senha-sintetica", stored)).toBe(true);
    expect(verifyDemoPassword("outra-senha", stored)).toBe(false);
  });

  it("rejeita hash malformado e entrada vazia", () => {
    expect(verifyDemoPassword("senha-sintetica", "texto-claro")).toBe(false);
    expect(verifyDemoPassword("", hashDemoPassword("senha-sintetica"))).toBe(
      false,
    );
  });
});
