/**
 * Textos literais do instrumento MGH-P1.0.
 *
 * PROCEDÊNCIA — todo conteúdo abaixo é transcrição literal de `docs/002`
 * (fonte canônica para consumo por IA), sem paráfrase nem reconstrução:
 *
 * - Abertura exibida (TELA 0): `fontes/mapa-de-governo-humano/
 *   07-evidencias-e-pilotagem.md`, linhas 930-950.
 * - Variante congelada da abertura: `fontes/mapa-de-governo-humano/
 *   16-handoff-02-architecture-e-instrument.md`, item 34, linhas 4007-4023.
 * - Título, contexto e ordem dos 48 cenários: `fontes/mapa-de-governo-humano/
 *   07-evidencias-e-pilotagem.md`, linhas 928-1438.
 * - Consentimento metodológico: o mesmo arquivo, linha 2222.
 * - Controles do consentimento: `fontes/mapa-de-governo-humano/
 *   08-data-model-e-prototipo.md`, P-02, linhas 1469-1480.
 * - SELF, feedback e tela final: `07-evidencias-e-pilotagem.md`,
 *   linhas 1440-1501.
 * - Códigos, ordem e contagem de 56 respostas: `fontes/anx-003-xlsx/
 *   01-00-readme.md`, linhas 45-93.
 *
 * O status `SOURCE_REQUIRED` registrado no xlsx ANX-003 é anterior a esta
 * recuperação e está em divergência com o documento mestre. A divergência
 * deve ser resolvida pela autoridade MGH; aqui os textos são apenas
 * transcrições com fonte identificada, não redação nova.
 */

export const INSTRUMENT_VERSION = "MGH-P1.0" as const;
export const SCENARIO_TOTAL = 48 as const;
export const SCENARIO_SOURCE =
  "docs/002/fontes/mapa-de-governo-humano/07-evidencias-e-pilotagem.md" as const;

export const OPENING_TITLE = "MAPA DE GOVERNO HUMANO™" as const;
export const OPENING_BUTTON = "INICIAR MEU MAPA" as const;

/**
 * TELA 0 — BOAS-VINDAS (07:930-950). Negritos do original não reproduzidos;
 * as palavras são literais.
 */
export const OPENING_INSTRUCTIONS = [
  "Este instrumento apresenta situações relacionadas à maneira como você costuma se comunicar, agir e reagir no ambiente profissional.",
  "Não existem respostas certas ou erradas.",
  "Responda pensando principalmente em como você costuma agir hoje, e não em como acredita que deveria agir.",
  "Quando mais de uma alternativa parecer adequada, escolha aquela que mais frequentemente se aproxima do que acontece naturalmente com você.",
  "Algumas situações poderão parecer semelhantes. Isso é intencional: contextos diferentes podem produzir respostas diferentes.",
  "Responda com naturalidade. Não tente construir um perfil.",
  "O MGH™ não avalia inteligência, caráter, competência profissional ou saúde mental.",
] as const;

/**
 * Variante registrada no item 34 de 16-handoff-02 (4011-4023) como "texto
 * metodológico congelado". DIVERGÊNCIA com a TELA 0 acima: não foi feita
 * escolha silenciosa. Ambas são exibidas com procedência; a decisão cabe à
 * autoridade MGH.
 */
export const FROZEN_OPENING_VARIANT = [
  "O Mapa de Governo Humano™ apresenta situações relacionadas à maneira como você costuma se comunicar, agir e reagir no ambiente profissional.",
  "Não existem respostas certas ou erradas.",
  "Responda pensando principalmente em como você costuma agir hoje, e não em como acredita que deveria agir.",
  "Quando mais de uma alternativa parecer adequada, escolha aquela que mais frequentemente se aproxima do seu comportamento natural.",
  "Algumas situações podem parecer semelhantes. Isso é intencional: contextos diferentes podem revelar respostas diferentes.",
  "Responda com naturalidade. Não tente construir um perfil.",
  "Este instrumento não avalia inteligência, caráter, competência profissional ou saúde mental.",
] as const;

/** 07-evidencias-e-pilotagem.md:2222 — texto a constar no consentimento. */
export const CONSENT_STATEMENT =
  "O MGH™ P1.0 é uma versão experimental em desenvolvimento. Sua participação tem finalidade de pesquisa e aperfeiçoamento do instrumento. O resultado não deve ser utilizado como diagnóstico psicológico, avaliação de competência ou fundamento isolado para decisões profissionais." as const;

