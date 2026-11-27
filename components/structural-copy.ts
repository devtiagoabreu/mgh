import {
  COMPLETED_EXCLUSION_NOTE,
  FROZEN_OPENING_VARIANT,
} from "@/lib/canonical/instrument";

/**
 * Textos de interface da superfície da Fase A.
 *
 * O conteúdo do instrumento (cenários, opções, SELF, feedback, abertura e
 * encerramento) está em `lib/canonical/instrument.ts`, transcrito de
 * `docs/002`. Aqui ficam apenas rótulos de controle e explicações da própria
 * demonstração — nunca redação canônica do instrumento.
 */
export { SCENARIO_TOTAL } from "@/lib/canonical/instrument";
export const SELF_TOTAL = 8;

export const AUTOSAVE_LABELS = {
  idle: "Nenhuma resposta registrada nesta demonstração.",
  saving: "Registrando resposta…",
  saved: "Resposta registrada nesta demonstração.",
  error: "Não foi possível registrar. Nada foi salvo.",
} as const;

export type AutosaveState = keyof typeof AUTOSAVE_LABELS;
export type ConsentDecision = "accept" | "decline";

/**
 * Explicações exibidas nos modais dos botões "i". Redação derivada de
 * `docs/historico.md` e `docs/governanca/*.md`; não é texto do instrumento,
 * redação jurídica de consentimento nem regra de score.
 */
export const INFO_TOPICS = {
  demonstracao: {
    label: "Informações sobre esta demonstração",
    title: "Sobre esta demonstração",
    description: "O que esta tela mostra e o que ela não faz.",
    details: [
      "A sequência usa textos literais dos dados canônicos. A navegação fica apenas na memória local do navegador.",
      "Não há API, persistência, score, relatório, perfil nem resposta individual.",
      "A IA está fora da Fase A: sem scoring, interpretação ou classificação.",
    ],
  },
  consentimento: {
    label: "Informações sobre consentimento e privacidade",
    title: "Consentimento e privacidade",
    description: "O que é texto metodológico e o que ainda depende de revisão jurídica.",
    details: [
      "A afirmativa exibida é o texto metodológico do piloto, transcrito dos dados canônicos. Ela não é o termo jurídico final.",
      "A redação jurídica final e a Privacy Notice dependem de avaliação MGH e Jurídico (OPEN-LEGAL-001/002).",
      "Os rótulos dos controles são da interface. Participantes reais só entram após consentimento final e banco canônico aprovado.",
    ],
  },
  procedencia: {
    label: "Informações sobre a procedência dos textos",
    title: "Procedência dos textos",
    description: "De onde vêm os enunciados, as opções e as instruções exibidas.",
    details: [
      "Todos os textos exibidos vêm dos dados canônicos.",
      "Os 48 cenários e as opções foram transcritos dos dados canônicos.",
      "A abertura exibida transcreve a versão de boas-vindas dos dados canônicos. Outra versão congelada também está registrada nos dados canônicos e aparece neste botão.",
      "Os códigos dos itens e a contagem de 56 respostas pontuáveis também vêm dos dados canônicos. Nada foi parafraseado.",
    ],
  },
  abertura: {
    label: "Informações sobre os textos de abertura",
    title: "Textos de abertura",
    description:
      "Duas versões registradas nos dados canônicos; divergência não resolvida.",
    details: [
      "A tela de boas-vindas transcreve a versão de boas-vindas dos dados canônicos.",
      "Outra versão, registrada nos dados canônicos como texto metodológico congelado, diz:",
      ...FROZEN_OPENING_VARIANT.map(
        (paragraph) => `Variante congelada: ${paragraph}`,
      ),
      "Divergência registrada como SPECIFICATION CONFLICT. Nenhuma versão foi escolhida silenciosamente; a decisão cabe à autoridade MGH.",
    ],
  },
  banco: {
    label: "Informações sobre o banco de itens",
    title: "Banco de itens",
    description: "Estado da reconciliação dos dados canônicos.",
    details: [
      "Os dados canônicos marcam o texto dos cenários como pendente de confirmação de fonte. Ao mesmo tempo, os 48 enunciados e as opções estão presentes na mesma ordem e com os mesmos códigos.",
      "Essa divergência está registrada para decisão da autoridade MGH. Ela não foi resolvida automaticamente.",
      "Os códigos e as facetas não são exibidos ao participante: a interface mostra somente a situação e as alternativas.",
    ],
  },
  self: {
    label: "Informações sobre o registro reflexivo",
    title: "Registro reflexivo (SELF)",
    description: "O que é o SELF e por que ele não entra no score.",
    details: [
      "São oito afirmações em escala de 1 a 5, transcritas dos dados canônicos.",
      "Os itens SELF ficam fora do Score Engine e não alteram as respostas dos 48 cenários.",
    ],
  },
  score: {
    label: "Informações sobre score e IA",
    title: "Score e IA",
    description: "O que esta demonstração não calcula e o que fica fora da Fase A.",
    details: [
      "O Score Engine é determinístico e roda fora da interface; esta demonstração não calcula score.",
      "Feedback pós-teste e relações de consistência também ficam fora do score.",
      "A IA está fora da Fase A: sem scoring, interpretação ou classificação.",
    ],
  },
  encerramento: {
    label: "Informações sobre o encerramento",
    title: "Encerramento",
    description: "Por que esta tela não traz nota, perfil nem resultado.",
    details: [
      "A tela final não mostra resultado: os dados canônicos registram “Sem resultado.” e “Sem D/I/S/C.”",
      `Os dados canônicos também registram que não deve aparecer ${COMPLETED_EXCLUSION_NOTE} — isso criaria expectativa desnecessária.`,
      "Há duas versões de encerramento nos dados canônicos. A demonstração mostra as duas em sequência, sem escolher uma silenciosamente.",
      "Esta superfície não salva respostas, não calcula score e não usa IA.",
    ],
  },
  bloqueio: {
    label: "Informações sobre o bloqueio de participantes reais",
    title: "Participantes reais",
    description: "Por que o piloto com participantes reais continua bloqueado.",
    details: [
      "A aplicação não está divulgada. Não há participantes reais nem dados pessoais nesta superfície.",
      "Faltam: reconciliação formal dos dados canônicos, consentimento e Privacy Notice finais, RPO/RTO com restore testado e auditoria renderizada de acessibilidade.",
    ],
  },
  operacao: {
    label: "Informações sobre deploy, recuperação e acessibilidade",
    title: "Deploy, recuperação e acessibilidade",
    description: "Estado técnico do deploy e do que ainda falta validar.",
    details: [
      "O build na Vercel passou e a migration da Fase A foi aplicada ao banco sintético.",
      "RPO e RTO estão vazios e o restore ainda não foi testado.",
      "A auditoria renderizada de acessibilidade — axe/Lighthouse, leitor de tela, 200/400%, 1280×800 e 390×844 — ainda não foi executada. Gates verdes no código não bastam para aprovar a interface.",
    ],
  },
} as const;

export type InfoTopicKey = keyof typeof INFO_TOPICS;
