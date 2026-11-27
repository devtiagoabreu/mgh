/**
 * Catálogo técnico de instrumentos do workspace.
 *
 * Esta é uma allowlist de chaves de produto, não um catálogo metodológico:
 * nenhum nome, texto, versão ou regra de instrumento é definido aqui. A F5.1
 * contém somente a chave MGH; qualquer outra chave exige decisão futura.
 */

export const WORKSPACE_TOOL_KEYS = ["MGH"] as const;

export type WorkspaceToolKey = (typeof WORKSPACE_TOOL_KEYS)[number];

export function isWorkspaceToolKey(value: unknown): value is WorkspaceToolKey {
  return (
    typeof value === "string" &&
    (WORKSPACE_TOOL_KEYS as readonly string[]).includes(value)
  );
}

export function assertWorkspaceToolKey(value: unknown): WorkspaceToolKey {
  if (!isWorkspaceToolKey(value)) {
    throw new Error("UNSUPPORTED_WORKSPACE_TOOL_KEY");
  }
  return value;
}
