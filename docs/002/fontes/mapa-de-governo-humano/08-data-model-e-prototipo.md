---
name: 08-data-model-e-prototipo
description: Etapas 2.17 a 2.19: data model, base operacional e protótipo O0.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 12222-14759
---

# Modelo De Dados E Protótipo

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.17 — DATA MODEL DO PILOTO**

Agora eu faria mais uma etapa antes da primeira aplicação, porque quero impedir que coletemos dados de uma forma que depois seja difícil analisar.

Na **Etapa 2.17**, vamos desenhar o banco de dados completo do piloto:

**tabelas, campos, IDs, relações, tipos de dados, versionamento e esquema RAW/CLEAN/DERIVED.**

Não é ainda o banco definitivo do aplicativo.

É o **modelo de dados do MGH-P1.0**.

Depois disso poderemos produzir duas coisas concretas:

uma **planilha/base operacional do piloto**, pronta para receber dados;

e

uma **especificação que futuramente poderá ser praticamente traduzida para PostgreSQL/Supabase ou outra tecnologia de backend**.

A partir daí, estamos perigosamente perto de poder colocar o **MGH-O0-001** diante do instrumento pela primeira vez.

Sigamos. Agora entramos na **Etapa 2.17 — Data Model do MGH™ Piloto 1.0**.

Aqui há uma decisão arquitetônica que vale congelar desde o início:

**O banco de dados não será construído em torno do relatório final. Será construído em torno da rastreabilidade da evidência.**

Precisamos conseguir responder, daqui a três anos:

“De onde veio esta recomendação?”

e caminhar para trás:

**recomendação → síntese → UIG → evidência → escore → resposta → item → versão do instrumento.**

# **ETAPA 2.17 — DATA MODEL MGH™ P1.0**

### **DATA-P1.0 — Modelo lógico candidato**

## **1. Quatro camadas permanecem fisicamente separadas**

Nossa estrutura oficial será:

| **Camada** | **Função** | **Pode ser alterada?** |
| --- | --- | --- |
| **RAW** | o que realmente aconteceu na aplicação | não, salvo política legal de exclusão |
| **CLEAN** | tratamento técnico/documentado | sim, versionado |
| **DERIVED** | cálculos e evidências | recalculável |
| **INTERPRETATION** | UIGs, sínteses, claims e recomendações | recalculável |

Essa separação resolve um problema enorme.

Se daqui a seis meses mudarmos o SCORE-1.0 para SCORE-1.1, **não mexemos nas respostas originais**.

Recalculamos DERIVED e INTERPRETATION.

# **2. Identidade e dados do MGH ficam separados**

Teremos duas zonas lógicas.

### **IDENTITY VAULT**

Sabe:

quem é MGH-O0-004.

### **MGH DATA**

Sabe apenas:

participant\_id = MGH-O0-004

e suas respostas.

A base analítica não precisa conhecer o nome.

Isso é melhor para privacidade e para reduzir viés de análise.

# **3. PARTICIPANT**

Tabela central pseudonimizada:

| **Campo** | **Tipo** | **Função** |
| --- | --- | --- |
| participant\_id | UUID/código | identificador interno |
| public\_code | text | MGH-O0-001 |
| pilot\_wave | enum | O0 / O1 / O2 / O3 |
| creator\_participant | boolean | identifica criador/metodólogo |
| created\_at | timestamp | criação |
| status | enum | active / withdrawn / excluded |

O public\_code não deve ser a chave real do banco.

Por baixo, usaríamos um UUID.

Exemplo:

participant\_id = 42cb...
public\_code = MGH-O0-001

# **4. PARTICIPANT\_IDENTITY**

Em área separada:

| **Campo** | **Tipo** |
| --- | --- |
| participant\_id | FK |
| full\_name | text |
| email | text/null |
| phone | text/null |
| consent\_contact | boolean |
| created\_at | timestamp |

A aplicação psicométrica não consulta essa tabela para gerar resultados.

Isso deve ser uma regra de arquitetura.

# **5. ASSESSMENT**

Uma mesma pessoa poderá responder o MGH mais de uma vez no futuro.

Portanto:

participante ≠ aplicação.

Tabela:

| **Campo** | **Tipo** |
| --- | --- |
| assessment\_id | UUID |
| participant\_id | FK |
| instrument\_version | text |
| item\_bank\_version | text |
| scoring\_version | text |
| interpretation\_version | text |
| pilot\_wave | enum |
| context\_code | text |
| status | enum |
| started\_at | timestamp |
| submitted\_at | timestamp/null |
| total\_duration\_ms | bigint/null |
| consent\_version | text |
| consent\_accepted\_at | timestamp |
| application\_mode | enum |

application\_mode, por exemplo:

SELF | OBSERVER | FUTURE\_360

No P1.0:

SELF

# **6. Status oficial de aplicação**

****CREATED

STARTED

IN\_PROGRESS

COMPLETED

ABANDONED

WITHDRAWN

INVALIDATED

Importantíssimo:

**INVALIDATED não apaga o RAW.**

Ele apenas informa:

esta aplicação não deve entrar em determinadas análises.

Se houver obrigação legal de exclusão dos dados, isso será tratado por política de privacidade própria, não simulando simplesmente uma invalidação metodológica.

# **7. PROFESSIONAL\_CONTEXT**

Não colocaria esses campos diretamente em participant.

Porque a função profissional pode mudar entre aplicações.

| **Campo** | **Exemplo** |
| --- | --- |
| assessment\_id | — |
| role | MANAGER |
| area | COMMERCIAL |
| role\_tenure\_band | 4\_7\_YEARS |
| leads\_people | true |
| direct\_reports\_band | 11\_20 |
| age\_band | opcional |

Ou seja:

contexto pertence à **aplicação**, não à identidade eterna da pessoa.

Muito importante.

# **8. INSTRUMENT\_VERSION**

Precisamos registrar formalmente cada instrumento.

| **Campo** | **Exemplo** |
| --- | --- |
| instrument\_version | MGH-P1.0 |
| item\_bank\_version | BANK-0.2 |
| scenario\_count | 48 |
| scored\_response\_count | 56 |
| status | PILOT |
| published\_at | — |
| retired\_at | null |
| notes | First cognitive pilot |

Isso impede que alguém use “MGH” como se todas as versões fossem iguais.

# **9. SCENARIO**

Lembra da diferença entre:

**48 situações**

e

**56 respostas pontuáveis?**

Ela aparece aqui.

