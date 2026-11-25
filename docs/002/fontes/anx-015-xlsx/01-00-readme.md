---
name: 01-00-readme
description: Trecho integral: 00_README.
source: docs/001/MGH_ANX-015_GOLDEN-P1.0_Canonical_Dataset_v0.1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-358
---

# 00_README

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 00_README
| MGH™ — ANX-015 | GOLDEN-P1.0 Canonical Golden Dataset | Unnamed: 1 | Unnamed: 2 |
| --- | --- | --- |
| NaN | NaN | NaN |
| Campo | Valor | NaN |
| Código do anexo | MGH-ANX-015 | NaN |
| Dataset | GOLDEN-P1.0 | NaN |
| Versão documental | 0.1 | NaN |
| Instrumento | MGH-P1.0 | NaN |
| Scoring | SCORE-P1.0 | NaN |
| Banco relacionado | BANK-0.2 | NaN |
| Master baseline | MGH-MASTER-P1.0-RC1 | NaN |
| Status | PILOT BASELINE — ACCEPTANCE FIXTURE PACK | NaN |
| Finalidade | Entradas sintéticas conhecidas + saídas esperadas para testes unitários, integração, fluxo, versão, segurança e futuro Motor. | NaN |
| NaN | NaN | NaN |
| REGRA-MÃE | NaN | NaN |
| Nenhuma implementação é aceita porque 'parece funcionar'. Ela precisa produzir resultados conhecidos a partir de entradas conhecidas. Todos os casos BLOCKING aplicáveis à Fase A devem passar antes da Onda 0. | NaN | NaN |
| NaN | NaN | NaN |
| NaN | NaN | NaN |
| NaN | NaN | NaN |
| NaN | NaN | NaN |
| DOIS NÍVEIS DE FIXTURE | NaN | NaN |
| Nível | Uso | Dependência do BANK-0.2 |
| SEMANTIC\_TARGET | Testa matemática do Score Engine usando targets canônicos D/I/S/C ou V/A/C. | Não depende da redação literal, mas não substitui E2E com option\_id. |
| RAW\_OPTION\_ID | Testa Assessment→Response→Score de ponta a ponta usando option\_id real. | Depende da recuperação completa do BANK-0.2. |
| NaN | NaN | NaN |
| IMPORTANTE | NaN | NaN |
| Os casos PC e PRC Forced neste pacote usam targets semânticos porque o mapping literal option\_id → target ainda depende do BANK-0.2 canônico. Eles são válidos para testar a matemática e a lógica do Score Engine, mas os testes E2E de option\_id serão adicionados quando o banco literal for recuperado. | NaN | NaN |

