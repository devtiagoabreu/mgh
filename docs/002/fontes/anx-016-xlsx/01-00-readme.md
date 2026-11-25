---
name: 01-00-readme
description: Trecho integral: 00_README.
source: docs/001/MGH_ANX-016_RTM-P1.0_Requirement_Traceability_Matrix_v0.1.xlsx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-447
---

# 00_README

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

## 00_README
| MGH™ — ANX-016 | RTM-P1.0 Requirement Traceability Matrix | Unnamed: 1 |
| --- | --- |
| NaN | NaN |
| Campo | Valor |
| Código do anexo | MGH-ANX-016 |
| Registro | RTM-P1.0 |
| Versão documental | 0.1 |
| Master baseline | MGH-MASTER-P1.0-RC1 |
| Escopo principal | Phase A — Pilot Core |
| Status | ACTIVE — PRE-IMPLEMENTATION TRACEABILITY BASELINE |
| Finalidade | Rastrear cada requisito até sua fonte, teste, severidade, componente, aceite, evidência e status de implementação. |
| NaN | NaN |
| REGRA-MÃE | NaN |
| Todo requisito P0/P1 da Fase A deve possuir fonte identificável, teste ou evidência de verificação, critério de aceite, responsável e status. Um requisito não é considerado concluído apenas porque a tela existe: ele precisa passar pelo critério de aceite correspondente. | NaN |
| NaN | NaN |
| NaN | NaN |
| NaN | NaN |
| NaN | NaN |
| STATUS PADRÃO | NaN |
| Status | Uso |
| FROZEN | Decisão/especificação congelada; não é item de implementação. |
| ACTIVE | Controle documental ativo. |
| NOT\_IMPLEMENTED | Requisito ainda não implementado. |
| IN\_PROGRESS | Implementação em andamento. |
| READY\_FOR\_TEST | Implementado aguardando verificação. |
| PASS | Critério de aceite aprovado. |
| FAIL | Critério de aceite falhou. |
| WAITING\_BANK | Bloqueado pela recuperação do BANK-0.2 canônico. |
| DEFERRED | Fora da Fase A; preservado para fase futura. |

