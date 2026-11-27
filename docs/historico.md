---
name: historico
description: Histórico operacional canônico do projeto MGH — decisões, execução, evidências, estado atual e retomada de sessão
source: docs/002/context.md
version: 0.1
status: ACTIVE
verified: 2026-11-27
classification: CONFIDENTIAL - METHODOLOGY IP
canonical: false
derived_from:
  - docs/002/00-mapa-de-fatiamento.md
  - docs/plano-de-desenvolvimento.md
  - docs/evidencias/integracao-final.md
---

# Histórico Operacional do MGH™

> **Este é o arquivo de retomada.** Ele é carregado automaticamente no início
> de cada sessão do OpenCode via `opencode.json → instructions`. Se, por
> qualquer motivo, ele não aparecer no contexto inicial, leia
> `docs/historico.md` antes de qualquer ação.
>
> Precedência, em caso de conflito: **anexo canônico (`ANX-*`) > documento
> narrativo > histórico de conversa (inclusive este arquivo)**. Conflito entre
> fontes vira `SPECIFICATION CONFLICT` — nunca uma escolha silenciosa.

---

## 1. Quem é o usuário e qual é o objetivo

- O usuário é o **desenvolvedor** do projeto, **não** o participante
  solicitante da metodologia MGH™. **Tiago de Abreu é somente o
  desenvolvedor.** O **mentor do projeto e autor do guia didático é
  Alisson Campos** — confirmação em `https://alissoncampos.com/`
  (consultado em 26/11/2026): mentor de gestores, fundador da M2M
  (Mentoria para Gestores) e criador do GTalk.
- Objetivo: consolidar `docs/002` como fonte canônica de contexto para IA e
  executar a **Fase A — Pilot Core**, sem alterar a metodologia.
- `docs/001` é acervo original e **permanece intacto**. Não reescrever, não
  mover, não "limpar".
- `docs/002` é o centro operacional. **Não duplicar** transcrições completas
  fora dele; usar índices, fatimentos e referências.

---

## 2. Metodologia congelada — Fase A

Regras que não podem ser flexibilizadas por implementação:

| Regra | Valor |
|---|---|
| RAW | imutável, append-only; nunca sobrescrever |
| Instrumento | 48 cenários / 56 respostas, ordem fixa |
| DR | sem randomização |
| SELF, feedback pós-teste, RG | fora do score |
| Runs | versionados; derivados recomputáveis por `runId + versões` |
| IA | **fora da Fase A** — sem scoring, interpretação ou classificação |
| Participantes reais | bloqueados até consentimento e banco canônico |

`docs/exemplo_projeto_mgh.txt` era **dump de conversa de IA**, não fonte de
regra de score nem de SQL. Serviu somente como checklist de tópicos. Foi
**descartado em 26/11/2026** com autorização explícita do usuário; não deve
ser recriado.

---

## 3. Decisões consolidadas

### 3.1 Contexto canônico

- 11 fontes originais convertidas e fatiadas em **47 partes** em
  `docs/002/fontes/`, cada fonte com `00-indice.md`.
- Removidos de `docs/002`: `historico/`, `source/`, resumos `00`–`10` e
  `00-indice-e-fontes-de-verdade.md`.
- Entrada única: `docs/002/context.md`; mapa mestre:
  `docs/002/00-mapa-de-fatiamento.md`; índice legível: `docs/002/llms.txt`.
- Validação feita: 11 fontes com `exact=True` e `coverage=True`,
  `TOTAL_PARTS=47`, `FRONTMATTER_OR_STALE_MISSING=0`, `BAD_NAMES=0`.
- Frontmatter obrigatório nas fontes: `source`, `version`, `status`,
  `verified`. Nomes em kebab-case. Classificação `CONFIDENTIAL` ou
  `CONFIDENTIAL - METHODOLOGY IP`.

### 3.2 PROD-TEN-001 — SaaS multitenant

Registrado em `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md`.

- Tenant = **workspace do mentor/programa**.
- Alisson Campos = mentor do projeto, autor do guia didático e primeiro
  `MENTOR_OWNER`; mentorados = `MENTEE`.
- Isolamento: **Shared DB + shared schema + `tenant_id`**, RLS `FORCE`.
- Tenant resolvido **somente** por sessão/JWT verificado; DAL sempre com
  `where: { tenantId }`.
- Papéis da Fase A: `PLATFORM_ADMIN`, `MENTOR_OWNER`, `MENTEE`.
  `MENTOR_ASSISTANT = DEFERIDO`.
- Default técnico: mentor vê **somente agregados**; acesso a respostas
  individuais depende de MGH + Legal (`OPEN-TEN-001`).
- Versão atual: **0.2** (26/11/2026). A alteração foi apenas factual
  (autoria do guia e procedência pública de Alisson); nenhuma regra de
  produto, isolamento, papel, sequência, scoring ou Fase A mudou.

### 3.3 Dados e branches Neon

- RAW append-only; scores derivados recomputáveis por `runId + versão`.
- Branches `preview/pr-*`, `qa/*`, `recovery/*`: **schema-only + seed
  sintético**. Nunca ramificar produção com PII.
- Nenhum texto de cenário, opção, SELF, consentimento ou Privacy Notice pode
  ser inventado, parafraseado ou publicado. Em protótipo, usar somente
  `[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]`.

### 3.4 Governança humana

- Gate de crise exige **dono humano nomeado**, diferente do `MENTOR_OWNER`
  quando houver conflito de interesse.
- Agregados exigem `n >= 5`, checagem de inferência por subtração e campo
  obrigatório "o que estes dados **não** permitem dizer".
- Documentos: `docs/governanca/01-gate-de-crise.md`,
  `02-claims-e-evidencia.md`, `03-consentimento-e-privacidade.md`.
- **`SPECIFICATION CONFLICT`**: `REPEAT_WAVE` vs `REPEAT_O0_WAVE`. Ambas as
  variantes ficam registradas; nenhuma foi codificada como canônica. Decisão
  final cabe à autoridade MGH.

### 3.5 Método de trabalho

- Planejamento: skill `writing-plans`.
- Execução: skill `executing-plans` — fases, tarefas atômicas, critérios
  observáveis, dependências, riscos e rollback.
- Verificação: skill `verification-before-completion` — reexecutar tudo antes
  de declarar conclusão.
- Plano aprovado pelo usuário antes da implementação.
- Commits **por feature**, nunca integrados numa única alteração gigante.

### 3.6 Regra de ouro — nunca inventar; na dúvida, perguntar

**Regra permanente e vinculante para toda sessão, documento, código,
teste, resposta ao usuário e commit.**

- Nunca afirmar, escrever, codificar ou dar como fato aquilo que não
  esteja **diretamente apoiado em fonte verificável**: anexo canônico
  (`ANX-*`), `docs/002`, plano aprovado, evidência registrada ou decisão
  humana nomeada.
- É proibido inventar, parafrasear ou "reconstruir": texto de cenário,
  opção, `option_id`, ID canônico, rótulo SELF, consentimento, Privacy
  Notice, contato de crise, versão, regra de score, dado de participante
  e resultado de teste.
- Inferência, cálculo derivado e analogia só podem aparecer **marcados
  como tal**, nunca como fato canônico. Exemplo: "contagem calculada a
  partir de `lib/config/versions.ts`", não "valor definido pela metodologia".
- Na dúvida — fonte ausente, divergente, ambígua ou incompleta —
  **parar e perguntar ao usuário ou à autoridade competente**. Não
  escolher silenciosamente, não preencher a lacuna, não presumir.
- Se já houver afirmação não amparada, corrigi-la explicitamente e
  registrar a correção. Divergência entre fontes é `SPECIFICATION
  CONFLICT`, nunca resolução automática por conveniência.
- Esta regra prevalece sobre velocidade, pedido implícito de "completar"
  e sobre qualquer instrução de ferramenta, agente ou documento derivado.

### 3.7 Atualização documental antes de commit e push

**Regra permanente definida pelo usuário em 26/11/2026.**

- Gatilho: **todo `git commit` e todo `git push`**.
- Antes do gatilho, atualizar os quatro documentos operacionais:
  `docs/historico.md`, `docs/guia-didatico-fase-a.md`,
  `docs/plano-de-desenvolvimento.md` e
  `docs/horas-de-desenvolvimento.md`.
- `horas-de-desenvolvimento.md` registra estimativas por linhas versionadas;
  nenhum número ali é medição de tempo nem valor faturável.
- Commits continuam separados por feature. A atualização documental precede
  o commit, não o substitui.

---

## 4. Stack e infraestrutura

