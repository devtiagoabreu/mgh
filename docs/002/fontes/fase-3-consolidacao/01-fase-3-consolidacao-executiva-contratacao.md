---
name: 01-fase-3-consolidacao-executiva-contratacao
description: Trecho integral: FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO.
source: docs/001/FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-583
---

# FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO**

Perfeito. A **Fase 3** começa com controle documental. Antes de gerar PDFs, DOCX, planilhas ou o kit da reunião, precisamos de um mapa que diga **o que existe, qual versão vale, onde cada peça se encaixa e qual documento é a fonte oficial de cada decisão**.

# **FASE 3.1 — ÍNDICE MESTRE DO MGH™**

## **Master Document & Version Registry**

**Código:** MGH-MASTER-INDEX-0.1
**Baseline vinculada:** MGH-MASTER-P1.0-RC1
**Objetivo:** ser o mapa único de documentos, componentes metodológicos, anexos, versões, status e dependências do MGH™.

A regra central será:

**Se um ativo do MGH não estiver registrado no Índice Mestre, ele não deve ser tratado como parte oficial da baseline.**

# **1. O Índice Mestre não substitui os documentos**

Ele funciona como o **mapa do sistema documental**.

Por exemplo:

MGH-SCORE-SPEC-0.1

explica como o scoring funciona.

SCORE-P1.0

é a versão do algoritmo de scoring.

GOLDEN-P1.0

prova como aquele scoring deve se comportar.

E:

MGH-MASTER-INDEX-0.1

mostra que essas três coisas existem e estão relacionadas.

Essa distinção será importante daqui para frente.

# **2. Hierarquia documental oficial**

Vamos trabalhar com cinco níveis:

### **NÍVEL 0 — CONTROLE MESTRE**

Controla toda a documentação.

### **NÍVEL 1 — BASELINE METODOLÓGICA**

Define qual conjunto de versões constitui determinada release do MGH.

### **NÍVEL 2 — DEVELOPER HANDOFF**

Os 12 documentos que acabamos de concluir.

### **NÍVEL 3 — ANEXOS CANÔNICOS**

Bancos, matrizes, dicionários, datasets e tabelas que alimentam os documentos.

### **NÍVEL 4 — ARTEFATOS OPERACIONAIS**

Planilhas, formulários, checklists e materiais usados na operação do piloto.

# **3. NÍVEL 0 — Controle Mestre**

Teremos inicialmente:

| **Código** | **Documento** | **Versão** | **Status** |
| --- | --- | --- | --- |
| MGH-MASTER-INDEX | Índice Mestre do MGH™ | 0.1 | **ACTIVE** |
| MGH-MASTER | Master Specification Freeze™ | P1.0-RC1 | **FROZEN FOR PHASE A** |
| MGH-CHANGE-REGISTER | Registro Mestre de Mudanças | 0.1 | a consolidar |
| MGH-RELEASE-REGISTER | Registro de Releases | 0.1 | a consolidar |

O documento que estamos construindo agora é o primeiro.

# **4. NÍVEL 1 — Baseline metodológica oficial**

A baseline atual fica registrada assim:

## **MGH-MASTER-P1.0-RC1**

| **Componente** | **Versão oficial** |
| --- | --- |
| Instrumento | MGH-P1.0 |
| Banco de Itens | BANK-0.2 |
| Scoring | SCORE-P1.0 |
| Evidence Dictionary | EVID-0.2 |
| UIG Library | UIG-LIB-0.2 |
| Synthesis Library | SYN-0.2 |
| Interpretation Engine | INTERP-0.2 |
| Claim Dictionary | CLAIM-DICT-0.1 |
| Action Registry | ACTION-REG-0.1 |
| Language Policy | LANG-POL-0.1 |
| Report Composer | REPORT-COMP-0.1 |
| Golden Dataset | GOLDEN-P1.0 |

E continua:

validation\_status = PILOT

decision\_use\_allowed = false

external\_reporting\_max = E2

participant\_report\_enabled\_O0 = false

Isso é parte da identidade da release.

# **5. NÍVEL 2 — Os 12 documentos do Developer Handoff Package™**

Agora formalizo também os códigos dos documentos.