## 01_RTM_MASTER
| RTM-P1.0 — Master Requirement Register | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Requirement ID | Domain | Requirement | Source ID | Source Detail | Phase | Priority | Severity | Component | Test ID | Acceptance Criteria | Acceptance Evidence | Owner | Status | Notes |
| REQ-PROD-001 | PRODUCT | Phase A must support O0 pilot integrity, not full commercial MGH. | SRC-001 | Pilot Core objective | A | P0 | BLOCKING | Product Scope | SCOPE-001 | No commercial-only feature is required to complete Phase A. | Scope review | MGH | FROZEN | NaN |
| REQ-PROD-002 | PRODUCT | O0 participant must not receive automatic profile/report after completion. | SRC-001 | O0 participant journey | A | P0 | BLOCKING | Participant App | FLOW-006 | Completion screen confirms submission only; no interpretation/report exposed. | E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-PROD-003 | PRODUCT | AI must not be required for Phase A scoring or interpretation. | SRC-001 | AI boundary | A | P0 | BLOCKING | Architecture | ARCH-001 | Phase A operates fully with deterministic code and without LLM dependency. | Architecture review | Tech + MGH | FROZEN | NaN |
| REQ-PROD-004 | PRODUCT | Web app is the initial delivery model; native apps are out of Phase A. | SRC-010 | Phase A exclusions | A | P2 | NON\_BLOCKING | Scope | SCOPE-002 | Responsive web app delivered; native iOS/Android not required. | Scope review | MGH | FROZEN | NaN |
| REQ-FLOW-001 | FLOW | Participant accesses assessment through secure unpredictable individual token. | SRC-002 | Secure access flow | A | P0 | BLOCKING | Assessment Access | SEC-TOKEN-001 | Sequential/predictable IDs are not accepted; revoked/invalid token is denied. | Security/E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-002 | FLOW | Invalid assessment link returns neutral message and no sensitive detail. | SRC-002 | Invalid access behavior | A | P1 | CRITICAL\_PILOT | Participant App | FLOW-007 | No participant identity, assessment status internals, or score information leaked. | E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-003 | FLOW | Completed assessment link shows completed state only and never results in O0. | SRC-002 | Completed link behavior | A | P0 | BLOCKING | Participant App | FLOW-008 | Re-opening completed token cannot expose/edit answers or display report. | E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-004 | FLOW | Consent must be versioned and recorded before assessment begins. | SRC-002 | Consent flow | A | P0 | BLOCKING | Consent Module | FLOW-009 | Assessment cannot enter active response flow without accepted consent version. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-005 | FLOW | Professional context is captured for the assessment, not stored as permanent identity truth. | SRC-003 | Professional context entity | A | P1 | CRITICAL\_PILOT | Data Model | DATA-CTX-001 | Context record is linked to assessment/version and can differ across reassessments. | Data model test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-006 | FLOW | Participant sees one scenario per screen. | SRC-002 | Participant UX | A | P1 | CRITICAL\_PILOT | Participant App | FLOW-010 | No multi-page survey dump; one active scenario view at a time. | E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-007 | FLOW | Progress is based on 48 scenarios, not 56 scored responses. | SRC-A04 | Progress rule | A | P0 | BLOCKING | Participant App | APPSEQ-001 | Progress indicator is x/48 and reaches 48 only after the 48th scenario. | E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-008 | FLOW | Autosave must persist responses and show discreet save state. | SRC-002 | Autosave | A | P0 | BLOCKING | Response Engine | FLOW-011 | Saved answer survives reload/session interruption; failure is visible and cannot silently advance. | E2E/Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-009 | FLOW | Resume returns participant to first incomplete scenario and preserves previous presentation order. | SRC-002 | Resume behavior | A | P0 | BLOCKING | Assessment Engine | FLOW-005 | Previously randomized option presentation is identical after resume. | Golden/E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-010 | FLOW | Participant may navigate backward before final submit. | SRC-002 | Navigation | A | P1 | CRITICAL\_PILOT | Participant App | FLOW-012 | Back navigation works before completion and revisions are captured. | E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-011 | FLOW | Final submit validates completeness and locks responses transactionally. | SRC-002 | Final submit | A | P0 | BLOCKING | Assessment Engine | FLOW-001|FLOW-002 | 55/56 fails; complete assessment commits once and becomes COMPLETED. | Golden/E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-012 | FLOW | Second submit is idempotent and must not create duplicate effective scoring jobs. | SRC-002 | Submit idempotency | A | P0 | BLOCKING | Assessment Engine | FLOW-004 | Repeated identical submit yields one effective completion/score job. | Golden/Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-013 | FLOW | Responses cannot be edited after COMPLETED. | SRC-002 | Completion lock | A | P0 | BLOCKING | Response Engine | FLOW-003 | Edit attempt after completion returns ASSESSMENT\_ALREADY\_COMPLETED and preserves RAW. | Golden/E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-014 | FLOW | SELF-01..08 occurs only after scenario 48 and does not enter main score. | SRC-A04 | Post-flow rule | A | P0 | BLOCKING | Participant App / Score Engine | APPSEQ-012 | SELF unavailable before 48; Score Engine ignores SELF responses. | E2E/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-FLOW-015 | FLOW | Post-test feedback is research data, not lie detection. | SRC-006 | Participant feedback | A | P1 | CRITICAL\_PILOT | Research Module | O0-001 | Feedback fields stored independently and never converted to honesty/sincerity score. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-001 | INSTRUMENT | Instrument P1.0 contains exactly 48 scenarios in the frozen sequence. | SRC-A04 | Application sequence | A | P0 | BLOCKING | Instrument Registry | APPSEQ-001 | Validator confirms 48 scenarios, PC-001 first, PC-011R last, exact order. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-002 | INSTRUMENT | P1.0 contains 24 PC forced-choice scenarios. | SRC-A04 | Type counts | A | P0 | BLOCKING | Instrument Registry | APPSEQ-004 | Validator count=24 and all type PC\_FORCED\_CHOICE. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-003 | INSTRUMENT | P1.0 contains 8 PRC forced-choice scenarios. | SRC-A04 | Type counts | A | P0 | BLOCKING | Instrument Registry | APPSEQ-005 | Validator count=8 and all type PRC\_FORCED\_CHOICE. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-004 | INSTRUMENT | P1.0 contains 4 PRC independent groups producing 12 ratings. | SRC-A04 | Type counts | A | P0 | BLOCKING | Instrument Registry | APPSEQ-006 | Validator count=4 groups and 12 scored ratings. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-005 | INSTRUMENT | P1.0 contains 12 DR scenarios. | SRC-A04 | Type counts | A | P0 | BLOCKING | Instrument Registry | APPSEQ-007 | Validator count=12 DR\_ORDINAL. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-006 | INSTRUMENT | PC option order may randomize but scoring must use canonical option\_id. | SRC-004 | PC randomization | A | P0 | BLOCKING | Instrument/Score | G-PC-004 | Changing display order does not change semantic score. | Golden/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-007 | INSTRUMENT | PRC forced option order may randomize but scoring must use canonical modality mapping. | SRC-004 | PRC forced randomization | A | P0 | BLOCKING | Instrument/Score | PRC-RAND-001 | Changing display order does not change V/A/C score. | Golden/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-008 | INSTRUMENT | PRC independent V/A/C block order may randomize but scale direction remains fixed. | SRC-004 | PRC independent behavior | A | P0 | BLOCKING | Participant App | PRC-RAND-002 | Block order may differ; numeric scale semantics remain identical. | E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-009 | INSTRUMENT | DR option order must never randomize in P1.0. | SRC-A04 | DR rule | A | P0 | BLOCKING | Instrument Registry | G-DR-005 | randomizable=true causes INSTRUMENT\_CONFIGURATION\_ERROR. | Golden/Validator | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-010 | INSTRUMENT | Six Relation Groups are internal research metadata and invisible to participant. | SRC-A04 | RG registry | A | P1 | CRITICAL\_PILOT | Instrument Registry | APPSEQ-013 | RG IDs absent from participant payload/UI. | E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-011 | INSTRUMENT | Published instrument/item versions are immutable. | SRC-003 | Versioning principle | A | P0 | BLOCKING | Instrument Registry | VER-003 | Published item text cannot be edited in place; new version required. | Golden/Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-INST-012 | INSTRUMENT | P1.0 item text and option text must come from canonical BANK-0.2, never reconstruction. | SRC-004 | Canonical bank rule | A | P0 | BLOCKING | Instrument Registry | BANK-001 | Production publication blocked until canonical literal text and mappings are supplied. | Source validation | MGH | WAITING\_BANK | NaN |
| REQ-DATA-001 | DATA | RAW response data is immutable. | SRC-003 | RAW layer | A | P0 | BLOCKING | Response Engine | DATA-RAW-001 | No administrative edit of raw response; correction uses new event/status, not overwrite. | Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-002 | DATA | Current response state and response-event history are stored separately. | SRC-003 | Response + ResponseEvent | A | P0 | BLOCKING | Response Engine | DATA-EVT-001 | Final answer is queryable while first→final/revisions remain auditable. | Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-003 | DATA | Option presentation order is persisted per assessment/scenario. | SRC-003 | OPTION\_PRESENTATION | A | P0 | BLOCKING | Response Engine | FLOW-005 | Resume reproduces exact option order previously shown. | Golden/E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-004 | DATA | Technical identifiers use UUIDs; human-readable codes are separate. | SRC-003 | Entity identity | A | P1 | CRITICAL\_PILOT | Data Model | DATA-ID-001 | Primary technical IDs are non-sequential UUID-like values. | Schema review | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-005 | DATA | Identity Vault is separated from assessment/scoring data. | SRC-003 | Identity separation | A | P0 | BLOCKING | Identity & Access | SEC-ID-001 | Score/Evidence modules do not require participant name/email/phone. | Architecture/Security test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-006 | DATA | Scoring runs are immutable and versioned. | SRC-003 | SCORING\_RUN | A | P0 | BLOCKING | Score Engine | VER-002 | Re-scoring creates a new run; old run remains unchanged. | Golden/Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-007 | DATA | Release Manifest binds component versions to each assessment. | SRC-003 | Release manifest | A | P0 | BLOCKING | Version Module | VER-001 | Assessment stores instrument, bank, scoring and relevant release versions. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-008 | DATA | Important lineage is relational and traceable, not stored only as opaque JSON. | SRC-003 | Lineage rule | A | P1 | CRITICAL\_PILOT | Data Model | DATA-LIN-001 | Score output can be traced to contributing response/item/version records. | Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-009 | DATA | Published rules/configuration are immutable; reruns create new run records. | SRC-003 | Immutability | A | P0 | BLOCKING | Version Module | VER-004 | No silent in-place mutation of published methodological config. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-DATA-010 | DATA | Professional context, SELF, feedback and research records remain distinguishable data domains. | SRC-003 | Entity separation | A | P1 | CRITICAL\_PILOT | Data Model | DATA-SEP-001 | No flattening into single untyped JSON response blob. | Schema review | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-001 | SCORING | Score Engine is deterministic, versioned and server-side. | SRC-A05 | Scoring principles | A | P0 | BLOCKING | Score Engine | SCORE-001 | Same valid input+version produces same output; frontend cannot author scores. | Unit/Security | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-002 | SCORING | PC selected semantic option adds exactly +1 to one of D/I/S/C. | SRC-A05 | PC matrix | A | P0 | BLOCKING | Score Engine | G-PC-001|002|003 | PC totals equal 24 and Golden outputs match expected values. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-003 | SCORING | PC relative frequencies equal raw dimension / 24. | SRC-A05 | Derived metrics | A | P0 | BLOCKING | Score Engine | G-PC-001|002|003 | Golden relative frequencies match full-precision expected values. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-004 | SCORING | PC ranking preserves ties explicitly. | SRC-A05 | PC ranking | A | P0 | BLOCKING | Score Engine | G-PC-001 | 6/6/6/6 returns TOP\_TIE and no arbitrary winner. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-005 | SCORING | PC normalized Shannon entropy is computed with 0ln0=0. | SRC-A05 | Entropy formula | A | P1 | CRITICAL\_PILOT | Score Engine | G-PC-001|002|003 | Balanced case=1; concentrated case=0; 9/7/3/5≈0.9477867203. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-006 | SCORING | PC.BALANCE is NOT\_IMPLEMENTED in P1.0. | SRC-A05 | Derived metrics | A | P0 | BLOCKING | Score Engine | SCORE-013 | Request/config attempting PC.BALANCE fails; no invented formula. | Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-007 | SCORING | PRC Forced scores V/A/C separately over 8 choices. | SRC-A05 | PRC matrix | A | P0 | BLOCKING | Score Engine | G-PRC-F-001|002 | Golden raw/relative outputs match expected values. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-008 | SCORING | PRC Independent stores all 12 ratings and computes 4-rating mean per modality. | SRC-A05 | PRC independent | A | P0 | BLOCKING | Score Engine | G-PRC-I-001|002 | Means V/A/C are correct and retained as source metrics. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-009 | SCORING | PRC Independent optional normalization is ((mean-1)/4)\*100. | SRC-A05 | PRC normalization | A | P0 | BLOCKING | Score Engine | G-PRC-I-001|002 | 4.75→93.75; 4→75; 3→50; 5→100. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-010 | SCORING | PRC Forced and Independent must remain separate; no master PRC score. | SRC-A05 | PRC integrity | A | P0 | BLOCKING | Score Engine | PRC-INT-005 | Outputs expose separate sources and no averaged/fused PRC score. | Unit/Review | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-011 | SCORING | DR Speed/Impact/Externalization keys A=4 B=3 C=2 D=1; Persistence A=1 B=2 C=3 D=4. | SRC-A05 | DR matrix | A | P0 | BLOCKING | Score Engine | G-DR-001|002|003|004 | DR Golden fixtures match expected raw points. | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-012 | SCORING | Each DR axis raw range is 3–12 and normalizes by ((raw-3)/9)\*100. | SRC-A05 | DR normalization | A | P0 | BLOCKING | Score Engine | G-DR-001|002|003 | 12→100; 3→0; 9→66.666... | Golden/Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-013 | SCORING | No DR Total, resilience, emotional stability or other invented aggregate. | SRC-A05 | DR integrity | A | P0 | BLOCKING | Score Engine | SCORE-014 | Attempted configuration/output for DR total fails or is absent. | Unit/Schema review | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-014 | SCORING | Facets only calculate where canonical facet\_signal exists. | SRC-A05 | PC facet rule | A | P1 | CRITICAL\_PILOT | Score Engine | SCORE-011 | Missing facet\_signal suppresses facet value; wording is never used to infer it. | Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-015 | SCORING | SELF, feedback and Relation Groups do not alter main score. | SRC-A05 | Scoring exclusions | A | P0 | BLOCKING | Score Engine | SCORE-015 | Changing SELF/feedback/RG analysis leaves PC/PRC/DR outputs unchanged. | Unit | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SCORE-016 | SCORING | Scoring input must be complete 56/56 and compatible with release versions. | SRC-A05 | Validation rules | A | P0 | BLOCKING | Score Engine | SCORE-002|010 | Incomplete input → ASSESSMENT\_NOT\_READY; incompatible version → VERSION\_MISMATCH. | Golden/Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-001 | RESEARCH | O0 must support 8–12 pilot participants without automatic participant results. | SRC-006 | O0 wave | A | P0 | BLOCKING | Research Module | O0-GATE-001 | System operational for O0 sample and no external report generated. | Pilot dry run | MGH + Tech | NOT\_IMPLEMENTED | NaN |
| REQ-O0-002 | RESEARCH | Cognitive interview is retrospective, after natural completion. | SRC-006 | Cognitive interview protocol | A | P1 | CRITICAL\_PILOT | Research Admin | O0-COG-001 | Admin workflow records post-completion interview; no think-aloud dependency. | Workflow review | MGH + Tech | NOT\_IMPLEMENTED | NaN |
| REQ-O0-003 | RESEARCH | Cognitive item review supports flags CMP/AMB/NFA/TWO/DES/CTX/VOC/RED/COG/MAP. | SRC-006 | Flag taxonomy | A | P1 | CRITICAL\_PILOT | Research Admin | O0-FLAG-001 | All canonical flags are selectable/storeable with item review records. | Integration/UI test | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-004 | RESEARCH | Occurrence severity supports MINOR/MODERATE/MAJOR/INVALIDATING. | SRC-006 | Occurrence model | A | P1 | CRITICAL\_PILOT | Research Admin | O0-OCC-001 | Occurrence record stores severity and exclusion scope. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-005 | RESEARCH | Item decisions support KEEP/REWRITE\_MINOR/REWRITE\_MAJOR/REKEY\_REVIEW/RESERVE/RETIRE/NEW\_ITEM\_REQUIRED. | SRC-006 | Item survival decisions | A | P1 | CRITICAL\_PILOT | Research Admin | O0-ITEM-001 | Canonical decision list available; no silent item edits mid-wave. | UI/Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-006 | RESEARCH | Gate Review supports ADVANCE / ADVANCE\_WITH\_MINOR\_FIXES / REPEAT\_O0\_WAVE / STOP\_AND\_REDESIGN. | SRC-006 | Gate decisions | A | P1 | CRITICAL\_PILOT | Research Admin | O0-GATE-002 | Gate decision stored with criteria/result and audit trail. | Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-007 | RESEARCH | O0 hypothesis register includes H001–H012. | SRC-006 | Hypothesis register | A | P1 | CRITICAL\_PILOT | Research Admin | O0-HYP-001 | Twelve canonical hypotheses can be tracked with status/outcome. | UI/Integration | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-O0-008 | RESEARCH | Default research exports are pseudonymized. | SRC-008 | Export privacy | A | P0 | BLOCKING | Export Module | SEC-002 | Default export contains participant pseudonym/code but no direct identity. | Golden/Security | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-001 | ADMIN | Internal Phase A admin must provide A01 — Login. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A01 | Login screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-002 | ADMIN | Internal Phase A admin must provide A02 — O0 Dashboard. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A02 | O0 Dashboard screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-003 | ADMIN | Internal Phase A admin must provide A03 — Participants. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A03 | Participants screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-004 | ADMIN | Internal Phase A admin must provide A04 — Create Participant. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A04 | Create Participant screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-005 | ADMIN | Internal Phase A admin must provide A05 — Generate Assessment. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A05 | Generate Assessment screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-006 | ADMIN | Internal Phase A admin must provide A06 — Assessment Detail. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A06 | Assessment Detail screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-007 | ADMIN | Internal Phase A admin must provide A07 — Cognitive Interview. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A07 | Cognitive Interview screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-008 | ADMIN | Internal Phase A admin must provide A08 — Cognitive Item Review. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A08 | Cognitive Item Review screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-009 | ADMIN | Internal Phase A admin must provide A09 — Audit Flags. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A09 | Audit Flags screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-010 | ADMIN | Internal Phase A admin must provide A10 — Occurrences. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A10 | Occurrences screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-011 | ADMIN | Internal Phase A admin must provide A11 — Item Survival. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A11 | Item Survival screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-012 | ADMIN | Internal Phase A admin must provide A12 — Change Log. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A12 | Change Log screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-013 | ADMIN | Internal Phase A admin must provide A13 — Hypothesis Register. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A13 | Hypothesis Register screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-014 | ADMIN | Internal Phase A admin must provide A14 — Gate Review. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A14 | Gate Review screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ADM-015 | ADMIN | Internal Phase A admin must provide A15 — Internal Scores. | SRC-002 | Internal screens A01–A15 | A | P1 | CRITICAL\_PILOT | Admin App | ADM-A15 | Internal Scores screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | UI/E2E | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-001 | SECURITY | HTTPS is required for pilot environment. | SRC-008 | Transport security | A | P0 | BLOCKING | Infrastructure | SEC-HTTPS-001 | All participant/admin traffic served over HTTPS; HTTP redirected/disabled. | Security test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-002 | SECURITY | Admin production/pilot access requires MFA. | SRC-008 | Admin MFA | A | P0 | BLOCKING | Identity & Access | SEC-MFA-001 | Privileged admin login requires second factor. | Security test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-003 | SECURITY | Authorization is enforced server-side with granular RBAC. | SRC-008 | RBAC | A | P0 | BLOCKING | Identity & Access | SEC-RBAC-001 | Unauthorized API calls denied regardless of frontend state. | Security test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-004 | SECURITY | Secrets must not be hardcoded in repository. | SRC-008 | Secrets management | A | P0 | BLOCKING | Infrastructure | SEC-SECRET-001 | Secrets supplied by secure environment/secret manager and absent from source control. | Security review | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-005 | SECURITY | DEV/STAGING/PILOT use separate databases/environments. | SRC-008 | Environment separation | A | P0 | BLOCKING | Infrastructure | SEC-ENV-001 | No shared production/pilot DB selected by environment column. | Architecture review | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-006 | SECURITY | Real participant data must not be copied into DEV. | SRC-008 | Test data | A | P0 | BLOCKING | Infrastructure | SEC-DATA-001 | DEV uses synthetic/Golden fixtures only. | Security/process review | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-007 | SECURITY | PII, tokens and full response payloads must be redacted from logs/error tracking. | SRC-008 | Log redaction | A | P0 | BLOCKING | Observability | SEC-LOG-001 | Security review finds no direct identity/token/full RAW payload leakage in logs. | Security test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-008 | SECURITY | Backup exists and restore is actually tested. | SRC-008 | Backup/restore | A | P0 | BLOCKING | Infrastructure | SEC-BKP-001 | Documented restore test succeeds in staging/pilot-like environment. | Restore evidence | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-009 | SECURITY | Identified export requires explicit permission and audit. | SRC-008 | Export controls | A | P0 | BLOCKING | Export Module | SEC-003 | Without permission returns UNAUTHORIZED\_ACTION; permitted export creates audit record. | Golden/Security | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-SEC-010 | SECURITY | Participant-facing payload must not expose score\_target, facet, construct, reverse key or relation metadata. | SRC-007 | Public payload Golden | A | P0 | BLOCKING | API | SEC-001 | Automated API test finds none of the prohibited methodological fields. | Golden/Security | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-NFR-001 | NFR | Typical scenario transition should feel under ~1 second; save ideal <500ms and acceptable <1s. | SRC-008 | Performance targets | A | P1 | CRITICAL\_PILOT | Participant App/API | PERF-001 | Pilot load test meets target under expected O0 conditions. | Performance test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-NFR-002 | NFR | Participant experience must be mobile-responsive; admin desktop-first responsive. | SRC-008 | Device strategy | A | P1 | CRITICAL\_PILOT | Frontend | UX-RESP-001 | Critical flows pass agreed mobile and desktop viewport tests. | E2E/Visual | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-NFR-003 | NFR | Backend timestamps are stored in UTC. | SRC-008 | Time standard | A | P1 | CRITICAL\_PILOT | Data Model | DATA-TIME-001 | Persisted event timestamps use UTC and display conversion is presentation-level. | Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-NFR-004 | NFR | System must remain usable on unstable connections through autosave/resume behavior. | SRC-008 | Connectivity resilience | A | P1 | CRITICAL\_PILOT | Participant App | UX-NET-001 | Simulated interruption does not lose already acknowledged saved responses. | E2E | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-NFR-005 | NFR | Basic observability must capture technical errors and incidents without leaking sensitive payloads. | SRC-008 | Observability | A | P1 | CRITICAL\_PILOT | Observability | OBS-001 | Errors are traceable by technical IDs while respecting redaction rules. | Ops review | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-QA-001 | QUALITY | All BLOCKING Golden cases applicable to Phase A must pass before O0. | SRC-A15 | Golden acceptance gate | A | P0 | BLOCKING | CI/CD | GA-001 | CI report shows 100% PASS for applicable BLOCKING fixtures. | CI evidence | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-QA-002 | QUALITY | Golden failures must block deployment of scoring/instrument changes. | SRC-007 | Golden deployment rule | A | P0 | BLOCKING | CI/CD | QA-DEPLOY-001 | Pipeline stops release when blocking Golden test fails. | CI pipeline test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-QA-003 | QUALITY | Requirement traceability must link requirement→test→implementation→result. | SRC-007 | RTM requirement | A | P1 | CRITICAL\_PILOT | Quality Governance | RTM-001 | Every P0/P1 requirement has a test ID, owner and acceptance evidence/status. | RTM review | Tech + MGH | ACTIVE | NaN |
| REQ-QA-004 | QUALITY | Technical acceptance and methodology acceptance are separate. | SRC-007 | Dual acceptance | A | P1 | CRITICAL\_PILOT | Governance | QA-ACC-001 | Release record shows technical and methodological approval where applicable. | Release review | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-QA-005 | QUALITY | Instrument configuration validator must enforce exact counts/order/randomization rules. | SRC-A04 | Validation rules | A | P0 | BLOCKING | Instrument Registry | APPSEQ-001..014 | Invalid configuration cannot be published. | Validator/Golden | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-QA-006 | QUALITY | Score Engine must preserve computational precision and round only for display. | SRC-005 | Precision rule | A | P1 | CRITICAL\_PILOT | Score Engine | SCORE-PREC-001 | Stored derived values preserve full precision used by Golden fixtures. | Unit/DB test | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ARCH-001 | ARCHITECTURE | Initial architecture is modular monolith unless a justified alternative is formally approved. | SRC-003 | Architecture decision | A | P1 | CRITICAL\_PILOT | Architecture | ARCH-002 | Modules have clear boundaries; no microservice sprawl without approved rationale. | Architecture review | Tech + MGH | FROZEN | NaN |
| REQ-ARCH-002 | ARCHITECTURE | Score Engine is isolated from UI/reporting concerns. | SRC-003 | Bounded modules | A | P0 | BLOCKING | Architecture | ARCH-SCORE-001 | Score tests run independently from frontend/report rendering. | Architecture/Unit | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-ARCH-003 | ARCHITECTURE | Avoid giant calculateProfileAndGenerateReport-style function. | SRC-003 | Anti-pattern | A | P1 | CRITICAL\_PILOT | Architecture | ARCH-ANTI-001 | Scoring, evidence/future interpretation and reporting boundaries remain distinct. | Code review | Tech + MGH | NOT\_IMPLEMENTED | NaN |
| REQ-ARCH-004 | ARCHITECTURE | Asynchronous jobs are used for scoring/export/report-like work when appropriate and are idempotent. | SRC-003 | Job model | A | P1 | CRITICAL\_PILOT | Job Engine | JOB-001 | Job state supports PENDING/RUNNING/COMPLETED/FAILED/RETRYING with idempotency controls. | Integration | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-OWN-001 | OWNERSHIP | Repository must be under company/project control from first commit. | SRC-010 | Repository ownership | A | P0 | BLOCKING | Governance | OWN-001 | Company account owns repo; developer has delegated access. | Governance evidence | MGH + Tech | FROZEN | NaN |
| REQ-OWN-002 | OWNERSHIP | Cloud, database, domain and primary credentials must remain under company control. | SRC-010 | Infra ownership | A | P0 | BLOCKING | Governance | OWN-002 | Ownership/access records confirm company control and takeover capability. | Governance evidence | MGH + Tech | FROZEN | NaN |
| REQ-OWN-003 | OWNERSHIP | Project must include migrations, deployment instructions and handoff documentation. | SRC-010 | Handoff requirements | A | P1 | CRITICAL\_PILOT | Documentation | OWN-003 | Another developer can provision/run/deploy using supplied docs and authorized credentials. | Handoff test | Tech | NOT\_IMPLEMENTED | NaN |
| REQ-OWN-004 | OWNERSHIP | Change Requests must distinguish new scope from defects against accepted requirements. | SRC-010 | Scope governance | A | P1 | CRITICAL\_PILOT | Governance | CR-001 | Issue classification records bug vs change with scope/time/cost/version impact. | Process review | MGH + Tech | FROZEN | NaN |
| REQ-FUT-001 | FUTURE\_MOTOR | Future UIGs must consume Evidence Dictionary outputs, not raw answers directly. | SRC-009 | Evidence boundary | C | P2 | FUTURE | Future Interpretation | INT-ARCH-001 | Architecture preserves future Evidence→UIG interface; no Phase A direct RAW→UIG implementation. | Architecture review | Tech + MGH | DEFERRED | NaN |
| REQ-FUT-002 | FUTURE\_MOTOR | Future system must support Block Rules, contextual precedence, collision resolution and synthesis. | SRC-009 | Interpretation pipeline | C | P2 | FUTURE | Future Interpretation | INT-ARCH-002 | Phase A schema/interfaces do not preclude future versioned engines. | Architecture review | Tech + MGH | DEFERRED | NaN |
| REQ-FUT-003 | FUTURE\_MOTOR | Future Claims/Actions must be traceable back to evidence and RAW lineage. | SRC-009 | Full lineage | C | P2 | FUTURE | Future Interpretation | INT-ARCH-003 | Data model reserves versioned lineage path without implementing commercial report now. | Architecture review | Tech + MGH | DEFERRED | NaN |
| REQ-FUT-004 | FUTURE\_MOTOR | Future AI receives only authorized claims/actions/constraints, not indiscriminate RAW. | SRC-009 | AI boundary | D | P2 | FUTURE | Future Language Layer | INT-AI-001 | No Phase A design couples report generation directly to raw responses. | Architecture review | Tech + MGH | DEFERRED | NaN |