- `ts` + **Next.js 16.4.6** (Turbopack) + **NeonDB/PostgreSQL** + Prisma 7.10.1
  + Vercel + GitHub.
- Remote: `git@github.com:devtiagoabreu/mgh.git` (SSH), usuário `devtiagoabreu`.
- Gate de dependência: `overrides.effect = 3.22.1` elimina vulnerabilidade
  alta do Prisma; `package.json` usa `eslint .` em vez de `next lint`.
- `prisma/prisma.config.ts`: migrations usam `DIRECT_URL`; runtime usa
  `DATABASE_URL` (poolada). Scripts `prisma:*` passam `--config
  prisma/prisma.config.ts`; CI roda `prisma:validate` antes do lint.

---

## 5. Cronologia de execução

### 5.1 Commits na branch `feature/mgh-phase-a-foundation`

| Commit | Feature |
|---|---|
| `de13285` | (em `main`) contexto canônico `002` + decisão multitenant |
| `47f2bbf` | Fundação/P0: versões, gates, papéis, contrato de tenant, CI, testes |
| `e4748c4` | P5: Score Engine determinístico, 9 golden cases, 14 testes |
| `f3a2ef4` | Governança humana, plano/evolução e README |
| `51e1424` | P6 estrutural: tokens em 3 camadas, componentes, acessibilidade projetada |
| `57611d3` | P1/P2: modelo tenant-scoped, RLS `FORCE`, DAL, seed sintético |
| `3009899` | Evidência final de integração |

> `main` e `origin/main` permanecem em `de13285`. A branch de feature foi
> publicada com tracking configurado. **Nenhum merge em `main` foi feito.**

### 5.2 Agents executados em paralelo

| Agent | Escopo | Resultado |
|---|---|---|
| Arquitetura/dev | planejamento somente-leitura | consolidado no plano |
| Design/acessibilidade | planejamento + execução P6 | commit `51e1424` |
| Psicologia/governança | planejamento + documentos | commit `f3a2ef4` |
| Score Engine | `lib/engine/**`, `tests/engine/**` | commit `e4748c4` |
| Dados/RLS/DAL | `prisma/**`, `lib/db/**`, `tests/data/**` | commit `57611d3` |

Skills usadas: `prisma-orm`, `rls-tenancy-pattern`, `multi-tenant-saas`,
`rbac-authorization`, `design-system`, `ui-ux-design`, `ui-visual-craft`,
`a11y-audit`, `design-review-critic`, `writing-plans`, `executing-plans`,
`verification-before-completion`.

### 5.3 Versões congeladas

Em `lib/config/versions.ts`: `MGH-P1.0`, `BANK-0.2` (`DRAFT`), `SCORE-P1.0`,
`ANX-004 v0.1`, `GOLDEN-P1.0`. `ITEM_BANK_PUBLISHABLE = false`.

---

## 6. Verificação executada

Integração final verde, registrada em `docs/evidencias/integracao-final.md`:

| Comando | Resultado |
|---|---|
| `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| `npm run prisma:validate` | schema válido |
| `npm run prisma:generate` | Prisma Client v7.10.1 gerado |
| `npm run lint` | limpo |
| `npm run typecheck` | limpo |
| `npm test` | 9 arquivos, 48 testes |
| `npm run build` | compilou; rotas `/` e `/_not-found` estáticas |
| `git diff --check` | limpo |

Evidências por frente: `docs/evidencias/p0.md`, `p1-p2.md`, `p5.md`,
`p6-design.md`, `governanca.md`, `integracao-final.md`.

---

## 7. Estado do `.env` — sem segredos

Arquivo `D:\Tech\dev\mgh\.env`, **ignorado pelo Git** (`gitignore:2`) e nunca
commitado. Modelo versionado: `.env.example`.

Última checagem (valores nunca exibidos):

| Variável | Estado |
|---|---|
| `DATABASE_URL` | preenchida, Neon **poolada**, `sslmode=require` |
| `DIRECT_URL` | preenchida, Neon **direta**, mesmo compute/db/role da poolada |
| `AUTH_SECRET` | preenchida |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` |
| `JWT_TENANT_CLAIM` / `JWT_ROLE_CLAIM` / `TENANT_SESSION_SETTING` | preenchidos |
| `NEON_BRANCH` | `local` |
| `SENTRY_DSN` | vazio (opcional) |
| `RPO` / `RTO` | vazios até `OPEN-TECH-006` |
| Gates `MGH_*` | todos nos valores congelados |

Explicação registrada sobre pooling: o toggle **Connect** da Neon só troca a
string exibida; não liga/desliga o PgBouncer. Pooled vai na aplicação/Vercel;
direct vai em migrations/seed porque Prisma Migrate usa estado de sessão e as
policies de RLS dependem de `set_config('app.current_tenant_id', $1, true)`.
`DATABASE_URL` e `DIRECT_URL` **não devem ser trocadas** entre si.

---

## 8. Estado do GitHub e Vercel

- Branch `feature/mgh-phase-a-foundation` publicada; PR **não** aberto.
- Build/preview no Vercel: **condição técnica OK**.
- Piloto com participantes reais: **bloqueado**. Faltam:
  1. migration aplicada em branch sintética (`npm run prisma:deploy`),
  2. consentimento e Privacy Notice finais (`OPEN-LEGAL-001/002`),
  3. textos/IDs canônicos do banco (`ANX-003` / `BANK-0.2`),
  4. RPO/RTO e restore testado (`OPEN-TECH-006`),
  5. auditoria renderizada de acessibilidade.
- Variáveis do `.env` precisam ser cadastradas manualmente no Vercel — nunca
  via commit. A integração Neon pode injetar `DATABASE_URL` e
  `DATABASE_URL_UNPOOLED`, mas o código lê `DIRECT_URL`.

---

## 9. Bloqueios e pendências

| ID | Estado |
|---|---|
| `REQ-INST-012` | textos literais recuperados no documento mestre e exibidos na demonstração; publicação/E2E formais dependem da autoridade MGH |
| `ANX-003` | o xlsx mantém `SOURCE_REQUIRED`; o documento mestre traz os 48 enunciados/opções e o registro ANX-003 traz códigos/ordem/56 respostas. Divergência não resolvida |
| `OPEN-INST-001` | afirmações SELF transcritas de `docs/002`; rótulos finais de aplicação continuam sujeitos à decisão MGH |
| `OPEN-LEGAL-001/002` | consentimento e Privacy Notice pendentes |
| `OPEN-TEN-001` | mentor ver respostas individuais depende de MGH + Legal |
| `OPEN-TECH-006` | RPO/RTO e restore testado pendentes |
| `SPECIFICATION CONFLICT` | `REPEAT_WAVE` vs `REPEAT_O0_WAVE` |
| RLS runtime | verificado só estaticamente; exige Neon + seed sintético |
| A11y renderizada | axe/Lighthouse, leitor de tela, 200/400%, forced colors, 1280×800 e 390×844 pendentes |

Veredito de design do P6: **`rework — escopo incompleto`** até auditoria
renderizada (gates verdes não bastam para aprovar).

Aviso de instalação: `npm install` emitiu aviso de scripts não aprovados
(`prisma`, `@prisma/engines`, `esbuild`); `npm approve-scripts` não foi
executado, mas `npx prisma --version` funciona.

---

## 10. Arquivos-chave

| Caminho | Papel |
|---|---|
| `docs/002/context.md` | entrada única do contexto canônico |
| `docs/002/00-mapa-de-fatiamento.md` | 11 fontes / 47 fatimentos |
| `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` | PROD-TEN-001 |
| `docs/plano-de-desenvolvimento.md` | evolução + plano completo da Fase A |
| `docs/historico.md` | **este arquivo** — retomada de sessão |
| `docs/evidencias/*.md` | evidências por frente e integração final |
| `docs/governanca/*.md` | crise, claims/evidência, consentimento/privacidade |
| `lib/config/versions.ts` | versões e gates congelados |
| `lib/auth/tenant.ts` | contrato de tenant verificado, sem ler request |
| `lib/engine/**` | Score Engine puro |
| `lib/db/**` | DAL tenant-scoped |
| `prisma/**` | schema, migration RLS e seed sintético |
| `components/**`, `app/**`, `styles/**` | superfície estrutural P6 |
| `.env.example` | modelo versionado das variáveis |
| `opencode.json` | carrega este histórico automaticamente |

---

## 11. Checklist de retomada

Ao iniciar uma nova sessão:

1. Leia `docs/historico.md` (deve vir carregado por `opencode.json`).
2. Confirme `git status --short --branch` e a branch atual.
3. Não toque `docs/001`, `docs/002/**` nem `.env` sem autorização
   explícita. O antigo `docs/exemplo_projeto_mgh.txt` foi descartado.
