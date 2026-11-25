---
name: 01-00-readme
description: Trecho integral: 00_README.
source: docs/001/MGH_ANX-003_BANK-0.2_P1.0_Canonical_Item_Bank_DRAFT_v0.1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-384
---

# 00_README

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 00_README
| MGH™ — ANX-003 | BANK-0.2 Canonical Item Bank | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DRAFT DE CONSOLIDAÇÃO — subconjunto de implementação MGH-P1.0. Não publicar conteúdo até recuperar redações e option IDs canônicos. | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Campo | Valor | NaN | Integrity Snapshot | NaN | NaN | NaN | NaN |
| Anexo | ANX-003 | NaN | Metric | Expected | Current | Status | Note |
| Ativo metodológico | BANK-0.2 | NaN | P1.0 scenarios | 48 | 48 | PASS | Registry structural count |
| Instrumento alvo | MGH-P1.0 | NaN | Scored responses | 56 | 56 | PASS | From 10\_SCORING\_MATRIX |
| Master baseline | MGH-MASTER-P1.0-RC1 | NaN | Relation groups | 6 | 6 | PASS | RG-01..RG-06 |
| Document status | DRAFT — SOURCE RECOVERY REQUIRED | NaN | Exact scenario texts | 48 | 0 | BLOCKED | Source recovery required |
| Validation status | PILOT / NOT VALIDATED | NaN | Canonical option IDs | All | 0 | BLOCKED | Source recovery required |
| Scope desta planilha | 48 cenários oficiais do P1.0 + 56 respostas pontuáveis + estrutura esperada de opções | NaN | NaN | NaN | NaN | NaN | NaN |
| Limitação crítica | Os textos exatos dos cenários/opções e canonical option IDs não foram encontrados nos artefatos acessíveis nesta sessão. | NaN | NaN | NaN | NaN | NaN | NaN |
| Regra | Não reconstruir, resumir ou inventar wording. Campos ausentes permanecem SOURCE\_REQUIRED. | NaN | NaN | NaN | NaN | NaN | NaN |
| Fonte estrutural | MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx / 10\_SCORING\_MATRIX + Master Specs | NaN | NaN | NaN | NaN | NaN | NaN |
| Full BANK-0.2 | O banco candidato total foi definido como 68; esta planilha não declara conter os 68 candidatos até que a fonte integral seja recuperada. | NaN | NaN | NaN | NaN | NaN | NaN |
| Próximo gate | Recuperar conteúdo original → preencher IDs/textos → revisão metodológica → congelar item\_text\_version → publicar ANX-003 final. | NaN | NaN | NaN | NaN | NaN | NaN |

