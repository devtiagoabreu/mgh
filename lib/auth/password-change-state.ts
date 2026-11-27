/** Estado do formulário de troca de senha. Nunca contém senha em claro. */
export type PasswordChangeState = {
  readonly error: string | null;
};

export const INITIAL_PASSWORD_CHANGE_STATE: PasswordChangeState = {
  error: null,
};

/** Mensagem genérica: não distingue senha atual errada de falha interna. */
export const PASSWORD_CHANGE_ERROR =
  "Não foi possível alterar a senha." as const;
