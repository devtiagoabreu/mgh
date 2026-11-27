---
name: plano-de-desenvolvimento
description: Evolução do projeto e plano completo de execução da Fase A (Pilot Core)
source: docs/002/00-mapa-de-fatiamento.md
version: 0.1
status: APPROVED_FOR_EXECUTION
verified: 2026-11-25
classification: CONFIDENTIAL - METHODOLOGY IP
canonical: false
derived_from:
  - docs/002/context.md
  - docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md
---

# Plano de Desenvolvimento e Evolução do Projeto

> Documento operacional **derivado** de `docs/002`. Ele não substitui anexos
> canônicos (`ANX-*`), não autoriza conteúdo metodológico novo e não abre
> nenhum item `OPEN-*`. Em conflito, vale: anexo canônico > documento narrativo
> > histórico de conversa.

---

## 0. Regras de execução

1. Uma tarefa por vez, com evidência observável antes de qualquer afirmação de
   conclusão (skill `executing-plans`).
2. Nada de código entra sem procedência: `source`, `version`, `status`,
   `verified`.
3. Nenhum texto de cenário, opção, SELF ou consentimento é inventado,
   parafraseado ou reconstruído.
4. `docs/001` é acervo binário original e permanece intacto.
5. `docs/exemplo_projeto_mgh.txt` era dump de conversa de IA: foi descartado
   em 26/11/2026 com autorização do usuário e não deve ser recriado.
6. Antes de **todo `git commit` e todo `git push`**, atualizar os quatro
   documentos operacionais: `docs/historico.md`,
   `docs/guia-didatico-fase-a.md`, `docs/plano-de-desenvolvimento.md` e
   `docs/horas-de-desenvolvimento.md` (regra §3.7 do histórico).

---

## 1. Estado atual — 2026-11-27

| Item | Estado |
|------|--------|
| Repositório | `devtiagoabreu/mgh`, autenticação SSH como `devtiagoabreu` |
| `main` | Contém toda a Fase A; branches de feature removidas após merge. Nenhum PR aberto |
| Contexto canônico | `docs/002` (11 fontes, 47 fatimentos, 11 índices) |
| Acervo original | `docs/001` (11 binários, intactos) |
| Aplicação | Workspace protegido por Auth.js (e-mail/senha); instrumento canônico renderizado, sem score/IA/resultado. Fluxo `/` → `/login` → `/app` → logout validado em navegador |
| Ambiente | `.env` local criado (não versionado), `.env.example` versionado com chaves de Auth.js sem valores; `AUTH_TRUST_HOST=true` usado apenas no processo do servidor local |
| Plano | P0, P1/P2, P5 e P6 estrutural verificados; integração final green em `docs/evidencias/integracao-final.md`. F0 implementada, com migration aplicada, seed sintético executado e fluxo validado; commit/push ainda não autorizados |
| Horas | `docs/horas-de-desenvolvimento.md`: estimativas por feature, nunca medição nem cobrança |
| Acessibilidade | Gates automatizados verdes; veredito P6 segue `rework — escopo incompleto` até leitor de tela e crítica visual humana |

**Bloqueios que permanecem abertos:** `ANX-003` DRAFT (0/48 textos exatos,
0 IDs canônicos), `REQ-INST-012 = WAITING_BANK`, `OPEN-INST-001`,
`OPEN-LEGAL-001/002`, `OPEN-TECH-006`, `OPEN-TEN-001`. F0 está validada em
banco e navegador, mas permanece sem commit/push por decisão do usuário nesta
rodada.

---

## 2. Decisões fundantes (congeladas para a Fase A)

### 2.1 Produto e metodologia

- Usuário é o **desenvolvedor/mentor**, não solicitante da metodologia MGH™.
- Escopo: **apenas Fase A — Pilot Core**. Todo o resto está em Parking Lot.
- RAW imutável, append-only. Nunca sobrescrever, nunca apagar.
- 48 cenários, 56 respostas pontuáveis, ordem fixa; `PC-001` primeiro,
  `PC-011R` último.