/** 08-data-model-e-prototipo.md, P-02. */
export const CONSENT_CHECKBOXES = [
  "Li e compreendi as informações.",
  "Concordo em participar voluntariamente.",
] as const;
export const CONSENT_BUTTON = "CONTINUAR" as const;
export const CONSENT_DECLINE = "Não aceitar" as const;

/** P-04 de 08-data-model-e-prototipo.md:1517-1537. */
export const PRE_INSTRUCTIONS_TITLE = "ANTES DE COMEÇAR" as const;
export const PRE_INSTRUCTIONS = [
  "Responda pensando em como você costuma agir hoje no ambiente profissional, e não em como acredita que deveria agir.",
  "Não existem respostas certas ou erradas.",
  "Quando mais de uma opção parecer adequada, escolha a que mais frequentemente representa sua reação natural.",
  "Responda com tranquilidade. Não tente construir um perfil.",
] as const;
export const PRE_INSTRUCTIONS_BUTTON = "COMEÇAR MEU MAPA" as const;

/** Contexto profissional — não pontuado (07:952-972). */
export const CONTEXT_FROZEN =
  "MEU COMPORTAMENTO PROFISSIONAL ATUAL" as const;
export const CONTEXT_FIELDS = [
  {
    id: "posicao-profissional",
    label: "Posição profissional",
    options: [
      "Proprietário/Sócio",
      "Diretor",
      "Gestor",
      "Líder",
      "Colaborador",
      "Outro",
    ],
  },
  {
    id: "area-principal",
    label: "Área principal",
    options: [
      "Comercial",
      "Operações",
      "Financeiro",
      "Pessoas/RH",
      "Marketing",
      "Administrativo",
      "Produção",
      "Tecnologia",
      "Outra",
    ],
  },
  {
    id: "tempo-na-funcao",
    label: "Tempo na função atual",
    options: ["menos de 1 ano", "1–3", "4–7", "8–15", "mais de 15 anos"],
  },
  {
    id: "lidera-pessoas",
    label: "Você lidera pessoas diretamente?",
    options: ["Sim", "Não"],
  },
  {
    id: "quantas-pessoas",
    label: "Quantas pessoas?",
    options: ["1–5", "6–10", "11–20", "21–50", "51+"],
    conditionalOn: "lidera-pessoas",
    conditionalValue: "Sim",
  },
  {
    id: "faixa-etaria",
    label: "Faixa etária",
    optional: true,
    options: [],
  },
] as const;

export type ChoiceScenario = {
  readonly kind: "choice";
  readonly order: number;
  readonly code: string;
  readonly prompt: string;
  readonly options: readonly string[];
};

export type RatingScenario = {
  readonly kind: "rating";
  readonly order: number;
  readonly code: string;
  readonly prompt: string;
  readonly instruction: string;
  readonly anchors?: string;
  readonly subitems: readonly string[];
};

export type Scenario = ChoiceScenario | RatingScenario;

/**
 * Ordem definitiva dos 48 cenários. Códigos e numeração conferem com
 * `docs/002/decisoes`: PC-001 primeiro, PC-011R último.
 */
