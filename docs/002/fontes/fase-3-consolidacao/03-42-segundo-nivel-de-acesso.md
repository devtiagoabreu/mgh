---
name: 03-42-segundo-nivel-de-acesso
description: Trecho integral: 42. Segundo nível de acesso.
source: docs/001/FASE 3 — CONSOLIDAÇÃO EXECUTIVA & CONTRATAÇÃO.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1175-1620
---

# 42. Segundo nível de acesso

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

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