- DR sem randomização. SELF, feedback e RG fora do score.
- Runs versionados e recomputáveis por `runId + versão`.
- IA fora da Fase A: sem scoring, sem interpretação, sem classificação.
- Onda 0 não gera relatório nem perfil ao participante: confirmação neutra.

### 2.2 Arquitetura (`PROD-TEN-001`)

- SaaS multitenant; tenant = workspace do mentor/programa.
- Primeiro `MENTOR_OWNER`: Alisson Campos. Mentorados: `MENTEE`.
- Papéis: `PLATFORM_ADMIN`, `MENTOR_OWNER`, `MENTEE`.
  `MENTOR_ASSISTANT = DEFERIDO` — não implementar.
- Shared DB + shared schema + `tenant_id`; RLS `ENABLE + FORCE`.
- `tenantId` somente de sessão/JWT verificada. Nunca de header, query, body ou
  parâmetro de rota. Falha fechada.
- DAL sempre com `where: { tenantId: ctx.tenantId }`; config de sessão via
  `set_config('app.current_tenant_id', $1, true)` parametrizado.
- Default técnico: mentor vê somente agregados. Individual depende de MGH +
  Legal (`OPEN-TEN-001`).
- Branches Neon `preview/pr-*`, `qa/*`, `recovery/*`: schema-only + seed
  sintético. Nunca ramificar produção com PII.

### 2.3 Stack

TypeScript · Next.js (App Router) · NeonDB/Postgres · Prisma · Zod · Vitest ·
Vercel · GitHub. Runtime `nodejs` nas rotas que usam transação.

### 2.4 Governança humana (persona `psicologo-organizacional`)

- MGH não é terapia, diagnóstico, laudo nem decisão de RH automatizada.
- Decisão humana nomeada: nome, data e justificativa.
- Segurança psicológica: recusa, pausa e saque sem penalidade; silêncio não é
  concordância.
- Nível de evidência colado à linguagem: E1 sinal, E2 hipótese, E3
  consistência. A linguagem nunca aumenta o nível de evidência.
- Forbidden Claims: inteligência, competência, maturidade, caráter, saúde
  mental, diagnóstico, job fit, hiring, promoção, resiliência, estabilidade,
  compatibilidade percentual — entre outros.
- Gate de crise: sinal em campo livre é evento de segurança da pesquisa, não
  entrada de score; dono humano nomeado, diferente do mentor se houver
  conflito.
- Agregados com `n ≥ 5` e checagem de inferência por subtração.

---

## 2.5 Evolução SaaS aprovada (2026-11-27)

Ordem aprovada pelo usuário para transformar a demonstração em casca SaaS
multitenant com o MGH como módulo interno sob governança. Ela **não** altera
metodologia, gates, textos canônicos nem o plano P0–P7 abaixo.

| Frente | Escopo | Estado |
|---|---|---|
| F0 | Auth.js com Credentials (e-mail/senha), credencial global e sessão tenant-scoped | Validada em banco e navegador; login legado removido; aguardando autorização de commit/push |
| F1 | Preferência de aparência no `User`, com cookie-espelho validado | Não iniciada |
| F2 | Tokens do MGH Design System v1.0 traduzidos para CSS | Não iniciada |
| F3 | Seletor de tema no cabeçalho e em `Perfil → Aparência` | Não iniciada |
| F4 | Shell SaaS em `/app/...`, com MGH como único módulo ativo | Não iniciada |
| F5 | Cadastros sintéticos de tenant, membros e coorte; planos sem cobrança | Não iniciada |
| F6 | MGH em governança: sem score, KPIs D/I/S/C, agregados ou respostas individuais | Não iniciada |

---

## 3. Plano completo — Fase A

### P0 — Contrato e configuração

**Tarefas**