scenario representa a **tela/situação apresentada ao usuário**.

Exemplo:

| **Campo** | **Valor** |
| --- | --- |
| scenario\_id | SCN-P1-007 |
| instrument\_version | MGH-P1.0 |
| display\_order | 7 |
| scenario\_type | PRC\_INDEPENDENT |
| parent\_construct | PRC |
| progress\_weight | 1 |
| randomizable | false |

Assim a barra:

7/48

é calculada a partir de Scenario.

Não de respostas.

# **10. ITEM**

Dentro de um Scenario podemos ter um ou mais itens pontuáveis.

Exemplo PRC-004R:

Scenario:

PRC-004R

Itens filhos:

PRC-004R-V
PRC-004R-A
PRC-004R-C

Tabela:

| **Campo** | **Função** |
| --- | --- |
| item\_id | identificador imutável |
| scenario\_id | tela pai |
| canonical\_code | PC-007 etc. |
| item\_version | versão específica |
| lens | PRC / PC / DR |
| construct | dimensão |
| facet | opcional |
| context\_code | contexto |
| response\_format | categorical / ordinal / rating |
| randomizable\_options | boolean |
| scoring\_key\_version | versão |
| status | pilot etc. |

# **11. ITEM\_TEXT\_VERSION**

Eu separaria conteúdo textual do ID lógico.

Por quê?

Porque:

PC-014 pode continuar sendo PC-014 mesmo após pequeno ajuste textual.

Teríamos:

| **Campo** | **Exemplo** |
| --- | --- |
| item\_id | PC-014 |
| text\_version | 1.0 |
| language | pt-BR |
| stem\_text | texto |
| instruction\_text | null |
| valid\_from | — |
| valid\_to | null |

Se houver mudança importante de significado, não basta nova versão de texto; pode exigir **novo item**.

# **12. OPTION**

Para PC/PRC forced:

| **Campo** | **Exemplo** |
| --- | --- |
| option\_id | PC007\_D |
| item\_id | PC-007 |
| option\_text | “Gosto da liberdade...” |
| canonical\_position | 1 |
| score\_target | PC.D |
| score\_value | 1 |
| facet\_target | PC.D.AUTONOMY |
| facet\_value | 1 |
| active | true |

Repare:

PC007\_D

não significa que aparece na posição D.

Significa que internamente aquela opção possui determinado significado.

A posição visual é registrada separadamente.

# **13. RESPONSE — coração do RAW**

Eu usaria formato **long**, e não aquela planilha gigante com 56 colunas como banco principal.

Cada resposta = uma linha.

| **Campo** | **Função** |
| --- | --- |
| response\_id | UUID |
| assessment\_id | FK |
| scenario\_id | FK |
| item\_id | FK |
| selected\_option\_id | FK/null |
| numeric\_value | decimal/null |
| first\_value | resposta inicial |
| final\_value | resposta final |
| revision\_count | inteiro |
| first\_view\_at | timestamp |
| first\_answer\_at | timestamp |
| final\_answer\_at | timestamp |
| duration\_ms | bigint |
| submitted | boolean |

Para PC:

selected\_option\_id

Para PRC independente:

numeric\_value = 1..5

# **14. Não recomendo guardar somente a resposta final**

Precisamos preservar revisões.

Então teríamos também:

# **RESPONSE\_EVENT**

Cada interação relevante vira evento.

Exemplo:

EVENT 1

VIEWED

EVENT 2

SELECTED PC007\_I

EVENT 3

CHANGED PC007\_I → PC007\_D

EVENT 4

LEFT\_SCENARIO

Campos:

| **Campo** | **Função** |
| --- | --- |
| event\_id | UUID |
| assessment\_id | — |
| scenario\_id | — |
| item\_id | — |
| event\_type | VIEW/SELECT/CHANGE/etc. |
| old\_value | opcional |
| new\_value | opcional |
| event\_at | timestamp |
| sequence\_number | ordem |

Isso permite reconstruir o que ocorreu sem inferir.

# **15. Por que isso é melhor do que revision\_count?**

Porque revision\_count = 3 nos diz:

mudou três vezes.

Mas não:

V → A → V → C.

Com event log sabemos o percurso.

Talvez nunca precisemos disso para interpretar a pessoa.

Mas pode ser valioso para **auditar o item**.

# **16. OPTION\_PRESENTATION**

Como alternativas PC serão randomizadas, precisamos registrar exatamente o que a pessoa viu.

Exemplo:

| **option\_id** | **display\_position** |
| --- | --- |
| PC007\_C | 1 |
| PC007\_I | 2 |
| PC007\_D | 3 |
| PC007\_S | 4 |

Tabela/evento ligado ao assessment + scenario.

Isso permite investigar futuramente:

houve efeito sistemático da posição da alternativa?

Muito importante.

# **17. RELATION\_GROUP**

Os seis RG também precisam existir como dados, não em documentação perdida.

| **Código** | **Itens** |
| --- | --- |
| RG-01 | PC-007 / PC-027 |
| RG-02 | PC-001 / PC-023 |
| RG-03 | PC-016 / PC-033 |
| RG-04 | PC-021 / PC-028 |
| RG-05 | TH-002 / TH-015 |
| RG-06 | TH-003 / TH-012 |

Tabela intermediária:

relation\_group\_item

Assim podemos modificar grupos futuramente sem alterar os próprios itens.

# **18. SELF\_RESPONSE**

As oito autoavaliações pós-instrumento não pertencem ao Score Engine principal.

Então tabela própria:

| **Campo** | **Exemplo** |
| --- | --- |
| assessment\_id | — |
| self\_item\_id | SELF-02 |
| value | 4 |
| answered\_at | — |

Nunca armazenaria SELF junto com RESPONSE fingindo que faz parte do MGH principal.

Separação conceitual = separação de dados.

# **19. PARTICIPANT\_FEEDBACK**

Para Onda 0:

| **Campo** | **Exemplo** |
| --- | --- |
| assessment\_id | — |
| difficulty\_found | true |
| no\_option\_found | false |
| confusing\_item\_found | true |
| social\_desirability\_frequency | SOME\_TIMES |
| free\_comment | texto |

Isso é feedback global.

A investigação item a item fica em outra tabela.

# **20. COGNITIVE\_INTERVIEW**

Cada entrevista:

| **Campo** | **Função** |
| --- | --- |
| interview\_id | UUID |
| participant\_id | — |
| assessment\_id | — |
| interviewer\_id | — |
| started\_at | — |
| ended\_at | — |
| interview\_version | CI-1.0 |
| notes | observação geral |

