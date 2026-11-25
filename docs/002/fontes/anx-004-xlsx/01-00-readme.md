---
name: 01-00-readme
description: Trecho integral: 00_README.
source: docs/001/MGH_ANX-004_MGH-P1.0_Application_Sequence_v0.1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-177
---

# 00_README

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 00_README
| MGH™ — ANX-004 | MGH-P1.0 Application Sequence | Unnamed: 1 |
| --- | --- |
| NaN | NaN |
| Campo | Valor |
| Código do anexo | MGH-ANX-004 |
| Título | MGH-P1.0 Application Sequence |
| Versão documental | 0.1 |
| Instrumento | MGH-P1.0 |
| Banco relacionado | BANK-0.2 |
| Master baseline | MGH-MASTER-P1.0-RC1 |
| Status | FROZEN FOR PHASE A — PILOT |
| Finalidade | Fonte canônica da ordem de apresentação e do comportamento estrutural dos 48 cenários do P1.0. |
| NaN | NaN |
| REGRAS-CHAVE | NaN |
| Regra | Definição |
| Ordem dos cenários | Fixa. Os 48 cenários não são randomizados entre si. |
| Progresso | Calculado por cenários concluídos: x de 48. Não por 56 respostas pontuáveis. |
| PC | Alternativas podem randomizar; scoring usa option\_id canônico, nunca posição visual. |
| PRC Forced | Alternativas podem randomizar; scoring usa modalidade canônica V/A/C. |
| PRC Independent | A ordem dos blocos V/A/C pode randomizar; escala 1→5 mantém direção fixa. |
| DR | Alternativas não randomizam. Qualquer configuração randomizable=true deve falhar na validação. |
| Resume | A ordem de apresentação já sorteada deve permanecer idêntica após retomada. |
| Relation Groups | São invisíveis ao participante e não geram lie score, honesty score ou consistency %. |
| SELF | Ocorre somente depois dos 48 cenários; não entra no score principal. |
| NaN | NaN |
| NOTA DE CONTROLE | NaN |
| Este anexo define a sequência e o comportamento de apresentação. Ele NÃO substitui o BANK-0.2, que contém a redação canônica dos itens/opções, nem o SCORE-P1.0, que define o cálculo. Se houver conflito entre este anexo e outro artefato canônico, a implementação deve ser bloqueada até resolução formal do conflito. | NaN |

## 01_APPLICATION_SEQUENCE
| MGH-P1.0 — Sequência Oficial dos 48 Cenários | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Seq. | Item Code | Lens | Scenario Type | Scored Responses | Progress Increment | Required | Randomization Policy | Relation Group | Presentation Behavior | Sequence Status | Instrument Version | Bank Version | Method Status |
| 1 | PC-001 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-02 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 2 | PRC-001 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 3 | TH-003 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | RG-06 | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 4 | PC-009R | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 5 | TH-001 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 6 | PC-021 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-04 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 7 | PRC-004R | PRC | PRC\_INDEPENDENT | 3 | 1 | YES | YES — V/A/C block order only | NaN | 3 ratings independentes 1–5; direção da escala fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 8 | PC-014 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 9 | PC-007 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-01 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 10 | PRC-003 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 11 | TH-010 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 12 | PC-035 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 13 | TH-006 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 14 | PC-018 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 15 | PRC-012 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 16 | PC-019 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 17 | PC-016 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-03 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 18 | PRC-005 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 19 | TH-012 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | RG-06 | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 20 | PC-010 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 21 | TH-004R | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 22 | PC-028 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-04 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 23 | PRC-011 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 24 | PC-012 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 25 | PC-002 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 26 | PRC-006R | PRC | PRC\_INDEPENDENT | 3 | 1 | YES | YES — V/A/C block order only | NaN | 3 ratings independentes 1–5; direção da escala fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 27 | TH-007 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 28 | PC-020R | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 29 | TH-002 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | RG-05 | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 30 | PC-023 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-02 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 31 | PRC-002 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 32 | PC-033 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-03 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 33 | PC-027 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | RG-01 | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 34 | PRC-014I | PRC | PRC\_INDEPENDENT | 3 | 1 | YES | YES — V/A/C block order only | NaN | 3 ratings independentes 1–5; direção da escala fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 35 | TH-013 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 36 | PC-036 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 37 | TH-008R | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 38 | PC-015 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 39 | PRC-009 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 40 | PC-008 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 41 | PC-017 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 42 | PRC-010I | PRC | PRC\_INDEPENDENT | 3 | 1 | YES | YES — V/A/C block order only | NaN | 3 ratings independentes 1–5; direção da escala fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 43 | TH-015 | DR | DR\_ORDINAL | 1 | 1 | YES | NO | RG-05 | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 44 | PC-029 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 45 | TH-009R | DR | DR\_ORDINAL | 1 | 1 | YES | NO | NaN | 4 alternativas ordinais; ordem fixa | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 46 | PC-005 | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 47 | PRC-015 | PRC | PRC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 3 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |
| 48 | PC-011R | PC | PC\_FORCED\_CHOICE | 1 | 1 | YES | YES — option order | NaN | 4 opções; escolha única | LOCKED | MGH-P1.0 | BANK-0.2 | PILOT |