- Fixar versões: `MGH-P1.0`, `BANK-0.2 (DRAFT)`, `SCORE-P1.0`, `ANX-004 v0.1`,
  `GOLDEN-P1.0`, `ReleaseManifest`.
- Escrever contrato de `tenantId` (origem exclusiva, falha fechada).
- Matriz de papéis e registro de `MENTOR_ASSISTANT = DEFERIDO`.
- Registrar `BANK-0.2 = DRAFT` e `REQ-INST-012 = WAITING_BANK`.

**Critérios de aceitação**

- Uma única lista de versões referenciada por código, testes e documentação.
- Nenhuma rota, DAL ou teste obtém `tenantId` de entrada do cliente.
- `.env.example` contém todas as variáveis; `.env` não é versionado.

**Gate `G0`:** versão, papel ou origem de tenant ambígua → não iniciar P1.

---

### P1 — Identidade, tenant e RBAC/RLS

**Tarefas**

- Modelar `Tenant`, `User`, `TenantMembership` e `ParticipantIdentity` no Vault.
- Sessão/JWT com `tenantId + role` verificados; `401/403` sem claim.
- RLS `ENABLE + FORCE` em toda tabela de tenant, com políticas separadas de
  `SELECT/INSERT/UPDATE/DELETE`.
- `AuditLog` com `actor`, `action`, `tenant_scope`, `reason`, `timestamp_utc`.

**Critérios de aceitação**

- Claim válido vê somente linhas do próprio tenant.
- Claim ausente falha fechado; `tenantId` forjado é ignorado ou rejeitado.
- Query de catálogo confirma `FORCE RLS` em todas as tabelas de tenant.
- Toda operação com service role gera `AuditLog`.

**Gate `G1`:** RLS incompleto, service role sem auditoria ou autorização apenas
no cliente → parar.

---

### P2 — Modelo de dados e DAL

**Tarefas**

- Catálogo versionado (`InstrumentVersion`, `ItemBankVersion`,
  `ScoringVersion`, `SequenceVersion`, `GoldenDatasetVersion`).
- `Run`, `ResponseRaw`, `ResponseEvent`, `DerivedScoreRun/Value`, `ChangeLog`,
  `Occurrence`.
- RAW e eventos sem `updated_at`; `UPDATE/DELETE` bloqueados.
- DAL exige contexto autenticado; proibir `$queryRaw` fora do DAL.
- Singleton do Prisma + string pooled do Neon.

**Critérios de aceitação**

- Nenhuma tabela analítica contém nome, e-mail ou identificador direto.
- Tentativa de mutar RAW falha por policy/trigger.
- Score derivado é separado e recomputável por `runId + versão`.
- Teste cross-tenant negativo passa.

**Gate `G2`:** PII em tabela analítica, RAW mutável ou versão ausente → não
iniciar P3.

---

### P3 — Registry estrutural e sequência

**Tarefas**

- Registrar contagens: 24 PC, 8 PRC Forced, 4 grupos/12 ratings, 12 DR, 8
  SELF, 6 RG.
- Ordem de `ANX-004`; `PC-001` primeiro, `PC-011R` último.
- `randomizable=false` para DR; `scored=false` para SELF/feedback/RG.
- Nenhum campo de texto preenchido; nenhum `option_id` canônico inventado.

**Critérios de aceitação**

- Registry com versões e contagens, textos vazios.
- Nenhum cálculo inclui SELF, feedback ou RG.
- `WAITING_BANK` continua explícito.

**Gate `G3`:** qualquer wording inventado publicado → reverter e marcar
`SOURCE_REQUIRED`.

---

### P4 — Eventos, respostas e fechamento idempotente

**Tarefas**

- Validação Zod: `option_id` apresentado, versão compatível, run em andamento,
  ordem respeitada.
- Autosave com estado “salvo/falhou”; falha impede avanço.
- Voltar antes do submit gera `ResponseEvent`; após `COMPLETED`, edição negada.
- Transação única: `COMPLETED + lock + FINAL_SUBMIT`; submit duplicado
  idempotente.

