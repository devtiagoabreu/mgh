export type LoginState = {
  error: string | null;
};

export const INITIAL_LOGIN_STATE: LoginState = { error: null };

export const INVALID_CREDENTIALS_MESSAGE =
  "Usuário ou senha inválidos." as const;
