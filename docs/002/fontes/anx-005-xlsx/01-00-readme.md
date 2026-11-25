---
name: 01-00-readme
description: Trecho integral: 00_README.
source: docs/001/MGH_ANX-005_SCORE-P1.0_Scoring_Matrix_v0.1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-276
---

# 00_README

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 00_README
| MGH™ — ANX-005 | SCORE-P1.0 Scoring Matrix | Unnamed: 1 |
| --- | --- |
| NaN | NaN |
| Campo | Valor |
| Código do anexo | MGH-ANX-005 |
| Título | SCORE-P1.0 Scoring Matrix |
| Versão documental | 0.1 |
| Scoring version | SCORE-P1.0 |
| Instrumento compatível | MGH-P1.0 |
| Banco relacionado | BANK-0.2 |
| Master baseline | MGH-MASTER-P1.0-RC1 |
| Status | PILOT BASELINE — IMPLEMENTATION SPEC |
| Finalidade | Fonte estruturada das regras determinísticas do Score Engine P1.0. |
| NaN | NaN |
| PRINCÍPIOS DE IMPLEMENTAÇÃO | NaN |
| 1 | Score Engine é determinístico, versionado e não utiliza IA. |
| 2 | O frontend nunca decide score por posição visual; usa option\_id canônico. |
| 3 | RAW é imutável. Novo algoritmo gera novo SCORING\_RUN, nunca sobrescreve o anterior. |
| 4 | PC, PRC Forced, PRC Independent e DR são calculados separadamente. |
| 5 | SELF, feedback e Relation Groups não entram no score principal. |
| 6 | Facetas PC só são calculadas quando houver facet\_signal canônico; não são reportáveis no P1.0. |
| 7 | Sem normas/percentis/T-scores no P1.0. |
| 8 | Sem DR Total, Resilience Score, Honest Score ou Consistency %. |
| NaN | NaN |
| DEPENDÊNCIA CRÍTICA DO BANK-0.2 | NaN |
| As regras matemáticas abaixo estão congeladas para SCORE-P1.0. Entretanto, o mapping literal option\_id → D/I/S/C ou option\_id → V/A/C depende do BANK-0.2 canônico. Enquanto os option\_ids e textos literais ainda estiverem em recuperação, o desenvolvedor NÃO deve inferir mappings a partir da posição A/B/C/D exibida ao participante. | NaN |