## 01_P1_SCENARIOS
| 01 — P1.0 Scenario Registry | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 | Unnamed: 15 | Unnamed: 16 | Unnamed: 17 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 48 cenários oficiais. Texto canônico deliberadamente em branco onde a fonte literal ainda não foi recuperada. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| scenario\_order | scenario\_code | scored\_item\_codes | lens | scenario\_type | context | randomization\_policy | scored\_response\_count | required | score\_targets | facet\_signals | relation\_group | scenario\_text\_canonical | text\_source\_status | bank\_version | instrument\_version | status | implementation\_note |
| 1 | PC-001 | PC-001 | PC | PC\_FORCED\_CHOICE | DECISION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.DECISION\_SPEED | RG-02 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 2 | PRC-001 | PRC-001 | PRC | PRC\_FORCED\_CHOICE | COMMUNICATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 3 | TH-003 | TH-003 | DR | DR\_ORDINAL | EXTERNALIZATION | NO\_RANDOMIZATION | 1 | YES | DR.EXTERNALIZATION | NaN | RG-06 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 4 | PC-009R | PC-009R | PC | PC\_FORCED\_CHOICE | RELATIONSHIP | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.I.SOCIABILITY | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 5 | TH-001 | TH-001 | DR | DR\_ORDINAL | SPEED | NO\_RANDOMIZATION | 1 | YES | DR.SPEED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 6 | PC-021 | PC-021 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.CRITERION | RG-04 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 7 | PRC-004R | PRC-004R-A; PRC-004R-C; PRC-004R-V | PRC | PRC\_INDEPENDENT | MULTI\_CONTEXT | V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED | 3 | YES | PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 8 | PC-014 | PC-014 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.PATIENCE | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 9 | PC-007 | PC-007 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.AUTONOMY | RG-01 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 10 | PRC-003 | PRC-003 | PRC | PRC\_FORCED\_CHOICE | DECISION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 11 | TH-010 | TH-010 | DR | DR\_ORDINAL | PERSISTENCE | NO\_RANDOMIZATION | 1 | YES | DR.PERSISTENCE | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 12 | PC-035 | PC-035 | PC | PC\_FORCED\_CHOICE | COMMUNICATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.I.EXPRESSIVENESS | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 13 | TH-006 | TH-006 | DR | DR\_ORDINAL | SPEED | NO\_RANDOMIZATION | 1 | YES | DR.SPEED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 14 | PC-018 | PC-018 | PC | PC\_FORCED\_CHOICE | FEEDBACK | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.RELATIONAL\_MAINTENANCE | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 15 | PRC-012 | PRC-012 | PRC | PRC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 16 | PC-019 | PC-019 | PC | PC\_FORCED\_CHOICE | DECISION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.ANALYSIS | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 17 | PC-016 | PC-016 | PC | PC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.CONSTANCY | RG-03 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 18 | PRC-005 | PRC-005 | PRC | PRC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 19 | TH-012 | TH-012 | DR | DR\_ORDINAL | EXTERNALIZATION | NO\_RANDOMIZATION | 1 | YES | DR.EXTERNALIZATION | NaN | RG-06 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 20 | PC-010 | PC-010 | PC | PC\_FORCED\_CHOICE | COMMUNICATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.I.PERSUASION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 21 | TH-004R | TH-004R | DR | DR\_ORDINAL | IMPACT | NO\_RANDOMIZATION | 1 | YES | DR.IMPACT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 22 | PC-028 | PC-028 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.CRITERION | RG-04 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 23 | PRC-011 | PRC-011 | PRC | PRC\_FORCED\_CHOICE | COMMUNICATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 24 | PC-012 | PC-012 | PC | PC\_FORCED\_CHOICE | CHANGE | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.I.MOBILIZATION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 25 | PC-002 | PC-002 | PC | PC\_FORCED\_CHOICE | CONFLICT | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.CONFRONTATION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 26 | PRC-006R | PRC-006R-A; PRC-006R-C; PRC-006R-V | PRC | PRC\_INDEPENDENT | MULTI\_CONTEXT | V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED | 3 | YES | PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 27 | TH-007 | TH-007 | DR | DR\_ORDINAL | SPEED | NO\_RANDOMIZATION | 1 | YES | DR.SPEED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 28 | PC-020R | PC-020R | PC | PC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.PRECISION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 29 | TH-002 | TH-002 | DR | DR\_ORDINAL | PERSISTENCE | NO\_RANDOMIZATION | 1 | YES | DR.PERSISTENCE | NaN | RG-05 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 30 | PC-023 | PC-023 | PC | PC\_FORCED\_CHOICE | DECISION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.CAUTION | RG-02 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 31 | PRC-002 | PRC-002 | PRC | PRC\_FORCED\_CHOICE | COMMUNICATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 32 | PC-033 | PC-033 | PC | PC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.CONSTANCY | RG-03 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 33 | PC-027 | PC-027 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.AUTONOMY | RG-01 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 34 | PRC-014I | PRC-014I-A; PRC-014I-C; PRC-014I-V | PRC | PRC\_INDEPENDENT | MULTI\_CONTEXT | V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED | 3 | YES | PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 35 | TH-013 | TH-013 | DR | DR\_ORDINAL | EXTERNALIZATION | NO\_RANDOMIZATION | 1 | YES | DR.EXTERNALIZATION | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 36 | PC-036 | PC-036 | PC | PC\_FORCED\_CHOICE | EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.C.QUALITY | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 37 | TH-008R | TH-008R | DR | DR\_ORDINAL | IMPACT | NO\_RANDOMIZATION | 1 | YES | DR.IMPACT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 38 | PC-015 | PC-015 | PC | PC\_FORCED\_CHOICE | CONFLICT | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.COOPERATION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 39 | PRC-009 | PRC-009 | PRC | PRC\_FORCED\_CHOICE | FEEDBACK | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 40 | PC-008 | PC-008 | PC | PC\_FORCED\_CHOICE | PRESSURE\_EXECUTION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.RESULT\_ORIENTATION | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 41 | PC-017 | PC-017 | PC | PC\_FORCED\_CHOICE | CHANGE | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.S.PREDICTABILITY | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 42 | PRC-010I | PRC-010I-A; PRC-010I-C; PRC-010I-V | PRC | PRC\_INDEPENDENT | MULTI\_CONTEXT | V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED | 3 | YES | PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 43 | TH-015 | TH-015 | DR | DR\_ORDINAL | PERSISTENCE | NO\_RANDOMIZATION | 1 | YES | DR.PERSISTENCE | NaN | RG-05 | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 44 | PC-029 | PC-029 | PC | PC\_FORCED\_CHOICE | CONFLICT | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.D.ASSERTIVENESS | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 45 | TH-009R | TH-009R | DR | DR\_ORDINAL | IMPACT | NO\_RANDOMIZATION | 1 | YES | DR.IMPACT | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 46 | PC-005 | PC-005 | PC | PC\_FORCED\_CHOICE | DELEGATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | TRANSVERSAL | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 47 | PRC-015 | PRC-015 | PRC | PRC\_FORCED\_CHOICE | CHANGE | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PRC.V/A/C.FORCED | NaN | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |
| 48 | PC-011R | PC-011R | PC | PC\_FORCED\_CHOICE | CHANGE\_IDEATION | OPTIONS\_RANDOMIZED\_SERVER\_SIDE | 1 | YES | PC.D/I/S/C | PC.I.ENTHUSIASM | NaN | NaN | SOURCE\_REQUIRED | BANK-0.2 | MGH-P1.0 | PILOT | Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation. |