Depois:

# **COGNITIVE\_ITEM\_REVIEW**

Uma linha por item investigado.

| **Campo** | **Exemplo** |
| --- | --- |
| interview\_id | — |
| item\_id | PC-007 |
| understanding\_summary | texto |
| real\_situation\_used | true |
| considered\_options | D/C |
| chosen\_reason | texto |
| fit\_quality | GOOD / APPROXIMATE / POOR |
| suggested\_alternative | texto/null |
| researcher\_notes | texto |

# **21. AUDIT\_FLAG**

Os códigos:

CMP
AMB
NFA
TWO
DES
CTX
VOC
RED
COG
MAP

não devem existir como colunas separadas.

Criamos:

| **Campo** | **Exemplo** |
| --- | --- |
| review\_id | — |
| flag\_code | AMB |
| severity | MODERATE |
| comment | “interpretou liberdade como ausência de suporte” |

Assim podemos adicionar novos flags sem alterar a estrutura do banco.

# **22. OCCURRENCE**

Como definimos:

occurrence\_id

assessment\_id

scenario\_id (nullable)

type

severity

description

methodological\_impact

exclude\_scope

recorded\_at

exclude\_scope pode ser:

NONE

ITEM

TIMING\_ANALYSIS

ASSESSMENT

SPECIFIC\_ANALYSIS

Muito melhor que um simples:

exclude = yes/no.

Uma interrupção pode invalidar o tempo sem invalidar as respostas.

# **23. CLEAN DATA não precisa duplicar tudo**

Aqui quero evitar desperdício.

Não faria cópia completa do RAW a cada tratamento.

Teremos regras de transformação versionadas e, quando necessário, tabelas/views CLEAN.

Exemplo:

RAW:

duration\_ms = 487.000

Mas sabemos que houve interrupção de 8 minutos.

CLEAN para análise de tempo:

timing\_usable = false

Não alteramos:

487.000 → 7.000

Não inventamos tempo.

Apenas sinalizamos que aquela observação não serve para aquela análise.

# **24. SCORING\_RUN**

Agora começa DERIVED.

Cada vez que rodarmos o algoritmo:

| **Campo** | **Função** |
| --- | --- |
| scoring\_run\_id | UUID |
| assessment\_id | — |
| scoring\_version | SCORE-P1.0 |
| run\_at | — |
| status | SUCCESS |
| supersedes\_run\_id | opcional |

Se criarmos SCORE-P1.1:

não sobrescrevemos.

Criamos novo run.

# **25. DERIVED\_SCORE**

Uma linha por métrica:

scoring\_run\_id

metric\_code

raw\_value

normalized\_value

rank

metadata\_json

Exemplo:

PC.D

raw\_value = 9

normalized\_value = 0.375

Outro:

DR.PERSISTENCE

raw\_value = 9

normalized\_value = 66.67

Outro:

PC.ENTROPY

normalized\_value = 0.87

research\_only = true



# **26. Por que formato vertical também para Scores?**

Porque futuramente teremos dezenas de métricas.

Se cada nova métrica virar coluna:

pc\_d, pc\_i, pc\_s, pc\_c, dr\_speed...

o schema começa a ficar rígido.

Usar metric\_code permite evolução.

Depois podemos criar views:

assessment\_score\_summary

para análise fácil.

# **27. EVIDENCE\_RUN**

Depois dos scores:

evidence\_run\_id

scoring\_run\_id

evidence\_dictionary\_version

classification\_version

created\_at

Assim sabemos:

quais regras transformaram os números em evidências.

# **28. EVIDENCE\_RESULT**

| **Campo** | **Exemplo** |
| --- | --- |
| evidence\_code | PC.D.AUTONOMY |
| state | CONSISTENT |
| strength\_value | experimental |
| context | DELEGATION |
| source\_metric\_codes | ... |
| source\_item\_ids | ... |
| reportable | false |
| quality\_flag | null |

Linhagem preservada.

# **29. INTERPRETATION\_RUN**

Finalmente:

interpretation\_run\_id

assessment\_id

evidence\_run\_id

interpretation\_version

uig\_library\_version

synthesis\_library\_version

block\_library\_version

created\_at

Cada relatório tem um **run interpretativo específico**.

# **30. UIG\_ACTIVATION**

O sistema precisa registrar até as UIGs que foram consideradas e bloqueadas.

| **Campo** | **Exemplo** |
| --- | --- |
| uig\_id | UIG-DEL-001 |
| uig\_version | 0.1 |
| status | ACTIVATED |
| evidence\_level | E2 |
| supporting\_evidence | ... |
| weakening\_evidence | ... |
| blocked\_by | null |

Status possíveis:

NOT\_ELIGIBLE

CANDIDATE

ACTIVATED

WEAKENED

BLOCKED

SUPPRESSED\_BY\_SYNTHESIS

Isso é maravilhoso para auditoria.

# **31. SYNTHESIS\_ACTIVATION**

Exemplo:

SIN-DEL-001

trigger:

UIG-DEL-001

UIG-DEL-002

result:

ACTIVATED

E registra:

as duas UIGs isoladas tiveram seu texto suprimido.

Não desaparecem do histórico.

# **32. CLAIM**

Antes da recomendação textual:

claim\_id

claim\_code

domain

evidence\_level

source\_uigs

source\_syntheses

allowed\_language\_strength

status

Exemplo:

DELEGATION\_AUTONOMY\_WITH\_CRITERIA

Esse é o significado lógico.

Não a frase.

# **33. RECOMMENDATION**

Depois:

| **Campo** | **Exemplo** |
| --- | --- |
| recommendation\_id | UUID |
| claim\_id | — |
| output\_type | ADAPTATION |
| semantic\_family | DELEGATION\_AUTONOMY |
| template\_id | TMPL-DEL-014 |
| rendered\_text | texto |
| audience | MANAGER |
| language\_engine\_version | 0.1 |

Assim, se no futuro mudarmos apenas a redação:

o claim continua o mesmo.

Excelente.

# **34. CHANGE\_LOG**

Não armazenaremos isso em planilha solta para sempre.

Estrutura:

change\_id

object\_type

object\_id

old\_version

new\_version

change\_category

reason

evidence\_reference

impact\_scoring

impact\_interpretation

approved\_by

changed\_at

object\_type:

ITEM

OPTION

SCORING

EVIDENCE

UIG

SYNTHESIS

BLOCK

UX

DATA\_MODEL