**Critérios de aceitação**

- 55/56 → `ASSESSMENT_NOT_READY`, run permanece `IN_PROGRESS`.
- 56/56 → um único job de score; `OPTION_NOT_PRESENTED` e `VERSION_MISMATCH`
  sem output oficial.
- Invalidação preserva RAW e auditoria.

**Gate `G4`:** fechamento duplicado ou RAW sobrescrito → não iniciar P5.

---

### P5 — Score Engine puro e golden cases

**Tarefas**

- Função pura com entrada = RAW + versões + regras; saída tipada ou erro
  (`VERSION_MISMATCH`, `CONFIG_ERROR`, `INCOMPLETE_INPUT`, `UNKNOWN_OPTION`).
- Sem DB, rede, IA, `Date.now()`, `Math.random()`; serialização canônica.
- Golden cases de `GOLDEN-P1.0`: completo, 55/56, opção desconhecida, versão
  divergente, regra ausente, SELF/RG injectados, DR reordenado, recomputação,
  nova versão.

**Critérios de aceitação**

- Testes passam sem banco, rede ou relógio.
- Mesmo `runId + versões` gera output idêntico.
- Erro gera status, nunca score parcial.
- `SELF`, feedback e RG não aparecem na entrada.

**Gate `G5`:** golden falhando ou não determinismo → não iniciar P6.

---

### P6 — Superfície do participante e consentimento estrutural

**Tarefas**

- Fluxo: link opaco → consentimento versionado → contexto → 48 cenários (uma
  tela por cenário, progresso `x/48`) → SELF-01..08 → feedback → confirmação
  neutra.
- Tokens em três camadas; light/dark; 1280×800 e 390×844; WCAG 2.2 AA.
- axe + auditoria manual (teclado, leitor de tela, 200/400%, forced colors).
- Sem dark patterns, gamificação, pré-seleção ou progresso `/56`.
- Gate de crise com dono humano nomeado e contatos revalidados.

**Critérios de aceitação**

- Fluxo não entra em `IN_PROGRESS` sem aceite registrado.
- Token inválido retorna mensagem neutra.
- Zero P0 de acessibilidade; crítica visual com `aprovar`/`rework`.
- Placeholders obrigatórios: `[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]`.

**Gate `G6`:** `OPEN-LEGAL-*`, `OPEN-INST-001` ou `ANX-003` pendentes → nenhum
participante real.

---

### P7 — Admin agregado, governança e release

**Tarefas**

- Dashboard somente agregados, `n ≥ 5`, checagem por subtração e campo
  “o que estes dados **não** permitem dizer”.
- Exportações pseudonimizadas e auditadas; individual bloqueado por
  `OPEN-TEN-001`.
- Forbidden Claim Registry e níveis E1/E2/E3 aplicados à linguagem.
- Deploy Vercel, `prisma migrate deploy`, branches Neon sintéticos,
  `Cache-Control: private, no-store`.
- Propor RPO/RTO (`OPEN-TECH-006`) e executar restore testado.

**Critérios de aceitação**

- Mentor vê agregados e recebe `403` em resposta individual.
- Restore executado com sucesso; nenhuma PII em preview/log/cache.
- Release Manifest completo; evidências de `G0`–`G6` anexadas.

**Gate `G7`:** sem restore testado e RPO/RTO decidido, Fase A não é declarada
pronta.

---

## 4. Orquestração de agents e skills

| Frente | Skills | agents | Escopo de escrita |
|--------|--------|--------|-------------------|
| Fundação | `executing-plans`, `project-setup`, `nextjs-development` | executor principal | configs, `app/`, CI |
| Dados | `prisma-orm`, `rls-tenancy-pattern`, `multi-tenant-saas`, `rbac-authorization` | agent de arquitetura | `prisma/`, `lib/db/`, `lib/auth/`, `tests/data/` |
| Motor | `clean-architecture`, `tdd`, `unit-testing` | agent de backend | `lib/engine/`, `tests/engine/` |
| Design | `design-system`, `a11y-audit`, `ui-visual-craft`, `design-review-critic` | agent de design | `app/`, `components/`, `styles/` |
| Governança | `people-governance-psychology`, `mental-health-crisis-protocol`, `evidence-based-scales` | persona `psicologo-organizacional` | `docs/governanca/` |

