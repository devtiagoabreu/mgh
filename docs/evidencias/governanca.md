---
name: evidencias-governanca
description: Evidências da documentação operacional de governança humana da Fase A
source: docs/plano-de-desenvolvimento.md
version: 0.1
status: VERIFIED_DOCUMENTAL_SCOPE
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: false
derived_from:
  - docs/002/context.md
  - docs/002/00-mapa-de-fatiamento.md
  - docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md
  - docs/plano-de-desenvolvimento.md
  - docs/evidencias/p0.md
---

# Evidências — Governança humana (Fase A)

> Verificação **documental** de escopo. Não é gate de produto, não substitui
> `G0`–`G7` e não fecha nenhum item `OPEN-*`.

## 1. Arquivos criados neste escopo

| Arquivo | Conteúdo |
|---|---|
| `docs/governanca/01-gate-de-crise.md` | Sinais, estratificação conservadora, ordem obrigatória de encaminhamento, plano de segurança adaptado, Regra O0 e limites duros |
| `docs/governanca/02-claims-e-evidencia.md` | Níveis E1/E2/E3, Forbidden Claim Registry aplicado, regras por lente e campo obrigatório de limitação em agregados |
| `docs/governanca/03-consentimento-e-privacidade.md` | Checklist conceitual de consentimento, recusa/saque, temas de Privacy Notice, bloqueios formais, privacidade e Gate Review |
| `docs/evidencias/governanca.md` | Este arquivo: procedência, verificação de não invenção e consistência com plano e `PROD-TEN-001` |

## 2. Fontes canônicas citadas

| Fonte | Uso nos documentos |
|---|---|
| `docs/002/00-mapa-de-fatiamento.md` e `docs/002/context.md` | Entrada canônica; precedência de anexos `ANX-*` |
| `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` | `PROD-TEN-001`: papéis, tenant, RLS, default agregado, bloqueios |
| `docs/002/fontes/fase-3-consolidacao/02-23-anx-014-forbidden-claim-registrytm.md` | Lista proibida de claims (inteligência, competência, saúde mental, diagnóstico, `job fit`, `compatibility score` etc.) |
| `docs/002/fontes/developer-handoff-pdf/02-documento-06.md` | `E1=SIGNAL`, `E2=CONVERGENCE`, `E3=ROBUST CONVERGENCE`, `external_reporting_max=E2`, independência, Language Policy, fronteira da IA e desfechos do Gate |
| `docs/002/fontes/mapa-de-governo-humano/05-piloto-1-0-e-matematica.md` §22 | Definição de sinal / convergência / convergência forte |
| `docs/002/fontes/anx-004-xlsx/01-00-readme.md` | Contagens de PC/PRC/DR/SELF/RG, randomização, RG como pesquisa relacional |
| `docs/002/fontes/anx-005-xlsx/01-00-readme.md` | Golden cases de PRC, ausência de `consistency %`, `SOURCE_REQUIRED_FROM_BANK-0.2` |
| `docs/002/fontes/anx-016-xlsx/01-00-readme.md` | `REQ-O0-006` (desfechos do Gate), `REQ-FLOW-015` (feedback não é detecção de verdade), `REQ-INST-010` (RG invisível) |
| `docs/002/fontes/mapa-de-governo-humano/07-evidencias-e-pilotagem.md` | `O0-01` como base metodológica do aviso e `O0-02` (código separado da identidade) |
| `docs/002/fontes/mapa-de-governo-humano/15-handoff-01-executive-e-funcional.md` §11–13 | Campos conceituais de consentimento, recusa e temas do conteúdo |
| `docs/002/fontes/mapa-de-governo-humano/16-handoff-02-architecture-e-instrument.md` §9–10 | Identity Vault separado de respostas |
| `docs/002/fontes/mapa-de-governo-humano/19-handoff-05-open-items-e-meeting.md` | `OPEN-INST-001`, `OPEN-LEGAL-001/002`, `OPEN-TECH-006` |
| `docs/plano-de-desenvolvimento.md` e `docs/evidencias/p0.md` | Regras de execução, governança humana (§2.4), gates `G6`/`G7` e estado verificado de P0 |

