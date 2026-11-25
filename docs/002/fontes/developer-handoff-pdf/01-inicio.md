---
name: 01-inicio
description: Trecho integral: inicio.
source: docs/001/MGH_Developer_Handoff_Package_Master_v0.1.pdf
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-580
---

# inicio

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

Mapa de Governo Humano™  |  MGH-MASTER-INDEX  |  v0.1
CONTROLE MESTRE
Índice Mestre do MGH™
Código MGH-MASTER-INDEX
Versão documental 0.1
Componente relacionado Master Document & Version Registry
Baseline MGH-MASTER-P1.0-RC1
Status ACTIVE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
Se um ativo do MGH não estiver registrado no Índice Mestre, ele não deve ser tratado como parte
oficial da baseline.
1. Finalidade e hierarquia documental
Este índice é o mapa único dos documentos, componentes metodológicos, anexos, versões, status e dependências do
MGH™. Ele não substitui os documentos: registra quais ativos existem, qual versão vale e qual fonte deve prevalecer
em cada assunto.
Nível Conteúdo
0 - Controle Mestre Índice Mestre, Master Specification, registro de releases e
mudanças.
1 - Baseline Metodológica Conjunto de versões que compõe uma release do MGH.
2 - Developer Handoff 12 documentos técnicos e executivos.
3 - Anexos Canônicos Bancos, matrizes, dicionários, datasets e tabelas estruturadas.
4 - Artefatos Operacionais Planilhas, checklists, formulários e materiais da operação do piloto.
2. Baseline atual
| Componente           | Versão              | Estado                   |
| -------------------- | ------------------- | ------------------------ |
| Master Specification | MGH-MASTER-P1.0-RC1 | FROZEN FOR PHASE A       |
| Instrumento          | MGH-P1.0            | PILOT                    |
| Banco de Itens       | BANK-0.2            | CANONICAL CONSOLIDATION  |
REQUIRED
| Scoring         | SCORE-P1.0      | SPECIFIED                        |
| --------------- | --------------- | -------------------------------- |
| Evidence        | EVID-0.2        | LOGIC COMPLETE / THRESHOLDS OPEN |
| UIG Library     | UIG-LIB-0.2     | PILOT BASELINE                   |
| Synthesis       | SYN-0.2         | 5 OFFICIAL + CANDIDATES          |
| Interpretation  | INTERP-0.2      | SPECIFIED / NOT IMPLEMENTED      |
| Claims          | CLAIM-DICT-0.1  | 30 DEFINED                       |
| Actions         | ACTION-REG-0.1  | 30 DEFINED                       |
| Language        | LANG-POL-0.1    | SPECIFIED                        |
| Report Composer | REPORT-COMP-0.1 | SPECIFIED                        |
| Golden Dataset  | GOLDEN-P1.0     | CASES DEFINED / ARTIFACT PENDING |
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
3. Developer Handoff Package™
| #   | Código              | Documento                         |
| --- | ------------------- | --------------------------------- |
| 01  | MGH-EXEC-BRIEF-0.1  | Executive Product Brief           |
| 02  | MGH-FUNC-SPEC-0.1   | Functional Specification          |
| 03  | MGH-ARCH-DATA-0.1   | Architecture & Data Model         |
| 04  | MGH-INST-SPEC-0.1   | MGH-P1.0 Instrument Specification |
| 05  | MGH-SCORE-SPEC-0.1  | Scoring Specification             |
| 06  | MGH-O0-PROTOCOL-0.1 | O0 Research & Pilot Protocol      |
| 07  | MGH-TEST-SPEC-0.1   | Golden Cases & Acceptance Tests   |
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™  |  MGH-MASTER-INDEX  |  v0.1
| #   | Código                | Documento                           |
| --- | --------------------- | ----------------------------------- |
| 08  | MGH-SEC-NFR-0.1       | Security, Privacy & NFR             |
| 09  | MGH-INTERP-SPEC-0.1   | Interpretation Engine Specification |
| 10  | MGH-ROADMAP-0.1       | Technical Roadmap & Scope Control   |
| 11  | MGH-OPEN-DECISION-0.1 | Open Items & Decision Log           |
| 12  | MGH-MEETING-BRIEF-0.1 | Developer Meeting Brief             |
Status documental atual dos 12 documentos: CONTENT_COMPLETE - FOR REVIEW. O conteúdo está concluído; a
baseline metodológica continua PILOT e não validada para decisões de emprego.
4. Fontes de verdade por assunto
Assunto Fonte principal
Visão do produto MGH-EXEC-BRIEF-0.1
Requisitos funcionais MGH-FUNC-SPEC-0.1
Arquitetura e dados MGH-ARCH-DATA-0.1
Aplicação do participante MGH-INST-SPEC-0.1 + BANK-0.2
Pontuação MGH-SCORE-SPEC-0.1 + Scoring Matrix
Onda 0 MGH-O0-PROTOCOL-0.1
Aceite e QA MGH-TEST-SPEC-0.1
Segurança/privacidade MGH-SEC-NFR-0.1
Interpretação MGH-INTERP-SPEC-0.1
Escopo e roadmap MGH-ROADMAP-0.1
Pendências/decisões MGH-OPEN-DECISION-0.1
5. Anexos canônicos - registro
| ID      | Anexo                         | Status                 |
| ------- | ----------------------------- | ---------------------- |
| ANX-001 | Release Manifest              | READY TO CONSOLIDATE   |
| ANX-002 | Version Compatibility Matrix  | READY TO CONSOLIDATE   |
| ANX-003 | BANK-0.2 Canonical Item Bank  | CONSOLIDATION REQUIRED |
| ANX-004 | MGH-P1.0 Application Sequence | READY TO CONSOLIDATE   |
| ANX-005 | SCORE-P1.0 Scoring Matrix     | READY TO CONSOLIDATE   |
| ANX-006 | PC Facet Registry             | PARTIALLY OPEN         |
| ANX-007 | Relation Group Registry       | READY TO CONSOLIDATE   |
| ANX-008 | SELF & Post-Test Registry     | FINAL REVIEW REQUIRED  |
ANX-009 EVID-0.2 Evidence Dictionary THRESHOLDS PILOT-DEPENDENT
| ANX-010 | UIG-LIB-0.2               | PILOT BASELINE                   |
| ------- | ------------------------- | -------------------------------- |
| ANX-011 | SYN-0.2 Synthesis Library | PILOT BASELINE                   |
| ANX-012 | CLAIM-DICT-0.1            | STRUCTURED MATRIX TO CONSOLIDATE |
| ANX-013 | ACTION-REG-0.1            | CLAIM→ACTION MAPPING OPEN        |
| ANX-014 | Forbidden Claim Registry  | READY TO CONSOLIDATE             |
| ANX-015 | GOLDEN-P1.0               | MACHINE-READABLE DATASET TO      |
CREATE
| ANX-016 | Requirement Traceability Matrix | TO CONSOLIDATE       |
| ------- | ------------------------------- | -------------------- |
| ANX-017 | Data Dictionary                 | TO CREATE            |
| ANX-018 | API-SPEC-0.1                    | TO CONSOLIDATE       |
| ANX-019 | O0 Research Kit                 | PARTIALLY READY      |
| ANX-020 | Open Item Register              | READY TO CONSOLIDATE |
| ANX-021 | Decision Register               | READY TO CONSOLIDATE |
6. Governança de versão
 Versão documental e versão metodológica são independentes. Corrigir redação do documento pode mudar MGH-SCORE-