## 02_P0_P1_GATE
| Phase A — P0/P1 Readiness Gate | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Requirement ID | Domain | Priority | Severity | Requirement | Test ID | Owner | Current Status | Blocks O0? | Gate Rule |
| REQ-PROD-001 | PRODUCT | P0 | BLOCKING | Phase A must support O0 pilot integrity, not full commercial MGH. | SCOPE-001 | MGH | FROZEN | YES | Must PASS before O0 |
| REQ-PROD-002 | PRODUCT | P0 | BLOCKING | O0 participant must not receive automatic profile/report after completion. | FLOW-006 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-PROD-003 | PRODUCT | P0 | BLOCKING | AI must not be required for Phase A scoring or interpretation. | ARCH-001 | Tech + MGH | FROZEN | YES | Must PASS before O0 |
| REQ-FLOW-001 | FLOW | P0 | BLOCKING | Participant accesses assessment through secure unpredictable individual token. | SEC-TOKEN-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-002 | FLOW | P1 | CRITICAL\_PILOT | Invalid assessment link returns neutral message and no sensitive detail. | FLOW-007 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-FLOW-003 | FLOW | P0 | BLOCKING | Completed assessment link shows completed state only and never results in O0. | FLOW-008 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-004 | FLOW | P0 | BLOCKING | Consent must be versioned and recorded before assessment begins. | FLOW-009 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-005 | FLOW | P1 | CRITICAL\_PILOT | Professional context is captured for the assessment, not stored as permanent identity truth. | DATA-CTX-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-FLOW-006 | FLOW | P1 | CRITICAL\_PILOT | Participant sees one scenario per screen. | FLOW-010 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-FLOW-007 | FLOW | P0 | BLOCKING | Progress is based on 48 scenarios, not 56 scored responses. | APPSEQ-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-008 | FLOW | P0 | BLOCKING | Autosave must persist responses and show discreet save state. | FLOW-011 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-009 | FLOW | P0 | BLOCKING | Resume returns participant to first incomplete scenario and preserves previous presentation order. | FLOW-005 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-010 | FLOW | P1 | CRITICAL\_PILOT | Participant may navigate backward before final submit. | FLOW-012 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-FLOW-011 | FLOW | P0 | BLOCKING | Final submit validates completeness and locks responses transactionally. | FLOW-001|FLOW-002 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-012 | FLOW | P0 | BLOCKING | Second submit is idempotent and must not create duplicate effective scoring jobs. | FLOW-004 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-013 | FLOW | P0 | BLOCKING | Responses cannot be edited after COMPLETED. | FLOW-003 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-014 | FLOW | P0 | BLOCKING | SELF-01..08 occurs only after scenario 48 and does not enter main score. | APPSEQ-012 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-FLOW-015 | FLOW | P1 | CRITICAL\_PILOT | Post-test feedback is research data, not lie detection. | O0-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-INST-001 | INSTRUMENT | P0 | BLOCKING | Instrument P1.0 contains exactly 48 scenarios in the frozen sequence. | APPSEQ-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-002 | INSTRUMENT | P0 | BLOCKING | P1.0 contains 24 PC forced-choice scenarios. | APPSEQ-004 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-003 | INSTRUMENT | P0 | BLOCKING | P1.0 contains 8 PRC forced-choice scenarios. | APPSEQ-005 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-004 | INSTRUMENT | P0 | BLOCKING | P1.0 contains 4 PRC independent groups producing 12 ratings. | APPSEQ-006 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-005 | INSTRUMENT | P0 | BLOCKING | P1.0 contains 12 DR scenarios. | APPSEQ-007 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-006 | INSTRUMENT | P0 | BLOCKING | PC option order may randomize but scoring must use canonical option\_id. | G-PC-004 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-007 | INSTRUMENT | P0 | BLOCKING | PRC forced option order may randomize but scoring must use canonical modality mapping. | PRC-RAND-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-008 | INSTRUMENT | P0 | BLOCKING | PRC independent V/A/C block order may randomize but scale direction remains fixed. | PRC-RAND-002 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-009 | INSTRUMENT | P0 | BLOCKING | DR option order must never randomize in P1.0. | G-DR-005 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-010 | INSTRUMENT | P1 | CRITICAL\_PILOT | Six Relation Groups are internal research metadata and invisible to participant. | APPSEQ-013 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-INST-011 | INSTRUMENT | P0 | BLOCKING | Published instrument/item versions are immutable. | VER-003 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-INST-012 | INSTRUMENT | P0 | BLOCKING | P1.0 item text and option text must come from canonical BANK-0.2, never reconstruction. | BANK-001 | MGH | WAITING\_BANK | YES | Must PASS before O0 |
| REQ-DATA-001 | DATA | P0 | BLOCKING | RAW response data is immutable. | DATA-RAW-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-002 | DATA | P0 | BLOCKING | Current response state and response-event history are stored separately. | DATA-EVT-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-003 | DATA | P0 | BLOCKING | Option presentation order is persisted per assessment/scenario. | FLOW-005 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-004 | DATA | P1 | CRITICAL\_PILOT | Technical identifiers use UUIDs; human-readable codes are separate. | DATA-ID-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-DATA-005 | DATA | P0 | BLOCKING | Identity Vault is separated from assessment/scoring data. | SEC-ID-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-006 | DATA | P0 | BLOCKING | Scoring runs are immutable and versioned. | VER-002 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-007 | DATA | P0 | BLOCKING | Release Manifest binds component versions to each assessment. | VER-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-008 | DATA | P1 | CRITICAL\_PILOT | Important lineage is relational and traceable, not stored only as opaque JSON. | DATA-LIN-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-DATA-009 | DATA | P0 | BLOCKING | Published rules/configuration are immutable; reruns create new run records. | VER-004 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-DATA-010 | DATA | P1 | CRITICAL\_PILOT | Professional context, SELF, feedback and research records remain distinguishable data domains. | DATA-SEP-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-SCORE-001 | SCORING | P0 | BLOCKING | Score Engine is deterministic, versioned and server-side. | SCORE-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-002 | SCORING | P0 | BLOCKING | PC selected semantic option adds exactly +1 to one of D/I/S/C. | G-PC-001|002|003 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-003 | SCORING | P0 | BLOCKING | PC relative frequencies equal raw dimension / 24. | G-PC-001|002|003 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-004 | SCORING | P0 | BLOCKING | PC ranking preserves ties explicitly. | G-PC-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-005 | SCORING | P1 | CRITICAL\_PILOT | PC normalized Shannon entropy is computed with 0ln0=0. | G-PC-001|002|003 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-SCORE-006 | SCORING | P0 | BLOCKING | PC.BALANCE is NOT\_IMPLEMENTED in P1.0. | SCORE-013 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-007 | SCORING | P0 | BLOCKING | PRC Forced scores V/A/C separately over 8 choices. | G-PRC-F-001|002 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-008 | SCORING | P0 | BLOCKING | PRC Independent stores all 12 ratings and computes 4-rating mean per modality. | G-PRC-I-001|002 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-009 | SCORING | P0 | BLOCKING | PRC Independent optional normalization is ((mean-1)/4)\*100. | G-PRC-I-001|002 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-010 | SCORING | P0 | BLOCKING | PRC Forced and Independent must remain separate; no master PRC score. | PRC-INT-005 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-011 | SCORING | P0 | BLOCKING | DR Speed/Impact/Externalization keys A=4 B=3 C=2 D=1; Persistence A=1 B=2 C=3 D=4. | G-DR-001|002|003|004 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-012 | SCORING | P0 | BLOCKING | Each DR axis raw range is 3–12 and normalizes by ((raw-3)/9)\*100. | G-DR-001|002|003 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-013 | SCORING | P0 | BLOCKING | No DR Total, resilience, emotional stability or other invented aggregate. | SCORE-014 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-014 | SCORING | P1 | CRITICAL\_PILOT | Facets only calculate where canonical facet\_signal exists. | SCORE-011 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-SCORE-015 | SCORING | P0 | BLOCKING | SELF, feedback and Relation Groups do not alter main score. | SCORE-015 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SCORE-016 | SCORING | P0 | BLOCKING | Scoring input must be complete 56/56 and compatible with release versions. | SCORE-002|010 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-O0-001 | RESEARCH | P0 | BLOCKING | O0 must support 8–12 pilot participants without automatic participant results. | O0-GATE-001 | MGH + Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-O0-002 | RESEARCH | P1 | CRITICAL\_PILOT | Cognitive interview is retrospective, after natural completion. | O0-COG-001 | MGH + Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-003 | RESEARCH | P1 | CRITICAL\_PILOT | Cognitive item review supports flags CMP/AMB/NFA/TWO/DES/CTX/VOC/RED/COG/MAP. | O0-FLAG-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-004 | RESEARCH | P1 | CRITICAL\_PILOT | Occurrence severity supports MINOR/MODERATE/MAJOR/INVALIDATING. | O0-OCC-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-005 | RESEARCH | P1 | CRITICAL\_PILOT | Item decisions support KEEP/REWRITE\_MINOR/REWRITE\_MAJOR/REKEY\_REVIEW/RESERVE/RETIRE/NEW\_ITEM\_REQUIRED. | O0-ITEM-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-006 | RESEARCH | P1 | CRITICAL\_PILOT | Gate Review supports ADVANCE / ADVANCE\_WITH\_MINOR\_FIXES / REPEAT\_O0\_WAVE / STOP\_AND\_REDESIGN. | O0-GATE-002 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-007 | RESEARCH | P1 | CRITICAL\_PILOT | O0 hypothesis register includes H001–H012. | O0-HYP-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-O0-008 | RESEARCH | P0 | BLOCKING | Default research exports are pseudonymized. | SEC-002 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-ADM-001 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A01 — Login. | ADM-A01 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-002 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A02 — O0 Dashboard. | ADM-A02 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-003 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A03 — Participants. | ADM-A03 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-004 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A04 — Create Participant. | ADM-A04 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-005 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A05 — Generate Assessment. | ADM-A05 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-006 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A06 — Assessment Detail. | ADM-A06 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-007 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A07 — Cognitive Interview. | ADM-A07 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-008 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A08 — Cognitive Item Review. | ADM-A08 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-009 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A09 — Audit Flags. | ADM-A09 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-010 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A10 — Occurrences. | ADM-A10 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-011 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A11 — Item Survival. | ADM-A11 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-012 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A12 — Change Log. | ADM-A12 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-013 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A13 — Hypothesis Register. | ADM-A13 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-014 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A14 — Gate Review. | ADM-A14 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ADM-015 | ADMIN | P1 | CRITICAL\_PILOT | Internal Phase A admin must provide A15 — Internal Scores. | ADM-A15 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-SEC-001 | SECURITY | P0 | BLOCKING | HTTPS is required for pilot environment. | SEC-HTTPS-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-002 | SECURITY | P0 | BLOCKING | Admin production/pilot access requires MFA. | SEC-MFA-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-003 | SECURITY | P0 | BLOCKING | Authorization is enforced server-side with granular RBAC. | SEC-RBAC-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-004 | SECURITY | P0 | BLOCKING | Secrets must not be hardcoded in repository. | SEC-SECRET-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-005 | SECURITY | P0 | BLOCKING | DEV/STAGING/PILOT use separate databases/environments. | SEC-ENV-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-006 | SECURITY | P0 | BLOCKING | Real participant data must not be copied into DEV. | SEC-DATA-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-007 | SECURITY | P0 | BLOCKING | PII, tokens and full response payloads must be redacted from logs/error tracking. | SEC-LOG-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-008 | SECURITY | P0 | BLOCKING | Backup exists and restore is actually tested. | SEC-BKP-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-009 | SECURITY | P0 | BLOCKING | Identified export requires explicit permission and audit. | SEC-003 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-SEC-010 | SECURITY | P0 | BLOCKING | Participant-facing payload must not expose score\_target, facet, construct, reverse key or relation metadata. | SEC-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-NFR-001 | NFR | P1 | CRITICAL\_PILOT | Typical scenario transition should feel under ~1 second; save ideal <500ms and acceptable <1s. | PERF-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-NFR-002 | NFR | P1 | CRITICAL\_PILOT | Participant experience must be mobile-responsive; admin desktop-first responsive. | UX-RESP-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-NFR-003 | NFR | P1 | CRITICAL\_PILOT | Backend timestamps are stored in UTC. | DATA-TIME-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-NFR-004 | NFR | P1 | CRITICAL\_PILOT | System must remain usable on unstable connections through autosave/resume behavior. | UX-NET-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-NFR-005 | NFR | P1 | CRITICAL\_PILOT | Basic observability must capture technical errors and incidents without leaking sensitive payloads. | OBS-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-QA-001 | QUALITY | P0 | BLOCKING | All BLOCKING Golden cases applicable to Phase A must pass before O0. | GA-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-QA-002 | QUALITY | P0 | BLOCKING | Golden failures must block deployment of scoring/instrument changes. | QA-DEPLOY-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-QA-003 | QUALITY | P1 | CRITICAL\_PILOT | Requirement traceability must link requirement→test→implementation→result. | RTM-001 | Tech + MGH | ACTIVE | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-QA-004 | QUALITY | P1 | CRITICAL\_PILOT | Technical acceptance and methodology acceptance are separate. | QA-ACC-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-QA-005 | QUALITY | P0 | BLOCKING | Instrument configuration validator must enforce exact counts/order/randomization rules. | APPSEQ-001..014 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-QA-006 | QUALITY | P1 | CRITICAL\_PILOT | Score Engine must preserve computational precision and round only for display. | SCORE-PREC-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ARCH-001 | ARCHITECTURE | P1 | CRITICAL\_PILOT | Initial architecture is modular monolith unless a justified alternative is formally approved. | ARCH-002 | Tech + MGH | FROZEN | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ARCH-002 | ARCHITECTURE | P0 | BLOCKING | Score Engine is isolated from UI/reporting concerns. | ARCH-SCORE-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS before O0 |
| REQ-ARCH-003 | ARCHITECTURE | P1 | CRITICAL\_PILOT | Avoid giant calculateProfileAndGenerateReport-style function. | ARCH-ANTI-001 | Tech + MGH | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-ARCH-004 | ARCHITECTURE | P1 | CRITICAL\_PILOT | Asynchronous jobs are used for scoring/export/report-like work when appropriate and are idempotent. | JOB-001 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-OWN-001 | OWNERSHIP | P0 | BLOCKING | Repository must be under company/project control from first commit. | OWN-001 | MGH + Tech | FROZEN | YES | Must PASS before O0 |
| REQ-OWN-002 | OWNERSHIP | P0 | BLOCKING | Cloud, database, domain and primary credentials must remain under company control. | OWN-002 | MGH + Tech | FROZEN | YES | Must PASS before O0 |
| REQ-OWN-003 | OWNERSHIP | P1 | CRITICAL\_PILOT | Project must include migrations, deployment instructions and handoff documentation. | OWN-003 | Tech | NOT\_IMPLEMENTED | YES | Must PASS unless explicitly waived in Gate Review |
| REQ-OWN-004 | OWNERSHIP | P1 | CRITICAL\_PILOT | Change Requests must distinguish new scope from defects against accepted requirements. | CR-001 | MGH + Tech | FROZEN | YES | Must PASS unless explicitly waived in Gate Review |