## 02_RESPONSE_SCHEMA
| 02 — P1.0 Scored Response Schema | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 56 respostas pontuáveis derivadas dos 48 cenários. Estrutura baseada na matriz operacional já existente. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| scenario\_order | scenario\_code | item\_code | lens | response\_format | context | randomizable | score\_target | scoring\_rule | facet\_signal | relation\_group | notes | bank\_version | scoring\_version | status |
| 1 | PC-001 | PC-001 | PC | CATEGORICAL | DECISION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.DECISION\_SPEED | RG-02 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 2 | PRC-001 | PRC-001 | PRC | CATEGORICAL | COMMUNICATION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 3 | TH-003 | TH-003 | DR | ORDINAL | EXTERNALIZATION | FALSE | DR.EXTERNALIZATION | A=4,B=3,C=2,D=1 | NaN | RG-06 | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 4 | PC-009R | PC-009R | PC | CATEGORICAL | RELATIONSHIP | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.I.SOCIABILITY | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 5 | TH-001 | TH-001 | DR | ORDINAL | SPEED | FALSE | DR.SPEED | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 6 | PC-021 | PC-021 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.CRITERION | RG-04 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 7 | PRC-004R | PRC-004R-A | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.A.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 7 | PRC-004R | PRC-004R-C | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.C.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 7 | PRC-004R | PRC-004R-V | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.V.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 8 | PC-014 | PC-014 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.PATIENCE | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 9 | PC-007 | PC-007 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.AUTONOMY | RG-01 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 10 | PRC-003 | PRC-003 | PRC | CATEGORICAL | DECISION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 11 | TH-010 | TH-010 | DR | ORDINAL | PERSISTENCE | FALSE | DR.PERSISTENCE | A=1,B=2,C=3,D=4 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 12 | PC-035 | PC-035 | PC | CATEGORICAL | COMMUNICATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.I.EXPRESSIVENESS | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 13 | TH-006 | TH-006 | DR | ORDINAL | SPEED | FALSE | DR.SPEED | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 14 | PC-018 | PC-018 | PC | CATEGORICAL | FEEDBACK | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.RELATIONAL\_MAINTENANCE | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 15 | PRC-012 | PRC-012 | PRC | CATEGORICAL | EXECUTION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 16 | PC-019 | PC-019 | PC | CATEGORICAL | DECISION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.ANALYSIS | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 17 | PC-016 | PC-016 | PC | CATEGORICAL | EXECUTION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.CONSTANCY | RG-03 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 18 | PRC-005 | PRC-005 | PRC | CATEGORICAL | EXECUTION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 19 | TH-012 | TH-012 | DR | ORDINAL | EXTERNALIZATION | FALSE | DR.EXTERNALIZATION | A=4,B=3,C=2,D=1 | NaN | RG-06 | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 20 | PC-010 | PC-010 | PC | CATEGORICAL | COMMUNICATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.I.PERSUASION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 21 | TH-004R | TH-004R | DR | ORDINAL | IMPACT | FALSE | DR.IMPACT | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 22 | PC-028 | PC-028 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.CRITERION | RG-04 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 23 | PRC-011 | PRC-011 | PRC | CATEGORICAL | COMMUNICATION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 24 | PC-012 | PC-012 | PC | CATEGORICAL | CHANGE | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.I.MOBILIZATION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 25 | PC-002 | PC-002 | PC | CATEGORICAL | CONFLICT | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.CONFRONTATION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 26 | PRC-006R | PRC-006R-A | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.A.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 26 | PRC-006R | PRC-006R-C | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.C.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 26 | PRC-006R | PRC-006R-V | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.V.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 27 | TH-007 | TH-007 | DR | ORDINAL | SPEED | FALSE | DR.SPEED | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 28 | PC-020R | PC-020R | PC | CATEGORICAL | EXECUTION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.PRECISION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 29 | TH-002 | TH-002 | DR | ORDINAL | PERSISTENCE | FALSE | DR.PERSISTENCE | A=1,B=2,C=3,D=4 | NaN | RG-05 | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 30 | PC-023 | PC-023 | PC | CATEGORICAL | DECISION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.CAUTION | RG-02 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 31 | PRC-002 | PRC-002 | PRC | CATEGORICAL | COMMUNICATION | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 32 | PC-033 | PC-033 | PC | CATEGORICAL | EXECUTION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.CONSTANCY | RG-03 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 33 | PC-027 | PC-027 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.AUTONOMY | RG-01 | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 34 | PRC-014I | PRC-014I-A | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.A.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 34 | PRC-014I | PRC-014I-C | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.C.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 34 | PRC-014I | PRC-014I-V | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.V.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 35 | TH-013 | TH-013 | DR | ORDINAL | EXTERNALIZATION | FALSE | DR.EXTERNALIZATION | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 36 | PC-036 | PC-036 | PC | CATEGORICAL | EXECUTION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.C.QUALITY | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 37 | TH-008R | TH-008R | DR | ORDINAL | IMPACT | FALSE | DR.IMPACT | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 38 | PC-015 | PC-015 | PC | CATEGORICAL | CONFLICT | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.COOPERATION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 39 | PRC-009 | PRC-009 | PRC | CATEGORICAL | FEEDBACK | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 40 | PC-008 | PC-008 | PC | CATEGORICAL | PRESSURE\_EXECUTION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.RESULT\_ORIENTATION | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 41 | PC-017 | PC-017 | PC | CATEGORICAL | CHANGE | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.S.PREDICTABILITY | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 42 | PRC-010I | PRC-010I-A | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.A.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 42 | PRC-010I | PRC-010I-C | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.C.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 42 | PRC-010I | PRC-010I-V | PRC | RATING | MULTI\_CONTEXT | TRUE | PRC.V.INDEPENDENT | Rating 1–5; mean across 4 indicators per modality | NaN | NaN | Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 43 | TH-015 | TH-015 | DR | ORDINAL | PERSISTENCE | FALSE | DR.PERSISTENCE | A=1,B=2,C=3,D=4 | NaN | RG-05 | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 44 | PC-029 | PC-029 | PC | CATEGORICAL | CONFLICT | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.D.ASSERTIVENESS | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 45 | TH-009R | TH-009R | DR | ORDINAL | IMPACT | FALSE | DR.IMPACT | A=4,B=3,C=2,D=1 | NaN | NaN | 3 items per axis; normalize with ((sum-3)/9)\*100. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 46 | PC-005 | PC-005 | PC | CATEGORICAL | DELEGATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | TRANSVERSAL | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 47 | PRC-015 | PRC-015 | PRC | CATEGORICAL | CHANGE | TRUE | PRC.V/A/C.FORCED | Selected modality receives +1; 8 forced-choice scenarios total | NaN | NaN | Relative preference only; not a percentage of personality. | BANK-0.2 | SCORE-P1.0 | PILOT |
| 48 | PC-011R | PC-011R | PC | CATEGORICAL | CHANGE\_IDEATION | TRUE | PC.D/I/S/C | Selected semantic option gives +1 to mapped PC dimension; item weight=1.0 | PC.I.ENTHUSIASM | NaN | Option order may be randomized; scoring follows option\_id, never display position. | BANK-0.2 | SCORE-P1.0 | PILOT |

