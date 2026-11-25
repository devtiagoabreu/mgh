---
name: 01-17-lists
description: Trecho integral: 17_LISTS.
source: docs/001/MGH_Piloto_Onda0_Base_Operacional_v1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-838
---

# 17_LISTS

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 17_LISTS
| pilot\_wave | participant\_status | assessment\_status | role | area | tenure | reports\_band | yes\_no | severity | exclude\_scope | event\_type | flag\_code | flag\_severity | item\_decision | hypothesis\_status | gate\_decision | gate\_status | fit\_quality | lens | response\_format | change\_object | change\_type | bool | analysis\_use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| O0 | ACTIVE | CREATED | OWNER\_PARTNER | COMMERCIAL | LT\_1\_YEAR | NONE | YES | MINOR | NONE | VIEWED | CMP | LOW | KEEP | OPEN | ADVANCE | PASS | GOOD | PC | CATEGORICAL | ITEM | WORDING | True | YES |
| O1 | WITHDRAWN | STARTED | DIRECTOR | OPERATIONS | Y1\_3 | R1\_5 | NO | MODERATE | ITEM | SELECTED | AMB | MODERATE | REWRITE\_MINOR | SUPPORTED | ADVANCE\_WITH\_MINOR\_FIXES | REVIEW | APPROXIMATE | PRC | ORDINAL | OPTION | KEY | False | NO |
| O2 | EXCLUDED | IN\_PROGRESS | MANAGER | FINANCE | Y4\_7 | R6\_10 | NaN | MAJOR | TIMING\_ANALYSIS | CHANGED | NFA | HIGH | REWRITE\_MAJOR | CHALLENGED | REPEAT\_WAVE | FAIL | POOR | DR | RATING | SCORING | STRUCTURE | NaN | NaN |
| O3 | NaN | COMPLETED | LEADER | PEOPLE\_HR | Y8\_15 | R11\_20 | NaN | INVALIDATING | ASSESSMENT | LEFT\_SCENARIO | TWO | NaN | REKEY\_REVIEW | INCONCLUSIVE | STOP\_AND\_REDESIGN | NaN | NaN | SELF | NaN | EVIDENCE | LOGIC | NaN | NaN |
| NaN | NaN | ABANDONED | CONTRIBUTOR | MARKETING | GT\_15\_YEARS | R21\_50 | NaN | NaN | SPECIFIC\_ANALYSIS | SUBMITTED\_SCENARIO | DES | NaN | RESERVE | NaN | NaN | NaN | NaN | AQ | NaN | UIG | UX | NaN | NaN |
| NaN | NaN | WITHDRAWN | OTHER | ADMIN | NaN | R51\_PLUS | NaN | NaN | NaN | NaN | CTX | NaN | RETIRE | NaN | NaN | NaN | NaN | FE | NaN | SYNTHESIS | DATA | NaN | NaN |
| NaN | NaN | INVALIDATED | NaN | PRODUCTION | NaN | NaN | NaN | NaN | NaN | NaN | VOC | NaN | NEW\_ITEM\_REQUIRED | NaN | NaN | NaN | NaN | NaN | NaN | BLOCK | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | TECH | NaN | NaN | NaN | NaN | NaN | NaN | RED | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | UX | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | OTHER | NaN | NaN | NaN | NaN | NaN | NaN | COG | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | DATA\_MODEL | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MAP | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 00_README
| MGH™ — Base Operacional do Piloto Onda 0 | Unnamed: 1 |
| --- | --- |
| NaN | NaN |
| Versão: DATA-P1.0 | Instrumento: MGH-P1.0 | Scoring: SCORE-P1.0 | NaN |
| NaN | NaN |
| Tema | Diretriz |
| PRINCÍPIO | A base foi desenhada para rastrear resposta → score → evidência → interpretação. RAW nunca é sobrescrito. |
| IDENTIDADE | Dados identificáveis devem ficar separados da base analítica. Use participant\_code na análise. |
| RAW | 03\_RESPONSES\_RAW e 04\_RESPONSE\_EVENTS devem ser tratados como append-only. |
| DERIVED | 11\_DERIVED\_SCORES pode ser recalculada por versão de algoritmo, sem alterar RAW. |
| ONDA 0 | Objetivo: compreensão, adequação das alternativas, desejabilidade, tempo, revisões e problemas de mapeamento. |
| NÃO USAR PARA | Contratação, demissão, promoção, punição, remuneração, diagnóstico psicológico ou avaliação de competência. |
| TIMESTAMPS | Armazenar em UTC. Converter para horário local apenas na interface. |
| VERSÕES | Mudanças em itens, score, evidência ou interpretação devem entrar no 14\_CHANGE\_LOG. |
| STATUS DO ARQUIVO | Base operacional pronta para receber MGH-O0-001. |

## 01_PARTICIPANTS
| participant\_id\_uuid | public\_code | pilot\_wave | creator\_participant | participant\_status | created\_at\_utc | notes |
| --- | --- | --- | --- | --- | --- | --- |

## 02_ASSESSMENTS
| assessment\_id\_uuid | participant\_code | instrument\_version | item\_bank\_version | scoring\_version | interpretation\_version | pilot\_wave | assessment\_status | context\_code | role | area | role\_tenure\_band | leads\_people | direct\_reports\_band | age\_band\_optional | consent\_version | consent\_accepted\_at\_utc | started\_at\_utc | submitted\_at\_utc | total\_duration\_ms | application\_mode | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |
| NaN | NaN | MGH-P1.0 | BANK-0.2 | SCORE-P1.0 | INTERP-0.1 | NaN | NaN | CURRENT\_PROFESSIONAL\_BEHAVIOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | SELF | NaN |

## 03_RESPONSES_RAW
| response\_id\_uuid | assessment\_id\_uuid | participant\_code | scenario\_order | scenario\_code | item\_code | selected\_option\_id | numeric\_value | initial\_value | final\_value | revision\_count | first\_view\_at\_utc | first\_answer\_at\_utc | final\_answer\_at\_utc | duration\_ms | submitted | instrument\_version | scoring\_key\_version |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MGH-P1.0 | SCORE-P1.0 |
