---
name: 02-documento-06
description: Trecho integral: DOCUMENTO 06.
source: docs/001/MGH_Developer_Handoff_Package_Master_v0.1.pdf
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 581-1164
---

# DOCUMENTO 06

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

DOCUMENTO 06
O0 Research & Pilot Protocol
Código MGH-O0-PROTOCOL
Versão documental 0.1
Componente relacionado PILOT-O0-0.1
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
A Onda 0 existe para descobrir se o instrumento está sendo compreendido e respondido como
planejado antes de discutirmos validade em escala maior.
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
1. Objetivo e tamanho
O0 é um laboratório cognitivo estruturado com baseline de 8 a 12 participantes. Não pretende provar validade,
confiabilidade ou capacidade preditiva. Busca problemas de compreensão, ambiguidade, desejabilidade, contexto,
alternativas e experiência técnica.
2. Fluxo oficial
Convite → Consentimento → Aplicação natural → SELF → Feedback → Submit → Entrevista cognitiva retrospectiva →
Item Review → Flags/Ocorrências → Item Survival → Change Log → Hypothesis Register → Gate Review.
Regra crítica
Não fazer think-aloud na primeira passagem. Primeiro aplicação natural; depois entrevista
retrospectiva.
3. Participantes
Usar pseudônimos MGH-O0-001 etc. O criador pode participar, mas não é gabarito. Buscar diversidade funcional
suficiente para aumentar a chance de encontrar problemas de compreensão e evitar amostra formada apenas por
pessoas excessivamente próximas ao projeto.
4. Entrevista cognitiva
O entrevistador investiga o que o participante entendeu antes de explicar a intenção do item. Probes úteis:
compreensão, paráfrase, confiança, situação lembrada, motivo de escolha e contexto que mudaria a resposta. Não
transformar a entrevista em terapia.
5. Flag System
Código Significado
CMP Problema de compreensão
AMB Ambiguidade
NFA Nenhuma alternativa adequada
TWO Duas alternativas igualmente adequadas
DES Desejabilidade social/profissional
CTX Contexto altera fortemente a resposta
VOC Vocabulário problemático
RED Repetição percebida
COG Esforço cognitivo excessivo
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-O0-PROTOCOL | v0.1
Código Significado
MAP Resposta não representa o construto pretendido
Severidade: MINOR, MODERATE, MAJOR e INVALIDATING. Uma flag isolada não condena o item; padrões entre
participantes importam mais.
6. Occurrence Log e escopo de exclusão
Ocorrências técnicas/ambientais são separadas de flags de item. Escopos: NONE, ITEM, TIMING_ANALYSIS,
ASSESSMENT e SPECIFIC_ANALYSIS. Invalidation não apaga RAW.
7. Hipóteses H001-H012
ID Hipótese exploratória
H001 PRC.V Independent ↔ SELF-06
H002 PRC.A ↔ SELF-07
H003 PRC.C ↔ SELF-08
H004 Autonomia ↔ SELF-02
H005 Critério ↔ SELF-03
H006 DR Externalização ↔ SELF-04
H007 DR Persistência ↔ SELF-05
H008 Decision Speed ↔ SELF-01
H009 Relation Groups mais coerentes que pares não relacionados
H010 PC sem concentração extrema sistemática em mesma alternativa
H011 PRC Forced e Independent com alguma convergência, não equivalência
perfeita
H012 Eixos DR parcialmente independentes
8. Item Survival
Ao final da wave, cada item recebe KEEP, REWRITE_MINOR, REWRITE_MAJOR, REKEY_REVIEW, RESERVE,
RETIRE ou NEW_ITEM_REQUIRED. Nenhuma alteração silenciosa no meio da wave; problemas graves podem exigir
interrupção, nova versão e nova rodada.
9. Gate O0 → O1
Decisão Significado
ADVANCE Pode seguir para O1.
ADVANCE_WITH_MINOR_FIXES Correções limitadas e documentadas.
REPEAT_O0_WAVE Mudanças importantes exigem nova verificação cognitiva.
STOP_AND_REDESIGN Problemas estruturais exigem revisão profunda.
O Gate é julgamento metodológico documentado, não uma nota automática. O1 está planejada em aproximadamente
40-60 participantes; O2 em ~200-400, a confirmar com modelo psicométrico e especialista.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™  |  MGH-TEST-SPEC  |  v0.1
DOCUMENTO 07
Golden Cases & Acceptance Test
Specification
| Código                 |     | MGH-TEST-SPEC                 |     |
| ---------------------- | --- | ----------------------------- | --- |
| Versão documental      |     | 0.1                           |     |
| Componente relacionado |     | GOLDEN-P1.0                   |     |
| Baseline               |     | MGH-MASTER-P1.0-RC1           |     |
| Status                 |     | CONTENT_COMPLETE - FOR REVIEW |     |
| Confidencialidade      |     | CONFIDENTIAL                  |     |
| Owner                  |     | MGH™ / M2M                    |     |
| Data                   |     | 20/10/2026                    |     |
Nenhuma implementação é aceita porque “parece estar funcionando”. Ela precisa produzir resultados
conhecidos a partir de entradas conhecidas.
1. Classes e severidade
| Classe         |     | Objetivo                         |     |
| -------------- | --- | -------------------------------- | --- |
| UNIT           |     | Regra isolada                    |     |
| INTEGRATION    |     | Módulos integrados               |     |
| E2E            |     | Fluxo completo                   |     |
| REGRESSION     |     | Proteger comportamento histórico |     |
| SECURITY       |     | Acesso, exposição e abuso        |     |
| Severidade     |     | Regra                            |     |
| BLOCKING       |     | Não pode ir para O0.             |     |
| CRITICAL_PILOT |     | Compromete operação do piloto.   |     |
NON_BLOCKING Pode ser corrigido sem contaminar integridade central, com issue
registrada.
Antes da O0, 100% dos testes BLOCKING e dos CRITICAL_PILOT do fluxo essencial devem passar.
2. Score Golden Cases
| ID  | Entrada | Esperado | Severidade |
| --- | ------- | -------- | ---------- |
GOLD-SCORE-001 PC 6/6/6/6 0.25 cada, TOP_TIE, GAP12=0,  BLOCKING
entropy=1
| GOLD-SCORE-002 | PC 24/0/0/0 | D=1, entropy=0, GAP12=24 | BLOCKING |
| -------------- | ----------- | ------------------------ | -------- |
GOLD-SCORE-003 PC 9/7/3/5 frequências exatas; ranking  BLOCKING
D>I>C>S; gaps 2/2
GOLD-SCORE-006 Mesmas escolhas com posições  scores idênticos BLOCKING
diferentes
GOLD-PRC-004 Independent todos 5 V=A=C=5; não 33/33/33 BLOCKING
GOLD-PRC-005 Forced concentrado + Independent  manter arquiteturas separadas BLOCKING
alto em 3 modalidades
GOLD-DR-004 Persistência D/D/D raw 12; normalized 100 BLOCKING
GOLD-DR-005 DR randomizable=true configuração rejeitada BLOCKING
3. Instrument Validator
A versão publica somente se houver exatamente 48 cenários, scenario 1=PC-001, scenario 48=PC-011R, 24 PC, 8
PRC Forced, 4 PRC Independent, 12 DR, 56 respostas pontuáveis, 8 SELF e 6 Relation Groups.
4. Flow Tests
| ID  | Caso |     | Esperado |
| --- | ---- | --- | -------- |
FLOW-001 55/56 respostas e submit ASSESSMENT_NOT_READY; permanece
IN_PROGRESS.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™  |  MGH-TEST-SPEC  |  v0.1
| ID  | Caso | Esperado |
| --- | ---- | -------- |
FLOW-002 Assessment completo COMPLETED; lock; FINAL_SUBMIT; score job
único.
| FLOW-003 | Edição após complete | ASSESSMENT_ALREADY_COMPLETED;  |
| -------- | -------------------- | ------------------------------ |
RAW intacto.
| FLOW-004 | Submit duplicado          | Um único fechamento lógico. |
| -------- | ------------------------- | --------------------------- |
| FLOW-005 | option_id não apresentada | OPTION_NOT_PRESENTED.       |
FLOW-006 version mismatch VERSION_MISMATCH; sem output oficial.
| FLOW-007 | invalidation | RAW e Runs preservados; audit log.       |
| -------- | ------------ | ---------------------------------------- |
| FLOW-008 | withdrawn    | Sem DELETE CASCADE; workflow registrado. |
5. Security Tests
Participant API não expõe score targets; researcher sem identity.read não acessa Identity Vault; token inválido retorna
mensagem neutra; participante A não acessa B; senha/token completo em log é FAIL; invalidação gera Audit Log;
endpoints públicos têm proteção contra abuso.
6. Interpretation Golden Cases futuros
Mesmo antes de thresholds empíricos, o Motor pode ser testado com evidências sintéticas classificadas:
Autonomia×Critério ativa SIN-DEL-001; contexto específico prevalece sobre tendência geral; Impacto alto +
Externalização baixa não autoriza “repressão”; lineage compartilhada não promove Evidence Level; contradição lógica
gera integrity flag; insuficiência gera silêncio; claims proibidos são bloqueados; Semantic Compression elimina
repetição.
7. Acceptance Matrix
Cada requisito crítico deve ser rastreado como Requirement ID → Test ID → tipo → severidade → expected result →
actual result → PASS/FAIL → evidence → version. Golden Cases bloqueantes integram CI/CD.
8. Pre-O0 Gate
Instrument Validator, Score Golden Cases, Participant E2E, resume, autosave, submit/idempotency, RAW/Event
preservation, Admin O0, security blockers, backup, restore, exports, consent version e Release Manifest precisam estar
aprovados antes de autorizar MGH-O0-001.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-SEC-NFR | v0.1
DOCUMENTO 08
Security, Privacy & Nonfunctional
Requirements
Código MGH-SEC-NFR
Versão documental 0.1
Componente relacionado SEC-BASE-0.1
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
No MGH, proteger a evidência significa proteger também a pessoa que produziu essa evidência.
1. Classificação da informação
Classe Exemplo
PUBLIC Material institucional público.
INTERNAL Documentação operacional não sensível.
CONFIDENTIAL Regras metodológicas, resultados pseudonimizados e arquitetura.
RESTRICTED PII, tokens, credenciais, secrets e controles críticos.
2. Privacidade por design
 Coletar apenas dados necessários à finalidade definida; evitar CPF, RG, endereço, salário, religião e dados de saúde no