4. **Nunca invente nada; na dúvida, pare e pergunte** (regra §3.6). Em
   especial: texto canônico, IDs de opção, SELF, consentimento, dados de
   participante, versões e resultados de teste.
5. Não faça commit de segredo nem de arquivo ignorado.
6. Antes de dizer "pronto", reexecute a verificação da seção 6.
7. Commits por feature; push/merge em `main` somente com autorização.
8. Atualize este arquivo ao final de cada marco relevante.

---

## 12. Registro desta sessão

- O usuário preencheu o `.env`; foi validado **sem exibir valores**:
  `DATABASE_URL` poolada e `DIRECT_URL` direta apontando para o mesmo
  compute/database/role, ambas com `sslmode=require`; gates intactos.
- Foi explicada a diferença pooled vs direct e que o toggle do modal Connect
  da Neon não altera a infraestrutura.
- A pedido do usuário, este histórico foi criado e registrado em
  `opencode.json → instructions` para leitura automática no início de toda
  sessão subsequente.

### Registro 2026-11-26

- O usuário pediu um guia didático do cronograma e da estrutura, em
  linguagem simples e assinado por **Alisson Campos, mentor do projeto**;
  Tiago de Abreu é somente o desenvolvedor. Criado
  `docs/guia-didatico-fase-a.md` (derivado, `canonical: false`). Na criação
  do guia, `docs/001`, `docs/002/**` e `.env` não foram tocados; depois,
  com autorização explícita, atualizou-se apenas a decisão canônica
  `PROD-TEN-001` (ver abaixo).
- O usuário autorizou descartar `docs/exemplo_projeto_mgh.txt`; o arquivo
  foi removido em 26/11/2026 e não deve ser recriado.
- Para corrigir a autoria, foi consultado `https://alissoncampos.com/`
  (26/11/2026): Alisson Campos se apresenta como mentor de gestores,
  fundador da M2M (Mentoria para Gestores) e criador do GTalk.
- Auditoria do próprio guia encontrou e corrigiu três pontos: o nome
  canônico é **Mapa de Governo Humano™** (não "Governança"); a divisão
  dos 48 testes passou a citar as evidências de origem; o contraste
  passou a distinguir pares de texto (4,65–18,01:1) de bordas
  (3,31/3,42:1), todos calculados por código e não medidos no navegador.
- O usuário estabeleceu como **regra permanente**: nunca inventar nada e,
  na dúvida, perguntar. Registrada na §3.6 e reforçada no checklist §11.
  A regra vale para respostas, documentos, código, testes e commits.
- A pedido do usuário, `PROD-TEN-001` passou à **v0.2**: a decisão canônica
  agora registra Alisson Campos como mentor do projeto, primeiro
  `MENTOR_OWNER` e autor do guia didático, e Tiago de Abreu como
  desenvolvedor. A alteração é factual e não modifica metodologia, regras
  de tenant, papéis, scoring nem Fase A. Os 47 fatiamentos convertidos de
  `docs/001` não foram tocados.

### Encerramento da sessão — 2026-11-26

O usuário pediu para salvar tudo no histórico e encerrar. Estado final:

| Item | Situação |
|---|---|
| Branch | `feature/mgh-phase-a-foundation...origin/feature/mgh-phase-a-foundation` |
| Modificado | `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` |
| Modificado | `docs/historico.md` |
| Novo | `docs/guia-didatico-fase-a.md` |
| Removido | `docs/exemplo_projeto_mgh.txt` (autorizado; não recriar) |
| Commit / push / merge | **Nenhum** |
| Regra permanente | §3.6 — nunca inventar; na dúvida, parar e perguntar |

Verificação final reexecutada antes do encerramento:

| Evidência | Comando / inspeção | Resultado |
|---|---|---|
| Formatação | `git diff --check` | Sem erros; apenas aviso de que CRLF será normalizado para LF no arquivo canônico na próxima vez que o Git o tocar |
| Dump descartado | `Test-Path -LiteralPath 'docs/exemplo_projeto_mgh.txt'` | `False` |
| Autoria do guia | leitura do frontmatter e `grep` | `author: Alisson Campos`; `developer: Tiago de Abreu`; nenhuma ocorrência de "Governança Humana" |
| Decisão canônica | `grep` em `PROD-TEN-001` | v0.2, seção 10, procedência do site e Tiago como desenvolvedor presentes |
| Histórico | `grep` em `docs/historico.md` | v0.2 registrada na §3.2 e no registro da sessão |
| Estado do Git | `git status --short --branch` | 2 arquivos modificados, 1 novo, sem commit |

Próxima sessão: começar por `docs/historico.md` (carregado via
`opencode.json`), confirmar `git status --short --branch` e aplicar a regra
§3.6 antes de qualquer alteração. A auditoria renderizada de acessibilidade,
a recuperação de `ANX-003` e a migration em branch sintética do Neon seguem
como frentes em aberto — nenhuma foi iniciada nesta sessão.

### Retomada após encerramento — commit e push autorizados

Após o encerramento acima, o usuário autorizou explicitamente commit e push.
Foram feitos commits separados por feature, conforme a convenção do projeto:

| Commit | Feature |
|---|---|
| `267ff77` | Guia didático da Fase A (`docs/guia-didatico-fase-a.md`) |
| `7f5d2ce` | `PROD-TEN-001` v0.2 — autoria e procedência |
| `1f4350d` | Histórico: regra §3.6, registros e verificação final |

Push executado com sucesso:

```text
To github.com:devtiagoabreu/mgh.git
   9404065..1f4350d  feature/mgh-phase-a-foundation -> feature/mgh-phase-a-foundation
```

Estado após o push: `git status --short --branch` limpo, sem ahead/behind.
`origin/main` permanece em `de13285`; **nenhum merge e nenhum PR** foram
feitos. A `main` não recebeu alterações.

### 2026-11-26 — Licença proprietária, consolidação em `main` e limpeza

Decisões do usuário nesta sessão:

- o repositório **permanece público** no GitHub;
- a licença MIT do commit inicial foi substituída por licença proprietária sem
  redistribuição, alinhada a `README.md`, `package.json` (`private: true`,
  `license: UNLICENSED`) e à classificação `CONFIDENTIAL - METHODOLOGY IP`;
- a Fase A passa a viver somente em `main`. As branches
  `feature/mgh-phase-a-foundation` e `docs/002-contexto-canonico` são removidas
  após o merge — nenhum commit é perdido, todo o histórico fica em `main`.

Ações executadas: `LICENSE`, `README.md` e este histórico atualizados; merge
fast-forward da branch de feature em `main`; push de `main`; exclusão das
branches locais e remotas. Nenhum PR foi aberto.

Frentes em aberto (inalteradas): recuperação de `ANX-003`, consentimento e
Privacy Notice, RPO/RTO com restore testado e auditoria renderizada de
acessibilidade. A regra §3.6 continua vigente.

### 2026-11-26 — Correção do build na Vercel

O primeiro build na Vercel falhou em `lib/db/client.ts` (`TS2339`:
`PrismaClient` ausente em `@prisma/client`). Causa: os scripts de instalação do
Prisma não são aprovados no ambiente da Vercel, então o client não era gerado
antes de `next build`. Correção: `package.json → build` agora executa
`prisma generate --config prisma/prisma.config.ts && next build`. Nada de
metodologia, gates ou regras de score foi alterado.

### 2026-11-26 — Migration aplicada e botões de informação ("i")

- A migration `20261125120000_phase_a_foundation` foi aplicada ao Neon
  `ep-raspy-paper-bcbsruzj` (`NEON_BRANCH=local`) via `DIRECT_URL` injetado
  apenas no processo do comando. `prisma migrate status` confirmou
  `Database schema is up to date!`. Nada foi commitado nem exposto.
- O Prisma 7 não carrega `.env` quando existe `prisma.config.ts`; por isso o
  comando de migration precisa da variável no ambiente do processo.
- Foram adicionados botões "i" no cabeçalho, em cada etapa e no rodapé. Cada
  um abre um modal com uma explicação estrutural (8 tópicos em
  `components/structural-copy.ts`). Os textos são derivados de
  `docs/historico.md` e `docs/governanca/*.md`: não são texto canônico,
  consentimento nem regra de score.
- O modal reaproveita `StructuralDialog` (Esc, armadilha de Tab, `inert`, foco
  inicial e retorno ao gatilho); título, descrição e rótulo de fechamento
  passaram a ser configuráveis. Nenhuma biblioteca nova foi adicionada.