## 03_TEST_CATALOG
| Test / Evidence Catalog | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Test ID | Requirement IDs | Class | Primary Component | Evidence Type | Expected Outcome | Severity | Implementation Status |
| 002 | REQ-SCORE-002, REQ-SCORE-003, REQ-SCORE-005, REQ-SCORE-007, REQ-SCORE-008, REQ-SCORE-009, REQ-SCORE-011, REQ-SCORE-012 | SCORING | Score Engine | Golden/Unit | PC totals equal 24 and Golden outputs match expected values. | BLOCKING | NOT\_IMPLEMENTED |
| 003 | REQ-SCORE-002, REQ-SCORE-003, REQ-SCORE-005, REQ-SCORE-011, REQ-SCORE-012 | SCORING | Score Engine | Golden/Unit | PC totals equal 24 and Golden outputs match expected values. | BLOCKING | NOT\_IMPLEMENTED |
| 004 | REQ-SCORE-011 | SCORING | Score Engine | Golden/Unit | DR Golden fixtures match expected raw points. | BLOCKING | NOT\_IMPLEMENTED |
| 010 | REQ-SCORE-016 | SCORING | Score Engine | Golden/Integration | Incomplete input → ASSESSMENT\_NOT\_READY; incompatible version → VERSION\_MISMATCH. | BLOCKING | NOT\_IMPLEMENTED |
| ADM-A01 | REQ-ADM-001 | ADMIN | Admin App | UI/E2E | Login screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A02 | REQ-ADM-002 | ADMIN | Admin App | UI/E2E | O0 Dashboard screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A03 | REQ-ADM-003 | ADMIN | Admin App | UI/E2E | Participants screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A04 | REQ-ADM-004 | ADMIN | Admin App | UI/E2E | Create Participant screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A05 | REQ-ADM-005 | ADMIN | Admin App | UI/E2E | Generate Assessment screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A06 | REQ-ADM-006 | ADMIN | Admin App | UI/E2E | Assessment Detail screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A07 | REQ-ADM-007 | ADMIN | Admin App | UI/E2E | Cognitive Interview screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A08 | REQ-ADM-008 | ADMIN | Admin App | UI/E2E | Cognitive Item Review screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A09 | REQ-ADM-009 | ADMIN | Admin App | UI/E2E | Audit Flags screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A10 | REQ-ADM-010 | ADMIN | Admin App | UI/E2E | Occurrences screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A11 | REQ-ADM-011 | ADMIN | Admin App | UI/E2E | Item Survival screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A12 | REQ-ADM-012 | ADMIN | Admin App | UI/E2E | Change Log screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A13 | REQ-ADM-013 | ADMIN | Admin App | UI/E2E | Hypothesis Register screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A14 | REQ-ADM-014 | ADMIN | Admin App | UI/E2E | Gate Review screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ADM-A15 | REQ-ADM-015 | ADMIN | Admin App | UI/E2E | Internal Scores screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| APPSEQ-001 | REQ-FLOW-007, REQ-INST-001 | FLOW | Participant App | E2E | Progress indicator is x/48 and reaches 48 only after the 48th scenario. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-001..014 | REQ-QA-005 | QUALITY | Instrument Registry | Validator/Golden | Invalid configuration cannot be published. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-004 | REQ-INST-002 | INSTRUMENT | Instrument Registry | Golden/Validator | Validator count=24 and all type PC\_FORCED\_CHOICE. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-005 | REQ-INST-003 | INSTRUMENT | Instrument Registry | Golden/Validator | Validator count=8 and all type PRC\_FORCED\_CHOICE. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-006 | REQ-INST-004 | INSTRUMENT | Instrument Registry | Golden/Validator | Validator count=4 groups and 12 scored ratings. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-007 | REQ-INST-005 | INSTRUMENT | Instrument Registry | Golden/Validator | Validator count=12 DR\_ORDINAL. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-012 | REQ-FLOW-014 | FLOW | Participant App / Score Engine | E2E/Unit | SELF unavailable before 48; Score Engine ignores SELF responses. | BLOCKING | NOT\_IMPLEMENTED |
| APPSEQ-013 | REQ-INST-010 | INSTRUMENT | Instrument Registry | E2E | RG IDs absent from participant payload/UI. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ARCH-001 | REQ-PROD-003 | PRODUCT | Architecture | Architecture review | Phase A operates fully with deterministic code and without LLM dependency. | BLOCKING | NOT\_IMPLEMENTED |
| ARCH-002 | REQ-ARCH-001 | ARCHITECTURE | Architecture | Architecture review | Modules have clear boundaries; no microservice sprawl without approved rationale. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ARCH-ANTI-001 | REQ-ARCH-003 | ARCHITECTURE | Architecture | Code review | Scoring, evidence/future interpretation and reporting boundaries remain distinct. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| ARCH-SCORE-001 | REQ-ARCH-002 | ARCHITECTURE | Architecture | Architecture/Unit | Score tests run independently from frontend/report rendering. | BLOCKING | NOT\_IMPLEMENTED |
| BANK-001 | REQ-INST-012 | INSTRUMENT | Instrument Registry | Source validation | Production publication blocked until canonical literal text and mappings are supplied. | BLOCKING | NOT\_IMPLEMENTED |
| CR-001 | REQ-OWN-004 | OWNERSHIP | Governance | Process review | Issue classification records bug vs change with scope/time/cost/version impact. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| DATA-CTX-001 | REQ-FLOW-005 | FLOW | Data Model | Data model test | Context record is linked to assessment/version and can differ across reassessments. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| DATA-EVT-001 | REQ-DATA-002 | DATA | Response Engine | Integration | Final answer is queryable while first→final/revisions remain auditable. | BLOCKING | NOT\_IMPLEMENTED |
| DATA-ID-001 | REQ-DATA-004 | DATA | Data Model | Schema review | Primary technical IDs are non-sequential UUID-like values. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| DATA-LIN-001 | REQ-DATA-008 | DATA | Data Model | Integration | Score output can be traced to contributing response/item/version records. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| DATA-RAW-001 | REQ-DATA-001 | DATA | Response Engine | Integration | No administrative edit of raw response; correction uses new event/status, not overwrite. | BLOCKING | NOT\_IMPLEMENTED |
| DATA-SEP-001 | REQ-DATA-010 | DATA | Data Model | Schema review | No flattening into single untyped JSON response blob. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| DATA-TIME-001 | REQ-NFR-003 | NFR | Data Model | Integration | Persisted event timestamps use UTC and display conversion is presentation-level. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| FLOW-001 | REQ-FLOW-011 | FLOW | Assessment Engine | Golden/E2E | 55/56 fails; complete assessment commits once and becomes COMPLETED. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-002 | REQ-FLOW-011 | FLOW | Assessment Engine | Golden/E2E | 55/56 fails; complete assessment commits once and becomes COMPLETED. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-003 | REQ-FLOW-013 | FLOW | Response Engine | Golden/E2E | Edit attempt after completion returns ASSESSMENT\_ALREADY\_COMPLETED and preserves RAW. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-004 | REQ-FLOW-012 | FLOW | Assessment Engine | Golden/Integration | Repeated identical submit yields one effective completion/score job. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-005 | REQ-FLOW-009, REQ-DATA-003 | FLOW | Assessment Engine | Golden/E2E | Previously randomized option presentation is identical after resume. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-006 | REQ-PROD-002 | PRODUCT | Participant App | E2E | Completion screen confirms submission only; no interpretation/report exposed. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-007 | REQ-FLOW-002 | FLOW | Participant App | E2E | No participant identity, assessment status internals, or score information leaked. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| FLOW-008 | REQ-FLOW-003 | FLOW | Participant App | E2E | Re-opening completed token cannot expose/edit answers or display report. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-009 | REQ-FLOW-004 | FLOW | Consent Module | Integration | Assessment cannot enter active response flow without accepted consent version. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-010 | REQ-FLOW-006 | FLOW | Participant App | E2E | No multi-page survey dump; one active scenario view at a time. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| FLOW-011 | REQ-FLOW-008 | FLOW | Response Engine | E2E/Integration | Saved answer survives reload/session interruption; failure is visible and cannot silently advance. | BLOCKING | NOT\_IMPLEMENTED |
| FLOW-012 | REQ-FLOW-010 | FLOW | Participant App | E2E | Back navigation works before completion and revisions are captured. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| G-DR-001 | REQ-SCORE-011, REQ-SCORE-012 | SCORING | Score Engine | Golden/Unit | DR Golden fixtures match expected raw points. | BLOCKING | NOT\_IMPLEMENTED |
| G-DR-005 | REQ-INST-009 | INSTRUMENT | Instrument Registry | Golden/Validator | randomizable=true causes INSTRUMENT\_CONFIGURATION\_ERROR. | BLOCKING | NOT\_IMPLEMENTED |
| G-PC-001 | REQ-SCORE-002, REQ-SCORE-003, REQ-SCORE-004, REQ-SCORE-005 | SCORING | Score Engine | Golden/Unit | PC totals equal 24 and Golden outputs match expected values. | BLOCKING | NOT\_IMPLEMENTED |
| G-PC-004 | REQ-INST-006 | INSTRUMENT | Instrument/Score | Golden/E2E | Changing display order does not change semantic score. | BLOCKING | NOT\_IMPLEMENTED |
| G-PRC-F-001 | REQ-SCORE-007 | SCORING | Score Engine | Golden/Unit | Golden raw/relative outputs match expected values. | BLOCKING | NOT\_IMPLEMENTED |
| G-PRC-I-001 | REQ-SCORE-008, REQ-SCORE-009 | SCORING | Score Engine | Golden/Unit | Means V/A/C are correct and retained as source metrics. | BLOCKING | NOT\_IMPLEMENTED |
| GA-001 | REQ-QA-001 | QUALITY | CI/CD | CI evidence | CI report shows 100% PASS for applicable BLOCKING fixtures. | BLOCKING | NOT\_IMPLEMENTED |
| INT-AI-001 | REQ-FUT-004 | FUTURE\_MOTOR | Future Language Layer | Architecture review | No Phase A design couples report generation directly to raw responses. | FUTURE | NOT\_IMPLEMENTED |
| INT-ARCH-001 | REQ-FUT-001 | FUTURE\_MOTOR | Future Interpretation | Architecture review | Architecture preserves future Evidence→UIG interface; no Phase A direct RAW→UIG implementation. | FUTURE | NOT\_IMPLEMENTED |
| INT-ARCH-002 | REQ-FUT-002 | FUTURE\_MOTOR | Future Interpretation | Architecture review | Phase A schema/interfaces do not preclude future versioned engines. | FUTURE | NOT\_IMPLEMENTED |
| INT-ARCH-003 | REQ-FUT-003 | FUTURE\_MOTOR | Future Interpretation | Architecture review | Data model reserves versioned lineage path without implementing commercial report now. | FUTURE | NOT\_IMPLEMENTED |
| JOB-001 | REQ-ARCH-004 | ARCHITECTURE | Job Engine | Integration | Job state supports PENDING/RUNNING/COMPLETED/FAILED/RETRYING with idempotency controls. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-001 | REQ-FLOW-015 | FLOW | Research Module | Integration | Feedback fields stored independently and never converted to honesty/sincerity score. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-COG-001 | REQ-O0-002 | RESEARCH | Research Admin | Workflow review | Admin workflow records post-completion interview; no think-aloud dependency. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-FLAG-001 | REQ-O0-003 | RESEARCH | Research Admin | Integration/UI test | All canonical flags are selectable/storeable with item review records. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-GATE-001 | REQ-O0-001 | RESEARCH | Research Module | Pilot dry run | System operational for O0 sample and no external report generated. | BLOCKING | NOT\_IMPLEMENTED |
| O0-GATE-002 | REQ-O0-006 | RESEARCH | Research Admin | Integration | Gate decision stored with criteria/result and audit trail. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-HYP-001 | REQ-O0-007 | RESEARCH | Research Admin | UI/Integration | Twelve canonical hypotheses can be tracked with status/outcome. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-ITEM-001 | REQ-O0-005 | RESEARCH | Research Admin | UI/Integration | Canonical decision list available; no silent item edits mid-wave. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| O0-OCC-001 | REQ-O0-004 | RESEARCH | Research Admin | Integration | Occurrence record stores severity and exclusion scope. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| OBS-001 | REQ-NFR-005 | NFR | Observability | Ops review | Errors are traceable by technical IDs while respecting redaction rules. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| OWN-001 | REQ-OWN-001 | OWNERSHIP | Governance | Governance evidence | Company account owns repo; developer has delegated access. | BLOCKING | NOT\_IMPLEMENTED |
| OWN-002 | REQ-OWN-002 | OWNERSHIP | Governance | Governance evidence | Ownership/access records confirm company control and takeover capability. | BLOCKING | NOT\_IMPLEMENTED |
| OWN-003 | REQ-OWN-003 | OWNERSHIP | Documentation | Handoff test | Another developer can provision/run/deploy using supplied docs and authorized credentials. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| PERF-001 | REQ-NFR-001 | NFR | Participant App/API | Performance test | Pilot load test meets target under expected O0 conditions. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| PRC-INT-005 | REQ-SCORE-010 | SCORING | Score Engine | Unit/Review | Outputs expose separate sources and no averaged/fused PRC score. | BLOCKING | NOT\_IMPLEMENTED |
| PRC-RAND-001 | REQ-INST-007 | INSTRUMENT | Instrument/Score | Golden/E2E | Changing display order does not change V/A/C score. | BLOCKING | NOT\_IMPLEMENTED |
| PRC-RAND-002 | REQ-INST-008 | INSTRUMENT | Participant App | E2E | Block order may differ; numeric scale semantics remain identical. | BLOCKING | NOT\_IMPLEMENTED |
| QA-ACC-001 | REQ-QA-004 | QUALITY | Governance | Release review | Release record shows technical and methodological approval where applicable. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| QA-DEPLOY-001 | REQ-QA-002 | QUALITY | CI/CD | CI pipeline test | Pipeline stops release when blocking Golden test fails. | BLOCKING | NOT\_IMPLEMENTED |
| RTM-001 | REQ-QA-003 | QUALITY | Quality Governance | RTM review | Every P0/P1 requirement has a test ID, owner and acceptance evidence/status. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| SCOPE-001 | REQ-PROD-001 | PRODUCT | Product Scope | Scope review | No commercial-only feature is required to complete Phase A. | BLOCKING | NOT\_IMPLEMENTED |
| SCOPE-002 | REQ-PROD-004 | PRODUCT | Scope | Scope review | Responsive web app delivered; native iOS/Android not required. | NON\_BLOCKING | NOT\_IMPLEMENTED |
| SCORE-001 | REQ-SCORE-001 | SCORING | Score Engine | Unit/Security | Same valid input+version produces same output; frontend cannot author scores. | BLOCKING | NOT\_IMPLEMENTED |
| SCORE-002 | REQ-SCORE-016 | SCORING | Score Engine | Golden/Integration | Incomplete input → ASSESSMENT\_NOT\_READY; incompatible version → VERSION\_MISMATCH. | BLOCKING | NOT\_IMPLEMENTED |
| SCORE-011 | REQ-SCORE-014 | SCORING | Score Engine | Unit | Missing facet\_signal suppresses facet value; wording is never used to infer it. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| SCORE-013 | REQ-SCORE-006 | SCORING | Score Engine | Unit | Request/config attempting PC.BALANCE fails; no invented formula. | BLOCKING | NOT\_IMPLEMENTED |
| SCORE-014 | REQ-SCORE-013 | SCORING | Score Engine | Unit/Schema review | Attempted configuration/output for DR total fails or is absent. | BLOCKING | NOT\_IMPLEMENTED |
| SCORE-015 | REQ-SCORE-015 | SCORING | Score Engine | Unit | Changing SELF/feedback/RG analysis leaves PC/PRC/DR outputs unchanged. | BLOCKING | NOT\_IMPLEMENTED |
| SCORE-PREC-001 | REQ-QA-006 | QUALITY | Score Engine | Unit/DB test | Stored derived values preserve full precision used by Golden fixtures. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| SEC-001 | REQ-SEC-010 | SECURITY | API | Golden/Security | Automated API test finds none of the prohibited methodological fields. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-002 | REQ-O0-008 | RESEARCH | Export Module | Golden/Security | Default export contains participant pseudonym/code but no direct identity. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-003 | REQ-SEC-009 | SECURITY | Export Module | Golden/Security | Without permission returns UNAUTHORIZED\_ACTION; permitted export creates audit record. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-BKP-001 | REQ-SEC-008 | SECURITY | Infrastructure | Restore evidence | Documented restore test succeeds in staging/pilot-like environment. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-DATA-001 | REQ-SEC-006 | SECURITY | Infrastructure | Security/process review | DEV uses synthetic/Golden fixtures only. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-ENV-001 | REQ-SEC-005 | SECURITY | Infrastructure | Architecture review | No shared production/pilot DB selected by environment column. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-HTTPS-001 | REQ-SEC-001 | SECURITY | Infrastructure | Security test | All participant/admin traffic served over HTTPS; HTTP redirected/disabled. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-ID-001 | REQ-DATA-005 | DATA | Identity & Access | Architecture/Security test | Score/Evidence modules do not require participant name/email/phone. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-LOG-001 | REQ-SEC-007 | SECURITY | Observability | Security test | Security review finds no direct identity/token/full RAW payload leakage in logs. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-MFA-001 | REQ-SEC-002 | SECURITY | Identity & Access | Security test | Privileged admin login requires second factor. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-RBAC-001 | REQ-SEC-003 | SECURITY | Identity & Access | Security test | Unauthorized API calls denied regardless of frontend state. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-SECRET-001 | REQ-SEC-004 | SECURITY | Infrastructure | Security review | Secrets supplied by secure environment/secret manager and absent from source control. | BLOCKING | NOT\_IMPLEMENTED |
| SEC-TOKEN-001 | REQ-FLOW-001 | FLOW | Assessment Access | Security/E2E | Sequential/predictable IDs are not accepted; revoked/invalid token is denied. | BLOCKING | NOT\_IMPLEMENTED |
| UX-NET-001 | REQ-NFR-004 | NFR | Participant App | E2E | Simulated interruption does not lose already acknowledged saved responses. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| UX-RESP-001 | REQ-NFR-002 | NFR | Frontend | E2E/Visual | Critical flows pass agreed mobile and desktop viewport tests. | CRITICAL\_PILOT | NOT\_IMPLEMENTED |
| VER-001 | REQ-DATA-007 | DATA | Version Module | Integration | Assessment stores instrument, bank, scoring and relevant release versions. | BLOCKING | NOT\_IMPLEMENTED |
| VER-002 | REQ-DATA-006 | DATA | Score Engine | Golden/Integration | Re-scoring creates a new run; old run remains unchanged. | BLOCKING | NOT\_IMPLEMENTED |
| VER-003 | REQ-INST-011 | INSTRUMENT | Instrument Registry | Golden/Integration | Published item text cannot be edited in place; new version required. | BLOCKING | NOT\_IMPLEMENTED |
| VER-004 | REQ-DATA-009 | DATA | Version Module | Integration | No silent in-place mutation of published methodological config. | BLOCKING | NOT\_IMPLEMENTED |