# **35. HYPOTHESIS**

Hypothesis Register também vira dado.

| **Campo** | **Função** |
| --- | --- |
| hypothesis\_id | H-001 |
| version | 1.0 |
| statement | hipótese |
| expected\_direction | POSITIVE etc. |
| variables | códigos envolvidos |
| registered\_before\_wave | O1 |
| challenge\_condition | critério |
| status | OPEN/SUPPORTED/CHALLENGED/INCONCLUSIVE |
| analysis\_reference | posterior |

Nunca apagar hipótese que falhou.

Ela permanece como:

CHALLENGED.

Isso é parte da história científica do MGH.

# **36. ITEM\_SURVIVAL**

Depois das ondas:

| **Campo** | **Exemplo** |
| --- | --- |
| item\_id | PC-014 |
| instrument\_version | P1.0 |
| cognitive\_status | REVIEW |
| desirability\_status | PASS |
| distribution\_status | PENDING |
| timing\_status | PASS |
| revision\_status | REVIEW |
| quantitative\_status | PENDING |
| final\_decision | REWRITE\_MINOR |
| decision\_reason | texto |

Temos assim o histórico evolutivo de cada pergunta.

# **37. GATE\_REVIEW**

Cada passagem de onda:

gate\_review\_id

from\_wave

to\_wave

instrument\_version

review\_date

decision

reviewers

notes

e:

# **GATE\_CRITERION\_RESULT**

****gate\_review\_id

criterion\_code

status

evidence

comment

Decisão:

ADVANCE

ADVANCE\_WITH\_MINOR\_FIXES

REPEAT\_WAVE

STOP\_AND\_REDESIGN



# **38. Um mapa simplificado das relações**

Nossa arquitetura fica:

PARTICIPANT

↓

ASSESSMENT

↓

RESPONSE / RESPONSE\_EVENT

↓

SCORING\_RUN

↓

DERIVED\_SCORE

↓

EVIDENCE\_RUN

↓

EVIDENCE\_RESULT

↓

INTERPRETATION\_RUN

↓

UIG\_ACTIVATION

↓

SYNTHESIS\_ACTIVATION

↓

CLAIM

↓

RECOMMENDATION

Paralelamente:

ASSESSMENT

├── PROFESSIONAL\_CONTEXT

├── SELF\_RESPONSE

├── PARTICIPANT\_FEEDBACK

├── COGNITIVE\_INTERVIEW

└── OCCURRENCE

Isso é praticamente a espinha dorsal do produto.

# **39. O que NÃO colocaria ainda no banco**

Não construiria agora tabelas para:

**pagamento;**

**assinaturas;**

**empresas/clientes;**

**multiusuário;**

**permissões corporativas complexas;**

**Mapa de Relação;**

**Sala de Comando Humana;**

**M2M completo.**

Tudo isso virá.

Hoje estamos construindo:

# **O BANCO QUE PRECISA PROVAR O INSTRUMENTO.**

Não o SaaS inteiro.

# **40. Tecnologia futura**

Quando chegarmos à implementação, este modelo se encaixa muito naturalmente em um banco relacional como **PostgreSQL**.

Poderíamos futuramente usar uma camada como Supabase ou outra infraestrutura para autenticação/API/banco, mas **não precisamos decidir fornecedor agora**.

A arquitetura metodológica não deve depender da plataforma.

Se daqui a dois anos trocarmos tecnologia, o modelo conceitual continua válido.

# **41. Uma regra que quero congelar agora: UTC**

Todos os timestamps do banco devem ser armazenados em:

**UTC**

E convertidos para horário local apenas na interface.

Isso evita problemas futuros quando o MGH tiver participantes em diferentes fusos horários.

# **42. Outra regra: IDs não carregam significado de negócio**

Não teremos chave real como:

FABRICIO\_1982\_D\_HIGH

Obviamente.

Nem mesmo:

PARTICIPANT\_001

como chave primária técnica.

Chaves técnicas:

**UUIDs.**

Códigos humanos:

MGH-O0-001.

Separados.

# **43. Campos JSON: usar com moderação**

Algumas estruturas variáveis podem utilizar JSON no futuro.

Mas eu não colocaria tudo num enorme:

result\_json

Isso facilitaria programar hoje e destruiria auditabilidade amanhã.

Dados críticos:

respostas, scores, evidências, UIGs e claims

merecem estrutura explícita.

JSON apenas para metadados complementares.

# **44. Esquema de imutabilidade**

A política conceitual será:

### **RAW**

**append-only.**

### **MASTER DATA**

itens, opções, UIGs etc.

versões publicadas tornam-se imutáveis.

### **DERIVED**

pode ser recalculado gerando novo Run.

### **INTERPRETATION**

pode ser recalculado gerando novo Run.

Nunca:

UPDATE relatório antigo para parecer que sempre usamos o algoritmo novo.

# **45. Isso nos dá uma possibilidade extraordinária**

Imagine que em 2028 tenhamos:

**SCORE-4.2**

e que o primeiro participante de 2026 tenha autorizado retenção para pesquisa.

Podemos rodar:

respostas RAW de 2026

através de:

SCORE-4.2

e comparar:

**o que P1.0 dizia**

com

**o que o algoritmo atual produziria.**

Sem apagar a interpretação original.

Isso permite estudar a própria evolução do MGH.

# **46. DATA-P1.0 — arquitetura congelada**

Temos agora entidades para:

**participante**

**identidade separada**

**aplicação**

**consentimento**

**contexto profissional**

**instrumento/versionamento**

**cenários**

**itens**

**alternativas**

**apresentação randomizada**

**respostas**

**eventos/revisões**

**grupos de coerência**

**SELF**

**feedback**

**entrevista cognitiva**

**flags**

**ocorrências**

**scoring runs**

**derived scores**

**evidence runs**

**evidências**

**interpretation runs**

**UIGs**

**sínteses**

**claims**

**recomendações**

**change log**

**hypotheses**

**item survival**

**gate reviews.**

Para um Piloto 1.0, é uma arquitetura bastante robusta.

# **ETAPA 2.18 — BASE OPERACIONAL DO PILOTO**

Agora estamos num ponto interessante.

Eu **não avançaria imediatamente para escrever backend**.

O passo seguinte é transformar esse Data Model em uma versão operacional simplificada para a Onda 0.

Ou seja, criar as estruturas reais que conseguiremos usar antes do aplicativo:

**Cadastro dos 8–12 participantes**

**Matriz RAW das 56 respostas**