## 02_TYPE_RULES
| Regras de Comportamento por Tipo de Cenário | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Scenario Type | Lens | Qty Scenarios | Responses/Scenario | Total Scored Responses | Selection Mode | Option/Block Randomization | Scale Direction | Frontend Exposure | Critical Rule |
| PC\_FORCED\_CHOICE | PC | 24 | 1 | 24 | Escolha única entre 4 opções | SIM — ordem das opções | NaN | Não expor D/I/S/C, facet\_signal ou score\_target | Score por canonical option\_id; posição visual não pontua. |
| PRC\_FORCED\_CHOICE | PRC | 8 | 1 | 8 | Escolha única entre 3 opções | SIM — ordem das opções | NaN | Não expor V/A/C como rótulo metodológico | Forced permanece separado do PRC Independent. |
| PRC\_INDEPENDENT | PRC | 4 | 3 | 12 | 3 ratings independentes por cenário | SIM — ordem dos blocos V/A/C | FIXA 1→5 | Não expor modalidade metodológica quando desnecessário | 5/5/5 é resposta válida; não converter para 33/33/33. |
| DR\_ORDINAL | DR | 12 | 1 | 12 | Escolha única entre 4 alternativas ordinais | NÃO | ORDEM PUBLICADA FIXA | Não expor eixo ou chave de pontuação | randomizable=true é erro bloqueante de configuração. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| CONTAGEM DE INTEGRIDADE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Métrica | Esperado | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Cenários principais | 48 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Respostas pontuáveis | 56 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PC Forced | 24 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Forced | 8 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Independent groups | 4 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| PRC Independent ratings | 12 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| DR | 12 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| SELF pós-instrumento | 8 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Relation Groups | 6 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 03_RELATION_GROUPS
| MGH-P1.0 — Relation Groups | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN |
| Group ID | Item A | Item B | Tema | Regra de Uso |
| RG-01 | PC-007 | PC-027 | Autonomia | Pesquisa relacional; não gera índice de sinceridade ou consistência. |
| RG-02 | PC-001 | PC-023 | Decisão sob incerteza | Pesquisa relacional; não altera score principal. |
| RG-03 | PC-016 | PC-033 | Constância | Pesquisa relacional; divergência não penaliza score. |
| RG-04 | PC-021 | PC-028 | Critério / ambiguidade | Pesquisa relacional; análise posterior. |
| RG-05 | TH-002 | TH-015 | Persistência pós-conflito | Pesquisa relacional DR; sem consistency %. |
| RG-06 | TH-003 | TH-012 | Externalização em contexto negativo | Pesquisa relacional DR; sem lie/honesty score. |
| NaN | NaN | NaN | NaN | NaN |
| RESTRIÇÕES | NaN | NaN | NaN | NaN |
| Os Relation Groups são invisíveis ao participante. | NaN | NaN | NaN | NaN |
| Não aproximar intencionalmente os pares na sequência. | NaN | NaN | NaN | NaN |
| Não gerar honesty score, lie score ou consistency percentage. | NaN | NaN | NaN | NaN |
| Divergência entre pares não reduz automaticamente o score principal. | NaN | NaN | NaN | NaN |
| Análise pertence à Research/Evidence Layer, não ao Participant App. | NaN | NaN | NaN | NaN |

