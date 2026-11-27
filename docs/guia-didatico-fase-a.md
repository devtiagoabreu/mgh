---
name: guia-didatico-fase-a
description: Guia didático da Fase A do MGH™ — cronograma, estrutura e ferramentas em linguagem simples
author: Alisson Campos
developer: Tiago de Abreu
source: docs/historico.md
version: 0.1
status: DERIVED_EXPLANATORY
verified: 2026-11-26
classification: CONFIDENTIAL
canonical: false
derived_from:
  - docs/historico.md
  - docs/plano-de-desenvolvimento.md
  - docs/horas-de-desenvolvimento.md
  - docs/evidencias/integracao-final.md
  - docs/governanca/01-gate-de-crise.md
  - docs/governanca/02-claims-e-evidencia.md
  - docs/governanca/03-consentimento-e-privacidade.md
  - docs/002/00-mapa-de-fatiamento.md
---

# MGH™ — Guia Didático da Fase A

> Escrito por **Alisson Campos**, mentor do projeto, para quem precisa
> entender o projeto sem precisar saber programar.
> Desenvolvido por **Tiago de Abreu**.
>
> Procedência de Alisson Campos: `https://alissoncampos.com/`
> (consultado em 26/11/2026) — mentor de gestores, fundador da M2M
> (Mentoria para Gestores) e criador do GTalk.
>
> Data de referência: **26 de novembro de 2026**.

---

## 1. Antes de começar: o que é este guia

Este arquivo é uma **tradução para linguagem simples** dos documentos
técnicos do projeto. Ele responde a três perguntas:

1. O que estamos construindo?
2. Onde paramos e o que já foi feito?
3. Que estrutura e ferramentas estamos usando?

**O que ele NÃO faz:**

- não cria regra metodológica nova;
- não autoriza publicar texto de cenário, opção, SELF ou consentimento;
- não substitui os documentos oficiais;
- não "resolve" divergência entre fontes.

**Regra de precedência:** em caso de conflito, vale o anexo canônico
(`ANX-*`), depois o documento narrativo e, por último, o histórico de
conversa. Conflito entre fontes se chama `SPECIFICATION CONFLICT` e é
registrado — nunca é decidido em silêncio por quem está escrevendo.

Analogia: pense neste guia como o **folder explicativo de um processo**,
não como o processo em si. O processo está nos anexos canônicos.

---

## 2. O projeto em poucas palavras

**MGH** significa **Mapa de Governo Humano™** — grafia canônica conforme
`docs/002`. É uma metodologia experimental de pesquisa, aplicada em um
piloto chamado **Fase A — Pilot Core**, primeiro e único escopo autorizado
neste momento.

Na prática, é um instrumento com **48 cenários** e **56 respostas
pontuáveis**, aplicado em ordem fixa, com regras muito rigorosas para que
o resultado **não vire rótulo de pessoa**.

### O que o MGH NÃO é

| Não é | Por que isso importa |
|---|---|
| Terapia ou diagnóstico | Ninguém aqui faz laudo, indica remédio ou trata pessoa |
| Laudo psicológico | Não há conclusão clínica sobre ninguém |
| Avaliação de competência | Não mede "inteligência", "maturidade" ou "caráter" |
| Decisão de RH | Não serve para contratar, promover, demitir ou punir |
| Relatório ao participante | A Onda 0 termina com confirmação neutra, sem perfil |

### Analogia que ajuda

É como um **questionário de pesquisa com lacre**: a pessoa responde, o
conteúdo bruto fica guardado e intocável, o cálculo é feito depois por uma
regra fixa — e mesmo assim ninguém pode transformar aquilo em "o tipo de
pessoa que ela é".

As perguntas e as respostas **não estão disponíveis em texto final**.
O banco de itens (`BANK-0.2`) continua em estado `DRAFT`. No protótipo,
usamos apenas `[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]`.

---

## 3. Quem é quem