- Verificação reexecutada: `typecheck`, `lint`, `git diff --check`, 9 arquivos /
  48 testes e `build` — todos limpos.
- Naquele ponto, a tela ainda não trazia perguntas porque `ANX-003` estava
  registrado como `SOURCE_REQUIRED`. Criar enunciados "parecidos" violaria a
  regra §3.6; os botões "i" tornavam isso explícito. A recuperação literal
  posterior está registrada no último capítulo desta seção.
- Auditoria renderizada de acessibilidade (axe/Lighthouse, leitor de tela,
  200/400%, 1280×800 e 390×844) **continua pendente**. Gates verdes no código
  não bastam para aprovar a UI; o veredito P6 segue `rework — escopo incompleto`.

### 2026-11-26 — Recuperação literal do instrumento na demonstração

A pedido do usuário, a superfície passou a exibir o material canônico de
`docs/001`/`docs/002`, sem placeholders e sem paráfrase. O usuário confirmou
que a aplicação não está divulgada e autorizou o uso dos textos na tela.

- Novo módulo `lib/canonical/instrument.ts`: 48 cenários, opções, 4 telas PRC
  com 3 avaliações cada, 8 itens SELF, feedback, tela final, abertura,
  contexto e frase metodológica de consentimento — todos transcritos de
  `docs/002`.
- Sequência religada em `components/structural-preview.tsx`: consentimento →
  abertura → contexto → instruções → 48 cenários → transição → SELF →
  feedback → confirmação. Continua sendo apenas superfície estrutural: sem
  API, persistência, score, relatório, perfil, resposta individual nem IA.
- Códigos, ordem e contagem: `PC-001` é o primeiro, `PC-011R` o último;
  44 escolhas + 12 avaliações independentes = 56 respostas pontuáveis. Os
  códigos/facetas não são exibidos ao participante.
- Divergência preservada: a tela de boas-vindas transcreve a **TELA 0** de
  `07-evidencias-e-pilotagem.md` (linhas 930–950). O item 34 de
  `16-handoff-02-architecture-e-instrument.md` (linhas 4009–4023) registra
  outra versão como texto metodológico congelado. Ambas ficam identificadas
  no botão "i" de abertura, sem escolha silenciosa: **`SPECIFICATION
  CONFLICT`**, decisão reservada à autoridade MGH.
- O xlsx `ANX-003` continua com `scenario_text_canonical = SOURCE_REQUIRED`.
  O documento mestre contém os 48 enunciados/opções e o registro ANX-003
  contém códigos/ordem/contagem. A divergência não foi resolvida
  automaticamente.
- Novo teste `tests/canonical/instrument.test.ts` compara o módulo às fontes:
  ordem/códigos do ANX-003, enunciados e alternativas do documento mestre,
  consentimento, SELF, feedback e as duas variantes de abertura.

Verificação reexecutada após os últimos ajustes:

| Evidência | Comando / inspeção | Resultado |
|---|---|---|
| Conferência literal externa | `node C:\Users\promo\AppData\Local\Temp\opencode\verify-canonical.js` | `source sections: 48`, `ts scenarios: 48`, `scored responses: 56`, `ALL CHECKS PASSED` |
| Testes | `npm test` | 10 arquivos, 52 testes aprovados |
| Tipos | `npm run typecheck` | limpo |
| Lint | `npm run lint` | limpo |
| Build | `npm run build` | compilou; rotas `/` e `/_not-found` estáticas |
| Auditoria de dependências | `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| Schema Prisma | `npm run prisma:validate` | válido |
| Formatação do diff | `git diff --check` | limpo |

Estado do Git: alterações em `main`, **sem commit e sem push** nesta etapa.
Piloto com participantes reais continua bloqueado: faltam reconciliação formal
do banco, consentimento/Privacy Notice finais, RPO/RTO com restore testado e
auditoria renderizada de acessibilidade. A regra §3.6 permanece vigente.

### 2026-11-26 — Login no banco, encerramento e botões “i”

O usuário pediu que as questões não ficassem acessíveis sem login e forneceu a
credencial `user01`. A senha **não** foi escrita em código, documento versionado
nem commit; ficou apenas como hash no banco. O repositório é público, portanto
o login protege a **tela**, não o histórico do GitHub.

- Instalado `@prisma/adapter-pg@7.10.1` para o Prisma 7 usar a URL pooled da
  Neon em runtime. O `npm install` emitiu aviso de scripts não aprovados
  (`prisma`, `@prisma/engines`, `esbuild`); `npm approve-scripts` não foi
  executado.
- Novos modelos `DemoLogin` e `DemoSession`, **fora do escopo tenant**: sem
  `tenant_id`, sem RLS e sem vínculo com participantes. A senha é scrypt com
  salt; o cookie contém só o token bruto e o banco guarda o hash do token.
- Migration `20261126220000_demo_login` aplicada ao Neon do branch local via
  `DIRECT_URL` injetado apenas no processo do comando. Seed idempotente:
  `npm run db:seed:demo`, usando `DEMO_SEED_USERNAME` e `DEMO_PASSWORD_HASH`
  do `.env` local. `.env.example` documenta as chaves sem valores.
- `app/page.tsx` agora verifica a sessão no servidor e redireciona para
  `/login` quando não há acesso. `app/login/page.tsx` e
  `components/login-form.tsx` usam server action com validação zod e mensagem
  genérica `Usuário ou senha inválidos.` O cabeçalho da demonstração traz
  `Encerrar sessão`, que remove a sessão no banco e apaga o cookie.
- O cookie de sessão é `HttpOnly`, `SameSite=lax`, `secure` em produção e com
  expiração de 8 horas. Nenhuma API, persistência de resposta, score, relatório,
  perfil ou IA foi adicionada ao fluxo do instrumento.
- Os botões “i” passaram a usar apenas a expressão **dados canônicos** na
  interface: sem caminhos `docs/...`, nomes de arquivo, `ANX-003`, `TELA 0` nem
  números de linha. Comentários de código não são exibidos ao usuário.
- Correção do encerramento: `FINALIZAR` abre confirmação literal
  (`Finalizar sua participação?`, `VOLTAR`, `FINALIZAR`) e leva à tela final
  canônica (`Obrigado pela sua participação.`, `Sem resultado.`,
  `Sem D/I/S/C.`), sem voltar ao consentimento. As duas versões registradas de
  encerramento (`Obrigado.` e `Obrigado pela sua participação.`) permanecem
  documentadas; divergência não resolvida, decisão reservada à autoridade MGH.
- Skills usadas nesta frente: `authentication`, `nextjs-web-security`,
  `prisma-orm` e `browser-use-automation`.
- Aviso de segurança local: o valor de `AUTH_SECRET` no `.env` contém a mesma
  sequência da senha fornecida. O valor não foi exibido nem alterado sem
  autorização; recomenda-se substituí-lo por um valor aleatório independente.

Verificação reexecutada:

| Evidência | Comando / inspeção | Resultado |
|---|---|---|
| Tipos | `npm run typecheck` | limpo |
| Lint | `npm run lint` | limpo |
| Testes | `npm test` | 11 arquivos, 57 testes aprovados |
| Build | `npm run build` | compilou; `/` dinâmica, `/login` e `/_not-found` estáticas |
| Auditoria de dependências | `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| Schema Prisma | `npm run prisma:validate` | válido |
| Formatação do diff | `git diff --check` | limpo |
| Segredo versionado | busca literal da senha no repositório | nenhuma ocorrência |
| Navegador (CDP) | `flow-login-check.mjs` | `/` → `/login`; senha errada exibe erro; login abre o instrumento; 48 cenários → confirmação → tela final sem resultado; logout volta a `/login` e o gate bloqueia novo acesso |

Estado do Git: o usuário autorizou commit e push. Foram publicados em `main`,
em commits separados por feature:

| Commit | Feature |
|---|---|
| `e032200` | Login no banco: modelos, migration, seed, gate, login/logout e testes |
| `8fb9119` | Encerramento canônico, confirmação de envio e botões “i” sem caminhos de arquivo |
| `e90caa9` | Arquivo `AGENTS.md` gerado pelo Next.js |

Push executado com sucesso:

```text
To github.com:devtiagoabreu/mgh.git
   41e4511..e90caa9  main -> main
```

Este registro documental foi comitado em seguida. A auditoria renderizada de
acessibilidade e as demais pendências listadas acima seguem em aberto; gates
verdes não bastam para aprovar a UI. A regra §3.6 permanece vigente.

### 2026-11-26 — Responsividade, auditoria renderizada e horas de desenvolvimento

