---
name: plano-colaboradores-e-grants
description: Plano executável da frente de cadastro de profissionais, concessão de instrumentos e troca obrigatória de senha — sem alterar metodologia, gates ou regra de score
source: decisões do usuário nesta sessão + código versionado em main
version: 0.1
status: APROVADO — EM EXECUÇÃO
verified: 2026-11-27
classification: CONFIDENTIAL - METHODOLOGY IP
canonical: false
derived_from:
  - docs/historico.md
  - docs/plano-de-desenvolvimento.md
  - docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md
  - prisma/schema.prisma
  - auth.ts
---

# Plano — Profissionais, concessão de instrumentos e primeira senha (F5.1 proposta)

> Frente aprovada pelo usuário em 27/11/2026 e em execução. Nenhuma linha
> deste plano autoriza alterar metodologia, textos canônicos,
> `lib/config/versions.ts`, `lib/config/gates.ts` nem regra de score. Ao menor
> conflito com fonte canônica, aplica-se a regra §3.6 de `docs/historico.md`:
> parar e perguntar.

---

## 1. Objetivo e correção de escopo

Permitir que o `MENTOR_OWNER` de um workspace cadastre profissionais com login
próprio, conceda ou revogue instrumentos por pessoa e force a troca da senha
temporária no primeiro acesso. O catálogo inicial contém **apenas `MGH`**.

**Correção registrada (regra §3.6):** em mensagem anterior deste plano o
usuário confirmou que colaboradores "não são participantes do instrumento".
Ele corrigiu: *"na verdade ele vai ser um participante do instrumento ... todo
colaborador é um participante dos instrumentos que o MENTOR_OWNER cadastrar em
seu workspace e o MGH é um dos muitos instrumentos que teremos."* A versão
correta é esta. Na Fase A, porém, **participantes reais continuam bloqueados**:
o instrumento segue estrutural, sem persistência de resposta e sem score.

O usuário assumiu a decisão como **autoridade de produto** (distinta da
autoridade metodológica MGH) e pediu persistência de respostas + score com os
textos atuais de `docs/002`. Ao verificar o código, constatou-se que não existe
fonte canônica verificável de regras de score: `ANX-005` em `docs/002` contém
somente o README, e `tests/engine/fixtures.ts` usa IDs `SYNTHETIC_*`. O próprio
usuário decidiu, então: **manter score bloqueado e executar somente
cadastro/grants**. Consequência: `ITEM_BANK_PUBLISHABLE`,
`MGH_ALLOW_REAL_PARTICIPANTS` e demais gates permanecem inalterados.

### Decisões fechadas

| Tema | Decisão |
|---|---|
| Modelo de dados | Reusar `User` + `TenantMembership`; nova tabela tenant-scoped de concessões |
| Login do profissional | Sim, e-mail/senha; hash scrypt em `auth_credentials` |
| Papel do profissional | `MENTEE` (papel já congelado da Fase A) |
| Catálogo | Allowlist em código com a única chave `MGH`; nenhum outro nome inventado |
| Autoridade | Somente `MENTOR_OWNER` concede/revoga |
| Abrangência do dono | Todos os profissionais do tenant; outros `MENTOR_OWNER` fora do alcance |
| Cadastro | Formulário direto; senha temporária gerada no servidor e exibida uma única vez |
| Primeira senha | Troca obrigatória; bloqueio total de `/app` até a troca |
| Sem grant | `/app` sem o card do MGH; link oculto e rota bloqueada no servidor |
| Participantes reais | Continuam bloqueados; sem persistência de resposta, score ou agregados novos |
| Neon | Somente com autorização explícita no momento da execução; local primeiro |

### Fora de escopo (bloqueios registrados, não resolvidos aqui)

