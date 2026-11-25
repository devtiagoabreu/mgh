---
name: 19-handoff-05-open-items-e-meeting
description: Documentos 11 e 12 do Developer Handoff Package.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 49952-52805
---

# Handoff 05: Open Items E Meeting

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.29K — OPEN ITEMS & DECISION LOG**

## **Documento 11**

Agora vamos fazer algo muito importante: criar uma lista oficial de tudo aquilo que **ainda NÃO sabemos ou deliberadamente NÃO queremos decidir agora**.

Isso evita que o desenvolvedor encontre uma lacuna e pense:

“Vou escolher alguma coisa para preencher.”

Vamos classificar cada item como:

**OPEN**

**PILOT-DEPENDENT**

**LEGAL**

**PSYCHOMETRIC**

**TECHNICAL DECISION**

**FUTURE**

e definir:

**quem decide, quando decide e o que fica proibido enquanto a decisão não existe.**

Depois disso faltará praticamente apenas o **Documento 12 — Developer Meeting Brief**, que será o seu roteiro executivo para sentar com o desenvolvedor e conduzir a reunião sem precisar explicar meses de trabalho de memória.

**Status atual da engenharia pré-desenvolvimento: aproximadamente 98%.**

Perfeito. Agora vamos fazer o contrário do que fizemos até aqui: em vez de definir novas regras, vamos registrar oficialmente **onde ainda existe incerteza**.

# **ETAPA 2.29K — OPEN ITEMS & DECISION LOG**

## **Documento 11 — Pendências, Decisões e Fronteiras de Autoridade**

**Versão:** MGH-OPEN-DECISION-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1

A regra-mãe deste documento será:

**Uma lacuna conhecida é administrável. Uma lacuna escondida vira decisão improvisada.**

E a segunda:

**Enquanto uma decisão metodológica não existir, o software não está autorizado a inventá-la.**

# **1. Por que este documento existe**

Quando o desenvolvedor encontrar uma questão não especificada, ele precisa saber distinguir três situações:

**A. Já existe uma decisão oficial**→ implementar.

**B. Ainda não existe decisão porque dependemos de piloto, especialista ou jurídico**→ manter aberto.

**C. É realmente uma decisão técnica de implementação**→ desenvolvedor pode propor solução.

Isso evita frases como:

“Como não estava definido, fiz do jeito que achei melhor.”

Em determinadas partes do MGH, isso seria muito perigoso.

# **2. Status oficiais**

Os itens deste documento poderão receber:

| **Status** | **Significado** |
| --- | --- |
| OPEN | decisão ainda necessária |
| PILOT\_DEPENDENT | depende de dados de O0/O1/O2 |
| PSYCHOMETRIC | depende de análise psicométrica especializada |
| LEGAL\_PRIVACY | depende de revisão jurídica/privacidade |
| TECH\_DECISION | tecnologia pode propor solução |
| FUTURE | deliberadamente fora do escopo atual |
| RESOLVED | decisão já tomada |
| DEFERRED | conhecida, mas conscientemente adiada |

# **3. Outra classificação importante: o que o item bloqueia?**

Cada pendência também precisa informar:

BLOCKS\_O0

BLOCKS\_O1

BLOCKS\_MOTOR

BLOCKS\_COMMERCIAL

ou:

NON\_BLOCKING\_NOW.

Isso é essencial.

Nem toda pendência precisa ser resolvida antes de começar a desenvolver.

# **4. OPEN ITEM 01 — Thresholds do Evidence Engine**

**ID:** OPEN-MET-001
**Status:** PILOT\_DEPENDENT

Ainda não estão empiricamente congelados os thresholds que transformarão métricas em estados como:

WEAK\_SIGNAL

RELEVANT

CONSISTENT.

### **Responsável**

MGH + psicometria futuramente.

### **Depende de**

O0 inicialmente, sobretudo O1/O2.

### **Bloqueia**

Motor interpretativo empiricamente calibrado.

### **Não bloqueia**

Fase A / O0.

### **Enquanto estiver aberto**

É proibido o desenvolvedor criar cortes como:

“acima de 70 = alto”.

ou:

“duas respostas iguais = consistente”.

# **5. OPEN ITEM 02 — Evidence Ceiling completo das facetas**

**ID:** OPEN-MET-002
**Status:** PILOT\_DEPENDENT

Já definimos tetos específicos importantes, como DEC-004 e DEC-005 em E1.

Mas ainda precisamos produzir uma matriz completa:

faceta → cobertura → fontes → teto máximo autorizado no P1.0.

### **Bloqueia**

uso interpretativo mais amplo das facetas.

### **Não bloqueia**

Score Engine e O0.

### **Regra provisória**

Na dúvida:

**não promover força interpretativa.**

# **6. OPEN ITEM 03 — Claim → Action Matrix integral**

**ID:** OPEN-MET-003
**Status:** OPEN

Temos:

30 Claims;

30 Actions;

mapeamentos centrais.

Ainda falta congelar uma tabela completa contendo:

claim\_code

→ required\_actions

→ optional\_actions

→ modifiers

→ constraints.

### **Bloqueia**

Fase C completa.

### **Não bloqueia**

Fase A.

### **Regra provisória**

Desenvolvedor não cria mapeamentos novos por interpretação própria.

# **7. OPEN ITEM 04 — Templates determinísticos completos**

**ID:** OPEN-LANG-001
**Status:** DEFERRED

Arquitetura prevê potencialmente:

30 Claims × 2 audiências × E1/E2

= até **120 templates-base**.

Ainda não escrevemos todos.

### **Bloqueia**

relatório individual comercial completo.

### **Não bloqueia**

O0.

### **Regra provisória**

Não utilizar IA como substituto de templates ainda inexistentes.

# **8. OPEN ITEM 05 — Títulos/headlines da Assinatura de Governo™**

**ID:** OPEN-LANG-002
**Status:** FUTURE

Podemos futuramente produzir frases de destaque como:

“Clareza no destino. Liberdade no caminho.”

Mas elas não poderão virar:

tipologias.

### **Não bloqueia**

nenhuma atividade da Fase A.

# **9. OPEN ITEM 06 — Estrutura visual definitiva do relatório**

**ID:** OPEN-PROD-001
**Status:** FUTURE

Ainda não precisamos decidir:

quantas páginas;

layout;

PDF vs experiência web;

gráficos;

cards;

cores;

visualizações finais.

### **Bloqueia**

produto comercial final.

### **Não bloqueia**

Motor nem piloto.

Importante:

primeiro estabilizamos lógica, depois embelezamos output.

# **10. OPEN ITEM 07 — Rótulos finais das escalas SELF**

**ID:** OPEN-INST-001
**Status:** OPEN

Sabemos:

escala 1–5.

Antes da publicação final do banco P1.0 para produção real, precisamos garantir que os rótulos textuais da escala estejam formalmente registrados no Banco de Itens.

### **Bloqueia**