## 01_SCORE_OVERVIEW
| SCORE-P1.0 — Visão Geral | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Lens | Mode | Scenarios | Scored Responses | Raw Range | Primary Outputs | Normalization | Reportable P1.0? | AI? | Notes |
| PC | Forced-choice | 24 | 24 | 0–24 por dimensão | D/I/S/C raw, freq., ranking, gaps, entropy | freq = raw/24 | Main dimensions: YES | NO | Empates explícitos; sem desempate arbitrário. |
| PRC | Forced-choice | 8 | 8 | 0–8 por modalidade | V/A/C raw + relative choices | freq = raw/8 | YES, com linguagem de preferência | NO | Não chamar de % de identidade. |
| PRC | Independent | 4 | 12 | mean 1–5 por modalidade | V/A/C mean + normalized 0–100 | ((mean-1)/4)\*100 | YES, separado do Forced | NO | Não converter 5/5/5 em 33/33/33. |
| DR | Ordinal | 12 | 12 | 3–12 por eixo | Speed/Impact/Persistence/Externalization | ((raw-3)/9)\*100 | YES por eixo | NO | Alto/baixo não significa bom/ruim. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| TOTAL DE ENTRADAS DO SCORE ENGINE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Componente | Contagem | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC | 24 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Forced | 8 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Independent ratings | 12 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR | 12 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| TOTAL SCORE RESPONSES | 56 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 02_PC_MATRIX
| PC — Forced Choice Scoring Matrix | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Item Code | Mode | Weight | Canonical Targets | Display Order | Score Rule | Known Facet Target | Known Facet | Facet Reportable? | Relation Group | Option Mapping Status | Implementation Note |
| PC-001 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | RG-02 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-002 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-005 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-007 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | D | Autonomia | NO | RG-01 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-008 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-009R | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-010 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-011R | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-012 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-014 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-015 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-016 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | RG-03 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-017 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-018 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-019 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-020R | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-021 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | C | Critério | NO | RG-04 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-023 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | RG-02 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-027 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | D | Autonomia | NO | RG-01 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-028 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | C | Critério | NO | RG-04 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-029 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-033 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | NaN | NaN | NO | RG-03 | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-035 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | I | Expressividade | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| PC-036 | PC\_FORCED\_CHOICE | 1 | D|I|S|C | RANDOMIZABLE | Selected canonical semantic option receives +1 to exactly one of D/I/S/C. | C | Qualidade | NO | NaN | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Use option\_id → score\_target mapping from BANK-0.2; never display position. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC — Regras Derivadas | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Metric | Definition | Formula / Rule | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC.D.raw | Count of selected D targets | Σ D hits | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC.I.raw | Count of selected I targets | Σ I hits | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC.S.raw | Count of selected S targets | Σ S hits | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC.C.raw | Count of selected C targets | Σ C hits | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Integrity | Total raw counts | D+I+S+C = 24 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Relative frequency | Within-person relative frequency | dimension\_raw / 24 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Ranking | Descending dimensions | Ties preserved explicitly | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| GAP12 | Gap between top and second rank | P1\_raw - P2\_raw; 0 when top tie | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| GAP23 | Gap between second and third rank | P2\_raw - P3\_raw; tie-aware | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Entropy | Normalized Shannon entropy | -Σ(p\*ln(p))/ln(4), with 0\*ln(0)=0 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC.BALANCE | Not implemented | Do not invent formula in P1.0 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 03_PRC_MATRIX
| PRC — Forced & Independent Scoring Matrix | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Item Code | Mode | Scored Responses | Canonical Modalities | Display/Block Randomization | Raw Input | Scoring Rule | Output | Normalization | Mapping Status | Implementation Note |
| PRC-001 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-002 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-003 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-005 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-009 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-011 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-012 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-015 | PRC\_FORCED\_CHOICE | 1 | V|A|C | YES — option order | selected option\_id | Selected canonical modality receives +1. | V/A/C raw counts | raw/8 relative choices | SOURCE\_REQUIRED\_FROM\_BANK-0.2 | Forced and Independent remain separate. |
| PRC-004R | PRC\_INDEPENDENT | 3 | V|A|C | YES — block order only; scale direction fixed | rating 1–5 for V, A and C | Store all three ratings independently. | Mean of 4 ratings per modality | ((mean-1)/4)\*100 | STRUCTURE\_DEFINED; TEXT\_LABELS\_SOURCE\_REQUIRED | Do not convert the three modality means into a 100% composition. |
| PRC-006R | PRC\_INDEPENDENT | 3 | V|A|C | YES — block order only; scale direction fixed | rating 1–5 for V, A and C | Store all three ratings independently. | Mean of 4 ratings per modality | ((mean-1)/4)\*100 | STRUCTURE\_DEFINED; TEXT\_LABELS\_SOURCE\_REQUIRED | Do not convert the three modality means into a 100% composition. |
| PRC-010I | PRC\_INDEPENDENT | 3 | V|A|C | YES — block order only; scale direction fixed | rating 1–5 for V, A and C | Store all three ratings independently. | Mean of 4 ratings per modality | ((mean-1)/4)\*100 | STRUCTURE\_DEFINED; TEXT\_LABELS\_SOURCE\_REQUIRED | Do not convert the three modality means into a 100% composition. |
| PRC-014I | PRC\_INDEPENDENT | 3 | V|A|C | YES — block order only; scale direction fixed | rating 1–5 for V, A and C | Store all three ratings independently. | Mean of 4 ratings per modality | ((mean-1)/4)\*100 | STRUCTURE\_DEFINED; TEXT\_LABELS\_SOURCE\_REQUIRED | Do not convert the three modality means into a 100% composition. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC — Integrity & Interpretation Rules | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Rule ID | Rule | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-001 | Forced: V+A+C raw must equal 8. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-002 | Independent: exactly 4 V ratings, 4 A ratings and 4 C ratings. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-003 | Independent means remain on 1–5 scale before optional normalization. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-004 | Forced relative choice is not a personality percentage. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-005 | Do not average Forced and Independent into a single PRC score. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC-INT-006 | Forced and Independent may later generate convergence/divergence evidence, not score fusion. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 04_DR_MATRIX
| DR™ — Dinâmica de Reação Scoring Matrix | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Item Code | Axis | Option A | Option B | Option C | Option D | Randomizable? | Axis Raw Range | Normalization | Implementation Note |
| TH-001 | SPEED | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-006 | SPEED | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-007 | SPEED | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-004R | IMPACT | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-008R | IMPACT | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-009R | IMPACT | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-002 | PERSISTENCE | 1 | 2 | 3 | 4 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-010 | PERSISTENCE | 1 | 2 | 3 | 4 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-015 | PERSISTENCE | 1 | 2 | 3 | 4 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-003 | EXTERNALIZATION | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-012 | EXTERNALIZATION | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| TH-013 | EXTERNALIZATION | 4 | 3 | 2 | 1 | NO | 3–12 | ((axis\_raw - 3) / 9) \* 100 | Use canonical option\_id/order mapping; no DR total. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR — Regras de Integridade | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Rule ID | Rule | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-001 | Cada eixo possui exatamente 3 itens. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-002 | Cada eixo raw varia de 3 a 12. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-003 | Normalização: ((raw-3)/9)\*100. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-004 | TH codes permanecem como aliases legados no P1.0; não renomear silenciosamente. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-005 | Alto não significa bom; baixo não significa ruim. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-006 | Não calcular DR Total, intensidade geral, resiliência ou estabilidade emocional. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR-INT-007 | Qualquer randomizable=true para DR deve falhar na validação de configuração. | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 05_DERIVED_METRICS
| Derived Metrics Registry — SCORE-P1.0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Metric Code | Source | Definition | Formula | Precision | Reportable? | Status | Notes |
| PC.D.REL | PC.D.raw | Relative frequency D | PC.D.raw / 24 | store full precision | YES | ACTIVE | Within-person frequency. |
| PC.I.REL | PC.I.raw | Relative frequency I | PC.I.raw / 24 | store full precision | YES | ACTIVE | Within-person frequency. |
| PC.S.REL | PC.S.raw | Relative frequency S | PC.S.raw / 24 | store full precision | YES | ACTIVE | Within-person frequency. |
| PC.C.REL | PC.C.raw | Relative frequency C | PC.C.raw / 24 | store full precision | YES | ACTIVE | Within-person frequency. |
| PC.RANKING | D/I/S/C raw | Tie-aware ranking | descending(raw), preserving ties | NaN | YES | ACTIVE | No arbitrary tiebreak. |
| PC.GAP12 | Ranking | Top vs second gap | P1\_raw - P2\_raw | integer | YES | ACTIVE | Tie-aware. |
| PC.GAP23 | Ranking | Second vs third gap | P2\_raw - P3\_raw | integer | YES | ACTIVE | Tie-aware. |
| PC.ENTROPY | PC relative frequencies | Normalized Shannon entropy | -SUM(p\*LN(p))/LN(4) | store full precision | RESEARCH | ACTIVE | 0\*ln(0)=0; 1 balanced, 0 concentrated. |
| PC.BALANCE | PC | Balance metric | NOT\_IMPLEMENTED | NaN | NO | NOT\_IMPLEMENTED | Do not invent formula. |
| PRC.V.FORCED.REL | PRC V forced raw | Relative forced choice | V\_raw / 8 | store full precision | YES | ACTIVE | Not identity percentage. |
| PRC.A.FORCED.REL | PRC A forced raw | Relative forced choice | A\_raw / 8 | store full precision | YES | ACTIVE | Not identity percentage. |
| PRC.C.FORCED.REL | PRC C forced raw | Relative forced choice | C\_raw / 8 | store full precision | YES | ACTIVE | Not identity percentage. |
| PRC.V.INDEP.MEAN | 4 V ratings | Mean V | SUM(V ratings)/4 | store full precision | YES | ACTIVE | Scale 1–5. |
| PRC.A.INDEP.MEAN | 4 A ratings | Mean A | SUM(A ratings)/4 | store full precision | YES | ACTIVE | Scale 1–5. |
| PRC.C.INDEP.MEAN | 4 C ratings | Mean C | SUM(C ratings)/4 | store full precision | YES | ACTIVE | Scale 1–5. |
| PRC.\*.INDEP.NORM | Independent mean | Optional normalized display | ((mean-1)/4)\*100 | store full precision | OPTIONAL | ACTIVE | Preserve mean as source value. |
| DR.SPEED.NORM | DR speed raw | Normalized speed | ((raw-3)/9)\*100 | store full precision | YES | ACTIVE | No high=good inference. |
| DR.IMPACT.NORM | DR impact raw | Normalized impact | ((raw-3)/9)\*100 | store full precision | YES | ACTIVE | No high=good inference. |
| DR.PERSISTENCE.NORM | DR persistence raw | Normalized persistence | ((raw-3)/9)\*100 | store full precision | YES | ACTIVE | No high=good inference. |
| DR.EXTERNALIZATION.NORM | DR externalization raw | Normalized externalization | ((raw-3)/9)\*100 | store full precision | YES | ACTIVE | No high=good inference. |