## 04_POST_FLOW
| Fluxo Pós-Cenário 48 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Order | Component | Code/Range | Count | Required | Scores Main Instrument? | Rule |
| 1 | SELF | SELF-01…SELF-08 | 8 | YES | NO | Aplicados somente após os 48 cenários; escala 1–5; usados em pesquisa. |
| 2 | Post-test Feedback | FEEDBACK-P1.0 | Conjunto versionado | YES | NO | Dificuldade, alternativa inadequada, confusão e desejabilidade; não é detector de mentira. |
| 3 | Final Review | SYSTEM | 1 | YES | NO | Pode indicar pendências; não revelar padrão de respostas ou interpretação. |
| 4 | Final Submit | SYSTEM | 1 | YES | NO | Valida completude e bloqueia alterações posteriores. |
| 5 | Completion | SYSTEM | 1 | YES | NO | O0 não exibe resultado automático ao participante. |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| SELF — REFERÊNCIAS DE PESQUISA (NÃO SUBSTITUEM O TEXTO CANÔNICO) | NaN | NaN | NaN | NaN | NaN | NaN |
| SELF-01 | Decidir apesar de informação incompleta | NaN | NaN | NaN | NaN | NaN |
| SELF-02 | Espaço para definir execução | NaN | NaN | NaN | NaN | NaN |
| SELF-03 | Importância de critérios claros | NaN | NaN | NaN | NaN | NaN |
| SELF-04 | Perceptibilidade externa de impacto | NaN | NaN | NaN | NaN | NaN |
| SELF-05 | Permanência de situações difíceis | NaN | NaN | NaN | NaN | NaN |
| SELF-06 | Organização visual ajuda a compreender | NaN | NaN | NaN | NaN | NaN |
| SELF-07 | Conversa ajuda a organizar entendimento | NaN | NaN | NaN | NaN | NaN |
| SELF-08 | Aplicação concreta ajuda a compreender | NaN | NaN | NaN | NaN | NaN |

## 05_VALIDATION_RULES
| Application Sequence — Validation Rules | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN |
| Rule ID | Validation | Expected | Failure Behavior | Severity | Notes |
| APPSEQ-001 | Total de cenários | 48 | BLOCK PUBLICATION | BLOCKING | Nenhum cenário faltante ou extra. |
| APPSEQ-002 | Seq. inicial | PC-001 | BLOCK PUBLICATION | BLOCKING | Scenario 1 congelado. |
| APPSEQ-003 | Seq. final | PC-011R | BLOCK PUBLICATION | BLOCKING | Scenario 48 congelado. |
| APPSEQ-004 | PC count | 24 | BLOCK PUBLICATION | BLOCKING | Todos PC forced-choice. |
| APPSEQ-005 | PRC Forced count | 8 | BLOCK PUBLICATION | BLOCKING | Conjunto oficial P1.0. |
| APPSEQ-006 | PRC Independent groups | 4 | BLOCK PUBLICATION | BLOCKING | Cada grupo gera 3 respostas. |
| APPSEQ-007 | DR count | 12 | BLOCK PUBLICATION | BLOCKING | IDs legados TH preservados. |
| APPSEQ-008 | Scored responses total | 56 | BLOCK PUBLICATION | BLOCKING | 24+8+12+12. |
| APPSEQ-009 | DR randomization | FALSE | INSTRUMENT\_CONFIGURATION\_ERROR | BLOCKING | Qualquer DR randomizável deve falhar. |
| APPSEQ-010 | Scenario order randomization | FALSE | INSTRUMENT\_CONFIGURATION\_ERROR | BLOCKING | Ordem 1–48 fixa. |
| APPSEQ-011 | Resume presentation stability | TRUE | BLOCK PILOT RELEASE | CRITICAL\_PILOT | Ordem já apresentada deve persistir. |
| APPSEQ-012 | SELF before scenario 48 | FALSE | BLOCK PILOT RELEASE | BLOCKING | SELF só após os 48 cenários. |
| APPSEQ-013 | Relation Groups visible to participant | FALSE | BLOCK PILOT RELEASE | BLOCKING | Metadado interno. |
| APPSEQ-014 | Score target exposed to frontend | FALSE | SECURITY FAIL | BLOCKING | Não expor D/I/S/C, V/A/C, DR axis ou facet\_signal desnecessariamente. |

## 06_CHANGE_CONTROL
| Controle de Mudanças — ANX-004 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN |
| Change Type | Example | Instrument Version Impact | Requires Change Request? | Golden Impact | Rule |
| UI-only | Espaçamento, tipografia, contraste | NO | NO, se sem efeito semântico | NO | Pode mudar App Version sem mudar MGH-P1.0. |
| Option presentation UI | Card vs radio button, sem mudar conteúdo | NO | REVIEW | POSSIBLE | Não alterar equivalência visual ou induzir resposta. |
| Scenario order | Trocar posição de qualquer cenário | YES | YES | YES | Nova versão do instrumento. |
| Randomization policy | Passar DR para randomizable=true | YES / PROHIBITED IN P1.0 | YES | YES | P1.0 bloqueia esta mudança. |
| Requiredness | Permitir pular cenário antes obrigatório | YES | YES | YES | Mudança metodológica. |
| Scenario type | Forced → Independent | YES | YES | YES | Outro instrumento/versão. |
| SELF placement | Mover SELF antes do cenário 48 | YES / PROHIBITED IN P1.0 | YES | YES | Contamina fluxo e pesquisa. |