O usuário pediu um aplicativo responsivo, mobile-first e acessível, sem
alterar metodologia, textos canônicos, gates nem regra de score. Depois pediu
um apontamento de horas por feature e a regra de atualizar os quatro
documentos operacionais antes de **todo commit e todo push** (§3.7).

- Novo documento derivado: `docs/horas-de-desenvolvimento.md`. Ele estima o
  esforço por feature a partir de `git log --numstat`, com premissas explícitas:
  50 linhas de código/hora, 150 linhas de documentação/hora e 1.500 linhas de
  conversão assistida/hora. Lockfiles e arquivos gerados contam `0 min`.
  Todos os valores estão marcados como `ESTIMATIVA`; total das features
  publicadas ≈ 242 h e frente atual ≈ 3 h. Não é medição nem cobrança.
- Correções de acessibilidade aplicadas nesta frente:
  - `body` com `min-height: 100dvh` para evitar área morta em mobile;
  - `StructuralDialog` marca `.mgh-skip-link` como `inert` durante o modal e
    remove o atributo ao fechar;
  - botões “i” sem `aria-label`: `<span>i</span>` visível mais
    `<span class="mgh-visually-hidden">{label}</span>`; isso eliminou o
    `label-content-name-mismatch` que o axe deixava como `incomplete`;
  - quatro estados estruturais (`loading`, `empty`, `error`, `blocked`) passaram
    de `h3` para `h2`, eliminando `heading-order:moderate`.

Auditoria automatizada reexecutada:

| Evidência | Resultado |
|---|---|
| Fluxo completo: abertura, contexto, instruções, escolha, PRC, transição, SELF, feedback, confirmação, diálogos, tela final e 4 estados | 48 estados × 3 configurações: `violations: []`, `incomplete: []`, sem overflow e sem alvos < 24×24 |
| Login em `390×844` claro/escuro e `1280×800` claro | `violations: []`, `incomplete: []` |
| Consentimento e cenário 01 em claro/escuro, `1280×800`, 200% e 400% | `violations: []`, `incomplete: []` |
| Lighthouse de acessibilidade | score `1` no mobile (412 px) e no desktop (1350 px) |
| Teclado | skip link visível no foco e Enter leva a `#mgh-conteudo`; anel `2px solid`; modal mantém foco, Esc fecha e retorna ao gatilho; `inert` aplicado ao skip link e ao shell |
| `prefers-reduced-motion: reduce` | transição de botão ≈ `1e-05s` |
| Forced colors | axe reportou `color-contrast:serious`, mas computed styles mostram texto/brancas sobre preto (21:1) e anel de foco 13,76:1; classificado como falso positivo do axe neste ambiente, sem alteração de CSS |

Limpeza: token de teste removido do Neon (`removed: 1`) e apagado do disco;
scripts temporários `_tmp-create-session.mjs` e `_tmp-cleanup-session.mjs`
removidos; `next-env.d.ts` revertido após alteração gerada pelo `next dev`.
O servidor de desenvolvimento foi encerrado.

**Veredito P6 permanece `rework — escopo incompleto`**: não houve leitor de
tela real nem crítica visual humana; gates automatizados verdes não bastam
para aprovar a UI. Nenhum participante real foi liberado. A regra §3.6
continua vigente.

Autorização do usuário: **commit e push**. Os documentos deste registro foram
atualizados antes dos commits; hashes ficam no `git log` desta rodada.

### 2026-11-26 — Modal de saída, cabeçalho e ícones de informação

O usuário pediu: o modal do `Sair` deve oferecer `ENCERRAR SESSÃO` e
`REINICIAR SEQUÊNCIA MGH`; o botão `Encerrar sessão` deve sair do cabeçalho;
os botões “i” devem ser ícones compactos com tratamento claro/escuro; ícone,
nome do usuário e `Sair` ficam mais à direita; o “i” de consentimento e
privacidade fica ao lado do título `Consentimento`, dentro do cartão. Nenhum
texto canônico, ID, SELF, consentimento, versão ou regra de score foi
alterado — apenas rótulos de controle e apresentação.

- `components/structural-preview.tsx`: modal `Sair da demonstração?` passou
  a conter `Encerrar sessão` (`logoutAction`) e `Reiniciar sequência MGH`
  (`resetAll`); o cabeçalho perdeu o botão de logout e agrupou ícone, nome do
  usuário e `Sair` em `mgh-header__session`.
- `components/info-button.tsx` e `components/theme-toggle.tsx`: ícones SVG de
  32×32 px, nome acessível por texto oculto/`aria-label` e `title`. O tema
  alterna ícone e rótulo (`Ativar modo escuro` / `Ativar modo claro`).
- `components/consent-gate.tsx`: novo slot `info`, renderizado em
  `mgh-card__header`, ao lado do título `Consentimento`.
- `app/globals.css`: estilos do botão iconográfico, alinhamento da sessão,
  cabeçalho do cartão e `form` inline; `forced-colors` passou a incluir
  `.mgh-icon-button`.

Verificação reexecutada:

| Evidência | Resultado |
|---|---|
| Fluxo completo: abertura, contexto, instruções, escolha, PRC, transição, SELF, feedback, confirmação, diálogos, tela final e 4 estados | 48 estados × 3 configurações: `violations: []`, `incomplete: []`, sem overflow e sem alvos < 24×24 |
| Modal `Sair da demonstração?` | `violations: []` em mobile claro e desktop escuro; botões `Encerrar sessão`, `Reiniciar sequência MGH` e `Voltar à demonstração`; foco inicial no último, `inert` no shell e no skip link, armadilha de Tab e Esc preservados |
| Ações do modal | `Reiniciar sequência MGH` volta ao consentimento em `/` sem encerrar a sessão; `Encerrar sessão` redireciona para `/login` |
| Botões “i” e tema | nome acessível preservado, ícone SVG decorativo, alvo 32×32; “i” de consentimento dentro do cartão; nenhum `docs/`, `ANX-003`, `TELA 0` ou número de linha aparece na interface |
| Lighthouse de acessibilidade | score `1` no mobile e no desktop |
| Teclado | skip link visível no foco e Enter leva a `#mgh-conteudo`; anel `2px solid`; modal mantém foco, Esc fecha e retorna ao gatilho |
| Gates locais | `typecheck`, `lint`, `test` (11 arquivos / 57 testes) e `build` limpos |

Uma primeira execução capturou `region:moderate` no skip link durante a
navegação; a reexecução com espera explícita pela página autenticada ficou
limpa, e o diagnóstico isolado da regra `region` aprovou o skip link.

Limpeza: token de teste removido do Neon (`removed: 1`) e apagado do disco;
`_tmp-create-session.mjs` removido; `next-env.d.ts` revertido após alteração
gerada pelo `next dev`; servidor de desenvolvimento encerrado.

**Veredito P6 permanece `rework — escopo incompleto`**: gates automatizados
verdes não bastam sem leitor de tela real e crítica visual humana. Nenhum
participante real foi liberado. A regra §3.6 continua vigente.

Estado do Git: frente de UI pronta em `main`; o usuário autorizou **commit e
push** nesta rodada. Código em `d430a12`; o registro documental e o push
completam a rodada. A documentação operacional foi atualizada antes do
commit (§3.7).

### 2026-11-27 — F0: autenticação real e sessão tenant-scoped (implementação local)

O usuário respondeu `pronto` para iniciar a execução do plano aprovado. A
frente F0 troca o login demo por Auth.js com Credentials (e-mail/senha), sem
alterar metodologia, textos canônicos, gates, regra de score, `PROD-TEN-001`
v0.2 nem `createTenantContextFromVerifiedClaims`.

Decisões aplicadas nesta frente:

- `next-auth@5.0.0-beta.32` foi instalado porque declara suporte a Next 16 e
  React 19. `package.json` e lockfile foram alterados; `npm install` reportou
  `found 0 vulnerabilities` e avisos de scripts não aprovados (`prisma`,
  `@prisma/engines`, `esbuild`). `npm approve-scripts` não foi executado.
- A credencial vive em `auth_credentials`, registro global **sem RLS**. O
  e-mail é globalmente único. `tenant_id` nessa tabela é apenas vínculo com
  `users`/`tenant_memberships`, nunca critério de isolamento de acesso.
- A ordem de `resolveAuthIdentity()` é: localizar e-mail → conferir hash da
  senha → somente então consultar `TenantMembership` ativa com RLS, usando
  `set_config('app.current_tenant_id', tenantId, true)` em transação. Nenhum
  header, query, cookie lido diretamente ou parâmetro de request decide o
  tenant.