## 03_OPTION_REQUIREMENTS
| 03 — Option & Rating Requirements | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Estrutura esperada por cenário. option\_id e wording permanecem vazios até recuperação da fonte canônica. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| scenario\_order | scenario\_code | scenario\_type | semantic\_role\_or\_slot | canonical\_option\_id | option\_text\_canonical | raw\_points\_or\_scale | score\_target | presentation\_policy | source\_status | note |
| 1 | PC-001 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 1 | PC-001 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 1 | PC-001 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 1 | PC-001 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 2 | PRC-001 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 2 | PRC-001 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 2 | PRC-001 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 3 | TH-003 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 3 | TH-003 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 3 | TH-003 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 3 | TH-003 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 4 | PC-009R | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 4 | PC-009R | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 4 | PC-009R | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 4 | PC-009R | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 5 | TH-001 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 5 | TH-001 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 5 | TH-001 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 5 | TH-001 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 6 | PC-021 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 6 | PC-021 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 6 | PC-021 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 6 | PC-021 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 7 | PRC-004R | PRC\_INDEPENDENT | V | NaN | NaN | NaN | PRC.V.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 7 | PRC-004R | PRC\_INDEPENDENT | A | NaN | NaN | NaN | PRC.A.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 7 | PRC-004R | PRC\_INDEPENDENT | C | NaN | NaN | NaN | PRC.C.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 8 | PC-014 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 8 | PC-014 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 8 | PC-014 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 8 | PC-014 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 9 | PC-007 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 9 | PC-007 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 9 | PC-007 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 9 | PC-007 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 10 | PRC-003 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 10 | PRC-003 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 10 | PRC-003 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 11 | TH-010 | DR\_ORDINAL | A | NaN | NaN | 1 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 11 | TH-010 | DR\_ORDINAL | B | NaN | NaN | 2 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 11 | TH-010 | DR\_ORDINAL | C | NaN | NaN | 3 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 11 | TH-010 | DR\_ORDINAL | D | NaN | NaN | 4 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 12 | PC-035 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 12 | PC-035 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 12 | PC-035 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 12 | PC-035 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 13 | TH-006 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 13 | TH-006 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 13 | TH-006 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 13 | TH-006 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 14 | PC-018 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 14 | PC-018 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 14 | PC-018 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 14 | PC-018 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 15 | PRC-012 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 15 | PRC-012 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 15 | PRC-012 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 16 | PC-019 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 16 | PC-019 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 16 | PC-019 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 16 | PC-019 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 17 | PC-016 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 17 | PC-016 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 17 | PC-016 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 17 | PC-016 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 18 | PRC-005 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 18 | PRC-005 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 18 | PRC-005 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 19 | TH-012 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 19 | TH-012 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 19 | TH-012 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 19 | TH-012 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 20 | PC-010 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 20 | PC-010 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 20 | PC-010 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 20 | PC-010 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 21 | TH-004R | DR\_ORDINAL | A | NaN | NaN | 4 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 21 | TH-004R | DR\_ORDINAL | B | NaN | NaN | 3 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 21 | TH-004R | DR\_ORDINAL | C | NaN | NaN | 2 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 21 | TH-004R | DR\_ORDINAL | D | NaN | NaN | 1 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 22 | PC-028 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 22 | PC-028 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 22 | PC-028 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 22 | PC-028 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 23 | PRC-011 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 23 | PRC-011 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 23 | PRC-011 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 24 | PC-012 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 24 | PC-012 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 24 | PC-012 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 24 | PC-012 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 25 | PC-002 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 25 | PC-002 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 25 | PC-002 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 25 | PC-002 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 26 | PRC-006R | PRC\_INDEPENDENT | V | NaN | NaN | NaN | PRC.V.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 26 | PRC-006R | PRC\_INDEPENDENT | A | NaN | NaN | NaN | PRC.A.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 26 | PRC-006R | PRC\_INDEPENDENT | C | NaN | NaN | NaN | PRC.C.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 27 | TH-007 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 27 | TH-007 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 27 | TH-007 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 27 | TH-007 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.SPEED | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 28 | PC-020R | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 28 | PC-020R | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 28 | PC-020R | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 28 | PC-020R | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 29 | TH-002 | DR\_ORDINAL | A | NaN | NaN | 1 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 29 | TH-002 | DR\_ORDINAL | B | NaN | NaN | 2 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 29 | TH-002 | DR\_ORDINAL | C | NaN | NaN | 3 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 29 | TH-002 | DR\_ORDINAL | D | NaN | NaN | 4 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 30 | PC-023 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 30 | PC-023 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 30 | PC-023 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 30 | PC-023 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 31 | PRC-002 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 31 | PRC-002 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 31 | PRC-002 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 32 | PC-033 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 32 | PC-033 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 32 | PC-033 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 32 | PC-033 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 33 | PC-027 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 33 | PC-027 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 33 | PC-027 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 33 | PC-027 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 34 | PRC-014I | PRC\_INDEPENDENT | V | NaN | NaN | NaN | PRC.V.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 34 | PRC-014I | PRC\_INDEPENDENT | A | NaN | NaN | NaN | PRC.A.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 34 | PRC-014I | PRC\_INDEPENDENT | C | NaN | NaN | NaN | PRC.C.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 35 | TH-013 | DR\_ORDINAL | A | NaN | NaN | 4 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 35 | TH-013 | DR\_ORDINAL | B | NaN | NaN | 3 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 35 | TH-013 | DR\_ORDINAL | C | NaN | NaN | 2 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 35 | TH-013 | DR\_ORDINAL | D | NaN | NaN | 1 | DR.EXTERNALIZATION | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 36 | PC-036 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 36 | PC-036 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 36 | PC-036 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 36 | PC-036 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 37 | TH-008R | DR\_ORDINAL | A | NaN | NaN | 4 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 37 | TH-008R | DR\_ORDINAL | B | NaN | NaN | 3 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 37 | TH-008R | DR\_ORDINAL | C | NaN | NaN | 2 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 37 | TH-008R | DR\_ORDINAL | D | NaN | NaN | 1 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 38 | PC-015 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 38 | PC-015 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 38 | PC-015 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 38 | PC-015 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 39 | PRC-009 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 39 | PRC-009 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 39 | PRC-009 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 40 | PC-008 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 40 | PC-008 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 40 | PC-008 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 40 | PC-008 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 41 | PC-017 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 41 | PC-017 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 41 | PC-017 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 41 | PC-017 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 42 | PRC-010I | PRC\_INDEPENDENT | V | NaN | NaN | NaN | PRC.V.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 42 | PRC-010I | PRC\_INDEPENDENT | A | NaN | NaN | NaN | PRC.A.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 42 | PRC-010I | PRC\_INDEPENDENT | C | NaN | NaN | NaN | PRC.C.INDEPENDENT | BLOCK\_ORDER\_MAY\_RANDOMIZE | SOURCE\_REQUIRED | Independent 1–5 rating statement; exact statement and scale labels required. |
| 43 | TH-015 | DR\_ORDINAL | A | NaN | NaN | 1 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 43 | TH-015 | DR\_ORDINAL | B | NaN | NaN | 2 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 43 | TH-015 | DR\_ORDINAL | C | NaN | NaN | 3 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 43 | TH-015 | DR\_ORDINAL | D | NaN | NaN | 4 | DR.PERSISTENCE | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 44 | PC-029 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 44 | PC-029 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 44 | PC-029 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 44 | PC-029 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 45 | TH-009R | DR\_ORDINAL | A | NaN | NaN | 4 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 45 | TH-009R | DR\_ORDINAL | B | NaN | NaN | 3 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 45 | TH-009R | DR\_ORDINAL | C | NaN | NaN | 2 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 45 | TH-009R | DR\_ORDINAL | D | NaN | NaN | 1 | DR.IMPACT | FIXED\_ORDER | SOURCE\_REQUIRED | Exact ordinal alternative wording required; display order is fixed. |
| 46 | PC-005 | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 46 | PC-005 | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 46 | PC-005 | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 46 | PC-005 | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 47 | PRC-015 | PRC\_FORCED\_CHOICE | V | NaN | NaN | 1 | PRC.V.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 47 | PRC-015 | PRC\_FORCED\_CHOICE | A | NaN | NaN | 1 | PRC.A.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 47 | PRC-015 | PRC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PRC.C.FORCED | RANDOMIZED | SOURCE\_REQUIRED | One option per modality; exact canonical option\_id/text required. |
| 48 | PC-011R | PC\_FORCED\_CHOICE | D | NaN | NaN | 1 | PC.D | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 48 | PC-011R | PC\_FORCED\_CHOICE | I | NaN | NaN | 1 | PC.I | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 48 | PC-011R | PC\_FORCED\_CHOICE | S | NaN | NaN | 1 | PC.S | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |
| 48 | PC-011R | PC\_FORCED\_CHOICE | C | NaN | NaN | 1 | PC.C | RANDOMIZED | SOURCE\_REQUIRED | Canonical option\_id and exact wording required from original item source. |

