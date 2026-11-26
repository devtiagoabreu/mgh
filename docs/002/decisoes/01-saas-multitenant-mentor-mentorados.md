---
name: 01-saas-multitenant-mentor-mentorados
description: Decisão PROD-TEN-001 — SaaS multitenant com mentor como dono do tenant e mentorados como participantes
source:
  - "decisão do desenvolvedor — 2026-11-25"
  - "https://alissoncampos.com/ — consultado em 2026-11-26"
version: 0.2
status: CANONICAL_DECISION
verified: 2026-11-26
classification: CONFIDENTIAL
canonical: true
---

# PROD-TEN-001 — SaaS multitenant mentor/mentorados

Esta é uma **decisão de produto e infraestrutura**, não uma alteração da
metodologia MGH™. Ela se soma ao contexto canônico de `docs/002` sem modificar
instrumento, sequência, scoring, regras de interpretação ou Fase A.

## 1. Decisão

O MGH será entregue como **SaaS multitenant**. O tenant é o **workspace do
mentor / programa de mentoria**. O mentor idealizador, **Alisson Campos**, é o
primeiro dono de tenant (`MENTOR_OWNER`) e o autor do guia didático da Fase A
(`docs/guia-didatico-fase-a.md`). Sua atuação como mentor de gestores,
fundador da M2M (Mentoria para Gestores) e criador do GTalk está registrada em
`https://alissoncampos.com/` (consultado em 26/11/2026). **Tiago de Abreu é o
desenvolvedor do projeto**, não o mentor. Os mentorados são participantes
vinculados a exatamente um tenant.

| Conceito | Mapeamento no produto |
|----------|------------------------|
| Tenant | Workspace do mentor ou programa de mentoria |
| Primeiro tenant | Workspace de Alisson Campos |
| Usuário dono | `MENTOR_OWNER` (mentor) |
| Usuário participante | `MENTEE` (mentorado) |
| Operador interno | `PLATFORM_ADMIN` (suporte/ops da empresa) |
| Isolamento | Shared database + shared schema + `tenant_id` em toda tabela de negócio |

 Futuros mentores recebem tenants independentes. Um mentorado **não** pertence
a mais de um tenant ao mesmo tempo. Nenhum dado de um tenant pode aparecer
para outro, inclusive RAW, respostas, scores, SELF, feedback, RG, convites e
logs de auditoria.

## 2. Autoridade

| Assunto | Autoridade |
|---------|------------|
| Itens, sequência, scoring, Claims, Actions, interpretação | MGH |
| UX, papéis de mentor/mentorado, convites | Produto + MGH |
| Stack, RLS, Prisma, Vercel, Neon, segredos | Tecnologia |
| Consentimento, Privacy Notice, dados de participantes reais | Legal/Privacy |
| Psicometria | Especialista + MGH |

Conflito entre fontes é `SPECIFICATION CONFLICT`. Nunca resolver silenciosamente.

## 3. Modelo de isolamento

- Modelo escolhido: **Shared Database + Shared Schema + `tenantId`**.
- Toda tabela tenant-scoped declara `tenantId` indexado e o inclui em chaves
  estrangeiras e unicidades locais (`@@unique([tenantId, ...])`).
- Resolução de tenant vem **somente** de sessão/JWT verificado
  (`session.tenantId`). Nunca de body, query, parâmetro de URL ou header
  enviado pelo cliente.
- Toda leitura/escrita passa pelo DAL com `where: { tenantId: ctx.tenantId }`.
  Preferir `findFirst` com tenant no `where`, nunca `findUnique` por `id` solto.
- RLS no PostgreSQL com `ENABLE` + `FORCE ROW LEVEL SECURITY` em toda tabela
  de tenant, com policies separadas para `SELECT`, `INSERT`, `UPDATE` e
  `DELETE`. O claim `tenant_id` é lido do JWT validado pelo serviço de auth.
- `service_role`/service key ignora RLS: fica apenas em código server-side de
  confiança, nunca em `NEXT_PUBLIC_*`, browser ou edge function de usuário.
  Cada uso exige `AuditLog` com `actor`, `reason`, `tenant_scope` e revisão.
- Storage segue o mesmo limite: URLs assinadas de curta duração, autorizadas
  depois da checagem de tenant. Nada de bucket público.
- Requisição sem claim de tenant válido falha fechado (`401`/`403`).

## 4. Papéis e permissões

Matriz mínima da Fase A. UI esconde botões; **o servidor autoriza**.

| Papel | Escopo | Permissões principais | Negado |
|-------|--------|-----------------------|--------|
| `PLATFORM_ADMIN` | Entre tenants, apenas operação | Criar/suspender tenant, gerenciar plano, break-glass auditado | Ler RAW individual por padrão; alterar metodologia |
| `MENTOR_OWNER` | Um tenant | Criar coorte, convocar/remover mentorados, iniciar run versionado, consultar resultados conforme MGH | Editar item/opção/ordem/scoring congelados; ler RAW individual até decisão MGH/Legal |
| `MENTEE` | Um tenant, apenas seus dados | Aceitar convite, consentir, responder à run atribuída, consultar seu próprio feedback se liberado | Ver outros mentorados; alterar instrumento ou scoring |
| `MENTOR_ASSISTANT` | Um tenant | **DEFERIDO** — não implementar na Fase A | — |