SPEC-0.1 para 0.2 sem alterar SCORE-P1.0.
 Mudança em chave, algoritmo ou interpretação substantiva exige nova versão do componente metodológico
correspondente.
 Document status: DRAFT, CONTENT_COMPLETE, IN_REVIEW, FROZEN, PUBLISHED, SUPERSEDED, ARCHIVED.
 Rule status: DRAFT, CANDIDATE, PILOT, APPROVED, DEPRECATED, RETIRED.
 Conflito entre documento narrativo e anexo canônico deve ser tratado como SPECIFICATION CONFLICT, nunca resolvido
silenciosamente.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-MASTER-INDEX | v0.1
7. Estado atual
Eixo Estado
Engenharia pré-desenvolvimento 100% concluída no escopo planejado da Fase 2
Documentação Conteúdo consolidado; artefatos finais em preparação
Implementação Ainda não iniciada
Validação PILOT / NOT VALIDATED
O0 Não iniciada
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-EXEC-BRIEF | v0.1
DOCUMENTO 01
Executive Product Brief
Código MGH-EXEC-BRIEF
Versão documental 0.1
Componente relacionado MGH-DHP-0.1
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
O teste mede. O Motor interpreta. O gestor decide.
1. Visão do produto
O Mapa de Governo Humano™ (MGH™) é um sistema de avaliação aplicado ao contexto profissional para aumentar a
capacidade de um gestor compreender quem está diante dele e escolher uma forma mais inteligente de liderar. Ele não
existe para definir identidades psicológicas absolutas nem para substituir avaliação de competência, maturidade,
desempenho ou contexto.
Pessoas diferentes não precisam necessariamente de governos iguais.
2. Arquitetura conceitual
Camada Função
PRC™ Preferências de Representação e Comunicação: Visual, Auditiva e
Cinestésica.
PC Padrões Comportamentais D, I, S e C, com base conceitual
histórica em Marston e desenvolvimentos posteriores dos
instrumentos DISC.
DR™ Dinâmica de Reação: Velocidade, Impacto, Persistência e
Externalização.
Motor de Governo™ Interpreta evidências versionadas e autoriza claims e ações
gerenciais.
Manual de Governo™ Transforma claims autorizados em orientações práticas ao gestor.
O MGH não mede diretamente inteligência, competência técnica, caráter, honestidade, saúde mental, produtividade,
potencial absoluto, maturidade profissional ou adequação automática ao cargo.
3. MGH-P1.0 - estrutura do piloto
Elemento Quantidade
Cenários principais 48
Respostas pontuáveis 56
PC forced-choice 24
PRC forced-choice 8
PRC independent groups 4 / 12 ratings
DR 12
SELF pós-teste 8
Relation Groups 6
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-EXEC-BRIEF | v0.1
4. Objetivo imediato - Fase A / Pilot Core
A primeira contratação não deve construir o produto comercial completo. Deve construir a fundação correta para
executar a Onda 0 com integridade: Participant App, Instrument Registry, Response/Event Engine, Admin O0, Score
Engine, versionamento, segurança, testes e deploy.
Usuários e papéis
Papel Responsabilidade
PARTICIPANT Responder ao assessment por link seguro.
RESEARCHER Acompanhar O0, entrevistas, flags e ocorrências.
METHODOLOGIST Revisar itens, hipóteses, mudanças e Gate.
ADMIN Gerenciar usuários, acessos, configuração e operação técnica.
5. Jornada do participante
Link seguro → Boas-vindas → Consentimento → Contexto profissional → Instruções → 48 cenários → SELF →
Feedback → Revisão final → Submit → Confirmação. Na Onda 0 não existe relatório automático ao participante.
6. Direção arquitetural
 Web App responsivo inicialmente; mobile-first para participante e desktop-first responsivo para administração.
 Modular monolith como direção inicial; não microservices por antecipação.
 Banco relacional e versionamento explícito de Instrument, Scoring, Evidence, Interpretation e Report.
 RAW append-only; novos algoritmos geram novos Runs e nunca sobrescrevem resultados históricos.
 Identity Vault separado dos dados metodológicos.
 IA não é requisito da Fase A e jamais recebe autoridade para interpretar respostas RAW.