| Papel | Na prática | Nomes / estado |
|---|---|---|
| `Alisson Campos` | **Mentor do projeto e autor deste guia.** Fundador da M2M (Mentoria para Gestores) e criador do GTalk, conforme `https://alissoncampos.com/`. É também o primeiro `MENTOR_OWNER` | — |
| `Tiago de Abreu` | **Desenvolvedor do projeto.** Não é o mentor nem o autor deste guia | — |
| `MENTOR_OWNER` | Dono do workspace (o "espaço" do mentor) | Alisson Campos é o primeiro |
| `MENTEE` | Mentorado; participante do piloto | Participantes reais **bloqueados** até liberação legal |
| `PLATFORM_ADMIN` | Administrador da plataforma | Papel previsto |
| `MENTOR_ASSISTANT` | Assistente do mentor | `DEFERIDO` — não implementado |

**Regra humana central:** toda decisão que afeta uma pessoa ou encerra uma
etapa carrega **nome de quem decidiu, data e justificativa escrita**.

**Regra da IA:** a inteligência artificial está **fora da Fase A**. Ela não
pontua, não interpreta, não classifica risco, não resume campo livre e não
toma decisão.

---

## 4. Cronograma de desenvolvimento

Esta seção tem três visões do mesmo caminho: a sequência de eventos, as
etapas de trabalho (P0 a P7) e os commits no Git.

### 4.1 A sequência de eventos — 25/11/2026

Tudo abaixo aconteceu em **25 de novembro de 2026**, nesta ordem:

| # | O que aconteceu | Em palavras simples |
|---|---|---|
| 1 | `docs/001` inventariado | Os 11 arquivos originais foram localizados e preservados |
| 2 | 11 fontes convertidas em 47 fatimentos | Os arquivos originais foram "fatiados" em pedaços menores e organizados em `docs/002`, com validação de que nada se perdeu |
| 3 | `context.md`, mapa mestre e `llms.txt` criados | Criamos a porta de entrada e o índice do contexto canônico; resumos duplicados foram removidos |
| 4 | Decisão `PROD-TEN-001` registrada | Definimos que o sistema é multitenant: cada mentor tem seu espaço, separado dos demais |
| 5 | Commit `de13285` enviado; remoto virado SSH | O contexto canônico entrou na `main` e o GitHub passou a usar autenticação SSH |
| 6 | `exemplo_projeto_mgh.txt` analisado | Classificado como despejo de conversa de IA: serviu só como checklist, nunca como regra. Arquivo descartado em 26/11 com autorização |
| 7 | Plano consolidado por 3 frentes | Arquitetura, design/acessibilidade e psicologia/governança revisaram o plano; ele foi aprovado |
| 8 | Branch de trabalho criada | `feature/mgh-phase-a-foundation` criada; `.env`, `.env.example` e o plano entraram |
| 9 | P0 concluído | Versões, papéis e regras travados; 11 testes verdes |
| 10 | P5 concluído | Motor de cálculo determinístico, 9 casos de ouro, 14 testes |
| 11 | Governança documentada | Gate de crise, níveis de evidência e checklist de consentimento; divergência `REPEAT_*` registrada |
| 12 | P6 estrutural concluído | Tokens de cor, componentes e acessibilidade projetada; veredito de design ficou `rework` |
| 13 | P1/P2 concluídos | 17 modelos com tenant, RLS `FORCE`, banco somente-acrescentar, 23 testes de dados |
| 14 | Integração final verde | Todos os comandos passaram: 48 testes no total, build OK, nenhuma vulnerabilidade alta |

### 4.2 As etapas de trabalho — P0 a P7

Cada etapa tem uma **trava** (gate): se o requisito não estiver satisfeito,
a etapa seguinte não começa.

| Etapa | Nome simples | O que é | Situação em 26/11 |
|---|---|---|---|
| **P0** | Contrato e configuração | Fixar versões, papéis e a origem do `tenantId` | **Concluída** (`47f2bbf`) |
| **P1** | Identidade e permissões | Quem pode entrar e o que cada papel pode ver, com travas no banco | **Concluída estaticamente** (`57611d3`); falta teste em banco real |
| **P2** | Dados e acesso | Plantas do banco, resposta bruta intocável, recomputação do score | **Concluída estaticamente** (`57611d3`); falta teste em banco real |
| **P3** | Registro da sequência | Anotar contagens e ordem fixa, sem escrever nenhum texto do instrumento | Contagens em `lib/config/versions.ts`; por listagem de `docs/evidencias/`, não há arquivo de evidência próprio desta etapa |
| **P4** | Respostas e fechamento | Salvar respostas e fechar a run uma vez só, sem duplicar | Regras descritas no plano; por listagem de `docs/evidencias/`, não há arquivo de evidência próprio desta etapa |
| **P5** | Motor de score | Cálculo puro: mesmos dados + mesmas versões = mesmo resultado sempre | **Concluído** (`e4748c4`) |
| **P6** | Tela do participante | Consentimento, 48 cenários, SELF, feedback e confirmação neutra | **Estrutura concluída** (`51e1424`); auditoria visual pendente; veredito `rework` |
| **P7** | Painel e publicação | Números agregados, governança, deploy e restore testado | **Não iniciado**; depende dos bloqueios da seção 6 |

