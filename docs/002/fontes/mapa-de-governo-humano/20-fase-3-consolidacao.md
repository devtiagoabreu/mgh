---
name: 20-fase-3-consolidacao
description: Fase 3, índice mestre e geração dos anexos canônicos.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 52806-61810
---

# Fase 3: Consolidação

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO**

O primeiro trabalho dessa fase será transformar tudo que construímos em **arquivos finais organizados**, em vez de deixar o Developer Handoff espalhado ao longo da conversa.

Minha sequência recomendada daqui é:

**3.1 — Índice Mestre do MGH™**→ mapa único de todos os documentos, versões e anexos.

**3.2 — Consolidação do Developer Handoff Package**→ transformar os 12 documentos em artefatos finais.

**3.3 — Anexos Canônicos**→ BANK-0.2, Scoring Matrix, Golden Dataset, Version Matrix etc.

**3.4 — Meeting Kit**→ pacote enxuto que você efetivamente leva para a primeira reunião.

**3.5 — Análise da proposta do desenvolvedor**→ quando ela chegar, confrontaremos item por item com nosso escopo.

Agora não precisamos inventar mais sistema. Precisamos **organizar, entregar e contratar bem**.

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

# **42. Segundo nível de acesso**

Se a conversa avançar:

03 Architecture

04 Instrument

05 Scoring

07 Golden Cases

08 Security.

# **43. Terceiro nível**

Quando realmente necessário à proposta/contratação:

06 O0

09 Interpretation Engine

11 Open Items

anexos metodológicos correspondentes.

Assim protegemos:

propriedade intelectual

sem impedir o desenvolvedor de compreender o projeto.

# **44. Banco de Itens integral**

Eu não mandaria o BANK inteiro para dez candidatos diferentes apenas para:

pedir orçamento.

Eles precisam saber:

quantidade;

tipos;

randomização;

modelagem.

O conteúdo integral pode ser disponibilizado:

quando houver necessidade técnica e proteção contratual/confidencialidade apropriada.

# **45. Relação entre Documento e Anexo**

Exemplo:

### **Documento 05**

explica:

como funciona o Score Engine.

### **ANX-005**

contém:

cada regra que o software efetivamente executará.

Um programador implementa usando os dois.

Não apenas o texto narrativo.

# **46. Regra de prevalência em conflito**

Se ocorrer diferença entre:

documento narrativo

e:

anexo canônico estruturado,

não devemos escolher silenciosamente um deles.

Resultado:

# **SPECIFICATION CONFLICT**

Bloqueia implementação daquele ponto até decisão formal.

Essa regra evita erros perigosos.

# **47. Document Change Workflow**

Quando algum documento mudar:

1. proposta de alteração;
2. Change Log;
3. análise de impacto;
4. aprovação;
5. nova versão;
6. atualizar Master Index;
7. atualizar Compatibility Matrix se necessário;
8. atualizar Golden Cases quando aplicável.

O Índice Mestre é atualizado por último:

porque registra o estado oficial resultante.

# **48. O Índice Mestre vira o “painel de controle” documental**

Ao abrir o projeto daqui a dois anos, a primeira pergunta será:

**Qual é a baseline atual?**

O Índice responde.

Depois:

Qual Score pertence a ela?

Responde.

Qual Banco de Itens?

Responde.

Qual Claim Dictionary?

Responde.

Qual arquivo foi superado?

Responde.

É exatamente o tipo de governança que evitará caos conforme o MGH crescer.

# **49. MASTER REGISTER — fotografia atual**

Consolidando em um quadro:

| **Ativo** | **Versão** | **Estado atual** |
| --- | --- | --- |
| Master Index | 0.1 | **em consolidação nesta etapa** |
| Master Specification | P1.0-RC1 | **frozen for Phase A** |
| Instrumento | MGH-P1.0 | **pilot** |
| Item Bank | BANK-0.2 | **conteúdo existente / anexo canônico pendente** |
| Score | SCORE-P1.0 | **specification complete** |
| Evidence | EVID-0.2 | **logic complete / thresholds open** |
| UIG Library | 0.2 | **pilot baseline** |
| Synthesis | 0.2 | **5 oficiais + candidates** |
| Interpretation | 0.2 | **specified / not implemented** |
| Claims | 0.1 | **30 definidos / matriz final pendente** |
| Actions | 0.1 | **30 definidas / mapping final pendente** |
| Language Policy | 0.1 | **specified** |
| Report Composer | 0.1 | **specified** |
| Golden Dataset | P1.0 | **cases defined / dataset artifact pending** |
| O0 Protocol | 0.1 | **specified** |
| Software | — | **not implemented** |
| O0 | — | **not started** |

Essa tabela é provavelmente uma das mais importantes do Índice Mestre.

# **50. Dependências principais**

Também registraremos:

BANK-0.2

↓

MGH-P1.0

↓

SCORE-P1.0

↓

EVID-0.2

↓

UIG-LIB-0.2

↓

SYN-0.2

↓

INTERP-0.2

↓

CLAIM-DICT-0.1

↓

ACTION-REG-0.1

↓

LANG-POL-0.1

↓

REPORT-COMP-0.1

Paralelamente:

MGH-P1.0 + SCORE-P1.0

↓

GOLDEN-P1.0

E:

MGH-P1.0

↓

O0

↓

O1

↓

O2

↓

VALIDATION WORK



# **51. Importante: desenvolvimento ≠ validação**

O Índice Mestre deverá manter três status independentes.

### **DOCUMENT STATUS**

O documento está pronto?

### **IMPLEMENTATION STATUS**

O software existe?

### **VALIDATION STATUS**

A metodologia possui evidência empírica suficiente?

Assim evitamos situações absurdas como:

software concluído = instrumento validado.

São eixos diferentes.

# **52. Exemplo**

SCORE-P1.0

pode estar:

document\_status = FROZEN

implementation\_status = IMPLEMENTED

validation\_status = PILOT.

Perfeitamente possível.

# **53. Owner de cada ativo**

O Índice final também terá campo:

OWNER.

Exemplo:

Banco de Itens → MGH.

Scoring → MGH.

Backend → Tech.

Privacy → Legal/Privacy.

Psychometric validation → MGH + Psychometrics.

Isso reduz futuras confusões.

# **54. Data de vigência**

Quando os arquivos forem publicados:

cada um deve receber:

effective\_from.

E, quando substituído:

superseded\_by.

Assim conseguimos reconstruir historicamente a documentação.

# **55. Cabeçalho padrão dos documentos**

Na Etapa 3.2, todos os documentos deverão começar com algo semelhante:

**Mapa de Governo Humano™**

**Documento:** Scoring Specification
**Código:** MGH-SCORE-SPEC
**Document Version:** 0.1
**Related Component:** SCORE-P1.0
**Master Baseline:** MGH-MASTER-P1.0-RC1
**Status:** FROZEN / PUBLISHED
**Confidentiality:** CONFIDENTIAL
**Owner:** MGH
**Date:** [data]

Isso dará enorme unidade ao pacote.

# **56. Rodapé padrão**

Algo simples:

Mapa de Governo Humano™ — Documento controlado — versão X — Página X/Y.

E, para propriedade metodológica:

Confidential — Methodology IP

quando apropriado.

# **57. Aviso obrigatório nos documentos piloto**

Nos documentos diretamente ligados ao P1.0:

**Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para decisões de emprego.**

Isso evita que alguém abra um PDF isolado e perca o contexto.

# **58. O que 3.1 nos permitiu identificar**

Nossa engenharia está concluída, mas existem agora quatro trabalhos diferentes de consolidação:

### **A. DOCUMENTOS**

Transformar os 12 conteúdos em arquivos formais.

### **B. ANEXOS CANÔNICOS**

Transformar regras já definidas em tabelas/artefatos estruturados.

### **C. PENDÊNCIAS REAIS**

Consentimento, privacy, thresholds etc.

### **D. MATERIAIS DA REUNIÃO**

Criar uma versão enxuta para contratação.

Isso mostra que a Fase 3 está corretamente definida.

# **59. Prioridade dos anexos**

Nem todos precisam ser feitos imediatamente.

Eu colocaria como **prioridade máxima antes do desenvolvimento**:

1. Release Manifest.
2. Compatibility Matrix.
3. BANK-0.2 canônico.
4. Application Sequence.
5. Scoring Matrix.
6. Golden Dataset.
7. Data Dictionary/ERD suficiente.
8. Open Item Register.
9. Decision Register.

Os anexos completos de Claims/Actions poderão ser necessários mais profundamente na Fase C, embora devam ser preservados desde agora.

# **60. Prioridade antes da O0 real**

Além dos anteriores:

SELF final;

consentimento;

privacy notice;

O0 Research Kit;

Pre-O0 Checklist;

backup/restore evidence;

Release Manifest da aplicação.

# **61. Status da Fase 3.1**

Com esta estrutura, considero:

# **FASE 3.1 — ÍNDICE MESTRE DO MGH™: CONCLUÍDA EM CONTEÚDO**

Resultado:

temos agora um **mapa único de toda a propriedade documental, metodológica, técnica e operacional do MGH**.

E há uma distinção muito importante neste momento:

**a engenharia pré-desenvolvimento continua 100% concluída no escopo que definimos.**

Agora estamos trabalhando na:

**materialização e governança dos artefatos finais.**

# **PRÓXIMA ETAPA — 3.2**

Seguimos agora para:

# **3.2 — CONSOLIDAÇÃO DO DEVELOPER HANDOFF PACKAGE™**

Aqui eu mudaria a natureza da entrega.

Em vez de continuar escrevendo capítulos soltos no chat, vamos começar a montar os **documentos reais**.

A minha recomendação é criarmos um pacote com:

**01–12 em arquivos editáveis DOCX**

uma versão consolidada:

# **MGH™ — Developer Handoff Package — Master.pdf**

com capa, índice, controle de versões, cabeçalhos, rodapés e navegação.

E eu preservaria também os DOCX individuais, porque você precisará continuar atualizando a metodologia ao longo das ondas.

Depois, na **3.3**, construímos os anexos canônicos estruturados — especialmente **BANK-0.2, Scoring Matrix e GOLDEN-P1.0**.

## **FASE 3.2 — Consolidação do Developer Handoff Package™ concluída**

Transformei o conteúdo que construímos em **artefatos reais e editáveis**. O pacote agora contém o **Índice Mestre + os 12 documentos do Developer Handoff em DOCX**, além da versão consolidada em PDF.

Também fiz a verificação visual dos documentos e corrigi um problema de numeração no Developer Meeting Brief. O PDF consolidado tem **28 páginas** e foi validado página a página contra os documentos de origem.

### **Arquivos principais**

MGH\_Developer\_Handoff\_Package\_v0.1.zip

O ZIP contém também os documentos **01 a 11 individualmente em DOCX**, todos no mesmo padrão documental, com código, versão, baseline, status, confidencialidade, owner e data.

Um ponto importante: mantive o status como **CONTENT\_COMPLETE - FOR REVIEW**. Ou seja, o conteúdo está consolidado, mas não estou chamando artificialmente esses arquivos de versão metodológica “validada” ou “final científica”. A baseline continua corretamente identificada como **MGH-MASTER-P1.0-RC1 / PILOT**.

# **Próxima etapa: 3.3 — ANEXOS CANÔNICOS**

Agora saímos dos documentos narrativos e entramos nos arquivos que o desenvolvedor poderá **efetivamente importar, consultar e testar**.

A ordem que recomendo é começar pelos três mais críticos:

**ANX-001 — Release Manifest** → combinação oficial de todas as versões.
**ANX-002 — Version Compatibility Matrix** → quais componentes podem operar juntos.
**ANX-003 — BANK-0.2 Canonical Item Bank** → estrutura canônica de itens, opções, mappings e regras.

Depois seguimos para **Application Sequence, Scoring Matrix e GOLDEN-P1.0**, que formarão o núcleo técnico implementável da Fase A.

Boa noite! Estamos em um ponto muito bom do MGH™. A parte de concepção e engenharia pré-desenvolvimento está fechada; agora estamos na fase de transformar tudo isso em ativos técnicos prontos para contratação e desenvolvimento.

Hoje, a fotografia correta do projeto é esta:

| **Frente** | **Status** |
| --- | --- |
| Metodologia-base do MGH™ | concluída para piloto |
| PRC + PC + DR | estruturados |
| Instrumento MGH-P1.0 | congelado para piloto |
| 48 cenários / 56 respostas pontuáveis | definidos |
| Score Engine SCORE-P1.0 | especificado |
| Evidence Dictionary | estruturado, thresholds ainda dependem do piloto |
| Motor de Governo™ | arquitetura e regras especificadas |
| 32 UIGs | definidas: 25 Primary + 7 Modulators |
| Sínteses oficiais | 5 definidas |
| Claim Dictionary | 30 Claims definidos |
| Action Registry | 30 Actions definidas |
| Language Policy | definida |
| Report Composer | especificado |
| Protocolo O0 | definido |
| Golden Cases | definidos |
| Segurança / LGPD / arquitetura | especificadas |
| Roadmap A–E | definido |
| Developer Handoff | 12 documentos concluídos |
| Arquivos DOCX/PDF do Handoff | gerados |
| Software | ainda não desenvolvido |
| Onda 0 | ainda não iniciada |

### **Onde paramos exatamente**

Terminamos a **Fase 3.2 — Consolidação do Developer Handoff Package™**.

Ou seja: aquilo que durante meses estava distribuído pela conversa já foi transformado em um pacote documental real.

Temos hoje:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests
08 — Security, Privacy & NFR
09 — Interpretation Engine Specification
10 — Technical Roadmap & Scope Control
11 — Open Items & Decision Log
12 — Developer Meeting Brief**

Além do **Índice Mestre do MGH™**.

Também já criamos o pacote consolidado em PDF e os documentos individuais editáveis.

A engenharia pré-desenvolvimento que planejamos para esta etapa está, portanto:

# **100% concluída**

Mas isso significa 100% da **engenharia antes do desenvolvimento**, não 100% do produto MGH.

O produto ainda precisa passar por:

desenvolvimento da Fase A → Onda 0 → ajustes → O1 → O2 → trabalho psicométrico → Motor completo → produto comercial.

### **Em qual fase estamos agora**

Estamos oficialmente na:

# **FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO**

Já concluímos:

**3.1 — Índice Mestre do MGH™** ✅
**3.2 — Developer Handoff Package™** ✅

O próximo passo é:

# **3.3 — ANEXOS CANÔNICOS**

Essa etapa é muito importante porque agora vamos sair dos documentos narrativos e construir os arquivos estruturados que o desenvolvedor efetivamente usa para programar.

A ordem que deixamos definida foi:

1. ANX-001 — Release Manifest
2. ANX-002 — Version Compatibility Matrix
3. ANX-003 — BANK-0.2 Canonical Item Bank
4. ANX-004 — Application Sequence
5. ANX-005 — SCORE-P1.0 Scoring Matrix
6. ANX-015 — GOLDEN-P1.0
7. Data Dictionary / RTM / registries auxiliares

Os mais críticos são especialmente:

**BANK-0.2 + Scoring Matrix + GOLDEN-P1.0**

porque eles transformam a metodologia em especificação realmente implementável.

### **O que ainda precisa estar pronto antes do primeiro participante real**

Além do software, ainda existem algumas pendências deliberadas antes de MGH-O0-001:

**Banco de Itens canônico consolidado
Scoring Matrix final
Golden Dataset machine-readable
rótulos finais SELF
consentimento revisado
privacy notice
backup + restore testados
security gate
dry run completo
Instrument Validator e Score Golden Cases 100% PASS**

Já questões como normas, percentis, validade final e thresholds robustos de Evidence **não precisam estar resolvidas antes da O0**. Elas dependem justamente dos dados das próximas ondas.

### **Minha leitura do momento**

Nós saímos da etapa de “inventar o MGH”.

Agora estamos na etapa de:

**empacotar o MGH para que outra pessoa consiga construí-lo sem precisar inventar a metodologia no código.**

É uma mudança importante.

E, seguindo exatamente de onde paramos, o próximo movimento é:

# **FASE 3.3 — criar os Anexos Canônicos**

Eu começaria pelo **ANX-001 Release Manifest** e pelo **ANX-002 Version Compatibility Matrix**, que são rápidos, e em seguida entraríamos no mais importante: **ANX-003 BANK-0.2 — Banco de Itens Canônico**.

from artifact\_tool import Workbook, SpreadsheetFile

wb = Workbook.create()

readme = wb.worksheets.add("00\_README")

rel = wb.worksheets.add("ANX-001\_RELEASE")

comp = wb.worksheets.add("ANX-002\_COMPAT")

matrix = wb.worksheets.add("ANX-002\_MATRIX")

# Theme-like colors

navy = "#17365D"

blue = "#1F4E78"

light\_blue = "#D9EAF7"

light\_gray = "#F3F4F6"

mid\_gray = "#D1D5DB"

dark = "#111827"

green = "#E2F0D9"

yellow = "#FFF2CC"

red = "#FCE4D6"

white = "#FFFFFF"

# README

readme.merge\_cells("A1:F1")

readme.get\_range("A1").values = [["MGH™ — ANEXOS CANÔNICOS | FASE 3.3"]]

readme.get\_range("A1:F1").format = {

"fill": navy,

"font": {"bold": True, "color": white, "size": 16},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

}

readme.get\_range("A3:B10").values = [

["Workbook", "MGH\_Anexos\_Canonicos\_Release\_Compat\_v0.1"],

["Baseline", "MGH-MASTER-P1.0-RC1"],

["Fase", "3.3 — Anexos Canônicos"],

["Status", "CONTENT\_COMPLETE — FOR REVIEW"],

["Escopo desta versão", "ANX-001 Release Manifest + ANX-002 Version Compatibility Matrix"],

["Uso", "Fonte canônica de versões e compatibilidades para handoff técnico"],

["Regra", "Nenhuma combinação de versões deve ser presumida fora do que estiver explicitamente registrado."],

["Observação", "Mudanças em componentes publicados exigem nova versão e atualização deste registro."],

]

readme.get\_range("A3:A10").format = {

"fill": light\_blue,

"font": {"bold": True, "color": dark},

}

readme.get\_range("A3:B10").format.wrap\_text = True

readme.get\_range("A3:B10").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

readme.get\_range("A12:F12").merge()

readme.get\_range("A12").values = [["Conteúdo das abas"]]

readme.get\_range("A12:F12").format = {

"fill": blue, "font": {"bold": True, "color": white}, "horizontal\_alignment": "center"

}

readme.get\_range("A13:F16").values = [

["Aba", "Anexo", "Finalidade", "Status", "Bloqueia O0?", "Owner"],

["ANX-001\_RELEASE", "ANX-001", "Release Manifest da baseline P1.0-RC1", "Ready for review", "Sim, antes de publicação real", "MGH"],

["ANX-002\_COMPAT", "ANX-002", "Relações de compatibilidade e enforcement", "Ready for review", "Sim, para validação de release", "MGH + Tech"],

["ANX-002\_MATRIX", "ANX-002", "Visão matricial executiva", "Derived view", "Não isoladamente", "MGH + Tech"],

]

readme.get\_range("A13:F13").format = {"fill": blue, "font": {"bold": True, "color": white}}

readme.get\_range("A13:F16").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

readme.get\_range("A1:F16").format.wrap\_text = True

for c,w in zip(["A","B","C","D","E","F"], [24,28,46,24,22,20]):

readme.get\_range(f"{c}:{c}").format.column\_width = w

readme.get\_range("1:1").format.row\_height = 28

readme.freeze\_panes.freeze\_rows(1)

# Release Manifest metadata

rel.merge\_cells("A1:O1")

rel.get\_range("A1").values = [["ANX-001 — RELEASE MANIFEST | MGH-MASTER-P1.0-RC1"]]

rel.get\_range("A1:O1").format = {

"fill": navy, "font": {"bold": True, "color": white, "size": 15},

"horizontal\_alignment": "center", "vertical\_alignment": "center"

}

rel.get\_range("A3:B9").values = [

["Release ID", "MGH-MASTER-P1.0-RC1"],

["Methodological Status", "PILOT"],

["validated", False],

["decision\_use\_allowed", False],

["commercial\_decision\_use", False],

["external\_reporting\_max", "E2"],

["participant\_report\_enabled\_O0", False],

]

rel.get\_range("A3:A9").format = {"fill": light\_blue, "font": {"bold": True}}

rel.get\_range("A3:B9").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

headers = [

"Category","Component","Component Code","Version","Document / Spec",

"Methodological Status","Document Status","Implementation Status","Validation Status",

"Decision Use Allowed","Owner","Confidentiality","Effective Scope","Supersedes","Notes"

]

rel.get\_range("A11:O11").values = [headers]

rel.get\_range("A11:O11").format = {

"fill": blue, "font": {"bold": True, "color": white},

"horizontal\_alignment": "center", "vertical\_alignment": "center", "wrap\_text": True

}