## 06_RELATION_GROUPS
| Relation Groups — Research Only | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Group ID | Item A | Item B | Theme | Main Score Impact | Research Use | Forbidden Output |
| RG-01 | PC-007 | PC-027 | Autonomia | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |
| RG-02 | PC-001 | PC-023 | Decisão sob incerteza | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |
| RG-03 | PC-016 | PC-033 | Constância | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |
| RG-04 | PC-021 | PC-028 | Critério / ambiguidade | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |
| RG-05 | TH-002 | TH-015 | Persistência pós-conflito | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |
| RG-06 | TH-003 | TH-012 | Externalização em contexto negativo | NONE | Analyze convergence/divergence after pilot | No lie score / honesty score / consistency % |

## 07_OUTPUT_SCHEMA
| Minimum Score Engine Output Schema | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Field / Object | Type | Required | Example / Range | Source | Persist? | Versioned? | Notes |
| scoring\_run\_id | UUID | YES | uuid | system | YES | YES | Immutable run identifier. |
| assessment\_id | UUID | YES | uuid | assessment | YES | YES | Must belong to COMPLETED assessment. |
| scoring\_version | string | YES | SCORE-P1.0 | release manifest | YES | YES | Required lineage. |
| instrument\_version | string | YES | MGH-P1.0 | release manifest | YES | YES | Compatibility check. |
| item\_bank\_version | string | YES | BANK-0.2 | release manifest | YES | YES | Compatibility check. |
| pc\_raw | object | YES | D/I/S/C 0–24 | responses | YES | YES | Sum must be 24. |
| pc\_relative | object | YES | 0–1 | derived | YES | YES | Store precision. |
| pc\_ranking | object | YES | tie-aware ranks | derived | YES | YES | No forced winner. |
| pc\_gaps | object | YES | GAP12/GAP23 | derived | YES | YES | Tie-aware. |
| pc\_entropy | decimal | YES | 0–1 | derived | YES | YES | Research/interpretive support. |
| pc\_facets | array | YES | hits/opportunities | responses | YES | YES | Only where facet\_signal exists. |
| prc\_forced | object | YES | V/A/C counts + rel | responses | YES | YES | Separate from Independent. |
| prc\_independent | object | YES | means + norm | responses | YES | YES | Preserve means. |
| dr\_axes | object | YES | raw + norm | responses | YES | YES | 4 axes, no total. |
| lineage | array | YES | metric→response/item | derived | YES | YES | Required for later Evidence Engine. |
| input\_hash | string | RECOMMENDED | hash | responses/version set | YES | YES | Supports idempotency/audit. |

