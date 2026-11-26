---
name: historico
description: Histórico operacional canônico do projeto MGH — decisões, execução, evidências, estado atual e retomada de sessão
source: docs/002/context.md
version: 0.1
status: ACTIVE
verified: 2026-11-25
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
| `REQ-INST-012` | `WAITING_BANK` — faltam textos literais para publicação e E2E |
| `ANX-003` | `DRAFT — SOURCE RECOVERY REQUIRED`; 0/48 cenários e 0 IDs canônicos |
| `OPEN-INST-001` | rótulos/texto final de `SELF-01..08` pendentes |
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
