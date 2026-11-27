import type { PhaseARole } from "./roles";

/**
 * Colaborador cadastrado pelo MENTOR_OWNER. O papel é o mesmo do participante:
 * não existe papel novo para colaborador na Fase A.
 */
export const COLLABORATOR_ROLE: PhaseARole = "MENTEE";

/** MENSAGEM UI: não é texto canônico do instrumento. */
export const TEMPORARY_PASSWORD_NOTICE =
  "Guarde esta senha temporária: ela será exibida apenas agora e deverá ser trocada no primeiro acesso.";