export const SCENARIOS: readonly Scenario[] = [
  {
    kind: "choice",
    order: 1,
    code: "PC-001",
    prompt:
      "Você precisa tomar uma decisão importante, mas ainda não possui todas as informações que gostaria. O que mais se aproxima da sua reação?",
    options: [
      "Tomo a decisão com o que tenho e ajusto o caminho se necessário.",
      "Converso com algumas pessoas antes para ampliar minha percepção.",
      "Prefiro aguardar um pouco para reduzir a possibilidade de erro.",
      "Busco primeiro os dados que considero indispensáveis para estabelecer um critério.",
    ],
  },
  {
    kind: "choice",
    order: 2,
    code: "PRC-001",
    prompt:
      "Alguém precisa explicar a você um processo relativamente complexo. Qual recurso você provavelmente pediria primeiro?",
    options: [
      "“Consegue me mostrar isso em um fluxo ou exemplo visual?”",
      "“Me explica do começo ao fim?”",
      "“Podemos fazer uma vez juntos para eu acompanhar na prática?”",
    ],
  },
  {
    kind: "choice",
    order: 3,
    code: "TH-003",
    prompt: "Quando algo no trabalho realmente incomoda você:",
    options: [
      "Normalmente as pessoas percebem imediatamente.",
      "Minha reação aparece, embora eu tente controlá-la.",
      "Nem sempre fica claro para os outros o quanto aquilo me afetou.",
      "Geralmente consigo manter a reação pouco perceptível externamente.",
    ],
  },
  {
    kind: "choice",
    order: 4,
    code: "PC-009R",
    prompt:
      "Em um grupo de trabalho recém-formado, no qual ninguém se conhece bem, o que tende a acontecer com você nas primeiras interações?",
    options: [
      "Rapidamente começo a direcionar a conversa para o que precisamos realizar.",
      "Naturalmente inicio conversas e crio conexão com várias pessoas.",
      "Aproximo-me gradualmente e vou construindo confiança com algumas pessoas.",
      "Primeiro observo como as pessoas funcionam antes de me posicionar mais.",
    ],
  },
  {
    kind: "choice",
    order: 5,
    code: "TH-001",
    prompt:
      "Algo importante sai completamente diferente do planejado. Quando você percebe o problema, sua reação costuma:",
    options: [
      "aparecer quase imediatamente.",
      "surgir rapidamente, mas depois de alguns segundos para entender o que aconteceu.",
      "aparecer depois que consigo organizar melhor a situação.",
      "levar algum tempo até que eu perceba claramente como aquilo me afetou.",
    ],
  },
  {
    kind: "choice",
    order: 6,
    code: "PC-021",
    prompt:
      "Você delega uma tarefa que pode ser executada de várias maneiras. O que tende a considerar mais importante?",
    options: [
      "Que a pessoa alcance o resultado esperado.",
      "Que ela consiga envolver bem quem for necessário.",
      "Que execute de maneira sustentável e integrada à rotina.",
      "Que respeite os critérios essenciais definidos para a entrega.",
    ],
  },
  {
    kind: "rating",
    order: 7,
    code: "PRC-004R",
    prompt:
      "Depois de uma reunião com muitas informações, quanto cada recurso costuma ajudá-lo a consolidar seu entendimento?",
    instruction: "Avaliar separadamente de 1 a 5:",
    anchors: "1 = ajuda muito pouco | 5 = ajuda muito.",
    subitems: [
      "Rever os principais pontos organizados visualmente.",
      "Retomar verbalmente as principais ideias.",
      "Aplicar algum dos pontos discutidos em uma situação concreta.",
    ],
  },
  {
    kind: "choice",
    order: 8,
    code: "PC-014",
    prompt:
      "Uma pessoa da equipe demora mais do que você esperava para compreender uma orientação. O que tende a acontecer?",
    options: [
      "Vou rapidamente ao ponto e tento acelerar o entendimento.",
      "Mudo a forma de explicar e tento manter a pessoa engajada.",
      "Dou espaço e acompanho até perceber que ela compreendeu.",
      "Procuro identificar exatamente onde está a dúvida.",
    ],
  },
  {
    kind: "choice",
    order: 9,
    code: "PC-007",
    prompt:
      "Seu gestor entrega um objetivo importante, mas deixa a forma de execução em aberto. O que tende a acontecer?",
    options: [
      "Gosto da liberdade e começo a definir meu próprio caminho.",
      "Procuro trocar ideias com outras pessoas antes de estruturar a execução.",
      "Busco entender como normalmente aquilo é realizado antes de alterar a forma.",
      "Defino critérios e etapas antes de começar.",
    ],
  },
  {
    kind: "choice",
    order: 10,
    code: "PRC-003",
    prompt:
      "Você está avaliando uma nova ferramenta para a empresa. Depois de entender a proposta básica, o que mais ajuda você a formar uma opinião?",
    options: [
      "Ver claramente telas, recursos e funcionamento.",
      "Conversar com alguém que consiga explicar as possibilidades e limitações.",
      "Testar a ferramenta em uma situação real.",
    ],
  },
  {
    kind: "choice",
    order: 11,
    code: "TH-010",
    prompt: "Depois de cometer um erro profissional que considera importante:",
    options: [
      "Corrijo e normalmente deixo o episódio para trás rapidamente.",
      "Penso nele por algum tempo e depois sigo.",
      "Volto mentalmente ao episódio várias vezes.",
      "Posso continuar refletindo sobre aquilo durante bastante tempo.",
    ],
  },
  {
    kind: "choice",
    order: 12,
    code: "PC-035",
    prompt:
      "Em uma reunião com várias pessoas sobre um assunto que você conhece bem, o que tende a acontecer?",
    options: [
      "Procuro direcionar a conversa para aquilo que precisa ser decidido.",
      "Costumo verbalizar minhas ideias com espontaneidade e participar ativamente da conversa.",
      "Participo quando considero necessário, sem buscar ocupar muito espaço.",
      "Prefiro me posicionar quando consigo organizar suficientemente o que quero apresentar.",
    ],
  },
  {
    kind: "choice",
    order: 13,
    code: "TH-006",
    prompt:
      "Quando alguém questiona inesperadamente uma decisão importante sua:",
    options: [
      "Sei quase imediatamente o que quero responder.",
      "Minha reação surge rápido, embora eu organize um pouco a resposta.",
      "Prefiro alguns instantes para formar minha posição.",
      "Frequentemente compreendo melhor minha reação depois da situação.",
    ],
  },
  {
    kind: "choice",
    order: 14,
    code: "PC-018",
    prompt:
      "Você precisa dar um feedback difícil a alguém com quem possui uma boa relação.",
    options: [
      "Vou diretamente ao ponto que precisa mudar.",
      "Procuro conduzir a conversa de forma aberta e envolvente.",
      "Tenho cuidado especial para que a correção não prejudique a relação.",
      "Estruturo exemplos concretos para deixar claro o fundamento do feedback.",
    ],
  },
  {
    kind: "choice",
    order: 15,
    code: "PRC-012",
    prompt: "Você recebe um equipamento ou sistema novo para utilizar.",
    options: [
      "Observo telas, demonstrações ou instruções visuais.",
      "Gosto que alguém explique como funciona.",
      "Prefiro começar a utilizar e aprender explorando.",
    ],
  },
  {
    kind: "choice",
    order: 16,
    code: "PC-019",
    prompt:
      "Duas alternativas parecem igualmente promissoras e a decisão é relevante.",
    options: [
      "Escolho a que oferece maior possibilidade de avanço.",
      "Converso com pessoas em quem confio para ampliar minha leitura.",
      "Prefiro aquela que traz maior segurança e continuidade.",
      "Comparo critérios e consequências antes de escolher.",
    ],
  },
  {
    kind: "choice",
    order: 17,
    code: "PC-016",
    prompt:
      "Você começa uma atividade importante que exigirá meses de acompanhamento. O que mais tende a sustentar sua execução?",
    options: [
      "Ter metas desafiadoras ao longo do caminho.",
      "Ter pessoas envolvidas e celebrar os avanços.",
      "Estabelecer um ritmo que consiga manter regularmente.",
      "Acompanhar padrões e indicadores de qualidade.",
    ],
  },
  {
    kind: "choice",
    order: 18,
    code: "PRC-005",
    prompt:
      "Você precisa compreender um procedimento que nunca executou. Qual começo parece mais natural?",
    options: [
      "Observar como ele funciona e visualizar suas etapas.",
      "Pedir que alguém explique a lógica e a sequência.",
      "Executar acompanhado e ajustar durante a prática.",
    ],
  },
  {
    kind: "choice",
    order: 19,
    code: "TH-012",
    prompt: "Quando está preocupado com algo importante no trabalho:",
    options: [
      "Normalmente as pessoas próximas percebem com facilidade.",
      "Alguns sinais aparecem, mesmo que eu não fale diretamente.",
      "Poucas pessoas costumam perceber.",
      "Geralmente mantenho a preocupação pouco visível.",
    ],
  },
  {
    kind: "choice",
    order: 20,
    code: "PC-010",
    prompt:
      "Você acredita muito em uma ideia, mas a equipe ainda não está convencida. Qual movimento tende a surgir primeiro?",
    options: [
      "Apresento com clareza por que considero que devemos avançar.",
      "Tento gerar entusiasmo e fazer as pessoas enxergarem as possibilidades.",
      "Escuto as preocupações e procuro construir adesão gradualmente.",
      "Organizo argumentos, evidências e riscos para sustentar a proposta.",
    ],
  },
  {
    kind: "choice",
    order: 21,
    code: "TH-004R",
    prompt:
      "Quando ocorre um problema profissional sério e inesperado, quanto isso tende a ocupar sua atenção naquele momento?",
    options: [
      "Ocupa grande parte da minha atenção.",
      "Ocupa bastante, embora eu continue funcionando.",
      "Percebo o impacto, mas consigo manter relativamente bem o foco.",
      "Normalmente interfere pouco no que estou fazendo.",
    ],
  },
  {
    kind: "choice",
    order: 22,
    code: "PC-028",
    prompt: "Você recebe uma tarefa importante com poucas orientações.",
    options: [
      "Começo com o que sei e esclareço dúvidas conforme avanço.",
      "Procuro alguém para conversar e compreender melhor a expectativa.",
      "Busco referências de como aquilo costuma ser feito.",
      "Prefiro esclarecer requisitos importantes antes de começar.",
    ],
  },
  {
    kind: "choice",
    order: 23,
    code: "PRC-011",
    prompt: "Você precisa apresentar uma ideia importante.",
    options: [
      "Gosto de apoiar a explicação em elementos que as pessoas possam visualizar.",
      "Concentro-me principalmente na forma como vou explicar a ideia.",
      "Procuro trazer demonstrações, experiências ou exemplos concretos.",
    ],
  },
  {
    kind: "choice",
    order: 24,
    code: "PC-012",
    prompt:
      "Uma mudança necessária encontrou resistência na equipe. Qual contribuição tende a ser mais natural para você?",
    options: [
      "Dar direção e fazer a mudança avançar.",
      "Construir energia e adesão em torno da mudança.",
      "Ajudar as pessoas a atravessarem a transição.",
      "Tornar os critérios e o novo funcionamento mais claros.",
    ],
  },
  {
    kind: "choice",
    order: 25,
    code: "PC-002",
    prompt:
      "Durante uma reunião, um colega discorda abertamente de uma decisão sua. Qual reação tende a acontecer primeiro?",
    options: [
      "Defendo minha posição diretamente e entro no mérito da discordância.",
      "Tento transformar a divergência em uma conversa mais leve e aberta.",
      "Procuro evitar que a discussão prejudique a relação entre as pessoas.",
      "Peço que os argumentos sejam apresentados objetivamente antes de continuar.",
    ],
  },
  {
    kind: "rating",
    order: 26,
    code: "PRC-006R",
    prompt:
      "Ao compreender um projeto novo com várias etapas, quanto cada recurso costuma ajudá-lo a formar uma visão do conjunto?",
    instruction: "Avaliar de 1 a 5:",
    subitems: [
      "Ver um quadro mostrando etapas e conexões.",
      "Ouvir uma explicação sequencial do projeto.",
      "Percorrer um exemplo concreto do projeto acontecendo do início ao fim.",
    ],
  },
  {
    kind: "choice",
    order: 27,
    code: "TH-007",
    prompt: "Quando recebe uma notícia profissional muito positiva:",
    options: [
      "Minha reação surge imediatamente.",
      "Reajo rapidamente depois de compreender a notícia.",
      "A reação cresce conforme assimilo o que aconteceu.",
      "Normalmente levo algum tempo para sentir plenamente o impacto.",
    ],
  },
  {
    kind: "choice",
    order: 28,
    code: "PC-020R",
    prompt:
      "Uma entrega atende ao objetivo principal, mas alguns detalhes poderiam ser aprimorados. O prazo combinado termina hoje. O que tende a pesar mais na sua decisão?",
    options: [
      "O objetivo principal já foi atingido; prefiro concluir e avançar.",
      "Como a entrega será percebida por quem irá recebê-la.",
      "Preservar o compromisso assumido e evitar alterar o fluxo.",
      "A relevância dos detalhes para o padrão definido para a entrega.",
    ],
  },
  {
    kind: "choice",
    order: 29,
    code: "TH-002",
    prompt:
      "Depois de uma conversa profissional bastante difícil, quando o assunto termina:",
    options: [
      "Normalmente consigo deixá-lo para trás rapidamente.",
      "Ainda penso um pouco sobre ele, mas logo sigo adiante.",
      "Costumo revisitar mentalmente alguns pontos durante algum tempo.",
      "A situação pode continuar repercutindo internamente por bastante tempo.",
    ],
  },
  {
    kind: "choice",
    order: 30,
    code: "PC-023",
    prompt:
      "Surge uma oportunidade profissional com potencial elevado, mas com algumas informações ainda incertas.",
    options: [
      "Se o potencial justificar, avanço e administro os riscos.",
      "Converso com pessoas e procuro perceber o nível de confiança em torno da oportunidade.",
      "Prefiro avançar progressivamente.",
      "Procuro reduzir as principais incertezas antes de assumir o compromisso.",
    ],
  },
  {
    kind: "choice",
    order: 31,
    code: "PRC-002",
    prompt:
      "Você precisa explicar para sua equipe como diferentes etapas de um projeto se conectam. O que tende a fazer?",
    options: [
      "Montar algum esquema para mostrar a relação entre as etapas.",
      "Explicar verbalmente a sequência e abrir para perguntas.",
      "Usar um caso real e percorrer com a equipe o que acontece em cada etapa.",
    ],
  },
  {
    kind: "choice",
    order: 32,
    code: "PC-033",
    prompt:
      "Uma atividade importante é repetitiva e seus resultados aparecem somente depois de vários meses.",
    options: [
      "Crio metas intermediárias para manter sensação de avanço.",
      "Procuro tornar a rotina mais estimulante junto às pessoas.",
      "Consigo manter um ritmo regular mesmo sem resultados imediatos.",
      "Acompanho indicadores para verificar se a execução continua correta.",
    ],
  },
  {
    kind: "choice",
    order: 33,
    code: "PC-027",
    prompt:
      "Você percebe que alguém está acompanhando muito de perto uma responsabilidade que foi delegada a você.",
    options: [
      "Tendo a querer mais espaço para conduzir sozinho.",
      "Procuro conversar para alinhar melhor nossa forma de trabalhar.",
      "Não me incomoda se isso ajudar a manter o trabalho fluindo.",
      "Quero entender exatamente o que está sendo acompanhado e por quê.",
    ],
  },
  {
    kind: "rating",
    order: 34,
    code: "PRC-014I",
    prompt:
      "Ao comparar duas propostas comerciais relativamente complexas, quanto cada recurso costuma facilitar sua análise?",
    instruction: "Avaliar de 1 a 5:",
    subitems: [
      "Ver os principais elementos organizados em um quadro comparativo.",
      "Ouvir uma explicação clara das diferenças.",
      "Ver exemplos concretos ou uma simulação de como cada opção funcionaria na prática.",
    ],
  },
  {
    kind: "choice",
    order: 35,
    code: "TH-013",
    prompt: "Quando está muito satisfeito com alguma coisa:",
    options: [
      "Isso costuma ficar evidente rapidamente.",
      "Demonstro, embora sem grande intensidade.",
      "Minha satisfação aparece de maneira mais discreta.",
      "Posso estar muito satisfeito sem que os outros percebam claramente.",
    ],
  },
  {
    kind: "choice",
    order: 36,
    code: "PC-036",
    prompt:
      "Uma entrega importante será utilizada como referência para outros trabalhos da empresa. O que tende a ganhar sua atenção primeiro?",
    options: [
      "Garantir que cumpra o objetivo e avance dentro do necessário.",
      "Considerar como a entrega será percebida pelas pessoas envolvidas.",
      "Garantir que a forma de execução possa ser sustentada pela equipe.",
      "Assegurar que a entrega alcance um padrão de qualidade consistente e sem falhas relevantes.",
    ],
  },
  {
    kind: "choice",
    order: 37,
    code: "TH-008R",
    prompt:
      "Durante uma situação de pressão profissional que você considera importante, quanto sua reação tende a alterar seu ritmo naquele momento?",
    options: [
      "Altera claramente meu ritmo.",
      "Produz alguma alteração perceptível.",
      "Altera pouco meu ritmo.",
      "Meu ritmo tende a permanecer praticamente igual.",
    ],
  },
  {
    kind: "choice",
    order: 38,
    code: "PC-015",
    prompt:
      "Duas pessoas importantes da equipe entram em desacordo e ambas procuram você. Qual movimento parece mais natural?",
    options: [
      "Levar a conversa para uma decisão.",
      "Facilitar o diálogo e recuperar a energia entre elas.",
      "Buscar um caminho que preserve a cooperação.",
      "Separar fatos, interpretações e responsabilidades antes de avançar.",
    ],
  },
  {
    kind: "choice",
    order: 39,
    code: "PRC-009",
    prompt:
      "Você recebe um feedback sobre algo que precisa mudar. O que tende a tornar a orientação mais clara?",
    options: [
      "Enxergar exemplos ou comparações do que precisa mudar.",
      "Conversar detalhadamente sobre a situação.",
      "Experimentar uma forma diferente de fazer e perceber o resultado.",
    ],
  },
  {
    kind: "choice",
    order: 40,
    code: "PC-008",
    prompt:
      "Um projeto está atrasado e o prazo final se aproxima. Qual tende a ser sua prioridade?",
    options: [
      "Remover rapidamente o que estiver impedindo a entrega.",
      "Mobilizar as pessoas necessárias para recuperar o ritmo.",
      "Reorganizar a execução para que a equipe consiga sustentar o novo ritmo.",
      "Identificar precisamente onde ocorreu o desvio antes de alterar o plano.",
    ],
  },
  {
    kind: "choice",
    order: 41,
    code: "PC-017",
    prompt:
      "Um projeto que estava organizado muda de prioridade inesperadamente. Sua primeira tendência é:",
    options: [
      "Redirecionar rapidamente a energia para a nova prioridade.",
      "Conversar com as pessoas envolvidas e reorganizar o movimento.",
      "Precisar compreender como a mudança afetará compromissos e rotina.",
      "Revisar informações, dependências e consequências antes de reorganizar.",
    ],
  },
  {
    kind: "rating",
    order: 42,
    code: "PRC-010I",
    prompt:
      "Diante de um problema com muitas informações, quanto cada recurso costuma ajudá-lo a organizar o raciocínio?",
    instruction: "Avaliar de 1 a 5:",
    subitems: [
      "Colocar as informações diante de mim de maneira visualmente estruturada.",
      "Desenvolver o raciocínio por meio de uma explicação ou conversa.",
      "Trabalhar com um caso concreto para compreender as partes do problema.",
    ],
  },
  {
    kind: "choice",
    order: 43,
    code: "TH-015",
    prompt: "Depois de um conflito intenso que foi resolvido:",
    options: [
      "Resolvido o assunto, minha reação tende a diminuir rapidamente.",
      "Preciso de algum tempo, mas consigo retomar normalmente.",
      "Ainda processo internamente partes da situação.",
      "Mesmo resolvido, posso sentir seus efeitos por bastante tempo.",
    ],
  },
  {
    kind: "choice",
    order: 44,
    code: "PC-029",
    prompt:
      "Em uma discussão de equipe, você percebe que todos estão evitando falar sobre um problema evidente. O que tende a fazer?",
    options: [
      "Coloco o problema diretamente na conversa.",
      "Tento criar um ambiente em que as pessoas se sintam confortáveis para falar.",
      "Observo um pouco mais antes de expor algo que possa gerar tensão.",
      "Procuro primeiro separar o que é fato daquilo que é percepção.",
    ],
  },
  {
    kind: "choice",
    order: 45,
    code: "TH-009R",
    prompt:
      "Quando recebe um reconhecimento profissional muito importante, até que ponto isso tende a ocupar sua atenção naquele momento?",
    options: [
      "Produz um impacto muito forte e ocupa grande parte da minha atenção.",
      "O impacto é claro, embora eu consiga continuar normalmente.",
      "Percebo a satisfação, mas meu ritmo muda pouco.",
      "Minha atenção e meu ritmo quase não se alteram.",
    ],
  },
  {
    kind: "choice",
    order: 46,
    code: "PC-005",
    prompt:
      "Você recebe uma responsabilidade nova de seu gestor. Qual condição mais ajuda você a começar bem?",
    options: [
      "Saber exatamente qual resultado ele espera e ter liberdade para chegar lá.",
      "Poder conversar sobre a ideia e trocar percepções antes de começar.",
      "Entender como a tarefa se encaixa na rotina e com quem vou contar.",
      "Ter critérios, informações e padrões suficientemente claros.",
    ],
  },
  {
    kind: "choice",
    order: 47,
    code: "PRC-015",
    prompt:
      "Você precisa entender uma mudança importante em um processo da empresa. Qual recurso mais gostaria de receber?",
    options: [
      "O fluxo anterior e o novo apresentados visualmente.",
      "Uma explicação das mudanças e seus motivos.",
      "Uma simulação prática de como o novo processo funcionará.",
    ],
  },
  {
    kind: "choice",
    order: 48,
    code: "PC-011R",
    prompt:
      "Surge uma ideia que você considera promissora para a empresa. Antes de existir qualquer plano formal, o que tende a acontecer?",
    options: [
      "Começo a pensar em como transformá-la rapidamente em ação.",
      "Sinto vontade de conversar sobre ela e envolver outras pessoas.",
      "Prefiro deixá-la amadurecer antes de movimentar o grupo.",
      "Começo a questionar premissas e verificar se a ideia realmente se sustenta.",
    ],
  },
];

