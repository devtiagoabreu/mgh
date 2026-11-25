---
name: 02-23-anx-014-forbidden-claim-registrytm
description: Trecho integral: 23. ANX-014 — Forbidden Claim Registry™.
source: docs/001/FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 584-1174
---

# 23. ANX-014 — Forbidden Claim Registry™

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **23. ANX-014 — Forbidden Claim Registry™**

### **MGH-ANX-014 — GLOBAL FORBIDDEN CLAIM REGISTRY**

Inclui:

intelligence;

competence;

maturity;

character;

honesty;

mental health;

diagnosis;

job fit;

hiring;

promotion;

termination;

resilience;

emotional stability;

fixed learning style;

absolute identity;

moral value;

leadership quality;

compatibility score.

Status:

**READY TO CONSOLIDATE**

# **24. ANX-015 — Golden Dataset**

### **MGH-ANX-015 — GOLDEN-P1.0**

Contém fixtures sintéticos para:

PC;

PRC;

DR;

flow;

versioning;

security;

future interpretation.

Status:

**LOGIC COMPLETE / MACHINE-READABLE DATASET TO CREATE**

Isto é importante:

temos os Golden Cases definidos.

Ainda precisamos transformá-los em:

dataset canônico implementável.

# **25. ANX-016 — Requirement Traceability Matrix™**

### **MGH-ANX-016 — RTM-P1.0**

Estrutura:

Requirement ID

→ Specification

→ Test ID

→ Severity

→ Implementation

→ Acceptance Status.

Status:

**TO CONSOLIDATE**

Este será muito valioso no contrato/homologação.

# **26. ANX-017 — Data Dictionary**

### **MGH-ANX-017 — DATA DICTIONARY**

Campos das entidades:

Participant;

Assessment;

Response;

Response Event;

Runs;

Evidence;

Claims etc.

Status:

**ARCHITECTURE DEFINED / STRUCTURED DICTIONARY TO CREATE**

# **27. ANX-018 — API Contract**

### **MGH-ANX-018 — API-SPEC-0.1**

Endpoints conceituais, payloads, erros, permissions, idempotency.

Já temos boa parte dispersa nos documentos.

Agora precisará virar:

contrato técnico consolidado.

Status:

**TO CONSOLIDATE DURING IMPLEMENTATION HANDOFF**

Não precisa necessariamente ser OpenAPI completo antes de escolhermos stack/desenvolvedor.

# **28. ANX-019 — O0 Research Instruments**

### **MGH-ANX-019 — O0 RESEARCH KIT**

Contém:

consentimento;

participant registration;

cognitive interview guide;

item audit;

occurrence taxonomy;

hypotheses;

item survival;

Gate.

Status:

**PARTIALLY READY**

Consentimento/privacy ainda exigem revisão.

# **29. ANX-020 — Open Item Register**

### **MGH-ANX-020 — OPEN ITEM REGISTER**

Transformará os 40 Open Items do Documento 11 em tabela controlável.

Campos:

ID;

categoria;

owner;

status;

blocks;

target gate;

decision;

version impact.

Status:

**READY TO CONSOLIDATE**

# **30. ANX-021 — Decision Register**

### **MGH-ANX-021 — DECISION REGISTER**

Transformará as decisões já congeladas em registro estruturado.

Exemplo:

DEC-014 — IA não interpreta RAW

Status:

RESOLVED.

Status do anexo:

**READY TO CONSOLIDATE**

# **31. NÍVEL 4 — Artefatos operacionais**

Já possuímos um artefato real importante:

### **MGH-O0-OPS-001**

**MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx**

Com as abas:

00\_README
01\_PARTICIPANTS
02\_ASSESSMENTS
03\_RESPONSES\_RAW
04\_RESPONSE\_EVENTS
05\_SELF\_FEEDBACK
06\_COG\_INTERVIEWS
07\_COG\_ITEM\_REVIEW
08\_AUDIT\_FLAGS
09\_OCCURRENCES
10\_SCORING\_MATRIX
11\_DERIVED\_SCORES
12\_HYPOTHESES
13\_ITEM\_SURVIVAL
14\_CHANGE\_LOG
15\_GATE\_REVIEW
16\_DASHBOARD\_O0
17\_LISTS.

Status:

**EXISTING OPERATIONAL PROTOTYPE**

Importante:

referência operacional, não banco definitivo do software.

# **32. Outro artefato operacional futuro**

### **MGH-O0-CHECKLIST-001**

Checklist:

Pre-O0 Readiness.

Ainda será gerado formalmente.

Deverá reunir:

Instrument Validator;

Golden Cases;

Security Gate;

backup;

restore;

consent;

exports;

dry run.

# **33. Outro**

### **MGH-DEV-PROPOSAL-EVAL-001**

Matriz para avaliarmos proposta(s) do desenvolvedor.

Poderá pontuar:

arquitetura;

integridade;

versionamento;

segurança;

testes;

handoff;

prazo;

preço.

Será muito útil depois da reunião.