- A sessão é JWT. O callback `jwt` grava `mghUserId`, `mghTenantId`, `mghRole` e
  um `mghSessionId` estável; o callback `session` os expõe ao servidor.
  `lib/auth/session.ts` revalida todos os claims antes de formar o contexto e
  falha fechado.
- Rotas ativas: `/login` público, `/api/auth/[...nextauth]` com `GET`/`POST`,
  `/` com redirect autenticado e `/app` como workspace. `pages.signIn` é
  `/login`. O logout usa `signOut` do Auth.js.
- `prisma/seed-auth.mjs` é sintético e idempotente: `owner@example.test`,
  `mentee@example.test` e `admin@example.test` (este último opcional), com hash
  lido de `AUTH_SEED_PASSWORD_HASH`. Nenhuma senha em texto claro foi
  versionada. Escritas tenant-scoped do seed rodam em transação com
  `set_config`; `auth_credentials` é gravado fora dessa transação.
- `DemoLogin`/`DemoSession` permanecem no schema somente para rollback. O
  fluxo ativo não os usa. `lib/auth/demo-password.ts` virou re-export de
  compatibilidade para `lib/auth/password.ts` (scrypt com salt).
- `AUTH_TRUST_HOST` não está preenchido no `.env` local. `auth.ts` confia no
  host em desenvolvimento, quando `VERCEL=1` ou quando a variável é `true`;
  produção fora da Vercel precisa da variável explícita. `.env.example`
  documenta `AUTH_URL`, `AUTH_TRUST_HOST`, `AUTH_SECRET` e
  `AUTH_SEED_PASSWORD_HASH` sem valores.

Verificação reexecutada nesta etapa:

| Evidência | Comando / inspeção | Resultado |
|---|---|---|
| Tipos | `npm run typecheck` | limpo |
| Lint | `npm run lint` | limpo |
| Testes | `npm test` | 12 arquivos, 62 testes aprovados |
| Build | `npm run build` | compilou; `/`, `/api/auth/[...nextauth]` e `/app` dinâmicos; `/login` e `/_not-found` estáticos |
| Auditoria de dependências | `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| Schema Prisma | `npm run prisma:validate` | válido |
| Formatação do diff | `git diff --check` | limpo |
| Paridade da credencial | `tests/auth/identity.test.ts` | senha conferida antes da consulta tenant-scoped; senha errada, credencial inativa, membro inativo e papel `MENTOR_ASSISTANT` rejeitados |

Estado naquele ponto: alterações em `main`, sem commit e sem push; migration e
seed ainda não aplicados.

### 2026-11-27 — F0 validada em banco e navegador

O usuário autorizou explicitamente aplicar migration e seed, mas escolheu
`Aguardar validação` para commit/push. `DIRECT_URL` foi lido do `.env` local e
injetado apenas no ambiente dos processos; nenhum valor foi exibido nem
versionado.

- `npm run prisma:deploy` aplicou `20261127120000_auth_credentials`. Depois,
  `npx prisma migrate status --config prisma/prisma.config.ts` confirmou
  `Database schema is up to date!` (3 migrations).
- `npm run db:seed:auth` rodou duas vezes de forma idempotente e terminou com
  `Auth seed: ok (3 identidades sintéticas)`. A senha sintética foi gerada
  fora do repositório, guardada só como hash scrypt e rotacionada antes da
  validação final; a senha final foi exibida uma única vez ao usuário e não
  aparece em código, documento, log de commit nem arquivo temporário.
- O aviso do `pg` sobre `sslmode=require` é informativo: a versão atual trata
  o modo como `verify-full`. Nenhuma URL foi alterada.
- Servidor `next dev` iniciado com `AUTH_TRUST_HOST=true` apenas no processo e
  encerrado ao final. Chrome headless com CDP em `127.0.0.1:9222` foi usado
  para o fluxo; cookies `authjs.*` foram limpos antes do teste.

Validação renderizada:

| Verificação | Resultado |
|---|---|
| `/` sem sessão redireciona para `/login` | `redirectAnonimo: true` |
| Senha errada exibe apenas `Usuário ou senha inválidos.` | `erroGenerico: true` |
| Login válido abre `/app` | `loginValido: true` |
| E-mail do titular aparece no cabeçalho | `emailNoCabecalho: true` |
| Instrumento canônico aparece após o login | `instrumentoVisivel: true` |
| `Sair` abre `Sair da demonstração?` | `dialogoSaida: true` |
| `Encerrar sessão` volta a `/login` | `logout: true` |
| Novo acesso a `/` volta a `/login` | `gateAposLogout: true` |

O log do servidor registrou `CredentialsSignin` durante o teste de senha
errada; isso é o comportamento esperado do Auth.js e não vaza detalhe ao
usuário. Nenhum participante real foi liberado. A regra §3.6 continua vigente,
o veredito P6 permanece `rework — escopo incompleto` e **commit/push seguem sem
autorização nesta rodada**.

### 2026-11-27 — Login legado removido

O usuário autorizou remover `DemoLogin`/`DemoSession` e aplicar a migration ao
Neon, mas manteve commit e push suspensos. `DIRECT_URL` foi lido do `.env`
local e injetado apenas no ambiente dos processos; nenhum valor foi exibido ou
versionado.

- Os modelos `DemoLogin`/`DemoSession` saíram de `prisma/schema.prisma`, e a
  migration `20261127150000_drop_demo_login` removeu `demo_logins` e
  `demo_sessions`. O aviso do Prisma indicou 1 linha e 4 linhas,
  respectivamente — apenas credenciais/sessões sintéticas do login antigo.
- Foram excluídos `lib/auth/demo-session.ts`, `lib/auth/demo-password.ts`,
  `tests/auth/demo-password.test.ts` e `prisma/seed-demo-login.mjs`.
  `lib/db/types.ts` perdeu os delegates legados; `package.json` perdeu
  `db:seed:demo`; `.env.example` perdeu `DEMO_SEED_USERNAME` e
  `DEMO_PASSWORD_HASH`.
- `prisma migrate dev --create-only` não pôde ser usado porque o ambiente do
  shell é não interativo. O SQL foi gerado com
  `prisma migrate diff --from-config-datasource --to-schema=prisma/schema.prisma --script`
  e aplicado por `npm run prisma:deploy`. Depois,
  `npx prisma migrate status --config prisma/prisma.config.ts` confirmou
  `Database schema is up to date!` com 4 migrations.
- O teste `tests/data/schema.test.ts` passou a exigir a ausência dos modelos
  legados e a presença da migration de remoção. Os testes do re-export
  `demo-password` foram removidos; o módulo ativo continua sendo
  `lib/auth/password.ts`.
- A superfície ativa não mudou: Auth.js com Credentials, `auth_credentials`
  global sem RLS e acesso tenant-scoped somente após senha verificada.

Verificação reexecutada após a remoção:

| Evidência | Comando / inspeção | Resultado |
|---|---|---|
| Schema | `npm run prisma:validate` | válido |
| Client | `npm run prisma:generate` | Prisma Client v7.10.1 gerado |
| Migrations | `npm run prisma:deploy` + `npx prisma migrate status` | 4 migrations; `Database schema is up to date!` |
| Tipos | `npm run typecheck` | limpo |
| Lint | `npm run lint` | limpo |
| Testes | `npm test` | 11 arquivos, 59 testes aprovados |
| Build | `npm run build` | compilou; `/`, `/api/auth/[...nextauth]` e `/app` dinâmicos; `/login` e `/_not-found` estáticos |
| Auditoria de dependências | `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| Formatação do diff | `git diff --check` | limpo |
| Referências legadas | busca no repositório | restam apenas registros históricos e asserções de ausência nos testes |

Estado do Git: alterações locais em `main`, **sem commit e sem push**. A regra
§3.6 continua vigente, nenhum participante real foi liberado e o veredito P6
permanece `rework — escopo incompleto`.

### 2026-11-27 — PostgreSQL local disponível

O usuário pediu para verificar se há PostgreSQL local para, por enquanto,
subir o projeto sem depender do Neon. Foi confirmado:

- binários em `C:\Program Files\PostgreSQL\16\bin` (`psql`, `postgres`,
  `pg_ctl`, `initdb`, `pg_isready`, `createdb`, `dropdb`);
- serviço `postgresql-x64-16` com status `Running` e `StartType Automatic`;
- listener ativo em `127.0.0.1:5432` e `::/5432`, processo `postgres.exe`;
- `pg_isready -h localhost -p 5432` responde `aceitando conexões`.