Regra de paralelismo: escopos de escrita não se sobrepõem; quando houver
sobreposição, usar worktrees (`git-worktrees`) e integrar por branch.

---

## 5. Riscos, mitigação e rollback

| Risco | Mitigação | Rollback |
|-------|-----------|----------|
| Vazamento cross-tenant | `FORCE RLS`, DAL, claim verificado, `AuditLog`, testes negativos | `git revert` da migration + feature flag |
| RAW mutado | Sem `updated_at`, trigger/policy, invalidação por evento | Restaurar `recovery/*`; nunca editar RAW |
| Score não determinístico | Função pura, golden no CI, hashes | Reverter versão do scoring; manter derivado antigo |
| Wording inventado | `BANK-0.2 = DRAFT`, registry vazio, checklist de PR | Reverter commit e marcar `SOURCE_REQUIRED` |
| PII em DEV/preview | Seed sintético, varredura de log/URL/cache | Apagar branch de preview |
| A11y/dark pattern | axe + manual, zero P0, `design-review-critic` | `rework` obrigatório |
| Legal/saúde | Gate de crise humano, consentimento bloqueado | Suspender O0 e acionar humano nomeado |

---

## 6. Evolução do projeto

| Data | Entrada |
|------|---------|
| 2026-11-25 (1) | `docs/001` inventariado; 11 fontes binárias preservadas. |
| 2026-11-25 (2) | 11 fontes convertidas e fatiadas em 47 partes + 11 índices em `docs/002`; validação `exact=True`, `coverage=True`, `TOTAL_PARTS=47`. |
| 2026-11-25 (3) | `docs/002/context.md`, `00-mapa-de-fatiamento.md` e `llms.txt` criados; resumos duplicados removidos. |
| 2026-11-25 (4) | Decisão `PROD-TEN-001` registrada: SaaS multitenant, RLS `FORCE`, DAL, papéis e default agregado. |
| 2026-11-25 (5) | Commit `de13285` enviado; `main` atualizado por fast-forward; remoto convertido para SSH `devtiagoabreu`. |
| 2026-11-25 (6) | Análise de `docs/exemplo_projeto_mgh.txt`: classificado como dump de IA, não canônico; regras inventadas e bugs identificados. |
| 2026-11-25 (7) | Plano consolidado por 3 agents (arquitetura, design, psicologia/governança) e aprovado para execução. |
| 2026-11-25 (8) | Branch `feature/mgh-phase-a-foundation` criada; `.env`/`.env.example` e este documento criados; bootstrap Next.js iniciado. |
| 2026-11-25 (9) | P0 concluído: versões/gates/papéis/tenant contratados; `audit`, `typecheck`, `test` (11), `lint`, `build` e `diff --check` verdes; evidência em `docs/evidencias/p0.md`. |
| 2026-11-25 (10) | P5 concluído por agent: motor puro, 9 golden cases, 14 testes, sem relógio/rede/IA; evidência em `docs/evidencias/p5.md`. |
| 2026-11-25 (11) | Governança humana documentada: gate de crise, E1/E2/E3, checklist de consentimento/privacidade; divergência `REPEAT_*` registrada como `SPECIFICATION CONFLICT`; evidência em `docs/evidencias/governanca.md`. |
| 2026-11-25 (12) | P6 estrutural concluído: tokens em 3 camadas, light/dark, componentes com placeholders sintéticos; veredito de design `rework — escopo incompleto` até auditoria renderizada; evidência em `docs/evidencias/p6-design.md`. |
| 2026-11-25 (13) | P1/P2 concluídos: 17 modelos tenant-scoped, `FORCE RLS`, trigger append-only, DAL parametrizado, seed sintético; 23 testes de dados; evidência em `docs/evidencias/p1-p2.md`. |
| 2026-11-25 (14) | Integração final verde: `audit`, `prisma validate/generate`, `lint`, `typecheck`, `test` (48), `build` e `diff --check`; evidência em `docs/evidencias/integracao-final.md`. Commits por feature preservados. |
| 2026-11-26 (15) | Controles de saída revisados: modal com `Encerrar sessão` e `Reiniciar sequência MGH`, cabeçalho com usuário/`Sair` à direita, ícones de 32×32 para “i” e tema e “i” de consentimento dentro do cartão. 48 estados reauditados e Lighthouse `1`; código em `d430a12`, com registro documental e push autorizados nesta rodada. |
| 2026-11-27 (16) | F0 implementada localmente: Auth.js Credentials com e-mail/senha, `auth_credentials` global sem RLS, resolução de identidade com senha conferida antes do acesso tenant-scoped, sessão JWT revalidada, rotas `/login`, `/api/auth/[...nextauth]`, `/` e `/app`. Verificação local verde (12 arquivos / 62 testes); migration e seed ainda não aplicados, sem commit ou push. |
| 2026-11-27 (17) | F0 validada: migration aplicada ao Neon (`Database schema is up to date!`), seed sintético idempotente (3 identidades), senha rotacionada e exibida uma única vez, fluxo `/` → `/login` → `/app` → logout verificado em navegador com CDP. Commit e push continuam suspensos por decisão do usuário. |
| 2026-11-27 (18) | Login legado removido em feature separada: modelos, tabelas, seed, script, variáveis e testes `demo-password` excluídos; migration `20261127150000_drop_demo_login` aplicada. Verificação verde (11 arquivos / 59 testes); commit e push seguem suspensos. |