publicação real do instrumento se ainda não estiver no BANK canônico.

### **Decisão**

MGH.

### **Desenvolvedor**

não inventa:

“discordo totalmente / concordo totalmente”

sem specification publicada.

# **11. OPEN ITEM 08 — Conteúdo canônico completo do BANK-0.2**

**ID:** OPEN-INST-002
**Status:** OPEN / PACKAGE ASSET

Nós já construímos e selecionamos os itens metodologicamente.

Porém, no Developer Handoff final, precisaremos entregar o artefato canônico contendo:

**48 cenários**

**todos os textos**

**todas as alternativas**

**option IDs**

**scoring mappings**

**facet signals**

**randomization rules.**

### **Bloqueia**

implementação real do Participant App com conteúdo oficial.

### **Não significa**

que precisamos redesenhar o instrumento.

É um trabalho de:

consolidação do ativo já criado.

# **12. OPEN ITEM 09 — Consentimento jurídico final**

**ID:** OPEN-LEGAL-001
**Status:** LEGAL\_PRIVACY

Temos:

conteúdo conceitual;

finalidade;

natureza experimental;

uso proibido;

versionamento.

Mas redação definitiva deverá passar por revisão adequada.

### **Bloqueia**

O0 com participantes reais.

### **Não bloqueia**

desenvolvimento.

O sistema pode ser desenvolvido usando:

placeholder claramente identificado.

Antes de MGH-O0-001:

texto precisa estar publicado.

# **13. OPEN ITEM 10 — Privacy Notice final**

**ID:** OPEN-LEGAL-002
**Status:** LEGAL\_PRIVACY

Mesma lógica.

Precisamos definir adequadamente:

tratamento;

finalidade;

direitos;

contato;

eventuais terceiros;

retenção.

### **Bloqueia**

uso real conforme revisão jurídica.

# **14. OPEN ITEM 11 — Base jurídica comercial**

**ID:** OPEN-LEGAL-003
**Status:** LEGAL\_PRIVACY

Não congelaremos:

consentimento como base universal do MGH comercial.

A relação poderá envolver:

empresa cliente;

participante;

M2M/MGH;

operadores;

fornecedores.

### **Bloqueia**

operação comercial definitiva.

### **Não bloqueia**

Fase A de pesquisa devidamente estruturada.

# **15. OPEN ITEM 12 — Política de retenção**

**ID:** OPEN-LEGAL-004
**Status:** LEGAL\_PRIVACY

Ainda não definimos:

X meses / X anos.

O software precisa ser:

retention-ready.

Mas o desenvolvedor não deve inventar:

“vamos guardar para sempre”.

Nem:

“apagaremos tudo após 90 dias”.

# **16. OPEN ITEM 13 — Controller / Operator Mapping**

**ID:** OPEN-LEGAL-005
**Status:** LEGAL\_PRIVACY

Precisaremos definir futuramente:

quem é controlador;

quem é operador;

quais serviços são subprocessadores

em cada modelo comercial.

Dependente do:

modelo operacional final.

# **17. OPEN ITEM 14 — Procedimento formal de retirada/exclusão**

**ID:** OPEN-LEGAL-006
**Status:** LEGAL\_PRIVACY

Temos o status:

WITHDRAWN.

Mas retirada metodológica e direito jurídico de exclusão:

não são necessariamente a mesma operação.

Precisaremos definir workflow com Legal/Privacy.

Até lá:

não implementar DELETE CASCADE como solução.

# **18. OPEN ITEM 15 — Modelo psicométrico futuro para PC forced-choice**

**ID:** OPEN-PSY-001
**Status:** PSYCHOMETRIC

P1.0 utiliza contagens clássicas ipsativas.

Em fases posteriores poderemos avaliar:

multidimensional forced-choice;

IRT;

modelos mais avançados.

### **Não bloqueia**

O0.

### **Proibição temporária**

Não aplicar técnicas estatísticas comuns de escalas independentes como se os dados PC fossem Likert independentes sem avaliação adequada.

# **19. OPEN ITEM 16 — Confiabilidade**

**ID:** OPEN-PSY-002
**Status:** PSYCHOMETRIC

Ainda não temos estimativas empíricas de:

reliability;

stability;

consistency apropriada ao formato.

Isso virá depois.

### **Proibido enquanto aberto**

“MGH possui 95% de confiabilidade.”

# **20. OPEN ITEM 17 — Estrutura fatorial**

**ID:** OPEN-PSY-003
**Status:** PSYCHOMETRIC

Ainda será investigado se os dados sustentam:

dimensões;

facetas;

estrutura DR;

PRC

como teoricamente esperado.

Não inferiremos estrutura confirmada antes dos dados.

# **21. OPEN ITEM 18 — Evidências de validade**

**ID:** OPEN-PSY-004
**Status:** PSYCHOMETRIC

Precisaremos investigar, de forma progressiva:

conteúdo;

estrutura interna;

relações com outras variáveis;

processo de resposta;

consequências de uso,

conforme planejamento especializado futuro.

### **Bloqueia**

claims científicos fortes.

### **Não bloqueia**

O0 exploratória.

# **22. OPEN ITEM 19 — Normas**

**ID:** OPEN-PSY-005
**Status:** PSYCHOMETRIC

Não existem:

percentis;

normas nacionais;

T-scores;

médias populacionais.

### **Proibido**

o software apresentar:

“acima da média”.

# **23. OPEN ITEM 20 — Amostra definitiva O2/O3**

**ID:** OPEN-PSY-006
**Status:** PSYCHOMETRIC

Já temos planejamento:

O1 ≈ 40–60.

O2 ≈ 200–400.

Mas número final será definido com base:

modelo;

itens;

análises;

objetivos;

especialista.

Não congelar:

300 por conveniência.

# **24. OPEN ITEM 21 — Critérios empíricos dos Relation Groups**

**ID:** OPEN-PSY-007
**Status:** PILOT\_DEPENDENT

Temos seis grupos.

Ainda não definimos:

qual grau de convergência é esperado.

Nem:

qual divergência é problemática.

### **Enquanto aberto**

não produzir:

score de consistência.

# **25. OPEN ITEM 22 — Critérios para timing**

**ID:** OPEN-RESEARCH-001
**Status:** PILOT\_DEPENDENT

Coletamos timing.

Mas ainda não existe regra como:

abaixo de 2 segundos = inválido.

ou:

acima de 60 segundos = problema.

Precisamos observar dados primeiro.

### **Enquanto aberto**

timing é:

sinal de pesquisa.

Não julgamento do participante.

# **26. OPEN ITEM 23 — Critérios quantitativos do Gate O0**

**ID:** OPEN-RESEARCH-002
**Status:** PILOT\_DEPENDENT

O Gate já possui dimensões qualitativas e decisão humana.

Não congelaremos um:

“score mínimo 80%”.

Podemos depois desenvolver critérios quantitativos complementares.

Mas o Gate O0 continua:

julgamento metodológico documentado.

# **27. OPEN ITEM 24 — External Expert Review**

**ID:** OPEN-RESEARCH-003
**Status:** OPEN

Precisaremos decidir:

quem;

quando;

qual escopo

da primeira revisão externa.

Minha recomendação continua:

antes de ampliar claims e preferencialmente antes/ao redor da transição para O1/O2.

Especialmente com profissional de psicometria.

# **28. OPEN ITEM 25 — Stack tecnológico**

**ID:** OPEN-TECH-001
**Status:** TECH\_DECISION

Ainda não escolhemos:

framework frontend;

framework backend;

cloud;

ORM;

queue;

auth provider.

Isso é intencional.

### **Quem propõe**

desenvolvedor.

### **Quem aprova**

projeto/empresa.

### **Critérios**

integridade;

testabilidade;

manutenção;

custo;

portabilidade;

contratação futura.

# **29. OPEN ITEM 26 — Banco relacional específico**

**ID:** OPEN-TECH-002
**Status:** TECH\_DECISION

PostgreSQL é uma referência conceitualmente adequada.

Mas ainda não congelamos marca/provedor.

O requisito:

relacional, robusto, transacional e com boa integridade.

# **30. OPEN ITEM 27 — Cloud Provider**

**ID:** OPEN-TECH-003
**Status:** TECH\_DECISION

AWS, Azure, GCP ou outra infraestrutura adequada podem ser avaliadas.

Critérios:

custo;

segurança;

backup;

controle da empresa;

região;

takeover;

maturidade.

# **31. OPEN ITEM 28 — Auth Provider**

**ID:** OPEN-TECH-004
**Status:** TECH\_DECISION

Pode ser:

solução própria adequada;

serviço especializado;

cloud identity.

Requisito:

auth segura + RBAC + MFA administrativo.

Não precisamos construir autenticação artesanal se serviço confiável resolver melhor.

# **32. OPEN ITEM 29 — Job/Queue Technology**

**ID:** OPEN-TECH-005
**Status:** TECH\_DECISION

Precisamos de capacidade para:

score;

exports;

futuros Evidence Runs;

reports.

Mas não precisamos decidir agora:

RabbitMQ;

SQS;

Redis;

etc.

O comportamento:

idempotente e rastreável.

# **33. OPEN ITEM 30 — RPO/RTO do piloto**

**ID:** OPEN-TECH-006
**Status:** TECH\_DECISION

O desenvolvedor deverá propor:

quanto dado poderíamos perder;

quanto tempo para recuperar.

A decisão final será proporcional ao piloto.

Não precisa ser SLA bancário.

Mas não pode ser:

inexistente.

# **34. OPEN ITEM 31 — Disponibilidade contratual**

**ID:** OPEN-TECH-007
**Status:** FUTURE

A referência futura de ~99,5% continua apenas:

target inicial possível.

Não é SLA O0.

SLA comercial será definido posteriormente.

# **35. OPEN ITEM 32 — Pentest**

**ID:** OPEN-SEC-001
**Status:** DEFERRED

Antes de 8–12 participantes O0:

não necessariamente precisamos de pentest enterprise.

Mas antes de escala comercial:

revisão/pentest deverá entrar no Gate.

# **36. OPEN ITEM 33 — Provedor de IA**

**ID:** OPEN-AI-001
**Status:** FUTURE

Nenhum provedor está escolhido.

Isso é ótimo porque:

IA não é dependência estrutural.

Quando chegar a hora:

avaliar segurança, custo, privacidade, retenção e qualidade.

# **37. OPEN ITEM 34 — Modelo de IA**

**ID:** OPEN-AI-002
**Status:** FUTURE

O Motor não deve ser amarrado a um modelo específico.

A interface futura deve permitir:

trocar Language Provider sem reescrever Score/Evidence/Claim.

# **38. OPEN ITEM 35 — Mapa de Relação™**

**ID:** OPEN-FUTURE-001
**Status:** FUTURE

Conceito definido.

Motor específico:

ainda não.

Precisará de:

regras relacionais próprias;

Golden Cases próprios;

limites próprios.

Não reutilizar simplesmente:

“perfil A × perfil B = compatibilidade”.

# **39. OPEN ITEM 36 — Sala de Comando Humana™**

**ID:** OPEN-FUTURE-002
**Status:** FUTURE

A arquitetura prevê equipe.

Mas agregação estatística/interpretativa:

ainda precisa ser desenvolvida.

Especial atenção:

PC ipsativo.

Não somar indiscriminadamente scores individuais.

# **40. OPEN ITEM 37 — MGH 360™**

**ID:** OPEN-FUTURE-003
**Status:** FUTURE

Exigirá:

novo instrumento ou adaptação;

regras de observador;

comparabilidade;

privacidade;

interpretação.

Não é mera duplicação do questionário atual.

# **41. OPEN ITEM 38 — Reavaliação longitudinal**

**ID:** OPEN-FUTURE-004
**Status:** FUTURE

Conceito:

comparar padrões de resposta ao longo do tempo.

Mas nunca dizer:

“sua personalidade mudou 27%”.

Precisaremos de regras específicas de longitudinalidade.

# **42. OPEN ITEM 39 — Matching pessoa/cargo**

**ID:** OPEN-FUTURE-005
**Status:** FUTURE / RESTRICTED

O MGH Individual atual não autoriza:

job fit.

Se algum dia esse produto for estudado:

precisará de:

competência;

performance;

maturidade;

critérios do cargo;

evidências adicionais.

Não deriva do MGH sozinho.

# **43. OPEN ITEM 40 — Modelo comercial**

**ID:** OPEN-BIZ-001
**Status:** FUTURE

Ainda poderemos decidir:

venda individual;

licença B2B;

assinatura;

inclusão na mentoria;

white label;

certificação de profissionais.

Isso não deve distorcer a engenharia do piloto.

# **44. Agora: DECISION LOG™**

Além das pendências, precisamos registrar as decisões que **já estão encerradas**, para que ninguém as reabra informalmente.

# **45. DEC-001 — MGH não é um teste de identidade**

**Status:** RESOLVED

Decisão:

MGH observa padrões e preferências contextualizadas.

Não define:

quem a pessoa é.

# **46. DEC-002 — Três lentes**

**Status:** RESOLVED

P1.0 trabalha com:

PRC™

PC

DR™.

Não haverá quarta teoria psicológica inventada.

# **47. DEC-003 — DR substitui temperamentos como camada principal**

**Status:** RESOLVED

Primário:

Velocidade;

Impacto;

Persistência;

Externalização.

Temperamentos históricos:

referência apenas.

# **48. DEC-004 — Sem DR Total**

**Status:** RESOLVED

Proibidos:

DR Total;

Pressure Score;

Resilience Score.

# **49. DEC-005 — PC forced-choice ipsativo**

**Status:** RESOLVED

Contagens relativas intraindividuais.