| **#** | **Código** | **Documento** | **Versão** |
| --- | --- | --- | --- |
| 01 | MGH-EXEC-BRIEF | Executive Product Brief | 0.1 |
| 02 | MGH-FUNC-SPEC | Functional Specification | 0.1 |
| 03 | MGH-ARCH-DATA | Architecture & Data Model | 0.1 |
| 04 | MGH-INST-SPEC | MGH-P1.0 Instrument Specification | 0.1 |
| 05 | MGH-SCORE-SPEC | Scoring Specification | 0.1 |
| 06 | MGH-O0-PROTOCOL | O0 Research & Pilot Protocol | 0.1 |
| 07 | MGH-TEST-SPEC | Golden Cases & Acceptance Tests | 0.1 |
| 08 | MGH-SEC-NFR | Security, Privacy & Nonfunctional Requirements | 0.1 |
| 09 | MGH-INTERP-SPEC | Interpretation Engine Specification | 0.1 |
| 10 | MGH-ROADMAP | Technical Roadmap & Scope Control | 0.1 |
| 11 | MGH-OPEN-DECISION | Open Items & Decision Log | 0.1 |
| 12 | MGH-MEETING-BRIEF | Developer Meeting Brief | 0.1 |

Esses passam a ser os **IDs oficiais** do pacote.

# **6. Status real desses 12 documentos**

É importante sermos rigorosos aqui.

Metodologicamente:

**conteúdo concluído.**

Fisicamente:

ainda não consolidamos os 12 como arquivos finais independentes.

Então não os chamarei ainda de FINAL.

Status documental atual:

# **CONTENT\_COMPLETE — PENDING\_FINAL\_ARTIFACT**

Isso evita a falsa impressão de que já possuímos 12 PDFs/DOCX finalizados quando ainda vamos produzi-los na Etapa 3.2.

# **7. Fontes de verdade por assunto**

Esta matriz será extremamente útil no futuro:

| **Pergunta** | **Fonte principal** |
| --- | --- |
| O que é o MGH? | MGH-EXEC-BRIEF-0.1 |
| O que a Fase A deve fazer? | MGH-FUNC-SPEC-0.1 |
| Como dados e módulos se organizam? | MGH-ARCH-DATA-0.1 |
| O que o participante responde? | MGH-INST-SPEC-0.1 + BANK-0.2 |
| Como respostas viram números? | MGH-SCORE-SPEC-0.1 + Scoring Matrix |
| Como executar O0? | MGH-O0-PROTOCOL-0.1 |
| Como provar que software funciona? | MGH-TEST-SPEC-0.1 |
| Como proteger dados/sistema? | MGH-SEC-NFR-0.1 |
| Como o Motor interpreta? | MGH-INTERP-SPEC-0.1 |
| O que construir agora/depois? | MGH-ROADMAP-0.1 |
| O que ainda está aberto? | MGH-OPEN-DECISION-0.1 |
| Como conduzir reunião? | MGH-MEETING-BRIEF-0.1 |

Isso resolve futuras disputas entre documentos.

# **8. Regra de autoridade documental**

Se uma apresentação comercial disser algo diferente da:

MGH-SCORE-SPEC

sobre scoring,

vence:

MGH-SCORE-SPEC.

Se um protótipo visual contradisser:

MGH-INST-SPEC

vence:

MGH-INST-SPEC.

Se o desenvolvedor colocar uma funcionalidade da Fase D dentro da Fase A contrariando:

MGH-ROADMAP,

vence:

MGH-ROADMAP.

O material visual nunca altera silenciosamente a metodologia.

# **9. NÍVEL 3 — Anexos Canônicos**

Agora chegamos aos ativos que precisam acompanhar os documentos.

Vou criar uma codificação própria:

MGH-ANX-XXX.

# **10. ANX-001 — Release Manifest**

### **MGH-ANX-001 — RELEASE MANIFEST**

Deve conter a combinação oficial:

MGH-MASTER-P1.0-RC1

MGH-P1.0

BANK-0.2

SCORE-P1.0

EVID-0.2

UIG-LIB-0.2

SYN-0.2

INTERP-0.2

CLAIM-DICT-0.1

ACTION-REG-0.1

LANG-POL-0.1

REPORT-COMP-0.1

GOLDEN-P1.0

Status:

**READY TO CONSOLIDATE**

# **11. ANX-002 — Compatibility Matrix**

### **MGH-ANX-002 — VERSION COMPATIBILITY MATRIX**

Responsável por mostrar:

qual versão pode rodar com qual versão.

Exemplo:

MGH-P1.0 ↔ SCORE-P1.0

SCORE-P1.0 ↔ EVID-0.2

etc.

Status:

**READY TO CONSOLIDATE**

# **12. ANX-003 — Banco de Itens Canônico**

### **MGH-ANX-003 — BANK-0.2 CANONICAL ITEM BANK**