## 04_RELATION_GROUPS
| 04 — Relation Group Registry | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| Pares de pesquisa. Não geram índice de sinceridade, mentira ou consistência percentual. | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| relation\_group | item\_a | item\_b | construct\_or\_theme\_code | theme | rule |
| RG-01 | PC-007 | PC-027 | PC.D.AUTONOMY | Autonomia | Research relation group; not a sincerity score. |
| RG-02 | PC-001 | PC-023 | DECISION\_UNCERTAINTY | Decisão sob incerteza | Research relation group; not a sincerity score. |
| RG-03 | PC-016 | PC-033 | PC.S.CONSTANCY | Constância | Research relation group; not a sincerity score. |
| RG-04 | PC-021 | PC-028 | PC.C.CRITERION | Critério / ambiguidade | Research relation group; not a sincerity score. |
| RG-05 | TH-002 | TH-015 | DR.PERSISTENCE | Persistência pós-conflito | Research relation group; not a sincerity score. |
| RG-06 | TH-003 | TH-012 | DR.EXTERNALIZATION | Externalização em contexto negativo | Research relation group; not a sincerity score. |

## 05_VALIDATION_RULES
| 05 — Publication & Integrity Validation Rules | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Regras que devem passar antes de o conteúdo P1.0 ser considerado publicável/implementável. | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| validation\_id | rule | expected | verification | severity |
| VAL-001 | Scenario count | 48 | COUNT(01\_P1\_SCENARIOS.scenario\_order) | BLOCKING |
| VAL-002 | PC scenario count | 24 | COUNTIF(lens='PC') | BLOCKING |
| VAL-003 | PRC forced scenario count | 8 | COUNTIF(type='PRC\_FORCED\_CHOICE') | BLOCKING |
| VAL-004 | PRC independent scenario count | 4 | COUNTIF(type='PRC\_INDEPENDENT') | BLOCKING |
| VAL-005 | DR scenario count | 12 | COUNTIF(lens='DR') | BLOCKING |
| VAL-006 | Scored response count | 56 | SUM(scored\_response\_count) | BLOCKING |
| VAL-007 | PRC independent scored ratings | 12 | 4 scenarios × 3 ratings | BLOCKING |
| VAL-008 | Relation groups | 6 | COUNT(04\_RELATION\_GROUPS) | BLOCKING |
| VAL-009 | Scenario order first | PC-001 | scenario\_order=1 | BLOCKING |
| VAL-010 | Scenario order last | PC-011R | scenario\_order=48 | BLOCKING |
| VAL-011 | DR randomization | FALSE | All DR scenarios fixed-order | BLOCKING |
| VAL-012 | Published text completeness | 48 scenario texts + all options | Must be 100% before P1.0 content publication | BLOCKING |

