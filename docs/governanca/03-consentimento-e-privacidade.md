---
name: 03-consentimento-e-privacidade
description: Checklist conceitual de consentimento, privacidade e bloqueios formais da Fase A
source: docs/002/context.md
version: 0.1
status: OPERATIONAL_DRAFT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: false
derived_from:
  - docs/plano-de-desenvolvimento.md
  - docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md
  - docs/002/fontes/mapa-de-governo-humano/07-evidencias-e-pilotagem.md
  - docs/002/fontes/mapa-de-governo-humano/15-handoff-01-executive-e-funcional.md
  - docs/002/fontes/mapa-de-governo-humano/16-handoff-02-architecture-e-instrument.md
  - skill:people-governance-psychology
---

# 03 — Consentimento e privacidade (Fase A)

> **Checklist conceitual. NÃO é redação final.** Não há aqui consentimento
> final, Privacy Notice final, rótulos SELF finais, textos de itens ou
> opções. Redação definitiva é de MGH + Legal/Privacy, com decisão humana
> nomeada.
>
> Jurisdição: BR é **hipótese de trabalho** a validar por Legal/Privacy
> (CLT + LGPD + CFM quando aplicável). Nenhum prazo, base legal ou direito
> é presumido como decidido neste documento.

## 1. Bloqueios formais — não são pendências informais

| ID | Autoridade | O que bloqueia | Estado |
|---|---|---|---|
| `OPEN-LEGAL-001` | Legal/Privacy | Consentimento jurídico final; **O0 com participantes reais** | **BLOQUEIO** |
| `OPEN-LEGAL-002` | Legal/Privacy | Privacy Notice final; uso real conforme revisão jurídica | **BLOQUEIO** |
| `OPEN-INST-001` | MGH | Rótulos/texto final de `SELF-01..08`; publicação do instrumento e E2E com texto literal | **BLOQUEIO** |
| `OPEN-TEN-001` | MGH + Legal | Se `MENTOR_OWNER` vê respostas individuais; default técnico permanece **somente agregados** | **BLOQUEIO** |
| `OPEN-TECH-006` | Tecnologia | RPO/RTO do piloto e restore testado; Fase A não é declarada pronta sem isso (`G7`) | **BLOQUEIO** |

Regras:

- Nenhum bloqueio é fechado por IA, por documento operacional ou por
  "parece suficiente".
- `ANX-003` / `BANK-0.2` permanecem DRAFT;
  `REQ-INST-012 = WAITING_BANK`. Não publicar itens nem inventar
  `wording`.
- **Sem participante real até Legal/Privacy fechar `OPEN-LEGAL-001/002`.**
  Em DEV, apenas **seed sintético**.
- Nenhuma IA interpreta respostas na Fase A — nem scoring, nem
  classificação, nem resumo de campo livre.

## 2. Consentimento versionado — checklist conceitual

Os itens abaixo são **temas que precisam ser decididos e redigidos** por
Legal/Privacy. Não são texto exibido ao participante.

- [ ] Finalidade de pesquisa/piloto e natureza experimental declaradas.
- [ ] Participação voluntária; recusa permitida sem penalidade.
- [ ] Possibilidade de saque/retirada em qualquer momento.
- [ ] Limitações do instrumento e não uso para decisão automática de
      emprego nesta fase.
- [ ] Tratamento de dados e pseudonimização explicados.
- [ ] Versão do consentimento registrada (`consent_version` conceitual).
- [ ] Aceite registrado antes de iniciar a aplicação
      (`accepted`, `accepted_at` conceituais).
- [ ] `accepted = false` impede `IN_PROGRESS`.
- [ ] `acceptance_ip` e `user_agent` são campos **em avaliação**, não
      decididos: evaluating necessidade jurídica/técnica antes de congelar.
- [ ] Aplicação não continua sem aceite registrado; token de acesso é
      opaco e imprevisível.
- [ ] Mensagem para token inválido é neutra, sem identidade, status
      interno ou informação de score.
- [ ] Nenhum pré-selecionado, dark pattern ou progresso `/56`.

Campos listados aqui são **conceituais**; não definem schema, texto de UI
nem comportamento final de persistência.

## 3. Recusa e saque

- **Recusa:** não iniciar assessment. Registrar conforme política
  metodológica e de privacidade **a definir** por Legal/Privacy.
- **Saque/withdrawal:** desativar o vínculo sem apagar RAW. A revogação
  usa soft delete; RAW permanece append-only e auditado
  (`PROD-TEN-001` §5 e §6).
- Silêncio não é concordância. Pausa e saque não geram score parcial,
  penalidade nem flag de qualidade.
- Se o pedido de saque vier acompanhado de sinal de crise, rodar
  `docs/governanca/01-gate-de-crise.md` **antes** de tratar o pedido como
  apenas operacional.
- Nenhuma decisão sobre o participante é automatizada: nome, data e
  justificativa de quem decidiu ficam registrados.