- Persistência de `ResponseRaw`/`DerivedScoreRun` para participantes reais.
- `ANX-003` (`SOURCE_REQUIRED`), `ANX-005` (somente README), `BANK-0.2 = DRAFT`.
- `OPEN-LEGAL-001/002` — consentimento e Privacy Notice finais.
- `OPEN-TEN-001`, RPO/RTO com restore testado, leitor de tela real.
- Veredito P6 permanece `rework — escopo incompleto`.

---

## 2. Dependentes e ordem

```text
Fase 0 (documentos)
   ↓
Fase 1 (schema + migration + allowlist)   ← bloqueia Fase 2 e Fase 3
   ↓                        ↓
Fase 2 (claims + troca de senha)   Fase 3 (cadastro, grants, UI)
   ↓                        ↓
Fase 4 (testes + verificação)
   ↓
Fase 5 (documentação + commit/push autorizados)
```

Nenhuma fase toca `docs/001`, `docs/002/**`, `.env`, `.env.local` nem o Neon sem
autorização explícita.

---

## 3. Fase 0 — Registro documental

**Tarefa 0.1 — Registrar a frente e a correção de escopo.**
Arquivos: `docs/historico.md`, `docs/plano-de-desenvolvimento.md` (linha F5.1,
sem alterar a linha F5 existente), este plano.

**Critérios de aceitação**
- Os quatro documentos operacionais (`historico`, `guia-didatico-fase-a`,
  `plano-de-desenvolvimento`, `horas-de-desenvolvimento`) são atualizados
  antes de qualquer `git commit`/`git push` (regra §3.7).
- O texto registra que a afirmação "colaboradores não são participantes" foi
  corrigida pelo usuário e que os gates não foram alterados.
- Nenhum commit/push é feito sem autorização.

---

## 4. Fase 1 — Modelo de dados, RLS e catálogo

**Tarefa 1.1 — Criar allowlist de instrumentos.**
Novo `lib/tools/catalog.ts`:

```ts
export const WORKSPACE_TOOL_KEYS = ["MGH"] as const;
export type WorkspaceToolKey = (typeof WORKSPACE_TOOL_KEYS)[number];
export function isWorkspaceToolKey(value: unknown): value is WorkspaceToolKey;
export function assertWorkspaceToolKey(value: unknown): WorkspaceToolKey;
```

**Critérios de aceitação**
- `isWorkspaceToolKey("MGH") === true`; qualquer outro valor, `false`.
- Nenhuma chave adicional aparece em código, teste ou documentação.

**Tarefa 1.2 — Adicionar modelos ao `prisma/schema.prisma`.**

```prisma
model ToolGrant {
  id        String    @id @default(uuid()) @db.Uuid
  tenantId  String    @map("tenant_id") @db.Uuid
  userId    String    @db.Uuid
  toolKey   String    @map("tool_key")
  active    Boolean   @default(true)
  createdAt DateTime  @default(now()) @db.Timestamptz(3)
  updatedAt DateTime  @updatedAt @db.Timestamptz(3)
  deletedAt DateTime? @db.Timestamptz(3)
  tenant    Tenant    @relation(fields: [tenantId], references: [tenantId])
  user      User      @relation(fields: [tenantId, userId], references: [tenantId, id])

  @@unique([tenantId, userId, toolKey])
  @@index([tenantId, toolKey])
  @@map("tool_grants")
  @@schema("public")
}
```

Em `AuthCredential`: acrescentar `mustChangePassword Boolean @default(false)
@map("must_change_password")`. A tabela continua **global, fora do RLS**.

Em `Tenant` e `User`: acrescentar o campo de relação `toolGrants ToolGrant[]`.

**Tarefa 1.3 — Migration.**
Nova migration, gerada por `prisma migrate diff --from-config-datasource
--to-schema=prisma/schema.prisma --script` (o shell é não interativo; não usar
`prisma migrate dev` interativo). O SQL deve conter:

- `CREATE TABLE public."tool_grants"` com `FOREIGN KEY` para `tenants` e
  `users` no par `(tenant_id, user_id)`;