/** 56 respostas pontuáveis = 44 escolhas + 4 telas com 3 avaliações. */
export const SCORED_RESPONSE_TOTAL = SCENARIOS.reduce(
  (total, scenario) =>
    total + (scenario.kind === "rating" ? scenario.subitems.length : 1),
  0,
);

/** Transição após a questão 48 (07:1440-1454). */
export const POST_SCENARIO_TITLE = "MAIS ALGUNS MINUTOS" as const;
export const POST_SCENARIO_TEXT = [
  "Seu Mapa de Governo Humano™ foi construído.",
  "Antes de encerrar, gostaríamos de entender como você percebe alguns aspectos do seu próprio funcionamento profissional.",
  "As respostas a seguir não alteram suas respostas anteriores e serão utilizadas para aperfeiçoar o instrumento.",
] as const;

/** Escala 1–5 dos oito itens auxiliares (07:1456-1469). */
export const SELF_SCALE_ANCHORS =
  "1 = Discordo totalmente | 5 = Concordo totalmente" as const;
export const SELF_ITEMS = [
  {
    code: "SELF-01",
    statement:
      "Costumo conseguir tomar decisões mesmo quando ainda existem informações faltando.",
  },
  {
    code: "SELF-02",
    statement:
      "Prefiro ter espaço para definir como executar uma responsabilidade.",
  },
  {
    code: "SELF-03",
    statement:
      "Critérios claros são importantes para eu me sentir seguro sobre uma entrega.",
  },
  {
    code: "SELF-04",
    statement:
      "As pessoas geralmente percebem quando algo no trabalho me afeta.",
  },
  {
    code: "SELF-05",
    statement:
      "Depois de situações profissionais difíceis, o assunto pode continuar presente em meus pensamentos por algum tempo.",
  },
  {
    code: "SELF-06",
    statement:
      "Organizar informações visualmente costuma me ajudar a compreendê-las.",
  },
  {
    code: "SELF-07",
    statement:
      "Conversar sobre um assunto costuma me ajudar a organizar melhor meu entendimento.",
  },
  {
    code: "SELF-08",
    statement:
      "Ver ou experimentar uma aplicação concreta costuma me ajudar a compreender melhor uma ideia.",
  },
] as const;