**As travas, resumidamente:** `G0` versão/papel/tenant claros · `G1`
permissões e auditoria no servidor · `G2` sem dado pessoal em tabela
analítica · `G3` nenhum texto inventado publicado · `G4` fechamento sem
duplicidade · `G5` motor determinístico · `G6` bloqueios legais fechados
antes de participante real · `G7` restore testado e RPO/RTO decididos.

### 4.3 Os commits — o "carimbo" de cada entrega

| Commit | Onde | Entrega |
|---|---|---|
| `de13285` | `main` | Contexto canônico `002` + decisão multitenant |
| `47f2bbf` | branch | Fundação/P0: versões, gates, papéis, contrato de tenant, CI |
| `e4748c4` | branch | P5: Score Engine determinístico e golden cases |
| `f3a2ef4` | branch | Governança humana, plano/evolução e README |
| `51e1424` | branch | P6 estrutural: tokens em 3 camadas, componentes, acessibilidade projetada |
| `57611d3` | branch | P1/P2: modelo tenant-scoped, RLS `FORCE`, DAL, seed sintético |
| `3009899` | branch | Evidência final de integração |

**Situação do Git hoje:** a Fase A vive somente em `main`. As branches
`feature/mgh-phase-a-foundation` e `docs/002-contexto-canonico` foram
removidas após merge; nenhum commit foi perdido. **Nenhum PR foi aberto.**
Commits continuam sendo feitos por feature — nunca numa alteração única
gigante. Todo commit ou push é precedido pela atualização dos quatro
documentos operacionais (regra §3.7 do histórico).

### 4.4 Quanto tempo cada entrega levou

O arquivo `docs/horas-de-desenvolvimento.md` estima o esforço de cada
feature a partir das linhas versionadas. Ele não mediu tempo com
cronômetro: usou taxas declaradas (50 linhas de código por hora, 150 de
documentação e 1.500 de conversão assistida) e marcou tudo como
`ESTIMATIVA`.

Em linguagem simples: é como contar quantas páginas um redator escreveu
para calcular, de forma aproximada, quanto tempo levou. Serve para planejar, não para
cobrar nem para provar trabalho.

- Features já publicadas: **≈ 245 h estimadas**.
- Frente de modal de saída, cabeçalho e ícones, código em `d430a12`, com
  registro documental e push autorizados: **≈ 4 h 15 min estimadas**.
- Features futuras: faixas macro (P3, P4, P7, pendências legais e de
  recuperação) no próprio documento.

---

## 5. O que já foi verificado

Estes são os comandos executados na integração final, com a tradução do
que cada um faz:

| Comando | Tradução | Resultado |
|---|---|---|
| `npm audit --audit-level=high` | Procura falhas de segurança conhecidas nas dependências | 0 vulnerabilidades |
| `npm run prisma:validate` | Confere se o "projeto do banco" está válido | Válido |
| `npm run prisma:generate` | Gera o código que conversa com o banco | Prisma Client v7.10.1 gerado |
| `npm run lint` | Revê estilo e erros comuns de código | Limpo |
| `npm run typecheck` | Confere tipos (evita erro de "tipo errado") | Limpo |
| `npm test` | Roda os testes automáticos | 11 arquivos, 57 testes passaram |
| `npm run build` | Monta a versão de produção | Compilou; `/` dinâmica, `/login` e `/_not-found` estáticas |
| axe + Lighthouse | Verifica acessibilidade renderizada | 48 estados sem violações; score `1` no mobile e no desktop |
| `git diff --check` | Procura espaços/quebras de linha problemáticos | Limpo |