7. Fora do escopo da Fase A
Relatório comercial, Assinatura de Governo externa, Manual de Governo externo, IA generativa, Mapa de Relação™,
Sala de Comando Humana™, dashboard organizacional, matching pessoa/cargo, compatibilidade percentual, app
nativo, pagamentos, CRM, gamificação e MGH 360™.
8. Critério de sucesso
A Fase A é aceita quando o instrumento publicado executa 48 cenários e 56 respostas corretamente, preserva RAW e
eventos, randomiza apenas o permitido, retoma sessões sem alterar presentation order, conclui submit de forma
idempotente, executa SCORE-P1.0 com Golden Cases 100% aprovados e atende aos requisitos mínimos de
segurança, backup, restore e auditoria.
9. Propriedade e continuidade
Repositório, cloud, domínio, banco, documentação, backups e credenciais principais devem permanecer sob controle da
empresa/projeto. Os ativos metodológicos - item bank, scoring, Evidence Dictionary, UIG Library, Claims, Actions e
demais regras - permanecem ativos do MGH/M2M.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-FUNC-SPEC | v0.1
DOCUMENTO 02
Functional Specification
Código MGH-FUNC-SPEC
Versão documental 0.1
Componente relacionado Fase A - Pilot Core
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
1. Escopo funcional
Esta especificação descreve o comportamento da aplicação do participante e do ambiente interno da Onda 0. O objetivo
é garantir um fluxo padronizado, rastreável, retomável e incapaz de alterar silenciosamente dados já coletados.
2. Estados do Assessment
Estado Semântica
CREATED Criado, ainda não iniciado.
STARTED Acesso aberto e início registrado.
IN_PROGRESS Respostas em andamento.
COMPLETED Submit final válido; respostas bloqueadas.
ABANDONED Iniciado e não concluído conforme política futura.
WITHDRAWN Retirada de participação; não implica delete automático.
INVALIDATED Inadequado para análise específica, com RAW preservado.
3. Fluxo do participante
1. Acessar link individual seguro e imprevisível.
2. Ler boas-vindas e consentimento versionado.
3. Preencher contexto profissional obrigatório.
4. Ler instruções oficiais do MGH-P1.0.
5. Responder um cenário por tela, com autosave.
6. Poder voltar e revisar antes do submit.
7. Concluir os 8 SELF e o feedback pós-teste.
8. Revisar completude e realizar submit final.
9. Receber confirmação neutra; sem resultado automático em O0.
Regras de experiência
 Progresso exibido como x de 48 cenários, não 56 respostas.
 Retomada na primeira etapa incompleta.
 Option Presentation deve permanecer idêntica após resume.
 Falha de autosave não pode permitir avanço silencioso.
 PC e PRC Forced randomizam alternativas; DR não randomiza; PRC Independent pode randomizar ordem de blocos