# **34. Estrutura oficial de pastas**

Quando transformarmos tudo em arquivos, recomendo esta organização:

MGH/

│

├── 00\_CONTROLE\_MESTRE/

│ ├── MGH\_MASTER\_INDEX

│ ├── MGH\_MASTER\_SPEC

│ ├── RELEASE\_REGISTER

│ └── CHANGE\_REGISTER

│

├── 01\_EXECUTIVO/

│ └── 01\_EXECUTIVE\_PRODUCT\_BRIEF

│

├── 02\_FUNCIONAL\_E\_ARQUITETURA/

│ ├── 02\_FUNCTIONAL\_SPEC

│ └── 03\_ARCHITECTURE\_DATA\_MODEL

│

├── 03\_INSTRUMENTO\_E\_SCORING/

│ ├── 04\_INSTRUMENT\_SPEC

│ ├── 05\_SCORING\_SPEC

│ └── ANEXOS\_CANONICOS/

│

├── 04\_PESQUISA\_O0/

│ ├── 06\_O0\_PROTOCOL

│ └── O0\_RESEARCH\_KIT/

│

├── 05\_QUALIDADE\_SEGURANCA/

│ ├── 07\_GOLDEN\_CASES

│ └── 08\_SECURITY\_PRIVACY\_NFR

│

├── 06\_MOTOR\_DE\_GOVERNO/

│ ├── 09\_INTERPRETATION\_ENGINE

│ ├── EVIDENCE\_DICTIONARY

│ ├── UIG\_LIBRARY

│ ├── SYNTHESIS\_LIBRARY

│ ├── CLAIM\_DICTIONARY

│ └── ACTION\_REGISTRY

│

├── 07\_ROADMAP\_E\_GOVERNANCA/

│ ├── 10\_TECHNICAL\_ROADMAP

│ └── 11\_OPEN\_ITEMS\_DECISIONS

│

├── 08\_REUNIAO\_DESENVOLVEDOR/

│ └── 12\_DEVELOPER\_MEETING\_BRIEF

│

├── 09\_ARTEFATOS\_OPERACIONAIS/

│ └── O0/

│

└── 10\_ARCHIVE/

Essa estrutura pode acompanhar o projeto por anos.

# **35. Política de nomes dos arquivos**

Recomendo padrão:

<ordem>\_<codigo>\_<versao>\_<titulo>

Exemplo:

05\_MGH-SCORE-SPEC\_0.1\_Scoring-Specification.pdf

Ou, para anexos:

ANX-015\_GOLDEN-P1.0\_Golden-Dataset.xlsx

Isso impede nomes como:

versao\_final\_final\_agora\_valendo\_2.pdf

# **36. Política de versão documental**

Teremos uma distinção importante:

### **Documento**

MGH-SCORE-SPEC-0.1

Pode evoluir para:

MGH-SCORE-SPEC-0.2.

### **Componente metodológico**

SCORE-P1.0

Pode continuar o mesmo.

Exemplo:

corrigimos um erro de digitação no documento:

documento 0.1 → 0.2.

Mas:

algoritmo SCORE-P1.0 não mudou.

Não devemos confundir os dois.

# **37. Quando a versão metodológica muda**

Se alterarmos:

pontuação;

chave;

algoritmo;

interpretação substantiva,

então:

SCORE-P1.0 também muda.

O documento sozinho não é suficiente.

# **38. Status documentais**

Vamos trabalhar com:

DRAFT

CONTENT\_COMPLETE

IN\_REVIEW

FROZEN

PUBLISHED

SUPERSEDED

ARCHIVED.

Isso é diferente de:

DRAFT/CANDIDATE/PILOT/APPROVED

usados para:

regras metodológicas.

Não misturar.

# **39. Situação atual do pacote**

Hoje:

### **Master Specification**

FROZEN FOR PHASE A

### **12 Developer Handoff Documents**

CONTENT\_COMPLETE

### **Arquivos finais**

PENDING CONSOLIDATION

### **P1.0**

PILOT

### **Psicometria**

NOT VALIDATED

### **Software**

NOT YET IMPLEMENTED

Essa é a fotografia correta.

# **40. Nível de confidencialidade**

Também podemos registrar:

### **INTERNAL**

materiais administrativos simples.

### **CONFIDENTIAL**

specifications, arquitetura e roadmap.

### **CONFIDENTIAL — METHODOLOGY IP**

Banco de Itens;

Scoring Matrix;

Evidence Dictionary;

UIGs;

Claims;

Actions;

Golden interpretive rules.

### **RESTRICTED**

dados reais de participantes;

Identity Vault;

secrets;

credentials.

Isso ajuda também a decidir:

o que entregar antes ou depois de NDA/contrato.

# **41. Pacote da primeira reunião**

Do Índice Mestre total, o desenvolvedor não precisa receber tudo imediatamente.

### **Primeiro contato**

01 Executive Product Brief

02 Functional Specification

10 Technical Roadmap

E você utiliza:

12 Developer Meeting Brief.

