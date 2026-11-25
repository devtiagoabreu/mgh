---
name: 00-mapa-de-fatiamento
description: Mapa mestre das 11 fontes fatiadas e das decisões canônicas do 002
source: docs/001
version: 0.1
status: MASTER_INDEX
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
---

# 00 — Mapa mestre de fatiamento

Este é o índice de entrada de `docs/002`. Cada uma das 11 fontes de
`docs/001` foi convertida integralmente para Markdown e fatiada em arquivos
únicos. **Não há cópia completa duplicada dentro de `docs/002`**: para
auditar o binário original, use `docs/001`.

| Original em `docs/001` | Índice dos fatimentos | Partes | Linhas |
|------------------------|-----------------------|--------|--------|
| `MAPA DE GOVERNO HUMANO - MGH™.docx` | [`fontes/mapa-de-governo-humano/00-indice.md`](./fontes/mapa-de-governo-humano/00-indice.md) | 20 | 61810 |
| `REUNIÃO DESENVOLVEDOR.docx` | [`fontes/reuniao-desenvolvedor/00-indice.md`](./fontes/reuniao-desenvolvedor/00-indice.md) | 7 | 1247 |
| `3.3 — ANX-003_ BANK-0.2 CANONICAL ITEM BANK.docx` | [`fontes/anx-003-bank-docx/00-indice.md`](./fontes/anx-003-bank-docx/00-indice.md) | 3 | 1187 |
| `FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO.docx` | [`fontes/fase-3-consolidacao/00-indice.md`](./fontes/fase-3-consolidacao/00-indice.md) | 3 | 1620 |
| `MGH_ANX-003_BANK-0.2_P1.0_Canonical_Item_Bank_DRAFT_v0.1.xlsx` | [`fontes/anx-003-xlsx/00-indice.md`](./fontes/anx-003-xlsx/00-indice.md) | 1 | 384 |
| `MGH_ANX-004_MGH-P1.0_Application_Sequence_v0.1.xlsx` | [`fontes/anx-004-xlsx/00-indice.md`](./fontes/anx-004-xlsx/00-indice.md) | 1 | 177 |
| `MGH_ANX-005_SCORE-P1.0_Scoring_Matrix_v0.1.xlsx` | [`fontes/anx-005-xlsx/00-indice.md`](./fontes/anx-005-xlsx/00-indice.md) | 1 | 276 |
| `MGH_ANX-015_GOLDEN-P1.0_Canonical_Dataset_v0.1.xlsx` | [`fontes/anx-015-xlsx/00-indice.md`](./fontes/anx-015-xlsx/00-indice.md) | 1 | 358 |
| `MGH_ANX-016_RTM-P1.0_Requirement_Traceability_Matrix_v0.1.xlsx` | [`fontes/anx-016-xlsx/00-indice.md`](./fontes/anx-016-xlsx/00-indice.md) | 1 | 447 |
| `MGH_Developer_Handoff_Package_Master_v0.1.pdf` | [`fontes/developer-handoff-pdf/00-indice.md`](./fontes/developer-handoff-pdf/00-indice.md) | 2 | 1164 |
| `MGH_Piloto_Onda0_Base_Operacional_v1.xlsx` | [`fontes/base-operacional-xlsx/00-indice.md`](./fontes/base-operacional-xlsx/00-indice.md) | 7 | 4130 |

## Decisões operacionais canônicas

Não são fatiamentos de `001`, mas fazem parte do contexto canônico do produto:

- [`decisoes/01-saas-multitenant-mentor-mentorados.md`](./decisoes/01-saas-multitenant-mentor-mentorados.md)
  — PROD-TEN-001: SaaS multitenant, mentor como dono do tenant e mentorados
  como participantes.

## Como usar

1. Escolha a fonte na tabela e abra o índice dela.
2. Leia só as partes necessárias; cada índice diz quantas partes existem.
3. Concatenando as partes de uma fonte, obtém-se a transcrição integral.
4. Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem sobre
   PDF e histórico `.docx`.
5. Para modelo de tenancy, papéis e convites, use a decisão `PROD-TEN-001`.

`docs/001` permanece como acervo original e não foi alterado.