## 06_SOURCE_GAPS
| 06 — Source Recovery Gaps | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Pendências documentais que não podem ser preenchidas por inferência. Resolver antes da publicação final do BANK. | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| gap\_id | missing\_asset | priority | blocks | required\_action |
| GAP-001 | Exact scenario wording for all 48 P1.0 scenarios | CRITICAL | BLOCKS\_CONTENT\_PUBLICATION | Recover exact previously authored wording from original MGH item-generation source; do not reconstruct. |
| GAP-002 | Exact response-option wording for PC / PRC Forced / DR | CRITICAL | BLOCKS\_CONTENT\_PUBLICATION | Recover original alternatives verbatim; no paraphrasing. |
| GAP-003 | Canonical option IDs for every categorical/ordinal alternative | CRITICAL | BLOCKS\_IMPLEMENTATION\_FINALIZATION | Populate stable option IDs from original bank. Display position must remain separate. |
| GAP-004 | Full BANK-0.2 candidate universe (68 candidate groups/items) | HIGH | NON\_BLOCKING\_FOR\_P1\_SUBSET | Current accessible source reliably identifies the 48 P1.0 application scenarios, not all BANK-0.2 candidates. |
| GAP-005 | Exact PRC Independent statements and 1–5 scale labels | CRITICAL | BLOCKS\_CONTENT\_PUBLICATION | Recover exact V/A/C statements and published rating labels. |
| GAP-006 | Canonical item\_text\_version per scenario/item | HIGH | BLOCKS\_RELEASE\_MANIFEST\_FINAL\_BINDING | Assign only after exact text source is recovered and frozen. |

## 07_LISTS
| 07 — Controlled Values | Unnamed: 1 | Unnamed: 2 |
| --- | --- | --- |
| Listas de referência para consolidação do BANK-0.2. | NaN | NaN |
| NaN | NaN | NaN |
| category | value | description |
| lens | PC | Padrões Comportamentais |
| lens | PRC | Preferências de Representação e Comunicação |
| lens | DR | Dinâmica de Reação |
| scenario\_type | PC\_FORCED\_CHOICE | 1 escolha entre 4 alternativas |
| scenario\_type | PRC\_FORCED\_CHOICE | 1 escolha entre 3 alternativas |
| scenario\_type | PRC\_INDEPENDENT | 3 ratings independentes 1–5 |
| scenario\_type | DR\_ORDINAL | 1 escolha entre 4 alternativas ordinais |
| source\_status | SOURCE\_REQUIRED | Texto/ID canônico ainda precisa ser recuperado |
| status | PILOT | Autorizado somente para piloto da versão |