- `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` e `FORCE ROW LEVEL SECURITY`;
- quatro policies (`select`, `insert`, `update`, `delete`) idênticas em forma
  às de `users` em `20261125120000_phase_a_foundation/migration.sql:438-449`,
  usando
  `"tenant_id" = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid`;
- `ALTER TABLE public."auth_credentials" ADD COLUMN "must_change_password"
  BOOLEAN NOT NULL DEFAULT false`.

**Critérios de aceitação**
- `npm run prisma:validate` e `npm run prisma:generate` limpos.
- Aplicação **somente no PostgreSQL local** (`npm run prisma:deploy` com
  `DIRECT_URL` de `.env.local` injetada no processo, sem exibir valores).
  Neon não é tocado nesta fase.
- Sem `app.current_tenant_id`, `SELECT` em `tool_grants` retorna `0`; com o
  tenant sintético, retorna apenas as linhas daquele tenant.
- `tests/data/schema.test.ts` e `tests/data/migration-rls.test.ts` passam a
  exigir a tabela, a coluna e as policies.

**Tarefa 1.4 — Contratos da DAL.**
Ampliar `lib/db/types.ts` com o delegate `toolGrant` mantendo `SimpleDelegate`;
registrar o delegate em `asTenantDbClient`/`getAuthDb` conforme o padrão atual.

**Critérios de aceitação**
- Nenhum método novo aceita `tenantId` externo: toda query usa
  `tenantScopedWhere(ctx, ...)` e `withTenantTransaction`.

---

## 5. Fase 2 — Identidade, claim de primeira senha e bloqueio

**Tarefa 2.1 — Propagar `mustChangePassword`.**
`lib/auth/identity.ts`: estender `VerifiedAuthIdentity` com
`readonly mustChangePassword: boolean`, lido da credencial **depois** da
conferência da senha e antes da consulta tenant-scoped. A ordem obrigatória
(documentada no próprio arquivo) permanece: e-mail → senha → membro.

`auth.ts`: `authorize()` devolve `mghMustChangePassword`; callbacks `jwt` e
`session` gravam e expõem o claim.

**Critérios de aceitação**
- Senha errada continua rejeitada antes de qualquer consulta com RLS
  (`tests/auth/identity.test.ts`).
- Credencial inativa, membro inativo e papel fora da allowlist continuam
  rejeitados.
- Nenhum claim novo entra em `createTenantContextFromVerifiedClaims` — o
  contrato `VerifiedTenantContext` permanece com quatro campos.

**Tarefa 2.2 — Rota de troca fora do workspace.**
Nova rota `/trocar-senha` (fora de `/app`, para que `app/app/layout.tsx` possa
redirecionar incondicionalmente). Página com formulário de senha atual + nova
senha, usando o padrão de `components/login-form.tsx`.

`app/actions/password.ts` (server action):
- validar com Zod: senha atual e nova não vazias, no máximo 128 caracteres
  (mesmos limites de `app/actions/auth.ts:11-14`); nova diferente da atual;
- usar `requireVerifiedSession()` para obter `userId`/`tenantId`;
- conferir a senha atual com `verifyPassword` e gravar novo hash scrypt em
  `auth_credentials` filtrando por `userId` **e** `tenantId` da sessão;
- marcar `mustChangePassword = false`;
- chamar `signOut({ redirectTo: "/login" })`: a sessão JWT antiga ainda carrega
  o claim `true`, então a reentrada exige login com a nova senha.

`app/app/layout.tsx`: se `session.user.mghMustChangePassword === true`,
`redirect("/trocar-senha")`.

**Critérios de aceitação**
- Com `mustChangePassword = true`, `/app`, `/app/mgh`, `/app/perfil` e
  `/app/profissionais` redirecionam para `/trocar-senha`.
- Usuário sem o claim navega normalmente.
- A mensagem de erro da troca é genérica; nenhum hash ou senha aparece em
  log, resposta ou documento.