## 08_VALIDATION_RULES
| SCORE-P1.0 — Validation & Failure Rules | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN |
| Rule ID | Validation | Expected | Failure | Severity | Notes |
| SCORE-001 | Assessment status | COMPLETED | ASSESSMENT\_NOT\_READY | BLOCKING | Do not score partial assessment. |
| SCORE-002 | Scored responses count | 56 | ASSESSMENT\_NOT\_READY | BLOCKING | Exact count. |
| SCORE-003 | PC responses | 24 | SCORE\_CONFIGURATION\_ERROR | BLOCKING | Each scores exactly one D/I/S/C target. |
| SCORE-004 | PC raw integrity | D+I+S+C=24 | SCORE\_CONFIGURATION\_ERROR | BLOCKING | No missing/double-scored option. |
| SCORE-005 | PRC Forced responses | 8 | SCORE\_CONFIGURATION\_ERROR | BLOCKING | Each scores exactly one V/A/C. |
| SCORE-006 | PRC Independent ratings | 12 | SCORE\_CONFIGURATION\_ERROR | BLOCKING | 4 ratings per modality. |
| SCORE-007 | PRC Independent range | 1–5 | INVALID\_OPTION | BLOCKING | No out-of-range rating. |
| SCORE-008 | DR responses | 12 | SCORE\_CONFIGURATION\_ERROR | BLOCKING | 3 per axis. |
| SCORE-009 | DR option order/randomization | fixed / not randomizable | INSTRUMENT\_CONFIGURATION\_ERROR | BLOCKING | Do not reverse by display position. |
| SCORE-010 | Version compatibility | MGH-P1.0 + BANK-0.2 + SCORE-P1.0 | VERSION\_MISMATCH | BLOCKING | Use Release Manifest. |
| SCORE-011 | Facet source | facet\_signal must exist | SUPPRESS FACET VALUE | CRITICAL\_PILOT | Do not infer facet from item text. |
| SCORE-012 | Existing same input hash | reuse/return existing run | IDEMPOTENT | CRITICAL\_PILOT | Do not duplicate equivalent scoring runs. |
| SCORE-013 | PC.BALANCE requested | NOT\_IMPLEMENTED | SCORE\_CONFIGURATION\_ERROR | BLOCKING | No formula frozen. |
| SCORE-014 | DR total requested | PROHIBITED | SCORE\_CONFIGURATION\_ERROR | BLOCKING | No DR total in P1.0. |