Não comparar diretamente entre pessoas como se fossem scores normativos.

# **50. DEC-006 — PRC Forced e Independent permanecem separados**

**Status:** RESOLVED

Não haverá:

Final PRC Score

por média simples.

# **51. DEC-007 — SELF fora do score**

**Status:** RESOLVED

SELF é:

pesquisa.

Não altera PC/PRC/DR.

# **52. DEC-008 — Relation Groups sem índice de sinceridade**

**Status:** RESOLVED

Não haverá:

lie score;

honesty score;

consistency percentage

no P1.0.

# **53. DEC-009 — RAW imutável**

**Status:** RESOLVED

Novo algoritmo:

novo Run.

Não sobrescrever histórico.

# **54. DEC-010 — Versões publicadas são imutáveis**

**Status:** RESOLVED

Mudança:

nova versão.

Nunca alterar silenciosamente algo já respondido.

# **55. DEC-011 — 48 cenários / 56 respostas**

**Status:** RESOLVED

Progress bar:

48 cenários.

# **56. DEC-012 — Ordem fixa**

**Status:** RESOLVED

Os 48 cenários não são randomizados.

Randomização acontece somente conforme política interna de alternativas.

# **57. DEC-013 — DR não randomiza**

**Status:** RESOLVED

Configuração contrária:

erro.

# **58. DEC-014 — IA não interpreta RAW**

**Status:** RESOLVED

Arquitetura futura:

Claims + Actions + Constraints

→ IA de linguagem.

Não:

RAW → LLM → perfil.

# **59. DEC-015 — Sistema funciona sem IA**

**Status:** RESOLVED

Fallback determinístico obrigatório.

# **60. DEC-016 — 32 UIGs**

**Status:** RESOLVED

25 Primary.

7 Modulators.

Estrutura antiga de 40:

substituída pela auditoria.

# **61. DEC-017 — 5 sínteses oficiais**

**Status:** RESOLVED

SIN-DEL-001

SIN-DEC-001

SIN-FDB-001

SIN-PRS-001

SIN-PRS-002.

# **62. DEC-018 — 30 Claims**

**Status:** RESOLVED

Claim Dictionary fechado inicialmente em:

30 Claims reportáveis.

# **63. DEC-019 — 30 Actions**

**Status:** RESOLVED

Action Registry:

30 ações canônicas.

# **64. DEC-020 — E3 desabilitado externamente**

**Status:** RESOLVED

P1.0:

máximo externo E2.

# **65. DEC-021 — Competência/maturidade não inferidas**

**Status:** RESOLVED

Podem aparecer como:

condicionantes externos.

Nunca como resultado do MGH.

# **66. DEC-022 — Sem decisão trabalhista automática**

**Status:** RESOLVED

O MGH não deve gerar:

HIRE;

FIRE;

PROMOTE;

JOB FIT.

# **67. DEC-023 — Assinatura não é tipologia**

**Status:** RESOLVED

Não criar:

nomes de tipos psicológicos.

A Assinatura é:

síntese narrativa.

# **68. DEC-024 — Silêncio é output válido**

**Status:** RESOLVED

Evidência insuficiente:

nenhum texto.

Não preencher template com frase genérica.

# **69. DEC-025 — Modular Monolith**

**Status:** RESOLVED COMO DIREÇÃO ARQUITETURAL

Estratégia inicial preferida:

modular monolith.

Mudança para microservices exigiria justificativa técnica real.

# **70. DEC-026 — Web App primeiro**

**Status:** RESOLVED

P1.0:

web responsivo.

Não app nativo.

# **71. DEC-027 — Fase A primeiro**

**Status:** RESOLVED

Primeira contratação:

Pilot Core.

Fases B–E:

apenas estimativa arquitetural.

# **72. DEC-028 — O0 sem resultado automático**

**Status:** RESOLVED

Participante conclui:

recebe confirmação.

Não recebe perfil/relatório.

# **73. DEC-029 — Cognitive interview retrospectiva**

**Status:** RESOLVED

Primeiro:

aplicação natural.

Depois:

entrevista.

Não think-aloud na primeira passagem.

# **74. DEC-030 — Golden Cases são critério de aceite**

**Status:** RESOLVED

Não documentação decorativa.

Se blocker falha:

O0 não começa.

# **75. Matriz de autoridade**

Agora precisamos congelar quem decide o quê.

| **Tema** | **Autoridade primária** |
| --- | --- |
| Itens | MGH |
| Scoring | MGH |
| Evidence Rules | MGH + pesquisa/psicometria |
| Claims | MGH |
| Actions | MGH |
| Linguagem metodológica | MGH |
| UX | Produto + MGH |
| Stack | Tecnologia, aprovado pelo projeto |
| Banco/infra | Tecnologia |
| Segurança | Tecnologia |
| Legal basis | Jurídico/Privacy |
| Retention | Jurídico/Privacy + negócio |
| Psicometria | Especialista + MGH |
| Branding | MGH/M2M |
| Escopo contratual | Empresa/projeto |

# **76. Regra de conflito de autoridade**

Se desenvolvedor disser:

“Tecnicamente seria mais simples randomizar todos os itens.”

Mas metodologia diz:

ordem fixa.

Resultado:

ordem fixa vence.

Se metodologia disser:

“queremos senha armazenada em texto porque é mais fácil”.

Tecnologia diz:

inseguro.

Resultado:

segurança técnica vence.

Cada domínio possui autoridade adequada.

# **77. Escalation Rule™**

Quando houver dúvida multidisciplinar:

1. registrar questão;
2. identificar domínio;
3. identificar impacto;
4. identificar responsável;
5. decidir;
6. registrar no Decision Log;
7. versionar se necessário.

Não resolver:

informalmente no código.

# **78. Decision Freeze antes da O0**

Existem alguns OPEN ITEMS que precisam estar obrigatoriamente resolvidos antes de MGH-O0-001.

Principalmente:

**BANK canônico completo**

**SELF labels**

**consentimento final**

**privacy notice adequada**

**stack/infra implementados**

**RPO/RTO operativo**

**backup/restore**

**security review**

Mas não precisamos resolver antes da O0:

normas;

validade final;

Evidence thresholds comerciais;

120 templates;

Mapa de Relação;

MGH 360.

# **79. Open Item Register no software/projeto**

O desenvolvedor poderá registrar isso em:

GitHub Issues;

Jira;

Linear;

ClickUp;

ou ferramenta escolhida.

Mas quero que cada item crítico tenha:

ID

owner

status

blocks

target\_gate

decision

date

version\_impact.

Assim não dependeremos da memória de ninguém.

# **80. Uma regra importante**

Open Item não é:

“coisa esquecida”.

É:

**coisa conscientemente não decidida.**

Essa distinção mostra maturidade do projeto.

# **81. O que o desenvolvedor deve fazer ao encontrar nova lacuna**

Não inventar.

Ele deverá abrir:

OPEN-TECH ou solicitar classificação metodológica.

Exemplo:

“O que acontece se participante tentar responder depois de 90 dias?”

Se não existe decisão:

registramos.

Depois decidimos.

# **82. O que ele NÃO deve fazer**

“Achei melhor expirar o link em 24h e implementei.”

Talvez 24h seja inadequado à pesquisa.

Primeiro:

decisão.

Depois:

código.

# **83. Decision Log é histórico**

Quando uma decisão mudar:

não apagamos a anterior.

Exemplo:

DEC-025 Modular Monolith

futuramente pode ser substituída por:

DEC-142 Migration to Services.

Registramos:

razão;

data;

versão.

Isso mantém:

arquitetura compreensível historicamente.

# **84. Status oficial após Documento 11**

Com este documento, o pacote já responde:

**o que construir;**

**como construir;**

**como testar;**

**como proteger;**

**o que construir depois;**

**o que ainda não sabemos;**

**quem tem autoridade para decidir.**

Estamos agora em aproximadamente:

# **99% DA ENGENHARIA PRÉ-DESENVOLVIMENTO**

O último grande documento será diferente dos anteriores.

Não será mais uma specification extensa.

Será o documento que você poderá literalmente levar para a conversa.

# **ETAPA 2.29L — DEVELOPER MEETING BRIEF**

## **Documento 12 — Roteiro Executivo da Reunião**

Ele vai concentrar em poucas páginas:

**como abrir a reunião**

**como explicar o MGH em 3 minutos**

**o que mostrar e em qual ordem**

**o que pedir para ele orçar**

**perguntas técnicas obrigatórias**

**perguntas sobre segurança**

**perguntas sobre propriedade do código**

**red flags**

**green flags**

**entregáveis esperados da proposta**

**o que não aceitar na primeira contratação**

e uma:

# **CHECKLIST DE DECISÃO DO DESENVOLVEDOR**

Ao final dela, teremos chegado ao:

# **100% DO PACOTE DE ENGENHARIA PRÉ-DESENVOLVIMENTO QUE DEFINIMOS PARA ESTA FASE.**

Depois disso, nossa dinâmica muda novamente: em vez de continuar projetando indefinidamente, passaremos a **organizar os artefatos finais, preparar a reunião e iniciar a contratação da Fase A**.

Perfeito. Agora chegamos ao último documento do pacote pré-desenvolvimento. A partir daqui, você já consegue sentar com um desenvolvedor e conduzir a conversa sem depender da memória de tudo que construímos.

# **ETAPA 2.29L — DEVELOPER MEETING BRIEF**

## **Documento 12 — Roteiro Executivo para a Reunião com o Desenvolvedor**

**Versão:** MGH-MEETING-BRIEF-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Objetivo:** conduzir a primeira reunião técnica e obter uma proposta correta para a **Fase A — Pilot Core**.

A regra-mãe deste documento será:

**A reunião não existe para o desenvolvedor descobrir o produto. Existe para ele compreender a arquitetura, questionar o necessário e propor a melhor forma de implementá-la.**

# **1. Objetivo da reunião**

Ao final da conversa, precisamos sair sabendo se o desenvolvedor:

**entendeu o MGH;**

**entendeu que não é um quiz comportamental comum;**

**entendeu a diferença entre RAW, Score e Interpretation;**

**entendeu o papel do versionamento;**

**consegue preservar rastreabilidade;**

**consegue construir a Fase A sem tentar construir tudo agora;**

**possui maturidade para questionar tecnicamente sem alterar metodologia;**

e, principalmente:

**se é alguém em quem podemos confiar a fundação tecnológica do MGH.**

# **2. Como abrir a reunião**

Você pode abrir praticamente assim:

“Nós estamos desenvolvendo o Mapa de Governo Humano, o MGH. Ele não é apenas um teste de perfil. Estamos construindo um instrumento com uma camada de pontuação, uma camada de evidências e, posteriormente, um Motor de Governo que transforma evidências em orientações de gestão.

Nós já estruturamos o instrumento, a lógica de scoring, o modelo de dados, o versionamento, os critérios de piloto, os testes de aceite e a arquitetura futura do Motor.

O que eu quero contratar agora não é o sistema comercial inteiro. Quero construir corretamente a Fase A, que é o Pilot Core: a plataforma que vai permitir executar nossa Onda 0 com integridade.”

Essa abertura já posiciona a conversa.

# **3. A segunda mensagem**

Depois diga:

“Para mim, o ponto mais importante é rastreabilidade. Se daqui a dois anos o algoritmo mudar, eu preciso conseguir pegar uma aplicação realizada hoje, recalcular com o algoritmo novo e ainda preservar exatamente o score e a interpretação que existiam na época.”

Isso força o desenvolvedor a pensar em:

**versionamento**

**runs**

**RAW**

**imutabilidade**

em vez de apenas pensar em telas.

# **4. A terceira mensagem**

E então:

“Outra regra importante: IA não será o cérebro metodológico. Se futuramente utilizarmos IA, ela poderá melhorar a linguagem de conclusões já autorizadas pelo nosso Motor. Não quero mandar todas as respostas para uma IA e pedir que ela interprete a pessoa.”

Com três minutos de conversa, ele já deve entender o tipo de projeto.

# **5. A frase que resume o projeto técnico**

Use esta:

**“Neste momento eu não preciso de escala. Eu preciso de integridade.”**

E depois:

**“Quero construir a fundação correta do MGH inteiro, mas implementar agora somente o necessário para executar a Onda 0.”**

Essas duas frases devem orientar orçamento e arquitetura.

# **6. O que mostrar primeiro**

Não entregue imediatamente 12 documentos e diga:

“Leia tudo.”

Sugiro esta sequência:

### **Primeiro**

**Documento 01 — Executive Product Brief**

Para ele compreender o produto.

### **Depois**

**Documento 10 — Technical Roadmap**

Para ele entender o que entra agora e o que fica depois.

### **Depois**

**Documento 02 — Functional Specification**

Para visualizar o sistema.

### **Depois**

**Documento 03 — Architecture & Data Model**

Para discutir tecnologia.

Só então aprofundamos:

Instrument;

Scoring;

Security;

Golden Cases;

O0;

Interpretation Engine.

# **7. O que pedir para ele orçar**

A frase deve ser objetiva:

“Quero uma proposta detalhada para a Fase A. Para as demais fases quero apenas uma estimativa arquitetural, sem compromisso de preço fechado.”

A Fase A deve ser quebrada pelo menos em:

| **Bloco** | **Precificação separada** |
| --- | --- |
| Participant App | sim |
| Admin/Research O0 | sim |
| Backend & Data Model | sim |
| Instrument Registry | sim |
| Response/Event Engine | sim |
| Score Engine | sim |
| Security/Infrastructure | sim |
| Automated Tests/Golden Cases | sim |
| Deployment | sim |
| Documentation/Handoff | sim |