V/A/C mantendo escala 1→5.
 O frontend não recebe score target, facet signal ou relation group quando esses campos não são necessários à
apresentação.
4. Submit final
O backend valida consentimento, contexto profissional, 48 cenários, 56 respostas pontuáveis, 8 SELF e feedback
obrigatório. Em transação, registra submit/status/event, marca COMPLETED, bloqueia respostas e então agenda o
scoring de forma idempotente.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-FUNC-SPEC | v0.1
Caso Resultado esperado
FLOW-001 - 55/56 respostas ASSESSMENT_NOT_READY; permanece IN_PROGRESS.
FLOW-002 - assessment completo COMPLETED; respostas bloqueadas; score job único.
FLOW-003 - tentativa de edição pós-complete ASSESSMENT_ALREADY_COMPLETED; RAW inalterado.
5. Admin / Research O0
A interface interna deve suportar, de forma simples e auditável: Login; Dashboard O0; Participantes; Criar participante;
Gerar assessment/link; Assessment detail; Cognitive Interview; Cognitive Item Review; Audit Flags; Occurrences; Item
Survival; Change Log; Hypothesis Register; Gate Review; Internal Scores.
6. RAW e histórico de resposta
RESPONSE guarda o estado final corrente antes do submit. RESPONSE_EVENT preserva a trajetória: primeira
seleção, alterações, navegação, retomadas e submit. Após COMPLETED, nenhum usuário interno edita respostas;
correções metodológicas usam ocorrência/invalidation, não alteração do RAW.
7. Exportações
Exportação pseudonimizada é o padrão. Exportação identificada exige permissão especial e auditoria. CSV/XLSX são
aceitáveis. O Admin O0 não deve depender de planilha como banco principal.
8. Erros funcionais padronizados
Código público Uso
INVALID_ACCESS Token ou acesso inválido.
ASSESSMENT_ALREADY_COMPLETED Tentativa de modificar avaliação concluída.
ASSESSMENT_NOT_AVAILABLE Assessment indisponível.
RESPONSE_SAVE_FAILED Falha de persistência.
ASSESSMENT_NOT_READY Completude insuficiente para submit.
SESSION_CONFLICT Conflito de sessão simultânea.
Erros internos incluem VERSION_MISMATCH, OPTION_NOT_PRESENTED, INVALID_OPTION,
INVALID_SCENARIO_STATE, SCORE_CONFIGURATION_ERROR, INSTRUMENT_CONFIGURATION_ERROR e
UNAUTHORIZED_ACTION.
9. Priorização da Fase A
Prioridade Conteúdo
P0 - Blocker Assessment, RAW, versionamento, submit, score, segurança
fundamental, Golden Cases.
P1 - Pilot Critical Research screens, interviews, flags, occurrences, resume, events,
exports.
P2 - Enhancement Polimento, analytics adicionais e recursos não necessários à
integridade da O0.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-ARCH-DATA | v0.1
DOCUMENTO 03
Architecture & Data Model
Código MGH-ARCH-DATA
Versão documental 0.1
Componente relacionado DATA-MODEL-0.1 / API-SPEC-0.1
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
O banco é desenhado em torno da rastreabilidade da evidência, não do relatório final.
1. Direção arquitetural
 Modular monolith na primeira fase; separar módulos por responsabilidade, sem microservices prematuros.
 Banco de dados relacional como classe tecnológica preferida; UUIDs como chaves técnicas e códigos humanos