## 01_CASE_CATALOG
| GOLDEN-P1.0 — Case Catalog | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Class | Component | Scenario | Severity | Fixture Status | BANK Dependency | Expected Behavior |
| G-PC-001 | SCORE\_UNIT | PC | Balanced 6/6/6/6 | BLOCKING | EXECUTABLE\_AT\_TARGET\_LEVEL | NO | TOP\_TIE; entropy=1 |
| G-PC-002 | SCORE\_UNIT | PC | Concentrated 24D | BLOCKING | EXECUTABLE\_AT\_TARGET\_LEVEL | NO | D=1; entropy=0 |
| G-PC-003 | SCORE\_UNIT | PC | 9D/7I/3S/5C | BLOCKING | EXECUTABLE\_AT\_TARGET\_LEVEL | NO | Ranks D>I>C>S; gaps 2/2 |
| G-PC-004 | PRESENTATION\_INVARIANCE | PC | Same semantic targets under changed display order | BLOCKING | PARTIAL\_UNTIL\_BANK | YES | Scores must remain identical |
| G-PRC-F-001 | SCORE\_UNIT | PRC\_FORCED | All V | BLOCKING | EXECUTABLE\_AT\_TARGET\_LEVEL | NO | V raw 8; rel 1.0; no '100% visual' |
| G-PRC-F-002 | SCORE\_UNIT | PRC\_FORCED | 4V/3A/1C | BLOCKING | EXECUTABLE\_AT\_TARGET\_LEVEL | NO | 0.5/0.375/0.125 |
| G-PRC-I-001 | SCORE\_UNIT | PRC\_INDEPENDENT | Means V=4.75/A=4/C=3 | BLOCKING | EXECUTABLE | NO | Norm 93.75/75/50 |
| G-PRC-I-002 | SCORE\_UNIT | PRC\_INDEPENDENT | All 5 | BLOCKING | EXECUTABLE | NO | 100/100/100; no 33/33/33 |
| G-PRC-I-003 | SPEC\_REVIEW | PRC\_INDEPENDENT | Legacy derived example 4.8/4.7/4.6 | NON\_BLOCKING\_NOW | DERIVED\_ONLY | NO | Impossible as mean of 4 integer 1–5 ratings; do not use as RAW fixture |
| G-DR-001 | SCORE\_UNIT | DR | All axes maximum | BLOCKING | EXECUTABLE | NO | Each axis norm=100 |
| G-DR-002 | SCORE\_UNIT | DR | All axes minimum | BLOCKING | EXECUTABLE | NO | Each axis norm=0 |
| G-DR-003 | SCORE\_UNIT | DR | Each axis raw=9 | BLOCKING | EXECUTABLE | NO | Each axis norm=66.666... |
| G-DR-004 | SCORE\_UNIT | DR | Persistence D/D/D | BLOCKING | EXECUTABLE | NO | Persistence raw=12 norm=100 |
| G-DR-005 | CONFIG\_VALIDATION | DR | randomizable=true | BLOCKING | EXECUTABLE | NO | Must fail INSTRUMENT\_CONFIGURATION\_ERROR |
| G-FULL-001 | SCORE\_INTEGRATION | ALL | 56-response semantic fixture | BLOCKING | PARTIAL\_UNTIL\_BANK | YES | Full scoring integration fixture |
| FLOW-001 | FLOW | SYSTEM | 55/56 scored responses then submit | BLOCKING | EXECUTABLE | NO | ASSESSMENT\_NOT\_READY |
| FLOW-002 | FLOW | SYSTEM | Complete assessment submit | BLOCKING | EXECUTABLE | NO | COMPLETED |
| FLOW-003 | FLOW | SYSTEM | Edit after COMPLETED | BLOCKING | EXECUTABLE | NO | ASSESSMENT\_ALREADY\_COMPLETED |
| FLOW-004 | FLOW | SYSTEM | Double-submit same completed assessment | CRITICAL\_PILOT | EXECUTABLE | NO | Idempotent; one effective scoring job |
| FLOW-005 | FLOW | SYSTEM | Resume after interruption | CRITICAL\_PILOT | EXECUTABLE | NO | Same option presentation/order |
| VER-001 | VERSIONING | SYSTEM | Scoring version mismatch | BLOCKING | EXECUTABLE | NO | VERSION\_MISMATCH |
| VER-002 | VERSIONING | SYSTEM | Re-score historical RAW with new scoring version | BLOCKING | EXECUTABLE | NO | New SCORING\_RUN; old run preserved |
| VER-003 | IMMUTABILITY | SYSTEM | Mutate published item text | BLOCKING | EXECUTABLE | NO | Rejected; create new version |
| SEC-001 | SECURITY | API | Frontend payload exposes score\_target | BLOCKING | EXECUTABLE | NO | FAIL / prohibited exposure |
| SEC-002 | SECURITY | EXPORT | Pseudonymized export by default | CRITICAL\_PILOT | EXECUTABLE | NO | No name/email/phone |
| SEC-003 | SECURITY | AUTH | Identified export without permission | BLOCKING | EXECUTABLE | NO | UNAUTHORIZED\_ACTION |
| INT-001 | INTERPRETATION\_FUTURE | MOTOR | Autonomy + criterion consistent | FUTURE | ARTIFICIAL\_EVIDENCE | NO | DEL-001 + DEL-002 + SIN-DEL-001 → CLM-DEL-S01 |
| INT-002 | INTERPRETATION\_FUTURE | MOTOR | PC.D relevant but contextual confrontation low | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Generic direct-conflict claim suppressed |
| INT-003 | INTERPRETATION\_FUTURE | MOTOR | DR impact HIGH + externalization LOW | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Allow visibility caveat; forbid repression/hidden feelings |
| INT-004 | INTERPRETATION\_FUTURE | MOTOR | Overlapping source metrics | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Cannot auto-upgrade evidence level |
| INT-005 | INTERPRETATION\_FUTURE | MOTOR | PRC forced + independent separate sources | FUTURE | ARTIFICIAL\_EVIDENCE | NO | May converge; remain separate |
| INT-006 | INTERPRETATION\_FUTURE | MOTOR | HIGH + LOW same axis | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Integrity flag; no strong UIG |
| INT-007 | INTERPRETATION\_FUTURE | MOTOR | Insufficient evidence | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Silence |
| INT-008 | INTERPRETATION\_FUTURE | MOTOR | Forbidden claims requested | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Block GOOD\_LEADER/JOB\_FIT/HONEST\_PERSON |
| SYN-001 | INTERPRETATION\_FUTURE | MOTOR | Overlapping visual recommendations | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Compress to one recommendation |
| SYN-002 | INTERPRETATION\_FUTURE | MOTOR | Visual + auditory both relevant | FUTURE | ARTIFICIAL\_EVIDENCE | NO | Multimodal synthesis if no dominance rule |