## 04_SOURCE_DOCS
| Source Document Registry | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN |
| Source ID | Document Code | Title | Version | Status | Traceability Role |
| SRC-001 | MGH-EXEC-BRIEF-0.1 | Executive Product Brief | 0.1 | CONTENT\_COMPLETE | Phase A product purpose and boundaries |
| SRC-002 | MGH-FUNC-SPEC-0.1 | Functional Specification | 0.1 | CONTENT\_COMPLETE | Participant/admin functional requirements |
| SRC-003 | MGH-ARCH-DATA-0.1 | Architecture & Data Model | 0.1 | CONTENT\_COMPLETE | Architecture, entities, runs, data integrity |
| SRC-004 | MGH-INST-SPEC-0.1 | MGH-P1.0 Instrument Specification | 0.1 | CONTENT\_COMPLETE | 48 scenarios, application behavior, randomization |
| SRC-005 | MGH-SCORE-SPEC-0.1 | Scoring Specification | 0.1 | CONTENT\_COMPLETE | Deterministic scoring rules |
| SRC-006 | MGH-O0-PROTOCOL-0.1 | O0 Research & Pilot Protocol | 0.1 | CONTENT\_COMPLETE | Pilot operations and research |
| SRC-007 | MGH-TEST-SPEC-0.1 | Golden Cases & Acceptance Tests | 0.1 | CONTENT\_COMPLETE | Acceptance and Golden Cases |
| SRC-008 | MGH-SEC-NFR-0.1 | Security, Privacy & NFR | 0.1 | CONTENT\_COMPLETE | Security, privacy, performance, environments |
| SRC-009 | MGH-INTERP-SPEC-0.1 | Interpretation Engine Specification | 0.1 | CONTENT\_COMPLETE | Future Evidence/UIG/Claim/Action engine |
| SRC-010 | MGH-ROADMAP-0.1 | Technical Roadmap & Scope Control | 0.1 | CONTENT\_COMPLETE | Phase A–E scope control |
| SRC-011 | MGH-OPEN-DECISION-0.1 | Open Items & Decision Log | 0.1 | CONTENT\_COMPLETE | Open items and frozen decisions |
| SRC-012 | MGH-MEETING-BRIEF-0.1 | Developer Meeting Brief | 0.1 | CONTENT\_COMPLETE | Developer handoff and contracting expectations |
| SRC-A04 | MGH-ANX-004 | MGH-P1.0 Application Sequence | 0.1 | FROZEN\_FOR\_PHASE\_A | Canonical scenario sequence |
| SRC-A05 | MGH-ANX-005 | SCORE-P1.0 Scoring Matrix | 0.1 | PILOT\_BASELINE | Canonical scoring matrix |
| SRC-A15 | MGH-ANX-015 | GOLDEN-P1.0 Canonical Dataset | 0.1 | PILOT\_BASELINE | Acceptance fixtures |