O0.
 Separar PARTICIPANT_IDENTITY em Identity Vault; Score/Evidence/Interpretation não recebem PII.
 Export pseudonimizado por padrão; export identificado com permissão especial e auditoria.
 Consentimento e privacy notice versionados; retention e base legal comercial permanecem sob revisão jurídica.
3. Autenticação, autorização e tokens
Usuários internos usam credenciais individuais, password hashing moderno, sessões seguras e RBAC granular. MFA é
fortemente recomendado no piloto e obrigatório para funções administrativas sensíveis em produção comercial. Tokens
de participante devem ser imprevisíveis, revogáveis, não sequenciais, sem PII e mascarados em logs.
4. Infraestrutura e segredos
HTTPS/TLS é obrigatório. Dados e backups usam proteção adequada em repouso. Secrets não entram no Git nem
ficam hard-coded. DEV, STAGING e PILOT/PROD usam secrets e bases separados. Dados reais não devem ser
copiados para ambientes de desenvolvimento.
5. Logging e auditoria
Separar Response Events, Audit Logs, Technical Logs e Security Logs. Ações sensíveis - login admin, invalidação,
withdrawal, revogação, export, publicação e mudança de permissão - geram auditoria. Logs técnicos evitam PII,
respostas completas e tokens.
6. Backups e recuperação
Backup automático é obrigatório, mas a prontidão exige Restore Test antes da O0. Registrar data, backup, responsável,
tempo e resultado. Desenvolvedor propõe RPO/RTO proporcionais ao piloto e documenta procedimento de
recuperação.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-SEC-NFR | v0.1
7. CI/CD e ownership
Fluxo recomendado: Git → PR → testes → build → staging → homologação → pilot. Repositório, cloud, domínio, banco,
documentação e credenciais principais ficam sob controle da empresa/projeto, assegurando takeover por outro
profissional.
8. Incidentes e observabilidade
Severidade Exemplo
SEV1 Vazamento significativo, perda/corrupção ampla de RAW, acesso
indevido crítico.
SEV2 Submit/autosave/score crítico indisponível ou autorização grave.
SEV3 Funcionalidade secundária afetada.
SEV4 Defeito cosmético.
Monitorar availability, erro rate, DB connectivity, save/submit failures, jobs, latência e storage. Incidente que possa
contaminar dados exige também avaliação metodológica.
9. Requisitos não funcionais
Operação Target inicial
Abertura de cenário percepção <1s quando possível
Salvar resposta ideal <500ms; aceitável <1s em condição normal
Abertura inicial ~<2s
Dashboard ~<2-3s
Scoring segundos
Participant App é mobile-first; Admin desktop-first responsivo. Acessibilidade básica desde o piloto, com objetivo futuro
WCAG AA. P1.0 é pt-BR; tradução de instrumento exige adaptação metodológica, não apenas i18n de interface.
10. Security Gate pré-O0
HTTPS, auth, RBAC, tokens, Identity Vault, secrets fora do repo, PII redaction, public API sem score targets,
backup/restore, ambientes separados, Audit Log, permissões de export e testes críticos de segurança devem estar
PASS antes de participantes reais.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-INTERP-SPEC | v0.1
DOCUMENTO 09
Interpretation Engine Specification
Código MGH-INTERP-SPEC
Versão documental 0.1
Componente relacionado INTERP-0.2
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL - METHODOLOGY IP
Owner MGH™ / M2M
Data 20/10/2026
Nenhuma interpretação pode existir sem uma cadeia rastreável de evidência, regra, claim e ação
autorizada.
AVISO DE PILOTO: Versão experimental para pesquisa e pilotagem. Não representa instrumento psicometricamente validado para
decisões de emprego.
1. Pipeline oficial
RAW Responses → Score Engine → Derived Scores → Evidence Engine → Lineage Check → UIG Engine → Block
Engine → Contextual Precedence → Collision Resolver → Synthesis Engine → Claim Engine → Action Engine →
Semantic Compression → Language Policy → Report Composer.
UIGs não consultam RAW diretamente. O teste mede; o Motor interpreta; o gestor decide.
2. Evidence Dictionary™
Se uma evidência não estiver registrada no EVID-0.2, o Motor não está autorizado a utilizá-la. Estados:
UNCLASSIFIED, WEAK_SIGNAL, RELEVANT, CONSISTENT, CONTEXTUAL, CONTRADICTORY e INSUFFICIENT.
Thresholds quantitativos definitivos permanecem pilot-dependent.
Evidence Levels e teto
E1=SIGNAL, E2=CONVERGENCE, E3=ROBUST CONVERGENCE. No P1.0, external_reporting_max=E2. Cada regra
pode ter max_evidence_level próprio; DEC-004 e DEC-005 permanecem no máximo E1. Evidência derivada não
aumenta força sozinha.
3. Lineage e independência
Toda Evidence Result deve rastrear métricas e itens de origem. Métricas diferentes que compartilham os mesmos itens
não contam automaticamente como fontes independentes. Synthesis força ≤ componente requerido mais fraco, salvo
suporte independente explicitamente autorizado.
4. UIG Library™
Domínio Primárias Modulators
Comunicação COM-001/002/003 -
Delegação DEL-001/002/003/004 -
Accountability ACC-001/002/003 ACC-004/005
Feedback FDB-001/002/003 FDB-004/005
Decisão DEC-001/002/003/004/005 -
Pressão PRS-001/002/003/004 -
Conflito CON-001/002/003 CON-004/005/006
Total oficial: 32 UIGs = 25 PRIMARY + 7 MODULATORS. Semantic Ownership™ assegura que cada evidência tenha
um domínio descritivo principal, reduzindo repetição entre seções.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-INTERP-SPEC | v0.1
5. Blocks, precedência e colisões
Regra Função
B1 Evidência insuficiente
B2 Evidência contraditória
B3 Contexto específico prevalece
B4 Domínio externo ao instrumento
B5 Generalização imprópria
Contextual Precedence™: 1) evidência contextual específica; 2) faceta diretamente relacionada; 3) dimensão geral; 4)
convergência entre lentes; 5) referência histórica. Colisões podem ser complementar, tensão produtiva, contradição
contextual ou contradição lógica.
6. Synthesis Library™
ID Síntese
SIN-DEL-001 Autonomia × Critério
SIN-DEC-001 Velocidade decisória × Análise
SIN-FDB-001 Impacto × Baixa Externalização
SIN-PRS-001 Reação rápida × Impacto elevado
SIN-PRS-002 Persistência elevada × Baixa Externalização
Outras sínteses permanecem CANDIDATE e podem rodar apenas em Shadow Mode, sem output oficial.
7. Claim e Action Engines
CLAIM-DICT-0.1 possui 30 Claims reportáveis. Se um Claim não existe no catálogo, o sistema não pode dizê-lo.
ACTION-REG-0.1 possui 30 ações canônicas. Claim define o que pode ser afirmado; Action define o que o gestor pode
fazer; Constraints impedem que recomendações ultrapassem competência, maturidade, risco, processo ou contexto não
medidos.
8. Forbidden Claim Registry™
Bloqueios globais incluem inteligência, competência, maturidade, caráter, honestidade, saúde mental, diagnóstico, job
fit, hiring, promotion, termination, resiliência, estabilidade emocional, fixed learning style, identidade absoluta, valor
moral, qualidade de liderança e compatibility score.
9. Linguagem e relatório
A linguagem nunca pode ser mais forte que a evidência. E1 usa “as respostas sugerem”, “pode ser útil”, “há um sinal”;
E2 usa “as evidências convergem”, “apareceu de forma recorrente”. E3 fica desabilitado externamente no P1.0. Silêncio
é output válido quando falta evidência.
Report Composer prioriza sínteses, claims contextuais, primários e modifiers, usando Semantic Compression™ para
evitar redundância. A Assinatura de Governo™ é síntese narrativa, não uma tipologia. O Manual de Governo™ organiza
ações em Comunicação, Delegação, Accountability, Feedback, Decisão, Pressão e Conflito.
10. Fronteira da IA
IA futura pode melhorar fluidez e adaptar linguagem, recebendo apenas audience, evidence level, claim codes, action
codes, approved facts, constraints e forbidden claims. Não pode criar interpretação, elevar Evidence Level, alterar
números ou receber autoridade decisória. Fallback determinístico é obrigatório.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL - METHODOLOGY IP