- Nenhuma alteração em `lib/config/versions.ts` ou `lib/config/gates.ts`.

---

## 6. Fase 3 — Cadastro, grants e superfície

**Tarefa 3.1 — Repositórios tenant-scoped.**
Em `lib/db/repositories.ts` (ou módulo `lib/db/tool-grants.ts`, seguindo o
padrão existente):

- `listToolGrants(client, ctx, userId?)`;
- `findToolGrant(client, ctx, userId, toolKey)`;
- `setToolGrantActive(client, ctx, userId, toolKey, active)` via upsert;
- `createCollaborator(client, ctx, input)` — transação única com
  `setTenantSession`, criando `User`, `TenantMembership` (`role: "MENTEE"`,
  `active: true`) e `ToolGrant` (`active: true`).

**Critérios de aceitação**
- `userId` recebido do formulário é sempre filtrado por `tenantScopedWhere`:
  nenhum `findFirst` sem `tenantId`.
- Nenhuma função cria `AuthCredential` dentro da transação tenant-scoped.

**Tarefa 3.2 — Server actions.**
`app/actions/collaborators.ts`:

- `assertOwner(context)` — exige `context.role === "MENTOR_OWNER"`; qualquer
  outro papel retorna erro genérico, sem distinção entre "sem permissão" e
  "inexistente".
- `createCollaboratorAction(_state, formData)`: Zod para `email` (trim,
  lowercase, `email().max(254)`) e `toolKey` via `assertWorkspaceToolKey`.
  Gerar `userId = crypto.randomUUID()` e senha temporária com
  `crypto.randomBytes` fora do banco; gravar apenas
  `hashPassword(temporaryPassword)` em `auth_credentials` com
  `mustChangePassword: true`. Em e-mail duplicado, retornar mensagem genérica.
  Devolver a senha temporária **uma única vez** no estado da action.
- `setToolGrantAction(formData)`: validar `toolKey` pela allowlist; ativar ou
  desativar grant; exigir `MENTOR_OWNER`.

**Critérios de aceitação**
- Nenhum caractere da senha temporária é gravado em banco, arquivo, log,
  commit ou documentação.
- A criação falha fechado se o papel não for `MENTOR_OWNER` ou se o `toolKey`
  não estiver na allowlist.
- Revogar `MGH` não apaga a credencial nem o vínculo `MENTEE`; apenas o grant.

**Tarefa 3.3 — Tela `Profissionais`.**
Nova rota `app/app/profissionais/page.tsx`, visível apenas para `MENTOR_OWNER`
na navegação. Lista do tenant com e-mail (sem PII extra), papel, instrumentos
ativos e ações de concessão/revogação. Formulário de cadastro com e-mail e
seleção única `MGH`.

**Tarefa 3.4 — Aplicar o grant na navegação e nas rotas.**
- `app/app/layout.tsx`: obter grants do usuário da sessão e passar as chaves
  para `components/workspace-nav.tsx`.
- `WorkspaceNav`: manter `Visão geral`, `Perfil` e `Profissionais` (somente
  owner); incluir `MGH` apenas se houver grant ativo.
- `app/app/mgh/page.tsx`: chamar `requireToolAccess("MGH")`; sem grant,
  `redirect("/app")`.
- `app/app/page.tsx`: renderizar o card "Módulo ativo" e o botão `Abrir MGH`
  somente com grant ativo; sem grant, manter KPIs e o campo obrigatório
  **"O que estes dados NÃO permitem dizer:"**.

**Critérios de aceitação**
- Link oculto **e** rota bloqueada no servidor: acesso direto a `/app/mgh` sem
  grant redireciona para `/app`.
- Dashboard continua exibindo somente KPIs operacionais e nenhum dado de
  pessoa, score, D/I/S/C ou resposta individual.
- Sem `data-ds`, a aparência P6 continua intacta; a F2 permanece passiva.