## 05_DASHBOARD
| RTM-P1.0 — Readiness Dashboard | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN |
| KPI | Value | NaN | Phase A Gate | Formula | Interpretation |
| Total requirements | 113 | NaN | Blocking PASS % | 0 | Must reach 100% before O0 |
| Phase A requirements | 109 | NaN | Blocking not PASS | 63 | Must reach 0 before O0 |
| P0 requirements | 63 | NaN | Critical Pilot not PASS | 45 | Must reach 0 unless Gate Review documents exception |
| P1 requirements | 45 | NaN | P0 not PASS | 63 | Must reach 0 before O0 |
| Blocking requirements | 63 | NaN | P1 not PASS | 45 | Must reach 0 or formally waived |
| PASS | 0 | NaN | NaN | NaN | NaN |
| FAIL | 0 | NaN | NaN | NaN | NaN |
| WAITING\_BANK | 1 | NaN | NaN | NaN | NaN |
| DEFERRED | 4 | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| Domain | Total | PASS | Not PASS | Readiness % | NaN |
| ADMIN | 15 | 0 | 15 | 0 | NaN |
| ARCHITECTURE | 4 | 0 | 4 | 0 | NaN |
| DATA | 10 | 0 | 10 | 0 | NaN |
| FLOW | 15 | 0 | 15 | 0 | NaN |
| INSTRUMENT | 12 | 0 | 12 | 0 | NaN |
| NFR | 5 | 0 | 5 | 0 | NaN |
| OWNERSHIP | 4 | 0 | 4 | 0 | NaN |
| PRODUCT | 4 | 0 | 4 | 0 | NaN |
| QUALITY | 6 | 0 | 6 | 0 | NaN |
| RESEARCH | 8 | 0 | 8 | 0 | NaN |
| SCORING | 16 | 0 | 16 | 0 | NaN |
| SECURITY | 10 | 0 | 10 | 0 | NaN |