**registro de tempo/revisões**

**entrevista cognitiva**

**Audit Flags**

**Occurrence Log**

**Hypothesis Register**

**Item Survival Matrix**

**Gate Review**

E existe uma vantagem: depois podemos usar essa mesma especificação para criar o banco PostgreSQL sem repensar tudo.

Na **Etapa 2.18**, eu começaria definindo exatamente **como será essa base operacional da Onda 0 — abas, colunas, IDs, validações e fórmulas**, de modo que já esteja pronta para receber o primeiro MGH-O0-001.

Depois disso, considero que teremos chegado a um marco importante:

**não estaremos mais desenhando o piloto. Estaremos prontos para executá-lo.**

Perfeito — e essa é uma boa estratégia. Quando você se reunir com o desenvolvedor, a intenção é que você **não chegue com uma ideia para ele descobrir como construir**. Você chegará com metodologia, regras, dados, fluxo e arquitetura já definidos; a função dele será discutir tecnologia, implementação, segurança, infraestrutura e cronograma.

Inclusive, nesta etapa eu já transformei o que desenhamos em uma **base operacional real da Onda 0**, pronta para ser usada e também para servir posteriormente como referência técnica.

O arquivo já contém a estrutura para **participantes, aplicações, respostas RAW, eventos e revisões, SELF, entrevistas cognitivas, auditoria de itens, ocorrências, matriz de pontuação das 56 respostas, scores derivados, Hypothesis Register, Item Survival Matrix, Change Log, Gate Review e Dashboard da Onda 0**. Também deixei validações, versionamento e a matriz dos 48 cenários/56 respostas pontuáveis coerentes com o P1.0 que construímos.

Um detalhe importante: essa planilha não é o “banco de dados definitivo”. Ela é a **implementação operacional do DATA-P1.0**. O desenvolvedor posteriormente poderá olhar para ela junto com nosso modelo lógico e enxergar com muita facilidade o que será transformado em PostgreSQL, API e backend.

### **E sobre a reunião futura com o desenvolvedor**

Ao final do nosso trabalho, quero preparar um pacote específico para você levar a essa reunião. Algo na linha de:

**MGH™ — Developer Handoff Package**

Nele estarão consolidados a arquitetura do produto, modelo de dados, fluxo das telas, Score Engine, Evidence Engine, UIG Engine, Block Engine, Collision Resolver, Synthesis Engine, regras de versionamento, requisitos de segurança/LGPD, lógica de permissões e tudo aquilo que é **regra de negócio não negociável**.

Assim, se o desenvolvedor disser:

“Eu pensei em mandar as respostas para uma IA e ela gerar o perfil...”

você saberá imediatamente que **não é essa a arquitetura do MGH**.

O núcleo precisa seguir:

**Resposta → Score → Evidência → UIG → Bloqueio → Colisão → Síntese → Claim → Linguagem.**

A IA entra no fim, para redação, e não como cérebro livre interpretando pessoas.

## **ETAPA 2.19 — Especificação Funcional do Protótipo da Onda 0**

É para onde eu seguiria agora.

Já sabemos **o que armazenar**. Agora precisamos definir exatamente **o que o participante e o pesquisador veem e fazem**.

Vamos desenhar a primeira especificação de interface:

**entrada do participante → consentimento → contexto profissional → aplicação dos 48 cenários → barra de progresso → revisão → SELF → feedback → finalização**

e, paralelamente:

**painel do pesquisador → criação de participante → geração do MGH-ID → acompanhamento da aplicação → entrevista cognitiva → flags → ocorrências → Item Survival → Gate Review.**

Isso vai gerar um **mapa tela por tela**, com campos, botões, regras, estados, mensagens de erro, o que pode ou não pode ser editado e o que cada ação grava no banco.

Depois, quando chegarmos ao desenvolvedor, ele não terá de perguntar:

“O que acontece se a pessoa voltar para a pergunta 17 e mudar a resposta?”

Nós já teremos definido isso.

Esse é exatamente o nível de especificação que eu quero construir com você agora.