Skills adaptadas e reescritas, sem cópia de texto:
`people-governance-psychology`, `mental-health-crisis-protocol`,
`evidence-based-scales`, `counseling-frameworks`. Padrões de C-SSRS/SAFE-T,
Stanley-Brown e WHO mhGAP foram citados como proveniência, não transcritos
como instrumento.

## 3. Verificação — nenhum texto legal/metodológico definitivo inventado

| Verificação | Evidência nos arquivos | Resultado |
|---|---|---|
| Consentimento final | `03` §2 é checklist conceitual; §3 remete redação/política a Legal/Privacy | Ausente, como exigido |
| Privacy Notice final | `03` §4 lista temas a decidir e afirma explicitamente que não propõe texto nem escolhe base legal | Ausente, como exigido |
| Rótulos finais de `SELF-01..08` | `03` §1 mantém `OPEN-INST-001` como bloqueio; `02` §3 proíbe rótulos finais | Ausente, como exigido |
| Textos de itens, cenários e opções | `02` §3 mantém `SOURCE_REQUIRED_FROM_BANK-0.2`; `03` §1 mantém `REQ-INST-012 = WAITING_BANK` | Ausente, como exigido |
| Diagnóstico, medicação, terapia, sigilo absoluto | `01` §6 lista como limites duros; `02` §2 inclui saúde mental e diagnóstico entre Forbidden Claims | Ausente, como exigido |
| Decisão de RH automatizada | `02` §5 exige decisão humana nomeada; `03` §6 exige nome, data e justificativa | Ausente, como exigido |
| Jurisdição BR como fato | `01` e `03` abrem com "hipótese de trabalho a validar por Legal/Privacy (CLT + LGPD + CFM quando aplicável)" | Registrado como hipótese |
| Contatos de emergência | `01` header e §3 exigem revalidação antes de publicar | Não publicados como definitivos |
| Novo claim, UIG, regra de score ou versão | `02` abre declarando que não cria/renomeia/revoga; nenhuma versão foi alterada | Nenhuma criação |
| IA interpretando respostas | `01` §5, `02` §1/§5 e `03` §1 proíbem scoring, interpretação, classificação e resumo por IA na Fase A | Proibido explicitamente |
| PII em log/URL/cache/telemetria | `03` §5 espelha a proibição de `PROD-TEN-001` e inclui `Cache-Control: private, no-store` | Proibido explicitamente |
| Participante real | `03` §1: sem participante real até Legal/Privacy fechar; DEV apenas seed sintético | Bloqueado |

Conclusão: os quatro arquivos são **operacionais e derivados**. Nenhum
texto legal, clínico ou metodológico definitivo foi produzido ou apresentado
como publicável.

## 4. Consistência com o plano e com `PROD-TEN-001`

| Ponto | Plano aprovado | `PROD-TEN-001` | Governança documentada | Resultado |
|---|---|---|---|---|
| Escopo restrito à Fase A | §2.1; Parking Lot intacto | §6 | `01`/`02`/`03` não abrem módulos fora da Fase A | Consistente |
| IA fora da Fase A | §2.1; `G6` | §6 | `01` §5; `02` §1; `03` §1 | Consistente |
| RAW imutável, append-only | §2.1; `G2` | §6 | `03` §3 e §5 | Consistente |
| 48 cenários / 56 respostas; ordem fixa; DR sem randomização | §2.1; P3 | §6 | `02` §3 | Consistente |
| SELF, feedback e RG fora do score | §2.1; P3/P5 | §6 | `02` §3 e regras transversais | Consistente |
| O0 sem relatório/perfil ao participante | §2.1; `REQ-PROD-002` via RTM | §5 e §6 | `01` §5; `03` §2 (token neutro) | Consistente |
| Multitenant, `tenantId` de sessão/JWT, falha fechada | §2.2; P1 | §3 | `03` §5 | Consistente |
| RLS `ENABLE + FORCE` e DAL com tenant | §2.2; `G1` | §3 e §8 | `03` §5 | Consistente |
| Papéis e `MENTOR_ASSISTANT = DEFERIDO` | §2.2 | §4 | `01` §3 usa `MENTOR_OWNER` e prevê revisor distinto em conflito | Consistente |
| Mentor vê agregados por default | §2.2; P7 | §6 e §9 (`OPEN-TEN-001`) | `01` §5; `02` §4; `03` §1 e §5 | Consistente |
| `n ≥ 5` e checagem por subtração | §2.4; P7 | — | `02` §4; `03` §5 | Consistente |
| Crise: dono humano nomeado, distinto do mentor se houver conflito | §2.4; P6 | §2 (Legal/Privacy) e §4 | `01` §3 e §5 | Consistente |
| Nenhum participante real antes de Legal/Privacy | `G6`; §7 | §5 e §9 | `03` §1 | Consistente |
| Gate Review documentado | P7/RTM `REQ-O0-006` | — | `03` §6 com quatro desfechos e nome/data/justificativa | Consistente |
| RPO/RTO e restore antes de declarar pronta | `G7`; §7 | §9 (`OPEN-TECH-006`) | `03` §1 como bloqueio | Consistente |
| Versões congeladas (`MGH-P1.0`, `BANK-0.2` DRAFT etc.) | P0; `docs/evidencias/p0.md` | §6 e §9 | Nenhuma versão foi alterada nos quatro arquivos | Consistente |