## 06_STATUS_CHANGE_LOG
| RTM Status Change Log | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Change ID | Date | Requirement ID | Old Status | New Status | Evidence Ref | Changed By | Notes |

## 07_OPEN_DEPENDENCIES
| Open Dependencies Affecting Traceability / Implementation | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Dependency ID | Dependency | Affected Requirement(s) | Current State | Blocks | Owner | Rule |
| DEP-001 | BANK-0.2 literal scenario/option text and canonical option\_id mappings | REQ-INST-012; PC/PRC E2E score fixtures | SOURCE\_RECOVERY\_REQUIRED | Final instrument publication + full raw option E2E | MGH | Do not infer or reconstruct production wording/mappings. |
| DEP-002 | SELF exact canonical wording / 1–5 labels | REQ-FLOW-014 | OPEN | Final participant rendering before O0 | MGH | Scoring unaffected; UI publication waits for canonical text. |
| DEP-003 | Consent and privacy notice final legal review | REQ-FLOW-004; O0 readiness | LEGAL\_PRIVACY | Real O0 participant release | Legal/Privacy + MGH | Placeholders allowed in development only. |
| DEP-004 | Developer implementation evidence | Most Phase A requirements | NOT\_STARTED | O0 Gate | Tech | Status stays NOT\_IMPLEMENTED until objective evidence exists. |