Mapa de Governo Humano™ | MGH-ROADMAP | v0.1
DOCUMENTO 10
Technical Roadmap & Scope Control
Código MGH-ROADMAP
Versão documental 0.1
Componente relacionado Fases A-E
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
Preparar a arquitetura para o futuro não significa construir o futuro inteiro agora.
Neste momento eu não preciso de escala. Eu preciso de integridade.
1. Roadmap oficial
Fase Nome Objetivo
A Pilot Core Executar O0 com integridade.
B Research & Scoring Evoluir análise, versionamento e pesquisa
para O1/O2.
C Motor de Governo™ Evidence, UIG, Blocks, Synthesis, Claims e
Actions.
D MGH Individual Produto individual, Language/Report,
Assinatura e Manual.
E Ecossistema MGH Mapa de Relação, Sala de Comando
Humana e organização.
2. Fase A - contratação inicial
Bloco Entrega
A1 Participant App
A2 Instrument Registry P1.0
A3 Response/Event Engine
A4 Admin & Research O0
A5 Score Engine P1.0
A6 Data/Version/Audit
A7 Security & Infrastructure
A8 Golden Tests & Deployment
A primeira proposta deve detalhar a Fase A em horas, valor, prazo, milestones, dependências, custos recorrentes,
riscos, suporte e critérios de aceite. Fases B-E recebem apenas estimativa arquitetural macro.
3. Fora da Fase A
Não entram: relatório comercial, Assinatura de Governo externa, Manual externo, IA generativa, Mapa de Relação, Sala
de Comando Humana, dashboard empresarial, matching, compatibilidade percentual, app nativo, pagamentos, CRM,
gamificação e MGH 360.
4. Definition of Done da Fase A
P1.0 publicado e validado por configuração; Participant App homologado; 48/56 corretos; RAW/Event preservation;
randomização correta; resume; submit idempotente; Golden Score Cases 100% pass; Admin O0; export; RBAC;
backup/restore; Release Manifest; nenhum blocker crítico aberto.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-ROADMAP | v0.1
5. Scope control
Nova ideia deve ser classificada como PHASE_A_REQUIRED, PHASE_A_OPTIONAL, PHASE_B, PHASE_C,
PHASE_D, PHASE_E ou BACKLOG_FUTURE. O MGH Parking Lot™ preserva boas ideias sem contaminar o sprint
atual.
Bug x mudança de escopo
Se a specification exige que DR não randomize e o software randomiza, isso é bug, não Change Request. Pagamento,
autenticação adicional ou nova funcionalidade fora da specification são novos escopos e devem seguir CR formal.
6. Proposta e milestones
A proposta deve quebrar preço/prazo por Participant App, Admin/Research, Backend/Data, Instrument Registry,
Response/Event, Score, Security/Infra, Tests, Deployment e Documentation. Milestones devem ser verificáveis e ligados
a Acceptance Criteria.
7. Ownership e handoff
Desde o primeiro commit, repo, cloud, database, domain e documentação ficam sob controle da empresa. Ao fim de
cada milestone/contrato: código atualizado, migrations, docs, credenciais, último deploy, known issues, backup status e
test report.
8. Perguntas de governança
A arquitetura deve permitir recalcular no futuro um assessment antigo com algoritmo novo sem perder
score/interpretação originais; preservar versões de item; executar Golden Cases no CI; e permitir takeover por outro
desenvolvedor.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™  |  MGH-OPEN-DECISION  |  v0.1
DOCUMENTO 11
Open Items & Decision Log
| Código                 |     | MGH-OPEN-DECISION             |     |
| ---------------------- | --- | ----------------------------- | --- |
| Versão documental      |     | 0.1                           |     |
| Componente relacionado |     | Governança de decisões        |     |
| Baseline               |     | MGH-MASTER-P1.0-RC1           |     |
| Status                 |     | CONTENT_COMPLETE - FOR REVIEW |     |
| Confidencialidade      |     | CONFIDENTIAL                  |     |
| Owner                  |     | MGH™ / M2M                    |     |
| Data                   |     | 20/10/2026                    |     |
Enquanto uma decisão metodológica não existir, o software não está autorizado a inventá-la.
1. Status de Open Items
Categorias: OPEN, PILOT_DEPENDENT, PSYCHOMETRIC, LEGAL_PRIVACY, TECH_DECISION, FUTURE,
RESOLVED e DEFERRED. Cada item também registra se bloqueia O0, O1, Motor, comercialização ou se é non-
blocking now.
2. Open Items prioritários
| ID  | Tema | Status | Bloqueia |
| --- | ---- | ------ | -------- |
OPEN-MET-001 Thresholds do Evidence Engine PILOT_DEPENDENT Motor
OPEN-MET-002 Evidence Ceiling completo das  PILOT_DEPENDENT Motor
facetas
| OPEN-MET-003 | Claim→Action Matrix integral | OPEN | Fase C |
| ------------ | ---------------------------- | ---- | ------ |
OPEN-LANG-001 Templates determinísticos completos DEFERRED Produto comercial
OPEN-INST-001 Rótulos finais da escala SELF OPEN O0 se não estiverem no BANK
OPEN-INST-002 BANK-0.2 canônico completo OPEN Implementação do instrumento
OPEN-LEGAL-001 Consentimento jurídico final LEGAL_PRIVACY O0 real
OPEN-LEGAL-002 Privacy Notice final LEGAL_PRIVACY O0/comercial
| OPEN-LEGAL-004 | Política de retenção | LEGAL_PRIVACY | Comercial |
| -------------- | -------------------- | ------------- | --------- |
OPEN-PSY-001 Modelo psicométrico futuro do PC  PSYCHOMETRIC O2/O3
forced-choice
| OPEN-PSY-002 | Confiabilidade     | PSYCHOMETRIC | Claims científicos |
| ------------ | ------------------ | ------------ | ------------------ |
| OPEN-PSY-003 | Estrutura fatorial | PSYCHOMETRIC | Validação          |
OPEN-PSY-004 Evidências de validade PSYCHOMETRIC Claims científicos
| OPEN-PSY-005    | Normas                  | PSYCHOMETRIC  | Normative reporting |
| --------------- | ----------------------- | ------------- | ------------------- |
| OPEN-TECH-001   | Stack tecnológico       | TECH_DECISION | Start dev           |
| OPEN-TECH-006   | RPO/RTO do piloto       | TECH_DECISION | O0                  |
| OPEN-SEC-001    | Pentest                 | DEFERRED      | Escala comercial    |
| OPEN-AI-001     | Provedor de IA          | FUTURE        | Fase D              |
| OPEN-FUTURE-001 | Mapa de Relação™        | FUTURE        | Fase E              |
| OPEN-FUTURE-002 | Sala de Comando Humana™ | FUTURE        | Fase E              |
3. Decisões congeladas
| ID      |     | Decisão                                          |     |
| ------- | --- | ------------------------------------------------ | --- |
| DEC-001 |     | MGH não é teste de identidade                    |     |
| DEC-002 |     | P1.0 usa três lentes: PRC, PC e DR               |     |
| DEC-003 |     | DR substitui temperamentos como camada principal |     |
| DEC-004 |     | Sem DR Total                                     |     |
| DEC-005 |     | PC forced-choice é ipsativo                      |     |
| DEC-006 |     | PRC Forced e Independent permanecem separados    |     |
| DEC-007 |     | SELF fora do score                               |     |
| DEC-008 |     | Relation Groups sem índice de sinceridade        |     |
| DEC-009 |     | RAW imutável                                     |     |
| DEC-010 |     | Versões publicadas imutáveis                     |     |
| DEC-011 |     | 48 cenários / 56 respostas                       |     |
| DEC-012 |     | Ordem dos 48 fixa                                |     |
| DEC-013 |     | DR não randomiza                                 |     |
| DEC-014 |     | IA não interpreta RAW                            |     |
| DEC-015 |     | Sistema funciona sem IA                          |     |
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-OPEN-DECISION | v0.1
ID Decisão
DEC-016 32 UIGs = 25 Primary + 7 Modulators
DEC-017 5 sínteses oficiais
DEC-018 30 Claims
DEC-019 30 Actions
DEC-020 E3 desabilitado externamente no P1.0
DEC-021 Competência/maturidade não inferidas
DEC-022 Sem decisão trabalhista automática
DEC-023 Assinatura não é tipologia
DEC-024 Silêncio é output válido
DEC-025 Modular Monolith como direção inicial
DEC-026 Web App primeiro
DEC-027 Fase A primeiro
DEC-028 O0 sem resultado automático
DEC-029 Entrevista cognitiva retrospectiva
DEC-030 Golden Cases são critério de aceite
4. Matriz de autoridade
Tema Autoridade primária
Itens / Scoring / Claims / Actions MGH
Evidence Rules MGH + pesquisa/psicometria
UX Produto + MGH
Stack / infra / segurança técnica Tecnologia
Base jurídica / retention Legal/Privacy
Validação psicométrica Especialista + MGH
Escopo contratual Empresa/projeto
Quando surge lacuna, registrar questão → identificar domínio/impacto/responsável → decidir → registrar no Decision
Log → versionar se necessário. Nunca resolver informalmente no código.
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-MEETING-BRIEF | v0.1
DOCUMENTO 12
Developer Meeting Brief
Código MGH-MEETING-BRIEF
Versão documental 0.1
Componente relacionado Roteiro executivo da primeira reunião
Baseline MGH-MASTER-P1.0-RC1
Status CONTENT_COMPLETE - FOR REVIEW
Confidencialidade CONFIDENTIAL
Owner MGH™ / M2M
Data 20/10/2026
A reunião não existe para o desenvolvedor descobrir o produto. Existe para ele compreender a
arquitetura, questionar o necessário e propor a melhor forma de implementá-la.
1. Abertura sugerida
“Estamos desenvolvendo o Mapa de Governo Humano, o MGH. Ele não é apenas um teste de perfil. Já estruturamos
instrumento, scoring, modelo de dados, versionamento, piloto, testes e arquitetura futura do Motor. O que quero
contratar agora é a Fase A - Pilot Core: a plataforma que permitirá executar nossa Onda 0 com integridade.”
Em seguida: “Se daqui a dois anos o algoritmo mudar, preciso recalcular uma aplicação de hoje preservando
exatamente o score e a interpretação originais.” E: “IA não será o cérebro metodológico; futuramente poderá melhorar a
linguagem de conclusões já autorizadas.”
Eu não quero contratar o MGH inteiro agora. Quero contratar a fundação correta do MGH inteiro e
construir apenas o necessário para executar a Onda 0 com integridade.
2. Ordem de apresentação
1. Executive Product Brief
2. Technical Roadmap
3. Functional Specification
4. Architecture & Data Model
5. Depois: Instrument, Scoring, Security, Golden Cases, O0 e Interpretation conforme a conversa exigir.
3. O que pedir para orçar
Proposta detalhada apenas para a Fase A, quebrada por Participant App, Admin/Research, Backend/Data Model,
Instrument Registry, Response/Event Engine, Score Engine, Security/Infrastructure, Automated Tests/Golden Cases,
Deployment e Documentation/Handoff. Para B-E, apenas estimativa macro.
4. Perguntas técnicas obrigatórias
1. Como modelaria Response atual e histórico de alterações?
2. Como garantiria que item já respondido nunca seja alterado silenciosamente?
3. Como recalcularia assessment antigo com scoring novo sem apagar o resultado original?
4. Como a randomização das alternativas não afeta o score?
5. Como o resume preserva a mesma ordem de apresentação?
6. Como impediria o frontend de conhecer D/I/S/C e outros score targets?
7. Como faria submit e score jobs idempotentes?
8. Como separaria RAW, derivados e interpretações versionadas?
9. Como separaria identidade dos dados metodológicos?
10. Como organizaria RBAC e Identity Vault?
11. Como publicaria versões imutáveis do instrumento?
12. Como impediria combinação incompatível de instrument/scoring?
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL

Mapa de Governo Humano™ | MGH-MEETING-BRIEF | v0.1
13. Como Golden Cases entram no CI/CD?
14. Como provaria que backup pode ser restaurado?
15. Como faria deploy sem edição manual em produção?
16. Como outro desenvolvedor assumiria o projeto?
17. Quem será dono de Git, cloud, banco e domínio?
18. Qual stack recomenda e por quê?
19. Há razão concreta para não começar com modular monolith?
20. Quais partes considera mais difíceis ou arriscadas?
21. O que cortaria primeiro se o orçamento precisasse cair 20%?
22. O que se recusaria a cortar por integridade?
23. Quais decisões dependem de nós e quais são decisões técnicas?
24. Ao encontrar lacuna na specification, o que fará?
25. Como documentará mudanças de escopo?
26. Como diferencia bug de nova funcionalidade?
27. Qual estabilização pós-release recomenda?
28. Quais custos recorrentes existem além do desenvolvimento?
5. Green Flags / Red Flags
Green Flags Red Flags
Faz perguntas antes de estimar; fala de versionamento e idempotência. Promete preço/prazo final antes de compreender a specification.
Quer ver Golden Cases e separar PII. Diz que versionamento/testes/segurança podem ficar para depois.
Evita superdimensionar infra e sabe dizer “isso não precisa agora”. Quer mandar respostas para IA interpretar ou calcular score no frontend.
Documenta trade-offs e ownership. Projeto preso em conta pessoal, sem restore, migrations ou handoff
claro.
6. Entregáveis esperados da proposta
Entendimento do escopo, stack, arquitetura resumida, milestones, horas/valor por bloco, prazos, premissas, exclusões,
custos recorrentes, segurança, testes, CI/CD, backup/restore, documentação, suporte pós-release, ownership, riscos e
estimativa macro B-E.
7. Checklist antes de contratar
 Escopo da Fase A definido e B-E fora do preço fechado.
 Milestones e critérios de aceite vinculados às specifications.
 Ownership e IP metodológica protegidos.
 Repo/cloud/database sob controle da empresa.
 Documentação, deploy, migrations, testes, backup/restore e estabilização incluídos.
 Processo de Change Request e distinção bug x feature explicitados.
8. Frases de proteção
Scope creep: “Excelente. Vamos colocar no Parking Lot. Minha prioridade agora é concluir a Fase A sem contaminar o
escopo.”
Metodologia: “Essa decisão pertence à metodologia. Registre a limitação técnica e eu avalio o impacto antes de
alterarmos.”
Qualidade: “Os Golden Cases fazem parte do critério de aceite. Não são opcionais.”
IA: “IA poderá ser nossa camada de linguagem. A interpretação precisa permanecer determinística, versionada e
auditável.”
Mapa de Governo Humano™ - Documento controlado - CONFIDENTIAL