Não aceitar apenas:

“Sistema completo: R$ XX mil.”

# **8. Pergunta técnica nº 1**

Pergunte:

**“Como você modelaria a diferença entre a resposta atual e o histórico de alterações dessa resposta?”**

Resposta esperada conceitualmente:

Response + Response Event, ou arquitetura equivalente.

Alerta:

“A gente só atualiza a resposta na tabela.”

Isso perderia dados importantes da Onda 0.

# **9. Pergunta nº 2**

**“Como você garantiria que uma pergunta já respondida por participantes nunca seja alterada silenciosamente depois?”**

Boa resposta deve envolver:

**versionamento**

**immutable published version**

**novo item text version**

ou conceitos equivalentes.

# **10. Pergunta nº 3**

**“Se eu alterar o algoritmo de scoring daqui a um ano, como você recalcularia um assessment antigo sem apagar o resultado original?”**

Boa resposta:

novo Scoring Run, versão nova, mesmo RAW.

Alerta:

UPDATE no score antigo.

# **11. Pergunta nº 4**

**“Como você garantiria que a randomização das opções não afete o score?”**

Boa resposta:

option ID canônico + presentation order separado.

Muito boa resposta:

server-side randomization persistida em Option Presentation.

# **12. Pergunta nº 5**

**“Se a pessoa fechar o navegador e retornar amanhã, como garantimos que ela veja as mesmas alternativas na mesma ordem em que foram originalmente apresentadas?”**

Boa resposta:

persistir presentation instance/order.

Não:

randomizar de novo.

# **13. Pergunta nº 6**

**“Como você impediria o frontend de conhecer que determinada opção vale D, I, S ou C?”**

Queremos:

scoring mapping somente server-side.

Se ele disser:

“Não tem problema mandar no JSON, ninguém olha”,

é um sinal ruim.

# **14. Pergunta nº 7**

**“Como você faria o submit final ser idempotente?”**

Busque conceitos como:

idempotency key;

transaction;

unique constraint;

job uniqueness;

state validation.

Não é necessário usar exatamente essas tecnologias.

O raciocínio importa.

# **15. Pergunta nº 8**

**“Se o usuário clicar duas vezes em concluir por causa de conexão lenta, como evitamos dois score jobs?”**

Essa pergunta torna idempotência concreta.

# **16. Pergunta nº 9**

**“Como você estruturaria o sistema para eu ter RAW, resultados derivados e interpretações versionadas separadamente?”**

Boa resposta:

camadas separadas;

runs;

immutable history;

foreign keys;

data lineage.

# **17. Pergunta nº 10**

**“Como separaríamos nome, e-mail e telefone dos dados metodológicos?”**

Esperamos:

Identity Vault ou estrutura equivalente.

Alerta:

replicar nome/e-mail em todas as tabelas.

# **18. Pergunta nº 11**

**“Um pesquisador precisa conseguir trabalhar com MGH-O0-005 sem necessariamente saber quem é a pessoa. Como você faria isso?”**

Testa:

privacy by design

RBAC.

# **19. Pergunta nº 12**

**“Como as permissões seriam organizadas?”**

Boa resposta:

role + permissions.

Não apenas:

isAdmin=true.

# **20. Pergunta nº 13**

**“Como você implementaria versões publicadas e imutáveis do instrumento?”**

Boa resposta pode envolver:

publication state;

immutable records;

new versions;

database constraints;

admin workflow.

# **21. Pergunta nº 14**

**“Como o sistema impediria que MGH-P1.0 fosse executado com uma versão incompatível do scoring?”**

Queremos:

release manifest;

compatibility validation;

ou solução equivalente.

Não:

confiar que ninguém escolherá errado.

# **22. Pergunta nº 15**

**“Como você colocaria nossos Golden Cases dentro do CI/CD?”**

Boa resposta:

automated tests;

pipeline;

bloqueio de deploy quando falham.

Alerta:

“No final a gente confere manualmente.”

Manual pode complementar.

Não substituir testes críticos.

# **23. Pergunta nº 16**

**“Como você faria backup e, mais importante, como provaria que ele pode ser restaurado?”**

Queremos:

backup

restore test.

Essa pergunta costuma separar bastante nível técnico.

# **24. Pergunta nº 17**

**“Como você faria deploy sem editar a aplicação manualmente em produção?”**

Procure:

Git;

CI/CD;

staging;

release;

migration.

Alerta:

FTP/manual copy como fluxo normal.

# **25. Pergunta nº 18**

**“Como outro desenvolvedor assumiria o projeto se você não pudesse continuar?”**

Essa pergunta é extremamente importante.

Boa resposta envolve:

repo;

docs;

infra acessível;

migrations;

deploy;

secrets sob controle da empresa;

handoff.

# **26. Pergunta nº 19**

**“Quem será dono do Git, cloud, banco de dados e domínio?”**

Resposta desejável:

# **a empresa/projeto.**

O fornecedor:

possui acesso.

Não:

propriedade exclusiva.

# **27. Pergunta nº 20**

**“Que stack você recomendaria e por quê?”**

Não pergunte:

“Você sabe React?”

Primeiro queremos:

decisão arquitetural.

Ele deverá justificar em termos de:

manutenção;

custo;

testabilidade;

segurança;

mercado de profissionais;

escalabilidade proporcional.

# **28. Pergunta nº 21**

**“Você vê alguma razão concreta para não começarmos com modular monolith?”**

Estamos abertos a argumento.

Mas queremos saber se existe:

necessidade real

ou:

entusiasmo por microservices.

Se ele imediatamente propõe quinze serviços:

pergunte o benefício real para 8–12 participantes O0.

# **29. Pergunta nº 22**

**“Quais partes você considera mais difíceis ou arriscadas neste projeto?”**

Essa é excelente.

Um desenvolvedor experiente provavelmente identificará coisas como:

versionamento;

event history;

workflow de publicação;

runs;

randomization;

idempotência;

research tools;

security.

Se ele responder:

“É tudo bem simples”,

pode ser sinal de que ainda não compreendeu.

# **30. Pergunta nº 23**

**“O que você cortaria primeiro se precisássemos reduzir 20% do orçamento?”**

Resposta desejável:

polimento;

P2;

analytics adicionais;

shadow UI.

Resposta ruim:

versionamento;

RAW events;

tests;

security.

# **31. Pergunta nº 24**

**“O que você se recusaria a cortar mesmo se eu pedisse para economizar?”**

Essa pergunta também é ótima.

Um bom profissional talvez cite:

security;

data integrity;

versioning;

backups;

tests críticos.

Queremos alguém que também saiba dizer:

não.

# **32. Pergunta nº 25**

**“Quais decisões você precisa que eu tome antes de começar e quais você consegue propor tecnicamente?”**

Isso testa:

capacidade de separar:

metodologia

de:

tecnologia.

# **33. Pergunta nº 26**

**“Quando você encontrar uma lacuna na specification, o que fará?”**