[<u>https://docs.google.com/spreadsheets/d/143eblJAX4e6Di7VxH0AXU2Sfy2KgCvnr/edit?usp=drive\_link&ouid=115333195367493942525&rtpof=true&sd=true</u>](https://docs.google.com/spreadsheets/d/143eblJAX4e6Di7VxH0AXU2Sfy2KgCvnr/edit?usp=drive_link&ouid=115333195367493942525&rtpof=true&sd=true)

Vamos. Agora entramos na **Etapa 2.19 — Especificação Funcional do Protótipo da Onda 0**.

A partir daqui, estamos descrevendo o sistema no nível em que um desenvolvedor pode começar a estimar esforço, telas, backend e banco sem precisar “interpretar” o projeto.

# **ETAPA 2.19 — ESPECIFICAÇÃO FUNCIONAL DO PROTÓTIPO O0**

O protótipo terá dois ambientes separados:

**Ambiente do Participante** — aplicação do MGH.
**Ambiente do Pesquisador** — controle da Onda 0.

O participante nunca terá acesso às classificações, chaves, D/I/S/C, PRC, DR, UIGs ou lógica interna.

O pesquisador terá acesso operacional, mas determinadas informações poderão permanecer ocultas durante a entrevista para reduzir viés.

# **1. Arquitetura de navegação**

A jornada principal fica:

**Convite → Consentimento → Contexto profissional → Instruções → 48 cenários → Revisão opcional → SELF → Feedback → Finalização**

Paralelamente:

**Login pesquisador → Participantes → Aplicações → Entrevistas → Auditoria → Ocorrências → Item Survival → Gate Review**

Não haverá resultado automático para o participante na Onda 0.

# **2. PERFIL DE USUÁRIOS**

| **Papel** | **Permissões principais** |
| --- | --- |
| PARTICIPANT | responder sua própria aplicação |
| RESEARCHER | criar participantes, acompanhar aplicação, entrevistar, registrar flags |
| METHODOLOGIST | tudo do pesquisador + alterar status de itens, hipóteses e Gate |
| ADMIN | gestão técnica, usuários, permissões e versões |

Para o protótipo mais simples, RESEARCHER, METHODOLOGIST e ADMIN podem inicialmente ser a mesma conta administrativa, desde que o banco já esteja preparado para separar papéis depois.

# **3. AMBIENTE DO PARTICIPANTE**

## **P-01 — Tela de acesso**

Entrada por link individual.

Exemplo conceitual:

mgh.app/p/O0-X7K92...

O código visível poderá mostrar:

**MGH-O0-004**

Mas o link não deverá depender apenas desse código sequencial.

### **Sistema verifica**

assessment exists

assessment status

instrument version

consent status

link expiration/status

Se aplicação estiver concluída:

**Esta aplicação já foi finalizada.**

Nenhuma possibilidade de editar posteriormente pelo mesmo link sem autorização administrativa.

# **4. P-02 — Consentimento**

Exibe o texto O0-01.

Controles:

☐ Li e compreendi as informações.
☐ Concordo em participar voluntariamente.

Botão:

**CONTINUAR**

Só habilita quando necessário.

Ao clicar:

grava consent\_version, consent\_accepted\_at\_utc.

Não basta gravar:

consent = true.

Precisamos saber **qual texto a pessoa aceitou**.

# **5. P-03 — Contexto profissional**

Campos já definidos:

| **Campo** | **Obrigatório** |
| --- | --- |
| posição profissional | sim |
| área | sim |
| tempo na função | sim |
| lidera pessoas | sim |
| quantidade de liderados | condicional |
| faixa etária | não |

Se:

leads\_people = NO

então direct\_reports\_band = NONE.

O sistema não permite inconsistência como:

Não lidera pessoas + 21–50 liderados.

# **6. P-04 — Instruções**

Tela limpa.

Headline:

# **ANTES DE COMEÇAR**

Texto:

Responda pensando em como você costuma agir hoje no ambiente profissional, e não em como acredita que deveria agir.

Não existem respostas certas ou erradas.

Quando mais de uma opção parecer adequada, escolha a que mais frequentemente representa sua reação natural.

Responda com tranquilidade. Não tente construir um perfil.

Botão:

**COMEÇAR MEU MAPA**

Nesse clique:

assessment.started\_at

status = IN\_PROGRESS

# **7. P-05 — Cenário PC**

Layout padrão.

Topo:

**Seu Mapa está 23% construído**

Corpo:

Texto da situação.

Quatro cartões de resposta.

A ordem dos cartões poderá ser randomizada.

Importante:

o frontend recebe:

option\_id

e:

display\_text

e não associa posição à dimensão.

Ao clicar numa opção:

salva seleção.

Não precisa avançar automaticamente; eu prefiro botão:

**CONTINUAR**

Isso reduz cliques acidentais e nos permite separar:

selected\_at

de

scenario\_submitted\_at.

# **8. P-06 — Cenário PRC Forced**

Mesma arquitetura, porém com três alternativas.

Nenhuma indicação:

Visual
Auditivo
Cinestésico.

A pessoa apenas vê as respostas.

# **9. P-07 — Cenário PRC Independente**

Essa tela é diferente.

Exemplo:

Depois de uma reunião com muitas informações, quanto cada recurso costuma ajudá-lo a consolidar seu entendimento?

Três blocos independentes.

Para cada um:

**1 | 2 | 3 | 4 | 5**

Âncoras:

1 = ajuda muito pouco
5 = ajuda muito

A pessoa precisa responder os três antes de avançar.

A ordem dos três blocos pode ser randomizada.

A direção 1→5 nunca muda.

# **10. P-08 — Cenário DR**

Quatro alternativas ordenadas.

Aqui:

randomizable = false

A tela deve preservar a ordem semântica.

Não colocar letras A/B/C/D visualmente se isso não for necessário. Podemos usar cartões de cima para baixo.

Isso ajuda a evitar que o participante comece a perceber padrões como:

“Tenho marcado muita letra A.”

Internamente o ID permanece.

# **11. Barra de progresso**

Cálculo:

completed\_scenarios / 48

Não:

responses / 56.

Sugestões visuais:

**Seu Mapa está 42% construído**

ou apenas barra + %.

Não exibiria:

Questão 20/48

na Onda 0.

A linguagem “Mapa construído” é mais coerente com a experiência.

# **12. Botões durante aplicação**

Teremos:

**VOLTAR
CONTINUAR**

O participante pode retornar a qualquer cenário anterior antes da submissão final.

Ao modificar:

RESPONSE\_EVENT.CHANGED

grava:

old\_value

new\_value

timestamp.

O RAW nunca apaga a primeira escolha.

# **13. Se a pessoa fechar o navegador**

A aplicação permanece:

IN\_PROGRESS.

Quando abrir novamente:

**Continuar de onde parei**

O sistema volta ao último cenário não concluído.

As respostas anteriores continuam disponíveis.

Isso também evita uma interrupção virar aplicação abandonada automaticamente.

# **14. Quando uma aplicação vira ABANDONED?**

Não automaticamente após 10 minutos, 1 hora ou 1 dia.

Na Onda 0, eu deixaria essa classificação ao pesquisador.

Exemplo:

participante diz que não continuará.

Pesquisador:

**MARCAR COMO ABANDONADA**

Motivo obrigatório.

# **15. Registro de tempo**

Para cada cenário:

first\_view\_at

first\_interaction\_at

final\_submit\_at

duration\_ms

Mas existe um problema:

a pessoa pode abrir a questão e sair para tomar café.

Então o frontend deve também registrar:

window\_blur

window\_focus

se tecnicamente viável.

Isso não serve para diagnosticar comportamento.

Serve para melhorar a interpretação dos dados de tempo.

No mínimo:

tempos muito longos não podem ser interpretados automaticamente como dificuldade cognitiva.

# **16. P-09 — Marco de 50%**

No cenário 24, podemos mostrar apenas uma microtransição:

**50% do seu Mapa já foi construído.**

Botão:

**CONTINUAR**

Eu evitaria uma pausa longa ou mensagem motivacional exagerada.

Objetivo apenas:

reduzir sensação de fadiga.

# **17. P-10 — Cenário 48**

Depois da resposta:

**100% do seu Mapa foi construído.**

Mas ainda não finalizamos.

Mensagem:

Agora queremos conhecer brevemente como você percebe alguns aspectos do seu próprio funcionamento profissional.

Botão:

**CONTINUAR**

# **18. P-11 — SELF**

As oito afirmações podem aparecer:

**uma por tela**

ou

**duas por tela**.

Para a Onda 0 eu prefiro uma por tela ou, no máximo, duas.

Escala:

1 — Discordo totalmente
2
3
4
5 — Concordo totalmente

Importante:

SELF não deve ser chamado de “validação das respostas”.

Isso induziria comportamento.

# **19. P-12 — Feedback do instrumento**

Campos:

Houve alguma situação em que você teve dificuldade para escolher uma resposta?

Sim / Não

Se sim:

campo opcional.

Houve alguma pergunta em que nenhuma alternativa representou razoavelmente o que você faria?

Sim / Não

Alguma pergunta pareceu confusa?

Sim / Não

Durante o questionário, você percebeu que estava tentando escolher a resposta que parecia mais adequada profissionalmente?

Nunca
Algumas vezes
Várias vezes

Campo final:

Há algo sobre sua experiência respondendo que você gostaria de registrar?

# **20. P-13 — Revisão antes do envio**

Aqui existe uma decisão de UX importante.

Eu **não mostraria as 48 perguntas novamente**.

Isso pode provocar revisão excessiva e racionalização.

Mostraria:

Você respondeu todas as etapas.

Botões:

**REVISAR RESPOSTAS**

**ENVIAR DEFINITIVAMENTE**

Se clicar em revisar:

abre uma navegação simples pelos cenários.

Se não:

envia.

# **21. Confirmação de envio**

Modal:

**Finalizar sua participação?**

Depois do envio definitivo, suas respostas não poderão mais ser alteradas por este link.

Botões:

**VOLTAR**

**FINALIZAR**

Ao finalizar:

assessment.status = COMPLETED

submitted\_at

total\_duration

e bloqueia edição.

# **22. P-14 — Tela final**

**Obrigado pela sua participação.**

Você concluiu o MGH™ Piloto P1.0.

Esta é uma versão experimental em desenvolvimento. As informações coletadas nesta fase serão utilizadas para analisar o funcionamento e aperfeiçoar a metodologia.

Sem resultado.

Sem D/I/S/C.

Sem:

“Seu perfil está sendo calculado.”

Porque isso gera expectativa desnecessária.

# **23. AMBIENTE DO PESQUISADOR**

Agora o segundo lado.

## **R-01 — Login**

Autenticação obrigatória.

Para protótipo:

email + senha + MFA se possível.

Já pensando em dados pessoais, eu colocaria 2FA no ambiente administrativo quando avançarmos para implantação real.

# **24. R-02 — Dashboard Onda 0**

Cards:

| **Indicador** | **Exemplo** |
| --- | --- |
| Participantes | 8 |
| Aplicações concluídas | 6 |
| Em andamento | 1 |
| Abandonadas | 1 |
| Entrevistas concluídas | 5 |
| Audit Flags | 17 |
| Ocorrências graves | 0 |
| Itens em REVIEW | 4 |

E uma visão:

**O0: 6/12 aplicações concluídas**

Nada de estatísticas psicométricas sofisticadas nesta tela.

# **25. R-03 — Participantes**

Tabela:

| **ID** | **Função** | **Área** | **Status** | **Aplicação** | **Entrevista** |
| --- | --- | --- | --- | --- | --- |
| MGH-O0-001 | Gestor | Comercial | concluída | ✓ | ✓ |
| MGH-O0-002 | Líder | Operações | concluída | ✓ | pendente |

Nome real pode aparecer apenas para usuário com permissão apropriada.

Idealmente existe botão:

**MOSTRAR IDENTIDADE**

com permissão separada.

# **26. R-04 — Criar participante**

Botão:

**NOVO PARTICIPANTE**

Campos mínimos:

nome/contacto em área protegida;

creator participant? sim/não;

wave = O0.

Sistema automaticamente:

gera UUID;

gera MGH-O0-XXX;

cria Assessment;

gera link seguro individual.

A tela mostra:

**Link de aplicação**

Botão:

**COPIAR LINK**

# **27. R-05 — Detalhe da aplicação**

Exibe:

status;

versões;

início;

término;

duração;

contexto profissional;

cenários concluídos;

número de revisões;

ocorrências.

Não mostraria imediatamente “perfil calculado” durante Onda 0.

Podemos ter aba:

**DADOS TÉCNICOS**

com scores somente para metodólogo, depois da conclusão.

# **28. Modo Entrevista Cognitiva**

Esse é importante.

Botão:

**INICIAR ENTREVISTA**

Abre interface própria.

Na lateral:

lista dos 48 cenários.

Sinais técnicos podem destacar:

demorou muito
mudou resposta
participante comentou

Mas o entrevistador não precisa ver:

esta opção = D.

Isso é excelente para reduzir viés.

# **29. R-06 — Tela da entrevista**

Mostra o item exatamente como o participante viu.

Também mostra:

**resposta final escolhida**

e, se necessário:

**mudou resposta? sim**

Mas eu esconderia inicialmente:

score\_target.

Campos ao lado:

**O que a pessoa entendeu?**

**Situação real utilizada?**

**Entre quais opções ficou?**

**Por que escolheu?**

**A resposta representa bem?**

GOOD | APPROXIMATE | POOR

**Alternativa que faltou**

**Notas**

# **30. Audit Flags**

Na mesma tela:

botão:

**ADICIONAR FLAG**

Escolher:

CMP
AMB
NFA
TWO
DES
CTX
VOC
RED
COG
MAP

Severidade:

LOW
MODERATE
HIGH

Comentário obrigatório para MODERATE/HIGH.

Isso grava em AUDIT\_FLAGS.

# **31. R-07 — Occurrence Log**

Botão disponível no detalhe da aplicação:

**REGISTRAR OCORRÊNCIA**

Tipo livre controlado ou enum inicial:

INTERRUPTION
TECHNICAL\_FAILURE
EXTERNAL\_DISTRACTION
MISUNDERSTANDING
SESSION\_BREAK
OTHER

Severidade.

Impacto metodológico.

Escopo de exclusão.

Exemplo:

excluir apenas da análise de tempo.

Não excluir automaticamente a aplicação inteira.

# **32. R-08 — Auditoria por item**

Essa tela vira uma das mais importantes.

Seleciona:

PC-007

E mostra agregado da Onda 0:

participantes investigados;

flags;

comentários;

tempo;

revisões;

fit quality;

notas.

Ainda sem conclusões automáticas.

No final:

**Decisão preliminar**

KEEP
REWRITE\_MINOR
REWRITE\_MAJOR
REKEY\_REVIEW
RESERVE
RETIRE
NEW\_ITEM\_REQUIRED

# **33. R-09 — Item Survival Matrix**

Visão tabular dos 48 cenários.

Colunas:

**clareza**

**adequação**

**desejabilidade**

**tempo**

**revisões**

**coerência**

**quantitativo**

**decisão**

Filtros:

REVIEW

FAIL

PENDING

Essa será uma das telas centrais antes do Gate.

# **34. R-10 — Change Log**

Nenhuma alteração relevante acontece diretamente em um item publicado.

Se quiser alterar:

botão:

**PROPOR ALTERAÇÃO**

Tela:

objeto;

versão atual;

problema;

evidência;

mudança proposta;

impacta scoring?;

impacta interpretação?;

nova versão.

Só depois:

**APROVAR ALTERAÇÃO**

No protótipo inicial essa aprovação pode ser manual/documental, mas a lógica precisa estar descrita.

# **35. R-11 — Hypothesis Register**

Tabela:

H-001 ... H-012

Status:

OPEN
SUPPORTED
CHALLENGED
INCONCLUSIVE

Mas durante a coleta:

eu bloquearia a mudança arbitrária da hipótese.

O texto original deve permanecer imutável.

Pode adicionar:

análise

resultado

conclusão.

Não editar retrospectivamente o que “esperávamos”.

# **36. R-12 — Gate Review**

Quando Onda 0 termina:

botão:

# **INICIAR GATE O0 → O1**

Sistema apresenta os critérios que já definimos.

Cada critério:

PASS
REVIEW
FAIL

Campo:

**evidência**

Campo:

**comentário**

Ao final:

ADVANCE
ADVANCE\_WITH\_MINOR\_FIXES
REPEAT\_WAVE
STOP\_AND\_REDESIGN

A decisão deve ficar registrada com data e usuário.

# **37. Regras de bloqueio no painel**

Algumas ações simplesmente não devem existir.

O pesquisador não poderá:

**editar uma resposta RAW**

**apagar silenciosamente uma aplicação**

**alterar versão do instrumento depois que a aplicação começou**

**mudar a chave de pontuação retroativamente dentro do mesmo Scoring Run**

**alterar hipótese original depois de ver dados**

**mudar item publicado sem criar versão**

Essas são regras de negócio, não sugestões.

# **38. Estados críticos da aplicação**

Precisamos definir o comportamento do sistema.

| **Situação** | **Comportamento** |
| --- | --- |
| participante não iniciou | link disponível |
| iniciou | continuar |
| fechou navegador | continuar depois |
| concluiu 48 cenários mas não SELF | IN\_PROGRESS |
| concluiu tudo e enviou | COMPLETED |
| quer alterar após concluir | não permitir diretamente |
| solicita retirada | WITHDRAWN |
| pesquisador identifica problema metodológico grave | INVALIDATED sem apagar RAW |
| participante abandona voluntariamente | ABANDONED |

# **39. Mensagens de erro**

Devem ser neutras.

Se tentar avançar sem responder:

**Escolha a opção que mais se aproxima de você para continuar.**

No PRC independente:

**Avalie os três recursos antes de continuar.**

Falha de conexão:

**Não conseguimos salvar sua resposta agora. Verifique sua conexão e tente novamente.**

Não avançamos até confirmar persistência no servidor.

Isso é importante para não perder RAW.

# **40. Autosave**

Cada seleção deve ser enviada ao backend imediatamente.

Não esperar a questão 48 para gravar tudo.

Ideal:

**select → persist → confirm → UI atualizada**

Assim, se navegador fechar:

não perdemos 30 minutos de aplicação.

# **41. Idempotência**

Quando formos programar, ações críticas precisarão evitar duplicidade.

Exemplo:

usuário clica duas vezes em FINALIZAR.

Não cria:

duas submissões.

A API deve reconhecer:

assessment\_id

e estado atual.

Esse detalhe já deve entrar no handoff técnico.

# **42. Auditoria administrativa**

Ações do pesquisador também precisam de log.

Exemplo:

usuário ADMIN-002 marcou Assessment X como INVALIDATED às 18:42.

Não basta gravar o estado final.

Teremos:

ADMIN\_AUDIT\_LOG

futuramente.

Para o protótipo da Onda 0 pode ser simples, mas a arquitetura deve prever.

# **43. Resultado não entra no protótipo inicial do participante**

Quero enfatizar essa decisão.

Mesmo que o Score Engine já consiga calcular algo, **não exibiria o relatório automaticamente na Onda 0**.

Primeiro:

testamos instrumento.

Depois:

testamos interpretação.

Essas são fases distintas.

Podemos gerar relatórios internamente para auditoria do Motor.

Mas o participante não recebe automaticamente.

# **44. Arquitetura funcional resumida**

O desenvolvedor futuramente poderá enxergar:

PUBLIC APP

PARTICIPANT FLOW

CONSENT

CONTEXT

INSTRUCTIONS

ASSESSMENT

SELF

FEEDBACK

SUBMIT

ADMIN APP

PARTICIPANTS

ASSESSMENTS

COGNITIVE INTERVIEWS

FLAGS

OCCURRENCES

ITEM AUDIT

CHANGE LOG

HYPOTHESES

GATE REVIEW

E por baixo:

API

↓

DATABASE

↓

RAW

↓

SCORE ENGINE

↓

EVIDENCE ENGINE

↓

INTERPRETATION ENGINE

No protótipo O0, podemos inclusive deixar Evidence/Interpretation Engine fora da interface pública.

# **45. O que o desenvolvedor deverá estimar posteriormente**

Quando chegarmos ao handoff, pediremos que ele separe orçamento e prazo em módulos:

**Módulo 1 — aplicação participante**

**Módulo 2 — painel de pesquisa**

**Módulo 3 — banco + eventos/auditabilidade**

**Módulo 4 — Score Engine**

**Módulo 5 — Evidence/Interpretation Engine**

**Módulo 6 — relatórios**

Assim evitamos receber uma proposta genérica:

“Aplicativo MGH: R$ X.”

Queremos saber exatamente o que está sendo construído.

# **46. Marco alcançado**

Agora já possuímos:

**metodologia**

**questionário**

**matemática**

**Motor de Governo**

**Data Model**

**base operacional**

e agora:

# **ESPECIFICAÇÃO FUNCIONAL DO PROTÓTIPO.**

Isso significa que nossa conversa com um desenvolvedor já seria muito diferente hoje daquela que seria algumas semanas atrás.

Você não diria:

“Quero um teste de perfil com aplicativo.”

Diria:

“Tenho um instrumento versionado, 48 cenários, 56 respostas pontuáveis, três lentes distintas, Score Engine determinístico, dados RAW imutáveis, sistema de evidência, regras interpretativas e protocolo de pilotagem. Preciso implementar este fluxo.”

É outro nível de conversa.