rows = [

["Baseline","Master Specification","MGH-MASTER","P1.0-RC1","Master Specification Freeze","PILOT","FROZEN FOR PHASE A","Not software","NOT VALIDATED",False,"MGH","CONFIDENTIAL","Phase A / O0","","Release candidate da especificação; não equivale a validação científica."],

["Instrument","Instrumento","MGH","P1.0","MGH-INST-SPEC-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","NOT VALIDATED",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","O0","","48 cenários / 56 respostas pontuáveis."],

["Instrument","Banco de Itens","BANK","0.2","ANX-003 (pendente)","PILOT","CANONICAL CONSOLIDATION REQUIRED","NOT IMPLEMENTED","NOT VALIDATED",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","O0","","Conteúdo existe; consolidação canônica ainda pendente."],

["Scoring","Scoring Engine","SCORE","P1.0","MGH-SCORE-SPEC-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","NOT VALIDATED",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","O0","","Determinístico; sem IA."],

["Data","Operational Data Spec","DATA","P1.0","MGH-ARCH-DATA-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","N/A",False,"MGH + Tech","CONFIDENTIAL","Phase A / O0","","RAW append-only; runs versionados."],

["Evidence","Evidence Dictionary","EVID","0.2","ANX-009 (pendente)","PILOT","LOGIC COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","Research internal","","Thresholds numéricos ainda não congelados."],

["Interpretation","UIG Library","UIG-LIB","0.2","ANX-010 (pendente)","PILOT","LOGIC COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","Future Phase C","","32 UIGs: 25 Primary + 7 Modulators."],

["Interpretation","Synthesis Library","SYN","0.2","ANX-011 (pendente)","PILOT","LOGIC COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","Future Phase C","","5 sínteses oficiais em status PILOT."],

["Interpretation","Interpretation Engine","INTERP","0.2","MGH-INTERP-SPEC-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH + Tech","CONFIDENTIAL","Research internal / Future C","","Motor externo desabilitado em O0."],

["Claims","Claim Dictionary","CLAIM-DICT","0.1","ANX-012 (pendente)","PILOT","LOGIC COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","Future Phase C/D","","30 claims reportáveis definidos."],

["Actions","Action Registry","ACTION-REG","0.1","ANX-013 (pendente)","PILOT","LOGIC COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL — METHODOLOGY IP","Future Phase C/D","","30 ações canônicas definidas; matriz Claim→Action ainda a formalizar."],

["Language","Language Policy","LANG-POL","0.1","MGH-INTERP-SPEC-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH","CONFIDENTIAL","Future Phase D","","Linguagem nunca pode ser mais forte que a evidência."],

["Reporting","Report Composer","REPORT-COMP","0.1","MGH-INTERP-SPEC-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","PILOT-DEPENDENT",False,"MGH + Tech","CONFIDENTIAL","Future Phase D","","Deterministic fallback obrigatório."],

["Testing","Golden Dataset","GOLDEN","P1.0","MGH-TEST-SPEC-0.1 / ANX-015","PILOT","CASES DEFINED","NOT IMPLEMENTED","N/A",False,"MGH + Tech","CONFIDENTIAL","Phase A / CI","","Dataset machine-readable ainda a criar."],

["Research","Pilot Protocol","PILOT-O0","0.1","MGH-O0-PROTOCOL-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","N/A",False,"MGH","CONFIDENTIAL","O0","","O0 cognitiva 8–12 participantes."],

["Architecture","Data Model","DATA-MODEL","0.1","MGH-ARCH-DATA-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","N/A",False,"MGH + Tech","CONFIDENTIAL","Phase A","","Modelo relacional e rastreabilidade."],

["Architecture","API Specification","API-SPEC","0.1","ANX-018 / Functional Spec","PILOT","PARTIALLY SPECIFIED","NOT IMPLEMENTED","N/A",False,"Tech + MGH","CONFIDENTIAL","Phase A","","Contrato detalhado pode ser consolidado com stack escolhido."],

["Security","Security Baseline","SEC-BASE","0.1","MGH-SEC-NFR-0.1","PILOT","CONTENT\_COMPLETE","NOT IMPLEMENTED","N/A",False,"Tech + Privacy","CONFIDENTIAL","Phase A / O0","","Security gate obrigatório antes de participante real."],

]

rel.get\_range(f"A12:O{11+len(rows)}").values = rows

rel.get\_range(f"A12:O{11+len(rows)}").format.wrap\_text = True

rel.get\_range(f"A11:O{11+len(rows)}").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

# conditional formatting on implementation status / validation

last = 11 + len(rows)

rel.get\_range(f"H12:H{last}").conditional\_formats.add\_custom('=H12="NOT IMPLEMENTED"', {"fill": red})

rel.get\_range(f"I12:I{last}").conditional\_formats.add\_custom('=I12="NOT VALIDATED"', {"fill": yellow})

rel.get\_range(f"F12:F{last}").conditional\_formats.add\_custom('=F12="PILOT"', {"fill": light\_blue})

rel.freeze\_panes.freeze\_rows(11)

# widths

widths = [18,24,18,14,28,18,26,22,22,18,20,30,24,18,48]

for idx,w in enumerate(widths):

col = chr(ord('A')+idx)

rel.get\_range(f"{col}:{col}").format.column\_width = w

rel.get\_range("1:1").format.row\_height = 28

# Compatibility

comp.merge\_cells("A1:J1")

comp.get\_range("A1").values = [["ANX-002 — VERSION COMPATIBILITY MATRIX | LONG FORM"]]

comp.get\_range("A1:J1").format = {

"fill": navy, "font": {"bold": True, "color": white, "size": 15},

"horizontal\_alignment": "center"

}

comp\_headers = ["Source Component","Source Version","Target Component","Target Version","Relationship","Compatibility","Enforcement","Phase","Owner","Notes"]

comp.get\_range("A3:J3").values = [comp\_headers]

comp.get\_range("A3:J3").format = {"fill": blue, "font": {"bold": True, "color": white}, "wrap\_text": True, "horizontal\_alignment": "center"}

pairs = [

["BANK","0.2","MGH","P1.0","CONTENT\_SOURCE","REQUIRED","BLOCK\_PUBLISH\_IF\_MISMATCH","A/O0","MGH","Instrumento P1.0 referencia somente itens/opções publicados compatíveis no BANK-0.2."],

["MGH","P1.0","SCORE","P1.0","SCORING\_COMPATIBILITY","REQUIRED","BLOCK\_SCORE\_IF\_MISMATCH","A/O0","MGH + Tech","SCORE-P1.0 é a versão oficial de scoring do instrumento P1.0."],

["BANK","0.2","SCORE","P1.0","SCORING\_KEY\_SOURCE","REQUIRED","BLOCK\_SCORE\_IF\_MISMATCH","A/O0","MGH","Mappings devem vir da matriz canônica; não inferir por texto/código visual."],

["DATA-MODEL","0.1","MGH","P1.0","PERSISTENCE\_MODEL","SUPPORTED","BLOCK\_RELEASE\_IF\_UNSUPPORTED","A/O0","Tech","Modelo precisa preservar release manifest, responses e option presentation."],

["SEC-BASE","0.1","MGH","P1.0","SECURITY\_BASELINE","REQUIRED","BLOCK\_O0\_IF\_FAIL","A/O0","Tech + Privacy","Security baseline aplica-se ao fluxo de aplicação real."],

["PILOT-O0","0.1","MGH","P1.0","RESEARCH\_PROTOCOL","REQUIRED","BLOCK\_O0\_IF\_MISMATCH","A/O0","MGH","O0 deve utilizar instrumento/fluxo congelado da wave."],

["GOLDEN","P1.0","MGH","P1.0","TEST\_FIXTURE","REQUIRED","BLOCK\_RELEASE\_IF\_FAIL","A/O0","MGH + Tech","Instrument validator e flow tests associados ao P1.0."],

["GOLDEN","P1.0","SCORE","P1.0","TEST\_FIXTURE","REQUIRED","BLOCK\_DEPLOY\_IF\_FAIL","A/O0","MGH + Tech","Score Golden Cases devem reproduzir outputs conhecidos."],

["SCORE","P1.0","EVID","0.2","EVIDENCE\_INPUT","SUPPORTED","BLOCK\_OFFICIAL\_EVIDENCE\_IF\_MISMATCH","B/C","MGH","Evidence Engine consome métricas versionadas do scoring."],

["MGH","P1.0","EVID","0.2","INSTRUMENT\_COMPATIBILITY","SUPPORTED","BLOCK\_OFFICIAL\_EVIDENCE\_IF\_MISMATCH","B/C","MGH","Evidências são específicas às fontes/coverage do P1.0."],

["EVID","0.2","UIG-LIB","0.2","INTERPRETATION\_INPUT","REQUIRED","BLOCK\_INTERPRETATION\_IF\_MISMATCH","C","MGH","UIGs não consultam RAW; somente evidências autorizadas."],

["UIG-LIB","0.2","SYN","0.2","SYNTHESIS\_SOURCE","REQUIRED","BLOCK\_SYNTHESIS\_IF\_MISMATCH","C","MGH","5 sínteses oficiais compatíveis com UIG-LIB-0.2."],

["EVID","0.2","SYN","0.2","SYNTHESIS\_EVIDENCE","REQUIRED","BLOCK\_SYNTHESIS\_IF\_MISMATCH","C","MGH","Sínteses respeitam lineage, independence e evidence ceiling."],

["EVID","0.2","INTERP","0.2","INTERPRETATION\_INPUT","REQUIRED","BLOCK\_INTERPRETATION\_IF\_MISMATCH","C","MGH + Tech","Evidence results alimentam o motor."],

["UIG-LIB","0.2","INTERP","0.2","RULE\_LIBRARY","REQUIRED","BLOCK\_INTERPRETATION\_IF\_MISMATCH","C","MGH","32 UIGs oficiais da baseline."],

["SYN","0.2","INTERP","0.2","SYNTHESIS\_LIBRARY","REQUIRED","BLOCK\_INTERPRETATION\_IF\_MISMATCH","C","MGH","Candidate syntheses só em shadow mode."],

["INTERP","0.2","CLAIM-DICT","0.1","CLAIM\_AUTHORIZATION","REQUIRED","BLOCK\_CLAIM\_IF\_MISMATCH","C","MGH","Claim Engine só emite claims do dicionário compatível."],

["CLAIM-DICT","0.1","ACTION-REG","0.1","ACTION\_MAPPING","REQUIRED","BLOCK\_ACTION\_IF\_MISMATCH","C/D","MGH","Action deve estar autorizada pelo Claim/constraints."],

["CLAIM-DICT","0.1","LANG-POL","0.1","LANGUAGE\_CONSTRAINT","REQUIRED","BLOCK\_RENDER\_IF\_MISMATCH","D","MGH","Linguagem não aumenta força da evidência."],

["ACTION-REG","0.1","LANG-POL","0.1","LANGUAGE\_CONSTRAINT","REQUIRED","BLOCK\_RENDER\_IF\_MISMATCH","D","MGH","Constraints das actions devem sobreviver à redação."],

["CLAIM-DICT","0.1","REPORT-COMP","0.1","REPORT\_INPUT","REQUIRED","BLOCK\_REPORT\_IF\_MISMATCH","D","MGH + Tech","Composer recebe claims autorizados."],

["ACTION-REG","0.1","REPORT-COMP","0.1","REPORT\_INPUT","REQUIRED","BLOCK\_REPORT\_IF\_MISMATCH","D","MGH + Tech","Composer recebe ações/constraints."],

["LANG-POL","0.1","REPORT-COMP","0.1","RENDER\_POLICY","REQUIRED","BLOCK\_REPORT\_IF\_MISMATCH","D","MGH + Tech","Deterministic fallback obrigatório."],

]

comp.get\_range(f"A4:J{3+len(pairs)}").values = pairs

comp.get\_range(f"A3:J{3+len(pairs)}").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

comp.get\_range(f"A4:J{3+len(pairs)}").format.wrap\_text = True

comp.get\_range(f"F4:F{3+len(pairs)}").conditional\_formats.add\_custom('=F4="REQUIRED"', {"fill": green})

comp.get\_range(f"F4:F{3+len(pairs)}").conditional\_formats.add\_custom('=F4="SUPPORTED"', {"fill": light\_blue})

comp.freeze\_panes.freeze\_rows(3)

for c,w in zip(list("ABCDEFGHIJ"), [20,14,22,14,24,16,34,14,20,54]):

comp.get\_range(f"{c}:{c}").format.column\_width = w

comp.get\_range("1:1").format.row\_height = 28

# Matrix view

components = [

("BANK","0.2"),("MGH","P1.0"),("SCORE","P1.0"),("GOLDEN","P1.0"),

("PILOT-O0","0.1"),("DATA-MODEL","0.1"),("SEC-BASE","0.1"),

("EVID","0.2"),("UIG-LIB","0.2"),("SYN","0.2"),("INTERP","0.2"),

("CLAIM-DICT","0.1"),("ACTION-REG","0.1"),("LANG-POL","0.1"),("REPORT-COMP","0.1")

]

matrix.merge\_cells("A1:Q1")

matrix.get\_range("A1").values = [["ANX-002 — VERSION COMPATIBILITY MATRIX | EXECUTIVE VIEW"]]

matrix.get\_range("A1:Q1").format = {

"fill": navy, "font": {"bold": True, "color": white, "size": 15},

"horizontal\_alignment": "center"

}

# headers

matrix\_headers = ["Source \\ Target"] + [f"{c}\n{v}" for c,v in components]

matrix.get\_range(f"A3:P3").values = [matrix\_headers]

matrix.get\_range("A3:P3").format = {"fill": blue, "font": {"bold": True, "color": white}, "wrap\_text": True, "horizontal\_alignment": "center", "vertical\_alignment": "center"}

# initialize grid

grid = []

relmap = {(a,b,c,d): (relationship,compat,enforce) for a,b,c,d,relationship,compat,enforce,phase,owner,notes in pairs}

for sc,sv in components:

row=[f"{sc}\n{sv}"]

for tc,tv in components:

if sc==tc and sv==tv:

row.append("SELF")

else:

k=(sc,sv,tc,tv)

if k in relmap:

relationship, compatib, enforce = relmap[k]

row.append("REQ" if compatib=="REQUIRED" else "SUP")

else:

row.append("")

grid.append(row)

matrix.get\_range(f"A4:P{3+len(grid)}").values = grid

matrix.get\_range(f"A3:P{3+len(grid)}").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

matrix.get\_range(f"A4:A{3+len(grid)}").format = {"fill": light\_blue, "font": {"bold": True}, "wrap\_text": True}

matrix.get\_range(f"B4:P{3+len(grid)}").format.horizontal\_alignment = "center"

matrix.get\_range(f"B4:P{3+len(grid)}").conditional\_formats.add\_custom('=B4="REQ"', {"fill": green, "font": {"bold": True}})

matrix.get\_range(f"B4:P{3+len(grid)}").conditional\_formats.add\_custom('=B4="SUP"', {"fill": light\_blue})

matrix.get\_range(f"B4:P{3+len(grid)}").conditional\_formats.add\_custom('=B4="SELF"', {"fill": light\_gray})

matrix.get\_range("A21:D25").values = [

["Legend","","",""],

["REQ","Required compatibility; mismatch blocks the related operation","",""],

["SUP","Supported compatibility; mismatch blocks official use where specified","",""],

["SELF","Same component/version","",""],

["blank","No direct compatibility relationship registered","",""],

]

matrix.get\_range("A21:D21").format = {"fill": blue, "font": {"bold": True, "color": white}}

matrix.get\_range("A21:D25").format.borders = {"all": {"color": mid\_gray, "style": "continuous", "weight": 1}}

matrix.freeze\_panes.freeze\_rows(3)

matrix.freeze\_panes.freeze\_columns(1)

matrix.get\_range("A:A").format.column\_width = 20

for col in [chr(ord('B')+i) for i in range(15)]:

matrix.get\_range(f"{col}:{col}").format.column\_width = 14

matrix.get\_range("3:3").format.row\_height = 40

matrix.get\_range("1:1").format.row\_height = 28

# General styling

for sh in [readme, rel, comp, matrix]:

# default font

sh.get\_range("A1:Q100").format.font = {"name": "Aptos", "size": 10}

# restore title/header font colors/sizes where overwritten? artifact\_tool assignment above might replace font; reapply essentials below

# Reapply title/header after default font pass

for sh, rng in [(readme,"A1:F1"),(rel,"A1:O1"),(comp,"A1:J1"),(matrix,"A1:Q1")]:

sh.get\_range(rng).format.font = {"name":"Aptos Display","bold":True,"color":white,"size":15}

for sh,rng in [(readme,"A13:F13"),(rel,"A11:O11"),(comp,"A3:J3"),(matrix,"A3:P3")]:

sh.get\_range(rng).format.font = {"name":"Aptos","bold":True,"color":white,"size":10}

# save

out="/mnt/data/MGH\_ANX-001\_ANX-002\_Release\_Compatibility\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

out

# Compact verification

check1 = wb.inspect({

"kind": "table",

"range": "ANX-001\_RELEASE!A1:O20",

"include": "values,formulas",

"table\_max\_rows": 20,

"table\_max\_cols": 15,

})

print(check1.ndjson[:5000])

check2 = wb.inspect({

"kind": "table",

"range": "ANX-002\_COMPAT!A1:J18",

"include": "values,formulas",

"table\_max\_rows": 18,

"table\_max\_cols": 10,

})

print(check2.ndjson[:5000])

errors = wb.inspect({

"kind": "match",

"search\_term": "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options": {"use\_regex": True, "max\_results": 100},

"summary": "final formula error scan",

})

print(errors.ndjson[:2000])

img = wb.render

| **Aba** | **Conteúdo** |
| --- | --- |
| 00\_README | controle do arquivo, baseline, finalidade e regras de uso |
| ANX-001\_RELEASE | Release Manifest oficial da MGH-MASTER-P1.0-RC1 |
| ANX-002\_COMPAT | matriz detalhada de compatibilidade entre versões |
| ANX-002\_MATRIX | visão executiva matricial das dependências |

Boa tarde. Você não enviou o material cedo demais. Na verdade, o momento de envolver o desenvolvedor já havia chegado. O ponto importante é distinguir duas coisas: **ele já tem material suficiente para compreender o MGH, definir arquitetura, estimar a Fase A e começar a fundação técnica**, mas **ainda não entregamos todos os anexos canônicos necessários para ele concluir a implementação do instrumento e do Score Engine sem tomar decisões por conta própria**.

## **Onde estamos exatamente hoje**

Estamos na:

# **FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO**

Com este status:

| **Etapa** | **Status** |
| --- | --- |
| 3.1 — Índice Mestre do MGH™ | ✅ Concluída |
| 3.2 — Developer Handoff Package™ | ✅ Concluída |
| 3.3 — Anexos Canônicos | 🟡 Em andamento |
| 3.4 — Meeting Kit | ⏳ Ainda não iniciado |
| 3.5 — Análise da proposta/desenvolvedor | ⏳ Próxima fase conforme retorno dele |

Dentro da **3.3**, já concluímos:

**ANX-001 — Release Manifest** ✅
**ANX-002 — Version Compatibility Matrix** ✅

E paramos exatamente antes de construir:

# **ANX-003 — BANK-0.2 Canonical Item Bank**

Esse é agora o nosso próximo trabalho.

# **O desenvolvedor pode começar?**

## **Sim, mas com limites muito claros.**

Com os 12 documentos do Developer Handoff + Índice Mestre + ANX-001/002, ele já consegue trabalhar em bastante coisa.

### **Ele já pode começar com segurança**

| **Frente** | **Pode começar?** |
| --- | --- |
| Escolha/proposta de stack | ✅ |
| Repositório e organização do projeto | ✅ |
| DEV / STAGING / PILOT | ✅ |
| Banco relacional e migrations | ✅ |
| Modelo de dados estrutural | ✅ |
| Identity Vault | ✅ |
| Usuários, autenticação e RBAC | ✅ |
| Release Manifest e versionamento | ✅ |
| Estrutura de Participant / Assessment | ✅ |
| Estados CREATED / STARTED / IN\_PROGRESS etc. | ✅ |
| Response / Response Event | ✅ |
| Option Presentation | ✅ |
| Autosave e resume | ✅ |
| Idempotência | ✅ |
| Admin O0 estrutural | ✅ |
| Audit Log | ✅ |
| Backup / restore | ✅ |
| CI/CD | ✅ |
| Estrutura dos testes automatizados | ✅ |
| Instrument Registry genérico | ✅ |
| Esqueleto do Score Engine | ✅ |

Ou seja, **não existe motivo para ele ficar parado esperando todos os anexos**.

# **O que eu NÃO deixaria ele finalizar ainda**

Aqui está a diferença importante.

| **Componente** | **Situação** |
| --- | --- |
| Cadastrar definitivamente os 48 cenários | 🔴 aguardar BANK canônico |
| Cadastrar textos e alternativas oficiais | 🔴 aguardar BANK canônico |
| Mapping completo option → D/I/S/C/faceta | 🔴 aguardar Scoring Matrix |
| Score Engine completo | 🔴 aguardar Scoring Matrix |
| Fixtures de aceite matemático | 🔴 aguardar GOLDEN-P1.0 estruturado |
| Instrument Validator definitivo | 🟡 especificado, anexo estruturado pendente |
| SELF definitivo | 🟡 revisão canônica pendente |
| Consentimento real da O0 | 🟡 jurídico/privacy pendente |
| Privacy Notice real | 🟡 jurídico/privacy pendente |

Então eu diria ao desenvolvedor:

“Pode avançar com arquitetura, infraestrutura, banco, versionamento, fluxos, segurança e estrutura dos módulos. Para o conteúdo definitivo do instrumento e implementação final do scoring, vou encaminhar os anexos canônicos em seguida. Não deduza nem reconstrua itens ou regras que ainda não estejam nesses anexos.”

Essa mensagem protege muito o projeto.

# **O principal ponto que ainda falta**

É o:

# **BANK-0.2 CANÔNICO**

Até agora temos toda a engenharia dizendo, por exemplo:

PC-007 existe
está na posição 9
é PC Forced
randomiza alternativas
participa do RG-01
possui determinada função no scoring

Mas o desenvolvedor precisa receber, de forma estruturada, algo como:

PC-007

→ texto exato do cenário
→ OPTION-PC007-01
→ texto exato da opção
→ target correspondente
→ facet signal
→ randomization policy
→ status
→ text version.

E precisamos fazer isso para o instrumento inteiro.

Esse arquivo é o que impede que aconteça:

“Eu entendi a ideia e escrevi as perguntas no sistema.”

Não. Ele deve carregar **a pergunta oficial**.

# **Depois do BANK vêm mais três anexos particularmente importantes**

A sequência que havíamos definido permanece correta:

| **Ordem** | **Anexo** | **Função** |
| --- | --- | --- |
| 1 | ANX-003 BANK-0.2 | conteúdo canônico do instrumento |
| 2 | ANX-004 Application Sequence | ordem oficial 1–48 e comportamento |
| 3 | ANX-005 SCORE-P1.0 Scoring Matrix | mapping exato das 56 respostas |
| 4 | ANX-015 GOLDEN-P1.0 | entradas e resultados conhecidos para testes |

Quando esses quatro estiverem com o desenvolvedor, o núcleo técnico da aplicação fica muito mais fechado.

Depois avançamos para Data Dictionary, RTM e materiais operacionais.

# **Então foi errado ter enviado tudo?**

# **Não.**

Eu considero que você fez certo.

Nós já tínhamos atingido o ponto em que seria desperdício continuar projetando sem colocar um desenvolvedor na conversa.

Na verdade, existem vantagens em ele já ter recebido o material: ele pode apontar questões técnicas, propor stack, estimar prazo e custo, analisar o modelo de dados e começar a levantar dúvidas **antes de terminarmos os anexos finais**.

O que eu não faria é autorizar algo como:

“Pode desenvolver tudo até ficar pronto e depois me mostra.”

Ainda precisamos trabalhar em paralelo.

# **A posição ideal agora é esta**

Imagine duas linhas avançando ao mesmo tempo:

**NOSSO LADO**

Anexos Canônicos
→ BANK
→ Application Sequence
→ Scoring Matrix
→ Golden Dataset
→ Data Dictionary
→ O0 Kit

**LADO DO DESENVOLVEDOR**

Arquitetura
→ stack
→ projeto/repositório
→ banco/migrations
→ autenticação/RBAC
→ versionamento
→ Assessment Engine
→ Response/Event Engine
→ infraestrutura/testes.

Depois as duas linhas se encontram.

Aí ele conecta:

conteúdo metodológico canônico

à:

infraestrutura que já construiu.

É uma ótima forma de trabalhar.

# **O que eu pediria a ele agora**

Se você ainda não fez isso, eu enviaria uma mensagem simples:

“O material encaminhado representa a especificação técnica e metodológica do MGH e já pode ser utilizado para análise da arquitetura e início da fundação da Fase A. Estamos finalizando agora os anexos canônicos estruturados, especialmente Banco de Itens, sequência de aplicação, matriz de scoring e Golden Dataset. Esses anexos serão a fonte oficial para implementação do conteúdo e da pontuação. Até recebê-los, peço que nenhuma regra, pergunta, alternativa, mapping ou threshold metodológico seja presumido ou criado por interpretação.”

Isso coloca os dois lados exatamente no mesmo ponto.

# **E quanto do projeto está pronto?**

Se falarmos de **engenharia pré-desenvolvimento**, continuamos em:

# **100%**

Ela cumpriu sua missão.

Se falarmos de **materialização do handoff para programação**, estamos agora no meio da consolidação dos anexos.

E se falarmos do **MGH como produto completo**, obviamente ainda há bastante estrada:

Fase A → O0 → ajustes → O1 → O2 → psicometria → Motor → relatório → produto comercial.

Isso é esperado.

# **Minha recomendação agora**

Não interromperia o desenvolvedor.

Também não começaria uma nova frente conceitual.

Eu retomaria exatamente de onde paramos:

# **3.3 — ANX-003: BANK-0.2 CANONICAL ITEM BANK**

E faria isso com bastante rigor, porque esse provavelmente é **o arquivo metodológico mais importante que entregaremos ao programador nessa primeira fase**.

Depois dele, fazemos em sequência o **ANX-004 e ANX-005**, e nesse ponto eu faria uma pequena nova entrega ao desenvolvedor chamada algo como:

**MGH Phase A — Canonical Implementation Pack v0.1**

Aí, sim, ele terá o pacote narrativo **e** o núcleo estruturado para programar a Fase A sem precisar preencher nenhuma lacuna metodológica por conta própria.

5.6 Alta

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

from artifact\_tool import Blob, SpreadsheetFile

wb0 = SpreadsheetFile.import\_xlsx(Blob.load("/mnt/data/MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx"))

print(wb0.inspect({"kind":"sheet","include":"id,name"}).ndjson)

{"kind":"sheet","id":"ws/t8qykc","name":"17\_LISTS","index":0,"range":"A1:X11","address":"A1:X11"}

{"kind":"sheet","id":"ws/3asq8g","name":"00\_README","index":1,"range":"A1:B14","address":"A1:B14"}

{"kind":"sheet","id":"ws/di93t7","name":"01\_PARTICIPANTS","index":2,"range":"A1:G1","address":"A1:G1"}

{"kind":"sheet","id":"ws/8qawdn","name":"02\_ASSESSMENTS","index":3,"range":"A1:V200","address":"A1:V200"}

{"kind":"sheet","id":"ws/af67n8","name":"03\_RESPONSES\_RAW","index":4,"range":"A1:R2000","address":"A1:R2000"}

{"kind":"sheet","id":"ws/jzzs8s","name":"04\_RESPONSE\_EVENTS","index":5,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/uw9cm7","name":"05\_SELF\_FEEDBACK","index":6,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/eavtru","name":"06\_COG\_INTERVIEWS","index":7,"range":"A1:K200","address":"A1:K200"}

{"kind":"sheet","id":"ws/ti9r3p","name":"07\_COG\_ITEM\_REVIEW","index":8,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/5f8jdu","name":"08\_AUDIT\_FLAGS","index":9,"range":"A1:H1","address":"A1:H1"}

{"kind":"sheet","id":"ws/68kgdi","name":"09\_OCCURRENCES","index":10,"range":"A1:J1","address":"A1:J1"}

{"kind":"sheet","id":"ws/i5j63d","name":"10\_SCORING\_MATRIX","index":11,"range":"A1:L57","address":"A1:L57"}

{"kind":"sheet","id":"ws/s8bpxm","name":"11\_DERIVED\_SCORES","index":12,"range":"A1:K1500","address":"A1:K1500"}

{"kind":"sheet","id":"ws/s2fu46","name":"12\_HYPOTHESES","index":13,"range":"A1:J13","address":"A1:J13"}

{"kind":"sheet","id":"ws/fkv0tj","name":"13\_ITEM\_SURVIVAL","index":14,"range":"A1:L49","address":"A1:L49"}

{"kind":"sheet","id":"ws/mvcp1y","name":"14\_CHANGE\_LOG","index":15,"range":"A1:L1","address":"A1:L1"}

{"kind":"sheet","id":"ws/jh8wup","name":"15\_GATE\_REVIEW","index":16,"range":"A1:L15","address":"A1:L15"}

{"kind":"sheet","id":"ws/fzjc81","name":"16\_DASHBOARD\_O0","index":17,"range":"A1:E11","address":"A1:E11"}

for rng in ["10\_SCORING\_MATRIX!A1:L57","13\_ITEM\_SURVIVAL!A1:L49","12\_HYPOTHESES!A1:J13","00\_README!A1:B14"]:

print("RANGE", rng)

print(wb0.inspect({"kind":"table","range":rng,"include":"values,formulas","table\_max\_rows":80,"table\_max\_cols":20}).ndjson)

print()

RANGE 10\_SCORING\_MATRIX!A1:L57

{"kind":"table","sheet":"10\_SCORING\_MATRIX","address":"A1:L57","rows":57,"cols":12,"values":[["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable","score\_target","scoring\_rule","facet\_signal","relation\_group","notes"],[1,"PC-001","PC-001","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.DECISION\_SPEED","RG-02","Option order may be randomized; scoring follows option\_id, never display posi..."],[2,"PRC-001","PRC-001","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[3,"TH-003","TH-003","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,"RG-06","3 items per axis; normalize with ((sum-3)/9)\*100."],[4,"PC-009R","PC-009R","PC","CATEGORICAL","RELATIONSHIP","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.SOCIABILITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[5,"TH-001","TH-001","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[6,"PC-021","PC-021","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display posi..."],[7,"PRC-004R","PRC-004R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[7,"PRC-004R","PRC-004R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[7,"PRC-004R","PRC-004R-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[8,"PC-014","PC-014","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PATIENCE",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[9,"PC-007","PC-007","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.AUTONOMY","RG-01","Option order may be randomized; scoring follows option\_id, never display posi..."],[10,"PRC-003","PRC-003","PRC","CATEGORICAL","DECISION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[11,"TH-010","TH-010","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[12,"PC-035","PC-035","PC","CATEGORICAL","COMMUNICATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.EXPRESSIVENESS",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[13,"TH-006","TH-006","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[14,"PC-018","PC-018","PC","CATEGORICAL","FEEDBACK","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.RELATIONAL\_MAINTENANCE",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[15,"PRC-012","PRC-012","PRC","CATEGORICAL","EXECUTION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[16,"PC-019","PC-019","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.ANALYSIS",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[17,"PC-016","PC-016","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.CONSTANCY","RG-03","Option order may be randomized; scoring follows option\_id, never display posi..."],[18,"PRC-005","PRC-005","PRC","CATEGORICAL","EXECUTION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[19,"TH-012","TH-012","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,"RG-06","3 items per axis; normalize with ((sum-3)/9)\*100."],[20,"PC-010","PC-010","PC","CATEGORICAL","COMMUNICATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.PERSUASION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[21,"TH-004R","TH-004R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[22,"PC-028","PC-028","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display posi..."],[23,"PRC-011","PRC-011","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[24,"PC-012","PC-012","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.MOBILIZATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[25,"PC-002","PC-002","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.CONFRONTATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[26,"PRC-006R","PRC-006R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[26,"PRC-006R","PRC-006R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[26,"PRC-006R","PRC-006R-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[27,"TH-007","TH-007","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[28,"PC-020R","PC-020R","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.PRECISION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[29,"TH-002","TH-002","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."],[30,"PC-023","PC-023","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CAUTION","RG-02","Option order may be randomized; scoring follows option\_id, never display posi..."],[31,"PRC-002","PRC-002","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[32,"PC-033","PC-033","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.CONSTANCY","RG-03","Option order may be randomized; scoring follows option\_id, never display posi..."],[33,"PC-027","PC-027","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.AUTONOMY","RG-01","Option order may be randomized; scoring follows option\_id, never display posi..."],[34,"PRC-014I","PRC-014I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[34,"PRC-014I","PRC-014I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[34,"PRC-014I","PRC-014I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[35,"TH-013","TH-013","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[36,"PC-036","PC-036","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.QUALITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[37,"TH-008R","TH-008R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[38,"PC-015","PC-015","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.COOPERATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[39,"PRC-009","PRC-009","PRC","CATEGORICAL","FEEDBACK","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[40,"PC-008","PC-008","PC","CATEGORICAL","PRESSURE\_EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.RESULT\_ORIENTATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[41,"PC-017","PC-017","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PREDICTABILITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[42,"PRC-010I","PRC-010I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[42,"PRC-010I","PRC-010I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[42,"PRC-010I","PRC-010I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[43,"TH-015","TH-015","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."]],"valuesTruncated":true,"valuesPreviewRows":52,"valuesPreviewCols":12,"valuesPreviewAddress":"A1:L52"}

RANGE 13\_ITEM\_SURVIVAL!A1:L49

{"kind":"table","sheet":"13\_ITEM\_SURVIVAL","address":"A1:L49","rows":49,"cols":12,"values":[["item\_code","instrument\_version","cognitive\_status","alternative\_fit","desirability\_status","distribution\_status","timing\_status","revision\_status","quantitative\_status","relation\_status","final\_decision","decision\_reason"],["PC-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-003","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-009R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-021","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-004R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-014","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-007","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-003","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-010","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-035","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-006","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-018","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-019","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-016","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-005","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-010","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-004R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-028","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-011","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-006R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-007","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-020R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-023","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-033","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-027","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-014I","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-013","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-036","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-008R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-009","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-008","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-017","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-010I","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-029","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-009R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-005","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-011R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null]]}

RANGE 12\_HYPOTHESES!A1:J13

{"kind":"table","sheet":"12\_HYPOTHESES","address":"A1:J13","rows":13,"cols":10,"values":[["hypothesis\_id","version","statement","expected\_direction","variables","registered\_before\_wave","challenge\_condition","status","analysis\_reference","notes"],["H-001","1.0","PRC.V.INDEPENDENT apresentará relação positiva com SELF-06.","POSITIVE","PRC.V.INDEPENDENT; SELF-06","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-002","1.0","PRC.A.INDEPENDENT apresentará relação positiva com SELF-07.","POSITIVE","PRC.A.INDEPENDENT; SELF-07","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-003","1.0","PRC.C.INDEPENDENT apresentará relação positiva com SELF-08.","POSITIVE","PRC.C.INDEPENDENT; SELF-08","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-004","1.0","Sinais de PC.D.AUTONOMY apresentarão relação positiva com SELF-02.","POSITIVE","PC.D.AUTONOMY; SELF-02","O1","Ausência persistente de relação ou padrão inverso em amostra adequada.","OPEN",null,null],["H-005","1.0","Sinais de PC.C.CRITERION apresentarão relação positiva com SELF-03.","POSITIVE","PC.C.CRITERION; SELF-03","O1","Ausência persistente de relação ou padrão inverso em amostra adequada.","OPEN",null,null],["H-006","1.0","DR.EXTERNALIZATION apresentará relação positiva com SELF-04.","POSITIVE","DR.EXTERNALIZATION; SELF-04","O1","Ausência persistente de associação ou associação inversa.","OPEN",null,null],["H-007","1.0","DR.PERSISTENCE apresentará relação positiva com SELF-05.","POSITIVE","DR.PERSISTENCE; SELF-05","O1","Ausência persistente de associação ou associação inversa.","OPEN",null,null],["H-008","1.0","Sinais relacionados à velocidade decisória apresentarão relação positiva com SELF-01.","POSITIVE","PC.D.DECISION\_SPEED; SELF-01","O1","Ausência persistente de relação ou relação inversa.","OPEN",null,null],["H-009","1.0","Pares RG-01 a RG-06 apresentarão convergência superior ao esperado por escolhas sem relação.","POSITIVE","RG-01..RG-06","O1","Convergência indistinguível de pares não relacionados.","OPEN",null,null],["H-010","1.0","Alternativas PC não apresentarão concentração sistemática extrema em uma única dimensão através da maioria dos itens.","BALANCED","PC item distributions","O1","Maioria dos itens com alternativa dominante extrema sem justificativa contextual.","OPEN",null,null],["H-011","1.0","PRC Forced e PRC Independent apresentarão alguma convergência, mas não equivalência perfeita.","POSITIVE\_NOT\_PERFECT","PRC FORCED; PRC INDEPENDENT","O1","Ausência persistente de convergência ou equivalência quase perfeita sistemática.","OPEN",null,null],["H-012","1.0","Os quatro eixos DR apresentarão padrões parcialmente independentes e não uma única dimensão geral.","PARTIAL\_INDEPENDENCE","DR.SPEED; DR.IMPACT; DR.PERSISTENCE; DR.EXTERNALIZATION","O2","Eixos colapsam sistematicamente em um único padrão geral.","OPEN",null,null]]}

RANGE 00\_README!A1:B14

{"kind":"table","sheet":"00\_README","address":"A1:B14","rows":14,"cols":2,"values":[["MGH™ — Base Operacional do Piloto Onda 0",null],[null,null],["Versão: DATA-P1.0 | Instrumento: MGH-P1.0 | Scoring: SCORE-P1.0",null],[null,null],["Tema","Diretriz"],["PRINCÍPIO","A base foi desenhada para rastrear resposta → score → evidência → interpretação. RAW nunca é sobrescrito."],["IDENTIDADE","Dados identificáveis devem ficar separados da base analítica. Use participant\_code na análise."],["RAW","03\_RESPONSES\_RAW e 04\_RESPONSE\_EVENTS devem ser tratados como append-only."],["DERIVED","11\_DERIVED\_SCORES pode ser recalculada por versão de algoritmo, sem alterar RAW."],["ONDA 0","Objetivo: compreensão, adequação das alternativas, desejabilidade, tempo, revisões e problemas de mapeamento."],["NÃO USAR PARA","Contratação, demissão, promoção, punição, remuneração, diagnóstico psicológico ou avaliação de competência."],["TIMESTAMPS","Armazenar em UTC. Converter para horário local apenas na interface."],["VERSÕES","Mudanças em itens, score, evidência ou interpretação devem entrar no 14\_CHANGE\_LOG."],["STATUS DO ARQUIVO","Base operacional pronta para receber MGH-O0-001."]]}

print(wb0.inspect({"kind":"table","range":"10\_SCORING\_MATRIX!A44:L57","include":"values,formulas","table\_max\_rows":20,"table\_max\_cols":12}).ndjson)

{"kind":"table","sheet":"10\_SCORING\_MATRIX","address":"A44:L57","rows":14,"cols":12,"values":[[37,"TH-008R","TH-008R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[38,"PC-015","PC-015","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.COOPERATION",null,"Option order may be randomized; scoring follows option\_id, never display position."],[39,"PRC-009","PRC-009","PRC","CATEGORICAL","FEEDBACK","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[40,"PC-008","PC-008","PC","CATEGORICAL","PRESSURE\_EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.RESULT\_ORIENTATION",null,"Option order may be randomized; scoring follows option\_id, never display position."],[41,"PC-017","PC-017","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PREDICTABILITY",null,"Option order may be randomized; scoring follows option\_id, never display position."],[42,"PRC-010I","PRC-010I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[42,"PRC-010I","PRC-010I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[42,"PRC-010I","PRC-010I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[43,"TH-015","TH-015","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."],[44,"PC-029","PC-029","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.ASSERTIVENESS",null,"Option order may be randomized; scoring follows option\_id, never display position."],[45,"TH-009R","TH-009R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[46,"PC-005","PC-005","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","TRANSVERSAL",null,"Option order may be randomized; scoring follows option\_id, never display position."],[47,"PRC-015","PRC-015","PRC","CATEGORICAL","CHANGE","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[48,"PC-011R","PC-011R","PC","CATEGORICAL","CHANGE\_IDEATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.ENTHUSIASM",null,"Option order may be randomized; scoring follows option\_id, never display position."]]}

from artifact\_tool import Workbook, SpreadsheetFile

from collections import OrderedDict, defaultdict

# Read canonical metadata from existing operational workbook (already imported as wb0)

# Extract scoring matrix rows.

inspect = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A1:L57",

"include":"values",

"table\_max\_rows":80,

"table\_max\_cols":12

})

data = inspect.data["values"] if hasattr(inspect, "data") else None

print(type(inspect))

---------------------------------------------------------------------------

TypeError Traceback (most recent call last)

Cell In[4], line 13

9 "include":"values",

10 "table\_max\_rows":80,

11 "table\_max\_cols":12

12 })

---> 13 data = inspect.data["values"] if hasattr(inspect, "data") else None

14 print(type(inspect))

File /tmp/tmp.QlpUkOUI9D/artifact\_tool\_v2-2.8.66/artifact\_tool/rpc/remote.py:886, in RemoteAttr.\_\_getitem\_\_(self, k)

885 'Could not get source, probably due dynamically evaluated source code.'

TypeError: 'NoneType' object is not subscriptable

import json, math, os, textwrap

from artifact\_tool import Blob, SpreadsheetFile, Workbook

wb0 = SpreadsheetFile.import\_xlsx(Blob.load("/mnt/data/MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx"))

s = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A1:L57",

"include":"values",

"table\_max\_rows":80,

"table\_max\_cols":12

})

obj = json.loads(s.ndjson)

rows = obj["values"]

len(rows), rows[0], rows[-1]

(52,

['scenario\_order',

'scenario\_code',

'item\_code',

'lens',

'response\_format',

'context',

'randomizable',

'score\_target',

'scoring\_rule',

'facet\_signal',

'relation\_group',

'notes'],

[43,

'TH-015',

'TH-015',

'DR',

'ORDINAL',

'PERSISTENCE',

'FALSE',

'DR.PERSISTENCE',

'A=1,B=2,C=3,D=4',

None,

'RG-05',

'3 items per axis; normalize with ((sum-3)/9)\*100.'])

s2 = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A44:L57",

"include":"values",

"table\_max\_rows":20,

"table\_max\_cols":12

})

obj2 = json.loads(s2.ndjson)

tail = obj2["values"]

rows\_full = rows + tail[1:] if tail and tail[0][0]==rows[-1][0] else rows + tail

len(rows\_full), rows\_full[-1]

(66,

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

header = rows\_full[0]

seen=set()

dedup=[]

for r in rows\_full[1:]:

key=tuple(r)

if key not in seen:

seen.add(key)

dedup.append(r)

len(dedup), dedup[0], dedup[-1]

(62,

[1,

'PC-001',

'PC-001',

'PC',

'CATEGORICAL',

'DECISION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.D.DECISION\_SPEED',

'RG-02',

'Option order may be randomized; scoring follows option\_id, never display posi...'],

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

sheet\_sc = wb0.worksheets.get\_item("10\_SCORING\_MATRIX")

vals = sheet\_sc.get\_range("A1:L57").values

type(vals), len(vals), vals[0], vals[-1]

(list,

57,

['scenario\_order',

'scenario\_code',

'item\_code',

'lens',

'response\_format',

'context',

'randomizable',

'score\_target',

'scoring\_rule',

'facet\_signal',

'relation\_group',

'notes'],

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

from artifact\_tool import Workbook, SpreadsheetFile

from collections import OrderedDict

# Source metadata from operational workbook

vals = wb0.worksheets.get\_item("10\_SCORING\_MATRIX").get\_range("A1:L57").values

headers = vals[0]

rows = [dict(zip(headers, r)) for r in vals[1:]]

# Group into 48 scenarios preserving order

scenario\_map = OrderedDict()

for r in rows:

order = int(r["scenario\_order"])

if order not in scenario\_map:

scenario\_map[order] = {

"scenario\_order": order,

"scenario\_code": r["scenario\_code"],

"lens": r["lens"],

"response\_format": r["response\_format"],

"context": r["context"],

"randomizable": r["randomizable"],

"item\_codes": [],

"score\_targets": [],

"facet\_signals": [],

"relation\_groups": [],

"scoring\_rules": [],

"notes": [],

}

x = scenario\_map[order]

for field, key in [("item\_codes","item\_code"),("score\_targets","score\_target"),

("facet\_signals","facet\_signal"),("relation\_groups","relation\_group"),

("scoring\_rules","scoring\_rule"),("notes","notes")]:

v = r[key]

if v not in (None, "") and v not in x[field]:

x[field].append(v)

# mapping type + policies

def scenario\_type(x):

if x["lens"] == "PC":

return "PC\_FORCED\_CHOICE"

if x["lens"] == "DR":

return "DR\_ORDINAL"

if x["lens"] == "PRC" and x["response\_format"] == "RATING":

return "PRC\_INDEPENDENT"

return "PRC\_FORCED\_CHOICE"

def rand\_policy(x):

t = scenario\_type(x)

if t == "PC\_FORCED\_CHOICE":

return "OPTIONS\_RANDOMIZED\_SERVER\_SIDE"

if t == "PRC\_FORCED\_CHOICE":

return "OPTIONS\_RANDOMIZED\_SERVER\_SIDE"

if t == "PRC\_INDEPENDENT":

return "V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED"

return "NO\_RANDOMIZATION"

scenario\_rows = []

for order, x in scenario\_map.items():

t = scenario\_type(x)

count = 3 if t == "PRC\_INDEPENDENT" else 1

scenario\_rows.append([

order,

x["scenario\_code"],

"; ".join(x["item\_codes"]),

x["lens"],

t,

x["context"],

rand\_policy(x),

count,

"YES",

"; ".join(x["score\_targets"]),

"; ".join(x["facet\_signals"]),

"; ".join(x["relation\_groups"]),

"", # exact scenario text

"SOURCE\_REQUIRED",

"BANK-0.2",

"MGH-P1.0",

"PILOT",

"Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."

])

# Response schema rows from source, exactly 56

response\_rows = []

for r in rows:

response\_rows.append([

int(r["scenario\_order"]), r["scenario\_code"], r["item\_code"], r["lens"],

r["response\_format"], r["context"], r["randomizable"], r["score\_target"],

r["scoring\_rule"], r["facet\_signal"] or "", r["relation\_group"] or "",

r["notes"] or "", "BANK-0.2", "SCORE-P1.0", "PILOT"

])

# Expected option / rating structure

option\_rows = []

for order, x in scenario\_map.items():

t = scenario\_type(x)

code = x["scenario\_code"]

if t == "PC\_FORCED\_CHOICE":

for role in ["D","I","S","C"]:

option\_rows.append([order, code, t, role, "", "", 1, "PC."+role, "RANDOMIZED", "SOURCE\_REQUIRED",

"Canonical option\_id and exact wording required from original item source."])

elif t == "PRC\_FORCED\_CHOICE":

for role in ["V","A","C"]:

option\_rows.append([order, code, t, role, "", "", 1, f"PRC.{role}.FORCED", "RANDOMIZED", "SOURCE\_REQUIRED",

"One option per modality; exact canonical option\_id/text required."])

elif t == "PRC\_INDEPENDENT":

for role in ["V","A","C"]:

option\_rows.append([order, code, t, role, "", "", "", f"PRC.{role}.INDEPENDENT", "BLOCK\_ORDER\_MAY\_RANDOMIZE", "SOURCE\_REQUIRED",

"Independent 1–5 rating statement; exact statement and scale labels required."])

else: # DR

# scoring key based on axis

axis = x["context"]

if axis == "PERSISTENCE":

keys = {"A":1,"B":2,"C":3,"D":4}

else:

keys = {"A":4,"B":3,"C":2,"D":1}

for role in ["A","B","C","D"]:

option\_rows.append([order, code, t, role, "", "", keys[role], x["score\_targets"][0], "FIXED\_ORDER", "SOURCE\_REQUIRED",

"Exact ordinal alternative wording required; display order is fixed."])

relation\_rows = [

["RG-01","PC-007","PC-027","PC.D.AUTONOMY","Autonomia","Research relation group; not a sincerity score."],

["RG-02","PC-001","PC-023","DECISION\_UNCERTAINTY","Decisão sob incerteza","Research relation group; not a sincerity score."],

["RG-03","PC-016","PC-033","PC.S.CONSTANCY","Constância","Research relation group; not a sincerity score."],

["RG-04","PC-021","PC-028","PC.C.CRITERION","Critério / ambiguidade","Research relation group; not a sincerity score."],

["RG-05","TH-002","TH-015","DR.PERSISTENCE","Persistência pós-conflito","Research relation group; not a sincerity score."],

["RG-06","TH-003","TH-012","DR.EXTERNALIZATION","Externalização em contexto negativo","Research relation group; not a sincerity score."],

]

validation\_rows = [

["VAL-001","Scenario count","48","COUNT(01\_P1\_SCENARIOS.scenario\_order)","BLOCKING"],

["VAL-002","PC scenario count","24","COUNTIF(lens='PC')","BLOCKING"],

["VAL-003","PRC forced scenario count","8","COUNTIF(type='PRC\_FORCED\_CHOICE')","BLOCKING"],

["VAL-004","PRC independent scenario count","4","COUNTIF(type='PRC\_INDEPENDENT')","BLOCKING"],

["VAL-005","DR scenario count","12","COUNTIF(lens='DR')","BLOCKING"],

["VAL-006","Scored response count","56","SUM(scored\_response\_count)","BLOCKING"],

["VAL-007","PRC independent scored ratings","12","4 scenarios × 3 ratings","BLOCKING"],

["VAL-008","Relation groups","6","COUNT(04\_RELATION\_GROUPS)","BLOCKING"],

["VAL-009","Scenario order first","PC-001","scenario\_order=1","BLOCKING"],

["VAL-010","Scenario order last","PC-011R","scenario\_order=48","BLOCKING"],

["VAL-011","DR randomization","FALSE","All DR scenarios fixed-order","BLOCKING"],

["VAL-012","Published text completeness","48 scenario texts + all options","Must be 100% before P1.0 content publication","BLOCKING"],

]

gap\_rows = [

["GAP-001","Exact scenario wording for all 48 P1.0 scenarios","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover exact previously authored wording from original MGH item-generation source; do not reconstruct."],

["GAP-002","Exact response-option wording for PC / PRC Forced / DR","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover original alternatives verbatim; no paraphrasing."],

["GAP-003","Canonical option IDs for every categorical/ordinal alternative","CRITICAL","BLOCKS\_IMPLEMENTATION\_FINALIZATION",

"Populate stable option IDs from original bank. Display position must remain separate."],

["GAP-004","Full BANK-0.2 candidate universe (68 candidate groups/items)","HIGH","NON\_BLOCKING\_FOR\_P1\_SUBSET",

"Current accessible source reliably identifies the 48 P1.0 application scenarios, not all BANK-0.2 candidates."],

["GAP-005","Exact PRC Independent statements and 1–5 scale labels","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover exact V/A/C statements and published rating labels."],

["GAP-006","Canonical item\_text\_version per scenario/item","HIGH","BLOCKS\_RELEASE\_MANIFEST\_FINAL\_BINDING",

"Assign only after exact text source is recovered and frozen."],

]

# Create workbook

wb = Workbook.create()

s\_readme = wb.worksheets.add("00\_README")

s\_scen = wb.worksheets.add("01\_P1\_SCENARIOS")

s\_resp = wb.worksheets.add("02\_RESPONSE\_SCHEMA")

s\_opt = wb.worksheets.add("03\_OPTION\_REQUIREMENTS")

s\_rg = wb.worksheets.add("04\_RELATION\_GROUPS")

s\_val = wb.worksheets.add("05\_VALIDATION\_RULES")

s\_gap = wb.worksheets.add("06\_SOURCE\_GAPS")

s\_lists = wb.worksheets.add("07\_LISTS")

# Theme

navy = "#14213D"

gold = "#D4A017"

light = "#F5F7FA"

muted = "#E9EEF5"

red = "#FDECEC"

green = "#EAF6EE"

amber = "#FFF4D6"

white = "#FFFFFF"

dark = "#1B1F24"

border = "#C7D0DB"

def title\_block(sheet, title, subtitle, end\_col):

sheet.merge\_cells(f"A1:{end\_col}1")

sheet.get\_range("A1").values = [[title]]

sheet.get\_range(f"A1:{end\_col}1").format = {

"fill": navy, "font": {"bold": True, "color": white, "size": 16},

"vertical\_alignment": "center"

}

sheet.get\_range(f"A1:{end\_col}1").format.row\_height = 28

sheet.merge\_cells(f"A2:{end\_col}2")

sheet.get\_range("A2").values = [[subtitle]]

sheet.get\_range(f"A2:{end\_col}2").format = {

"fill": "#EEF2F7", "font": {"italic": True, "color": dark, "size": 10},

"wrap\_text": True, "vertical\_alignment": "center"

}

sheet.get\_range(f"A2:{end\_col}2").format.row\_height = 32

def header\_fmt(rng):

rng.format = {

"fill": gold,

"font": {"bold": True, "color": "#111111"},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

"borders": {"bottom": {"style": "continuous", "color": "#8A6B00", "weight": 1}}

}

# README

title\_block(s\_readme, "MGH™ — ANX-003 | BANK-0.2 Canonical Item Bank",

"DRAFT DE CONSOLIDAÇÃO — subconjunto de implementação MGH-P1.0. Não publicar conteúdo até recuperar redações e option IDs canônicos.", "H")

readme\_rows = [

["Campo","Valor"],

["Anexo","ANX-003"],

["Ativo metodológico","BANK-0.2"],

["Instrumento alvo","MGH-P1.0"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Document status","DRAFT — SOURCE RECOVERY REQUIRED"],

["Validation status","PILOT / NOT VALIDATED"],

["Scope desta planilha","48 cenários oficiais do P1.0 + 56 respostas pontuáveis + estrutura esperada de opções"],

["Limitação crítica","Os textos exatos dos cenários/opções e canonical option IDs não foram encontrados nos artefatos acessíveis nesta sessão."],

["Regra","Não reconstruir, resumir ou inventar wording. Campos ausentes permanecem SOURCE\_REQUIRED."],

["Fonte estrutural","MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx / 10\_SCORING\_MATRIX + Master Specs"],

["Full BANK-0.2","O banco candidato total foi definido como 68; esta planilha não declara conter os 68 candidatos até que a fonte integral seja recuperada."],

["Próximo gate","Recuperar conteúdo original → preencher IDs/textos → revisão metodológica → congelar item\_text\_version → publicar ANX-003 final."],

]

s\_readme.get\_range(f"A4:B{3+len(readme\_rows)}").values = readme\_rows

header\_fmt(s\_readme.get\_range("A4:B4"))

s\_readme.get\_range("A5:A20").format.font = {"bold": True, "color": navy}

s\_readme.get\_range("A4:B20").format.wrap\_text = True

s\_readme.get\_range("A:A").format.column\_width = 25

s\_readme.get\_range("B:B").format.column\_width = 90

s\_readme.freeze\_panes.freeze\_rows(4)

# Scenarios

title\_block(s\_scen, "01 — P1.0 Scenario Registry",

"48 cenários oficiais. Texto canônico deliberadamente em branco onde a fonte literal ainda não foi recuperada.", "R")

scen\_headers = ["scenario\_order","scenario\_code","scored\_item\_codes","lens","scenario\_type","context",

"randomization\_policy","scored\_response\_count","required","score\_targets","facet\_signals",

"relation\_group","scenario\_text\_canonical","text\_source\_status","bank\_version",

"instrument\_version","status","implementation\_note"]

s\_scen.get\_range(f"A4:R{3+1+len(scenario\_rows)}").values = [scen\_headers] + scenario\_rows

header\_fmt(s\_scen.get\_range("A4:R4"))

s\_scen.freeze\_panes.freeze\_rows(4)

s\_scen.get\_range("A5:R52").format.wrap\_text = True

# widths

widths = [10,15,26,8,22,20,34,12,10,28,28,14,48,18,12,14,10,52]

for idx,w in enumerate(widths):

col = chr(65+idx) if idx < 26 else None

if col:

s\_scen.get\_range(f"{col}:{col}").format.column\_width = w

s\_scen.get\_range("N5:N52").conditional\_formats.add\_custom('=N5="SOURCE\_REQUIRED"', {"fill": red, "font": {"color":"#8B1E1E","bold":True}})

s\_scen.tables.add(f"A4:R{3+1+len(scenario\_rows)}", True, "P1ScenarioRegistry")

# Response schema

title\_block(s\_resp, "02 — P1.0 Scored Response Schema",

"56 respostas pontuáveis derivadas dos 48 cenários. Estrutura baseada na matriz operacional já existente.", "O")

resp\_headers = ["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable",

"score\_target","scoring\_rule","facet\_signal","relation\_group","notes","bank\_version","scoring\_version","status"]

s\_resp.get\_range(f"A4:O{3+1+len(response\_rows)}").values = [resp\_headers] + response\_rows

header\_fmt(s\_resp.get\_range("A4:O4"))

s\_resp.freeze\_panes.freeze\_rows(4)

s\_resp.get\_range(f"A5:O{4+len(response\_rows)}").format.wrap\_text = True

resp\_widths=[10,15,18,8,15,20,12,24,48,28,12,48,12,14,10]

for idx,w in enumerate(resp\_widths):

col=chr(65+idx)

s\_resp.get\_range(f"{col}:{col}").format.column\_width=w

s\_resp.tables.add(f"A4:O{3+1+len(response\_rows)}", True, "P1ResponseSchema")

# Options requirements

title\_block(s\_opt, "03 — Option & Rating Requirements",

"Estrutura esperada por cenário. option\_id e wording permanecem vazios até recuperação da fonte canônica.", "K")

opt\_headers = ["scenario\_order","scenario\_code","scenario\_type","semantic\_role\_or\_slot","canonical\_option\_id",

"option\_text\_canonical","raw\_points\_or\_scale","score\_target","presentation\_policy","source\_status","note"]

s\_opt.get\_range(f"A4:K{3+1+len(option\_rows)}").values = [opt\_headers] + option\_rows

header\_fmt(s\_opt.get\_range("A4:K4"))

s\_opt.freeze\_panes.freeze\_rows(4)

s\_opt.get\_range(f"A5:K{4+len(option\_rows)}").format.wrap\_text = True

opt\_widths=[10,15,22,20,22,50,18,24,28,18,52]

for idx,w in enumerate(opt\_widths):

col=chr(65+idx)

s\_opt.get\_range(f"{col}:{col}").format.column\_width=w

s\_opt.get\_range(f"J5:J{4+len(option\_rows)}").conditional\_formats.add\_custom('=J5="SOURCE\_REQUIRED"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_opt.tables.add(f"A4:K{3+1+len(option\_rows)}", True, "OptionRequirements")

# Relation groups

title\_block(s\_rg, "04 — Relation Group Registry",

"Pares de pesquisa. Não geram índice de sinceridade, mentira ou consistência percentual.", "F")

rg\_headers=["relation\_group","item\_a","item\_b","construct\_or\_theme\_code","theme","rule"]

s\_rg.get\_range("A4:F10").values=[rg\_headers]+relation\_rows

header\_fmt(s\_rg.get\_range("A4:F4"))

s\_rg.get\_range("A4:F10").format.wrap\_text=True

for col,w in zip(list("ABCDEF"),[14,14,14,28,28,55]):

s\_rg.get\_range(f"{col}:{col}").format.column\_width=w

s\_rg.freeze\_panes.freeze\_rows(4)

s\_rg.tables.add("A4:F10", True, "RelationGroupRegistry")

# Validation

title\_block(s\_val, "05 — Publication & Integrity Validation Rules",

"Regras que devem passar antes de o conteúdo P1.0 ser considerado publicável/implementável.", "E")

val\_headers=["validation\_id","rule","expected","verification","severity"]

s\_val.get\_range(f"A4:E{4+len(validation\_rows)}").values=[val\_headers]+validation\_rows

header\_fmt(s\_val.get\_range("A4:E4"))

s\_val.get\_range(f"A4:E{4+len(validation\_rows)}").format.wrap\_text=True

for col,w in zip(list("ABCDE"),[14,35,24,44,16]):

s\_val.get\_range(f"{col}:{col}").format.column\_width=w

s\_val.get\_range(f"E5:E{4+len(validation\_rows)}").conditional\_formats.add\_custom('=E5="BLOCKING"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_val.freeze\_panes.freeze\_rows(4)

s\_val.tables.add(f"A4:E{4+len(validation\_rows)}", True, "ValidationRules")

# Gaps

title\_block(s\_gap, "06 — Source Recovery Gaps",

"Pendências documentais que não podem ser preenchidas por inferência. Resolver antes da publicação final do BANK.", "E")

gap\_headers=["gap\_id","missing\_asset","priority","blocks","required\_action"]

s\_gap.get\_range(f"A4:E{4+len(gap\_rows)}").values=[gap\_headers]+gap\_rows

header\_fmt(s\_gap.get\_range("A4:E4"))

s\_gap.get\_range(f"A4:E{4+len(gap\_rows)}").format.wrap\_text=True

for col,w in zip(list("ABCDE"),[14,48,14,32,72]):

s\_gap.get\_range(f"{col}:{col}").format.column\_width=w

s\_gap.get\_range(f"C5:C{4+len(gap\_rows)}").conditional\_formats.add\_custom('=C5="CRITICAL"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_gap.get\_range(f"C5:C{4+len(gap\_rows)}").conditional\_formats.add\_custom('=C5="HIGH"', {"fill": amber, "font":{"color":"#7A5200","bold":True}})

s\_gap.freeze\_panes.freeze\_rows(4)

s\_gap.tables.add(f"A4:E{4+len(gap\_rows)}", True, "SourceGaps")

# Lists

title\_block(s\_lists, "07 — Controlled Values", "Listas de referência para consolidação do BANK-0.2.", "F")

lists = [

["category","value","description","","",""],

["lens","PC","Padrões Comportamentais","","",""],

["lens","PRC","Preferências de Representação e Comunicação","","",""],

["lens","DR","Dinâmica de Reação","","",""],

["scenario\_type","PC\_FORCED\_CHOICE","1 escolha entre 4 alternativas","","",""],

["scenario\_type","PRC\_FORCED\_CHOICE","1 escolha entre 3 alternativas","","",""],

["scenario\_type","PRC\_INDEPENDENT","3 ratings independentes 1–5","","",""],

["scenario\_type","DR\_ORDINAL","1 escolha entre 4 alternativas ordinais","","",""],

["source\_status","SOURCE\_REQUIRED","Texto/ID canônico ainda precisa ser recuperado","","",""],

["status","PILOT","Autorizado somente para piloto da versão","","",""],

]

s\_lists.get\_range("A4:F13").values=lists

header\_fmt(s\_lists.get\_range("A4:F4"))

s\_lists.get\_range("A4:F13").format.wrap\_text=True

s\_lists.get\_range("A:A").format.column\_width=22

s\_lists.get\_range("B:B").format.column\_width=28

s\_lists.get\_range("C:C").format.column\_width=60

# Overall formatting and row heights

for sh in [s\_readme,s\_scen,s\_resp,s\_opt,s\_rg,s\_val,s\_gap,s\_lists]:

sh.get\_range("A1:Z200").format.vertical\_alignment = "top"

# Verification formulas in README sidebar

s\_readme.get\_range("D4:H4").merge()

s\_readme.get\_range("D4").values=[["Integrity Snapshot"]]

s\_readme.get\_range("D4:H4").format={"fill":navy,"font":{"bold":True,"color":white},"horizontal\_alignment":"center"}

snap = [

["Metric","Expected","Current","Status","Note"],

["P1.0 scenarios",48,48,"PASS","Registry structural count"],

["Scored responses",56,56,"PASS","From 10\_SCORING\_MATRIX"],

["Relation groups",6,6,"PASS","RG-01..RG-06"],

["Exact scenario texts",48,0,"BLOCKED","Source recovery required"],

["Canonical option IDs","All",0,"BLOCKED","Source recovery required"],

]

s\_readme.get\_range("D5:H10").values=snap

header\_fmt(s\_readme.get\_range("D5:H5"))

s\_readme.get\_range("D5:H10").format.wrap\_text=True

for col,w in zip(list("DEFGH"),[24,14,14,16,38]):

s\_readme.get\_range(f"{col}:{col}").format.column\_width=w

s\_readme.get\_range("G6:G10").conditional\_formats.add\_custom('=G6="PASS"', {"fill":green,"font":{"color":"#1E6B3A","bold":True}})

s\_readme.get\_range("G6:G10").conditional\_formats.add\_custom('=G6="BLOCKED"', {"fill":red,"font":{"color":"#8B1E1E","bold":True}})

out = "/mnt/data/MGH\_ANX-003\_BANK-0.2\_P1.0\_Canonical\_Item\_Bank\_DRAFT\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

out

'/mnt/data/MGH\_ANX-003\_BANK-0.2\_P1.0\_Canonical\_Item\_Bank\_DRAFT\_v0.1.xlsx'

# Compact verification

for rng in ["00\_README!A1:H13","01\_P1\_SCENARIOS!A1:R12","02\_RESPONSE\_SCHEMA!A1:O12","06\_SOURCE\_GAPS!A1:E12"]:

print(rng)

print(wb.inspect({"kind":"table","range":rng,"include":"values,formulas","table\_max\_rows":20,"table\_max\_cols":20}).ndjson)

print()

print(wb.inspect({

"kind":"match",

"search\_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options":{"use\_regex":True,"max\_results":100},

"summary":"final formula error scan"

}).ndjson)

00\_README!A1:H13

{"kind":"table","sheet":"00\_README","address":"A1:H13","rows":13,"cols":8,"values":[["MGH™ — ANX-003 | BANK-0.2 Canonical Item Bank",null,null,null,null,null,null,null],["DRAFT DE CONSOLIDAÇÃO — subconjunto de implementação MGH-P1.0. Não publicar conteúdo até recuperar redações e option IDs canônicos.",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Campo","Valor",null,"Integrity Snapshot",null,null,null,null],["Anexo","ANX-003",null,"Metric","Expected","Current","Status","Note"],["Ativo metodológico","BANK-0.2",null,"P1.0 scenarios",48,48,"PASS","Registry structural count"],["Instrumento alvo","MGH-P1.0",null,"Scored responses",56,56,"PASS","From 10\_SCORING\_MATRIX"],["Master baseline","MGH-MASTER-P1.0-RC1",null,"Relation groups",6,6,"PASS","RG-01..RG-06"],["Document status","DRAFT — SOURCE RECOVERY REQUIRED",null,"Exact scenario texts",48,0,"BLOCKED","Source recovery required"],["Validation status","PILOT / NOT VALIDATED",null,"Canonical option IDs","All",0,"BLOCKED","Source recovery required"],["Scope desta planilha","48 cenários oficiais do P1.0 + 56 respostas pontuáveis + estrutura esperada de opções",null,null,null,null,null,null],["Limitação crítica","Os textos exatos dos cenários/opções e canonical option IDs não foram encontrados nos artefatos acessíveis nesta sessão.",null,null,null,null,null,null],["Regra","Não reconstruir, resumir ou inventar wording. Campos ausentes permanecem SOURCE\_REQUIRED.",null,null,null,null,null,null]]}

01\_P1\_SCENARIOS!A1:R12

{"kind":"table","sheet":"01\_P1\_SCENARIOS","address":"A1:R12","rows":12,"cols":18,"values":[["01 — P1.0 Scenario Registry",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["48 cenários oficiais. Texto canônico deliberadamente em branco onde a fonte literal ainda não foi recuperada.",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["scenario\_order","scenario\_code","scored\_item\_codes","lens","scenario\_type","context","randomization\_policy","scored\_response\_count","required","score\_targets","facet\_signals","relation\_group","scenario\_text\_canonical","text\_source\_status","bank\_version","instrument\_version","status","implementation\_note"],[1,"PC-001","PC-001","PC","PC\_FORCED\_CHOICE","DECISION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.D.DECISION\_SPEED","RG-02","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[2,"PRC-001","PRC-001","PRC","PRC\_FORCED\_CHOICE","COMMUNICATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PRC.V/A/C.FORCED","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[3,"TH-003","TH-003","DR","DR\_ORDINAL","EXTERNALIZATION","NO\_RANDOMIZATION",1,"YES","DR.EXTERNALIZATION","","RG-06","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[4,"PC-009R","PC-009R","PC","PC\_FORCED\_CHOICE","RELATIONSHIP","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.I.SOCIABILITY","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[5,"TH-001","TH-001","DR","DR\_ORDINAL","SPEED","NO\_RANDOMIZATION",1,"YES","DR.SPEED","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[6,"PC-021","PC-021","PC","PC\_FORCED\_CHOICE","DELEGATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.C.CRITERION","RG-04","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[7,"PRC-004R","PRC-004R-A; PRC-004R-C; PRC-004R-V","PRC","PRC\_INDEPENDENT","MULTI\_CONTEXT","V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED",3,"YES","PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[8,"PC-014","PC-014","PC","PC\_FORCED\_CHOICE","DELEGATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.S.PATIENCE","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."]]}

02\_RESPONSE\_SCHEMA!A1:O12

{"kind":"table","sheet":"02\_RESPONSE\_SCHEMA","address":"A1:O12","rows":12,"cols":15,"values":[["02 — P1.0 Scored Response Schema",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["56 respostas pontuáveis derivadas dos 48 cenários. Estrutura baseada na matriz operacional já existente.",null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable","score\_target","scoring\_rule","facet\_signal","relation\_group","notes","bank\_version","scoring\_version","status"],[1,"PC-001","PC-001","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.DECISION\_SPEED","RG-02","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[2,"PRC-001","PRC-001","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total","","","Relative preference only; not a percentage of personality.","BANK-0.2","SCORE-P1.0","PILOT"],[3,"TH-003","TH-003","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1","","RG-06","3 items per axis; normalize with ((sum-3)/9)\*100.","BANK-0.2","SCORE-P1.0","PILOT"],[4,"PC-009R","PC-009R","PC","CATEGORICAL","RELATIONSHIP","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.SOCIABILITY","","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[5,"TH-001","TH-001","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1","","","3 items per axis; normalize with ((sum-3)/9)\*100.","BANK-0.2","SCORE-P1.0","PILOT"],[6,"PC-021","PC-021","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[7,"PRC-004R","PRC-004R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality","","","Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed.","BANK-0.2","SCORE-P1.0","PILOT"],[7,"PRC-004R","PRC-004R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality","","","Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed.","BANK-0.2","SCORE-P1.0","PILOT"]]}

06\_SOURCE\_GAPS!A1:E12

{"kind":"table","sheet":"06\_SOURCE\_GAPS","address":"A1:E12","rows":12,"cols":5,"values":[["06 — Source Recovery Gaps",null,null,null,null],["Pendências documentais que não podem ser preenchidas por inferência. Resolver antes da publicação final do BANK.",null,null,null,null],[null,null,null,null,null],["gap\_id","missing\_asset","priority","blocks","required\_action"],["GAP-001","Exact scenario wording for all 48 P1.0 scenarios","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover exact previously authored wording from original MGH item-generation source; do not reconstruct."],["GAP-002","Exact response-option wording for PC / PRC Forced / DR","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover original alternatives verbatim; no paraphrasing."],["GAP-003","Canonical option IDs for every categorical/ordinal alternative","CRITICAL","BLOCKS\_IMPLEMENTATION\_FINALIZATION","Populate stable option IDs from original bank. Display position must remain separate."],["GAP-004","Full BANK-0.2 candidate universe (68 candidate groups/items)","HIGH","NON\_BLOCKING\_FOR\_P1\_SUBSET","Current accessible source reliably identifies the 48 P1.0 application scenarios, not all BANK-0.2 candidates."],["GAP-005","Exact PRC Independent statements and 1–5 scale labels","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover exact V/A/C statements and published rating labels."],["GAP-006","Canonical item\_text\_version per scenario/item","HIGH","BLOCKS\_RELEASE\_MANIFEST\_FINAL\_BINDING","Assign only after exact text source is recovered and frozen."],[null,null,null,null,null],[null,null,null,null,null]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

preview = wb.render({"sheet\_name":"00\_README","range":"A1:H13","scale":1.4})

preview.save("/mnt/data/MGH\_ANX003\_preview.png")

print("/mnt/data/MGH\_ANX003\_preview.png")

/mnt/data/MGH\_ANX003\_preview.png

Sim. Retomamos exatamente do ponto em que paramos na Fase 3.3.

ANX-003 — BANK-0.2 CANONICAL ITEM BANK

Eu já consolidei a estrutura técnica do banco em uma nova planilha:

Ela contém:

00\_README — controle, baseline, status e limitações

01\_P1\_SCENARIOS — os 48 cenários oficiais, na ordem congelada

02\_RESPONSE\_SCHEMA — as 56 respostas pontuáveis

03\_OPTION\_REQUIREMENTS — estrutura esperada de alternativas/ratings

04\_RELATION\_GROUPS — RG-01 a RG-06

05\_VALIDATION\_RULES — regras bloqueantes para publicação

06\_SOURCE\_GAPS — tudo que ainda precisa ser recuperado da fonte original

07\_LISTS — valores controlados

Também reaproveitei a nossa Base Operacional da Onda 0, principalmente a matriz de scoring, para consolidar contextos, facetas, Relation Groups, randomização, tipos de cenário e chaves DR.

Mas apareceu um ponto importante

O ANX-003 está correto estruturalmente, porém ainda está com status:

DRAFT — SOURCE RECOVERY REQUIRED

Eu procurei nos materiais acessíveis do projeto e na nossa base operacional, mas não encontrei a redação literal completa dos 48 cenários e de todas as alternativas que escrevemos originalmente.

E não vou reconstruí-las de memória, porque isso violaria uma regra que nós mesmos definimos:

o Banco Canônico não pode conter perguntas reconstruídas, resumidas ou “parecidas”. Precisa conter exatamente a versão metodológica aprovada.

Por isso, os campos de texto ficaram deliberadamente vazios e marcados:

SOURCE\_REQUIRED.

O arquivo também registra que o BANK-0.2 chegou a um universo candidato de 68 itens/grupos, enquanto a fonte operacional que temos acessível hoje nos permite identificar com segurança o subconjunto oficial dos 48 cenários do P1.0, não todo o universo candidato.

Isso trava o desenvolvedor?

Não trava a fundação técnica.

Ele continua podendo trabalhar em:

arquitetura, banco, migrations, Instrument Registry, Assessment Engine, Response/Event Engine, randomização, versionamento, RBAC, infraestrutura etc.

Mas ele não deve cadastrar como definitivos os textos e opções do instrumento até recebermos o conteúdo literal canônico.

Onde estamos agora

Na Fase 3.3:

ANX-001 — Release Manifest ✅

ANX-002 — Version Compatibility Matrix ✅

ANX-003 — BANK-0.2 🟡 estrutura concluída / conteúdo literal pendente

E podemos continuar imediatamente, sem esperar essa recuperação, porque os próximos dois anexos dependem principalmente de regras que já temos documentadas:

ANX-004 — MGH-P1.0 Application Sequence

Vai congelar tecnicamente os 48 cenários, ordem, tipos, contagem de respostas, randomização e Relation Groups.

Depois:

ANX-005 — SCORE-P1.0 Scoring Matrix

Esse será outro anexo crítico para o desenvolvedor, porque transformará o scoring em uma matriz implementável e testável.

Então nosso próximo movimento pode ser ANX-004, enquanto mantemos a recuperação dos textos literais do BANK como pendência crítica paralela.

from artifact\_tool import Workbook, SpreadsheetFile

# -----------------------------

# Create workbook

# -----------------------------

wb = Workbook.create()

# Palette

NAVY = "#17324D"

BLUE = "#2F5D8C"

LIGHT\_BLUE = "#EAF2F8"

TEAL = "#2B6F6D"

LIGHT\_TEAL = "#E8F3F2"

GOLD = "#C89B3C"

LIGHT\_GOLD = "#F8F1DF"

GRAY = "#5B6573"

LIGHT\_GRAY = "#F3F5F7"

WHITE = "#FFFFFF"

RED = "#A63D40"

LIGHT\_RED = "#FBEAEC"

GREEN = "#2E6B4F"

LIGHT\_GREEN = "#EAF4EE"

title\_fmt = {

"fill": NAVY,

"font": {"bold": True, "color": WHITE, "size": 16},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

section\_fmt = {

"fill": BLUE,

"font": {"bold": True, "color": WHITE, "size": 11},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

header\_fmt = {

"fill": TEAL,

"font": {"bold": True, "color": WHITE},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

}

subtle\_header\_fmt = {

"fill": LIGHT\_BLUE,

"font": {"bold": True, "color": NAVY},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

note\_fmt = {

"fill": LIGHT\_GOLD,

"font": {"color": "#6B531C"},

"wrap\_text": True,

"vertical\_alignment": "top",

}

body\_wrap = {"wrap\_text": True, "vertical\_alignment": "top"}

# -----------------------------

# Core data

# -----------------------------

order = [

"PC-001","PRC-001","TH-003","PC-009R","TH-001","PC-021","PRC-004R","PC-014",

"PC-007","PRC-003","TH-010","PC-035","TH-006","PC-018","PRC-012","PC-019",

"PC-016","PRC-005","TH-012","PC-010","TH-004R","PC-028","PRC-011","PC-012",

"PC-002","PRC-006R","TH-007","PC-020R","TH-002","PC-023","PRC-002","PC-033",

"PC-027","PRC-014I","TH-013","PC-036","TH-008R","PC-015","PRC-009","PC-008",

"PC-017","PRC-010I","TH-015","PC-029","TH-009R","PC-005","PRC-015","PC-011R"

]

prc\_forced = {"PRC-001","PRC-002","PRC-003","PRC-005","PRC-009","PRC-011","PRC-012","PRC-015"}

prc\_independent = {"PRC-004R","PRC-006R","PRC-010I","PRC-014I"}

relation\_map = {

"PC-007":"RG-01","PC-027":"RG-01",

"PC-001":"RG-02","PC-023":"RG-02",

"PC-016":"RG-03","PC-033":"RG-03",

"PC-021":"RG-04","PC-028":"RG-04",

"TH-002":"RG-05","TH-015":"RG-05",

"TH-003":"RG-06","TH-012":"RG-06",

}

relation\_rows = [

["RG-01","PC-007","PC-027","Autonomia","Pesquisa relacional; não gera índice de sinceridade ou consistência."],

["RG-02","PC-001","PC-023","Decisão sob incerteza","Pesquisa relacional; não altera score principal."],

["RG-03","PC-016","PC-033","Constância","Pesquisa relacional; divergência não penaliza score."],

["RG-04","PC-021","PC-028","Critério / ambiguidade","Pesquisa relacional; análise posterior."],

["RG-05","TH-002","TH-015","Persistência pós-conflito","Pesquisa relacional DR; sem consistency %."],

["RG-06","TH-003","TH-012","Externalização em contexto negativo","Pesquisa relacional DR; sem lie/honesty score."],

]

def classify(code):

if code.startswith("PC-"):

return ("PC", "PC\_FORCED\_CHOICE", 1, "YES — option order", "4 opções; escolha única")

if code in prc\_forced:

return ("PRC", "PRC\_FORCED\_CHOICE", 1, "YES — option order", "3 opções; escolha única")

if code in prc\_independent:

return ("PRC", "PRC\_INDEPENDENT", 3, "YES — V/A/C block order only", "3 ratings independentes 1–5; direção da escala fixa")

if code.startswith("TH-"):

return ("DR", "DR\_ORDINAL", 1, "NO", "4 alternativas ordinais; ordem fixa")

raise ValueError(code)

sequence\_rows = []

for idx, code in enumerate(order, start=1):

lens, stype, scored\_resp, rand, behavior = classify(code)

sequence\_rows.append([

idx, code, lens, stype, scored\_resp, 1, "YES", rand,

relation\_map.get(code, ""), behavior,

"LOCKED", "MGH-P1.0", "BANK-0.2", "PILOT"

])

# -----------------------------

# 00\_README

# -----------------------------

s = wb.worksheets.add("00\_README")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["MGH™ — ANX-004 | MGH-P1.0 Application Sequence"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A1:H1").format.row\_height = 28

metadata = [

["Campo","Valor"],

["Código do anexo","MGH-ANX-004"],

["Título","MGH-P1.0 Application Sequence"],

["Versão documental","0.1"],

["Instrumento","MGH-P1.0"],

["Banco relacionado","BANK-0.2"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Status","FROZEN FOR PHASE A — PILOT"],

["Finalidade","Fonte canônica da ordem de apresentação e do comportamento estrutural dos 48 cenários do P1.0."],

]

s.get\_range("A3:B11").values = metadata

s.get\_range("A3:B3").format = header\_fmt

s.get\_range("A4:A11").format = subtle\_header\_fmt

s.get\_range("B4:B11").format = body\_wrap

s.merge\_cells("A13:H13")

s.get\_range("A13").values = [["REGRAS-CHAVE"]]

s.get\_range("A13:H13").format = section\_fmt

rules = [

["Regra","Definição"],

["Ordem dos cenários","Fixa. Os 48 cenários não são randomizados entre si."],

["Progresso","Calculado por cenários concluídos: x de 48. Não por 56 respostas pontuáveis."],

["PC","Alternativas podem randomizar; scoring usa option\_id canônico, nunca posição visual."],

["PRC Forced","Alternativas podem randomizar; scoring usa modalidade canônica V/A/C."],

["PRC Independent","A ordem dos blocos V/A/C pode randomizar; escala 1→5 mantém direção fixa."],

["DR","Alternativas não randomizam. Qualquer configuração randomizable=true deve falhar na validação."],

["Resume","A ordem de apresentação já sorteada deve permanecer idêntica após retomada."],

["Relation Groups","São invisíveis ao participante e não geram lie score, honesty score ou consistency %."],

["SELF","Ocorre somente depois dos 48 cenários; não entra no score principal."],

]

s.get\_range("A14:B23").values = rules

s.get\_range("A14:B14").format = header\_fmt

s.get\_range("A15:A23").format = subtle\_header\_fmt

s.get\_range("B15:B23").format = body\_wrap

s.merge\_cells("A25:H25")

s.get\_range("A25").values = [["NOTA DE CONTROLE"]]

s.get\_range("A25:H25").format = section\_fmt

s.merge\_cells("A26:H29")

s.get\_range("A26").values = [[

"Este anexo define a sequência e o comportamento de apresentação. Ele NÃO substitui o BANK-0.2, "

"que contém a redação canônica dos itens/opções, nem o SCORE-P1.0, que define o cálculo. "

"Se houver conflito entre este anexo e outro artefato canônico, a implementação deve ser bloqueada "

"até resolução formal do conflito."

]]

s.get\_range("A26:H29").format = note\_fmt

s.get\_range("A1:H29").format.wrap\_text = True

s.get\_range("A1:A29").format.column\_width = 24

s.get\_range("B1:B29").format.column\_width = 52

for col in ["C","D","E","F","G","H"]:

s.get\_range(f"{col}1:{col}29").format.column\_width = 12

# -----------------------------

# 01\_APPLICATION\_SEQUENCE

# -----------------------------

s = wb.worksheets.add("01\_APPLICATION\_SEQUENCE")

s.merge\_cells("A1:N1")

s.get\_range("A1").values = [["MGH-P1.0 — Sequência Oficial dos 48 Cenários"]]

s.get\_range("A1:N1").format = title\_fmt

s.get\_range("A1:N1").format.row\_height = 28

headers = [

"Seq.","Item Code","Lens","Scenario Type","Scored Responses",

"Progress Increment","Required","Randomization Policy","Relation Group",

"Presentation Behavior","Sequence Status","Instrument Version","Bank Version","Method Status"

]

s.get\_range("A3:N3").values = [headers]

s.get\_range("A3:N3").format = header\_fmt

s.get\_range(f"A4:N{3+len(sequence\_rows)}").values = sequence\_rows

s.get\_range(f"A4:N{3+len(sequence\_rows)}").format = body\_wrap

# Conditional fills by lens

for row in range(4, 52):

lens = sequence\_rows[row-4][2]

fill = LIGHT\_BLUE if lens == "PC" else LIGHT\_TEAL if lens == "PRC" else LIGHT\_GOLD

s.get\_range(f"C{row}:D{row}").format.fill = fill

# Highlight relation groups

for row in range(4, 52):

if sequence\_rows[row-4][8]:

s.get\_range(f"I{row}").format.fill = LIGHT\_RED

s.get\_range(f"I{row}").format.font = {"bold": True, "color": RED}

s.freeze\_panes.freeze\_rows(3)

s.freeze\_panes.freeze\_columns(2)

widths = {

"A":8,"B":13,"C":8,"D":24,"E":16,"F":17,"G":10,"H":28,

"I":14,"J":38,"K":15,"L":16,"M":14,"N":14

}

for col, width in widths.items():

s.get\_range(f"{col}1:{col}60").format.column\_width = width

# -----------------------------

# 02\_TYPE\_RULES

# -----------------------------

s = wb.worksheets.add("02\_TYPE\_RULES")

s.merge\_cells("A1:J1")

s.get\_range("A1").values = [["Regras de Comportamento por Tipo de Cenário"]]

s.get\_range("A1:J1").format = title\_fmt

type\_headers = [

"Scenario Type","Lens","Qty Scenarios","Responses/Scenario","Total Scored Responses",

"Selection Mode","Option/Block Randomization","Scale Direction","Frontend Exposure","Critical Rule"

]

type\_rows = [

["PC\_FORCED\_CHOICE","PC",24,1,24,"Escolha única entre 4 opções",

"SIM — ordem das opções","N/A","Não expor D/I/S/C, facet\_signal ou score\_target",

"Score por canonical option\_id; posição visual não pontua."],

["PRC\_FORCED\_CHOICE","PRC",8,1,8,"Escolha única entre 3 opções",

"SIM — ordem das opções","N/A","Não expor V/A/C como rótulo metodológico",

"Forced permanece separado do PRC Independent."],

["PRC\_INDEPENDENT","PRC",4,3,12,"3 ratings independentes por cenário",

"SIM — ordem dos blocos V/A/C","FIXA 1→5","Não expor modalidade metodológica quando desnecessário",

"5/5/5 é resposta válida; não converter para 33/33/33."],

["DR\_ORDINAL","DR",12,1,12,"Escolha única entre 4 alternativas ordinais",

"NÃO","ORDEM PUBLICADA FIXA","Não expor eixo ou chave de pontuação",

"randomizable=true é erro bloqueante de configuração."],

]

s.get\_range("A3:J3").values = [type\_headers]

s.get\_range("A3:J3").format = header\_fmt

s.get\_range("A4:J7").values = type\_rows

s.get\_range("A4:J7").format = body\_wrap

s.merge\_cells("A9:J9")

s.get\_range("A9").values = [["CONTAGEM DE INTEGRIDADE"]]

s.get\_range("A9:J9").format = section\_fmt

count\_rows = [

["Métrica","Esperado"],

["Cenários principais",48],

["Respostas pontuáveis",56],

["PC Forced",24],

["PRC Forced",8],

["PRC Independent groups",4],

["PRC Independent ratings",12],

["DR",12],

["SELF pós-instrumento",8],

["Relation Groups",6],

]

s.get\_range("A10:B19").values = count\_rows

s.get\_range("A10:B10").format = header\_fmt

s.get\_range("A11:A19").format = subtle\_header\_fmt

for col, width in {"A":24,"B":12,"C":14,"D":18,"E":22,"F":28,"G":28,"H":20,"I":36,"J":44}.items():

s.get\_range(f"{col}1:{col}25").format.column\_width = width

s.get\_range("A1:J25").format.wrap\_text = True

# -----------------------------

# 03\_RELATION\_GROUPS

# -----------------------------

s = wb.worksheets.add("03\_RELATION\_GROUPS")

s.merge\_cells("A1:E1")

s.get\_range("A1").values = [["MGH-P1.0 — Relation Groups"]]

s.get\_range("A1:E1").format = title\_fmt

s.get\_range("A3:E3").values = [["Group ID","Item A","Item B","Tema","Regra de Uso"]]

s.get\_range("A3:E3").format = header\_fmt

s.get\_range("A4:E9").values = relation\_rows

s.get\_range("A4:E9").format = body\_wrap

s.merge\_cells("A11:E11")

s.get\_range("A11").values = [["RESTRIÇÕES"]]

s.get\_range("A11:E11").format = section\_fmt

restrictions = [

["Os Relation Groups são invisíveis ao participante."],

["Não aproximar intencionalmente os pares na sequência."],

["Não gerar honesty score, lie score ou consistency percentage."],

["Divergência entre pares não reduz automaticamente o score principal."],

["Análise pertence à Research/Evidence Layer, não ao Participant App."],

]

s.get\_range("A12:E16").merge()

# Write each restriction across merged row blocks one row at a time

s.unmerge\_cells("A12:E16")

for i, txt in enumerate(restrictions, start=12):

s.merge\_cells(f"A{i}:E{i}")

s.get\_range(f"A{i}").values = [[txt[0]]]

s.get\_range(f"A{i}:E{i}").format = note\_fmt

for col, width in {"A":14,"B":14,"C":14,"D":28,"E":52}.items():

s.get\_range(f"{col}1:{col}20").format.column\_width = width

# -----------------------------

# 04\_POST\_FLOW

# -----------------------------

s = wb.worksheets.add("04\_POST\_FLOW")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["Fluxo Pós-Cenário 48"]]

s.get\_range("A1:G1").format = title\_fmt

post\_headers = ["Order","Component","Code/Range","Count","Required","Scores Main Instrument?","Rule"]

post\_rows = [

[1,"SELF","SELF-01…SELF-08",8,"YES","NO","Aplicados somente após os 48 cenários; escala 1–5; usados em pesquisa."],

[2,"Post-test Feedback","FEEDBACK-P1.0","Conjunto versionado","YES","NO","Dificuldade, alternativa inadequada, confusão e desejabilidade; não é detector de mentira."],

[3,"Final Review","SYSTEM","1","YES","NO","Pode indicar pendências; não revelar padrão de respostas ou interpretação."],

[4,"Final Submit","SYSTEM","1","YES","NO","Valida completude e bloqueia alterações posteriores."],

[5,"Completion","SYSTEM","1","YES","NO","O0 não exibe resultado automático ao participante."],

]

s.get\_range("A3:G3").values = [post\_headers]

s.get\_range("A3:G3").format = header\_fmt

s.get\_range("A4:G8").values = post\_rows

s.get\_range("A4:G8").format = body\_wrap

s.merge\_cells("A10:G10")

s.get\_range("A10").values = [["SELF — REFERÊNCIAS DE PESQUISA (NÃO SUBSTITUEM O TEXTO CANÔNICO)"]]

s.get\_range("A10:G10").format = section\_fmt

self\_rows = [

["SELF-01","Decidir apesar de informação incompleta"],

["SELF-02","Espaço para definir execução"],

["SELF-03","Importância de critérios claros"],

["SELF-04","Perceptibilidade externa de impacto"],

["SELF-05","Permanência de situações difíceis"],

["SELF-06","Organização visual ajuda a compreender"],

["SELF-07","Conversa ajuda a organizar entendimento"],

["SELF-08","Aplicação concreta ajuda a compreender"],

]

s.get\_range("A11:B18").values = self\_rows

s.get\_range("A11:A18").format = subtle\_header\_fmt

s.get\_range("B11:B18").format = body\_wrap

for col, width in {"A":12,"B":26,"C":22,"D":18,"E":12,"F":22,"G":60}.items():

s.get\_range(f"{col}1:{col}24").format.column\_width = width

s.get\_range("A1:G24").format.wrap\_text = True

# -----------------------------

# 05\_VALIDATION\_RULES

# -----------------------------

s = wb.worksheets.add("05\_VALIDATION\_RULES")

s.merge\_cells("A1:F1")

s.get\_range("A1").values = [["Application Sequence — Validation Rules"]]

s.get\_range("A1:F1").format = title\_fmt

val\_headers = ["Rule ID","Validation","Expected","Failure Behavior","Severity","Notes"]

val\_rows = [

["APPSEQ-001","Total de cenários","48","BLOCK PUBLICATION","BLOCKING","Nenhum cenário faltante ou extra."],

["APPSEQ-002","Seq. inicial","PC-001","BLOCK PUBLICATION","BLOCKING","Scenario 1 congelado."],

["APPSEQ-003","Seq. final","PC-011R","BLOCK PUBLICATION","BLOCKING","Scenario 48 congelado."],

["APPSEQ-004","PC count","24","BLOCK PUBLICATION","BLOCKING","Todos PC forced-choice."],

["APPSEQ-005","PRC Forced count","8","BLOCK PUBLICATION","BLOCKING","Conjunto oficial P1.0."],

["APPSEQ-006","PRC Independent groups","4","BLOCK PUBLICATION","BLOCKING","Cada grupo gera 3 respostas."],

["APPSEQ-007","DR count","12","BLOCK PUBLICATION","BLOCKING","IDs legados TH preservados."],

["APPSEQ-008","Scored responses total","56","BLOCK PUBLICATION","BLOCKING","24+8+12+12."],

["APPSEQ-009","DR randomization","FALSE","INSTRUMENT\_CONFIGURATION\_ERROR","BLOCKING","Qualquer DR randomizável deve falhar."],

["APPSEQ-010","Scenario order randomization","FALSE","INSTRUMENT\_CONFIGURATION\_ERROR","BLOCKING","Ordem 1–48 fixa."],

["APPSEQ-011","Resume presentation stability","TRUE","BLOCK PILOT RELEASE","CRITICAL\_PILOT","Ordem já apresentada deve persistir."],

["APPSEQ-012","SELF before scenario 48","FALSE","BLOCK PILOT RELEASE","BLOCKING","SELF só após os 48 cenários."],

["APPSEQ-013","Relation Groups visible to participant","FALSE","BLOCK PILOT RELEASE","BLOCKING","Metadado interno."],

["APPSEQ-014","Score target exposed to frontend","FALSE","SECURITY FAIL","BLOCKING","Não expor D/I/S/C, V/A/C, DR axis ou facet\_signal desnecessariamente."],

]

s.get\_range("A3:F3").values = [val\_headers]

s.get\_range("A3:F3").format = header\_fmt

s.get\_range("A4:F17").values = val\_rows

s.get\_range("A4:F17").format = body\_wrap

# Severity styling

for row in range(4, 18):

sev = val\_rows[row-4][4]

if sev == "BLOCKING":

s.get\_range(f"E{row}").format.fill = LIGHT\_RED

s.get\_range(f"E{row}").format.font = {"bold": True, "color": RED}

else:

s.get\_range(f"E{row}").format.fill = LIGHT\_GOLD

s.get\_range(f"E{row}").format.font = {"bold": True, "color": "#7A5A16"}

for col, width in {"A":16,"B":34,"C":18,"D":30,"E":18,"F":52}.items():

s.get\_range(f"{col}1:{col}22").format.column\_width = width

# -----------------------------

# 06\_CHANGE\_CONTROL

# -----------------------------

s = wb.worksheets.add("06\_CHANGE\_CONTROL")

s.merge\_cells("A1:F1")

s.get\_range("A1").values = [["Controle de Mudanças — ANX-004"]]

s.get\_range("A1:F1").format = title\_fmt

cc\_headers = ["Change Type","Example","Instrument Version Impact","Requires Change Request?","Golden Impact","Rule"]

cc\_rows = [

["UI-only","Espaçamento, tipografia, contraste","NO","NO, se sem efeito semântico","NO","Pode mudar App Version sem mudar MGH-P1.0."],

["Option presentation UI","Card vs radio button, sem mudar conteúdo","NO","REVIEW","POSSIBLE","Não alterar equivalência visual ou induzir resposta."],

["Scenario order","Trocar posição de qualquer cenário","YES","YES","YES","Nova versão do instrumento."],

["Randomization policy","Passar DR para randomizable=true","YES / PROHIBITED IN P1.0","YES","YES","P1.0 bloqueia esta mudança."],

["Requiredness","Permitir pular cenário antes obrigatório","YES","YES","YES","Mudança metodológica."],

["Scenario type","Forced → Independent","YES","YES","YES","Outro instrumento/versão."],

["SELF placement","Mover SELF antes do cenário 48","YES / PROHIBITED IN P1.0","YES","YES","Contamina fluxo e pesquisa."],

]

s.get\_range("A3:F3").values = [cc\_headers]

s.get\_range("A3:F3").format = header\_fmt

s.get\_range("A4:F10").values = cc\_rows

s.get\_range("A4:F10").format = body\_wrap

for col, width in {"A":24,"B":38,"C":26,"D":26,"E":18,"F":48}.items():

s.get\_range(f"{col}1:{col}15").format.column\_width = width

# -----------------------------

# Global styling / tables

# -----------------------------

for sheet\_name in [

"00\_README","01\_APPLICATION\_SEQUENCE","02\_TYPE\_RULES",

"03\_RELATION\_GROUPS","04\_POST\_FLOW","05\_VALIDATION\_RULES","06\_CHANGE\_CONTROL"

]:

sh = wb.worksheets.get\_item(sheet\_name)

# General row heights

sh.get\_range("A1:Z200").format.vertical\_alignment = "top"

# Add table to main sequence

seq\_sheet = wb.worksheets.get\_item("01\_APPLICATION\_SEQUENCE")

seq\_sheet.tables.add("A3:N51", True, "ApplicationSequenceTable")

# Add tables to compact sheets

wb.worksheets.get\_item("03\_RELATION\_GROUPS").tables.add("A3:E9", True, "RelationGroupsTable")

wb.worksheets.get\_item("05\_VALIDATION\_RULES").tables.add("A3:F17", True, "ApplicationValidationRulesTable")

# -----------------------------

# Verification

# -----------------------------

check = wb.inspect({

"kind": "table",

"range": "01\_APPLICATION\_SEQUENCE!A1:N12",

"include": "values,formulas",

"table\_max\_rows": 12,

"table\_max\_cols": 14,

})

print(check.ndjson)

errors = wb.inspect({

"kind": "match",

"search\_term": "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options": {"use\_regex": True, "max\_results": 100},

"summary": "final formula error scan",

})

print(errors.ndjson)

# Export

out = "/mnt/data/MGH\_ANX-004\_MGH-P1.0\_Application\_Sequence\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

print(out)

{"kind":"table","sheet":"01\_APPLICATION\_SEQUENCE","address":"A1:N12","rows":12,"cols":14,"values":[["MGH-P1.0 — Sequência Oficial dos 48 Cenários",null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null],["Seq.","Item Code","Lens","Scenario Type","Scored Responses","Progress Increment","Required","Randomization Policy","Relation Group","Presentation Behavior","Sequence Status","Instrument Version","Bank Version","Method Status"],[1,"PC-001","PC","PC\_FORCED\_CHOICE",1,1,"YES","YES — option order","RG-02","4 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[2,"PRC-001","PRC","PRC\_FORCED\_CHOICE",1,1,"YES","YES — option order","","3 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[3,"TH-003","DR","DR\_ORDINAL",1,1,"YES","NO","RG-06","4 alternativas ordinais; ordem fixa","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[4,"PC-009R","PC","PC\_FORCED\_CHOICE",1,1,"YES","YES — option order","","4 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[5,"TH-001","DR","DR\_ORDINAL",1,1,"YES","NO","","4 alternativas ordinais; ordem fixa","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[6,"PC-021","PC","PC\_FORCED\_CHOICE",1,1,"YES","YES — option order","RG-04","4 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[7,"PRC-004R","PRC","PRC\_INDEPENDENT",3,1,"YES","YES — V/A/C block order only","","3 ratings independentes 1–5; direção da escala fixa","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[8,"PC-014","PC","PC\_FORCED\_CHOICE",1,1,"YES","YES — option order","","4 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"],[9,"PC-007","PC","PC\_FORCED\_CHOICE",1,1,"YES","YES — option order","RG-01","4 opções; escolha única","LOCKED","MGH-P1.0","BANK-0.2","PILOT"]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

/mnt/data/MGH\_ANX-004\_MGH-P1.0\_Application\_Sequence\_v0.1.xlsx

Continuamos exatamente de onde paramos e concluí agora o próximo anexo canônico:

ANX-004 — MGH-P1.0 Application Sequence ✅

O arquivo já deixa congelado, em formato técnico para o desenvolvedor:

a ordem oficial dos 48 cenários;

tipo de cada cenário;

quantidade de respostas pontuáveis por cenário;

política de randomização;

Relation Groups;

progressão x de 48;

regras de resume;

fluxo pós-cenário 48 com SELF e feedback;

validações bloqueantes;

regras de mudança de versão.

Também incluí regras claras como:

DR não randomiza.

A ordem 1–48 é fixa.

PRC Independent gera 3 respostas por cenário.

SELF só aparece depois do cenário 48.

Relation Groups não ficam visíveis ao participante.

score targets não devem ser expostos no frontend.

Situação da Fase 3.3 agora

ANX-001 — Release Manifest ✅

ANX-002 — Version Compatibility Matrix ✅

ANX-003 — BANK-0.2 Canonical Item Bank 🟡 estrutura pronta, textos literais ainda pendentes de recuperação

ANX-004 — Application Sequence ✅

O próximo é um dos mais importantes para o desenvolvedor:

ANX-005 — SCORE-P1.0 Scoring Matrix

Nele vamos transformar o scoring em uma matriz diretamente implementável, com:

PC D/I/S/C,

PRC Forced,

PRC Independent,

DR,

pontos por alternativa,

facetas,

oportunidades,

normalizações,

regras de integridade,

e ligação com os Golden Cases.

Esse será provavelmente o anexo mais importante depois do BANK para o programador implementar o Score Engine corretamente.

from artifact\_tool import Workbook, SpreadsheetFile

# ============================================================

# MGH ANX-005 — SCORE-P1.0 Scoring Matrix

# ============================================================

wb = Workbook.create()

# -----------------------------

# Palette / styles

# -----------------------------

NAVY = "#17324D"

BLUE = "#2F5D8C"

TEAL = "#2B6F6D"

GOLD = "#C89B3C"

RED = "#A63D40"

GREEN = "#2E6B4F"

WHITE = "#FFFFFF"

LIGHT\_BLUE = "#EAF2F8"

LIGHT\_TEAL = "#E8F3F2"

LIGHT\_GOLD = "#F8F1DF"

LIGHT\_RED = "#FBEAEC"

LIGHT\_GREEN = "#EAF4EE"

LIGHT\_GRAY = "#F3F5F7"

GRAY = "#5B6573"

title\_fmt = {

"fill": NAVY,

"font": {"bold": True, "color": WHITE, "size": 16},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

section\_fmt = {

"fill": BLUE,

"font": {"bold": True, "color": WHITE, "size": 11},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

header\_fmt = {

"fill": TEAL,

"font": {"bold": True, "color": WHITE},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

}

subtle\_header\_fmt = {

"fill": LIGHT\_BLUE,

"font": {"bold": True, "color": NAVY},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

note\_fmt = {

"fill": LIGHT\_GOLD,

"font": {"color": "#6B531C"},

"wrap\_text": True,

"vertical\_alignment": "top",

}

body\_wrap = {"wrap\_text": True, "vertical\_alignment": "top"}

# -----------------------------

# Canonical item sets

# -----------------------------

pc\_items = [

"PC-001","PC-002","PC-005","PC-007","PC-008","PC-009R","PC-010","PC-011R",

"PC-012","PC-014","PC-015","PC-016","PC-017","PC-018","PC-019","PC-020R",

"PC-021","PC-023","PC-027","PC-028","PC-029","PC-033","PC-035","PC-036"

]

prc\_forced = ["PRC-001","PRC-002","PRC-003","PRC-005","PRC-009","PRC-011","PRC-012","PRC-015"]

prc\_independent = ["PRC-004R","PRC-006R","PRC-010I","PRC-014I"]

dr\_items = [

("TH-001","SPEED","A=4; B=3; C=2; D=1"),

("TH-006","SPEED","A=4; B=3; C=2; D=1"),

("TH-007","SPEED","A=4; B=3; C=2; D=1"),

("TH-004R","IMPACT","A=4; B=3; C=2; D=1"),

("TH-008R","IMPACT","A=4; B=3; C=2; D=1"),

("TH-009R","IMPACT","A=4; B=3; C=2; D=1"),

("TH-002","PERSISTENCE","A=1; B=2; C=3; D=4"),

("TH-010","PERSISTENCE","A=1; B=2; C=3; D=4"),

("TH-015","PERSISTENCE","A=1; B=2; C=3; D=4"),

("TH-003","EXTERNALIZATION","A=4; B=3; C=2; D=1"),

("TH-012","EXTERNALIZATION","A=4; B=3; C=2; D=1"),

("TH-013","EXTERNALIZATION","A=4; B=3; C=2; D=1"),

]

known\_pc\_facets = {

"PC-007": ("D","Autonomia"),

"PC-027": ("D","Autonomia"),

"PC-021": ("C","Critério"),

"PC-028": ("C","Critério"),

"PC-035": ("I","Expressividade"),

"PC-036": ("C","Qualidade"),

}

relation\_groups = [

["RG-01","PC-007","PC-027","Autonomia"],

["RG-02","PC-001","PC-023","Decisão sob incerteza"],

["RG-03","PC-016","PC-033","Constância"],

["RG-04","PC-021","PC-028","Critério / ambiguidade"],

["RG-05","TH-002","TH-015","Persistência pós-conflito"],

["RG-06","TH-003","TH-012","Externalização em contexto negativo"],

]

# ============================================================

# 00\_README

# ============================================================

s = wb.worksheets.add("00\_README")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["MGH™ — ANX-005 | SCORE-P1.0 Scoring Matrix"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A1:H1").format.row\_height = 28

meta = [

["Campo","Valor"],

["Código do anexo","MGH-ANX-005"],

["Título","SCORE-P1.0 Scoring Matrix"],

["Versão documental","0.1"],

["Scoring version","SCORE-P1.0"],

["Instrumento compatível","MGH-P1.0"],

["Banco relacionado","BANK-0.2"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Status","PILOT BASELINE — IMPLEMENTATION SPEC"],

["Finalidade","Fonte estruturada das regras determinísticas do Score Engine P1.0."],

]

s.get\_range("A3:B12").values = meta

s.get\_range("A3:B3").format = header\_fmt

s.get\_range("A4:A12").format = subtle\_header\_fmt

s.get\_range("B4:B12").format = body\_wrap

s.merge\_cells("A14:H14")

s.get\_range("A14").values = [["PRINCÍPIOS DE IMPLEMENTAÇÃO"]]

s.get\_range("A14:H14").format = section\_fmt

principles = [

["1","Score Engine é determinístico, versionado e não utiliza IA."],

["2","O frontend nunca decide score por posição visual; usa option\_id canônico."],

["3","RAW é imutável. Novo algoritmo gera novo SCORING\_RUN, nunca sobrescreve o anterior."],

["4","PC, PRC Forced, PRC Independent e DR são calculados separadamente."],

["5","SELF, feedback e Relation Groups não entram no score principal."],

["6","Facetas PC só são calculadas quando houver facet\_signal canônico; não são reportáveis no P1.0."],

["7","Sem normas/percentis/T-scores no P1.0."],

["8","Sem DR Total, Resilience Score, Honest Score ou Consistency %."],

]

s.get\_range("A15:B22").values = principles

s.get\_range("A15:A22").format = subtle\_header\_fmt

s.get\_range("B15:B22").format = body\_wrap

s.merge\_cells("A24:H24")

s.get\_range("A24").values = [["DEPENDÊNCIA CRÍTICA DO BANK-0.2"]]

s.get\_range("A24:H24").format = section\_fmt

s.merge\_cells("A25:H28")

s.get\_range("A25").values = [[

"As regras matemáticas abaixo estão congeladas para SCORE-P1.0. Entretanto, o mapping literal "

"option\_id → D/I/S/C ou option\_id → V/A/C depende do BANK-0.2 canônico. Enquanto os option\_ids "

"e textos literais ainda estiverem em recuperação, o desenvolvedor NÃO deve inferir mappings a partir "

"da posição A/B/C/D exibida ao participante."

]]

s.get\_range("A25:H28").format = note\_fmt

s.get\_range("A1:H30").format.wrap\_text = True

s.get\_range("A1:A30").format.column\_width = 24

s.get\_range("B1:B30").format.column\_width = 68

for col in ["C","D","E","F","G","H"]:

s.get\_range(f"{col}1:{col}30").format.column\_width = 12

# ============================================================

# 01\_SCORE\_OVERVIEW

# ============================================================

s = wb.worksheets.add("01\_SCORE\_OVERVIEW")

s.merge\_cells("A1:J1")

s.get\_range("A1").values = [["SCORE-P1.0 — Visão Geral"]]

s.get\_range("A1:J1").format = title\_fmt

headers = ["Lens","Mode","Scenarios","Scored Responses","Raw Range","Primary Outputs","Normalization","Reportable P1.0?","AI?","Notes"]

rows = [

["PC","Forced-choice",24,24,"0–24 por dimensão","D/I/S/C raw, freq., ranking, gaps, entropy","freq = raw/24","Main dimensions: YES","NO","Empates explícitos; sem desempate arbitrário."],

["PRC","Forced-choice",8,8,"0–8 por modalidade","V/A/C raw + relative choices","freq = raw/8","YES, com linguagem de preferência","NO","Não chamar de % de identidade."],

["PRC","Independent",4,12,"mean 1–5 por modalidade","V/A/C mean + normalized 0–100","((mean-1)/4)\*100","YES, separado do Forced","NO","Não converter 5/5/5 em 33/33/33."],

["DR","Ordinal",12,12,"3–12 por eixo","Speed/Impact/Persistence/Externalization","((raw-3)/9)\*100","YES por eixo","NO","Alto/baixo não significa bom/ruim."],

]

s.get\_range("A3:J3").values = [headers]

s.get\_range("A3:J3").format = header\_fmt

s.get\_range("A4:J7").values = rows

s.get\_range("A4:J7").format = body\_wrap

s.merge\_cells("A9:J9")

s.get\_range("A9").values = [["TOTAL DE ENTRADAS DO SCORE ENGINE"]]

s.get\_range("A9:J9").format = section\_fmt

counts = [

["Componente","Contagem"],

["PC",24],

["PRC Forced",8],

["PRC Independent ratings",12],

["DR",12],

["TOTAL SCORE RESPONSES",56],

]

s.get\_range("A10:B15").values = counts

s.get\_range("A10:B10").format = header\_fmt

s.get\_range("A11:A15").format = subtle\_header\_fmt

for col, width in {"A":16,"B":18,"C":12,"D":18,"E":18,"F":34,"G":24,"H":22,"I":10,"J":46}.items():

s.get\_range(f"{col}1:{col}20").format.column\_width = width

s.get\_range("A1:J20").format.wrap\_text = True

# ============================================================

# 02\_PC\_MATRIX

# ============================================================

s = wb.worksheets.add("02\_PC\_MATRIX")

s.merge\_cells("A1:L1")

s.get\_range("A1").values = [["PC — Forced Choice Scoring Matrix"]]

s.get\_range("A1:L1").format = title\_fmt

pc\_headers = [

"Item Code","Mode","Weight","Canonical Targets","Display Order","Score Rule",

"Known Facet Target","Known Facet","Facet Reportable?","Relation Group",

"Option Mapping Status","Implementation Note"

]

pc\_rows = []

for code in pc\_items:

dim, facet = known\_pc\_facets.get(code, ("",""))

rg = next((r[0] for r in relation\_groups if code in r[1:3]), "")

pc\_rows.append([

code,"PC\_FORCED\_CHOICE",1,"D|I|S|C","RANDOMIZABLE",

"Selected canonical semantic option receives +1 to exactly one of D/I/S/C.",

dim,facet,"NO",rg,

"SOURCE\_REQUIRED\_FROM\_BANK-0.2",

"Use option\_id → score\_target mapping from BANK-0.2; never display position."

])

s.get\_range("A3:L3").values = [pc\_headers]

s.get\_range("A3:L3").format = header\_fmt

s.get\_range(f"A4:L{3+len(pc\_rows)}").values = pc\_rows

s.get\_range(f"A4:L{3+len(pc\_rows)}").format = body\_wrap

for row in range(4, 4+len(pc\_rows)):

if s.get\_range(f"G{row}").values[0][0]:

s.get\_range(f"G{row}:H{row}").format.fill = LIGHT\_GREEN

s.get\_range(f"G{row}:H{row}").format.font = {"bold": True, "color": GREEN}

if s.get\_range(f"J{row}").values[0][0]:

s.get\_range(f"J{row}").format.fill = LIGHT\_RED

s.get\_range(f"J{row}").format.font = {"bold": True, "color": RED}

s.merge\_cells("A30:L30")

s.get\_range("A30").values = [["PC — Regras Derivadas"]]

s.get\_range("A30:L30").format = section\_fmt

derived\_pc = [

["Metric","Definition","Formula / Rule"],

["PC.D.raw","Count of selected D targets","Σ D hits"],

["PC.I.raw","Count of selected I targets","Σ I hits"],

["PC.S.raw","Count of selected S targets","Σ S hits"],

["PC.C.raw","Count of selected C targets","Σ C hits"],

["Integrity","Total raw counts","D+I+S+C = 24"],

["Relative frequency","Within-person relative frequency","dimension\_raw / 24"],

["Ranking","Descending dimensions","Ties preserved explicitly"],

["GAP12","Gap between top and second rank","P1\_raw - P2\_raw; 0 when top tie"],

["GAP23","Gap between second and third rank","P2\_raw - P3\_raw; tie-aware"],

["Entropy","Normalized Shannon entropy","-Σ(p\*ln(p))/ln(4), with 0\*ln(0)=0"],

["PC.BALANCE","Not implemented","Do not invent formula in P1.0"],

]

s.get\_range("A31:C42").values = derived\_pc

s.get\_range("A31:C31").format = header\_fmt

s.get\_range("A32:A42").format = subtle\_header\_fmt

s.get\_range("B32:C42").format = body\_wrap

for col, width in {"A":14,"B":22,"C":14,"D":18,"E":18,"F":48,"G":18,"H":22,"I":18,"J":16,"K":30,"L":44}.items():

s.get\_range(f"{col}1:{col}45").format.column\_width = width

s.freeze\_panes.freeze\_rows(3)

s.freeze\_panes.freeze\_columns(1)

# ============================================================

# 03\_PRC\_MATRIX

# ============================================================

s = wb.worksheets.add("03\_PRC\_MATRIX")

s.merge\_cells("A1:K1")

s.get\_range("A1").values = [["PRC — Forced & Independent Scoring Matrix"]]

s.get\_range("A1:K1").format = title\_fmt

prc\_headers = [

"Item Code","Mode","Scored Responses","Canonical Modalities","Display/Block Randomization",

"Raw Input","Scoring Rule","Output","Normalization","Mapping Status","Implementation Note"

]

prc\_rows = []

for code in prc\_forced:

prc\_rows.append([

code,"PRC\_FORCED\_CHOICE",1,"V|A|C","YES — option order","selected option\_id",

"Selected canonical modality receives +1.","V/A/C raw counts","raw/8 relative choices",

"SOURCE\_REQUIRED\_FROM\_BANK-0.2",

"Forced and Independent remain separate."

])

for code in prc\_independent:

prc\_rows.append([

code,"PRC\_INDEPENDENT",3,"V|A|C","YES — block order only; scale direction fixed","rating 1–5 for V, A and C",

"Store all three ratings independently.","Mean of 4 ratings per modality","((mean-1)/4)\*100",

"STRUCTURE\_DEFINED; TEXT\_LABELS\_SOURCE\_REQUIRED",

"Do not convert the three modality means into a 100% composition."

])

s.get\_range("A3:K3").values = [prc\_headers]

s.get\_range("A3:K3").format = header\_fmt

s.get\_range(f"A4:K{3+len(prc\_rows)}").values = prc\_rows

s.get\_range(f"A4:K{3+len(prc\_rows)}").format = body\_wrap

s.merge\_cells("A18:K18")

s.get\_range("A18").values = [["PRC — Integrity & Interpretation Rules"]]

s.get\_range("A18:K18").format = section\_fmt

prc\_rules = [

["Rule ID","Rule"],

["PRC-INT-001","Forced: V+A+C raw must equal 8."],

["PRC-INT-002","Independent: exactly 4 V ratings, 4 A ratings and 4 C ratings."],

["PRC-INT-003","Independent means remain on 1–5 scale before optional normalization."],

["PRC-INT-004","Forced relative choice is not a personality percentage."],

["PRC-INT-005","Do not average Forced and Independent into a single PRC score."],

["PRC-INT-006","Forced and Independent may later generate convergence/divergence evidence, not score fusion."],

]

s.get\_range("A19:B25").values = prc\_rules

s.get\_range("A19:B19").format = header\_fmt

s.get\_range("A20:A25").format = subtle\_header\_fmt

s.get\_range("B20:B25").format = body\_wrap

for col, width in {"A":16,"B":24,"C":18,"D":22,"E":34,"F":26,"G":42,"H":28,"I":26,"J":34,"K":48}.items():

s.get\_range(f"{col}1:{col}30").format.column\_width = width

s.get\_range("A1:K30").format.wrap\_text = True

# ============================================================

# 04\_DR\_MATRIX

# ============================================================

s = wb.worksheets.add("04\_DR\_MATRIX")

s.merge\_cells("A1:J1")

s.get\_range("A1").values = [["DR™ — Dinâmica de Reação Scoring Matrix"]]

s.get\_range("A1:J1").format = title\_fmt

dr\_headers = [

"Item Code","Axis","Option A","Option B","Option C","Option D",

"Randomizable?","Axis Raw Range","Normalization","Implementation Note"

]

dr\_rows = []

for code, axis, mapstr in dr\_items:

if "A=4" in mapstr:

pts = [4,3,2,1]

else:

pts = [1,2,3,4]

dr\_rows.append([

code,axis,pts[0],pts[1],pts[2],pts[3],"NO","3–12",

"((axis\_raw - 3) / 9) \* 100",

"Use canonical option\_id/order mapping; no DR total."

])

s.get\_range("A3:J3").values = [dr\_headers]

s.get\_range("A3:J3").format = header\_fmt

s.get\_range(f"A4:J{3+len(dr\_rows)}").values = dr\_rows

s.get\_range(f"A4:J{3+len(dr\_rows)}").format = body\_wrap

# Color by axis

axis\_fill = {"SPEED": LIGHT\_BLUE, "IMPACT": LIGHT\_RED, "PERSISTENCE": LIGHT\_GREEN, "EXTERNALIZATION": LIGHT\_GOLD}

axis\_font = {"SPEED": NAVY, "IMPACT": RED, "PERSISTENCE": GREEN, "EXTERNALIZATION": "#7A5A16"}

for i, row in enumerate(range(4, 4+len(dr\_rows))):

axis = dr\_rows[i][1]

s.get\_range(f"B{row}").format.fill = axis\_fill[axis]

s.get\_range(f"B{row}").format.font = {"bold": True, "color": axis\_font[axis]}

s.merge\_cells("A18:J18")

s.get\_range("A18").values = [["DR — Regras de Integridade"]]

s.get\_range("A18:J18").format = section\_fmt

dr\_rules = [

["Rule ID","Rule"],

["DR-INT-001","Cada eixo possui exatamente 3 itens."],

["DR-INT-002","Cada eixo raw varia de 3 a 12."],

["DR-INT-003","Normalização: ((raw-3)/9)\*100."],

["DR-INT-004","TH codes permanecem como aliases legados no P1.0; não renomear silenciosamente."],

["DR-INT-005","Alto não significa bom; baixo não significa ruim."],

["DR-INT-006","Não calcular DR Total, intensidade geral, resiliência ou estabilidade emocional."],

["DR-INT-007","Qualquer randomizable=true para DR deve falhar na validação de configuração."],

]

s.get\_range("A19:B26").values = dr\_rules

s.get\_range("A19:B19").format = header\_fmt

s.get\_range("A20:A26").format = subtle\_header\_fmt

s.get\_range("B20:B26").format = body\_wrap

for col, width in {"A":14,"B":22,"C":12,"D":12,"E":12,"F":12,"G":16,"H":18,"I":28,"J":46}.items():

s.get\_range(f"{col}1:{col}30").format.column\_width = width

s.get\_range("A1:J30").format.wrap\_text = True

# ============================================================

# 05\_DERIVED\_METRICS

# ============================================================

s = wb.worksheets.add("05\_DERIVED\_METRICS")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Derived Metrics Registry — SCORE-P1.0"]]

s.get\_range("A1:H1").format = title\_fmt

dm\_headers = ["Metric Code","Source","Definition","Formula","Precision","Reportable?","Status","Notes"]

dm\_rows = [

["PC.D.REL","PC.D.raw","Relative frequency D","PC.D.raw / 24","store full precision","YES","ACTIVE","Within-person frequency."],

["PC.I.REL","PC.I.raw","Relative frequency I","PC.I.raw / 24","store full precision","YES","ACTIVE","Within-person frequency."],

["PC.S.REL","PC.S.raw","Relative frequency S","PC.S.raw / 24","store full precision","YES","ACTIVE","Within-person frequency."],

["PC.C.REL","PC.C.raw","Relative frequency C","PC.C.raw / 24","store full precision","YES","ACTIVE","Within-person frequency."],

["PC.RANKING","D/I/S/C raw","Tie-aware ranking","descending(raw), preserving ties","N/A","YES","ACTIVE","No arbitrary tiebreak."],

["PC.GAP12","Ranking","Top vs second gap","P1\_raw - P2\_raw","integer","YES","ACTIVE","Tie-aware."],

["PC.GAP23","Ranking","Second vs third gap","P2\_raw - P3\_raw","integer","YES","ACTIVE","Tie-aware."],

["PC.ENTROPY","PC relative frequencies","Normalized Shannon entropy","-SUM(p\*LN(p))/LN(4)","store full precision","RESEARCH","ACTIVE","0\*ln(0)=0; 1 balanced, 0 concentrated."],

["PC.BALANCE","PC","Balance metric","NOT\_IMPLEMENTED","N/A","NO","NOT\_IMPLEMENTED","Do not invent formula."],

["PRC.V.FORCED.REL","PRC V forced raw","Relative forced choice","V\_raw / 8","store full precision","YES","ACTIVE","Not identity percentage."],

["PRC.A.FORCED.REL","PRC A forced raw","Relative forced choice","A\_raw / 8","store full precision","YES","ACTIVE","Not identity percentage."],

["PRC.C.FORCED.REL","PRC C forced raw","Relative forced choice","C\_raw / 8","store full precision","YES","ACTIVE","Not identity percentage."],

["PRC.V.INDEP.MEAN","4 V ratings","Mean V","SUM(V ratings)/4","store full precision","YES","ACTIVE","Scale 1–5."],

["PRC.A.INDEP.MEAN","4 A ratings","Mean A","SUM(A ratings)/4","store full precision","YES","ACTIVE","Scale 1–5."],

["PRC.C.INDEP.MEAN","4 C ratings","Mean C","SUM(C ratings)/4","store full precision","YES","ACTIVE","Scale 1–5."],

["PRC.\*.INDEP.NORM","Independent mean","Optional normalized display","((mean-1)/4)\*100","store full precision","OPTIONAL","ACTIVE","Preserve mean as source value."],

["DR.SPEED.NORM","DR speed raw","Normalized speed","((raw-3)/9)\*100","store full precision","YES","ACTIVE","No high=good inference."],

["DR.IMPACT.NORM","DR impact raw","Normalized impact","((raw-3)/9)\*100","store full precision","YES","ACTIVE","No high=good inference."],

["DR.PERSISTENCE.NORM","DR persistence raw","Normalized persistence","((raw-3)/9)\*100","store full precision","YES","ACTIVE","No high=good inference."],

["DR.EXTERNALIZATION.NORM","DR externalization raw","Normalized externalization","((raw-3)/9)\*100","store full precision","YES","ACTIVE","No high=good inference."],

]

s.get\_range("A3:H3").values = [dm\_headers]

s.get\_range("A3:H3").format = header\_fmt

s.get\_range(f"A4:H{3+len(dm\_rows)}").values = dm\_rows

s.get\_range(f"A4:H{3+len(dm\_rows)}").format = body\_wrap

for row in range(4, 4+len(dm\_rows)):

if dm\_rows[row-4][6] == "NOT\_IMPLEMENTED":

s.get\_range(f"G{row}").format.fill = LIGHT\_RED

s.get\_range(f"G{row}").format.font = {"bold": True, "color": RED}

else:

s.get\_range(f"G{row}").format.fill = LIGHT\_GREEN

s.get\_range(f"G{row}").format.font = {"bold": True, "color": GREEN}

for col, width in {"A":24,"B":24,"C":30,"D":34,"E":20,"F":16,"G":20,"H":44}.items():

s.get\_range(f"{col}1:{col}30").format.column\_width = width

s.get\_range("A1:H30").format.wrap\_text = True

# ============================================================

# 06\_RELATION\_GROUPS

# ============================================================

s = wb.worksheets.add("06\_RELATION\_GROUPS")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["Relation Groups — Research Only"]]

s.get\_range("A1:G1").format = title\_fmt

rg\_headers = ["Group ID","Item A","Item B","Theme","Main Score Impact","Research Use","Forbidden Output"]

rg\_rows = []

for rg, a, b, theme in relation\_groups:

rg\_rows.append([rg,a,b,theme,"NONE","Analyze convergence/divergence after pilot","No lie score / honesty score / consistency %"])

s.get\_range("A3:G3").values = [rg\_headers]

s.get\_range("A3:G3").format = header\_fmt

s.get\_range("A4:G9").values = rg\_rows

s.get\_range("A4:G9").format = body\_wrap

for col, width in {"A":14,"B":14,"C":14,"D":28,"E":18,"F":44,"G":42}.items():

s.get\_range(f"{col}1:{col}15").format.column\_width = width

# ============================================================

# 07\_OUTPUT\_SCHEMA

# ============================================================

s = wb.worksheets.add("07\_OUTPUT\_SCHEMA")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Minimum Score Engine Output Schema"]]

s.get\_range("A1:H1").format = title\_fmt

out\_headers = ["Field / Object","Type","Required","Example / Range","Source","Persist?","Versioned?","Notes"]

out\_rows = [

["scoring\_run\_id","UUID","YES","uuid","system","YES","YES","Immutable run identifier."],

["assessment\_id","UUID","YES","uuid","assessment","YES","YES","Must belong to COMPLETED assessment."],

["scoring\_version","string","YES","SCORE-P1.0","release manifest","YES","YES","Required lineage."],

["instrument\_version","string","YES","MGH-P1.0","release manifest","YES","YES","Compatibility check."],

["item\_bank\_version","string","YES","BANK-0.2","release manifest","YES","YES","Compatibility check."],

["pc\_raw","object","YES","D/I/S/C 0–24","responses","YES","YES","Sum must be 24."],

["pc\_relative","object","YES","0–1","derived","YES","YES","Store precision."],

["pc\_ranking","object","YES","tie-aware ranks","derived","YES","YES","No forced winner."],

["pc\_gaps","object","YES","GAP12/GAP23","derived","YES","YES","Tie-aware."],

["pc\_entropy","decimal","YES","0–1","derived","YES","YES","Research/interpretive support."],

["pc\_facets","array","YES","hits/opportunities","responses","YES","YES","Only where facet\_signal exists."],

["prc\_forced","object","YES","V/A/C counts + rel","responses","YES","YES","Separate from Independent."],

["prc\_independent","object","YES","means + norm","responses","YES","YES","Preserve means."],

["dr\_axes","object","YES","raw + norm","responses","YES","YES","4 axes, no total."],

["lineage","array","YES","metric→response/item","derived","YES","YES","Required for later Evidence Engine."],

["input\_hash","string","RECOMMENDED","hash","responses/version set","YES","YES","Supports idempotency/audit."],

]

s.get\_range("A3:H3").values = [out\_headers]

s.get\_range("A3:H3").format = header\_fmt

s.get\_range(f"A4:H{3+len(out\_rows)}").values = out\_rows

s.get\_range(f"A4:H{3+len(out\_rows)}").format = body\_wrap

for col, width in {"A":24,"B":14,"C":14,"D":26,"E":24,"F":12,"G":14,"H":46}.items():

s.get\_range(f"{col}1:{col}24").format.column\_width = width

# ============================================================

# 08\_VALIDATION\_RULES

# ============================================================

s = wb.worksheets.add("08\_VALIDATION\_RULES")

s.merge\_cells("A1:F1")

s.get\_range("A1").values = [["SCORE-P1.0 — Validation & Failure Rules"]]

s.get\_range("A1:F1").format = title\_fmt

v\_headers = ["Rule ID","Validation","Expected","Failure","Severity","Notes"]

v\_rows = [

["SCORE-001","Assessment status","COMPLETED","ASSESSMENT\_NOT\_READY","BLOCKING","Do not score partial assessment."],

["SCORE-002","Scored responses count","56","ASSESSMENT\_NOT\_READY","BLOCKING","Exact count."],

["SCORE-003","PC responses","24","SCORE\_CONFIGURATION\_ERROR","BLOCKING","Each scores exactly one D/I/S/C target."],

["SCORE-004","PC raw integrity","D+I+S+C=24","SCORE\_CONFIGURATION\_ERROR","BLOCKING","No missing/double-scored option."],

["SCORE-005","PRC Forced responses","8","SCORE\_CONFIGURATION\_ERROR","BLOCKING","Each scores exactly one V/A/C."],

["SCORE-006","PRC Independent ratings","12","SCORE\_CONFIGURATION\_ERROR","BLOCKING","4 ratings per modality."],

["SCORE-007","PRC Independent range","1–5","INVALID\_OPTION","BLOCKING","No out-of-range rating."],

["SCORE-008","DR responses","12","SCORE\_CONFIGURATION\_ERROR","BLOCKING","3 per axis."],

["SCORE-009","DR option order/randomization","fixed / not randomizable","INSTRUMENT\_CONFIGURATION\_ERROR","BLOCKING","Do not reverse by display position."],

["SCORE-010","Version compatibility","MGH-P1.0 + BANK-0.2 + SCORE-P1.0","VERSION\_MISMATCH","BLOCKING","Use Release Manifest."],

["SCORE-011","Facet source","facet\_signal must exist","SUPPRESS FACET VALUE","CRITICAL\_PILOT","Do not infer facet from item text."],

["SCORE-012","Existing same input hash","reuse/return existing run","IDEMPOTENT","CRITICAL\_PILOT","Do not duplicate equivalent scoring runs."],

["SCORE-013","PC.BALANCE requested","NOT\_IMPLEMENTED","SCORE\_CONFIGURATION\_ERROR","BLOCKING","No formula frozen."],

["SCORE-014","DR total requested","PROHIBITED","SCORE\_CONFIGURATION\_ERROR","BLOCKING","No DR total in P1.0."],

]

s.get\_range("A3:F3").values = [v\_headers]

s.get\_range("A3:F3").format = header\_fmt

s.get\_range("A4:F17").values = v\_rows

s.get\_range("A4:F17").format = body\_wrap

for row in range(4, 18):

sev = v\_rows[row-4][4]

if sev == "BLOCKING":

s.get\_range(f"E{row}").format.fill = LIGHT\_RED

s.get\_range(f"E{row}").format.font = {"bold": True, "color": RED}

else:

s.get\_range(f"E{row}").format.fill = LIGHT\_GOLD

s.get\_range(f"E{row}").format.font = {"bold": True, "color": "#7A5A16"}

for col, width in {"A":16,"B":34,"C":30,"D":30,"E":18,"F":50}.items():

s.get\_range(f"{col}1:{col}22").format.column\_width = width

# ============================================================

# 09\_GOLDEN\_CASES

# ============================================================

s = wb.worksheets.add("09\_GOLDEN\_CASES")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Golden Cases Linked to SCORE-P1.0"]]

s.get\_range("A1:H1").format = title\_fmt

g\_headers = ["Case ID","Lens","Input Pattern","Expected Raw","Expected Derived","Expected Special Behavior","Severity","Status"]

g\_rows = [

["G-PC-001","PC","6D / 6I / 6S / 6C","6/6/6/6",".25 each; entropy=1","Explicit TOP\_TIE","BLOCKING","DEFINED"],

["G-PC-002","PC","24D","24/0/0/0","D=1.0; others=0; entropy=0","Single top D","BLOCKING","DEFINED"],

["G-PC-003","PC","9D / 7I / 3S / 5C","9/7/3/5",".375/.291666.../.125/.208333...","Ranks D>I>C>S; GAP12=2; GAP23=2","BLOCKING","DEFINED"],

["G-PRC-001","PRC Forced","All V","8/0/0","V relative=1.0","Do NOT label '100% visual'","BLOCKING","DEFINED"],

["G-PRC-002","PRC Forced","4V / 3A / 1C","4/3/1",".5/.375/.125","Relative choices only","BLOCKING","DEFINED"],

["G-PRC-003","PRC Independent","V mean=4.75; A=4; C=3","4.75/4/3","93.75/75/50","Preserve means and norms","BLOCKING","DEFINED"],

["G-PRC-004","PRC Independent","All ratings=5","5/5/5","100/100/100","Do NOT convert to 33/33/33","BLOCKING","DEFINED"],

["G-DR-001","DR","Axis raw=12","12","100","High≠good","BLOCKING","DEFINED"],

["G-DR-002","DR","Axis raw=3","3","0","Low≠bad","BLOCKING","DEFINED"],

["G-DR-003","DR","Axis raw=9","9","66.666...","Precision retained","BLOCKING","DEFINED"],

["G-DR-004","DR Persistence","D/D/D on persistence items","12","100","Uses reversed persistence key","BLOCKING","DEFINED"],

["G-DR-005","DR Config","randomizable=true","N/A","N/A","Must fail config validation","BLOCKING","DEFINED"],

]

s.get\_range("A3:H3").values = [g\_headers]

s.get\_range("A3:H3").format = header\_fmt

s.get\_range(f"A4:H{3+len(g\_rows)}").values = g\_rows

s.get\_range(f"A4:H{3+len(g\_rows)}").format = body\_wrap

for col, width in {"A":16,"B":18,"C":34,"D":24,"E":36,"F":42,"G":16,"H":16}.items():

s.get\_range(f"{col}1:{col}20").format.column\_width = width

# ============================================================

# 10\_CALC\_DEMO

# Formula-driven verification examples

# ============================================================

s = wb.worksheets.add("10\_CALC\_DEMO")

s.merge\_cells("A1:K1")

s.get\_range("A1").values = [["Formula Demonstration — SCORE-P1.0"]]

s.get\_range("A1:K1").format = title\_fmt

# PC example

s.merge\_cells("A3:K3")

s.get\_range("A3").values = [["PC Example: 9D / 7I / 3S / 5C"]]

s.get\_range("A3:K3").format = section\_fmt

s.get\_range("A4:G4").values = [["D raw","I raw","S raw","C raw","Total","D rel","Entropy"]]

s.get\_range("A4:G4").format = header\_fmt

s.get\_range("A5:D5").values = [[9,7,3,5]]

s.get\_range("E5").formulas = [["=SUM(A5:D5)"]]

s.get\_range("F5").formulas = [["=A5/E5"]]

s.get\_range("G5").formulas = [[

"=-(IF(A5=0,0,(A5/E5)\*LN(A5/E5))+IF(B5=0,0,(B5/E5)\*LN(B5/E5))+IF(C5=0,0,(C5/E5)\*LN(C5/E5))+IF(D5=0,0,(D5/E5)\*LN(D5/E5)))/LN(4)"

]]

# PRC independent example

s.merge\_cells("A8:K8")

s.get\_range("A8").values = [["PRC Independent Example"]]

s.get\_range("A8:K8").format = section\_fmt

s.get\_range("A9:F9").values = [["V mean","A mean","C mean","V norm","A norm","C norm"]]

s.get\_range("A9:F9").format = header\_fmt

s.get\_range("A10:C10").values = [[4.75,4,3]]

s.get\_range("D10").formulas = [["=((A10-1)/4)\*100"]]

s.get\_range("E10").formulas = [["=((B10-1)/4)\*100"]]

s.get\_range("F10").formulas = [["=((C10-1)/4)\*100"]]

# DR examples

s.merge\_cells("A13:K13")

s.get\_range("A13").values = [["DR Normalization Examples"]]

s.get\_range("A13:K13").format = section\_fmt

s.get\_range("A14:B14").values = [["Axis raw","Normalized"]]

s.get\_range("A14:B14").format = header\_fmt

s.get\_range("A15:A17").values = [[12],[3],[9]]

s.get\_range("B15").formulas = [["=((A15-3)/9)\*100"]]

s.get\_range("B15:B17").fill\_down()

s.get\_range("A1:K20").format.wrap\_text = True

for col, width in {"A":14,"B":14,"C":14,"D":14,"E":14,"F":14,"G":18,"H":12,"I":12,"J":12,"K":12}.items():

s.get\_range(f"{col}1:{col}20").format.column\_width = width

# ============================================================

# 11\_SOURCE\_GAPS

# ============================================================

s = wb.worksheets.add("11\_SOURCE\_GAPS")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["Source Gaps — Must Not Be Inferred"]]

s.get\_range("A1:G1").format = title\_fmt

sg\_headers = ["Gap ID","Component","Missing Canonical Source","Current Safe State","Blocks","Owner","Rule"]

sg\_rows = [

["GAP-SCORE-001","PC option mapping","option\_id → D/I/S/C for each of 24 PC items","Scoring rule known; literal mapping pending BANK recovery","Final PC implementation","MGH","Do not map by visual A/B/C/D."],

["GAP-SCORE-002","PC facet matrix","Complete option/item facet\_signal coverage","Only explicitly known facets retained; others blank","Facet calculation completeness","MGH","Do not infer facet from wording."],

["GAP-SCORE-003","PRC forced mapping","option\_id → V/A/C for 8 forced items","Scoring rule known; literal mapping pending BANK recovery","Final PRC forced implementation","MGH","Do not infer modality from display order."],

["GAP-SCORE-004","PRC independent labels","Exact canonical statement text + scale labels","Structure and scoring known","Final participant rendering","MGH","Do not invent wording."],

["GAP-SCORE-005","BANK literal text","Canonical scenario/option text","ANX-003 structure complete; source recovery required","Instrument publication","MGH","No reconstructed text in production."],

]

s.get\_range("A3:G3").values = [sg\_headers]

s.get\_range("A3:G3").format = header\_fmt

s.get\_range("A4:G8").values = sg\_rows

s.get\_range("A4:G8").format = body\_wrap

for col, width in {"A":18,"B":24,"C":44,"D":46,"E":30,"F":16,"G":44}.items():

s.get\_range(f"{col}1:{col}14").format.column\_width = width

# -----------------------------

# Freeze panes / tables

# -----------------------------

for name in ["02\_PC\_MATRIX","03\_PRC\_MATRIX","04\_DR\_MATRIX","05\_DERIVED\_METRICS","08\_VALIDATION\_RULES","09\_GOLDEN\_CASES","11\_SOURCE\_GAPS"]:

sh = wb.worksheets.get\_item(name)

sh.freeze\_panes.freeze\_rows(3)

wb.worksheets.get\_item("02\_PC\_MATRIX").tables.add("A3:L27", True, "PCScoringMatrix")

wb.worksheets.get\_item("03\_PRC\_MATRIX").tables.add("A3:K15", True, "PRCScoringMatrix")

wb.worksheets.get\_item("04\_DR\_MATRIX").tables.add("A3:J15", True, "DRScoringMatrix")

wb.worksheets.get\_item("05\_DERIVED\_METRICS").tables.add("A3:H23", True, "DerivedMetricsRegistry")

wb.worksheets.get\_item("08\_VALIDATION\_RULES").tables.add("A3:F17", True, "ScoreValidationRules")

wb.worksheets.get\_item("09\_GOLDEN\_CASES").tables.add("A3:H15", True, "ScoreGoldenCases")

wb.worksheets.get\_item("11\_SOURCE\_GAPS").tables.add("A3:G8", True, "ScoreSourceGaps")

# -----------------------------

# Verification

# -----------------------------

check = wb.inspect({

"kind": "table",

"range": "04\_DR\_MATRIX!A1:J15",

"include": "values,formulas",

"table\_max\_rows": 15,

"table\_max\_cols": 10,

})

print(check.ndjson)

check2 = wb.inspect({

"kind": "table",

"range": "10\_CALC\_DEMO!A1:G17",

"include": "values,formulas",

"table\_max\_rows": 20,

"table\_max\_cols": 10,

})

print(check2.ndjson)

errors = wb.inspect({

"kind": "match",

"search\_term": "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options": {"use\_regex": True, "max\_results": 100},

"summary": "final formula error scan",

})

print(errors.ndjson)

out = "/mnt/data/MGH\_ANX-005\_SCORE-P1.0\_Scoring\_Matrix\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

print(out)

{"kind":"table","sheet":"04\_DR\_MATRIX","address":"A1:J15","rows":15,"cols":10,"values":[["DR™ — Dinâmica de Reação Scoring Matrix",null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],["Item Code","Axis","Option A","Option B","Option C","Option D","Randomizable?","Axis Raw Range","Normalization","Implementation Note"],["TH-001","SPEED",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-006","SPEED",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-007","SPEED",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-004R","IMPACT",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-008R","IMPACT",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-009R","IMPACT",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-002","PERSISTENCE",1,2,3,4,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-010","PERSISTENCE",1,2,3,4,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-015","PERSISTENCE",1,2,3,4,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-003","EXTERNALIZATION",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-012","EXTERNALIZATION",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."],["TH-013","EXTERNALIZATION",4,3,2,1,"NO","3–12","((axis\_raw - 3) / 9) \* 100","Use canonical option\_id/order mapping; no DR total."]]}

{"kind":"table","sheet":"10\_CALC\_DEMO","address":"A1:G17","rows":17,"cols":7,"values":[["Formula Demonstration — SCORE-P1.0",null,null,null,null,null,null],[null,null,null,null,null,null,null],["PC Example: 9D / 7I / 3S / 5C",null,null,null,null,null,null],["D raw","I raw","S raw","C raw","Total","D rel","Entropy"],[9,7,3,5,24,0.375,0.9477867202775715],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],["PRC Independent Example",null,null,null,null,null,null],["V mean","A mean","C mean","V norm","A norm","C norm",null],[4.75,4,3,93.75,75,50,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],["DR Normalization Examples",null,null,null,null,null,null],["Axis raw","Normalized",null,null,null,null,null],[12,100,null,null,null,null,null],[3,0,null,null,null,null,null],[9,66.66666666666666,null,null,null,null,null]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

/mnt/data/MGH\_ANX-005\_SCORE-P1.0\_Scoring\_Matrix\_v0.1.xlsx

Avançamos. O próximo anexo canônico está concluído:

ANX-005 — SCORE-P1.0 Scoring Matrix ✅

Esse arquivo transforma a lógica de scoring em uma especificação estruturada para o desenvolvedor.

Ele contém:

00\_README

01\_SCORE\_OVERVIEW

02\_PC\_MATRIX

03\_PRC\_MATRIX

04\_DR\_MATRIX

05\_DERIVED\_METRICS

06\_RELATION\_GROUPS

07\_OUTPUT\_SCHEMA

08\_VALIDATION\_RULES

09\_GOLDEN\_CASES

10\_CALC\_DEMO

11\_SOURCE\_GAPS

Também inclui exemplos com fórmulas funcionando para validar a matemática do scoring.

Um exemplo já calculado no arquivo:

PC 9D / 7I / 3S / 5C

total = 24

D relativo = 0,375

entropia ≈ 0,9478

E para DR:

raw 12 → 100

raw 3 → 0

raw 9 → 66,666...

O que ficou completamente congelado

No PC:

cada resposta pontua exatamente uma dimensão D, I, S ou C com peso 1;

D + I + S + C = 24;

frequências relativas;

ranking com empates;

GAP12 e GAP23;

entropia normalizada;

PC.BALANCE = NOT\_IMPLEMENTED.

No PRC:

Forced continua separado do Independent;

Forced gera contagem V/A/C sobre 8 escolhas;

Independent gera média de quatro ratings por modalidade;

normalização opcional ((média - 1) / 4) × 100.

No DR:

Velocidade, Impacto, Persistência e Externalização;

três itens por eixo;

raw 3–12;

normalização 0–100;

sem DR Total.

Também deixei registradas as falhas bloqueantes, inclusive:

assessment incompleto;

número incorreto de respostas;

incompatibilidade de versões;

DR randomizado;

tentativa de calcular PC.BALANCE;

tentativa de gerar DR Total.

Um cuidado importante

Como o BANK-0.2 ainda está com recuperação dos textos e option\_ids literais pendente, eu não inventei os mappings que não temos canonicamente recuperados.

Por isso, no PC e no PRC Forced aparecem campos como:

SOURCE\_REQUIRED\_FROM\_BANK-0.2

Isso é proposital.

O desenvolvedor já sabe exatamente como pontuar, mas ainda não pode presumir:

“opção A = D”

“opção B = I”

porque as opções podem randomizar.

O mapping definitivo precisa vir do Banco Canônico.

Situação atual da Fase 3.3

Anexo Status

ANX-001 — Release Manifest ✅

ANX-002 — Version Compatibility Matrix ✅

ANX-003 — BANK-0.2 🟡 estrutura pronta / conteúdo literal pendente

ANX-004 — Application Sequence ✅

ANX-005 — SCORE-P1.0 Scoring Matrix ✅

Agora chegamos ao próximo ponto muito importante:

ANX-015 — GOLDEN-P1.0

Nós já temos os Golden Cases conceitualmente definidos e parte deles inclusive está registrada dentro do ANX-005.

Mas agora precisamos criar o dataset canônico de testes, com entradas sintéticas completas e saídas esperadas, de forma que o desenvolvedor possa colocar isso no CI/CD.

Esse será o arquivo que transforma a frase:

“o Score Engine parece funcionar”

em:

“o Score Engine produz exatamente o resultado conhecido para entradas conhecidas.”

Depois do GOLDEN-P1.0, o núcleo técnico da Fase A estará muito mais próximo de ficar fechado para implementação.

from artifact\_tool import Workbook, SpreadsheetFile

import json, math, os

# ============================================================

# MGH ANX-015 — GOLDEN-P1.0

# Canonical Golden Dataset / Acceptance Fixture Pack

# ============================================================

wb = Workbook.create()

# -----------------------------

# Visual system

# -----------------------------

NAVY = "#17324D"

BLUE = "#2F5D8C"

TEAL = "#2B6F6D"

GOLD = "#C89B3C"

RED = "#A63D40"

GREEN = "#2E6B4F"

WHITE = "#FFFFFF"

LIGHT\_BLUE = "#EAF2F8"

LIGHT\_TEAL = "#E8F3F2"

LIGHT\_GOLD = "#F8F1DF"

LIGHT\_RED = "#FBEAEC"

LIGHT\_GREEN = "#EAF4EE"

LIGHT\_GRAY = "#F3F5F7"

GRAY = "#5B6573"

title\_fmt = {

"fill": NAVY,

"font": {"bold": True, "color": WHITE, "size": 16},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

section\_fmt = {

"fill": BLUE,

"font": {"bold": True, "color": WHITE, "size": 11},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

header\_fmt = {

"fill": TEAL,

"font": {"bold": True, "color": WHITE},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

}

subtle\_header\_fmt = {

"fill": LIGHT\_BLUE,

"font": {"bold": True, "color": NAVY},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

note\_fmt = {

"fill": LIGHT\_GOLD,

"font": {"color": "#6B531C"},

"wrap\_text": True,

"vertical\_alignment": "top",

}

body\_wrap = {"wrap\_text": True, "vertical\_alignment": "top"}

# -----------------------------

# Canonical sets

# -----------------------------

pc\_items = [

"PC-001","PC-002","PC-005","PC-007","PC-008","PC-009R","PC-010","PC-011R",

"PC-012","PC-014","PC-015","PC-016","PC-017","PC-018","PC-019","PC-020R",

"PC-021","PC-023","PC-027","PC-028","PC-029","PC-033","PC-035","PC-036"

]

prc\_forced\_items = ["PRC-001","PRC-002","PRC-003","PRC-005","PRC-009","PRC-011","PRC-012","PRC-015"]

prc\_indep\_items = ["PRC-004R","PRC-006R","PRC-010I","PRC-014I"]

dr\_key = {

"TH-001": ("SPEED", {"A":4,"B":3,"C":2,"D":1}),

"TH-006": ("SPEED", {"A":4,"B":3,"C":2,"D":1}),

"TH-007": ("SPEED", {"A":4,"B":3,"C":2,"D":1}),

"TH-004R": ("IMPACT", {"A":4,"B":3,"C":2,"D":1}),

"TH-008R": ("IMPACT", {"A":4,"B":3,"C":2,"D":1}),

"TH-009R": ("IMPACT", {"A":4,"B":3,"C":2,"D":1}),

"TH-002": ("PERSISTENCE", {"A":1,"B":2,"C":3,"D":4}),

"TH-010": ("PERSISTENCE", {"A":1,"B":2,"C":3,"D":4}),

"TH-015": ("PERSISTENCE", {"A":1,"B":2,"C":3,"D":4}),

"TH-003": ("EXTERNALIZATION", {"A":4,"B":3,"C":2,"D":1}),

"TH-012": ("EXTERNALIZATION", {"A":4,"B":3,"C":2,"D":1}),

"TH-013": ("EXTERNALIZATION", {"A":4,"B":3,"C":2,"D":1}),

}

def pc\_entropy(counts):

total = sum(counts)

ps = [c/total for c in counts if c > 0]

return -sum(p\*math.log(p) for p in ps)/math.log(4)

# -----------------------------

# Golden case metadata

# -----------------------------

case\_catalog = [

["G-PC-001","SCORE\_UNIT","PC","Balanced 6/6/6/6","BLOCKING","EXECUTABLE\_AT\_TARGET\_LEVEL","NO","TOP\_TIE; entropy=1"],

["G-PC-002","SCORE\_UNIT","PC","Concentrated 24D","BLOCKING","EXECUTABLE\_AT\_TARGET\_LEVEL","NO","D=1; entropy=0"],

["G-PC-003","SCORE\_UNIT","PC","9D/7I/3S/5C","BLOCKING","EXECUTABLE\_AT\_TARGET\_LEVEL","NO","Ranks D>I>C>S; gaps 2/2"],

["G-PC-004","PRESENTATION\_INVARIANCE","PC","Same semantic targets under changed display order","BLOCKING","PARTIAL\_UNTIL\_BANK","YES","Scores must remain identical"],

["G-PRC-F-001","SCORE\_UNIT","PRC\_FORCED","All V","BLOCKING","EXECUTABLE\_AT\_TARGET\_LEVEL","NO","V raw 8; rel 1.0; no '100% visual'"],

["G-PRC-F-002","SCORE\_UNIT","PRC\_FORCED","4V/3A/1C","BLOCKING","EXECUTABLE\_AT\_TARGET\_LEVEL","NO","0.5/0.375/0.125"],

["G-PRC-I-001","SCORE\_UNIT","PRC\_INDEPENDENT","Means V=4.75/A=4/C=3","BLOCKING","EXECUTABLE","NO","Norm 93.75/75/50"],

["G-PRC-I-002","SCORE\_UNIT","PRC\_INDEPENDENT","All 5","BLOCKING","EXECUTABLE","NO","100/100/100; no 33/33/33"],

["G-PRC-I-003","SPEC\_REVIEW","PRC\_INDEPENDENT","Legacy derived example 4.8/4.7/4.6","NON\_BLOCKING\_NOW","DERIVED\_ONLY","NO","Impossible as mean of 4 integer 1–5 ratings; do not use as RAW fixture"],

["G-DR-001","SCORE\_UNIT","DR","All axes maximum","BLOCKING","EXECUTABLE","NO","Each axis norm=100"],

["G-DR-002","SCORE\_UNIT","DR","All axes minimum","BLOCKING","EXECUTABLE","NO","Each axis norm=0"],

["G-DR-003","SCORE\_UNIT","DR","Each axis raw=9","BLOCKING","EXECUTABLE","NO","Each axis norm=66.666..."],

["G-DR-004","SCORE\_UNIT","DR","Persistence D/D/D","BLOCKING","EXECUTABLE","NO","Persistence raw=12 norm=100"],

["G-DR-005","CONFIG\_VALIDATION","DR","randomizable=true","BLOCKING","EXECUTABLE","NO","Must fail INSTRUMENT\_CONFIGURATION\_ERROR"],

["G-FULL-001","SCORE\_INTEGRATION","ALL","56-response semantic fixture","BLOCKING","PARTIAL\_UNTIL\_BANK","YES","Full scoring integration fixture"],

["FLOW-001","FLOW","SYSTEM","55/56 scored responses then submit","BLOCKING","EXECUTABLE","NO","ASSESSMENT\_NOT\_READY"],

["FLOW-002","FLOW","SYSTEM","Complete assessment submit","BLOCKING","EXECUTABLE","NO","COMPLETED"],

["FLOW-003","FLOW","SYSTEM","Edit after COMPLETED","BLOCKING","EXECUTABLE","NO","ASSESSMENT\_ALREADY\_COMPLETED"],

["FLOW-004","FLOW","SYSTEM","Double-submit same completed assessment","CRITICAL\_PILOT","EXECUTABLE","NO","Idempotent; one effective scoring job"],

["FLOW-005","FLOW","SYSTEM","Resume after interruption","CRITICAL\_PILOT","EXECUTABLE","NO","Same option presentation/order"],

["VER-001","VERSIONING","SYSTEM","Scoring version mismatch","BLOCKING","EXECUTABLE","NO","VERSION\_MISMATCH"],

["VER-002","VERSIONING","SYSTEM","Re-score historical RAW with new scoring version","BLOCKING","EXECUTABLE","NO","New SCORING\_RUN; old run preserved"],

["VER-003","IMMUTABILITY","SYSTEM","Mutate published item text","BLOCKING","EXECUTABLE","NO","Rejected; create new version"],

["SEC-001","SECURITY","API","Frontend payload exposes score\_target","BLOCKING","EXECUTABLE","NO","FAIL / prohibited exposure"],

["SEC-002","SECURITY","EXPORT","Pseudonymized export by default","CRITICAL\_PILOT","EXECUTABLE","NO","No name/email/phone"],

["SEC-003","SECURITY","AUTH","Identified export without permission","BLOCKING","EXECUTABLE","NO","UNAUTHORIZED\_ACTION"],

["INT-001","INTERPRETATION\_FUTURE","MOTOR","Autonomy + criterion consistent","FUTURE","ARTIFICIAL\_EVIDENCE","NO","DEL-001 + DEL-002 + SIN-DEL-001 → CLM-DEL-S01"],

["INT-002","INTERPRETATION\_FUTURE","MOTOR","PC.D relevant but contextual confrontation low","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Generic direct-conflict claim suppressed"],

["INT-003","INTERPRETATION\_FUTURE","MOTOR","DR impact HIGH + externalization LOW","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Allow visibility caveat; forbid repression/hidden feelings"],

["INT-004","INTERPRETATION\_FUTURE","MOTOR","Overlapping source metrics","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Cannot auto-upgrade evidence level"],

["INT-005","INTERPRETATION\_FUTURE","MOTOR","PRC forced + independent separate sources","FUTURE","ARTIFICIAL\_EVIDENCE","NO","May converge; remain separate"],

["INT-006","INTERPRETATION\_FUTURE","MOTOR","HIGH + LOW same axis","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Integrity flag; no strong UIG"],

["INT-007","INTERPRETATION\_FUTURE","MOTOR","Insufficient evidence","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Silence"],

["INT-008","INTERPRETATION\_FUTURE","MOTOR","Forbidden claims requested","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Block GOOD\_LEADER/JOB\_FIT/HONEST\_PERSON"],

["SYN-001","INTERPRETATION\_FUTURE","MOTOR","Overlapping visual recommendations","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Compress to one recommendation"],

["SYN-002","INTERPRETATION\_FUTURE","MOTOR","Visual + auditory both relevant","FUTURE","ARTIFICIAL\_EVIDENCE","NO","Multimodal synthesis if no dominance rule"],

]

# ============================================================

# 00\_README

# ============================================================

s = wb.worksheets.add("00\_README")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["MGH™ — ANX-015 | GOLDEN-P1.0 Canonical Golden Dataset"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A1:H1").format.row\_height = 28

meta = [

["Campo","Valor"],

["Código do anexo","MGH-ANX-015"],

["Dataset","GOLDEN-P1.0"],

["Versão documental","0.1"],

["Instrumento","MGH-P1.0"],

["Scoring","SCORE-P1.0"],

["Banco relacionado","BANK-0.2"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Status","PILOT BASELINE — ACCEPTANCE FIXTURE PACK"],

["Finalidade","Entradas sintéticas conhecidas + saídas esperadas para testes unitários, integração, fluxo, versão, segurança e futuro Motor."],

]

s.get\_range("A3:B12").values = meta

s.get\_range("A3:B3").format = header\_fmt

s.get\_range("A4:A12").format = subtle\_header\_fmt

s.get\_range("B4:B12").format = body\_wrap

s.merge\_cells("A14:H14")

s.get\_range("A14").values = [["REGRA-MÃE"]]

s.get\_range("A14:H14").format = section\_fmt

s.merge\_cells("A15:H18")

s.get\_range("A15").values = [[

"Nenhuma implementação é aceita porque 'parece funcionar'. Ela precisa produzir resultados conhecidos "

"a partir de entradas conhecidas. Todos os casos BLOCKING aplicáveis à Fase A devem passar antes da Onda 0."

]]

s.get\_range("A15:H18").format = note\_fmt

s.merge\_cells("A20:H20")

s.get\_range("A20").values = [["DOIS NÍVEIS DE FIXTURE"]]

s.get\_range("A20:H20").format = section\_fmt

fixture\_levels = [

["Nível","Uso","Dependência do BANK-0.2"],

["SEMANTIC\_TARGET","Testa matemática do Score Engine usando targets canônicos D/I/S/C ou V/A/C.","Não depende da redação literal, mas não substitui E2E com option\_id."],

["RAW\_OPTION\_ID","Testa Assessment→Response→Score de ponta a ponta usando option\_id real.","Depende da recuperação completa do BANK-0.2."],

]

s.get\_range("A21:C23").values = fixture\_levels

s.get\_range("A21:C21").format = header\_fmt

s.get\_range("A22:A23").format = subtle\_header\_fmt

s.get\_range("B22:C23").format = body\_wrap

s.merge\_cells("A25:H25")

s.get\_range("A25").values = [["IMPORTANTE"]]

s.get\_range("A25:H25").format = section\_fmt

s.merge\_cells("A26:H30")

s.get\_range("A26").values = [[

"Os casos PC e PRC Forced neste pacote usam targets semânticos porque o mapping literal option\_id → target "

"ainda depende do BANK-0.2 canônico. Eles são válidos para testar a matemática e a lógica do Score Engine, "

"mas os testes E2E de option\_id serão adicionados quando o banco literal for recuperado."

]]

s.get\_range("A26:H30").format = note\_fmt

for col, width in {"A":24,"B":64,"C":44,"D":12,"E":12,"F":12,"G":12,"H":12}.items():

s.get\_range(f"{col}1:{col}34").format.column\_width = width

s.get\_range("A1:H34").format.wrap\_text = True

# ============================================================

# 01\_CASE\_CATALOG

# ============================================================

s = wb.worksheets.add("01\_CASE\_CATALOG")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["GOLDEN-P1.0 — Case Catalog"]]

s.get\_range("A1:H1").format = title\_fmt

catalog\_headers = ["Case ID","Class","Component","Scenario","Severity","Fixture Status","BANK Dependency","Expected Behavior"]

s.get\_range("A3:H3").values = [catalog\_headers]

s.get\_range("A3:H3").format = header\_fmt

s.get\_range(f"A4:H{3+len(case\_catalog)}").values = case\_catalog

s.get\_range(f"A4:H{3+len(case\_catalog)}").format = body\_wrap

for r in range(4, 4+len(case\_catalog)):

sev = case\_catalog[r-4][4]

if sev == "BLOCKING":

s.get\_range(f"E{r}").format.fill = LIGHT\_RED

s.get\_range(f"E{r}").format.font = {"bold": True, "color": RED}

elif sev == "CRITICAL\_PILOT":

s.get\_range(f"E{r}").format.fill = LIGHT\_GOLD

s.get\_range(f"E{r}").format.font = {"bold": True, "color": "#7A5A16"}

else:

s.get\_range(f"E{r}").format.fill = LIGHT\_BLUE

if case\_catalog[r-4][6] == "YES":

s.get\_range(f"G{r}").format.fill = LIGHT\_GOLD

s.tables.add(f"A3:H{3+len(case\_catalog)}", True, "GoldenCaseCatalog")

s.freeze\_panes.freeze\_rows(3)

for col, width in {"A":18,"B":28,"C":20,"D":42,"E":18,"F":28,"G":18,"H":52}.items():

s.get\_range(f"{col}1:{col}50").format.column\_width = width

# ============================================================

# 02\_PC\_EXPECTED

# ============================================================

s = wb.worksheets.add("02\_PC\_EXPECTED")

s.merge\_cells("A1:Q1")

s.get\_range("A1").values = [["PC Golden Cases — Expected Outputs"]]

s.get\_range("A1:Q1").format = title\_fmt

pc\_exp\_headers = [

"Case ID","D raw","I raw","S raw","C raw","Total",

"D rel","I rel","S rel","C rel","Entropy",

"Rank 1","Rank 2","Rank 3","Rank 4","GAP12","GAP23"

]

s.get\_range("A3:Q3").values = [pc\_exp\_headers]

s.get\_range("A3:Q3").format = header\_fmt

pc\_cases\_counts = [

["G-PC-001",6,6,6,6],

["G-PC-002",24,0,0,0],

["G-PC-003",9,7,3,5],

]

s.get\_range("A4:E6").values = pc\_cases\_counts

# formulas

for row in range(4,7):

s.get\_range(f"F{row}").formulas = [[f"=SUM(B{row}:E{row})"]]

for col\_letter, raw\_letter in zip(["G","H","I","J"], ["B","C","D","E"]):

s.get\_range(f"{col\_letter}{row}").formulas = [[f"={raw\_letter}{row}/F{row}"]]

s.get\_range(f"K{row}").formulas = [[

f"=-(IF(G{row}=0,0,G{row}\*LN(G{row}))+IF(H{row}=0,0,H{row}\*LN(H{row}))+IF(I{row}=0,0,I{row}\*LN(I{row}))+IF(J{row}=0,0,J{row}\*LN(J{row})))/LN(4)"

]]

# explicit expected rankings/gaps because tie semantics are part of acceptance

s.get\_range("L4:Q6").values = [

["TOP\_TIE","TOP\_TIE","TOP\_TIE","TOP\_TIE",0,0],

["D","I/S/C TIE","I/S/C TIE","I/S/C TIE",24,0],

["D","I","C","S",2,2],

]

s.get\_range("B4:K6").format.number\_format = "0.000000"

s.merge\_cells("A8:Q8")

s.get\_range("A8").values = [["Acceptance Notes"]]

s.get\_range("A8:Q8").format = section\_fmt

notes = [

["G-PC-001","Entropy must equal 1.0; no predominant dimension may be invented."],

["G-PC-002","Entropy must equal 0.0; zero-frequency dimensions remain valid values."],

["G-PC-003","Expected frequencies: .375 / .291666... / .125 / .208333...; ranking D>I>C>S."],

]

s.get\_range("A9:B11").values = notes

s.get\_range("A9:A11").format = subtle\_header\_fmt

s.get\_range("B9:B11").format = body\_wrap

for col, width in {"A":16,"B":10,"C":10,"D":10,"E":10,"F":10,"G":12,"H":12,"I":12,"J":12,"K":14,"L":16,"M":16,"N":16,"O":16,"P":12,"Q":12}.items():

s.get\_range(f"{col}1:{col}15").format.column\_width = width

# ============================================================

# 03\_PC\_INPUTS

# ============================================================

s = wb.worksheets.add("03\_PC\_INPUTS")

s.merge\_cells("A1:E1")

s.get\_range("A1").values = [["PC Semantic-Target Fixtures"]]

s.get\_range("A1:E1").format = title\_fmt

s.get\_range("A3:E3").values = [["Case ID","Item Code","Semantic Target","Weight","Input Level"]]

s.get\_range("A3:E3").format = header\_fmt

pc\_input\_rows = []

# Balanced 6 each

targets1 = ["D"]\*6 + ["I"]\*6 + ["S"]\*6 + ["C"]\*6

targets2 = ["D"]\*24

targets3 = ["D"]\*9 + ["I"]\*7 + ["S"]\*3 + ["C"]\*5

for case\_id, targets in [("G-PC-001",targets1),("G-PC-002",targets2),("G-PC-003",targets3)]:

for item, target in zip(pc\_items, targets):

pc\_input\_rows.append([case\_id,item,target,1,"SEMANTIC\_TARGET"])

s.get\_range(f"A4:E{3+len(pc\_input\_rows)}").values = pc\_input\_rows

s.get\_range(f"A4:E{3+len(pc\_input\_rows)}").format = body\_wrap

s.tables.add(f"A3:E{3+len(pc\_input\_rows)}", True, "PCGoldenInputs")

s.freeze\_panes.freeze\_rows(3)

for col, width in {"A":16,"B":14,"C":18,"D":10,"E":20}.items():

s.get\_range(f"{col}1:{col}80").format.column\_width = width

# ============================================================

# 04\_PRC\_FORCED

# ============================================================

s = wb.worksheets.add("04\_PRC\_FORCED")

s.merge\_cells("A1:I1")

s.get\_range("A1").values = [["PRC Forced Golden Fixtures"]]

s.get\_range("A1:I1").format = title\_fmt

s.get\_range("A3:E3").values = [["Case ID","Item Code","Semantic Modality","Weight","Input Level"]]

s.get\_range("A3:E3").format = header\_fmt

prcf\_rows = []

for case\_id, modalities in [

("G-PRC-F-001", ["V"]\*8),

("G-PRC-F-002", ["V"]\*4 + ["A"]\*3 + ["C"]\*1),

]:

for item, mod in zip(prc\_forced\_items, modalities):

prcf\_rows.append([case\_id,item,mod,1,"SEMANTIC\_TARGET"])

s.get\_range(f"A4:E{3+len(prcf\_rows)}").values = prcf\_rows

s.get\_range(f"A4:E{3+len(prcf\_rows)}").format = body\_wrap

s.tables.add(f"A3:E{3+len(prcf\_rows)}", True, "PRCForcedGoldenInputs")

s.get\_range("G3:I3").values = [["Case ID","Expected Raw V/A/C","Expected Relative V/A/C"]]

s.get\_range("G3:I3").format = header\_fmt

s.get\_range("G4:I5").values = [

["G-PRC-F-001","8 / 0 / 0","1 / 0 / 0"],

["G-PRC-F-002","4 / 3 / 1","0.5 / 0.375 / 0.125"],

]

s.get\_range("G4:I5").format = body\_wrap

for col, width in {"A":18,"B":16,"C":20,"D":10,"E":20,"F":4,"G":18,"H":24,"I":28}.items():

s.get\_range(f"{col}1:{col}25").format.column\_width = width

# ============================================================

# 05\_PRC\_INDEPENDENT

# ============================================================

s = wb.worksheets.add("05\_PRC\_INDEPENDENT")

s.merge\_cells("A1:L1")

s.get\_range("A1").values = [["PRC Independent Golden Fixtures"]]

s.get\_range("A1:L1").format = title\_fmt

s.get\_range("A3:E3").values = [["Case ID","Item Code","V rating","A rating","C rating"]]

s.get\_range("A3:E3").format = header\_fmt

# Case 1: V = [5,5,4,5] => 4.75; A all 4 => 4; C all 3 => 3

# Case 2: all 5

prci\_rows = []

v1, a1, c1 = [5,5,4,5], [4,4,4,4], [3,3,3,3]

v2, a2, c2 = [5,5,5,5], [5,5,5,5], [5,5,5,5]

for case\_id, vs, aas, cs in [

("G-PRC-I-001",v1,a1,c1),

("G-PRC-I-002",v2,a2,c2),

]:

for item, vr, ar, cr in zip(prc\_indep\_items, vs, aas, cs):

prci\_rows.append([case\_id,item,vr,ar,cr])

s.get\_range(f"A4:E{3+len(prci\_rows)}").values = prci\_rows

s.get\_range(f"A4:E{3+len(prci\_rows)}").format = body\_wrap

s.tables.add(f"A3:E{3+len(prci\_rows)}", True, "PRCIndependentGoldenInputs")

s.get\_range("G3:L3").values = [["Case ID","V Mean","A Mean","C Mean","V Norm","A Norm/C Norm"]]

s.get\_range("G3:L3").format = header\_fmt

s.get\_range("G4").values = [["G-PRC-I-001"]]

s.get\_range("G5").values = [["G-PRC-I-002"]]

# Direct formulas over specific source rows

s.get\_range("H4").formulas = [["=AVERAGE(C4:C7)"]]

s.get\_range("I4").formulas = [["=AVERAGE(D4:D7)"]]

s.get\_range("J4").formulas = [["=AVERAGE(E4:E7)"]]

s.get\_range("K4").formulas = [["=((H4-1)/4)\*100"]]

s.get\_range("L4").formulas = [['="A="&TEXT(((I4-1)/4)\*100,"0.00")&" / C="&TEXT(((J4-1)/4)\*100,"0.00")']]

s.get\_range("H5").formulas = [["=AVERAGE(C8:C11)"]]

s.get\_range("I5").formulas = [["=AVERAGE(D8:D11)"]]

s.get\_range("J5").formulas = [["=AVERAGE(E8:E11)"]]

s.get\_range("K5").formulas = [["=((H5-1)/4)\*100"]]

s.get\_range("L5").formulas = [['="A="&TEXT(((I5-1)/4)\*100,"0.00")&" / C="&TEXT(((J5-1)/4)\*100,"0.00")']]

s.merge\_cells("G8:L8")

s.get\_range("G8").values = [["SPECIFICATION REVIEW FLAG"]]

s.get\_range("G8:L8").format = section\_fmt

s.merge\_cells("G9:L12")

s.get\_range("G9").values = [[

"A referência anterior V=4.8 / A=4.7 / C=4.6 não pode ser produzida por 4 ratings inteiros de 1–5, "

"pois as médias possíveis avançam em passos de 0,25. Ela fica preservada apenas como exemplo de "

"métricas derivadas separadas, não como RAW Golden Fixture. Nenhuma regra metodológica foi alterada."

]]

s.get\_range("G9:L12").format = note\_fmt

for col, width in {"A":18,"B":16,"C":12,"D":12,"E":12,"F":4,"G":20,"H":12,"I":12,"J":12,"K":14,"L":28}.items():

s.get\_range(f"{col}1:{col}18").format.column\_width = width

# ============================================================

# 06\_DR\_INPUTS

# ============================================================

s = wb.worksheets.add("06\_DR\_INPUTS")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["DR Golden Fixtures — Canonical Option Inputs"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A3:H3").values = [["Case ID","Item Code","Axis","Selected Option","Points","Axis Raw Expected","Axis Norm Expected","Input Level"]]

s.get\_range("A3:H3").format = header\_fmt

# helpers

def option\_for\_points(mapping, desired):

for opt, pts in mapping.items():

if pts == desired:

return opt

raise ValueError

dr\_rows = []

# G-DR-001 max all axes

# G-DR-002 min all axes

# G-DR-003 raw 9 -> 3 points each

# G-DR-004 only persistence D/D/D

for case\_id, desired\_points\_by\_axis in [

("G-DR-001", {"SPEED":4,"IMPACT":4,"PERSISTENCE":4,"EXTERNALIZATION":4}),

("G-DR-002", {"SPEED":1,"IMPACT":1,"PERSISTENCE":1,"EXTERNALIZATION":1}),

("G-DR-003", {"SPEED":3,"IMPACT":3,"PERSISTENCE":3,"EXTERNALIZATION":3}),

]:

for item, (axis, mapping) in dr\_key.items():

desired = desired\_points\_by\_axis[axis]

opt = option\_for\_points(mapping, desired)

dr\_rows.append([case\_id,item,axis,opt,desired,"", "", "RAW\_OPTION\_ID"])

# persistence only

for item in ["TH-002","TH-010","TH-015"]:

axis, mapping = dr\_key[item]

dr\_rows.append(["G-DR-004",item,axis,"D",mapping["D"],12,100,"RAW\_OPTION\_ID"])

s.get\_range(f"A4:H{3+len(dr\_rows)}").values = dr\_rows

s.get\_range(f"A4:H{3+len(dr\_rows)}").format = body\_wrap

# Fill expected raw/norm for first 36 rows based on case

case\_expected = {

"G-DR-001": (12,100),

"G-DR-002": (3,0),

"G-DR-003": (9,66.66666666666667),

}

for idx, row in enumerate(range(4, 4+len(dr\_rows))):

case = dr\_rows[idx][0]

if case in case\_expected:

raw, norm = case\_expected[case]

s.get\_range(f"F{row}:G{row}").values = [[raw,norm]]

s.tables.add(f"A3:H{3+len(dr\_rows)}", True, "DRGoldenInputs")

s.freeze\_panes.freeze\_rows(3)

for col, width in {"A":18,"B":14,"C":22,"D":16,"E":10,"F":18,"G":20,"H":18}.items():

s.get\_range(f"{col}1:{col}50").format.column\_width = width

# ============================================================

# 07\_FULL\_FIXTURE

# ============================================================

s = wb.worksheets.add("07\_FULL\_FIXTURE")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["G-FULL-001 — Full 56-Response Semantic Integration Fixture"]]

s.get\_range("A1:G1").format = title\_fmt

s.get\_range("A3:G3").values = [["Case ID","Component","Item Code","Input A","Input B","Input C","Input Level"]]

s.get\_range("A3:G3").format = header\_fmt

full\_rows = []

# PC case 3

for item, target in zip(pc\_items, targets3):

full\_rows.append(["G-FULL-001","PC",item,target,"","","SEMANTIC\_TARGET"])

# PRC forced case 2

for item, mod in zip(prc\_forced\_items, ["V"]\*4+["A"]\*3+["C"]):

full\_rows.append(["G-FULL-001","PRC\_FORCED",item,mod,"","","SEMANTIC\_TARGET"])

# PRC indep case 1

for item, vr, ar, cr in zip(prc\_indep\_items, v1, a1, c1):

full\_rows.append(["G-FULL-001","PRC\_INDEPENDENT",item,vr,ar,cr,"RAW\_RATING"])

# DR case 3

for item, (axis, mapping) in dr\_key.items():

opt = option\_for\_points(mapping, 3)

full\_rows.append(["G-FULL-001","DR",item,opt,"","","RAW\_OPTION\_ID"])

s.get\_range(f"A4:G{3+len(full\_rows)}").values = full\_rows

s.get\_range(f"A4:G{3+len(full\_rows)}").format = body\_wrap

s.tables.add(f"A3:G{3+len(full\_rows)}", True, "FullGoldenFixture")

# Expected output summary

start = 3 + len(full\_rows) + 3

s.merge\_cells(f"A{start}:G{start}")

s.get\_range(f"A{start}").values = [["Expected Output Summary"]]

s.get\_range(f"A{start}:G{start}").format = section\_fmt

summary = [

["PC","9D/7I/3S/5C","rel .375/.291666.../.125/.208333...","rank D>I>C>S","GAP12=2","GAP23=2","entropy≈0.9477867203"],

["PRC Forced","4V/3A/1C","rel .5/.375/.125","","","",""],

["PRC Independent","V=4.75","A=4","C=3","norm 93.75","75","50"],

["DR","Speed=9","Impact=9","Persistence=9","Externalization=9","all norm","66.666..."],

]

s.get\_range(f"A{start+1}:G{start+4}").values = summary

s.get\_range(f"A{start+1}:G{start+4}").format = body\_wrap

for col, width in {"A":18,"B":20,"C":18,"D":18,"E":18,"F":18,"G":22}.items():

s.get\_range(f"{col}1:{col}{start+6}").format.column\_width = width

s.freeze\_panes.freeze\_rows(3)

# ============================================================

# 08\_FLOW\_VERSION\_SECURITY

# ============================================================

s = wb.worksheets.add("08\_FLOW\_VER\_SEC")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Flow, Versioning & Security Acceptance Cases"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A3:H3").values = [["Case ID","Class","Precondition","Action","Expected Status/Output","Error Code","Severity","Acceptance Rule"]]

s.get\_range("A3:H3").format = header\_fmt

fvs\_rows = [

["FLOW-001","FLOW","55/56 scored responses saved","Submit assessment","Remain not completed","ASSESSMENT\_NOT\_READY","BLOCKING","No score run created."],

["FLOW-002","FLOW","56/56 + SELF/feedback requirements satisfied","Submit assessment","COMPLETED","","BLOCKING","Submit transactional; enqueue score once."],

["FLOW-003","FLOW","Assessment COMPLETED","Attempt edit response","No mutation","ASSESSMENT\_ALREADY\_COMPLETED","BLOCKING","RAW/final response remains unchanged."],

["FLOW-004","FLOW","First submit already committed","Repeat identical submit","Same effective completion","","CRITICAL\_PILOT","Idempotent; no duplicate effective scoring run/job."],

["FLOW-005","FLOW","Interrupted after presented options randomized","Resume","Same presentation instance/order","","CRITICAL\_PILOT","No re-randomization of prior presentation."],

["VER-001","VERSIONING","Assessment manifest=MGP1/BANK0.2","Run incompatible scoring version","No score output","VERSION\_MISMATCH","BLOCKING","Compatibility validator blocks run."],

["VER-002","VERSIONING","Historical RAW + old scoring run exist","Run newer scoring version","New immutable run","","BLOCKING","Old run preserved; no overwrite."],

["VER-003","IMMUTABILITY","Published item text version exists","Attempt in-place edit","Rejected","","BLOCKING","Create new text/version instead."],

["SEC-001","SECURITY","Participant API request","Return scenario payload","No score\_target/facet/construct/reverse key","","BLOCKING","Public payload sanitized."],

["SEC-002","SECURITY","Researcher export default","Export dataset","Pseudonymized","","CRITICAL\_PILOT","No direct identity fields."],

["SEC-003","SECURITY","User lacks identity.export permission","Request identified export","Denied","UNAUTHORIZED\_ACTION","BLOCKING","Authorization server-side and audited."],

]

s.get\_range("A4:H14").values = fvs\_rows

s.get\_range("A4:H14").format = body\_wrap

s.tables.add("A3:H14", True, "FlowVersionSecurityCases")

for col, width in {"A":16,"B":18,"C":40,"D":38,"E":34,"F":30,"G":18,"H":46}.items():

s.get\_range(f"{col}1:{col}18").format.column\_width = width

# ============================================================

# 09\_INTERP\_FUTURE

# ============================================================

s = wb.worksheets.add("09\_INTERP\_FUTURE")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Future Motor Golden Cases — Artificial Classified Evidence"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A3:H3").values = [["Case ID","Artificial Evidence","Expected UIG/Synthesis","Expected Claim/Behavior","Forbidden Output","Phase","Severity","Note"]]

s.get\_range("A3:H3").format = header\_fmt

interp\_rows = [

["INT-001","Autonomy=CONSISTENT; Criterion=CONSISTENT","DEL-001 + DEL-002 + SIN-DEL-001","CLM-DEL-S01-AUTONOMY-WITH-CRITERIA","","C","FUTURE","Use artificial evidence; no RAW dependency."],

["INT-002","PC.D=RELEVANT; contextual confrontation=LOW","Generic D conflict rule suppressed","Contextual precedence wins","Direct-conflict claim from D alone","C","FUTURE","Specific context overrides general dimension."],

["INT-003","DR.IMPACT=HIGH; DR.EXTERNALIZATION=LOW","FDB/PRS synthesis allowed","External behavior may understate declared impact","Repression; hidden feelings; dishonesty","C","FUTURE","Authorized language only."],

["INT-004","Two metrics from same source family overlap","No automatic strengthening","Evidence level unchanged","Artificial evidence upgrade","C","FUTURE","Independence check required."],

["INT-005","PRC.V Forced + Independent converge","Convergence may be registered","Sources remain separate","Merged PRC master score","C","FUTURE","No score fusion."],

["INT-006","Same DR axis classified HIGH and LOW","Integrity/collision handling","No strong UIG","Strong conclusion","C","FUTURE","Contradiction suppresses force."],

["INT-007","Evidence below minimum","No UIG","Silence","Generic filler claim","C","FUTURE","Silence is valid output."],

["INT-008","Requested GOOD\_LEADER / JOB\_FIT / HONEST\_PERSON","Block rules","FORBIDDEN\_CLAIM","Any of requested claims","C","FUTURE","Global Forbidden Claim Registry."],

["SYN-001","Two overlapping visual recommendations","Semantic compression","One recommendation","Duplicate recommendations","C","FUTURE","Principle of Interpretive Compression."],

["SYN-002","Visual and auditory both relevant; no dominance rule","Multimodal synthesis","Balanced/multimodal guidance","Invented predominant modality","C","FUTURE","No forced winner."],

]

s.get\_range("A4:H13").values = interp\_rows

s.get\_range("A4:H13").format = body\_wrap

s.tables.add("A3:H13", True, "FutureInterpretationGoldenCases")

for col, width in {"A":16,"B":42,"C":38,"D":42,"E":36,"F":10,"G":14,"H":46}.items():

s.get\_range(f"{col}1:{col}18").format.column\_width = width

# ============================================================

# 10\_ACCEPTANCE\_GATE

# ============================================================

s = wb.worksheets.add("10\_ACCEPTANCE\_GATE")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Phase A Golden Acceptance Gate"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A3:H3").values = [["Gate Item","Scope","Requirement","Pass Condition","Blocks O0?","Owner","Evidence","Status"]]

s.get\_range("A3:H3").format = header\_fmt

gate\_rows = [

["GA-001","Score Unit","All applicable BLOCKING score cases","100% PASS","YES","Tech + MGH","CI test report","PENDING"],

["GA-002","Score Integration","G-FULL-001 at semantic target level","PASS","YES","Tech + MGH","integration test","PENDING"],

["GA-003","Raw Option E2E","PC/PRC option\_id fixtures","PASS after BANK recovery","YES before final instrument release","Tech + MGH","E2E test","WAITING\_BANK"],

["GA-004","DR E2E","Canonical DR option fixtures","100% PASS","YES","Tech + MGH","CI test report","PENDING"],

["GA-005","Flow","FLOW-001..005 applicable cases","All BLOCKING + essential CRITICAL PASS","YES","Tech","E2E report","PENDING"],

["GA-006","Versioning","VER-001..003","100% PASS","YES","Tech","integration report","PENDING"],

["GA-007","Security","SEC-001..003","100% BLOCKING PASS","YES","Tech","security test report","PENDING"],

["GA-008","Future Motor","INT/SYN cases","NOT REQUIRED FOR PHASE A","NO","Future C","N/A","DEFERRED"],

]

s.get\_range("A4:H11").values = gate\_rows

s.get\_range("A4:H11").format = body\_wrap

s.tables.add("A3:H11", True, "GoldenAcceptanceGate")

for row in range(4,12):

status = gate\_rows[row-4][7]

if status == "WAITING\_BANK":

s.get\_range(f"H{row}").format.fill = LIGHT\_GOLD

elif status == "DEFERRED":

s.get\_range(f"H{row}").format.fill = LIGHT\_BLUE

else:

s.get\_range(f"H{row}").format.fill = LIGHT\_RED

for col, width in {"A":14,"B":22,"C":42,"D":36,"E":16,"F":20,"G":30,"H":18}.items():

s.get\_range(f"{col}1:{col}15").format.column\_width = width

# ============================================================

# 11\_SPEC\_FLAGS

# ============================================================

s = wb.worksheets.add("11\_SPEC\_FLAGS")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["Specification Flags Discovered During Golden Dataset Consolidation"]]

s.get\_range("A1:G1").format = title\_fmt

s.get\_range("A3:G3").values = [["Flag ID","Source","Issue","Why It Matters","Current Decision","Blocks","Owner"]]

s.get\_range("A3:G3").format = header\_fmt

flags = [

[

"FLAG-GOLDEN-001",

"Prior GOLDEN-P1.0 note",

"Independent PRC example V=4.8 / A=4.7 / C=4.6",

"With exactly 4 integer ratings from 1–5 per modality, possible means occur in increments of 0.25; 4.8/4.7/4.6 cannot be generated from RAW P1.0.",

"Preserve only as DERIVED-INPUT separation example. Do not use as raw scoring fixture. Methodology unchanged pending formal review.",

"Does not block O0 scoring",

"MGH"

]

]

s.get\_range("A4:G4").values = flags

s.get\_range("A4:G4").format = note\_fmt

for col, width in {"A":18,"B":28,"C":38,"D":60,"E":58,"F":26,"G":16}.items():

s.get\_range(f"{col}1:{col}8").format.column\_width = width

# ============================================================

# Compact verification & export

# ============================================================

# Inspect key score ranges

check\_pc = wb.inspect({

"kind": "table",

"range": "02\_PC\_EXPECTED!A1:Q6",

"include": "values,formulas",

"table\_max\_rows": 10,

"table\_max\_cols": 17,

})

print(check\_pc.ndjson)

check\_prc = wb.inspect({

"kind": "table",

"range": "05\_PRC\_INDEPENDENT!A1:L12",

"include": "values,formulas",

"table\_max\_rows": 15,

"table\_max\_cols": 12,

})

print(check\_prc.ndjson)

errors = wb.inspect({

"kind": "match",

"search\_term": "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options": {"use\_regex": True, "max\_results": 200},

"summary": "final formula error scan",

})

print(errors.ndjson)

xlsx\_path = "/mnt/data/MGH\_ANX-015\_GOLDEN-P1.0\_Canonical\_Dataset\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(xlsx\_path)

# -----------------------------

# Machine-readable companion JSON

# -----------------------------

json\_payload = {

"dataset\_code": "GOLDEN-P1.0",

"document\_version": "0.1",

"master\_baseline": "MGH-MASTER-P1.0-RC1",

"instrument\_version": "MGH-P1.0",

"scoring\_version": "SCORE-P1.0",

"item\_bank\_version": "BANK-0.2",

"status": "PILOT\_BASELINE\_ACCEPTANCE\_FIXTURE\_PACK",

"notes": [

"PC and PRC Forced fixtures use semantic targets until BANK-0.2 option\_id mappings are recovered.",

"DR fixtures use canonical option letters because DR order/key is fixed in P1.0.",

"All BLOCKING cases applicable to Phase A must pass before O0.",

"PRC independent 4.8/4.7/4.6 is retained only as derived-input review note; it is not a valid RAW P1.0 fixture."

],

"case\_catalog": [

{

"case\_id": r[0],

"class": r[1],

"component": r[2],

"scenario": r[3],

"severity": r[4],

"fixture\_status": r[5],

"bank\_dependency": r[6],

"expected\_behavior": r[7],

} for r in case\_catalog

],

"pc": {

"cases": {

"G-PC-001": {"raw":{"D":6,"I":6,"S":6,"C":6},"relative":{"D":0.25,"I":0.25,"S":0.25,"C":0.25},"entropy":1.0,"ranking":"TOP\_TIE","gap12":0,"gap23":0},

"G-PC-002": {"raw":{"D":24,"I":0,"S":0,"C":0},"relative":{"D":1.0,"I":0.0,"S":0.0,"C":0.0},"entropy":0.0,"ranking":"D > I/S/C tie","gap12":24,"gap23":0},

"G-PC-003": {"raw":{"D":9,"I":7,"S":3,"C":5},"relative":{"D":0.375,"I":7/24,"S":0.125,"C":5/24},"entropy":pc\_entropy([9,7,3,5]),"ranking":"D>I>C>S","gap12":2,"gap23":2},

}

},

"prc\_forced": {

"G-PRC-F-001": {"raw":{"V":8,"A":0,"C":0},"relative":{"V":1.0,"A":0.0,"C":0.0}},

"G-PRC-F-002": {"raw":{"V":4,"A":3,"C":1},"relative":{"V":0.5,"A":0.375,"C":0.125}},

},

"prc\_independent": {

"G-PRC-I-001": {"ratings":{"V":[5,5,4,5],"A":[4,4,4,4],"C":[3,3,3,3]},"means":{"V":4.75,"A":4.0,"C":3.0},"normalized":{"V":93.75,"A":75.0,"C":50.0}},

"G-PRC-I-002": {"ratings":{"V":[5,5,5,5],"A":[5,5,5,5],"C":[5,5,5,5]},"means":{"V":5.0,"A":5.0,"C":5.0},"normalized":{"V":100.0,"A":100.0,"C":100.0}},

},

"dr": {

"G-DR-001": {"expected\_axis\_raw":12,"expected\_axis\_norm":100.0},

"G-DR-002": {"expected\_axis\_raw":3,"expected\_axis\_norm":0.0},

"G-DR-003": {"expected\_axis\_raw":9,"expected\_axis\_norm":66.66666666666667},

"G-DR-004": {"axis":"PERSISTENCE","options":["D","D","D"],"expected\_raw":12,"expected\_norm":100.0},

"G-DR-005": {"config":{"randomizable":True},"expected\_error":"INSTRUMENT\_CONFIGURATION\_ERROR"},

},

"flow\_version\_security": [

{"case\_id":r[0],"class":r[1],"precondition":r[2],"action":r[3],"expected":r[4],"error\_code":r[5],"severity":r[6],"acceptance\_rule":r[7]}

for r in fvs\_rows

],

"spec\_flags": [

{

"flag\_id":"FLAG-GOLDEN-001",

"issue":"PRC Independent means 4.8/4.7/4.6 cannot arise from four integer 1–5 ratings per modality.",

"decision":"Treat as derived-input separation example only, not raw scoring fixture; methodology unchanged pending review."

}

],

}

json\_path = "/mnt/data/MGH\_ANX-015\_GOLDEN-P1.0\_fixture\_manifest\_v0.1.json"

with open(json\_path, "w", encoding="utf-8") as f:

json.dump(json\_payload, f, ensure\_ascii=False, indent=2)

# Render a compact visual preview

preview\_path = "/mnt/data/MGH\_ANX-015\_preview.png"

wb.render({"sheet\_name":"01\_CASE\_CATALOG","range":"A1:H16","scale":1.2}).save(preview\_path)

print(xlsx\_path)

print(json\_path)

print(preview\_path)

{"kind":"table","sheet":"02\_PC\_EXPECTED","address":"A1:Q6","rows":6,"cols":17,"values":[["PC Golden Cases — Expected Outputs",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["Case ID","D raw","I raw","S raw","C raw","Total","D rel","I rel","S rel","C rel","Entropy","Rank 1","Rank 2","Rank 3","Rank 4","GAP12","GAP23"],["G-PC-001",6,6,6,6,24,0.25,0.25,0.25,0.25,1,"TOP\_TIE","TOP\_TIE","TOP\_TIE","TOP\_TIE",0,0],["G-PC-002",24,0,0,0,24,1,0,0,0,0,"D","I/S/C TIE","I/S/C TIE","I/S/C TIE",24,0],["G-PC-003",9,7,3,5,24,0.375,0.2916666666666667,0.125,0.20833333333333334,0.9477867202775715,"D","I","C","S",2,2]]}

{"kind":"table","sheet":"05\_PRC\_INDEPENDENT","address":"A1:L12","rows":12,"cols":12,"values":[["PRC Independent Golden Fixtures",null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null],["Case ID","Item Code","V rating","A rating","C rating",null,"Case ID","V Mean","A Mean","C Mean","V Norm","A Norm/C Norm"],["G-PRC-I-001","PRC-004R",5,4,3,null,"G-PRC-I-001",4.75,4,3,93.75,"A=75.00 / C=50.00"],["G-PRC-I-001","PRC-006R",5,4,3,null,"G-PRC-I-002",5,5,5,100,"A=100.00 / C=100.00"],["G-PRC-I-001","PRC-010I",4,4,3,null,null,null,null,null,null,null],["G-PRC-I-001","PRC-014I",5,4,3,null,null,null,null,null,null,null],["G-PRC-I-002","PRC-004R",5,5,5,null,"SPECIFICATION REVIEW FLAG",null,null,null,null,null],["G-PRC-I-002","PRC-006R",5,5,5,null,"A referência anterior V=4.8 / A=4.7 / C=4.6 não pode ser produzida por 4 ratings inteiros de 1–5, pois as médias possíveis avançam em passos de 0,25. Ela fica preservada apenas como exemplo de métricas derivadas separadas, não como RAW Golden Fixture. Nenhuma regra metodológica foi alterada.",null,null,null,null,null],["G-PRC-I-002","PRC-010I",5,5,5,null,null,null,null,null,null,null],["G-PRC-I-002","PRC-014I",5,5,5,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

/mnt/data/MGH\_ANX-015\_GOLDEN-P1.0\_Canonical\_Dataset\_v0.1.xlsx

/mnt/data/MGH\_ANX-015\_GOLDEN-P1.0\_fixture\_manifest\_v0.1.json

/mnt/data/MGH\_ANX-015\_preview.png

Avançamos e concluí o próximo anexo crítico da Fase 3.3:

# ANX-015 — GOLDEN-P1.0 ✅

## Canonical Golden Dataset / Acceptance Fixture Pack

Também gerei uma versão estruturada para uso técnico:

O arquivo contém casos de teste para:

* PC: equilíbrio 6/6/6/6, concentração 24D e 9D/7I/3S/5C;
* PRC Forced;
* PRC Independent;
* DR nos quatro eixos;
* fixture integrado com as 56 respostas;
* submit incompleto e completo;
* edição após conclusão;
* idempotência;
* resume e preservação da randomização;
* incompatibilidade de versões;
* imutabilidade;
* exposição indevida de score no frontend;
* exportação pseudonimizada;
* permissões;
* Golden Cases futuros do Motor de Governo™.

Também criei o Gate de Aceite da Fase A, deixando explícito que os casos BLOCKING aplicáveis precisam passar antes da Onda 0.

## Uma descoberta importante

Durante a consolidação apareceu uma inconsistência que vale registrar.

Tínhamos anteriormente um exemplo de PRC Independent com médias:

V = 4,8
A = 4,7
C = 4,6

Mas no P1.0 cada modalidade possui exatamente 4 respostas inteiras de 1 a 5. Portanto, as médias possíveis avançam em intervalos de 0,25.

Ou seja, 4,8 / 4,7 / 4,6 não podem ser produzidos por respostas RAW válidas do P1.0.

Não alterei nenhuma regra metodológica. Registrei isso formalmente como:

FLAG-GOLDEN-001

e mantive esse exemplo apenas como eventual teste de métrica derivada, nunca como fixture RAW.

Esse é justamente o tipo de inconsistência que os Golden Cases devem descobrir antes de o software chegar ao participante.

# Status atualizado da Fase 3.3

| Anexo | Status |
| --- | --- |
| ANX-001 — Release Manifest | ✅ |
| ANX-002 — Compatibility Matrix | ✅ |
| ANX-003 — BANK-0.2 | 🟡 textos literais pendentes |
| ANX-004 — Application Sequence | ✅ |
| ANX-005 — SCORE-P1.0 Scoring Matrix | ✅ |
| ANX-015 — GOLDEN-P1.0 | ✅ |

Agora o desenvolvedor já tem três peças extremamente fortes em conjunto:

Application Sequence + Scoring Matrix + Golden Dataset

Isso permite não apenas programar a lógica, mas provar objetivamente se a implementação está correta.

## Próximo passo

Seguimos agora para:

# ANX-016 — Requirement Traceability Matrix™

### RTM-P1.0

Ele ligará formalmente:

requisito → documento de origem → teste → severidade → componente técnico → evidência de aceite.

É o arquivo que permitirá, no futuro, olhar para algo como:

“DR não pode randomizar”

e descobrir imediatamente:

onde isso foi especificado, qual teste verifica, quem implementou e se passou na homologação.

Depois dele entramos no ANX-017 — Data Dictionary, igualmente importante para o banco de dados e para o desenvolvedor.

from artifact\_tool import Workbook, SpreadsheetFile

import os, json

# ============================================================

# MGH ANX-016 — RTM-P1.0 Requirement Traceability Matrix

# ============================================================

wb = Workbook.create()

# -----------------------------

# Visual system

# -----------------------------

NAVY = "#17324D"

BLUE = "#2F5D8C"

TEAL = "#2B6F6D"

GOLD = "#C89B3C"

RED = "#A63D40"

GREEN = "#2E6B4F"

WHITE = "#FFFFFF"

LIGHT\_BLUE = "#EAF2F8"

LIGHT\_TEAL = "#E8F3F2"

LIGHT\_GOLD = "#F8F1DF"

LIGHT\_RED = "#FBEAEC"

LIGHT\_GREEN = "#EAF4EE"

LIGHT\_GRAY = "#F3F5F7"

GRAY = "#5B6573"

title\_fmt = {

"fill": NAVY,

"font": {"bold": True, "color": WHITE, "size": 16},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

section\_fmt = {

"fill": BLUE,

"font": {"bold": True, "color": WHITE, "size": 11},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

header\_fmt = {

"fill": TEAL,

"font": {"bold": True, "color": WHITE},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

}

subtle\_header\_fmt = {

"fill": LIGHT\_BLUE,

"font": {"bold": True, "color": NAVY},

"horizontal\_alignment": "left",

"vertical\_alignment": "center",

}

note\_fmt = {

"fill": LIGHT\_GOLD,

"font": {"color": "#6B531C"},

"wrap\_text": True,

"vertical\_alignment": "top",

}

body\_wrap = {"wrap\_text": True, "vertical\_alignment": "top"}

# -----------------------------

# Source registry

# -----------------------------

source\_docs = [

["SRC-001","MGH-EXEC-BRIEF-0.1","Executive Product Brief","0.1","CONTENT\_COMPLETE","Phase A product purpose and boundaries"],

["SRC-002","MGH-FUNC-SPEC-0.1","Functional Specification","0.1","CONTENT\_COMPLETE","Participant/admin functional requirements"],

["SRC-003","MGH-ARCH-DATA-0.1","Architecture & Data Model","0.1","CONTENT\_COMPLETE","Architecture, entities, runs, data integrity"],

["SRC-004","MGH-INST-SPEC-0.1","MGH-P1.0 Instrument Specification","0.1","CONTENT\_COMPLETE","48 scenarios, application behavior, randomization"],

["SRC-005","MGH-SCORE-SPEC-0.1","Scoring Specification","0.1","CONTENT\_COMPLETE","Deterministic scoring rules"],

["SRC-006","MGH-O0-PROTOCOL-0.1","O0 Research & Pilot Protocol","0.1","CONTENT\_COMPLETE","Pilot operations and research"],

["SRC-007","MGH-TEST-SPEC-0.1","Golden Cases & Acceptance Tests","0.1","CONTENT\_COMPLETE","Acceptance and Golden Cases"],

["SRC-008","MGH-SEC-NFR-0.1","Security, Privacy & NFR","0.1","CONTENT\_COMPLETE","Security, privacy, performance, environments"],

["SRC-009","MGH-INTERP-SPEC-0.1","Interpretation Engine Specification","0.1","CONTENT\_COMPLETE","Future Evidence/UIG/Claim/Action engine"],

["SRC-010","MGH-ROADMAP-0.1","Technical Roadmap & Scope Control","0.1","CONTENT\_COMPLETE","Phase A–E scope control"],

["SRC-011","MGH-OPEN-DECISION-0.1","Open Items & Decision Log","0.1","CONTENT\_COMPLETE","Open items and frozen decisions"],

["SRC-012","MGH-MEETING-BRIEF-0.1","Developer Meeting Brief","0.1","CONTENT\_COMPLETE","Developer handoff and contracting expectations"],

["SRC-A04","MGH-ANX-004","MGH-P1.0 Application Sequence","0.1","FROZEN\_FOR\_PHASE\_A","Canonical scenario sequence"],

["SRC-A05","MGH-ANX-005","SCORE-P1.0 Scoring Matrix","0.1","PILOT\_BASELINE","Canonical scoring matrix"],

["SRC-A15","MGH-ANX-015","GOLDEN-P1.0 Canonical Dataset","0.1","PILOT\_BASELINE","Acceptance fixtures"],

]

# -----------------------------

# Requirement catalog

# Columns:

# ID, Domain, Requirement, Source, Source Detail, Phase, Priority, Severity,

# Component, Test ID, Acceptance Criteria, Evidence, Owner, Status, Notes

# -----------------------------

reqs = []

def add(rid, domain, requirement, source, detail, phase, priority, severity,

component, test\_id, acceptance, evidence, owner="Tech + MGH",

status="NOT\_IMPLEMENTED", notes=""):

reqs.append([rid,domain,requirement,source,detail,phase,priority,severity,

component,test\_id,acceptance,evidence,owner,status,notes])

# --- Product / scope ---

add("REQ-PROD-001","PRODUCT","Phase A must support O0 pilot integrity, not full commercial MGH.",

"SRC-001","Pilot Core objective","A","P0","BLOCKING","Product Scope","SCOPE-001",

"No commercial-only feature is required to complete Phase A.","Scope review","MGH","FROZEN")

add("REQ-PROD-002","PRODUCT","O0 participant must not receive automatic profile/report after completion.",

"SRC-001","O0 participant journey","A","P0","BLOCKING","Participant App","FLOW-006",

"Completion screen confirms submission only; no interpretation/report exposed.","E2E","Tech + MGH")

add("REQ-PROD-003","PRODUCT","AI must not be required for Phase A scoring or interpretation.",

"SRC-001","AI boundary","A","P0","BLOCKING","Architecture","ARCH-001",

"Phase A operates fully with deterministic code and without LLM dependency.","Architecture review","Tech + MGH","FROZEN")

add("REQ-PROD-004","PRODUCT","Web app is the initial delivery model; native apps are out of Phase A.",

"SRC-010","Phase A exclusions","A","P2","NON\_BLOCKING","Scope","SCOPE-002",

"Responsive web app delivered; native iOS/Android not required.","Scope review","MGH","FROZEN")

# --- Participant flow ---

add("REQ-FLOW-001","FLOW","Participant accesses assessment through secure unpredictable individual token.",

"SRC-002","Secure access flow","A","P0","BLOCKING","Assessment Access","SEC-TOKEN-001",

"Sequential/predictable IDs are not accepted; revoked/invalid token is denied.","Security/E2E","Tech")

add("REQ-FLOW-002","FLOW","Invalid assessment link returns neutral message and no sensitive detail.",

"SRC-002","Invalid access behavior","A","P1","CRITICAL\_PILOT","Participant App","FLOW-007",

"No participant identity, assessment status internals, or score information leaked.","E2E","Tech")

add("REQ-FLOW-003","FLOW","Completed assessment link shows completed state only and never results in O0.",

"SRC-002","Completed link behavior","A","P0","BLOCKING","Participant App","FLOW-008",

"Re-opening completed token cannot expose/edit answers or display report.","E2E","Tech")

add("REQ-FLOW-004","FLOW","Consent must be versioned and recorded before assessment begins.",

"SRC-002","Consent flow","A","P0","BLOCKING","Consent Module","FLOW-009",

"Assessment cannot enter active response flow without accepted consent version.","Integration","Tech + MGH")

add("REQ-FLOW-005","FLOW","Professional context is captured for the assessment, not stored as permanent identity truth.",

"SRC-003","Professional context entity","A","P1","CRITICAL\_PILOT","Data Model","DATA-CTX-001",

"Context record is linked to assessment/version and can differ across reassessments.","Data model test","Tech")

add("REQ-FLOW-006","FLOW","Participant sees one scenario per screen.",

"SRC-002","Participant UX","A","P1","CRITICAL\_PILOT","Participant App","FLOW-010",

"No multi-page survey dump; one active scenario view at a time.","E2E","Tech + MGH")

add("REQ-FLOW-007","FLOW","Progress is based on 48 scenarios, not 56 scored responses.",

"SRC-A04","Progress rule","A","P0","BLOCKING","Participant App","APPSEQ-001",

"Progress indicator is x/48 and reaches 48 only after the 48th scenario.","E2E","Tech")

add("REQ-FLOW-008","FLOW","Autosave must persist responses and show discreet save state.",

"SRC-002","Autosave","A","P0","BLOCKING","Response Engine","FLOW-011",

"Saved answer survives reload/session interruption; failure is visible and cannot silently advance.","E2E/Integration","Tech")

add("REQ-FLOW-009","FLOW","Resume returns participant to first incomplete scenario and preserves previous presentation order.",

"SRC-002","Resume behavior","A","P0","BLOCKING","Assessment Engine","FLOW-005",

"Previously randomized option presentation is identical after resume.","Golden/E2E","Tech")

add("REQ-FLOW-010","FLOW","Participant may navigate backward before final submit.",

"SRC-002","Navigation","A","P1","CRITICAL\_PILOT","Participant App","FLOW-012",

"Back navigation works before completion and revisions are captured.","E2E","Tech")

add("REQ-FLOW-011","FLOW","Final submit validates completeness and locks responses transactionally.",

"SRC-002","Final submit","A","P0","BLOCKING","Assessment Engine","FLOW-001|FLOW-002",

"55/56 fails; complete assessment commits once and becomes COMPLETED.","Golden/E2E","Tech")

add("REQ-FLOW-012","FLOW","Second submit is idempotent and must not create duplicate effective scoring jobs.",

"SRC-002","Submit idempotency","A","P0","BLOCKING","Assessment Engine","FLOW-004",

"Repeated identical submit yields one effective completion/score job.","Golden/Integration","Tech")

add("REQ-FLOW-013","FLOW","Responses cannot be edited after COMPLETED.",

"SRC-002","Completion lock","A","P0","BLOCKING","Response Engine","FLOW-003",

"Edit attempt after completion returns ASSESSMENT\_ALREADY\_COMPLETED and preserves RAW.","Golden/E2E","Tech")

add("REQ-FLOW-014","FLOW","SELF-01..08 occurs only after scenario 48 and does not enter main score.",

"SRC-A04","Post-flow rule","A","P0","BLOCKING","Participant App / Score Engine","APPSEQ-012",

"SELF unavailable before 48; Score Engine ignores SELF responses.","E2E/Unit","Tech + MGH")

add("REQ-FLOW-015","FLOW","Post-test feedback is research data, not lie detection.",

"SRC-006","Participant feedback","A","P1","CRITICAL\_PILOT","Research Module","O0-001",

"Feedback fields stored independently and never converted to honesty/sincerity score.","Integration","Tech + MGH")

# --- Instrument ---

add("REQ-INST-001","INSTRUMENT","Instrument P1.0 contains exactly 48 scenarios in the frozen sequence.",

"SRC-A04","Application sequence","A","P0","BLOCKING","Instrument Registry","APPSEQ-001",

"Validator confirms 48 scenarios, PC-001 first, PC-011R last, exact order.","Golden/Validator","Tech + MGH")

add("REQ-INST-002","INSTRUMENT","P1.0 contains 24 PC forced-choice scenarios.",

"SRC-A04","Type counts","A","P0","BLOCKING","Instrument Registry","APPSEQ-004",

"Validator count=24 and all type PC\_FORCED\_CHOICE.","Golden/Validator","Tech + MGH")

add("REQ-INST-003","INSTRUMENT","P1.0 contains 8 PRC forced-choice scenarios.",

"SRC-A04","Type counts","A","P0","BLOCKING","Instrument Registry","APPSEQ-005",

"Validator count=8 and all type PRC\_FORCED\_CHOICE.","Golden/Validator","Tech + MGH")

add("REQ-INST-004","INSTRUMENT","P1.0 contains 4 PRC independent groups producing 12 ratings.",

"SRC-A04","Type counts","A","P0","BLOCKING","Instrument Registry","APPSEQ-006",

"Validator count=4 groups and 12 scored ratings.","Golden/Validator","Tech + MGH")

add("REQ-INST-005","INSTRUMENT","P1.0 contains 12 DR scenarios.",

"SRC-A04","Type counts","A","P0","BLOCKING","Instrument Registry","APPSEQ-007",

"Validator count=12 DR\_ORDINAL.","Golden/Validator","Tech + MGH")

add("REQ-INST-006","INSTRUMENT","PC option order may randomize but scoring must use canonical option\_id.",

"SRC-004","PC randomization","A","P0","BLOCKING","Instrument/Score","G-PC-004",

"Changing display order does not change semantic score.","Golden/E2E","Tech + MGH")

add("REQ-INST-007","INSTRUMENT","PRC forced option order may randomize but scoring must use canonical modality mapping.",

"SRC-004","PRC forced randomization","A","P0","BLOCKING","Instrument/Score","PRC-RAND-001",

"Changing display order does not change V/A/C score.","Golden/E2E","Tech + MGH")

add("REQ-INST-008","INSTRUMENT","PRC independent V/A/C block order may randomize but scale direction remains fixed.",

"SRC-004","PRC independent behavior","A","P0","BLOCKING","Participant App","PRC-RAND-002",

"Block order may differ; numeric scale semantics remain identical.","E2E","Tech + MGH")

add("REQ-INST-009","INSTRUMENT","DR option order must never randomize in P1.0.",

"SRC-A04","DR rule","A","P0","BLOCKING","Instrument Registry","G-DR-005",

"randomizable=true causes INSTRUMENT\_CONFIGURATION\_ERROR.","Golden/Validator","Tech + MGH")

add("REQ-INST-010","INSTRUMENT","Six Relation Groups are internal research metadata and invisible to participant.",

"SRC-A04","RG registry","A","P1","CRITICAL\_PILOT","Instrument Registry","APPSEQ-013",

"RG IDs absent from participant payload/UI.","E2E","Tech + MGH")

add("REQ-INST-011","INSTRUMENT","Published instrument/item versions are immutable.",

"SRC-003","Versioning principle","A","P0","BLOCKING","Instrument Registry","VER-003",

"Published item text cannot be edited in place; new version required.","Golden/Integration","Tech + MGH")

add("REQ-INST-012","INSTRUMENT","P1.0 item text and option text must come from canonical BANK-0.2, never reconstruction.",

"SRC-004","Canonical bank rule","A","P0","BLOCKING","Instrument Registry","BANK-001",

"Production publication blocked until canonical literal text and mappings are supplied.","Source validation","MGH","WAITING\_BANK")

# --- Responses / events / raw ---

add("REQ-DATA-001","DATA","RAW response data is immutable.",

"SRC-003","RAW layer","A","P0","BLOCKING","Response Engine","DATA-RAW-001",

"No administrative edit of raw response; correction uses new event/status, not overwrite.","Integration","Tech")

add("REQ-DATA-002","DATA","Current response state and response-event history are stored separately.",

"SRC-003","Response + ResponseEvent","A","P0","BLOCKING","Response Engine","DATA-EVT-001",

"Final answer is queryable while first→final/revisions remain auditable.","Integration","Tech")

add("REQ-DATA-003","DATA","Option presentation order is persisted per assessment/scenario.",

"SRC-003","OPTION\_PRESENTATION","A","P0","BLOCKING","Response Engine","FLOW-005",

"Resume reproduces exact option order previously shown.","Golden/E2E","Tech")

add("REQ-DATA-004","DATA","Technical identifiers use UUIDs; human-readable codes are separate.",

"SRC-003","Entity identity","A","P1","CRITICAL\_PILOT","Data Model","DATA-ID-001",

"Primary technical IDs are non-sequential UUID-like values.","Schema review","Tech")

add("REQ-DATA-005","DATA","Identity Vault is separated from assessment/scoring data.",

"SRC-003","Identity separation","A","P0","BLOCKING","Identity & Access","SEC-ID-001",

"Score/Evidence modules do not require participant name/email/phone.","Architecture/Security test","Tech")

add("REQ-DATA-006","DATA","Scoring runs are immutable and versioned.",

"SRC-003","SCORING\_RUN","A","P0","BLOCKING","Score Engine","VER-002",

"Re-scoring creates a new run; old run remains unchanged.","Golden/Integration","Tech")

add("REQ-DATA-007","DATA","Release Manifest binds component versions to each assessment.",

"SRC-003","Release manifest","A","P0","BLOCKING","Version Module","VER-001",

"Assessment stores instrument, bank, scoring and relevant release versions.","Integration","Tech + MGH")

add("REQ-DATA-008","DATA","Important lineage is relational and traceable, not stored only as opaque JSON.",

"SRC-003","Lineage rule","A","P1","CRITICAL\_PILOT","Data Model","DATA-LIN-001",

"Score output can be traced to contributing response/item/version records.","Integration","Tech")

add("REQ-DATA-009","DATA","Published rules/configuration are immutable; reruns create new run records.",

"SRC-003","Immutability","A","P0","BLOCKING","Version Module","VER-004",

"No silent in-place mutation of published methodological config.","Integration","Tech + MGH")

add("REQ-DATA-010","DATA","Professional context, SELF, feedback and research records remain distinguishable data domains.",

"SRC-003","Entity separation","A","P1","CRITICAL\_PILOT","Data Model","DATA-SEP-001",

"No flattening into single untyped JSON response blob.","Schema review","Tech + MGH")

# --- Scoring ---

add("REQ-SCORE-001","SCORING","Score Engine is deterministic, versioned and server-side.",

"SRC-A05","Scoring principles","A","P0","BLOCKING","Score Engine","SCORE-001",

"Same valid input+version produces same output; frontend cannot author scores.","Unit/Security","Tech + MGH")

add("REQ-SCORE-002","SCORING","PC selected semantic option adds exactly +1 to one of D/I/S/C.",

"SRC-A05","PC matrix","A","P0","BLOCKING","Score Engine","G-PC-001|002|003",

"PC totals equal 24 and Golden outputs match expected values.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-003","SCORING","PC relative frequencies equal raw dimension / 24.",

"SRC-A05","Derived metrics","A","P0","BLOCKING","Score Engine","G-PC-001|002|003",

"Golden relative frequencies match full-precision expected values.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-004","SCORING","PC ranking preserves ties explicitly.",

"SRC-A05","PC ranking","A","P0","BLOCKING","Score Engine","G-PC-001",

"6/6/6/6 returns TOP\_TIE and no arbitrary winner.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-005","SCORING","PC normalized Shannon entropy is computed with 0ln0=0.",

"SRC-A05","Entropy formula","A","P1","CRITICAL\_PILOT","Score Engine","G-PC-001|002|003",

"Balanced case=1; concentrated case=0; 9/7/3/5≈0.9477867203.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-006","SCORING","PC.BALANCE is NOT\_IMPLEMENTED in P1.0.",

"SRC-A05","Derived metrics","A","P0","BLOCKING","Score Engine","SCORE-013",

"Request/config attempting PC.BALANCE fails; no invented formula.","Unit","Tech + MGH")

add("REQ-SCORE-007","SCORING","PRC Forced scores V/A/C separately over 8 choices.",

"SRC-A05","PRC matrix","A","P0","BLOCKING","Score Engine","G-PRC-F-001|002",

"Golden raw/relative outputs match expected values.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-008","SCORING","PRC Independent stores all 12 ratings and computes 4-rating mean per modality.",

"SRC-A05","PRC independent","A","P0","BLOCKING","Score Engine","G-PRC-I-001|002",

"Means V/A/C are correct and retained as source metrics.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-009","SCORING","PRC Independent optional normalization is ((mean-1)/4)\*100.",

"SRC-A05","PRC normalization","A","P0","BLOCKING","Score Engine","G-PRC-I-001|002",

"4.75→93.75; 4→75; 3→50; 5→100.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-010","SCORING","PRC Forced and Independent must remain separate; no master PRC score.",

"SRC-A05","PRC integrity","A","P0","BLOCKING","Score Engine","PRC-INT-005",

"Outputs expose separate sources and no averaged/fused PRC score.","Unit/Review","Tech + MGH")

add("REQ-SCORE-011","SCORING","DR Speed/Impact/Externalization keys A=4 B=3 C=2 D=1; Persistence A=1 B=2 C=3 D=4.",

"SRC-A05","DR matrix","A","P0","BLOCKING","Score Engine","G-DR-001|002|003|004",

"DR Golden fixtures match expected raw points.","Golden/Unit","Tech + MGH")

add("REQ-SCORE-012","SCORING","Each DR axis raw range is 3–12 and normalizes by ((raw-3)/9)\*100.",

"SRC-A05","DR normalization","A","P0","BLOCKING","Score Engine","G-DR-001|002|003",

"12→100; 3→0; 9→66.666...","Golden/Unit","Tech + MGH")

add("REQ-SCORE-013","SCORING","No DR Total, resilience, emotional stability or other invented aggregate.",

"SRC-A05","DR integrity","A","P0","BLOCKING","Score Engine","SCORE-014",

"Attempted configuration/output for DR total fails or is absent.","Unit/Schema review","Tech + MGH")

add("REQ-SCORE-014","SCORING","Facets only calculate where canonical facet\_signal exists.",

"SRC-A05","PC facet rule","A","P1","CRITICAL\_PILOT","Score Engine","SCORE-011",

"Missing facet\_signal suppresses facet value; wording is never used to infer it.","Unit","Tech + MGH")

add("REQ-SCORE-015","SCORING","SELF, feedback and Relation Groups do not alter main score.",

"SRC-A05","Scoring exclusions","A","P0","BLOCKING","Score Engine","SCORE-015",

"Changing SELF/feedback/RG analysis leaves PC/PRC/DR outputs unchanged.","Unit","Tech + MGH")

add("REQ-SCORE-016","SCORING","Scoring input must be complete 56/56 and compatible with release versions.",

"SRC-A05","Validation rules","A","P0","BLOCKING","Score Engine","SCORE-002|010",

"Incomplete input → ASSESSMENT\_NOT\_READY; incompatible version → VERSION\_MISMATCH.","Golden/Integration","Tech + MGH")

# --- O0 research/admin ---

add("REQ-O0-001","RESEARCH","O0 must support 8–12 pilot participants without automatic participant results.",

"SRC-006","O0 wave","A","P0","BLOCKING","Research Module","O0-GATE-001",

"System operational for O0 sample and no external report generated.","Pilot dry run","MGH + Tech")

add("REQ-O0-002","RESEARCH","Cognitive interview is retrospective, after natural completion.",

"SRC-006","Cognitive interview protocol","A","P1","CRITICAL\_PILOT","Research Admin","O0-COG-001",

"Admin workflow records post-completion interview; no think-aloud dependency.","Workflow review","MGH + Tech")

add("REQ-O0-003","RESEARCH","Cognitive item review supports flags CMP/AMB/NFA/TWO/DES/CTX/VOC/RED/COG/MAP.",

"SRC-006","Flag taxonomy","A","P1","CRITICAL\_PILOT","Research Admin","O0-FLAG-001",

"All canonical flags are selectable/storeable with item review records.","Integration/UI test","Tech + MGH")

add("REQ-O0-004","RESEARCH","Occurrence severity supports MINOR/MODERATE/MAJOR/INVALIDATING.",

"SRC-006","Occurrence model","A","P1","CRITICAL\_PILOT","Research Admin","O0-OCC-001",

"Occurrence record stores severity and exclusion scope.","Integration","Tech + MGH")

add("REQ-O0-005","RESEARCH","Item decisions support KEEP/REWRITE\_MINOR/REWRITE\_MAJOR/REKEY\_REVIEW/RESERVE/RETIRE/NEW\_ITEM\_REQUIRED.",

"SRC-006","Item survival decisions","A","P1","CRITICAL\_PILOT","Research Admin","O0-ITEM-001",

"Canonical decision list available; no silent item edits mid-wave.","UI/Integration","Tech + MGH")

add("REQ-O0-006","RESEARCH","Gate Review supports ADVANCE / ADVANCE\_WITH\_MINOR\_FIXES / REPEAT\_O0\_WAVE / STOP\_AND\_REDESIGN.",

"SRC-006","Gate decisions","A","P1","CRITICAL\_PILOT","Research Admin","O0-GATE-002",

"Gate decision stored with criteria/result and audit trail.","Integration","Tech + MGH")

add("REQ-O0-007","RESEARCH","O0 hypothesis register includes H001–H012.",

"SRC-006","Hypothesis register","A","P1","CRITICAL\_PILOT","Research Admin","O0-HYP-001",

"Twelve canonical hypotheses can be tracked with status/outcome.","UI/Integration","Tech + MGH")

add("REQ-O0-008","RESEARCH","Default research exports are pseudonymized.",

"SRC-008","Export privacy","A","P0","BLOCKING","Export Module","SEC-002",

"Default export contains participant pseudonym/code but no direct identity.","Golden/Security","Tech")

# --- Admin screens ---

admin\_screens = [

("A01","Login"),("A02","O0 Dashboard"),("A03","Participants"),("A04","Create Participant"),

("A05","Generate Assessment"),("A06","Assessment Detail"),("A07","Cognitive Interview"),

("A08","Cognitive Item Review"),("A09","Audit Flags"),("A10","Occurrences"),

("A11","Item Survival"),("A12","Change Log"),("A13","Hypothesis Register"),

("A14","Gate Review"),("A15","Internal Scores")

]

for idx, (code, name) in enumerate(admin\_screens, start=1):

add(f"REQ-ADM-{idx:03d}","ADMIN",f"Internal Phase A admin must provide {code} — {name}.",

"SRC-002","Internal screens A01–A15","A","P1","CRITICAL\_PILOT","Admin App",

f"ADM-{code}",

f"{name} screen/workflow is accessible only to authorized internal role and supports its defined pilot purpose.",

"UI/E2E","Tech + MGH")

# --- Security / privacy / NFR ---

add("REQ-SEC-001","SECURITY","HTTPS is required for pilot environment.",

"SRC-008","Transport security","A","P0","BLOCKING","Infrastructure","SEC-HTTPS-001",

"All participant/admin traffic served over HTTPS; HTTP redirected/disabled.","Security test","Tech")

add("REQ-SEC-002","SECURITY","Admin production/pilot access requires MFA.",

"SRC-008","Admin MFA","A","P0","BLOCKING","Identity & Access","SEC-MFA-001",

"Privileged admin login requires second factor.","Security test","Tech")

add("REQ-SEC-003","SECURITY","Authorization is enforced server-side with granular RBAC.",

"SRC-008","RBAC","A","P0","BLOCKING","Identity & Access","SEC-RBAC-001",

"Unauthorized API calls denied regardless of frontend state.","Security test","Tech")

add("REQ-SEC-004","SECURITY","Secrets must not be hardcoded in repository.",

"SRC-008","Secrets management","A","P0","BLOCKING","Infrastructure","SEC-SECRET-001",

"Secrets supplied by secure environment/secret manager and absent from source control.","Security review","Tech")

add("REQ-SEC-005","SECURITY","DEV/STAGING/PILOT use separate databases/environments.",

"SRC-008","Environment separation","A","P0","BLOCKING","Infrastructure","SEC-ENV-001",

"No shared production/pilot DB selected by environment column.","Architecture review","Tech")

add("REQ-SEC-006","SECURITY","Real participant data must not be copied into DEV.",

"SRC-008","Test data","A","P0","BLOCKING","Infrastructure","SEC-DATA-001",

"DEV uses synthetic/Golden fixtures only.","Security/process review","Tech")

add("REQ-SEC-007","SECURITY","PII, tokens and full response payloads must be redacted from logs/error tracking.",

"SRC-008","Log redaction","A","P0","BLOCKING","Observability","SEC-LOG-001",

"Security review finds no direct identity/token/full RAW payload leakage in logs.","Security test","Tech")

add("REQ-SEC-008","SECURITY","Backup exists and restore is actually tested.",

"SRC-008","Backup/restore","A","P0","BLOCKING","Infrastructure","SEC-BKP-001",

"Documented restore test succeeds in staging/pilot-like environment.","Restore evidence","Tech")

add("REQ-SEC-009","SECURITY","Identified export requires explicit permission and audit.",

"SRC-008","Export controls","A","P0","BLOCKING","Export Module","SEC-003",

"Without permission returns UNAUTHORIZED\_ACTION; permitted export creates audit record.","Golden/Security","Tech")

add("REQ-SEC-010","SECURITY","Participant-facing payload must not expose score\_target, facet, construct, reverse key or relation metadata.",

"SRC-007","Public payload Golden","A","P0","BLOCKING","API","SEC-001",

"Automated API test finds none of the prohibited methodological fields.","Golden/Security","Tech + MGH")

add("REQ-NFR-001","NFR","Typical scenario transition should feel under ~1 second; save ideal <500ms and acceptable <1s.",

"SRC-008","Performance targets","A","P1","CRITICAL\_PILOT","Participant App/API","PERF-001",

"Pilot load test meets target under expected O0 conditions.","Performance test","Tech")

add("REQ-NFR-002","NFR","Participant experience must be mobile-responsive; admin desktop-first responsive.",

"SRC-008","Device strategy","A","P1","CRITICAL\_PILOT","Frontend","UX-RESP-001",

"Critical flows pass agreed mobile and desktop viewport tests.","E2E/Visual","Tech + MGH")

add("REQ-NFR-003","NFR","Backend timestamps are stored in UTC.",

"SRC-008","Time standard","A","P1","CRITICAL\_PILOT","Data Model","DATA-TIME-001",

"Persisted event timestamps use UTC and display conversion is presentation-level.","Integration","Tech")

add("REQ-NFR-004","NFR","System must remain usable on unstable connections through autosave/resume behavior.",

"SRC-008","Connectivity resilience","A","P1","CRITICAL\_PILOT","Participant App","UX-NET-001",

"Simulated interruption does not lose already acknowledged saved responses.","E2E","Tech")

add("REQ-NFR-005","NFR","Basic observability must capture technical errors and incidents without leaking sensitive payloads.",

"SRC-008","Observability","A","P1","CRITICAL\_PILOT","Observability","OBS-001",

"Errors are traceable by technical IDs while respecting redaction rules.","Ops review","Tech")

# --- CI/CD / quality ---

add("REQ-QA-001","QUALITY","All BLOCKING Golden cases applicable to Phase A must pass before O0.",

"SRC-A15","Golden acceptance gate","A","P0","BLOCKING","CI/CD","GA-001",

"CI report shows 100% PASS for applicable BLOCKING fixtures.","CI evidence","Tech + MGH")

add("REQ-QA-002","QUALITY","Golden failures must block deployment of scoring/instrument changes.",

"SRC-007","Golden deployment rule","A","P0","BLOCKING","CI/CD","QA-DEPLOY-001",

"Pipeline stops release when blocking Golden test fails.","CI pipeline test","Tech")

add("REQ-QA-003","QUALITY","Requirement traceability must link requirement→test→implementation→result.",

"SRC-007","RTM requirement","A","P1","CRITICAL\_PILOT","Quality Governance","RTM-001",

"Every P0/P1 requirement has a test ID, owner and acceptance evidence/status.","RTM review","Tech + MGH","ACTIVE")

add("REQ-QA-004","QUALITY","Technical acceptance and methodology acceptance are separate.",

"SRC-007","Dual acceptance","A","P1","CRITICAL\_PILOT","Governance","QA-ACC-001",

"Release record shows technical and methodological approval where applicable.","Release review","Tech + MGH")

add("REQ-QA-005","QUALITY","Instrument configuration validator must enforce exact counts/order/randomization rules.",

"SRC-A04","Validation rules","A","P0","BLOCKING","Instrument Registry","APPSEQ-001..014",

"Invalid configuration cannot be published.","Validator/Golden","Tech + MGH")

add("REQ-QA-006","QUALITY","Score Engine must preserve computational precision and round only for display.",

"SRC-005","Precision rule","A","P1","CRITICAL\_PILOT","Score Engine","SCORE-PREC-001",

"Stored derived values preserve full precision used by Golden fixtures.","Unit/DB test","Tech + MGH")

# --- Architecture / ownership / handoff ---

add("REQ-ARCH-001","ARCHITECTURE","Initial architecture is modular monolith unless a justified alternative is formally approved.",

"SRC-003","Architecture decision","A","P1","CRITICAL\_PILOT","Architecture","ARCH-002",

"Modules have clear boundaries; no microservice sprawl without approved rationale.","Architecture review","Tech + MGH","FROZEN")

add("REQ-ARCH-002","ARCHITECTURE","Score Engine is isolated from UI/reporting concerns.",

"SRC-003","Bounded modules","A","P0","BLOCKING","Architecture","ARCH-SCORE-001",

"Score tests run independently from frontend/report rendering.","Architecture/Unit","Tech")

add("REQ-ARCH-003","ARCHITECTURE","Avoid giant calculateProfileAndGenerateReport-style function.",

"SRC-003","Anti-pattern","A","P1","CRITICAL\_PILOT","Architecture","ARCH-ANTI-001",

"Scoring, evidence/future interpretation and reporting boundaries remain distinct.","Code review","Tech + MGH")

add("REQ-ARCH-004","ARCHITECTURE","Asynchronous jobs are used for scoring/export/report-like work when appropriate and are idempotent.",

"SRC-003","Job model","A","P1","CRITICAL\_PILOT","Job Engine","JOB-001",

"Job state supports PENDING/RUNNING/COMPLETED/FAILED/RETRYING with idempotency controls.","Integration","Tech")

add("REQ-OWN-001","OWNERSHIP","Repository must be under company/project control from first commit.",

"SRC-010","Repository ownership","A","P0","BLOCKING","Governance","OWN-001",

"Company account owns repo; developer has delegated access.","Governance evidence","MGH + Tech","FROZEN")

add("REQ-OWN-002","OWNERSHIP","Cloud, database, domain and primary credentials must remain under company control.",

"SRC-010","Infra ownership","A","P0","BLOCKING","Governance","OWN-002",

"Ownership/access records confirm company control and takeover capability.","Governance evidence","MGH + Tech","FROZEN")

add("REQ-OWN-003","OWNERSHIP","Project must include migrations, deployment instructions and handoff documentation.",

"SRC-010","Handoff requirements","A","P1","CRITICAL\_PILOT","Documentation","OWN-003",

"Another developer can provision/run/deploy using supplied docs and authorized credentials.","Handoff test","Tech")

add("REQ-OWN-004","OWNERSHIP","Change Requests must distinguish new scope from defects against accepted requirements.",

"SRC-010","Scope governance","A","P1","CRITICAL\_PILOT","Governance","CR-001",

"Issue classification records bug vs change with scope/time/cost/version impact.","Process review","MGH + Tech","FROZEN")

# --- Future interpretation architecture preserved, not built now ---

add("REQ-FUT-001","FUTURE\_MOTOR","Future UIGs must consume Evidence Dictionary outputs, not raw answers directly.",

"SRC-009","Evidence boundary","C","P2","FUTURE","Future Interpretation","INT-ARCH-001",

"Architecture preserves future Evidence→UIG interface; no Phase A direct RAW→UIG implementation.","Architecture review","Tech + MGH","DEFERRED")

add("REQ-FUT-002","FUTURE\_MOTOR","Future system must support Block Rules, contextual precedence, collision resolution and synthesis.",

"SRC-009","Interpretation pipeline","C","P2","FUTURE","Future Interpretation","INT-ARCH-002",

"Phase A schema/interfaces do not preclude future versioned engines.","Architecture review","Tech + MGH","DEFERRED")

add("REQ-FUT-003","FUTURE\_MOTOR","Future Claims/Actions must be traceable back to evidence and RAW lineage.",

"SRC-009","Full lineage","C","P2","FUTURE","Future Interpretation","INT-ARCH-003",

"Data model reserves versioned lineage path without implementing commercial report now.","Architecture review","Tech + MGH","DEFERRED")

add("REQ-FUT-004","FUTURE\_MOTOR","Future AI receives only authorized claims/actions/constraints, not indiscriminate RAW.",

"SRC-009","AI boundary","D","P2","FUTURE","Future Language Layer","INT-AI-001",

"No Phase A design couples report generation directly to raw responses.","Architecture review","Tech + MGH","DEFERRED")

# -----------------------------

# 00\_README

# -----------------------------

s = wb.worksheets.add("00\_README")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["MGH™ — ANX-016 | RTM-P1.0 Requirement Traceability Matrix"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A1:H1").format.row\_height = 28

meta = [

["Campo","Valor"],

["Código do anexo","MGH-ANX-016"],

["Registro","RTM-P1.0"],

["Versão documental","0.1"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Escopo principal","Phase A — Pilot Core"],

["Status","ACTIVE — PRE-IMPLEMENTATION TRACEABILITY BASELINE"],

["Finalidade","Rastrear cada requisito até sua fonte, teste, severidade, componente, aceite, evidência e status de implementação."],

]

s.get\_range("A3:B10").values = meta

s.get\_range("A3:B3").format = header\_fmt

s.get\_range("A4:A10").format = subtle\_header\_fmt

s.get\_range("B4:B10").format = body\_wrap

s.merge\_cells("A12:H12")

s.get\_range("A12").values = [["REGRA-MÃE"]]

s.get\_range("A12:H12").format = section\_fmt

s.merge\_cells("A13:H16")

s.get\_range("A13").values = [[

"Todo requisito P0/P1 da Fase A deve possuir fonte identificável, teste ou evidência de verificação, "

"critério de aceite, responsável e status. Um requisito não é considerado concluído apenas porque "

"a tela existe: ele precisa passar pelo critério de aceite correspondente."

]]

s.get\_range("A13:H16").format = note\_fmt

s.merge\_cells("A18:H18")

s.get\_range("A18").values = [["STATUS PADRÃO"]]

s.get\_range("A18:H18").format = section\_fmt

status\_rows = [

["Status","Uso"],

["FROZEN","Decisão/especificação congelada; não é item de implementação."],

["ACTIVE","Controle documental ativo."],

["NOT\_IMPLEMENTED","Requisito ainda não implementado."],

["IN\_PROGRESS","Implementação em andamento."],

["READY\_FOR\_TEST","Implementado aguardando verificação."],

["PASS","Critério de aceite aprovado."],

["FAIL","Critério de aceite falhou."],

["WAITING\_BANK","Bloqueado pela recuperação do BANK-0.2 canônico."],

["DEFERRED","Fora da Fase A; preservado para fase futura."],

]

s.get\_range("A19:B28").values = status\_rows

s.get\_range("A19:B19").format = header\_fmt

s.get\_range("A20:A28").format = subtle\_header\_fmt

s.get\_range("B20:B28").format = body\_wrap

for col, width in {"A":24,"B":70,"C":12,"D":12,"E":12,"F":12,"G":12,"H":12}.items():

s.get\_range(f"{col}1:{col}32").format.column\_width = width

# -----------------------------

# 01\_RTM\_MASTER

# -----------------------------

s = wb.worksheets.add("01\_RTM\_MASTER")

s.merge\_cells("A1:O1")

s.get\_range("A1").values = [["RTM-P1.0 — Master Requirement Register"]]

s.get\_range("A1:O1").format = title\_fmt

headers = [

"Requirement ID","Domain","Requirement","Source ID","Source Detail","Phase","Priority","Severity",

"Component","Test ID","Acceptance Criteria","Acceptance Evidence","Owner","Status","Notes"

]

s.get\_range("A3:O3").values = [headers]

s.get\_range("A3:O3").format = header\_fmt

s.get\_range(f"A4:O{3+len(reqs)}").values = reqs

s.get\_range(f"A4:O{3+len(reqs)}").format = body\_wrap

s.tables.add(f"A3:O{3+len(reqs)}", True, "RTMMasterTable")

s.freeze\_panes.freeze\_rows(3)

s.freeze\_panes.freeze\_columns(2)

# Data validation for status/priority/severity/phase

s.get\_range(f"N4:N{3+len(reqs)}").data\_validation = {

"rule": {"type":"list","values":["FROZEN","ACTIVE","NOT\_IMPLEMENTED","IN\_PROGRESS","READY\_FOR\_TEST","PASS","FAIL","WAITING\_BANK","DEFERRED"]}

}

s.get\_range(f"G4:G{3+len(reqs)}").data\_validation = {

"rule": {"type":"list","values":["P0","P1","P2"]}

}

s.get\_range(f"H4:H{3+len(reqs)}").data\_validation = {

"rule": {"type":"list","values":["BLOCKING","CRITICAL\_PILOT","NON\_BLOCKING","FUTURE"]}

}

s.get\_range(f"F4:F{3+len(reqs)}").data\_validation = {

"rule": {"type":"list","values":["A","B","C","D","E"]}

}

# Conditional formatting for status and severity

s.get\_range(f"N4:N{3+len(reqs)}").conditional\_formats.add\_custom('=N4="PASS"', {"fill": LIGHT\_GREEN, "font":{"color":GREEN,"bold":True}})

s.get\_range(f"N4:N{3+len(reqs)}").conditional\_formats.add\_custom('=N4="FAIL"', {"fill": LIGHT\_RED, "font":{"color":RED,"bold":True}})

s.get\_range(f"N4:N{3+len(reqs)}").conditional\_formats.add\_custom('=N4="WAITING\_BANK"', {"fill": LIGHT\_GOLD, "font":{"color":"#7A5A16","bold":True}})

s.get\_range(f"N4:N{3+len(reqs)}").conditional\_formats.add\_custom('=N4="DEFERRED"', {"fill": LIGHT\_BLUE, "font":{"color":NAVY,"bold":True}})

s.get\_range(f"H4:H{3+len(reqs)}").conditional\_formats.add\_custom('=H4="BLOCKING"', {"fill": LIGHT\_RED, "font":{"color":RED,"bold":True}})

s.get\_range(f"H4:H{3+len(reqs)}").conditional\_formats.add\_custom('=H4="CRITICAL\_PILOT"', {"fill": LIGHT\_GOLD, "font":{"color":"#7A5A16","bold":True}})

widths = {

"A":18,"B":18,"C":58,"D":16,"E":32,"F":10,"G":10,"H":18,"I":24,"J":24,

"K":56,"L":28,"M":20,"N":20,"O":42

}

for col, width in widths.items():

s.get\_range(f"{col}1:{col}{3+len(reqs)+2}").format.column\_width = width

# -----------------------------

# 02\_P0\_P1\_GATE

# -----------------------------

s = wb.worksheets.add("02\_P0\_P1\_GATE")

s.merge\_cells("A1:J1")

s.get\_range("A1").values = [["Phase A — P0/P1 Readiness Gate"]]

s.get\_range("A1:J1").format = title\_fmt

gate\_headers = ["Requirement ID","Domain","Priority","Severity","Requirement","Test ID","Owner","Current Status","Blocks O0?","Gate Rule"]

s.get\_range("A3:J3").values = [gate\_headers]

s.get\_range("A3:J3").format = header\_fmt

gate\_rows = []

for r in reqs:

rid, domain, requirement, source, detail, phase, priority, severity, component, test\_id, acceptance, evidence, owner, status, notes = r

if phase == "A" and priority in ("P0","P1"):

blocks = "YES" if severity in ("BLOCKING","CRITICAL\_PILOT") else "NO"

gate\_rule = "Must PASS before O0" if severity == "BLOCKING" else ("Must PASS unless explicitly waived in Gate Review" if severity == "CRITICAL\_PILOT" else "Track")

gate\_rows.append([rid,domain,priority,severity,requirement,test\_id,owner,status,blocks,gate\_rule])

s.get\_range(f"A4:J{3+len(gate\_rows)}").values = gate\_rows

s.get\_range(f"A4:J{3+len(gate\_rows)}").format = body\_wrap

s.tables.add(f"A3:J{3+len(gate\_rows)}", True, "PhaseAGateTable")

s.freeze\_panes.freeze\_rows(3)

for col, width in {"A":18,"B":18,"C":10,"D":18,"E":60,"F":24,"G":20,"H":20,"I":12,"J":42}.items():

s.get\_range(f"{col}1:{col}{3+len(gate\_rows)+2}").format.column\_width = width

# -----------------------------

# 03\_TEST\_CATALOG

# -----------------------------

s = wb.worksheets.add("03\_TEST\_CATALOG")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["Test / Evidence Catalog"]]

s.get\_range("A1:H1").format = title\_fmt

test\_headers = ["Test ID","Requirement IDs","Class","Primary Component","Evidence Type","Expected Outcome","Severity","Implementation Status"]

s.get\_range("A3:H3").values = [test\_headers]

s.get\_range("A3:H3").format = header\_fmt

# Aggregate test IDs from RTM

test\_map = {}

for r in reqs:

rid, domain, requirement, source, detail, phase, priority, severity, component, test\_id, acceptance, evidence, owner, status, notes = r

for tid in [t.strip() for t in test\_id.split("|") if t.strip()]:

if tid not in test\_map:

test\_map[tid] = {"reqs":[], "class":domain, "component":component, "evidence":evidence, "expected":acceptance, "severity":severity, "status":"NOT\_IMPLEMENTED"}

test\_map[tid]["reqs"].append(rid)

test\_rows = []

for tid in sorted(test\_map):

x = test\_map[tid]

test\_rows.append([

tid, ", ".join(x["reqs"]), x["class"], x["component"], x["evidence"],

x["expected"], x["severity"], x["status"]

])

s.get\_range(f"A4:H{3+len(test\_rows)}").values = test\_rows

s.get\_range(f"A4:H{3+len(test\_rows)}").format = body\_wrap

s.tables.add(f"A3:H{3+len(test\_rows)}", True, "TestCatalogTable")

s.freeze\_panes.freeze\_rows(3)

for col, width in {"A":26,"B":44,"C":18,"D":28,"E":24,"F":60,"G":18,"H":20}.items():

s.get\_range(f"{col}1:{col}{3+len(test\_rows)+2}").format.column\_width = width

# -----------------------------

# 04\_SOURCE\_DOCS

# -----------------------------

s = wb.worksheets.add("04\_SOURCE\_DOCS")

s.merge\_cells("A1:F1")

s.get\_range("A1").values = [["Source Document Registry"]]

s.get\_range("A1:F1").format = title\_fmt

s.get\_range("A3:F3").values = [["Source ID","Document Code","Title","Version","Status","Traceability Role"]]

s.get\_range("A3:F3").format = header\_fmt

s.get\_range(f"A4:F{3+len(source\_docs)}").values = source\_docs

s.get\_range(f"A4:F{3+len(source\_docs)}").format = body\_wrap

s.tables.add(f"A3:F{3+len(source\_docs)}", True, "SourceDocumentRegistry")

for col, width in {"A":14,"B":28,"C":42,"D":12,"E":24,"F":48}.items():

s.get\_range(f"{col}1:{col}{3+len(source\_docs)+2}").format.column\_width = width

# -----------------------------

# 05\_DASHBOARD

# -----------------------------

s = wb.worksheets.add("05\_DASHBOARD")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["RTM-P1.0 — Readiness Dashboard"]]

s.get\_range("A1:H1").format = title\_fmt

# KPI block

s.get\_range("A3:B3").values = [["KPI","Value"]]

s.get\_range("A3:B3").format = header\_fmt

last\_rtm\_row = 3 + len(reqs)

kpis = [

["Total requirements", f"=COUNTA('01\_RTM\_MASTER'!A4:A{last\_rtm\_row})"],

["Phase A requirements", f'=COUNTIF(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A")'],

["P0 requirements", f'=COUNTIF(\'01\_RTM\_MASTER\'!G4:G{last\_rtm\_row},"P0")'],

["P1 requirements", f'=COUNTIF(\'01\_RTM\_MASTER\'!G4:G{last\_rtm\_row},"P1")'],

["Blocking requirements", f'=COUNTIF(\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"BLOCKING")'],

["PASS", f'=COUNTIF(\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"PASS")'],

["FAIL", f'=COUNTIF(\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"FAIL")'],

["WAITING\_BANK", f'=COUNTIF(\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"WAITING\_BANK")'],

["DEFERRED", f'=COUNTIF(\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"DEFERRED")'],

]

s.get\_range("A4:A12").values = [[x[0]] for x in kpis]

for idx, (\_, formula) in enumerate(kpis, start=4):

s.get\_range(f"B{idx}").formulas = [[formula]]

s.get\_range("A4:A12").format = subtle\_header\_fmt

s.get\_range("D3:F3").values = [["Phase A Gate","Formula","Interpretation"]]

s.get\_range("D3:F3").format = header\_fmt

s.get\_range("D4:D8").values = [

["Blocking PASS %"],

["Blocking not PASS"],

["Critical Pilot not PASS"],

["P0 not PASS"],

["P1 not PASS"],

]

s.get\_range("E4").formulas = [[

f'=IF(COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"BLOCKING")=0,0,'

f'COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"BLOCKING",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"PASS")/'

f'COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"BLOCKING"))'

]]

s.get\_range("E5").formulas = [[

f'=COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"BLOCKING",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"<>PASS")'

]]

s.get\_range("E6").formulas = [[

f'=COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!H4:H{last\_rtm\_row},"CRITICAL\_PILOT",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"<>PASS")'

]]

s.get\_range("E7").formulas = [[

f'=COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!G4:G{last\_rtm\_row},"P0",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"<>PASS")'

]]

s.get\_range("E8").formulas = [[

f'=COUNTIFS(\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!G4:G{last\_rtm\_row},"P1",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"<>PASS")'

]]

s.get\_range("F4:F8").values = [

["Must reach 100% before O0"],

["Must reach 0 before O0"],

["Must reach 0 unless Gate Review documents exception"],

["Must reach 0 before O0"],

["Must reach 0 or formally waived"],

]

s.get\_range("D4:D8").format = subtle\_header\_fmt

s.get\_range("F4:F8").format = body\_wrap

s.get\_range("E4").format.number\_format = "0.0%"

# Status by domain summary

domains = sorted(set(r[1] for r in reqs if r[5] == "A"))

s.get\_range("A15:E15").values = [["Domain","Total","PASS","Not PASS","Readiness %"]]

s.get\_range("A15:E15").format = header\_fmt

for i, domain in enumerate(domains, start=16):

s.get\_range(f"A{i}").values = [[domain]]

s.get\_range(f"B{i}").formulas = [[f'=COUNTIFS(\'01\_RTM\_MASTER\'!B4:B{last\_rtm\_row},A{i},\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A")']]

s.get\_range(f"C{i}").formulas = [[f'=COUNTIFS(\'01\_RTM\_MASTER\'!B4:B{last\_rtm\_row},A{i},\'01\_RTM\_MASTER\'!F4:F{last\_rtm\_row},"A",\'01\_RTM\_MASTER\'!N4:N{last\_rtm\_row},"PASS")']]

s.get\_range(f"D{i}").formulas = [[f'=B{i}-C{i}']]

s.get\_range(f"E{i}").formulas = [[f'=IF(B{i}=0,0,C{i}/B{i})']]

s.get\_range(f"E{i}").format.number\_format = "0.0%"

s.get\_range(f"E16:E{15+len(domains)}").conditional\_formats.add\_data\_bar({"color":"accent5","gradient":True})

for col, width in {"A":26,"B":14,"C":14,"D":28,"E":18,"F":52,"G":12,"H":12}.items():

s.get\_range(f"{col}1:{col}{18+len(domains)}").format.column\_width = width

# -----------------------------

# 06\_STATUS\_CHANGE\_LOG

# -----------------------------

s = wb.worksheets.add("06\_STATUS\_CHANGE\_LOG")

s.merge\_cells("A1:H1")

s.get\_range("A1").values = [["RTM Status Change Log"]]

s.get\_range("A1:H1").format = title\_fmt

s.get\_range("A3:H3").values = [["Change ID","Date","Requirement ID","Old Status","New Status","Evidence Ref","Changed By","Notes"]]

s.get\_range("A3:H3").format = header\_fmt

s.get\_range("A4:H20").format = body\_wrap

s.tables.add("A3:H20", True, "RTMStatusChangeLog")

for col, width in {"A":16,"B":16,"C":18,"D":18,"E":18,"F":32,"G":20,"H":50}.items():

s.get\_range(f"{col}1:{col}24").format.column\_width = width

# -----------------------------

# 07\_OPEN\_DEPENDENCIES

# -----------------------------

s = wb.worksheets.add("07\_OPEN\_DEPENDENCIES")

s.merge\_cells("A1:G1")

s.get\_range("A1").values = [["Open Dependencies Affecting Traceability / Implementation"]]

s.get\_range("A1:G1").format = title\_fmt

s.get\_range("A3:G3").values = [["Dependency ID","Dependency","Affected Requirement(s)","Current State","Blocks","Owner","Rule"]]

s.get\_range("A3:G3").format = header\_fmt

deps = [

["DEP-001","BANK-0.2 literal scenario/option text and canonical option\_id mappings","REQ-INST-012; PC/PRC E2E score fixtures","SOURCE\_RECOVERY\_REQUIRED","Final instrument publication + full raw option E2E","MGH","Do not infer or reconstruct production wording/mappings."],

["DEP-002","SELF exact canonical wording / 1–5 labels","REQ-FLOW-014","OPEN","Final participant rendering before O0","MGH","Scoring unaffected; UI publication waits for canonical text."],

["DEP-003","Consent and privacy notice final legal review","REQ-FLOW-004; O0 readiness","LEGAL\_PRIVACY","Real O0 participant release","Legal/Privacy + MGH","Placeholders allowed in development only."],

["DEP-004","Developer implementation evidence","Most Phase A requirements","NOT\_STARTED","O0 Gate","Tech","Status stays NOT\_IMPLEMENTED until objective evidence exists."],

]

s.get\_range("A4:G7").values = deps

s.get\_range("A4:G7").format = body\_wrap

for col, width in {"A":16,"B":46,"C":46,"D":24,"E":42,"F":24,"G":50}.items():

s.get\_range(f"{col}1:{col}12").format.column\_width = width

# -----------------------------

# Verification

# -----------------------------

check = wb.inspect({

"kind":"table",

"range":"01\_RTM\_MASTER!A1:O16",

"include":"values,formulas",

"table\_max\_rows":16,

"table\_max\_cols":15

})

print(check.ndjson)

dash = wb.inspect({

"kind":"table",

"range":"05\_DASHBOARD!A1:F12",

"include":"values,formulas",

"table\_max\_rows":12,

"table\_max\_cols":6

})

print(dash.ndjson)

errors = wb.inspect({

"kind":"match",

"search\_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options":{"use\_regex":True,"max\_results":200},

"summary":"final formula error scan"

})

print(errors.ndjson)

# Render quick dashboard preview for visual QA

preview = "/mnt/data/MGH\_ANX-016\_RTM\_preview.png"

wb.render({"sheet\_name":"05\_DASHBOARD","range":"A1:F28","scale":1.1}).save(preview)

# Export

out = "/mnt/data/MGH\_ANX-016\_RTM-P1.0\_Requirement\_Traceability\_Matrix\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

print(out)

print(preview)

{"kind":"table","sheet":"01\_RTM\_MASTER","address":"A1:O16","rows":16,"cols":15,"values":[["RTM-P1.0 — Master Requirement Register",null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["Requirement ID","Domain","Requirement","Source ID","Source Detail","Phase","Priority","Severity","Component","Test ID","Acceptance Criteria","Acceptance Evidence","Owner","Status","Notes"],["REQ-PROD-001","PRODUCT","Phase A must support O0 pilot integrity, not full commercial MGH.","SRC-001","Pilot Core objective","A","P0","BLOCKING","Product Scope","SCOPE-001","No commercial-only feature is required to complete Phase A.","Scope review","MGH","FROZEN",""],["REQ-PROD-002","PRODUCT","O0 participant must not receive automatic profile/report after completion.","SRC-001","O0 participant journey","A","P0","BLOCKING","Participant App","FLOW-006","Completion screen confirms submission only; no interpretation/report exposed.","E2E","Tech + MGH","NOT\_IMPLEMENTED",""],["REQ-PROD-003","PRODUCT","AI must not be required for Phase A scoring or interpretation.","SRC-001","AI boundary","A","P0","BLOCKING","Architecture","ARCH-001","Phase A operates fully with deterministic code and without LLM dependency.","Architecture review","Tech + MGH","FROZEN",""],["REQ-PROD-004","PRODUCT","Web app is the initial delivery model; native apps are out of Phase A.","SRC-010","Phase A exclusions","A","P2","NON\_BLOCKING","Scope","SCOPE-002","Responsive web app delivered; native iOS/Android not required.","Scope review","MGH","FROZEN",""],["REQ-FLOW-001","FLOW","Participant accesses assessment through secure unpredictable individual token.","SRC-002","Secure access flow","A","P0","BLOCKING","Assessment Access","SEC-TOKEN-001","Sequential/predictable IDs are not accepted; revoked/invalid token is denied.","Security/E2E","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-002","FLOW","Invalid assessment link returns neutral message and no sensitive detail.","SRC-002","Invalid access behavior","A","P1","CRITICAL\_PILOT","Participant App","FLOW-007","No participant identity, assessment status internals, or score information leaked.","E2E","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-003","FLOW","Completed assessment link shows completed state only and never results in O0.","SRC-002","Completed link behavior","A","P0","BLOCKING","Participant App","FLOW-008","Re-opening completed token cannot expose/edit answers or display report.","E2E","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-004","FLOW","Consent must be versioned and recorded before assessment begins.","SRC-002","Consent flow","A","P0","BLOCKING","Consent Module","FLOW-009","Assessment cannot enter active response flow without accepted consent version.","Integration","Tech + MGH","NOT\_IMPLEMENTED",""],["REQ-FLOW-005","FLOW","Professional context is captured for the assessment, not stored as permanent identity truth.","SRC-003","Professional context entity","A","P1","CRITICAL\_PILOT","Data Model","DATA-CTX-001","Context record is linked to assessment/version and can differ across reassessments.","Data model test","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-006","FLOW","Participant sees one scenario per screen.","SRC-002","Participant UX","A","P1","CRITICAL\_PILOT","Participant App","FLOW-010","No multi-page survey dump; one active scenario view at a time.","E2E","Tech + MGH","NOT\_IMPLEMENTED",""],["REQ-FLOW-007","FLOW","Progress is based on 48 scenarios, not 56 scored responses.","SRC-A04","Progress rule","A","P0","BLOCKING","Participant App","APPSEQ-001","Progress indicator is x/48 and reaches 48 only after the 48th scenario.","E2E","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-008","FLOW","Autosave must persist responses and show discreet save state.","SRC-002","Autosave","A","P0","BLOCKING","Response Engine","FLOW-011","Saved answer survives reload/session interruption; failure is visible and cannot silently advance.","E2E/Integration","Tech","NOT\_IMPLEMENTED",""],["REQ-FLOW-009","FLOW","Resume returns participant to first incomplete scenario and preserves previous presentation order.","SRC-002","Resume behavior","A","P0","BLOCKING","Assessment Engine","FLOW-005","Previously randomized option presentation is identical after resume.","Golden/E2E","Tech","NOT\_IMPLEMENTED",""]]}

{"kind":"table","sheet":"05\_DASHBOARD","address":"A1:F12","rows":12,"cols":6,"values":[["RTM-P1.0 — Readiness Dashboard",null,null,null,null,null],[null,null,null,null,null,null],["KPI","Value",null,"Phase A Gate","Formula","Interpretation"],["Total requirements",113,null,"Blocking PASS %",0,"Must reach 100% before O0"],["Phase A requirements",109,null,"Blocking not PASS",63,"Must reach 0 before O0"],["P0 requirements",63,null,"Critical Pilot not PASS",45,"Must reach 0 unless Gate Review documents exception"],["P1 requirements",45,null,"P0 not PASS",63,"Must reach 0 before O0"],["Blocking requirements",63,null,"P1 not PASS",45,"Must reach 0 or formally waived"],["PASS",0,null,null,null,null],["FAIL",0,null,null,null,null],["WAITING\_BANK",1,null,null,null,null],["DEFERRED",4,null,null,null,null]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

/mnt/data/MGH\_ANX-016\_RTM-P1.0\_Requirement\_Traceability\_Matrix\_v0.1.xlsx

/mnt/data/MGH\_ANX-016\_RTM\_preview.png

Avançamos e concluí o próximo anexo canônico:

ANX-016 — RTM-P1.0 ✅

Requirement Traceability Matrix

Esse arquivo agora liga formalmente:

requisito → documento de origem → prioridade → severidade → componente → teste → critério de aceite → evidência → responsável → status.

Foram consolidados 113 requisitos rastreáveis, sendo 109 da Fase A.

O arquivo contém:

00\_README

01\_RTM\_MASTER

02\_P0\_P1\_GATE

03\_TEST\_CATALOG

04\_SOURCE\_DOCS

05\_DASHBOARD

06\_STATUS\_CHANGE\_LOG

07\_OPEN\_DEPENDENCIES

O Dashboard já mostra a situação real de hoje: temos 63 requisitos BLOCKING, 45 CRITICAL\_PILOT, nenhum ainda marcado como PASS porque o software ainda está sendo desenvolvido, 1 dependência explícita de WAITING\_BANK e 4 requisitos futuros DEFERRED.

Isso está correto. Não devemos marcar requisitos como concluídos antes de existir evidência objetiva do desenvolvedor.

Por que esse arquivo é tão importante

Quando o desenvolvedor disser, por exemplo:

“O resume está pronto.”

nós não precisaremos aceitar apenas pela demonstração visual.

A RTM aponta que ele precisa comprovar, entre outras coisas:

retomada no primeiro cenário incompleto;

preservação da ordem randomizada anteriormente;

respostas já salvas preservadas;

teste correspondente aprovado.

Ou, se disser:

“O Score Engine está pronto.”

teremos imediatamente os Golden Cases vinculados ao requisito.

A partir daqui, a homologação deixa de ser subjetiva.

Situação atual da Fase 3.3

Anexo Status

ANX-001 — Release Manifest ✅

ANX-002 — Compatibility Matrix ✅

ANX-003 — BANK-0.2 🟡 conteúdo literal pendente

ANX-004 — Application Sequence ✅

ANX-005 — SCORE-P1.0 Scoring Matrix ✅

ANX-015 — GOLDEN-P1.0 ✅

ANX-016 — RTM-P1.0 ✅

Agora seguimos para:

ANX-017 — DATA DICTIONARY

Esse será o dicionário oficial do banco de dados.

Vamos transformar entidades como:

PARTICIPANT

PARTICIPANT\_IDENTITY

ASSESSMENT

RESPONSE

RESPONSE\_EVENT

OPTION\_PRESENTATION

SCORING\_RUN

DERIVED\_SCORE

AUDIT\_LOG

em uma especificação campo a campo, definindo:

nome do campo, tipo, obrigatoriedade, chave, relação, imutabilidade, classificação de dado, origem, regras e observações.

Esse será especialmente útil para o desenvolvedor validar se o banco que ele está construindo corresponde ao modelo que especificamos.