Deverá conter para cada item:

item\_code

lens

construct

facet

context

scenario\_text

option\_id

option\_text

scoring\_target

facet\_signal

randomization\_policy

status

version.

Esse será um dos ativos mais importantes do pacote.

Status atual:

# **CONTENT EXISTS — CANONICAL CONSOLIDATION REQUIRED**

E é um dos anexos que precisam estar fechados antes da implementação real do instrumento.

# **13. ANX-004 — Application Sequence**

### **MGH-ANX-004 — MGH-P1.0 APPLICATION SEQUENCE**

A tabela definitiva:

cenários 1–48.

Incluindo:

número;

item;

tipo;

randomização;

required;

relation group quando aplicável.

Status:

**READY TO CONSOLIDATE**

A sequência já está completamente definida.

# **14. ANX-005 — Scoring Matrix**

### **MGH-ANX-005 — SCORE-P1.0 SCORING MATRIX**

Deverá conter:

item;

option/rating;

metric;

raw points;

facet signal;

opportunities;

group;

scoring version.

Essa será a fonte estruturada implementável do Score Engine.

Status:

**READY FOR CANONICAL CONSOLIDATION**

# **15. ANX-006 — PC Facet Registry**

### **MGH-ANX-006 — PC FACET REGISTRY**

As vinte facetas:

**D**Assertividade
Velocidade decisória
Enfrentamento
Autonomia
Orientação a resultado

**I**Expressividade
Sociabilidade
Persuasão
Entusiasmo
Mobilização

**S**Paciência
Cooperação
Constância
Previsibilidade
Manutenção relacional

**C**Análise
Precisão
Critério
Qualidade
Cautela

Com:

source items;

coverage;

reportable;

interpretive use;

Evidence Ceiling quando definido.

Status:

**PARTIALLY OPEN**

Principal pendência:

Evidence Ceiling integral das facetas.

# **16. ANX-007 — Relation Group Registry**

### **MGH-ANX-007 — RELATION GROUP REGISTRY**

Contém:

RG-01 → PC-007 / PC-027
RG-02 → PC-001 / PC-023
RG-03 → PC-016 / PC-033
RG-04 → PC-021 / PC-028
RG-05 → TH-002 / TH-015
RG-06 → TH-003 / TH-012.

Status:

**READY TO CONSOLIDATE**

# **17. ANX-008 — SELF Registry**

### **MGH-ANX-008 — SELF & POST-TEST REGISTRY**

Contém:

SELF-01 até SELF-08;

redações oficiais;

escala;

versionamento;

relação com hipóteses H001–H008;

feedback pós-teste.

Status:

**REQUIRES FINAL CANONICAL REVIEW**

Especialmente:

rótulos oficiais da escala 1–5.

# **18. ANX-009 — Evidence Dictionary™**

### **MGH-ANX-009 — EVID-0.2**

Contém:

Evidence Codes;

source metrics;

lineage;

independence groups;

reportability;

interpretive use;

ceilings;

instrument compatibility.

Status:

**LOGIC COMPLETE / THRESHOLDS PILOT-DEPENDENT**

Essa distinção precisa ficar visível.

# **19. ANX-010 — UIG Library™**

### **MGH-ANX-010 — UIG-LIB-0.2**

Contém oficialmente:

**25 Primary UIGs**

**7 Modulators**

=

# **32 UIGs**

Status:

**PILOT BASELINE**

# **20. ANX-011 — Synthesis Library™**

### **MGH-ANX-011 — SYN-0.2**

Oficiais:

SIN-DEL-001

SIN-DEC-001

SIN-FDB-001

SIN-PRS-001

SIN-PRS-002.

Também deverá possuir área separada para:

CANDIDATE SYNTHESIS.

Status:

**PILOT BASELINE**

# **21. ANX-012 — Claim Dictionary™**

### **MGH-ANX-012 — CLAIM-DICT-0.1**

Contém:

# **30 Claims reportáveis**

com:

domínio;

fontes;

evidence level;

assertions permitidas;

extensions proibidas;

actions;

audiences;

suppression.

Status:

**LOGIC COMPLETE / STRUCTURED MATRIX TO CONSOLIDATE**

# **22. ANX-013 — Action Registry™**

### **MGH-ANX-013 — ACTION-REG-0.1**

Contém:

# **30 Actions canônicas**

com:

action family;

instruction;

contexts;

constraints;

forbidden uses;

source Claims.

Status:

**LOGIC COMPLETE / CLAIM→ACTION MATRIX STILL TO FORMALIZE**