Na frente mais recente, o modal do `Sair` passou a oferecer `Encerrar sessão`
e `Reiniciar sequência MGH`. Reiniciar volta ao consentimento sem sair do
login; encerrar leva ao login. Os botões “i” e o controle de tema são ícones
de 32×32 px, e o “i” de consentimento fica dentro do cartão, ao lado do
título. Tudo isso foi reauditado nos dois temas e nos dois tamanhos de tela,
sem alterar texto canônico nem regra de score.

Os testes automáticos cobrem configuração, autorização, dados/banco, motor
de score, instrumento canônico e login da demonstração. Os 9 casos de ouro
do motor cobrem,
entre outros: aplicação completa (56/56), incompleta (55/56), opção
desconhecida, versão divergente, regra ausente, SELF/RG injetados, DR
reordenado, recomputação idêntica e nova versão de scoring.

**Importante:** "verde" aqui significa que o código passou. Não significa
que o produto pode ser publicado — faltam as decisões da seção 6. O mesmo
vale para a acessibilidade automatizada: os gates estão verdes, mas o
veredito de design continua `rework — escopo incompleto` até leitor de tela
real e crítica visual humana.

---

## 6. O que ainda falta — os bloqueios

| ID | Em palavras simples | Quem decide |
|---|---|---|
| `ANX-003` / `BANK-0.2` | O xlsx ainda marca `scenario_text_canonical = SOURCE_REQUIRED`. O documento mestre traz os 48 enunciados/opções e o registro `ANX-003` traz códigos, ordem e 56 respostas; reconciliação formal pendente | MGH |
| `REQ-INST-012` | Os textos literais já aparecem na demonstração protegida por login. Publicação/E2E formais ainda dependem da autoridade MGH | MGH |
| `OPEN-INST-001` | Rótulos e texto finais de `SELF-01..08` pendentes | MGH |
| `OPEN-LEGAL-001` | Consentimento jurídico final pendente — bloqueia participante real | Legal/Privacy |
| `OPEN-LEGAL-002` | Privacy Notice final pendente | Legal/Privacy |
| `OPEN-TEN-001` | Mentor ver respostas individuais: decisão pendente. Default é somente agregados | MGH + Legal |
| `OPEN-TECH-006` | RPO/RTO (quanto tempo podemos ficar fora e quanto dado perdemos) e restore testado pendentes | Tecnologia |
| `SPECIFICATION CONFLICT` | Duas versões do desfecho de Gate Review: `REPEAT_WAVE` e `REPEAT_O0_WAVE`. As duas ficam registradas; nenhuma virou regra | MGH |
| RLS em banco real | A migration já foi aplicada no Neon do branch local. Falta validação runtime com seed sintético de dois tenants e branches `qa/*`/`preview/*` | Tecnologia |
| Acessibilidade renderizada | axe/Lighthouse, 200/400%, forced colors, 1280×800 e 390×844 já foram auditados. Faltam leitor de tela real e crítica visual humana | Design/Acessibilidade |

**Consequência direta:** piloto com participantes reais está **bloqueado**.
A migration local já foi aplicada e o build no Vercel está tecnicamente
pronto, mas a liberação depende de (1) variáveis de ambiente cadastradas
manualmente, (2) branches sintéticos com seed e (3) decisão explícita da
autoridade MGH.

O veredito do P6 segue **`rework — escopo incompleto`** até a auditoria
renderizada. Isso é pendência de evidência, não necessariamente erro de
código identificado.

---

## 7. A estrutura do projeto — o "mapa da casa"

```
mgh/
├─ docs/
│  ├─ 001/                      acervo original — NÃO mexer
│  ├─ 002/                      contexto canônico (11 fontes / 47 fatimentos)
│  ├─ evidencias/               provas de que cada etapa passou
│  ├─ governanca/               crise, alegações, consentimento
│  ├─ historico.md              ponto de retomada da sessão
│  └─ plano-de-desenvolvimento.md   plano P0–P7
├─ app/                         o que aparece no navegador
├─ components/                  17 peças da interface
├─ styles/                      contrato dos tokens de cor/espaço
├─ lib/
│  ├─ config/                   versões e gates congelados
│  ├─ auth/                     papéis e origem do tenant
│  ├─ db/                       acesso seguro ao banco (DAL)
│  └─ engine/                   motor de cálculo puro
├─ prisma/                      plantas do banco, migração e seed sintético
├─ tests/                       verificações automáticas
├─ .env.example                 modelo das variáveis — versionado
├─ .env                         valores reais — NUNCA versionado
├─ opencode.json                carrega docs/historico.md no início da sessão
└─ package.json                 ferramentas e comandos
```