Regras duras:

- Permissão é sempre `role AND tenant`. Saber o `id` de outro tenant não basta.
- Papel desconhecido → nega acesso.
- Eventos sensíveis viram `AuditLog` com `tenantId`, `userId`, `action`,
  `resource` e `changes`.

## 5. Convite e vínculo

1. `MENTOR_OWNER` cria convite com e-mail, coorte e `tenantId`.
2. Token de convite é de uso único, expirável e tenant-scoped.
3. Aceite cria/vincula o usuário ao tenant e registra consentimento.
4. Sessão passa a carregar `userId`, `tenantId` e `role`.
5. Revogação desativa o vínculo, mas **não apaga RAW**; uso de soft delete.

`OPEN-LEGAL-001` e `OPEN-LEGAL-002` continuam bloqueando participantes reais
até consentimento e Privacy Notice existirem. Em DEV, apenas seed sintético.

## 6. Metodologia congelada permanece

Nada nesta decisão autoriza mudar:

- RAW imutável: tabelas de resposta bruta são append-only; `UPDATE`/`DELETE`
  negados por policy, exceto migração administrativa auditada.
- 48 cenários e 56 respostas; `PC-001` primeiro e `PC-011R` último.
- Ordem fixa; DR sem randomização.
- SELF/feedback/RG fora do score.
- Runs versionados.
- IA generativa fora da Fase A.
- Parking Lot intacto: relatório comercial, Assinatura/Manual externos, Mapa
  de Relação™, Sala de Comando Humana™, dashboard organizacional, matching,
  compatibilidade percentual, app nativo, pagamentos, CRM, gamificação,
  MGH 360™.

Scores derivados são recomputáveis por `runId + version`; nunca sobrescrevem RAW.
A visibilidade do mentor sobre respostas individuais depende de MGH + Legal
(`OPEN-TEN-001`); o default técnico é **somente agregados**.

## 7. Stack e ambientes

- TypeScript + Next.js + Neon/Postgres via Prisma + Vercel + GitHub.
- `runtime = "nodejs"`; `maxDuration` explícito nas rotas que precisam.
- Prisma singleton com string pooled do Neon; `prisma migrate deploy` no deploy.
- Segredos apenas em Vercel/Neon; `.env.example` versionado, `.env.local` fora do Git.
- Respostas de dado privado com `Cache-Control: private, no-store`.
- Zod em toda entrada; checagem de origem em mutações; rate limit; sem PII em
  log, URL, chave de cache ou telemetria.
- Branches Neon `preview/pr-*`, `qa/*`, `recovery/*`: schema-only + seed
  sintético. **Nunca ramificar produção com PII de mentorados.**

## 8. Gates de aceite

Nenhum item vira `PASS` sem evidência objetiva.

| Gate | Evidência mínima |
|------|------------------|
| Isolamento | Teste por tabela: tenant A não seleciona/atualiza/deleta tenant B, inclusive em relações aninhadas |
| Claim ausente | Requisição sem `tenant_id` válido retorna `401`/`403` |
| RLS completo | Teste de migração falha se nova tabela de tenant não tiver `tenantId` + RLS `FORCE` |
| RAW imutável | Tentativa de `UPDATE`/`DELETE` em RAW é rejeitada |
| Convite | Token de outro tenant é rejeitado; token usado não é reutilizável |
| DAL | Nenhuma query de tenant sem `tenantId` no `where` |
| Deploy | Clean checkout: migrate + seed sintético + healthcheck em preview |
| Auditoria | Todo uso de service role gera `AuditLog` com ator e motivo |

## 9. Itens em aberto relacionados

- `OPEN-TEN-001`: MGH + Legal definem se `MENTOR_OWNER` vê respostas
  individuais ou apenas agregados. Default atual: agregados.
- `OPEN-LEGAL-001/002`: consentimento e Privacy Notice antes de O0 real.
- `OPEN-INST-001`: rótulos/texto final de `SELF-01..08`.
- `ANX-003` / `BANK-0.2`: textos literais ausentes; `REQ-INST-012 =
  WAITING_BANK`. Não publicar itens nem inventar wording.
- `OPEN-TECH-006`: RPO/RTO para fechar backup/restore.

Estes bloqueios não impedem o desenho multitenant, mas impedem publicação,
O0 com participantes reais e E2E com texto literal.

## 10. Registro de alteração — 2026-11-26 (v0.2)

- Alteração **apenas factual**: registro da autoria do guia didático e da
  procedência pública da atuação de Alisson Campos como mentor. Nenhuma
  regra de produto, isolamento, papel, sequência, scoring, interpretação
  ou Fase A foi alterada.
- Alisson Campos: mentor idealizador, primeiro `MENTOR_OWNER` e autor de
  `docs/guia-didatico-fase-a.md`.
- Tiago de Abreu: desenvolvedor do projeto; não é o mentor nem o autor do
  guia.
- Procedência: `https://alissoncampos.com/` — mentor de gestores, fundador
  da M2M (Mentoria para Gestores) e criador do GTalk; consultado em
  26/11/2026.
- Em caso de conflito entre esta nota e as seções 1–9, prevalecem as seções
  1–9; esta nota apenas documenta a procedência da atribuição.