/** Feedback metodológico (07:1475-1487). */
export const FEEDBACK_ITEMS = [
  {
    id: "dificuldade-escolha",
    question:
      "Houve alguma situação em que você teve dificuldade para escolher uma resposta?",
    options: ["Sim", "Não"],
    detailLabel: "Se sim, qual?",
  },
  {
    id: "alternativa-ausente",
    question:
      "Houve alguma pergunta em que nenhuma alternativa representou razoavelmente o que você faria?",
    options: ["Sim", "Não"],
    detailLabel: "Qual?",
  },
  {
    id: "pergunta-confusa",
    question: "Alguma pergunta pareceu confusa ou difícil de entender?",
    options: ["Sim", "Não"],
    detailLabel: "Qual?",
  },
  {
    id: "desejabilidade",
    question:
      "Durante o questionário, em algum momento você percebeu que estava tentando escolher a resposta que parecia “melhor” profissionalmente?",
    options: ["Nunca", "Algumas vezes", "Várias vezes"],
  },
] as const;

/** Tela final (07:1489-1501). */
export const FINAL_TITLE = "Obrigado." as const;
export const FINAL_TEXT = [
  "Você concluiu o MGH™ Piloto 1.0.",
  "Esta é uma versão experimental do instrumento. Os dados desta etapa serão utilizados para analisar clareza, funcionamento dos itens, padrões de resposta e qualidade da metodologia.",
  "O resultado experimental, quando disponibilizado, deve ser tratado como uma hipótese estruturada de observação — não como diagnóstico, avaliação de competência ou definição da pessoa.",
] as const;
export const FINAL_BUTTON = "FINALIZAR" as const;