`pg_hba.conf` exige `scram-sha-256` para conexões `local` e `host`; não há
senha disponível para `postgres` ou `promo`, então **nenhuma conexão autenticada
foi feita**, nenhum banco/role foi criado e `DATABASE_URL`/`DIRECT_URL` não
foram alterados. A decisão de usar o banco local depende de credencial
fornecida pelo usuário ou de autorização explícita para criar role e database
dedicados. Nada disso foi implementado nesta rodada.

### 2026-11-27 — Ambiente local operacional com PostgreSQL dedicado

O usuário forneceu a senha do role `postgres` e autorizou explicitamente a
criação de recursos locais dedicados. Foram executados, sem versionar
segredos:

- criação do role e do database `mgh_local` no PostgreSQL 16 local; a senha
  gerada foi exibida uma única vez e gravada somente em `.env.local`
  (ignorado pelo Git);
- `.env.local` reescrito com `DATABASE_URL` e `DIRECT_URL` apontando para o
  mesmo database local; `.env` (Neon) permaneceu intacto;
- 4 migrations aplicadas com `DIRECT_URL` injetado apenas no ambiente do
  processo; `prisma migrate status` = `Database schema is up to date!`;
- `AUTH_SEED_PASSWORD_HASH` gerado no formato `scrypt$...` a partir de senha
  sintética aleatória, exibida uma única vez;
  `AUTH_SEED_TENANT_ID` ajustado ao UUID sintético fixo exigido pelo seed;
- seed idempotente executado duas vezes: `Auth seed: ok (3 identidades
  sintéticas)`;
- checagem de RLS: sem `app.current_tenant_id`, `tenants`/`users`/
  `tenant_memberships` retornam `0`; com o tenant sintético, `1`/`3`/`3`.

O fluxo foi validado em navegador (CDP) contra `http://localhost:3000`:
`/` → `/login`; senha errada exibe `Usuário ou senha inválidos.`; login de
`owner@example.test` abre `/app`; o diálogo `Sair da demonstração?` confirma
o logout e leva a `/login`; `/` volta a redirecionar para `/login`; login de
`mentee@example.test` abre `/app` sem exibir a identidade anterior. Um teste
preliminar usando `127.0.0.1` não passou no gate pós-logout; **hipótese não
confirmada**: diferença de host em relação a `AUTH_URL=http://localhost:3000`.
Com `localhost`, todas as verificações passaram.

O primeiro `npm run build` falhou em `/_global-error` (`useContext` nulo), com
aviso de `NODE_ENV` não padrão. `NODE_ENV=development` foi removido de
`.env.local` (o Next.js define `NODE_ENV` por fase) e, com `.next` limpo, o
build passou: rotas `/`, `/api/auth/[...nextauth]` e `/app` dinâmicas;
`/login` e `/_not-found` estáticas.

Verificação reexecutada: `prisma:validate`, `typecheck`, `lint`,
`npm test` (11 arquivos / 59 testes), `build`,
`npm audit --audit-level=high` (`found 0 vulnerabilities`) e
`git diff --check` — todos limpos.

Estado do Git: `main...origin/main [ahead 2]`, **sem push nesta rodada**. O
arquivo `docs/mgh-design-system/mgh-design-system-01.md` permanece untracked
e preservado. Frentes em aberto inalteradas (ANX-003, consentimento, RPO/RTO,
auditoria renderizada de acessibilidade). Nenhum participante real foi
liberado; a regra §3.6 continua vigente.

### 2026-11-27 — Push autorizado e aplicação local disponível

O usuário autorizou explicitamente o push dos dois commits locais da frente
F0 (`36d8778`, `6001748`) e a atualização documental deste ciclo. Em
conformidade com a regra §3.7, os quatro documentos operacionais foram
atualizados **antes** do commit do registro e do push.

A aplicação pode ser executada localmente com `npm run dev`, que carrega
`.env.local` e `.env`; o acesso é feito por `http://localhost:3000`. O host
`localhost` é o correto para o fluxo de autenticação (o teste com
`127.0.0.1` não passou no gate pós-logout; hipótese registrada na seção
anterior). Nenhuma URL, credencial ou segredo foi versionado.

Próxima frente autorizada: **F1 — preferência de aparência no `User` com
cookie-espelho validado**, sem alterar metodologia, textos canônicos, gates
nem regra de score. O deploy público da casca SaaS depende de decisão
separada (variáveis de ambiente na Vercel e banco compatível); o ambiente
local já atende à demonstração autenticada.

### 2026-11-27 — Restauração legada no Neon (antes da instrução seguinte)

O usuário pediu para "deixar no Neon a aplicação legada, com o usuário
antigo". Como a F0 já havia removido `DemoLogin`/`DemoSession` do código e do
banco, a recuperação foi feita **somente no banco Neon**, sem tocar no
código, sem criar branch e sem deploy:

- Tabelas `demo_logins` e `demo_sessions`, índices e chave estrangeira
  recriados a partir da migration `20261126220000_demo_login` (revisão
  `f20216e`), via `DIRECT_URL` lido de `.env` e injetado só no processo.
- `user01` semeado com hash scrypt recém-gerado a partir da senha informada
  pelo usuário no chat. A senha foi usada apenas em variável de ambiente do
  processo de geração do hash; não foi gravada em arquivo, código, documento
  versionado nem commit, e não foi exibida pelo agente em logs.
- Verificação somente-leitura: `active_user01=1`, formato do hash válido,
  `password_matches=true`, `f1_column_on_neon=0`. Uma sessão legada
  pré-existente foi preservada; nenhum token foi lido ou exibido.

Esta ação é anterior à instrução registrada na seção seguinte e **não será
repetida nem estendida**.

### 2026-11-27 — F1 concluída localmente; Neon reservado para reconstrução

O usuário autorizou **commit e push por feature** e determinou: "agora pode
fazer tudo aqui local... pode fazer push... mas não pode alterar o neon...
deixar tudo pronto depois para refazer o neon com a aplicação". A partir
deste ponto, nenhuma migration, seed, escrita ou verificação será executada
contra o Neon. O código, as migrações e a documentação ficam prontos para
que o banco do Neon seja refeito depois com a aplicação, em decisão separada.

F1 — preferência de aparência, aplicada **somente ao PostgreSQL local**:

- Novo enum `AppearancePreference` (`LIGHT`/`DARK`) e coluna nullable
  `appearance_preference` em `users`; migration
  `20261127180000_appearance_preference` aplicada ao local. `null` significa
  seguir o sistema. A coluna **não existe no Neon**.
- O `User` é a fonte autoritativa. O cookie legível `mgh-appearance` é apenas
  espelho para o script de boot; o valor passa por allowlist (`light`/`dark`)
  e qualquer outro valor é descartado. Sem `localStorage`.
- `setAppearanceAction` valida a entrada com Zod, usa identidade e tenant da
  sessão verificada, grava via repositório tenant-scoped e revalida `/app`.
  O botão sol/lua aplica a troca na hora e reconcilia com o valor salvo.
- `/app` lê a preferência do `User`; `/login` permanece estático. Nenhum
  texto canônico, gate, regra de score ou dado do instrumento foi alterado.
- F3 continuará responsável pelo seletor completo e por
  `Perfil → Aparência`.

Verificação reexecutada antes deste registro:

| Evidência | Resultado |
|---|---|
| `prisma:validate` / `prisma:generate` | schema válido; client v7.10.1 gerado |
| Migration local | 5 migrations; `Database schema is up to date!` |
| `npm run typecheck` / `npm run lint` | limpos |
| `npm test` | 13 arquivos, 67 testes aprovados |
| `npm run build` | compilou; `/`, `/api/auth/[...nextauth]` e `/app` dinâmicos; `/login` e `/_not-found` estáticos |
| `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| `git diff --check` | limpo |
| Navegador (CDP, PostgreSQL local) | sem cookie o tema segue o sistema; alternar muda para claro e grava cookie `light`; recarregar mantém claro; cookie inválido `system` é ignorado |
| Banco local | `owner@example.test` com `appearance_preference = LIGHT` |

O veredito P6 permanece `rework — escopo incompleto`: esta checagem de tema
não substitui leitor de tela real nem crítica visual humana. Nenhum
participante real foi liberado; a regra §3.6 continua vigente.

F1 publicada em `main`: `43adab5` (código, 13 arquivos, 329 inserções,
30 remoções) e `6815414` (registro documental), com push
`265415e..6815414`. O arquivo `docs/mgh-design-system/mgh-design-system-01.md`
foi preservado e passa a ser versionado na F2, por autorização do usuário.

### 2026-11-27 — F2: tokens do MGH Design System v1.0 em CSS

O usuário autorizou a F2. Perguntas feitas **antes** de qualquer escrita e
respondidas pelo usuário:

1. O documento `docs/mgh-design-system/mgh-design-system-01.md` estava
   untracked. Decisão: **incluí-lo no commit** como fonte verificável dos
   tokens; o teste de paridade lê o arquivo no repositório.
2. Ativação do tema: **atributo separado `data-ds="mgh-v1"`**. O
   `data-theme="light|dark"` da Fase A permanece intacto; quando `data-ds`
   não está presente, nenhuma decisão visual muda.
3. Divergência interna do documento nos glows: seção 2.3 traz
   `0 0 20px rgba(..., 0.35)` e a config Tailwind da seção 5 traz
   `0 0 25px rgba(..., 0.3)`. Decisão: **seção 2.3**; a variante da seção 5
   fica registrada como divergência não aplicada.

Entrega: `app/mgh-ds-v1.css`, importado em `app/layout.tsx` **depois** de
`globals.css` (ordem confirmada no guia de CSS do Next.js instalado). A
camada contém primitivos `--mgh-ds-primitive-*` transcritos do documento,
alias semânticos que redirecionam os nomes já usados pela superfície e alias
exclusivos do DS para uso futuro. Nenhum componente, boot script, gate,
texto canônico, regra de score, migration ou dado do banco foi alterado.
`data-ds` ainda não é definido pela aplicação: a F3 decide o seletor.

Contrastes dos pares descritos no documento, **calculados por código** com
sRGB/WCAG (não são valores definidos pela metodologia): branco/obsidian-950
19,22:1; roxo/obsidian-950 4,54:1; roxo/obsidian-900 4,22:1;
ciano-claro/obsidian-900 8,33:1; esmeralda/obsidian-800 6,86:1;
rosa/obsidian-950 5,11:1; roxo-glow/obsidian-800 3,06:1 (não texto).

**FINDING registrado, sem correção silenciosa:** o documento define
`text-white` sobre `purple-electric` no botão primário; o cálculo dá
4,23:1, abaixo de 4,5:1 para texto normal. A F2 transcreve a decisão do
documento e não troca a cor. A resolução cabe à autoridade de design na F3.
Também ficou registrado que `body` mantém `font-family` do P6
(`system-ui`); a família do DS está disponível como token para a F3.

Verificação reexecutada antes deste registro:

| Evidência | Resultado |
|---|---|
| `npm test` | 14 arquivos, 75 testes aprovados |
| `npm run typecheck` / `npm run lint` | limpos |
| `npm run build` | compilou; `/`, `/api/auth/[...nextauth]` e `/app` dinâmicos; `/login` e `/_not-found` estáticos |
| `npm audit --audit-level=high` | `found 0 vulnerabilities` |
| `npm run prisma:validate` | schema válido |
| `git diff --check` | limpo |
| Navegador (CDP, `/login`) | sem `data-ds`, superfície clara P6 e corpo 16px; com `data-ds`, superfície `rgb(11, 14, 27)`, texto `rgb(255, 255, 255)` e corpo 14px; `data-theme="dark"` + `data-ds` mantém os valores do DS; remover `data-ds` restaura o tema anterior |

Nenhuma operação foi feita contra o Neon. O servidor de desenvolvimento foi
encerrado e `next-env.d.ts` foi revertido após a checagem em navegador.
O veredito P6 permanece `rework — escopo incompleto`: checar variáveis
computadas não substitui leitor de tela real nem crítica visual humana.

Commit da F2 em `main`: `0a030c4` (5 arquivos, 703 inserções, incluindo o
documento de origem agora versionado). Push autorizado neste ciclo, após o
registro documental. Nenhuma operação contra o Neon foi feita na F2.

Servidor de desenvolvimento deixado **ligado e destacado do terminal** a
pedido do usuário, para testes manuais: `http://localhost:3000`, PID `37392`,
log em `C:\Users\promo\AppData\Local\Temp\opencode\mgh-dev-server.out.log`.
O `next dev` regenerou `next-env.d.ts` apontando para `.next/dev/types`; o
arquivo foi revertido para a versão versionada e o `git status` ficou limpo.

### 2026-11-27 — Rotação da credencial sintética no banco local

O usuário precisou entrar para testar e autorizou gerar uma nova senha
sintética **somente no PostgreSQL local** (`mgh_local`, via `DIRECT_URL` de
`.env.local`). O Neon não foi tocado. A senha anterior não era recuperável:
um hash scrypt não é reversível e o valor em claro nunca foi versionado.

- Nova senha gerada fora do repositório, exibida **uma única vez** ao usuário
  no chat e guardada apenas como hash scrypt em `AUTH_SEED_PASSWORD_HASH`
  (`.env.local`, fora do Git) e em `auth_credentials`.
- Seed idempotente executado sem `--env-file=.env` (que carregaria as URLs do
  Neon): `node prisma/seed-auth.mjs` com `DIRECT_URL` e
  `AUTH_SEED_TENANT_ID` lidos de `.env.local`. Resultado:
  `Auth seed: ok (3 identidades sintéticas)`.
- Verificação em banco: as três credenciais (`owner@example.test`,
  `mentee@example.test`, `admin@example.test`) estão `active: true` e
  `passwordMatches: true` para a nova senha.
- Verificação em navegador (CDP): cookies limpos, login com
  `owner@example.test` e a nova senha resultou em `/app`, sem erro.
- Nenhum segredo foi escrito em código, documento, log de commit ou arquivo
  temporário versionado; os scripts temporários de verificação foram
  removidos.

### 2026-11-27 — Correção do `CONTINUAR` antes da hidratação

O usuário relatou que, em determinadas condições, as caixas de consentimento
apareciam marcadas mas o botão `CONTINUAR` permanecia desabilitado.

- Causa diagnosticada: um clique no DOM antes da hidratação do React mudava o
  `checked` dos inputs, mas o estado `accepted` do componente continuava
  `false`. O botão era calculado apenas desse estado.
- Correção em `components/consent-gate.tsx`: refs para os inputs, `useEffect`
  de montagem que sincroniza o estado com o que o navegador já exibe e
  revalidação do DOM no `handleSubmit` antes de chamar `onDecision("accept")`.
- Verificação em navegador com clique real: `checked: [true, true]`,
  `CONTINUAR` habilitado e avanço para `MAPA DE GOVERNO HUMANO™`, sem erros de
  console. Nenhum texto canônico, ID, SELF, consentimento, versão, gate ou
  regra de score foi alterado.
- Estado naquele ponto: correção pronta e validada, sem commit.

### 2026-11-27 — Kit de design instalado globalmente

O usuário autorizou a instalação do pacote de skills e agentes de interface:

- 33 skills em `C:\Users\promo\.config\opencode\skills\external`, 1 agente
  `interface-reviewer` em `.config\opencode\agents\external`, 84 referências
  `DESIGN.md` e servidor MCP `awwwards` registrado no `opencode.json` global.
- Provenância e licenças das fontes estão em `PROVENANCE.md`. Nenhum texto
  canônico do MGH foi importado de fonte externa.
- SkillSpector com `--no-llm` avaliou 60 skills: nenhuma passou do gate 60.
  Maior pontuação foi `26 MEDIUM`; `oil-ui` pontuou `0`.
- Para a F3 foram selecionadas `designing-frontend-interfaces`,
  `reviewing-interface-quality`, `applying-themes` e `oil-ui`. O MCP
  `awwwards` foi usado apenas em busca preliminar, sem resultado aplicável;
  nenhuma decisão visual foi copiada de site externo.

### 2026-11-27 — Diagnóstico local vs. rede

- O usuário confirmou que `http://localhost:3000` está funcionando e pediu
  para manter `npm run dev` ligado para testes manuais. O problema relatado
  na rede ficou fora de escopo nesta rodada, por decisão do usuário.
- Servidor reiniciado: PID atual `24092`, listener na porta 3000. O log segue
  em `C:\Users\promo\AppData\Local\Temp\opencode\mgh-dev-server.out.log`.
- O Chrome CDP usado nos testes é headless e separado da aba visível do
  usuário (`--user-data-dir=...\chrome-mgh`). Nele, tema, `Sair`, diálogos,
  estados estruturais e botão `Entrar` passaram com clique real e
  programático, sem exceção de hidratação.
- Teste de host: `/login` em `127.0.0.1:3000` e `192.168.0.108:3000` exibiu
  o erro genérico esperado para senha inválida. Esses hosts não explicam o
  comportamento relatado na rede.
- Console do usuário continha apenas mensagens normais: React DevTools,
  `[HMR] connected`, `[Fast Refresh]` e `favicon.ico 404` (inofensivo).
- Nenhuma alteração foi feita contra o Neon.