Resposta desejável:

registrar/consultar.

Não:

decidir silenciosamente no código.

# **34. Pergunta nº 27**

**“Como você documentaria as mudanças de escopo?”**

Esperamos:

Change Requests;

issues;

estimates;

impact on timeline.

# **35. Pergunta nº 28**

**“Como você diferencia bug de nova funcionalidade?”**

Muito importante comercialmente.

Se specification diz:

DR não randomiza,

e o software randomiza:

bug.

Não:

“alteração solicitada pelo cliente”.

# **36. Pergunta nº 29**

**“Qual período de estabilização pós-release você recomenda?”**

Queremos entender:

suporte;

bugfixes;

monitoramento inicial.

# **37. Pergunta nº 30**

**“Quais custos recorrentes existirão além do desenvolvimento?”**

Pedir:

cloud;

database;

storage;

backup;

auth;

e-mail;

monitoring;

error tracking;

outros SaaS.

Queremos TCO, não apenas preço do código.

# **38. Perguntas sobre segurança**

Não precisa transformar a reunião numa auditoria de cibersegurança, mas deve perguntar:

Como protegerá secrets?

Como separará DEV, STAGING e PILOT?

Como fará RBAC?

Como evitará PII nos logs?

Como protegerá os links dos participantes?

Como controlará exportações?

Como implementará MFA administrativo?

Como lidará com rate limiting?

Como fará restore?

Se ele não souber tudo de cabeça:

não é necessariamente problema.

Mas precisa reconhecer os riscos e propor abordagem.

# **39. Perguntas sobre a Onda 0**

Explique:

“A primeira aplicação real terá apenas 8–12 pessoas, mas preciso preservar muito mais informação do que num formulário comum, porque estamos pesquisando o instrumento.”

Pergunte:

“Você consegue construir o Admin O0 sem transformar isso num dashboard comercial gigante?”

Queremos:

ferramenta de pesquisa eficiente.

Não:

Salesforce.

# **40. Perguntas sobre Instrument Registry**

Pergunte:

“Você conseguiria estruturar o instrumento como configuração versionada em vez de colocar as 48 perguntas hard-coded nas telas?”

Boa resposta:

sim.

Mas também explique:

não queremos CMS onde qualquer admin edita pergunta publicada.

Precisamos de:

registry controlado.

# **41. Perguntas sobre Score Engine**

Explique:

“O score precisa ser 100% determinístico.”

Pergunte:

“Como você isolaria esse módulo para que nenhuma mudança na interface ou no relatório altere o scoring?”

Queremos:

domínio isolado + tests.

# **42. O que mostrar sobre o Motor futuro**

Não precisa ensinar as 32 UIGs uma por uma na primeira reunião.

Explique assim:

“Depois do scoring teremos uma camada de evidências, uma camada de regras interpretativas, bloqueios, sínteses, claims e actions. Quero que a arquitetura atual deixe espaço para isso, mas não quero construir tudo agora.”

Isso é suficiente inicialmente.

# **43. O que NÃO aceitar como primeira solução**

Não aceitar como arquitetura principal:

Google Forms + planilha + ChatGPT.

Nem:

formulário + webhook + prompt.

Nem:

sistema que salva apenas resultado final.

Nem:

score calculado somente no browser.

Nem:

dados reais usados diretamente no ambiente de desenvolvimento.

Nem:

projeto preso na conta pessoal do fornecedor.

# **44. Green Flags™**

Sinais positivos no desenvolvedor:

**faz perguntas antes de estimar;**

**questiona ambiguidades;**

**fala espontaneamente de versionamento;**

**distingue event log de current state;**

**pensa em idempotência;**

**pensa em migrations;**

**quer ver Golden Cases;**

**se preocupa com ownership;**

**separa PII;**

**não força IA onde não precisa;**

**não superdimensiona infraestrutura;**

**consegue dizer “isso ainda não precisa ser construído”;**

**documenta trade-offs.**

Esse tipo de comportamento vale bastante.

# **45. Red Flags™**

Sinais de alerta:

**promete preço/prazo final antes de entender os documentos;**

**diz que versionamento pode ser feito depois;**

**quer salvar tudo num JSON único sem justificativa;**

**quer mandar respostas para IA interpretar;**

**não vê necessidade de testes automatizados;**

**trata backup como suficiente sem restore;**

**não sabe explicar ownership do repo/cloud;**

**coloca scoring no frontend;**

**quer editar perguntas diretamente em produção;**

**trata segurança como fase posterior;**

**sugere usar dados reais em DEV;**

**confunde Golden Cases com testes manuais de tela.**

Um red flag isolado não necessariamente elimina a pessoa.

Um padrão:

sim.

# **46. Algo importante: não precisamos de um “gênio de IA”**

Para a Fase A, eu priorizaria alguém forte em:

**backend**

**modelagem de dados**

**arquitetura web**

**versionamento**

**testes**

**segurança**

**transações**

**boas práticas de software.**

Experiência em IA:

quase irrelevante neste momento.

Experiência em construir sistemas confiáveis:

muito mais importante.

# **47. Também não precisamos necessariamente de um psicólogo-programador**

A metodologia já está sendo definida do nosso lado.

Queremos alguém que saiba:

não atravessar a fronteira metodológica sem autorização.

O conhecimento de psicometria especializado será incorporado separadamente quando necessário.

# **48. O que pedir ao final da reunião**

Você pode fechar assim:

“Com base no que conversamos, eu quero que você prepare uma proposta detalhada somente para a Fase A. Quero escopo, arquitetura sugerida, stack, milestones, estimativa de horas e valores, prazo, custos recorrentes, dependências, riscos, exclusões, abordagem de testes, infraestrutura, suporte pós-release e quais pontos você considera que ainda precisam ser decididos antes do início.”

E acrescente:

“Para as Fases B a E eu quero apenas uma estimativa macro para entender a evolução arquitetural, não um preço fechado.”

# **49. Entregáveis esperados da proposta**

A proposta deverá conter, no mínimo:

| **Item** | **Esperado** |
| --- | --- |
| Entendimento do escopo | sim |
| Stack sugerido | sim |
| Arquitetura resumida | sim |
| Milestones | sim |
| Horas por bloco | desejável |
| Valor por bloco | sim |
| Prazo por milestone | sim |
| Premissas | sim |
| Exclusões | sim |
| Custos recorrentes | sim |
| Infra proposta | sim |
| Segurança | sim |
| Estratégia de testes | sim |
| CI/CD | sim |
| Backup/restore | sim |
| Documentação | sim |
| Suporte pós-release | sim |
| Ownership | sim |
| Riscos técnicos | sim |
| Estimativa macro B–E | sim |

# **50. Se ele pedir orçamento para “descoberta”**

Pode ser legítimo.

Se o desenvolvedor disser:

“Antes de fechar implementação, preciso de algumas horas para revisar a specification e produzir arquitetura detalhada.”