## 02_PC_EXPECTED
| PC Golden Cases — Expected Outputs | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 | Unnamed: 15 | Unnamed: 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | D raw | I raw | S raw | C raw | Total | D rel | I rel | S rel | C rel | Entropy | Rank 1 | Rank 2 | Rank 3 | Rank 4 | GAP12 | GAP23 |
| G-PC-001 | 6 | 6 | 6 | 6 | 24 | 0.25 | 0.25 | 0.25 | 0.25 | 1 | TOP\_TIE | TOP\_TIE | TOP\_TIE | TOP\_TIE | 0 | 0 |
| G-PC-002 | 24 | 0 | 0 | 0 | 24 | 1 | 0 | 0 | 0 | 0 | D | I/S/C TIE | I/S/C TIE | I/S/C TIE | 24 | 0 |
| G-PC-003 | 9 | 7 | 3 | 5 | 24 | 0.375 | 0.291667 | 0.125 | 0.208333 | 0.947787 | D | I | C | S | 2 | 2 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Acceptance Notes | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PC-001 | Entropy must equal 1.0; no predominant dimension may be invented. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PC-002 | Entropy must equal 0.0; zero-frequency dimensions remain valid values. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PC-003 | Expected frequencies: .375 / .291666... / .125 / .208333...; ranking D>I>C>S. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 03_PC_INPUTS
| PC Semantic-Target Fixtures | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN |
| Case ID | Item Code | Semantic Target | Weight | Input Level |
| G-PC-001 | PC-001 | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-002 | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-005 | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-007 | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-008 | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-009R | D | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-010 | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-011R | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-012 | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-014 | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-015 | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-016 | I | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-017 | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-018 | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-019 | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-020R | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-021 | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-023 | S | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-027 | C | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-028 | C | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-029 | C | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-033 | C | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-035 | C | 1 | SEMANTIC\_TARGET |
| G-PC-001 | PC-036 | C | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-001 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-002 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-005 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-007 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-008 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-009R | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-010 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-011R | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-012 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-014 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-015 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-016 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-017 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-018 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-019 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-020R | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-021 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-023 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-027 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-028 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-029 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-033 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-035 | D | 1 | SEMANTIC\_TARGET |
| G-PC-002 | PC-036 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-001 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-002 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-005 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-007 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-008 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-009R | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-010 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-011R | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-012 | D | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-014 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-015 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-016 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-017 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-018 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-019 | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-020R | I | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-021 | S | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-023 | S | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-027 | S | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-028 | C | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-029 | C | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-033 | C | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-035 | C | 1 | SEMANTIC\_TARGET |
| G-PC-003 | PC-036 | C | 1 | SEMANTIC\_TARGET |

## 04_PRC_FORCED
| PRC Forced Golden Fixtures | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Item Code | Semantic Modality | Weight | Input Level | NaN | Case ID | Expected Raw V/A/C | Expected Relative V/A/C |
| G-PRC-F-001 | PRC-001 | V | 1 | SEMANTIC\_TARGET | NaN | G-PRC-F-001 | 8 / 0 / 0 | 1 / 0 / 0 |
| G-PRC-F-001 | PRC-002 | V | 1 | SEMANTIC\_TARGET | NaN | G-PRC-F-002 | 4 / 3 / 1 | 0.5 / 0.375 / 0.125 |
| G-PRC-F-001 | PRC-003 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-001 | PRC-005 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-001 | PRC-009 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-001 | PRC-011 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-001 | PRC-012 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-001 | PRC-015 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-001 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-002 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-003 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-005 | V | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-009 | A | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-011 | A | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-012 | A | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |
| G-PRC-F-002 | PRC-015 | C | 1 | SEMANTIC\_TARGET | NaN | NaN | NaN | NaN |

## 05_PRC_INDEPENDENT
| PRC Independent Golden Fixtures | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Item Code | V rating | A rating | C rating | NaN | Case ID | V Mean | A Mean | C Mean | V Norm | A Norm/C Norm |
| G-PRC-I-001 | PRC-004R | 5 | 4 | 3 | NaN | G-PRC-I-001 | 4.75 | 4 | 3 | 93.75 | A=75.00 / C=50.00 |
| G-PRC-I-001 | PRC-006R | 5 | 4 | 3 | NaN | G-PRC-I-002 | 5 | 5 | 5 | 100 | A=100.00 / C=100.00 |
| G-PRC-I-001 | PRC-010I | 4 | 4 | 3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PRC-I-001 | PRC-014I | 5 | 4 | 3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PRC-I-002 | PRC-004R | 5 | 5 | 5 | NaN | SPECIFICATION REVIEW FLAG | NaN | NaN | NaN | NaN | NaN |
| G-PRC-I-002 | PRC-006R | 5 | 5 | 5 | NaN | A referência anterior V=4.8 / A=4.7 / C=4.6 não pode ser produzida por 4 ratings inteiros de 1–5, pois as médias possíveis avançam em passos de 0,25. Ela fica preservada apenas como exemplo de métricas derivadas separadas, não como RAW Golden Fixture. Nenhuma regra metodológica foi alterada. | NaN | NaN | NaN | NaN | NaN |
| G-PRC-I-002 | PRC-010I | 5 | 5 | 5 | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| G-PRC-I-002 | PRC-014I | 5 | 5 | 5 | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 06_DR_INPUTS
| DR Golden Fixtures — Canonical Option Inputs | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Item Code | Axis | Selected Option | Points | Axis Raw Expected | Axis Norm Expected | Input Level |
| G-DR-001 | TH-001 | SPEED | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-006 | SPEED | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-007 | SPEED | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-004R | IMPACT | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-008R | IMPACT | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-009R | IMPACT | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-002 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-010 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-015 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-003 | EXTERNALIZATION | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-012 | EXTERNALIZATION | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-001 | TH-013 | EXTERNALIZATION | A | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-002 | TH-001 | SPEED | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-006 | SPEED | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-007 | SPEED | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-004R | IMPACT | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-008R | IMPACT | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-009R | IMPACT | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-002 | PERSISTENCE | A | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-010 | PERSISTENCE | A | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-015 | PERSISTENCE | A | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-003 | EXTERNALIZATION | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-012 | EXTERNALIZATION | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-002 | TH-013 | EXTERNALIZATION | D | 1 | 3 | 0 | RAW\_OPTION\_ID |
| G-DR-003 | TH-001 | SPEED | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-006 | SPEED | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-007 | SPEED | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-004R | IMPACT | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-008R | IMPACT | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-009R | IMPACT | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-002 | PERSISTENCE | C | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-010 | PERSISTENCE | C | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-015 | PERSISTENCE | C | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-003 | EXTERNALIZATION | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-012 | EXTERNALIZATION | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-003 | TH-013 | EXTERNALIZATION | B | 3 | 9 | 66.666667 | RAW\_OPTION\_ID |
| G-DR-004 | TH-002 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-004 | TH-010 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |
| G-DR-004 | TH-015 | PERSISTENCE | D | 4 | 12 | 100 | RAW\_OPTION\_ID |

## 07_FULL_FIXTURE
| G-FULL-001 — Full 56-Response Semantic Integration Fixture | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Component | Item Code | Input A | Input B | Input C | Input Level |
| G-FULL-001 | PC | PC-001 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-002 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-005 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-007 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-008 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-009R | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-010 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-011R | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-012 | D | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-014 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-015 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-016 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-017 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-018 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-019 | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-020R | I | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-021 | S | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-023 | S | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-027 | S | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-028 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-029 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-033 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-035 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PC | PC-036 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-001 | V | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-002 | V | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-003 | V | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-005 | V | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-009 | A | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-011 | A | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-012 | A | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_FORCED | PRC-015 | C | NaN | NaN | SEMANTIC\_TARGET |
| G-FULL-001 | PRC\_INDEPENDENT | PRC-004R | 5 | 4 | 3 | RAW\_RATING |
| G-FULL-001 | PRC\_INDEPENDENT | PRC-006R | 5 | 4 | 3 | RAW\_RATING |
| G-FULL-001 | PRC\_INDEPENDENT | PRC-010I | 4 | 4 | 3 | RAW\_RATING |
| G-FULL-001 | PRC\_INDEPENDENT | PRC-014I | 5 | 4 | 3 | RAW\_RATING |
| G-FULL-001 | DR | TH-001 | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-006 | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-007 | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-004R | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-008R | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-009R | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-002 | C | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-010 | C | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-015 | C | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-003 | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-012 | B | NaN | NaN | RAW\_OPTION\_ID |
| G-FULL-001 | DR | TH-013 | B | NaN | NaN | RAW\_OPTION\_ID |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Expected Output Summary | NaN | NaN | NaN | NaN | NaN | NaN |
| PC | 9D/7I/3S/5C | rel .375/.291666.../.125/.208333... | rank D>I>C>S | GAP12=2 | GAP23=2 | entropy≈0.9477867203 |
| PRC Forced | 4V/3A/1C | rel .5/.375/.125 | NaN | NaN | NaN | NaN |
| PRC Independent | V=4.75 | A=4 | C=3 | norm 93.75 | 75 | 50 |
| DR | Speed=9 | Impact=9 | Persistence=9 | Externalization=9 | all norm | 66.666... |

## 08_FLOW_VER_SEC
| Flow, Versioning & Security Acceptance Cases | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Class | Precondition | Action | Expected Status/Output | Error Code | Severity | Acceptance Rule |
| FLOW-001 | FLOW | 55/56 scored responses saved | Submit assessment | Remain not completed | ASSESSMENT\_NOT\_READY | BLOCKING | No score run created. |
| FLOW-002 | FLOW | 56/56 + SELF/feedback requirements satisfied | Submit assessment | COMPLETED | NaN | BLOCKING | Submit transactional; enqueue score once. |
| FLOW-003 | FLOW | Assessment COMPLETED | Attempt edit response | No mutation | ASSESSMENT\_ALREADY\_COMPLETED | BLOCKING | RAW/final response remains unchanged. |
| FLOW-004 | FLOW | First submit already committed | Repeat identical submit | Same effective completion | NaN | CRITICAL\_PILOT | Idempotent; no duplicate effective scoring run/job. |
| FLOW-005 | FLOW | Interrupted after presented options randomized | Resume | Same presentation instance/order | NaN | CRITICAL\_PILOT | No re-randomization of prior presentation. |
| VER-001 | VERSIONING | Assessment manifest=MGP1/BANK0.2 | Run incompatible scoring version | No score output | VERSION\_MISMATCH | BLOCKING | Compatibility validator blocks run. |
| VER-002 | VERSIONING | Historical RAW + old scoring run exist | Run newer scoring version | New immutable run | NaN | BLOCKING | Old run preserved; no overwrite. |
| VER-003 | IMMUTABILITY | Published item text version exists | Attempt in-place edit | Rejected | NaN | BLOCKING | Create new text/version instead. |
| SEC-001 | SECURITY | Participant API request | Return scenario payload | No score\_target/facet/construct/reverse key | NaN | BLOCKING | Public payload sanitized. |
| SEC-002 | SECURITY | Researcher export default | Export dataset | Pseudonymized | NaN | CRITICAL\_PILOT | No direct identity fields. |
| SEC-003 | SECURITY | User lacks identity.export permission | Request identified export | Denied | UNAUTHORIZED\_ACTION | BLOCKING | Authorization server-side and audited. |

## 09_INTERP_FUTURE
| Future Motor Golden Cases — Artificial Classified Evidence | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Artificial Evidence | Expected UIG/Synthesis | Expected Claim/Behavior | Forbidden Output | Phase | Severity | Note |
| INT-001 | Autonomy=CONSISTENT; Criterion=CONSISTENT | DEL-001 + DEL-002 + SIN-DEL-001 | CLM-DEL-S01-AUTONOMY-WITH-CRITERIA | NaN | C | FUTURE | Use artificial evidence; no RAW dependency. |
| INT-002 | PC.D=RELEVANT; contextual confrontation=LOW | Generic D conflict rule suppressed | Contextual precedence wins | Direct-conflict claim from D alone | C | FUTURE | Specific context overrides general dimension. |
| INT-003 | DR.IMPACT=HIGH; DR.EXTERNALIZATION=LOW | FDB/PRS synthesis allowed | External behavior may understate declared impact | Repression; hidden feelings; dishonesty | C | FUTURE | Authorized language only. |
| INT-004 | Two metrics from same source family overlap | No automatic strengthening | Evidence level unchanged | Artificial evidence upgrade | C | FUTURE | Independence check required. |
| INT-005 | PRC.V Forced + Independent converge | Convergence may be registered | Sources remain separate | Merged PRC master score | C | FUTURE | No score fusion. |
| INT-006 | Same DR axis classified HIGH and LOW | Integrity/collision handling | No strong UIG | Strong conclusion | C | FUTURE | Contradiction suppresses force. |
| INT-007 | Evidence below minimum | No UIG | Silence | Generic filler claim | C | FUTURE | Silence is valid output. |
| INT-008 | Requested GOOD\_LEADER / JOB\_FIT / HONEST\_PERSON | Block rules | FORBIDDEN\_CLAIM | Any of requested claims | C | FUTURE | Global Forbidden Claim Registry. |
| SYN-001 | Two overlapping visual recommendations | Semantic compression | One recommendation | Duplicate recommendations | C | FUTURE | Principle of Interpretive Compression. |
| SYN-002 | Visual and auditory both relevant; no dominance rule | Multimodal synthesis | Balanced/multimodal guidance | Invented predominant modality | C | FUTURE | No forced winner. |

## 10_ACCEPTANCE_GATE
| Phase A Golden Acceptance Gate | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Gate Item | Scope | Requirement | Pass Condition | Blocks O0? | Owner | Evidence | Status |
| GA-001 | Score Unit | All applicable BLOCKING score cases | 100% PASS | YES | Tech + MGH | CI test report | PENDING |
| GA-002 | Score Integration | G-FULL-001 at semantic target level | PASS | YES | Tech + MGH | integration test | PENDING |
| GA-003 | Raw Option E2E | PC/PRC option\_id fixtures | PASS after BANK recovery | YES before final instrument release | Tech + MGH | E2E test | WAITING\_BANK |
| GA-004 | DR E2E | Canonical DR option fixtures | 100% PASS | YES | Tech + MGH | CI test report | PENDING |
| GA-005 | Flow | FLOW-001..005 applicable cases | All BLOCKING + essential CRITICAL PASS | YES | Tech | E2E report | PENDING |
| GA-006 | Versioning | VER-001..003 | 100% PASS | YES | Tech | integration report | PENDING |
| GA-007 | Security | SEC-001..003 | 100% BLOCKING PASS | YES | Tech | security test report | PENDING |
| GA-008 | Future Motor | INT/SYN cases | NOT REQUIRED FOR PHASE A | NO | Future C | NaN | DEFERRED |

## 11_SPEC_FLAGS
| Specification Flags Discovered During Golden Dataset Consolidation | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Flag ID | Source | Issue | Why It Matters | Current Decision | Blocks | Owner |
| FLAG-GOLDEN-001 | Prior GOLDEN-P1.0 note | Independent PRC example V=4.8 / A=4.7 / C=4.6 | With exactly 4 integer ratings from 1–5 per modality, possible means occur in increments of 0.25; 4.8/4.7/4.6 cannot be generated from RAW P1.0. | Preserve only as DERIVED-INPUT separation example. Do not use as raw scoring fixture. Methodology unchanged pending formal review. | Does not block O0 scoring | MGH |