### Traduzindo cada pasta

| Pasta | Analogia | O que guarda |
|---|---|---|
| `docs/001` | Cofre | Os 11 arquivos originais. Intactos, não reescritos, não movidos |
| `docs/002` | Enciclopédia | 11 fontes convertidas e fatiadas em 47 partes, com 11 índices. É a entrada canônica |
| `docs/evidencias` | Caderno de provas | Resultado observável de cada frente: `p0`, `p1-p2`, `p5`, `p6-design`, `governanca`, `integracao-final` |
| `docs/governanca` | Manual de convivência | Gate de crise, níveis de evidência, consentimento e privacidade |
| `docs/historico.md` | Marcador de página | Estado atual, decisões, bloqueios e checklist para retomar a sessão |
| `app/` | Vitrine | `layout.tsx`, `page.tsx` e `globals.css` — a superfície que a pessoa vê |
| `components/` | Peças de LEGO | Consentimento, cenário, escolhas, escala, SELF, feedback, estados de carregamento/erro/bloqueio, diálogo, alternador de tema |
| `styles/` | Receita de cores | Contrato das três camadas de tokens; light/dark troca só os valores |
| `lib/config` | Placa fixada na parede | `versions.ts` (`MGH-P1.0`, `BANK-0.2`, `SCORE-P1.0`, `ANX-004 v0.1`, `GOLDEN-P1.0`) e `gates.ts` |
| `lib/auth` | Portaria | `roles.ts` (papéis) e `tenant.ts` (contrato do tenant, sem ler a requisição) |
| `lib/db` | Armazém com porteiro | `client`, `context`, `session`, `repositories`, `audit`, `types`, `index` — toda leitura/escrita passa pelo tenant |
| `lib/engine` | Calculadora lacrada | `score.ts`, `canonical.ts`, `errors.ts`, `types.ts`, `index.ts` — sem banco, rede, IA, relógio ou aleatoriedade |
| `prisma/` | Planta e construção | `schema.prisma` (17 modelos tenant-scoped), migration com RLS, `seed.ts` sintético e `prisma.config.ts` |
| `tests/` | Controle de qualidade | `config`, `auth`, `data`, `engine` — 48 testes no total |

### As três camadas de aparência (P6)

1. **Primitiva** — cores brutas, espaçamentos de 4 px, fontes, raios,
   sombras. É o único lugar com cor "crua".
2. **Semântica** — nomes que dizem o papel (`--mgh-color-surface`,
   `--mgh-color-text`, `--mgh-color-focus`). Claro/escuro troca só os
   valores desses nomes.
3. **Componente** — apelidos locais de cada peça (botão, cartão, campo,
   barra de progresso).

Os componentes em TSX **não contêm** cor escrita diretamente: consomem
apenas esses nomes. O contraste foi **calculado por código**: pares de
texto entre 4,65:1 e 18,01:1; bordas de controle 3,31:1 (claro) e 3,42:1
(escuro). Ainda **não foi medido no navegador**.

---

## 8. Ferramentas — o que usamos e por quê

| Ferramenta | Para que serve em palavras simples |
|---|---|
| **TypeScript** | JavaScript com "checagem de tipo": pega erro antes de rodar |
| **Next.js 16.4.6** | Estrutura da aplicação web (páginas, rotas, build) com App Router |
| **React 19.3.1** | Monta a interface em peças reutilizáveis |
| **NeonDB / PostgreSQL** | Banco de dados na nuvem, onde ficam os registros |
| **Prisma 7.10.1** | Traduz o código para falar com o banco; gera e aplica migrações |
| **Zod** | Valida entradas: "essa opção foi realmente apresentada?" |
| **Vitest** | Roda os testes automáticos |
| **ESLint** | Padroniza e revisa o código |
| **Vercel** | Onde a versão de produção seria publicada |
| **GitHub** | Versionamento, branch, histórico de commits |
| **OpenCode + skills/agents** | Assistentes com papéis específicos: arquitetura, dados, motor, design, governança |
| **Node ≥ 24** | Versão mínima do ambiente de execução |
| `overrides.effect = 3.22.1` | Ajuste que eliminou uma vulnerabilidade alta do Prisma |