---

## 7. Congelado até decisão explícita

- Textos e IDs de `ANX-003` / `BANK-0.2`.
- Rótulos finais de SELF-01..08 (`OPEN-INST-001`).
- Consentimento e Privacy Notice finais (`OPEN-LEGAL-001/002`).
- Participantes reais na Onda 0.
- Acesso do mentor a respostas individuais (`OPEN-TEN-001`).
- RPO/RTO definitivo (`OPEN-TECH-006`).
- IA, randomização de DR, score com SELF/feedback/RG.
- Parking Lot completo: relatório comercial, Assinatura/Manual externos,
  Mapa de Relação™, Sala de Comando Humana™, dashboard organizacional,
  matching, compatibilidade percentual, app nativo, pagamentos, CRM,
  gamificação, MGH 360™.

---

## 8. Variáveis de ambiente — como preencher

1. Copie `.env.example` para `.env` (já criado).
2. Preencha `DATABASE_URL` (pool) e `DIRECT_URL` (direta) do Neon.
3. Preencha `AUTH_SECRET`, `AUTH_URL` e `AUTH_TRUST_HOST`; `AUTH_SEED_PASSWORD_HASH`
   recebe o hash sintético fora do Git, nunca a senha em texto claro.
4. Não altere os gates `MGH_*` sem decisão registrada.
5. Nunca commite `.env` e nunca cole segredos no chat; informe apenas quais
   variáveis já estão preenchidas. O agente lê o arquivo localmente sem
   exibir os valores.

---

## 9. Próximo passo

F0 está validada em banco e navegador, e o login legado já foi removido com
migration aplicada. O usuário autorizou **commits locais sem push**; os quatro
documentos operacionais foram atualizados antes dos commits. O push continua
sem autorização. Em paralelo, foi confirmado PostgreSQL 16 local em
`127.0.0.1:5432`, mas `scram-sha-256` exige credencial: nenhuma conexão,
role ou banco local foi criado e as URLs não foram trocadas. Depois dos
commits, o próximo passo é F1 (preferência de tema), salvo decisão diferente
do usuário sobre o banco local.