---

## 7. Fase 4 — Testes e verificação

**Tarefa 4.1 — Testes unitários.**
- `tests/tools/catalog.test.ts` — allowlist somente `MGH`.
- `tests/auth/identity.test.ts` — novo claim sem alterar a ordem de verificação.
- `tests/collaborators/*.test.ts` — owner vs. não owner; criação tenant-scoped;
  grant ativo/inativo; senha temporária nunca persistida em claro.
- `tests/data/migration-rls.test.ts` — `FORCE RLS` e policies de `tool_grants`.

**Tarefa 4.2 — Verificação reexecutada antes de declarar conclusão.**
`prisma:validate`, `prisma:generate`, `typecheck`, `lint`, `npm test`, `build`,
`npm audit --audit-level=high`, `git diff --check`.

**Tarefa 4.3 — Navegador (somente local, `http://localhost:3000`).**
- Login do `MENTOR_OWNER` real (`devtiagoabreu@gmail.com`) → cadastro de
  profissional com senha temporária → exibição única da senha.
- Login do profissional → bloqueio total em `/app` → troca de senha → logout →
  login com a nova senha → `/app`.
- Sem grant: card e link ausentes; `/app/mgh` redireciona para `/app`.
- Com grant: `/app/mgh` abre a sequência canônica em memória, sem persistência.
- Tentativa de acessar `/app/profissionais` como `MENTEE` falha fechado.

**Critérios de aceitação**
- Nenhuma verificação contra o Neon sem autorização explícita na rodada.
- Nenhum participante real é liberado; o instrumento não salva resposta nem
  calcula score.

---

## 8. Fase 5 — Documentação e publicação

**Tarefa 5.1 — Antes de commit/push**, atualizar os quatro documentos
operacionais e criar `docs/evidencias/f5-1.md` com os resultados da Fase 4.

**Tarefa 5.2 — Commits separados por feature**, nesta ordem:
1. `feat(f5.1)`: schema, migration, allowlist e DAL;
2. `feat(f5.1)`: claim de primeira senha, rota de troca e bloqueio;
3. `feat(f5.1)`: cadastro, grants, actions e UI;
4. `docs(f5.1)`: registros e evidências.

**Critérios de aceitação**
- Push somente em `origin` (`git@github.com:devtiagoabreu/mgh.git`).
- Nenhum segredo, `.env`, `.env.local` ou arquivo temporário versionado.
- `git status --short --branch` limpo ao final.

---

## 9. Riscos e rollback

| Risco | Mitigação |
|---|---|
| Claim JWT antigo com `mustChangePassword=true` após a troca | `signOut` ao final da troca; novo login reconstrói o JWT |
| Criar `auth_credentials` fora da transação tenant | Ordem explícita: transação tenant cria User/Membership/Grant; credencial global depois |
| Vazamento da senha temporária | Gerada no servidor, exibida uma vez no estado da action; nunca em log/banco |
| Grant perdido na revogação | Upsert de `active=false`; nunca `delete` |
| Confusão com participantes reais | Texto e testes reforçam que o instrumento permanece em memória e sem score |
| Role `MENTEE` usado para profissional | É decisão do usuário; nenhum papel novo é criado e `MENTOR_ASSISTANT` continua `DEFERIDO` |
| Migration no Neon | Não executada nesta frente sem autorização explícita |

**Rollback:** reverter os commits da frente e, se já aplicada, executar
migration inversa no local removendo `tool_grants` e
`auth_credentials.must_change_password`. Nenhum dado de participante é afetado,
pois a frente não cria respostas nem scores.

---

## 10. Aprovação

O usuário aprovou este plano em 27/11/2026 com a resposta "pode fazer". A
execução segue uma tarefa por vez, com evidência antes de cada avanço. A
aprovação não altera os bloqueios listados na seção 1: gates, método de score,
textos canônicos e participantes reais permanecem como estavam.