### Duas conexões do banco — não trocar

- `DATABASE_URL` — **poolada** (PgBouncer). Vai na aplicação e no Vercel.
- `DIRECT_URL` — **direta**. Vai nas migrações e no seed, porque o Prisma
  Migrate precisa de estado de sessão e as regras de RLS dependem de
  `set_config('app.current_tenant_id', $1, true)`.

As duas apontam para o mesmo compute, banco e role, ambas com
`sslmode=require`. O botão **Connect** do Neon só troca a string
mostrada na tela — não liga nem desliga o PgBouncer.

### Estado do `.env`

Preenchido e validado **sem exibir valores**: URLs preenchidas,
`AUTH_SECRET` preenchida, gates congelados intactos, `SENTRY_DSN` vazio,
`RPO`/`RTO` vazios até `OPEN-TECH-006`. O arquivo é ignorado pelo Git
e nunca é commitado; o modelo versionado é `.env.example`.

---

## 9. As regras de ouro da Fase A

| Regra | Em linguagem simples | Por quê |
|---|---|---|
| RAW imutável | Resposta bruta entra e nunca é apagada nem alterada | Preserva a evidência original |
| 48 cenários / 56 respostas | Contagens fixas, ordem fixa: `PC-001` primeiro, `PC-011R` último | Garante que todos responderam a mesma coisa |
| DR sem randomização | Itens DR não mudam de ordem | Evita que a ordem altere o resultado |
| SELF, feedback e RG fora do score | Não entram no cálculo | São dados de pesquisa, não nota |
| Runs versionados | Resultado é recomputável por `runId + versões` | Permite refazer o cálculo sem sobrescrever o original |
| IA fora da Fase A | Sem score, interpretação ou classificação | Decisão sobre pessoa é humana e nomeada |
| Participantes reais bloqueados | Só seed sintético até Legal/Privacy liberar | Protege quem participaria |
| Nada de texto inventado | Cenário, opção, SELF e consentimento vêm do banco canônico | O banco ainda está `DRAFT` (`SOURCE_REQUIRED`) |
| Agregados com `n ≥ 5` | Nenhum número mostra um grupo pequeno | Evita identificar alguém por subtração |
| Campo obrigatório | Todo agregado termina com "o que estes dados **não** permitem dizer" | Impede conclusão exagerada |
| Gate de crise | Sinal em campo livre vai para humano nomeado, nunca para o score | Segurança da pesquisa vem antes do dado |
| Sem dark patterns | Sem pré-seleção, urgência, gamificação ou progresso `/56` | A resposta precisa ser livre |

### Níveis de evidência — E1, E2, E3

| Nível | Tradução | Uso permitido |
|---|---|---|
| `E1` | "Há um sinal" | Pergunta de trabalho, hipótese fraca |
| `E2` | "Duas fontes independentes convergem" | Hipótese gerencial; é o teto externo do P1.0 |
| `E3` | "Convergência forte em vários contextos" | Só pesquisa interna autorizada; nunca relatório externo |

A linguagem **nunca aumenta o nível**. Escrever "com certeza" não
transforma um sinal em fato. Termos proibidos incluem inteligência,
competência, maturidade, caráter, diagnóstico, resiliência, estabilidade,
compatibilidade percentual, `job fit`, `hiring` e `promotion`.

---

## 10. Dicionário para pessoas leigas