Divergência documental registrada como `SPECIFICATION CONFLICT`: fontes
narrativas antigas usam `REPEAT_WAVE`; `ANX-016` e o Developer Handoff usam
`REPEAT_O0_WAVE`. Ambas permanecem visíveis em `03` §6; nenhuma foi codificada
como valor canônico em código e nenhuma metodologia foi modificada. A decisão
da forma final cabe à autoridade MGH, não à implementação.

## 5. Bloqueios registrados

| ID | Registrado em | Tratamento |
|---|---|---|
| `OPEN-LEGAL-001` | `03` §1 | Bloqueio de O0 real; consentimento final só com Legal/Privacy |
| `OPEN-LEGAL-002` | `03` §1 | Bloqueio de uso real; Privacy Notice final só com Legal/Privacy |
| `OPEN-INST-001` | `03` §1; `02` §3 | Bloqueio de rótulos finais SELF e de E2E com texto literal |
| `OPEN-TEN-001` | `01` §5; `02` §4; `03` §1 e §5 | Bloqueio de acesso individual do mentor; default agregado |
| `OPEN-TECH-006` | `03` §1 | Bloqueio de RPO/RTO e restore testado (`G7`) |
| `ANX-003` / `BANK-0.2` DRAFT | `02` §3; `03` §1 | Textos e IDs canônicos permanecem `SOURCE_REQUIRED` / `WAITING_BANK` |

Nenhum desses itens foi fechado, reclassificado como "pendência informal"
ou reescrito por IA.

## 6. Verificação de escopo

- Foram criados somente: `docs/governanca/01-gate-de-crise.md`,
  `docs/governanca/02-claims-e-evidencia.md`,
  `docs/governanca/03-consentimento-e-privacidade.md` e
  `docs/evidencias/governanca.md`.
- Não houve edição em `app/**`, `lib/**`, `tests/**`, `prisma/**`,
  `package.json`, `.env`, `docs/002/**`,
  `docs/plano-de-desenvolvimento.md`, `docs/evidencias/p0.md`,
  `docs/evidencias/p1-p2.md` ou `docs/evidencias/p5.md`.
- Não houve commit. Branch verificado: `feature/mgh-phase-a-foundation`.
- `git diff --check` executado na verificação: saída limpa.
- O `git status` no momento da verificação também mostrava alterações
  **fora deste escopo** em arquivos/diretórios de agentes concorrentes
  (incluindo `README.md`, `app/globals.css`, `components/`,
  `docs/exemplo_projeto_mgh.txt`, `lib/engine/`, `prisma/` e
  `tests/engine/`). Elas são preexistentes ou simultâneas e **não foram
  tocadas** por esta persona.
- Confirmação: a escrita permaneceu integralmente em `docs/governanca/**`
  e `docs/evidencias/governanca.md`.