## 09_GOLDEN_CASES
| Golden Cases Linked to SCORE-P1.0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Case ID | Lens | Input Pattern | Expected Raw | Expected Derived | Expected Special Behavior | Severity | Status |
| G-PC-001 | PC | 6D / 6I / 6S / 6C | 6/6/6/6 | .25 each; entropy=1 | Explicit TOP\_TIE | BLOCKING | DEFINED |
| G-PC-002 | PC | 24D | 24/0/0/0 | D=1.0; others=0; entropy=0 | Single top D | BLOCKING | DEFINED |
| G-PC-003 | PC | 9D / 7I / 3S / 5C | 9/7/3/5 | .375/.291666.../.125/.208333... | Ranks D>I>C>S; GAP12=2; GAP23=2 | BLOCKING | DEFINED |
| G-PRC-001 | PRC Forced | All V | 8/0/0 | V relative=1.0 | Do NOT label '100% visual' | BLOCKING | DEFINED |
| G-PRC-002 | PRC Forced | 4V / 3A / 1C | 4/3/1 | .5/.375/.125 | Relative choices only | BLOCKING | DEFINED |
| G-PRC-003 | PRC Independent | V mean=4.75; A=4; C=3 | 4.75/4/3 | 93.75/75/50 | Preserve means and norms | BLOCKING | DEFINED |
| G-PRC-004 | PRC Independent | All ratings=5 | 5/5/5 | 100/100/100 | Do NOT convert to 33/33/33 | BLOCKING | DEFINED |
| G-DR-001 | DR | Axis raw=12 | 12 | 100 | High≠good | BLOCKING | DEFINED |
| G-DR-002 | DR | Axis raw=3 | 3 | 0 | Low≠bad | BLOCKING | DEFINED |
| G-DR-003 | DR | Axis raw=9 | 9 | 66.666... | Precision retained | BLOCKING | DEFINED |
| G-DR-004 | DR Persistence | D/D/D on persistence items | 12 | 100 | Uses reversed persistence key | BLOCKING | DEFINED |
| G-DR-005 | DR Config | randomizable=true | NaN | NaN | Must fail config validation | BLOCKING | DEFINED |

## 10_CALC_DEMO
| Formula Demonstration — SCORE-P1.0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC Example: 9D / 7I / 3S / 5C | NaN | NaN | NaN | NaN | NaN | NaN |
| D raw | I raw | S raw | C raw | Total | D rel | Entropy |
| 9 | 7 | 3 | 5 | 24 | 0.375 | 0.947787 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Independent Example | NaN | NaN | NaN | NaN | NaN | NaN |
| V mean | A mean | C mean | V norm | A norm | C norm | NaN |
| 4.75 | 4 | 3 | 93.75 | 75 | 50 | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR Normalization Examples | NaN | NaN | NaN | NaN | NaN | NaN |
| Axis raw | Normalized | NaN | NaN | NaN | NaN | NaN |
| 12 | 100 | NaN | NaN | NaN | NaN | NaN |
| 3 | 0 | NaN | NaN | NaN | NaN | NaN |
| 9 | 66.666667 | NaN | NaN | NaN | NaN | NaN |

## 11_SOURCE_GAPS
| Source Gaps — Must Not Be Inferred | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Gap ID | Component | Missing Canonical Source | Current Safe State | Blocks | Owner | Rule |
| GAP-SCORE-001 | PC option mapping | option\_id → D/I/S/C for each of 24 PC items | Scoring rule known; literal mapping pending BANK recovery | Final PC implementation | MGH | Do not map by visual A/B/C/D. |
| GAP-SCORE-002 | PC facet matrix | Complete option/item facet\_signal coverage | Only explicitly known facets retained; others blank | Facet calculation completeness | MGH | Do not infer facet from wording. |
| GAP-SCORE-003 | PRC forced mapping | option\_id → V/A/C for 8 forced items | Scoring rule known; literal mapping pending BANK recovery | Final PRC forced implementation | MGH | Do not infer modality from display order. |
| GAP-SCORE-004 | PRC independent labels | Exact canonical statement text + scale labels | Structure and scoring known | Final participant rendering | MGH | Do not invent wording. |
| GAP-SCORE-005 | BANK literal text | Canonical scenario/option text | ANX-003 structure complete; source recovery required | Instrument publication | MGH | No reconstructed text in production. |