separados.
 Ambientes DEV, STAGING e PILOT/PROD realmente separados.
 Configuração de instrumento e scoring versionada e publicada, não hard-coded em telas.
 Published rules e Runs imutáveis; rerun cria nova execução.
2. Camadas de dados
Camada Regra
RAW Append-only; captura respostas, eventos e apresentação original.
CLEAN Transformações documentadas e reproduzíveis.
DERIVED Scores recalculáveis por versão.
INTERPRETATION Evidence/UIG/Claims/Actions recalculáveis por versão.
3. Identidade e assessment
PARTICIPANT_IDENTITY funciona como Identity Vault. PROFESSIONAL_CONTEXT pertence ao assessment, não à
identidade permanente. Score, Evidence e Interpretation não precisam receber PII.
4. Entidades essenciais da Fase A
Entidade / grupo Responsabilidade
PARTICIPANT / PARTICIPANT_IDENTITY pseudônimo e dados identificadores separados
ASSESSMENT / PROFESSIONAL_CONTEXT instância, estado e contexto
CONSENT_VERSION / ASSESSMENT_CONSENT consentimento versionado
RELEASE_MANIFEST / INSTRUMENT_VERSION amarração de versões
SCENARIO / ITEM / ITEM_TEXT_VERSION / OPTION conteúdo metodológico publicado
OPTION_PRESENTATION ordem exata das alternativas apresentadas
RESPONSE / RESPONSE_EVENT estado final e trajetória
RELATION_GROUP / SELF_RESPONSE / PARTICIPANT_FEEDBACK pesquisa
COGNITIVE_INTERVIEW / COGNITIVE_ITEM_REVIEW laboratório cognitivo
AUDIT_FLAG / OCCURRENCE qualidade e ocorrências
SCORING_RUN / DERIVED_SCORE pontuação versionada
HYPOTHESIS / ITEM_SURVIVAL / GATE_REVIEW pesquisa e decisão
CHANGE_LOG / AUDIT_LOG governança e auditoria
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-ARCH-DATA | v0.1
5. Release Manifest
Cada assessment deve ficar amarrado a um manifesto imutável contendo, no mínimo: instrument_version,
item_bank_version, scoring_version, consent_version e, quando aplicável, evidence/interp/claim/action/language/report
versions, além de flags de validation_status e decision_use_allowed.
6. Scoring e interpretações futuras
SCORING_RUN é imutável e pode ter input_hash. Nova versão de algoritmo gera novo Run. Evidence e Interpretation
seguem o mesmo modelo, com modos RESEARCH_INTERNAL, OFFICIAL e SHADOW. Relações de lineage
importantes devem ser relacionais, não escondidas apenas em JSON.
7. Concorrência e idempotência
Operações críticas - autosave, submit, scoring e jobs futuros - precisam de controle de concorrência, constraints e
chaves de idempotência. Recomenda-se uma sessão ativa por assessment e proteção contra overwrites silenciosos.
8. Assíncrono e observabilidade
Jobs podem assumir PENDING, RUNNING, COMPLETED, FAILED e RETRYING. Score, evidence, report e
exportações podem ser assíncronos. Logs devem usar correlation IDs, redaction de PII e alertas para falhas de save,
submit, jobs e banco.
9. CI/CD e continuidade
Fluxo mínimo: Git → Pull Request → build/lint/unit/Golden/integration → staging → aprovação → pilot. Falha em Golden
Case bloqueante impede deploy. Backups precisam ser restaurados em teste real, e repositório/cloud/banco devem
permanecer sob controle da empresa.
10. Fronteira da IA
A arquitetura futura deve permitir que IA receba apenas Claims, Actions, Constraints e fatos aprovados. RAW,
identidade e score target não devem ser enviados ao modelo por padrão. O sistema deve funcionar sem IA.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™  |  MGH-INST-SPEC  |  v0.1
DOCUMENTO 04
MGH-P1.0 Instrument Specification
Código MGH-INST-SPEC
Versão documental 0.1
Componente relacionado MGH-P1.0 / BANK-0.2
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL - METHODOLOGY IP
Owner MGH™ / M2M
Data 20/10/2026
O instrumento é conteúdo metodológico versionado. A interface pode apresentá-lo; não pode
reinterpretá-lo.
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
1. Estrutura congelada
Elemento Quantidade
Cenários visíveis 48
Respostas pontuáveis 56
PC forced-choice 24
PRC forced-choice 8
PRC independent groups 4
PRC independent ratings 12
DR 12
SELF 8
Relation Groups 6
A barra de progresso utiliza cenários concluídos / 48. Os quatro grupos PRC Independent geram três ratings cada, por
isso 48 cenários produzem 56 respostas pontuáveis.
2. Tipos de cenário
Tipo Comportamento
PC_FORCED_CHOICE 1 situação + 4 alternativas; escolha única.
PRC_FORCED_CHOICE 1 situação + 3 alternativas; escolha única.
PRC_INDEPENDENT 3 ratings independentes de 1 a 5.
DR_ORDINAL 1 situação + 4 alternativas ordinais; escolha única.
3. Ordem oficial dos 48 cenários
| #   | Item     | Tipo            |
| --- | -------- | --------------- |
| 1   | PC-001   | PC Forced       |
| 2   | PRC-001  | PRC Forced      |
| 3   | TH-003   | DR Ordinal      |
| 4   | PC-009R  | PC Forced       |
| 5   | TH-001   | DR Ordinal      |
| 6   | PC-021   | PC Forced       |
| 7   | PRC-004R | PRC Independent |
| 8   | PC-014   | PC Forced       |
| 9   | PC-007   | PC Forced       |
| 10  | PRC-003  | PRC Forced      |
| 11  | TH-010   | DR Ordinal      |
| 12  | PC-035   | PC Forced       |
| 13  | TH-006   | DR Ordinal      |
| 14  | PC-018   | PC Forced       |
| 15  | PRC-012  | PRC Forced      |
| 16  | PC-019   | PC Forced       |
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™  |  MGH-INST-SPEC  |  v0.1
| #   | Item     | Tipo            |
| --- | -------- | --------------- |
| 17  | PC-016   | PC Forced       |
| 18  | PRC-005  | PRC Forced      |
| 19  | TH-012   | DR Ordinal      |
| 20  | PC-010   | PC Forced       |
| 21  | TH-004R  | DR Ordinal      |
| 22  | PC-028   | PC Forced       |
| 23  | PRC-011  | PRC Forced      |
| 24  | PC-012   | PC Forced       |
| 25  | PC-002   | PC Forced       |
| 26  | PRC-006R | PRC Independent |
| 27  | TH-007   | DR Ordinal      |
| 28  | PC-020R  | PC Forced       |
| 29  | TH-002   | DR Ordinal      |
| 30  | PC-023   | PC Forced       |
| 31  | PRC-002  | PRC Forced      |
| 32  | PC-033   | PC Forced       |
| 33  | PC-027   | PC Forced       |
| 34  | PRC-014I | PRC Independent |
| 35  | TH-013   | DR Ordinal      |
| 36  | PC-036   | PC Forced       |
| 37  | TH-008R  | DR Ordinal      |
| 38  | PC-015   | PC Forced       |
| 39  | PRC-009  | PRC Forced      |
| 40  | PC-008   | PC Forced       |
| 41  | PC-017   | PC Forced       |
| 42  | PRC-010I | PRC Independent |
| 43  | TH-015   | DR Ordinal      |
| 44  | PC-029   | PC Forced       |
| 45  | TH-009R  | DR Ordinal      |
| 46  | PC-005   | PC Forced       |
| 47  | PRC-015  | PRC Forced      |
| 48  | PC-011R  | PC Forced       |
A ordem 1-48 não randomiza. Alterar a sequência exige nova versão do instrumento.
4. Política de randomização
| Família | Randomiza? | Regra                                 |
| ------- | ---------- | ------------------------------------- |
| PC      | Sim        | Randomizar posição das alternativas,  |
preservando option_id canônico.
| PRC Forced | Sim | Randomizar V/A/C sem revelar a  |
| ---------- | --- | ------------------------------- |
modalidade.
PRC Independent Parcial Pode randomizar ordem dos blocos V/A/C;
escala 1→5 permanece fixa.
| DR  | Não | Ordem ordinal integra a regra de scoring. |
| --- | --- | ----------------------------------------- |
5. PRC, PC e DR
PC P1.0 usa 24 itens: PC-001, 002, 005, 007, 008, 009R, 010, 011R, 012, 014, 015, 016, 017, 018, 019, 020R, 021,
023, 027, 028, 029, 033, 035 e 036.
PRC Forced usa PRC-001, 002, 003, 005, 009, 011, 012 e 015. PRC Independent usa PRC-004R, PRC-006R,
PRC-010I e PRC-014I.
DR mantém os códigos legados TH: Velocidade TH-001/006/007; Impacto TH-004R/008R/009R; Persistência
TH-002/010/015; Externalização TH-003/012/013. O construto é DR™, mas os códigos canônicos não são renomeados
silenciosamente.
6. Relation Groups
| Grupo | Itens           | Tema                  |
| ----- | --------------- | --------------------- |
| RG-01 | PC-007 + PC-027 | Autonomia             |
| RG-02 | PC-001 + PC-023 | Decisão sob incerteza |
| RG-03 | PC-016 + PC-033 | Constância            |
| RG-04 | PC-021 + PC-028 | Critério/ambiguidade  |
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-INST-SPEC | v0.1
Grupo Itens Tema
RG-05 TH-002 + TH-015 Persistência pós-conflito
RG-06 TH-003 + TH-012 Externalização em contexto negativo
Relation Groups não aparecem ao participante e não geram honesty/sincerity/consistency percentage no P1.0.
7. Instruções e pós-teste
O texto de abertura orienta o participante a responder sobre comportamento profissional atual, sem respostas
certas/erradas, sem tentar construir perfil, e informa que o instrumento não avalia inteligência, caráter, competência
profissional ou saúde mental. Alterações semânticas exigem Change Request metodológico.
Após os 48 cenários são aplicados SELF-01 a SELF-08 em escala 1-5. SELF não entra no score. Depois vem feedback
estruturado sobre dificuldade, ausência de alternativa adequada, confusão e desejabilidade social/profissional.
8. Publicação, imutabilidade e UI
 Instrument Validator deve confirmar 48 cenários, 24 PC, 8 PRC Forced, 4 PRC Independent, 12 DR, 56 respostas, 8 SELF