## 4. Privacy Notice — temas a decidir, não redação

A revisão de Legal/Privacy precisa endereçar, no mínimo:

- tratamento e finalidade dos dados;
- direitos do participante e como exercê-los;
- contato responsável;
- eventuais terceiros/operadores;
- retenção e eliminação;
- relação com o uso comercial futuro (`OPEN-LEGAL-003` permanece fora
  do congelamento como base universal consentimento).

Este documento **não propõe texto**, não escolhe base legal e não afirma
que a versão conceitual existente em `docs/002` seja juridicamente
suficiente.

## 5. Privacidade e isolamento — espelho operacional

Espelho do que já está decidido em `PROD-TEN-001`. Nada aqui altera essa
decisão; divergência é `SPECIFICATION CONFLICT`, nunca resolução
silenciosa.

| Regra | Verificação operacional |
|---|---|
| Identity Vault separado | Identidade ("quem é") separada de respostas ("como respondeu"); Score/Evidence/Interpretation não precisam de nome |
| Tenant em toda tabela | `tenantId` indexado em toda tabela de negócio tenant-scoped, presente em FKs e unicidades locais |
| Origem do tenant | Somente sessão/JWT verificada; nunca body, query, header ou parâmetro de rota; falha fechada com `401`/`403` |
| RLS | `ENABLE` + `FORCE ROW LEVEL SECURITY`, com policies separadas para `SELECT`, `INSERT`, `UPDATE`, `DELETE` |
| DAL | Toda leitura/escrita com `where: { tenantId: ctx.tenantId }`; sem `$queryRaw` fora do DAL |
| Agregação | `n ≥ 5` por corte; checar se célula oculta é inferível por **subtração** entre recortes; tendência em vez de ranking individual |
| Sem PII em superfícies | Nenhum nome/e-mail/ID direto em log, URL, chave de cache ou telemetria; `Cache-Control: private, no-store` em dado privado |
| RAW e derivado | RAW append-only; `UPDATE`/`DELETE` negados; score derivado recomputável por `runId + versão` |
| Ambientes | Branches `preview/pr-*`, `qa/*`, `recovery/*`: schema-only + seed sintético. Nunca ramificar produção com PII |
| Serviço privilegiado | `service_role` apenas server-side, com `AuditLog` contendo `actor`, `reason`, `tenant_scope` |
| Visibilidade do mentor | Default: **somente agregados**; individual depende de `OPEN-TEN-001` |

## 6. Decisão humana nomeada e Gate Review

Toda decisão com efeito sobre participante, instrumento ou encerramento de
onda carrega:

- **nome** de quem decidiu;
- **data**;
- **justificativa** escrita.

O Gate Review é **julgamento metodológico documentado**, não nota
automática. Critérios são registrados como `PASS` / `REVIEW` / `FAIL`, com
campos de **evidência** e **comentário**. Os desfechos são:

| Desfecho | Significado operacional |
|---|---|
| `ADVANCE` | Pode seguir para O1 |
| `ADVANCE_WITH_MINOR_FIXES` | Correções limitadas e documentadas |
| `REPEAT_O0_WAVE` | Mudanças importantes exigem nova verificação cognitiva |
| `STOP_AND_REDESIGN` | Problemas estruturais exigem revisão profunda |

Nota de proveniência: fontes narrativas antigas usam `REPEAT_WAVE`, enquanto
`ANX-016`/Developer Handoff usam `REPEAT_O0_WAVE`. Isto é um
`SPECIFICATION CONFLICT`: ambas as variantes ficam registradas e nenhuma é
codificada como valor canônico em código até decisão MGH. A tabela acima
usa a forma mais específica apenas para descrever o Gate Review, sem
encerrar o conflito.

Condição de entrada para qualquer Gate com participantes: bloqueios da
§1 fechados por suas autoridades, evidências anexadas e nenhuma decisão
tomada por IA.

## 7. Fontes

- `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` §2, §3,
  §4, §5, §7, §8 e §9.
- `docs/plano-de-desenvolvimento.md` §2.4, §3 (P6/P7), §6 e §7.
- `docs/002/fontes/mapa-de-governo-humano/07-evidencias-e-pilotagem.md`
  — `O0-01` (base metodológica do aviso, **não redação final**) e O0-02
  (código de participante em tabela separada).
- `docs/002/fontes/mapa-de-governo-humano/15-handoff-01-executive-e-funcional.md`
  §11–13 — campos conceituais de consentimento, recusa e temas do
  conteúdo.
- `docs/002/fontes/mapa-de-governo-humano/16-handoff-02-architecture-e-instrument.md`
  §9–10 — Identity Vault.
- `docs/002/fontes/developer-handoff-pdf/02-documento-06.md` — Gate
  O0 → O1 e desfechos.
- Skill `people-governance-psychology` — recusa/pausa sem penalidade,
  n mínimo e checagem por subtração.
