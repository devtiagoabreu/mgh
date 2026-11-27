import { describe, expect, it } from "vitest";
import {
  WORKSPACE_TOOL_KEYS,
  assertWorkspaceToolKey,
  isWorkspaceToolKey,
} from "../../lib/tools/catalog";

describe("F5.1 — catálogo técnico de instrumentos", () => {
  it("contém somente a chave MGH", () => {
    expect([...WORKSPACE_TOOL_KEYS]).toEqual(["MGH"]);
  });

  it("aceita MGH e rejeita qualquer valor fora da allowlist", () => {
    expect(isWorkspaceToolKey("MGH")).toBe(true);
    expect(assertWorkspaceToolKey("MGH")).toBe("MGH");

    for (const invalid of [undefined, null, "", "NOT_IN_CATALOG", 1, {}]) {
      expect(isWorkspaceToolKey(invalid)).toBe(false);
      expect(() => assertWorkspaceToolKey(invalid)).toThrow(
        "UNSUPPORTED_WORKSPACE_TOOL_KEY",
      );
    }
  });
});