Isso pode ser positivo.

Especialmente num projeto desse porte.

Só precisamos diferenciar:

discovery real

de:

cobrar para descobrir coisas que já estão especificadas.

# **51. Não pressione por preço instantâneo**

Depois de mostrar a documentação, não faria:

“Quanto você cobra?”

nos primeiros cinco minutos.

Melhor:

“Leia, faça perguntas e volte com uma proposta fundamentada.”

Uma estimativa preliminar pode surgir.

Mas a proposta oficial deve ser estudada.

# **52. Se ele encontrar problema na nossa arquitetura**

Queremos ouvir.

Não devemos contratar alguém apenas para:

obedecer.

Se disser:

“Essa estrutura de dados pode causar problema por X e eu sugiro Y preservando os requisitos”,

isso é bom.

O que não pode acontecer é:

trocar requisito metodológico por conveniência sem explicar.

# **53. Nossa postura diante de sugestões**

Podemos usar três respostas:

### **ACEITO**

melhoria técnica sem conflito metodológico.

### **ANALISAR**

possível impacto metodológico.

### **NÃO AGORA**

boa ideia, fase errada.

Essa terceira será bastante usada.

# **54. Checklist pós-reunião**

Depois da conversa, avalie o desenvolvedor em uma escala simples de 1–5 em:

| **Critério** | **Peso sugerido** |
| --- | --- |
| Compreensão do problema | alto |
| Modelagem/arquitetura | alto |
| Integridade de dados | alto |
| Versionamento | alto |
| Testes/QA | alto |
| Segurança | alto |
| Comunicação | médio |
| Pragmatismo | alto |
| Documentação | médio |
| Ownership/handoff | alto |
| Preço | médio |
| Prazo | médio |

Eu não escolheria principalmente pelo menor preço.

Um erro estrutural aqui pode custar várias vezes mais depois.

# **55. Cinco perguntas eliminatórias**

Se quiser reduzir tudo a cinco, use estas:

### **1.**

“Como você preservará o RAW e permitirá novos algoritmos sem sobrescrever resultados antigos?”

### **2.**

“Como você versionará instrumento, scoring e regras publicadas?”

### **3.**

“Como os Golden Cases entrarão no deploy?”

### **4.**

“Quem será dono do código, infraestrutura e banco?”

### **5.**

“Se você sair do projeto amanhã, como outro desenvolvedor assume?”

Se as respostas forem ruins:

eu teria muita cautela.

# **56. Checklist de contratação**

Antes de assinar:

**escopo Fase A definido;**

**B–E fora do preço fechado;**

**milestones definidos;**

**critérios de aceite vinculados aos documentos;**

**ownership definido;**

**IP metodológica protegida;**

**repo sob controle da empresa;**

**cloud sob controle da empresa;**

**documentação incluída;**

**deploy incluído;**

**migrations incluídas;**

**testes incluídos;**

**backup/restore incluídos;**

**suporte de estabilização definido;**

**processo de Change Request definido;**

**bugs diferenciados de novas features.**

Questões contratuais específicas devem ser formalizadas adequadamente com apoio jurídico quando necessário.

# **57. A frase para evitar scope creep**

Se durante a conversa começarem a aparecer ideias como:

app;

dashboard;

pagamento;

IA;

gamificação;

Mapa de Relação,

use:

**“Excelente. Vamos colocar no Parking Lot. Minha prioridade agora é concluir a Fase A sem contaminar o escopo.”**

Essa frase vai economizar dinheiro.

# **58. A frase para proteger metodologia**

Se surgir sugestão de mudar item ou score por facilidade técnica:

**“Essa decisão pertence à metodologia. Registre a limitação técnica e eu avalio o impacto antes de alterarmos.”**

# **59. A frase para proteger qualidade**

Se ele propuser cortar testes:

**“Os Golden Cases fazem parte do critério de aceite. Não são opcionais.”**

Simples.

# **60. A frase para proteger propriedade**

Se repo/cloud ficarem no fornecedor:

**“O projeto precisa nascer em contas sob controle da empresa. Você terá os acessos necessários para desenvolver.”**

# **61. A frase sobre IA**

Se surgir:

“Dá para fazer mais fácil com IA.”

Responda:

**“IA poderá ser nossa camada de linguagem. A interpretação precisa permanecer determinística, versionada e auditável.”**

# **62. O que eu entregaria antes da reunião**

Primeiro pacote enxuto:

**Documento 01 — Executive Product Brief**

**Documento 02 — Functional Specification**

**Documento 10 — Roadmap**

**Documento 12 — Meeting Brief**, para seu uso.

E avisaria:

“Temos anexos técnicos detalhados de arquitetura, instrumento, scoring, testes e segurança para aprofundarmos conforme a conversa.”

Assim não sufocamos a pessoa antes do primeiro contato.

# **63. Depois da reunião**

Se houver interesse real:

entregar os documentos:

03 Architecture;

04 Instrument;

05 Scoring;

06 O0;

07 Golden Cases;

08 Security;

09 Interpretation;

11 Open Items.

Então ele monta proposta técnica final.

# **64. O que o desenvolvedor ainda NÃO receberá necessariamente**

Dependendo da etapa de contratação e confidencialidade, não precisamos disponibilizar imediatamente todos os ativos metodológicos proprietários completos.

Por exemplo:

Banco de Itens integral;

detalhes de todas as UIGs;

Claims;

Actions

podem ser compartilhados na profundidade necessária conforme contratação/confidencialidade.

Ele precisa entender:

arquitetura.

Não necessariamente possuir todos os ativos antes de existir compromisso adequado.

# **65. Critério final de escolha**

A pergunta não é apenas:

**“Ele consegue programar?”**

É:

**“Ele consegue construir uma infraestrutura que preserve a integridade metodológica do MGH enquanto o produto evolui?”**

Essa é a pergunta certa.

# **DEVELOPER HANDOFF PACKAGE™ — CONCLUÍDO**

Agora fechamos os 12 documentos:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — MGH-P1.0 Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests
08 — Security, Privacy & NFR
09 — Interpretation Engine Specification
10 — Technical Roadmap & Scope Control
11 — Open Items & Decision Log
12 — Developer Meeting Brief**

E isso nos leva oficialmente a:

# **100% DA ENGENHARIA PRÉ-DESENVOLVIMENTO PLANEJADA PARA ESTA FASE**

Isso não significa 100% do MGH como produto. Ainda teremos desenvolvimento, O0, O1/O2, calibração, psicometria, segurança comercial e lançamento.

Mas atingimos o objetivo que definimos para este grande bloco:

**chegar à conversa com o desenvolvedor com o MGH suficientemente especificado para que ele não precise inventar o produto enquanto programa.**

## **PRÓXIMA FASE**

A partir daqui eu mudaria nossa lógica de trabalho.

Não avançaria para “Etapa 2.30” criando mais engenharia abstrata.

Agora entraria em:

