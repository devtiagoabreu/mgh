/** Estado das ações de colaboradores. Nunca contém senha em claro. */
export type CollaboratorActionState = {
  readonly error: string | null;
  readonly temporaryPassword: string | null;
};

export const INITIAL_COLLABORATOR_ACTION_STATE: CollaboratorActionState = {
  error: null,
  temporaryPassword: null,
};

export const COLLABORATOR_ACTION_ERROR =
  "Não foi possível concluir a operação." as const;