e 6 Relation Groups.
 Publicado P1.0 é imutável; mudança semântica cria nova versão.
 Frontend não recebe score_target/facet_signal/relation_group desnecessários.
 Retomada preserva exatamente Option Presentation original.
 UI pode melhorar tipografia, responsividade, acessibilidade e microinterações sem alterar semântica ou induzir resposta.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-SCORE-SPEC | v0.1
DOCUMENTO 05
Scoring Specification
Código MGH-SCORE-SPEC
Versão documental 0.1
Componente relacionado SCORE-P1.0
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL - METHODOLOGY IP
Owner MGH™ / M2M
Data 20/10/2026
Mesma entrada + mesma versão de scoring = mesmo resultado, sempre.
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
1. Contrato do Score Engine
O Score Engine recebe respostas canônicas de um assessment COMPLETED e compatível e produz medidas
matemáticas. Ele não decide se algo é bom, ruim, alto, baixo, consistente ou predominante. Essas classificações
pertencem às camadas posteriores.
2. PC - Padrões Comportamentais
Cada um dos 24 itens forced-choice soma 1 ponto para exatamente uma dimensão D, I, S ou C. Todos os pesos P1.0
são 1. A soma D + I + S + C deve ser 24.
Frequência relativa: RF_d = PC_d / 24. O resultado é ipsativo e intraindividual; não autoriza comparação direta entre
pessoas como se fosse score normativo.
Ranking aceita empates; nenhum desempate artificial por ordem alfabética ou de código. GAP12 e GAP23 são métricas
exploratórias. Entropia de Shannon normalizada: H = -sum(p_d ln p_d) / ln(4), com 0 ln 0 = 0.
Facetas
Facet signal é nullable. Uma opção pode pontuar a dimensão principal sem gerar faceta. Quando autorizado, armazenar
hits e opportunities; 2/2 não significa “100% autonomia”. Facetas são reportable=false no P1.0.
3. PRC™
PRC Forced
Oito escolhas V/A/C: V + A + C = 8. Frequência relativa = count / 8. Não rotular 1.0 como “100% visual”.
PRC Independent
Quatro grupos com ratings independentes V/A/C de 1 a 5. Média por modalidade = soma dos quatro ratings / 4.
Normalização opcional: ((mean - 1) / 4) × 100. Os três resultados permanecem independentes; 5/5/5 é válido e não vira
33/33/33.
PRC Forced e Independent nunca são fundidos pelo Score Engine em um “final PRC”. Convergência é função do
Evidence Engine.
4. DR™
Eixo Itens Chave A/B/C/D
Velocidade TH-001, TH-006, TH-007 4 / 3 / 2 / 1
Impacto TH-004R, TH-008R, TH-009R 4 / 3 / 2 / 1
Persistência TH-002, TH-010, TH-015 1 / 2 / 3 / 4
Externalização TH-003, TH-012, TH-013 4 / 3 / 2 / 1
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-SCORE-SPEC | v0.1
Cada eixo soma de 3 a 12. Normalização: ((raw - 3) / 9) × 100. Alto não significa bom e baixo não significa ruim. Não
existe DR Total, Pressure Score ou Resilience Score no P1.0.
5. Exclusões
SELF, feedback pós-teste e Relation Groups não entram no score principal. Divergência em Relation Group não reduz
automaticamente PC/PRC/DR. Ocorrências controlam elegibilidade de análises, mas não reescrevem RAW.
6. Outputs mínimos
Família Outputs
PC D/I/S/C raw, relative frequencies, ranking/ties, GAP12/GAP23,
entropy, facets autorizadas.
PRC Forced V/A/C raw e relative.
PRC Independent V/A/C means e normalização opcional.
DR 4 raw sums e 4 eixos normalizados.
Lineage source items por métrica.
Metadata run IDs e versões.
7. Golden Cases matemáticos principais
ID Entrada Esperado
GOLD-SCORE-001 PC 6/6/6/6 0.25 cada; TOP_TIE; GAP12=0; entropy=1.
GOLD-SCORE-002 PC 24/0/0/0 D=1.0; entropy=0; GAP12=24.
GOLD-SCORE-003 PC 9/7/3/5 D=.375; I=.291666; S=.125; C=.208333; ranks
D>I>C>S; gaps 2/2.
GOLD-PRC-003 V 5,5,4,5; A 4,4,4,4; C 3,3,4,2 Means 4.75/4/3; normalized 93.75/75/50.
GOLD-PRC-004 Todos ratings independent =5 V=A=C=5; não 33/33/33.
GOLD-DR-004 Persistência D/D/D raw=12; normalized=100.
8. Determinismo, versionamento e precisão
RAW idêntico + instrument_version idêntica + scoring_version idêntica deve produzir Derived Scores idênticos.
Armazenar precisão matemática suficiente e arredondar apenas na apresentação. Nova versão cria novo
SCORING_RUN; resultados antigos nunca são sobrescritos.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-O0-PROTOCOL | v0.1