| Termo | Tradução |
|---|---|
| **Tenant** | O "espaço" de um mentor/programa. Cada um vê só o seu |
| **RLS** | "Segurança por linha": o banco esconde linhas de outros espaços mesmo se alguém tentar ler |
| **RLS `FORCE`** | Vale até para o dono do banco — ninguém escapa da regra por padrão |
| **DAL** | O "porteiro" do banco: todo acesso passa por ele com o tenant correto |
| **JWT / claim** | Um crachá digital verificado que diz quem é a pessoa e de qual espaço ela é |
| **Falha fechada** | Se o crachá estiver ausente, o acesso é negado — nunca liberado por padrão |
| **Seed sintético** | Dados de teste inventados, com `SYNTHETIC_` e placeholders. Nunca dado real |
| **Placeholder** | Texto provisório: `[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]` |
| **Append-only** | Só acrescenta; nunca apaga nem sobrescreve |
| **Golden case** | Um exemplo de teste com entrada e saída esperadas — o "gabarito" |
| **Determinístico** | Sempre o mesmo resultado para os mesmos dados e versões |
| **Hash** | Uma "impressão digital" curta do conteúdo; muda se qualquer coisa mudar |
| **Agregado** | Número de um grupo, não de uma pessoa |
| **Inferência por subtração** | Descobrir um grupo pequeno subtraindo dois números maiores — por isso o mínimo `n ≥ 5` |
| **Migration** | A "obra" que aplica a planta do banco |
| **Pooled / direct** | Conexão compartilhada (app) versus conexão direta (migração) |
| **RPO / RTO** | Quanto dado podemos perder / quanto tempo podemos ficar fora |
| **Gate** | Uma trava: se não passar, não avança |
| **PC / PRC / DR / RG / SELF** | Nomes técnicos das partes do instrumento. Os textos literais ainda não existem |
| **`SPECIFICATION CONFLICT`** | Duas fontes oficiais discordam; as duas ficam registradas até decisão da autoridade |

---

## 11. Como retomar o trabalho

**Estado em 26/11/2026:** `main` contém a Fase A; branches de feature
foram removidas após o merge. O dump `docs/exemplo_projeto_mgh.txt` foi
**descartado** nesta data, com autorização do usuário; ele não existe mais.

Checklist de retomada:

1. Leia `docs/historico.md` (já carregado automaticamente no OpenCode).
2. Confirme `git status --short --branch`.
3. Não toque `docs/001`, `docs/002/**` nem `.env` sem autorização
   explícita.
4. **Nunca invente nada; na dúvida, pare e pergunte** (regra §3.6 do
   histórico). Em especial: texto canônico, IDs de opção, SELF,
   consentimento, versões e resultados de teste.
5. Não faça commit de segredo nem de arquivo ignorado.
6. Antes de dizer "pronto", reexecute a verificação da seção 5.
7. Commits por feature; push na `main` só com autorização explícita.
8. Antes de **todo commit e todo push**, atualize os quatro documentos:
   histórico, guia, plano e horas de desenvolvimento (regra §3.7).

---

## 12. Nota final

Este guia é **derivado e explicativo**. Se qualquer frase aqui parecer
contradizer um anexo canônico (`ANX-*`), o plano aprovado ou
`docs/002`, **o documento canônico vence**. Divergência é registrada como
`SPECIFICATION CONFLICT` — nunca resolvida por conveniência.

O próximo passo concreto é escolher uma frente entre: reconciliação formal
do banco canônico (`ANX-003`/`BANK-0.2`), consentimento e Privacy Notice
finais, RPO/RTO com restore testado ou auditoria renderizada com leitor de
tela real e crítica visual humana. A migration local já foi aplicada e os
textos do instrumento já foram recuperados na demonstração; as divergências
registradas continuam reservadas à autoridade MGH.

— **Alisson Campos**
Desenvolvido por **Tiago de Abreu**.

---

## Fontes consultadas

- `docs/historico.md` — estado atual, decisões e retomada
- `docs/plano-de-desenvolvimento.md` — cronograma P0–P7, gates e evolução
- `docs/horas-de-desenvolvimento.md` — estimativas de esforço por feature
- `docs/evidencias/*.md` — evidências por frente e integração final
- `docs/governanca/01-gate-de-crise.md`
- `docs/governanca/02-claims-e-evidencia.md`
- `docs/governanca/03-consentimento-e-privacidade.md`
- `docs/002/00-mapa-de-fatiamento.md` — mapa das 11 fontes e 47 fatimentos
- `lib/config/versions.ts` — versões e contagens congeladas
- `package.json` e `.env.example` — ferramentas e variáveis
- `https://alissoncampos.com/` — procedência da autoria e da atuação como
  mentor (consultado em 26/11/2026)
