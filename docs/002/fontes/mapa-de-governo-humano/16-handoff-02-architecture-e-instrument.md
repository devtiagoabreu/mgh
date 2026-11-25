---
name: 16-handoff-02-architecture-e-instrument
description: Documentos 03 e 04 do Developer Handoff Package.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 32825-37820
---

# Handoff 02: Architecture E Instrument

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.29C — ARCHITECTURE & DATA MODEL**

Nele vamos colocar para o desenvolvedor, de maneira organizada:

**módulos do sistema**

**entidades**

**relações**

**RAW/CLEAN/DERIVED/INTERPRETATION**

**Runs**

**UUIDs**

**Identity Vault**

**versionamento**

**audit logs**

**jobs assíncronos**

**arquitetura modular monolith**

**ambientes**

e um **diagrama lógico textual** que ele poderá transformar em arquitetura técnica real.

Depois dessa etapa, já teremos os três documentos que mais influenciam diretamente a primeira proposta de desenvolvimento.

Perfeito. Agora saímos da visão funcional e entramos no **esqueleto técnico que sustentará o MGH ao longo dos anos**.

# **ETAPA 2.29C — ARCHITECTURE & DATA MODEL**

## **Documento 03 — Arquitetura e Modelo de Dados**

**Versão:** MGH-ARCH-DATA-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Escopo imediato:** Fase A — Pilot Core / Onda 0
**Objetivo futuro:** permitir evolução do MGH sem reconstrução estrutural do sistema.

A regra-mãe deste documento será:

**O banco de dados do MGH deve ser organizado para preservar a trajetória da evidência, e não apenas para armazenar o resultado final.**

# **1. Princípio arquitetural**

Para a primeira implementação, nossa recomendação permanece:

# **MODULAR MONOLITH**

Ou seja:

uma aplicação principal;

módulos internos bem separados;

um banco relacional principal;

interfaces claras entre os módulos;

possibilidade de separar serviços no futuro se a escala justificar.

Não começaremos com microservices.

Isso acrescentaria complexidade operacional antes de termos problema de escala que justifique essa complexidade.

# **2. O que queremos evitar**

Não queremos uma aplicação construída assim:

formulário → tabela de respostas → função calcula resultado → PDF.

Isso pode funcionar para um quiz.

Não para o MGH.

Precisamos preservar:

**versões**

**eventos**

**origem da evidência**

**pontuação**

**reprocessamentos**

**interpretações**

**auditoria**

**pesquisa**

**evolução metodológica.**

# **3. Diagrama lógico de alto nível**

**** ┌──────────────────────────────┐

│ IDENTITY VAULT │

│ Nome / Contato / Identidade │

└──────────────┬───────────────┘

│ participant\_id

│

┌──────────────▼───────────────┐

│ PARTICIPANT CORE │

│ UUID + public\_code + wave │

└──────────────┬───────────────┘

│

┌──────────────▼───────────────┐

│ ASSESSMENT │

│ versões + status + contexto │

└──────────────┬───────────────┘

│

┌───────────────────────────┼────────────────────────────┐

│ │ │

▼ ▼ ▼

INSTRUMENT REGISTRY RESPONSE ENGINE RESEARCH DATA

itens / cenários / responses / events / SELF / feedback /

opções / versões presentation order entrevistas / flags

│ │ │

└──────────────┬────────────┘ │

▼ │

SCORE ENGINE │

│ │

SCORING RUN │

│ │

DERIVED SCORE │

│ │

▼ │

EVIDENCE ENGINE ←────────────────────────────────┘

│

EVIDENCE RUN

│

▼

INTERPRETATION ENGINE

│

INTERPRETATION RUN

│

┌───────────┼────────────┐

▼ ▼ ▼

UIGs SYNTHESIS BLOCKS

└───────────┬────────────┘

▼

CLAIM ENGINE

│

ACTIONS

│

LANGUAGE

│

REPORT COMPOSER

Na **Fase A**, a implementação obrigatória pode terminar principalmente em:

SCORING RUN + Research Module.

As camadas seguintes precisam estar arquitetonicamente previstas, mas não precisam estar comercialmente completas.

# **4. As quatro camadas de dados**

Essa separação fica oficial.

## **RAW**

Aquilo que efetivamente ocorreu.

Exemplos:

qual alternativa foi apresentada;

qual alternativa foi escolhida;

quando;

qual foi a primeira escolha;

qual foi a alteração;

qual ordem foi exibida.

RAW:

**não deve ser reescrito para acompanhar alterações metodológicas futuras.**

## **CLEAN**

Representações derivadas do RAW após aplicação de regras documentadas de limpeza.

Exemplo:

uma duração de cenário foi marcada como inadequada para análise porque o participante ficou 50 minutos com a aba aberta.

RAW:

50 minutos.

CLEAN:

timing excluded.

Não alteramos o tempo original.

## **DERIVED**

Resultados matematicamente recalculáveis.

Exemplos:

D = 9;

PRC.V independent mean = 4,75;

DR.Persistence = 66,666…;

facet hit counts.

Podem ser recalculados usando:

RAW + Scoring Version.

## **INTERPRETATION**

Resultados da camada metodológica.

Exemplos:

Evidence;

UIG Activation;

Synthesis;

Claim;

Action;

Report.

Podem ser recalculados usando:

DERIVED + versões interpretativas.

# **5. Regra de dependência**

Fluxo permitido:

RAW

↓

CLEAN

↓

DERIVED

↓

INTERPRETATION

Nunca:

INTERPRETATION

↓

reescreve RAW

Nem:

novo algoritmo

↓

sobrescreve score antigo



# **6. Banco de dados recomendado**

A escolha final da tecnologia pode ser proposta pelo desenvolvedor.

Mas, conceitualmente, o MGH é fortemente adequado a:

**banco relacional transacional.**

Exemplo de classe tecnológica:

PostgreSQL ou equivalente robusto.

Isso não é uma exigência de marca específica.

A exigência é possuir:

**integridade referencial**

**transações**

**índices**

**constraints**

**migrations**

**JSON controlado quando necessário**

**backup confiável.**

# **7. UUID como chave técnica**

Entidades principais utilizarão:

UUID.

Exemplo:

participant\_id

assessment\_id

response\_id

scoring\_run\_id.

Não utilizar:

participant\_id = 1,2,3...

como identificador público.

# **8. Código humano separado**

O pesquisador poderá trabalhar com:

MGH-O0-001

Esse é:

public\_code.

Não é:

primary key.

Assim podemos alterar nomenclatura operacional sem comprometer relações técnicas.

# **9. Identity Vault™**

Precisamos separar:

**quem a pessoa é**

de:

**como ela respondeu.**

Estrutura lógica:

### **PARTICIPANT**

contém:

UUID;

public\_code;

wave;

datas;

status operacional.

### **PARTICIPANT\_IDENTITY**

contém:

nome;

e-mail;

telefone ou outras informações necessárias.

Relacionada por:

participant\_id.

# **10. Por que separar identidade?**

Porque:

Score Engine não precisa saber nome.

Evidence Engine não precisa saber nome.

Interpretation Engine não precisa saber nome.

Isso permite:

**pseudonimização estrutural.**

E reduz superfície de exposição.

# **11. Entidade PARTICIPANT**

Campos conceituais mínimos:

participant\_id UUID PK

public\_code

wave\_code

creator\_participant BOOLEAN

participant\_status

created\_at

created\_by

Possíveis metadados adicionais somente quando necessários.

# **12. PARTICIPANT\_IDENTITY**

Campos possíveis:

participant\_identity\_id UUID PK

participant\_id UUID FK

full\_name

email

phone

created\_at

updated\_at

Acesso:

mais restrito.

Não replicar o nome em tabelas de Score, Evidence ou Interpretation.

# **13. ASSESSMENT**

É uma das entidades centrais.

Campos conceituais:

assessment\_id UUID PK

participant\_id UUID FK

release\_manifest\_id UUID FK

instrument\_version

status

wave\_code

started\_at

last\_activity\_at

submitted\_at

withdrawn\_at

invalidated\_at

created\_at



# **14. Release Manifest**

Em vez de assessment guardar dezenas de versões sem controle, poderá existir:

### **RELEASE\_MANIFEST**

****release\_manifest\_id

master\_spec\_version

instrument\_version

item\_bank\_version

scoring\_version

evidence\_version

uig\_library\_version

synthesis\_version

claim\_dictionary\_version

action\_registry\_version

language\_policy\_version

report\_composer\_version

validation\_status

decision\_use\_allowed

published\_at

O assessment referencia:

um manifesto imutável.

Isso é muito elegante.

# **15. Por que o Manifest importa?**

Imagine em 2029:

Assessment A:

MGH-MASTER-P1.0-RC1

Assessment B:

MGH-MASTER-2.3

Mesmo que ambos sejam chamados comercialmente de:

Mapa de Governo Humano™

conseguimos reconstruir:

exatamente qual sistema gerou cada um.

# **16. PROFESSIONAL\_CONTEXT**

Não precisa ficar embutido em Assessment.

Entidade própria:

professional\_context\_id

assessment\_id

role

area

role\_tenure

leads\_people

number\_of\_people\_led

age\_band nullable

current\_professional\_context

created\_at



# **17. Contexto é do assessment**

Isso é importante.

Se a mesma pessoa responder novamente dois anos depois:

seu:

cargo;

área;

time;

contexto

podem ter mudado.

Logo:

contexto profissional pertence à aplicação, não permanentemente à identidade.

Excelente distinção.

# **18. Consentimento**

Entidades:

### **CONSENT\_VERSION**

contém:

versão;

conteúdo/referência;

data de publicação;

status.

### **ASSESSMENT\_CONSENT**

contém:

assessment;

consent\_version;

accepted/rejected;

timestamp;

metadados estritamente necessários.

Assim conseguimos provar:

qual consentimento foi apresentado naquela aplicação.

# **19. INSTRUMENT\_VERSION**

Entidade metodológica:

instrument\_version\_id

code = MGH-P1.0

status

scenario\_count

scored\_response\_count

intended\_use

prohibited\_use

validation\_status

published\_at

Publicada:

imutável.

# **20. SCENARIO**

Representa um dos 48 passos visíveis.

Campos:

scenario\_id

instrument\_version\_id

scenario\_number

scenario\_type

presentation\_order

required

randomization\_policy

status

scenario\_number:

1–48 no P1.0.

# **21. ITEM**

O construto técnico do item.

Exemplo:

PC-001

PRC-004R

TH-003.

Campos:

item\_id UUID

canonical\_code

lens

construct

facet nullable

context

scoring\_type

randomization\_policy

independence\_group

status



# **22. ITEM\_TEXT\_VERSION**

Separar o item conceitual de seu texto.

Campos:

item\_text\_version\_id

item\_id

language

version

scenario\_text

instruction\_text

published\_at

status

Se mudarmos semanticamente o texto:

nova versão.

Não alteramos o texto usado historicamente.

# **23. OPTION**

Cada alternativa possui identidade própria.

Exemplo conceitual:

option\_id UUID

item\_id

option\_code

option\_text\_version

canonical\_score\_target

canonical\_score\_value

display\_metadata

status

O frontend não deve depender de:

“A = D”.

A posição apresentada é outra coisa.

# **24. OPTION\_PRESENTATION**

Essa entidade é extremamente importante.

Registra:

o que aquela pessoa realmente viu.

Campos conceituais:

option\_presentation\_id

assessment\_id

scenario\_id

item\_id

option\_id

display\_position

presentation\_instance

presented\_at

Depois podemos responder:

“PC-007 opção D estava na segunda posição visual para esse participante.”

# **25. Por que armazenar isso?**

Porque score usa:

option\_id.

Mas pesquisa pode querer saber:

houve efeito sistemático de posição?

Sem Option Presentation perderíamos essa possibilidade.

# **26. RESPONSE**

Representa o estado final atual da resposta dentro do assessment.

Pode conter:

response\_id

assessment\_id

scenario\_id

item\_id

selected\_option\_id nullable

rating\_value nullable

first\_answered\_at

last\_answered\_at

revision\_count

created\_at

updated\_at

Mas cuidado:

RESPONSE não substitui RESPONSE\_EVENT.

# **27. RESPONSE\_EVENT**

É o histórico.

Exemplo:

response\_event\_id

assessment\_id

response\_id

scenario\_id

item\_id

event\_type

previous\_value

new\_value

event\_timestamp

session\_id

metadata

Assim:

RESPONSE = posição final.

RESPONSE\_EVENT = trajetória.

# **28. RAW append-only**

Especialmente:

RESPONSE\_EVENT

não deve permitir alteração comum.

Se ocorreu correção técnica extraordinária:

precisa existir procedimento auditável separado.

# **29. PRC Independent**

Como existem três ratings por cenário, devemos modelar corretamente.

Podemos ter:

um response por item/rating;

ou:

entidade de grupo + respostas filhas.

O requisito metodológico é:

preservar cada V/A/C independentemente.

Nunca salvar apenas:

média final.

# **30. RELATION\_GROUP**

Entidade metodológica:

relation\_group\_id

code

purpose

version

status

Exemplo:

RG-01.

Tabela relacional:

### **RELATION\_GROUP\_ITEM**

****relation\_group\_id

item\_id

role

Isso evita colocar pares diretamente no código.

# **31. SELF\_RESPONSE**

Separada de RESPONSE principal.

Campos:

self\_response\_id

assessment\_id

self\_item\_code

rating\_value

answered\_at

Isso ajuda a impedir uso acidental pelo Score Engine.

# **32. PARTICIPANT\_FEEDBACK**

Para o pós-teste.

Campos podem incluir:

dificuldade;

alternativa inadequada;

confusão;

repetição;

desejabilidade declarada;

comentário aberto.

Importante:

feedback não entra no score.

# **33. COGNITIVE\_INTERVIEW**

****cognitive\_interview\_id

assessment\_id

researcher\_id

interviewed\_at

general\_notes

overall\_difficulty

created\_at



# **34. COGNITIVE\_ITEM\_REVIEW**

Uma entrevista pode produzir múltiplas observações por item.

cognitive\_item\_review\_id

cognitive\_interview\_id

item\_id

flag\_code

severity

notes

suggested\_action

created\_at



# **35. AUDIT\_FLAG**

Entidade mais genérica para qualidade.

audit\_flag\_id

assessment\_id

item\_id nullable

flag\_type

severity

analysis\_scope

source

notes

created\_by

created\_at



# **36. OCCURRENCE**

Campos:

occurrence\_id

assessment\_id

occurrence\_type

severity

exclude\_scope

item\_id nullable

description

occurred\_at

registered\_by

created\_at

Severity:

MINOR

MODERATE

MAJOR

INVALIDATING.

# **37. Exclusion Scope**

Preservamos:

NONE

ITEM

TIMING\_ANALYSIS

ASSESSMENT

SPECIFIC\_ANALYSIS.

Isso permitirá que análises futuras filtrem dados corretamente sem destruir RAW.

# **38. SCORE ENGINE**

O Score Engine recebe:

**assessment concluído**

**scoring\_version compatível**

e produz:

um SCORING\_RUN.

# **39. SCORING\_RUN**

****scoring\_run\_id UUID

assessment\_id

scoring\_version

instrument\_version

status

started\_at

completed\_at

initiated\_by

engine\_version

input\_hash

created\_at

O input\_hash é recomendação técnica interessante para rastreabilidade.

Pode ajudar a verificar:

mesma entrada → mesma execução determinística.

Implementação final cabe ao desenvolvedor justificar.

# **40. Score Run é imutável**

Quando concluído:

não sobrescrever.

Se SCORE-P1.1 surgir:

criar:

novo Scoring Run.

O resultado antigo continua.

# **41. DERIVED\_SCORE**

Uma linha por métrica ou estrutura equivalente.

Campos:

derived\_score\_id

scoring\_run\_id

metric\_code

lens

construct

facet nullable

raw\_value

normalized\_value nullable

relative\_value nullable

opportunities nullable

rank nullable

metadata

Exemplos de metric\_code:

PC.D

PC.I

PC.GAP12

PRC.V.FORCED

PRC.V.INDEPENDENT

DR.PERSISTENCE.

# **42. Precision Policy**

Banco deve preservar precisão suficiente.

Exemplo:

66,666666…

Armazenar adequadamente.

Display:

66,67.

Não arredondar precocemente e depois recalcular usando valor arredondado.

# **43. EVIDENCE\_RUN**

Futuro/experimental na Fase A.

evidence\_run\_id

scoring\_run\_id

evidence\_dictionary\_version

status

started\_at

completed\_at

mode

created\_at

Mode poderá ser:

RESEARCH\_INTERNAL

OFFICIAL

no futuro.

# **44. EVIDENCE\_RESULT**

****evidence\_result\_id

evidence\_run\_id

evidence\_code

classification

raw\_value

normalized\_value

context

source\_items

independence\_group

quality\_flags

max\_evidence\_level

source\_items idealmente deve ter relação estruturada quando crítico.

Não esconder toda lineage num JSON ilegível.

# **45. Regra de JSON**

JSON pode ser usado para:

metadados flexíveis;

dados técnicos complementares.

Não usar um campo:

result\_json = {tudo\_do\_MGH}

como arquitetura principal.

Isso prejudicaria:

query;

integridade;

lineage;

auditoria.

# **46. INTERPRETATION\_RUN**

****interpretation\_run\_id

evidence\_run\_id

interpretation\_version

uig\_library\_version

synthesis\_version

claim\_dictionary\_version

action\_registry\_version

status

mode

created\_at

completed\_at



# **47. UIG\_ACTIVATION**

Registra:

qual UIG foi avaliada;

se ativou;

se foi bloqueada;

por quê.

Campos:

uig\_activation\_id

interpretation\_run\_id

uig\_id

status

evidence\_level

activation\_reason

blocked\_by nullable

suppressed\_for\_render boolean



# **48. Importante: registrar também o que foi bloqueado**

Se uma UIG candidata parecia ativável, mas B2 bloqueou:

isso é informação metodológica relevante.

Não salvar apenas:

UIGs que “passaram”.

Precisamos entender comportamento do Engine.

# **49. SYNTHESIS\_ACTIVATION**

****synthesis\_activation\_id

interpretation\_run\_id

synthesis\_rule\_id

status

component\_uigs[]

final\_evidence\_level

suppresses[]

created\_at

Novamente, relações críticas devem preferencialmente possuir estrutura própria.

# **50. CLAIM**

Resultado do Claim Engine:

claim\_id

interpretation\_run\_id

claim\_code

evidence\_level

domain

semantic\_family

status

source\_rule

suppressed\_for\_render

created\_at

Não confundir:

Claim Dictionary definition

com:

Claim gerado para uma pessoa.

Um é regra.

Outro é instância.

# **51. RECOMMENDATION / ACTION**

Podemos ter:

recommendation\_id

interpretation\_run\_id

claim\_id

action\_code

domain

semantic\_family

priority

constraint\_status

render\_status

Assim conseguimos responder:

Qual Claim produziu qual Action?

# **52. REPORT**

Futuramente:

report\_id

assessment\_id

interpretation\_run\_id

report\_version

audience

language\_policy\_version

report\_composer\_version

template\_version

generation\_mode

status

created\_at

Generation Mode:

DETERMINISTIC

ou:

AI\_ASSISTED

no futuro.

# **53. REPORT\_SECTION**

Pode permitir auditoria fina:

report\_section\_id

report\_id

section\_type

position

deterministic\_text

generated\_text nullable

claim\_ids

action\_codes

created\_at

Isso tornará o relatório extremamente rastreável.

# **54. CHANGE\_LOG**

Já definido funcionalmente.

No modelo:

change\_id

component\_type

component\_code

from\_version

to\_version

change\_type

reason

impact

comparability\_effect

golden\_cases\_affected

status

requested\_by

approved\_by

created\_at

implemented\_at



# **55. HYPOTHESIS**

****hypothesis\_id

code

version

description

data\_required

status

result

notes



# **56. ITEM\_SURVIVAL**

Pode estar associado a:

item;

wave;

review cycle.

item\_survival\_id

item\_id

wave\_code

decision

reason

reviewed\_by

reviewed\_at



# **57. GATE\_REVIEW**

****gate\_review\_id

wave\_code

decision

review\_version

reviewed\_at

approved\_by

notes

E:

### **GATE\_CRITERION\_RESULT**

****gate\_criterion\_result\_id

gate\_review\_id

criterion\_code

result

evidence\_reference

notes

Assim o Gate não é apenas:

uma decisão sem justificativa.

# **58. AUDIT LOG**

Separado de response events.

RESPONSE\_EVENT:

comportamento do participante durante aplicação.

AUDIT\_LOG:

ações sensíveis administrativas/sistêmicas.

Exemplos:

admin invalidou assessment;

methodologist publicou versão;

usuário interno exportou dados;

acesso foi revogado.

# **59. AUDIT\_LOG**

Campos mínimos:

audit\_log\_id

actor\_id

action\_code

target\_type

target\_id

timestamp

reason nullable

before\_reference nullable

after\_reference nullable

metadata

Idealmente:

append-only.

# **60. Technical Logs ≠ Audit Logs**

Precisamos diferenciar.

### **Technical logs**

erro de API;

latência;

stack;

health.

### **Security logs**

falhas de autenticação;

tentativas suspeitas;

rate limit.

### **Business audit**

quem invalidou assessment;

quem publicou versão.

Não misturar tudo num arquivo de log único.

# **61. Segredos nunca em logs**

Não registrar:

senha;

token de acesso completo;

secret;

chave API;

dados pessoais desnecessários.

Token público deve ser:

mascarado/redigido.

# **62. Job assíncrono**

Algumas tarefas podem ser realizadas fora da requisição HTTP principal.

Exemplos futuros:

score após submit;

Evidence Run;

Interpretation Run;

relatório;

exportação;

e-mail.

Fluxo:

Submit concluído

↓

commit transaction

↓

enqueue SCORE\_JOB

↓

worker processa

Isso evita prender experiência do participante ao processamento posterior.

# **63. Fase A não exige infraestrutura gigantesca de filas**

Pode utilizar solução simples e robusta.

Importante é:

job ser rastreável e idempotente.

# **64. JOB**

Conceitualmente:

job\_id

job\_type

assessment\_id

status

attempt\_count

idempotency\_key

created\_at

started\_at

completed\_at

last\_error



# **65. Estados de job**

Possíveis:

PENDING

RUNNING

COMPLETED

FAILED

RETRYING

DEAD\_LETTER ou equivalente.

Nomenclatura final pode seguir ferramenta escolhida.

# **66. Idempotência**

Operações críticas:

final submit;

score;

Evidence Run;

report generation;

exportação relevante

devem ser protegidas contra duplicação.

Exemplo:

mesmo:

scoring\_version + assessment + input

não deve acidentalmente gerar dez Score Runs por retries técnicos.

Se reprocessamento foi intencional:

isso precisa ficar claro.

# **67. Transaction boundary do Submit**

A submissão final precisa:

1. verificar estado;
2. validar requisitos;
3. garantir respostas;
4. registrar submit;
5. mudar status;
6. gravar evento;
7. commit;
8. depois disparar processamento assíncrono.

Não marcar COMPLETED antes de ter consistência.

# **68. Concurrency control**

Duas sessões tentando alterar a mesma resposta:

precisam de política.

Pode ser:

optimistic locking;

version field;

ou mecanismo equivalente.

O requisito é:

evitar sobrescrita silenciosa.

# **69. Session**

Entidade/conceito pode registrar:

session\_id

assessment\_id

started\_at

last\_seen\_at

device\_metadata

status

Sem criar fingerprinting invasivo desnecessário.

Objetivo:

controle funcional e segurança.

# **70. Uma sessão ativa**

Recomendação:

apenas uma sessão ativa de aplicação por assessment.

Se nova sessão for aberta:

sistema pode:

avisar;

encerrar anterior;

ou exigir confirmação.

O desenvolvedor pode propor solução UX.

# **71. Instrument Registry**

Banco de:

**instrumentos**

**cenários**

**itens**

**textos**

**opções**

**scoring keys**

**randomization rules**

não deve depender do frontend.

Frontend:

renderiza configuração publicada.

# **72. Porém o frontend não recebe tudo**

Ponto de segurança/metodologia.

Não enviar para navegador:

score\_target = D

facet = AUTONOMY

reverse\_key = true

se esses dados não forem necessários.

O servidor sabe.

O participante não precisa saber.

Isso está coberto inclusive pelo nosso SEC-001.

# **73. Server-side randomization**

Congelado.

Servidor define:

ordem das opções.

Registra:

OPTION\_PRESENTATION.

Frontend apenas mostra.

# **74. Configuração publicada imutável**

Instrumento P1.0 publicado:

não pode ser editado diretamente.

Se houver P1.1:

nova publicação.

Isso pode ser garantido:

por aplicação;

por constraint;

ou pelas duas coisas.

# **75. Migrations**

Toda alteração de schema:

migration versionada.

Não fazer:

editar produção manualmente e esquecer o que mudou.

Repositório precisa conter histórico das migrations.

# **76. Ambientes**

Separação mínima:

### **DEV**

desenvolvimento.

Dados sintéticos.

### **STAGING**

testes integrados, homologação.

Dados sintéticos ou anonimizados conforme política.

### **PILOT/PROD**

Onda 0 real.

Dados reais.

# **77. Banco separado por ambiente**

Recomendação forte:

não usar o mesmo banco com coluna environment.

Separação real de ambiente reduz riscos.

# **78. Secrets**

Variáveis sensíveis:

DB credentials;

encryption keys;

API keys;

mail keys.

Não ficar:

hard-coded no repositório.

Utilizar:

secret manager / environment management apropriado.

# **79. Deploy**

Precisamos de processo reprodutível.

Ideal:

Git → Pull Request → testes → build → staging → aprovação → production.

Não:

desenvolvedor entra via FTP e substitui arquivo.

# **80. CI**

A pipeline deverá executar pelo menos:

**build**

**lint**

**unit tests**

**Golden Cases críticos**

**integration tests selecionados.**

Se Golden Case bloqueante falhar:

deploy não segue.

# **81. Database constraints**

Sempre que possível, regras críticas também precisam ter apoio do banco.

Exemplo:

status válido;

FK;

unique public\_code;

release manifest existente;

option pertence ao item;

response pertence ao assessment.

Não confiar toda integridade apenas ao frontend.

# **82. Indexação**

O desenvolvedor deve prever índices em campos como:

assessment\_id;

participant\_id;

public\_code;

status;

item\_id;

scoring\_run\_id;

evidence\_run\_id;

created\_at;

foreign keys relevantes.

Não precisamos otimizar prematuramente, mas também não construir consultas obviamente ruins.

# **83. Performance**

Nossos targets continuam modestos e realistas.

Participante:

salvar resposta idealmente:

<500ms;

aceitável:

<1s em condições normais.

Tela:

sensação de resposta rápida.

Admin:

~2–3s para páginas mais pesadas inicialmente.

Score:

segundos, não minutos.

# **84. Escala inicial**

O sistema não precisa nascer para:

10 milhões de assessments/dia.

Arquitetura deve:

crescer de forma razoável.

Mas prioridade:

# **integridade > hyperscale.**

# **85. Backup**

Precisamos de:

**backup automático**

**retenção configurável**

**criptografia apropriada**

e, fundamentalmente:

# **RESTORE TEST.**

Backup que nunca foi restaurado:

não foi realmente testado.

# **86. RPO/RTO**

Para piloto, não precisamos de SLA bancário.

Mas o desenvolvedor deve propor:

**RPO**

quanto dado poderíamos perder em desastre;

**RTO**

quanto tempo para restaurar operação.

Depois comercialmente isso poderá evoluir.

# **87. Soft Delete**

Não utilizar indiscriminadamente:

is\_deleted=true

em tudo.

Precisamos distinguir:

**withdrawn metodológico**

**invalidated**

**revoked**

**retired**

**pedido jurídico de exclusão**

**registro de auditoria obrigatório.**

Esses são conceitos diferentes.

# **88. Direito de exclusão / privacidade**

A arquitetura deve suportar futuros workflows de privacidade.

Mas:

“DELETE participant CASCADE”

não pode ser a solução padrão.

Porque há:

pesquisa;

auditoria;

obrigações;

pseudonimização;

retenção

a serem consideradas juridicamente.

A política final depende de revisão de Privacy/Legal.

# **89. Retention**

Podemos prever campos como:

retention\_until

legal\_hold

privacy\_status

Mas os prazos não estão congelados.

Isso permanece Open Item jurídico.

# **90. Encryption**

Requisitos:

TLS em trânsito.

encryption at rest/backups conforme infraestrutura.

Para Identity Vault, podemos considerar proteção adicional quando tecnicamente adequada.

Detalhes criptográficos:

responsabilidade técnica especializada.

Não inventaremos algoritmo caseiro.

# **91. RBAC**

Role Based Access Control.

Permissões separadas.

Exemplos:

participant.respond\_assessment

research.read\_pseudonymized

research.write\_interview

methodology.review\_item

admin.manage\_users

identity.read

assessment.invalidate.

Assim:

role é conjunto de permissions.

Mais flexível que dezenas de if admin.

# **92. Identity permission especial**

Acesso a:

PARTICIPANT\_IDENTITY

deve poder ser separado de:

assessment.read.

Um pesquisador pode analisar:

MGH-O0-008

sem necessariamente saber:

quem é MGH-O0-008.

# **93. Export permissions**

Exportação de dados merece permissão própria.

Porque exportar:

100 assessments

é risco diferente de visualizar:

uma aplicação.

Registre exportações no Audit Log.

# **94. Research Export**

Idealmente permitir:

### **pseudonymized export**

padrão.

### **identified export**

somente para papel/permissão adequada e finalidade registrada.

# **95. Data lineage**

Precisamos conseguir navegar:

response

→ scoring run

→ derived score

→ evidence

→ UIG

→ synthesis

→ claim

→ action

→ report sentence

Essa é uma das características mais importantes de todo o sistema.

# **96. E também o caminho inverso**

Diante de uma frase futura:

“Preserve liberdade de método dentro de critérios claros.”

o metodologista deve conseguir descobrir:

Claim →

SIN →

UIGs →

Evidence →

Score →

Itens →

Responses.

Isso é:

# **TRACEABILITY CHAIN™.**

# **97. AI boundary**

Mesmo quando IA entrar:

não precisa estar dentro da zona de dados brutos.

Arquitetura:

RAW

✕

│

│ não vai para LLM livremente

▼

Claim Engine

↓

Approved Claims

↓

Approved Actions

↓

Constraints

↓

AI Language Layer

Isso reduz risco de interpretação não autorizada.

# **98. Object Storage**

Pode ser utilizado futuramente para:

relatórios PDF;

exports;

artefatos;

backups apropriados.

Mas não substituir banco relacional para:

responses;

scores;

evidence;

audit.

# **99. Event Bus futuro**

Não precisamos de Kafka ou infraestrutura semelhante agora.

Podemos utilizar eventos internos simples:

ASSESSMENT\_COMPLETED

SCORING\_COMPLETED

EVIDENCE\_COMPLETED

etc.

Se escala futura justificar:

separa-se.

Por enquanto:

simples e rastreável.

# **100. Bounded Modules iniciais**

Eu entregaria ao desenvolvedor estas fronteiras:

| **Módulo** | **Responsabilidade** |
| --- | --- |
| Identity & Access | autenticação, usuários, permissões |
| Participant Registry | participante e identidade |
| Instrument Registry | versões, cenários, itens, opções |
| Assessment Engine | estado e fluxo da aplicação |
| Response Engine | respostas, apresentações, revisões |
| Event Engine | eventos do assessment |
| Score Engine | cálculo determinístico |
| Research Module | O0, entrevistas, flags, hipóteses |
| Version & Audit | manifests, change log, auditoria |
| Export Module | exports controlados |
| Evidence Engine | futuro/experimental |
| Interpretation Engine | futuro |
| Claim/Action Engine | futuro |
| Report Engine | futuro |

Tudo pode residir inicialmente:

na mesma aplicação.

O que queremos são:

limites lógicos claros.

# **101. Dependências permitidas**

Exemplo:

Score Engine pode depender de:

Instrument Registry;

Response Engine.

Não deve depender de:

Report Engine.

Report pode depender de:

Claim/Action.

Não o contrário.

Isso evita circularidade arquitetural.

# **102. Pipeline de dependências**

Uma representação saudável:

Identity

│

Participant

│

Assessment ← Instrument

│

Response

│

Score

│

Evidence

│

Interpretation

│

Claim / Action

│

Report

Pesquisa observa várias camadas.

Audit observa todas.

# **103. Anti-pattern proibido**

Uma função gigante:

calculateProfileAndGenerateReport()

fazendo:

score;

interpretação;

IA;

PDF

tudo junto.

Isso tornaria impossível auditar e versionar corretamente.

# **104. Outro anti-pattern**

Salvar apenas:

final\_profile = "Dominante Visual"

e depois apagar/ignorar processo.

Completamente incompatível com MGH.

# **105. Outra proibição**

Alterar Score Engine porque:

“o relatório ficou estranho.”

Se relatório parece estranho:

investigamos:

Evidence;

UIG;

Claim;

Language.

Não corrigimos score para fazer o texto parecer melhor.

Cada camada tem responsabilidade própria.

# **106. Shadow Mode no Data Model**

Regras Candidate podem gerar:

candidate\_activation.

Mas:

official\_output=false.

Podemos registrar:

execution\_mode = SHADOW

Isso permitirá analisar regras sem expô-las ao participante.

# **107. Publication Registry**

No futuro, considero importante termos uma entidade conceitual para:

regra publicada.

Mas podemos simplificar inicialmente com as tabelas de versão específicas.

O requisito é:

toda versão em uso deve estar:

**publicada**

**imutável**

**compatível com manifesto.**

# **108. Compatibility Matrix**

O sistema deve rejeitar combinações proibidas.

Exemplo:

MGH-P1.0

SCORE-P4.7

sem compatibilidade declarada.

Resultado:

VERSION\_MISMATCH.

Não:

“vou tentar mesmo assim”.

# **109. COMPATIBILITY\_RULE**

Pode existir conceitualmente como:

component\_type

component\_version

compatible\_component\_type

compatible\_versions

status

Ou ser resolvido pelo Release Manifest.

O desenvolvedor pode escolher arquitetura.

O comportamento é obrigatório.

# **110. Config validation no boot/deploy**

Seria excelente se o sistema pudesse validar:

48 cenários?

24 PC?

8 PRC Forced?

4 independent groups?

12 DR?

IDs válidos?

Randomization DR = false?

Todos options com key?

Se versão publicada estiver inconsistente:

não permitir publicação/execução.

# **111. Instrument Validator**

Esse componente é valioso.

Antes de publicar um instrumento:

rodar checks.

Exemplo:

INSTRUMENT\_CONFIGURATION\_VALID

ou lista de erros.

Isso evita descobrir durante aplicação que:

cenário 37 não possui opção D.

# **112. Score Validator**

Da mesma forma:

todos itens P1.0 têm regra?

todos mappings estão completos?

somatórios esperados?

Golden Cases passam?

Então:

versão pode ser publicada.

# **113. Dados sintéticos**

Precisamos criar assessments sintéticos:

SYNTH-GOLD-001

etc.

Nunca usar dados reais de participante para:

testes automatizados.

Golden Cases são sintéticos.

# **114. Observabilidade**

Precisamos saber:

app está de pé?

DB acessível?

jobs funcionando?

erros aumentando?

save falhando?

score job parado?

Indicadores iniciais simples são suficientes.

# **115. Health endpoints**

Developer pode implementar:

liveness;

readiness;

job health

conforme tecnologia.

Não precisa sofisticar demais.

Mas precisamos conseguir detectar falha antes do participante.

# **116. Error tracking**

Recomendado:

ferramenta de error tracking estruturado.

Mas:

respeitando política de dados.

Não enviar resposta do participante inteira para serviço externo de logging apenas porque “é conveniente”.

# **117. PII redaction**

Antes de logs externos:

redigir:

nome;

e-mail;

token;

respostas quando desnecessárias.

# **118. Availability**

Meta inicial futura mencionada:

~99,5% em contexto comercial inicial.

Não é SLA contratual do piloto.

Para O0:

o foco é:

estabilidade suficiente e capacidade de recuperação.

# **119. Accessibility**

Embora não precisemos certificação completa no piloto:

arquitetura/UI deve permitir evolução para WCAG AA.

Desde agora:

contraste;

teclado;

labels;

mensagens de erro textuais;

não depender só de cor;

controles mobile adequados.

# **120. Internacionalização**

Conteúdo metodológico:

pt-BR no P1.0.

Mas idealmente textos de interface podem usar catálogo de tradução.

Importante:

traduzir UI no futuro é simples.

Traduzir instrumento:

NÃO é simples.

Qualquer tradução de itens exige:

adaptação metodológica e nova investigação.

# **121. Data Model — entidades essenciais para Fase A**

Se precisarmos reduzir o escopo inicial, estas são P0/P1:

| **Entidade** | **Fase A** |
| --- | --- |
| Participant | obrigatório |
| Participant Identity | obrigatório |
| Assessment | obrigatório |
| Professional Context | obrigatório |
| Consent | obrigatório |
| Release Manifest | obrigatório |
| Instrument Version | obrigatório |
| Scenario | obrigatório |
| Item | obrigatório |
| Item Text Version | obrigatório |
| Option | obrigatório |
| Option Presentation | obrigatório |
| Response | obrigatório |
| Response Event | obrigatório |
| SELF Response | obrigatório |
| Participant Feedback | obrigatório |
| Cognitive Interview | obrigatório |
| Cognitive Item Review | obrigatório |
| Audit Flag | obrigatório |
| Occurrence | obrigatório |
| Scoring Run | obrigatório |
| Derived Score | obrigatório |
| Hypothesis | obrigatório |
| Item Survival | obrigatório |
| Change Log | obrigatório |
| Gate Review | obrigatório |
| Audit Log | obrigatório |

# **122. Entidades que podem nascer depois**

Podem ser apenas previstas:

Evidence Run;

Evidence Result;

Interpretation Run;

UIG Activation;

Synthesis Activation;

Claim;

Recommendation;

Report;

Report Section.

Se o desenvolvedor quiser criar o schema desde a Fase A:

tudo bem.

Mas não quero pagar enorme complexidade agora apenas para preencher tabelas que ainda não serão utilizadas externamente.

# **123. Regra de economia arquitetural**

**Preparar para o futuro não significa construir o futuro inteiro agora.**

Excelente princípio para a contratação.

# **124. Diagrama simplificado de relações da Fase A**

****PARTICIPANT

├── PARTICIPANT\_IDENTITY

└── ASSESSMENT

├── PROFESSIONAL\_CONTEXT

├── ASSESSMENT\_CONSENT

├── OPTION\_PRESENTATION

├── RESPONSE

│ └── RESPONSE\_EVENT

├── SELF\_RESPONSE

├── PARTICIPANT\_FEEDBACK

├── COGNITIVE\_INTERVIEW

│ └── COGNITIVE\_ITEM\_REVIEW

├── AUDIT\_FLAG

├── OCCURRENCE

└── SCORING\_RUN

└── DERIVED\_SCORE

RELEASE\_MANIFEST

└── ASSESSMENT

INSTRUMENT\_VERSION

└── SCENARIO

└── ITEM

├── ITEM\_TEXT\_VERSION

└── OPTION

Esse já é suficiente para um arquiteto/backend começar a desenhar ERD real.

# **125. O que o desenvolvedor pode modificar**

Pode propor:

nomes técnicos internos;

normalização adicional;

tecnologia;

ORM;

framework;

mecanismo de fila;

infra cloud;

cache;

estratégia de indexes;

estrutura física do schema.

Desde que:

preserve a semântica definida.

# **126. O que não pode desaparecer numa “simplificação”**

Não aceitar argumento:

“Isso dá muito trabalho, então vamos salvar só resposta final.”

Não.

Também não:

“Não precisa Option Presentation.”

Precisa.

Não:

“Score antigo pode ser sobrescrito.”

Não.

Não:

“Nome pode ficar em todas as tabelas.”

Não é necessário.

# **127. Perguntas que eu faria ao desenvolvedor sobre arquitetura**

Aqui estão algumas que revelam bastante a qualidade técnica dele:

**Como você garantiria que versões publicadas do instrumento sejam imutáveis?**

**Como você modelaria Response versus Response Event?**

**Como garantiria que randomização seja reproduzível/auditável sem expor score target ao frontend?**

**Como reprocessar um assessment com novo algoritmo sem apagar resultados anteriores?**

**Como separaria identidade de dados metodológicos?**

**Como implementaria idempotência no submit e nos jobs de scoring?**

**Como garantiria que Golden Cases rodem automaticamente antes do deploy?**

**Como testaria restauração de backup?**

**Como impediria um admin comum de editar um instrumento já publicado?**

As respostas ajudarão muito na seleção.

# **128. Resposta ruim típica**

“A gente pode salvar tudo num JSON e depois tratar.”

Para dados periféricos:

pode ser útil.

Para toda a arquitetura central:

sinal de alerta.

Outra:

“É só guardar o resultado; se mudar depois recalcula.”

Pergunta:

recalcula a partir de quê, se você não preservou apresentação, eventos, versão e RAW?

# **129. Resposta boa típica**

Algo próximo de:

“Eu manteria eventos imutáveis, resultados versionados por run, manifesto de versão por assessment, migrations controladas, instrumento publicado imutável e uma camada separada para identity/PII.”

A tecnologia pode variar.

O raciocínio é o que importa.

# **130. Definition of Done deste documento**

Consideraremos Architecture/Data implementados adequadamente quando:

**relações essenciais estiverem documentadas**

**migrations versionadas**

**UUIDs usados corretamente**

**identity separada**

**instrument versions imutáveis**

**RAW preservado**

**Response Event funcional**

**Option Presentation preservado**

**Scoring Runs não sobrescritos**

**Release Manifest associado ao assessment**

**audit log presente**

**compatibilidade validada**

**backups implementados**

**restore testado**

**ambientes separados**

**Golden data sintético funcionando.**

# **DOCUMENTO 03 — CONCLUÍDO**

Agora nosso Developer Handoff já possui os três documentos que mais influenciam uma proposta técnica:

**01 — Executive Product Brief**

**02 — Functional Specification**

**03 — Architecture & Data Model**

A esta altura, um desenvolvedor competente já deve conseguir compreender **o tamanho real da Fase A e começar uma estimativa arquitetural**.

Mas ainda falta entregar aquilo que ele não pode interpretar por conta própria:

# **ETAPA 2.29D — MGH-P1.0 INSTRUMENT SPECIFICATION**

O próximo documento será o **contrato técnico do instrumento**:

**estrutura dos 48 cenários**

**56 respostas pontuáveis**

**ordem oficial**

**tipos de item**

**randomização**

**Relation Groups**

**SELF**

**metadados**

**instruções**

**comportamento de cada tipo de cenário**

**IDs legados TH**

**regras de publicação**

e a separação explícita entre:

**conteúdo metodológico imutável da versão**

e:

**apresentação visual que o desenvolvedor pode melhorar.**

Depois dele, ninguém poderá dizer:

“eu achei que podia embaralhar todas as perguntas”,

ou:

“eu achei que podia transformar PRC Independent numa pergunta única.”

É exatamente para essa **Etapa 2.29D** que seguimos agora.

Perfeito. Agora vamos congelar o **contrato técnico do instrumento que o participante realmente responderá**.

# **ETAPA 2.29D — MGH-P1.0 INSTRUMENT SPECIFICATION**

## **Documento 04 — Especificação Técnica do Instrumento**

**Versão do documento:** MGH-INST-SPEC-0.1
**Instrumento:** MGH-P1.0
**Banco de Itens:** BANK-0.2
**Master Specification:** MGH-MASTER-P1.0-RC1
**Status:** PILOT
**Uso:** Onda 0
**Validated:** false

A regra-mãe deste documento será:

**O instrumento é conteúdo metodológico versionado. A interface pode apresentá-lo; não pode reinterpretá-lo.**

# **1. Finalidade deste documento**

Este documento define para o desenvolvedor:

**o que deve ser apresentado;**

**em qual ordem;**

**quantas respostas devem existir;**

**o que pode randomizar;**

**o que não pode randomizar;**

**como cada tipo de cenário se comporta;**

**quais dados precisam ser registrados;**

**quais elementos são metodologicamente imutáveis dentro do P1.0.**

Ele não substitui o BANK-0.2.

O conteúdo textual completo e oficial de:

enunciados + alternativas + ratings

deverá acompanhar o handoff como **Anexo do Banco de Itens**.

O desenvolvedor jamais deverá reconstruir uma pergunta “a partir da ideia geral” apresentada neste documento.

# **2. Hierarquia das fontes**

Em caso de dúvida, a prioridade técnica será:

**Release Manifest**

↓

**Instrument Specification**

↓

**BANK-0.2 publicado**

↓

**Scoring Specification**

↓

**UI**

A interface nunca prevalece sobre o instrumento.

Se houver incompatibilidade entre duas fontes:

**falha de configuração.**

Não:

“o sistema escolhe uma e continua”.

# **3. Estrutura congelada do MGH-P1.0**

| **Elemento** | **Quantidade** |
| --- | --- |
| Cenários visíveis | **48** |
| PC forced-choice | **24** |
| PRC forced-choice | **8** |
| PRC independent groups | **4** |
| Ratings PRC independent | **12** |
| DR | **12** |
| Respostas pontuáveis totais | **56** |
| SELF pós-instrumento | **8** |
| Relation Groups | **6** |

Portanto:

**48 telas/cenários principais → 56 respostas pontuáveis.**

Os 8 SELF são posteriores e não entram nas 56.

# **4. Por que 48 cenários geram 56 respostas?**

Porque quatro cenários PRC Independent contêm:

**3 ratings independentes cada.**

Logo:

4 cenários × 3 = 12 respostas.

Matematicamente:

24 PC + 8 PRC Forced + 12 PRC Independent + 12 DR
= **56 respostas pontuáveis.**

# **5. Regra de progresso**

A barra de progresso utiliza:

completed\_scenarios / 48

Não:

scored\_responses / 56.

Exemplo:

o participante concluiu o cenário PRC Independent nº 7.

Ele avançou:

**1 cenário**

e não:

3 etapas.

# **6. Tipos oficiais de cenário**

O sistema deverá suportar pelo menos quatro tipos:

| **Tipo** | **Comportamento** |
| --- | --- |
| PC\_FORCED\_CHOICE | escolha única entre 4 alternativas |
| PRC\_FORCED\_CHOICE | escolha única entre 3 alternativas |
| PRC\_INDEPENDENT | 3 avaliações independentes de 1–5 |
| DR\_ORDINAL | escolha única entre 4 alternativas ordinais |

O frontend pode utilizar componentes visuais diferentes.

A semântica não muda.

# **7. Ordem oficial dos 48 cenários**

Esta ordem é parte integrante de MGH-P1.0.

| **#** | **Código** | **Família** | **Tipo** |
| --- | --- | --- | --- |
| 1 | PC-001 | PC | Forced |
| 2 | PRC-001 | PRC | Forced |
| 3 | TH-003 | DR | Ordinal |
| 4 | PC-009R | PC | Forced |
| 5 | TH-001 | DR | Ordinal |
| 6 | PC-021 | PC | Forced |
| 7 | PRC-004R | PRC | Independent |
| 8 | PC-014 | PC | Forced |
| 9 | PC-007 | PC | Forced |
| 10 | PRC-003 | PRC | Forced |
| 11 | TH-010 | DR | Ordinal |
| 12 | PC-035 | PC | Forced |
| 13 | TH-006 | DR | Ordinal |
| 14 | PC-018 | PC | Forced |
| 15 | PRC-012 | PRC | Forced |
| 16 | PC-019 | PC | Forced |
| 17 | PC-016 | PC | Forced |
| 18 | PRC-005 | PRC | Forced |
| 19 | TH-012 | DR | Ordinal |
| 20 | PC-010 | PC | Forced |
| 21 | TH-004R | DR | Ordinal |
| 22 | PC-028 | PC | Forced |
| 23 | PRC-011 | PRC | Forced |
| 24 | PC-012 | PC | Forced |
| 25 | PC-002 | PC | Forced |
| 26 | PRC-006R | PRC | Independent |
| 27 | TH-007 | DR | Ordinal |
| 28 | PC-020R | PC | Forced |
| 29 | TH-002 | DR | Ordinal |
| 30 | PC-023 | PC | Forced |
| 31 | PRC-002 | PRC | Forced |
| 32 | PC-033 | PC | Forced |
| 33 | PC-027 | PC | Forced |
| 34 | PRC-014I | PRC | Independent |
| 35 | TH-013 | DR | Ordinal |
| 36 | PC-036 | PC | Forced |
| 37 | TH-008R | DR | Ordinal |
| 38 | PC-015 | PC | Forced |
| 39 | PRC-009 | PRC | Forced |
| 40 | PC-008 | PC | Forced |
| 41 | PC-017 | PC | Forced |
| 42 | PRC-010I | PRC | Independent |
| 43 | TH-015 | DR | Ordinal |
| 44 | PC-029 | PC | Forced |
| 45 | TH-009R | DR | Ordinal |
| 46 | PC-005 | PC | Forced |
| 47 | PRC-015 | PRC | Forced |
| 48 | PC-011R | PC | Forced |

# **8. A ordem não randomiza**

Congelado:

**scenario\_order\_randomizable = false**

O participante não recebe:

PC-001 → PC-035 → PRC-009...

em uma sequência aleatória.

A ordem 1–48 é parte da versão.

Se quisermos outra ordem no futuro:

nova versão do instrumento.

# **9. Os 12 blocos invisíveis**

A arquitetura foi deliberadamente distribuída em:

**12 sequências internas de 4 cenários.**

O participante:

não vê blocos.

Não aparece:

“Bloco Comportamental 3”.

Não existe pausa revelando lente.

O objetivo é impedir que a estrutura metodológica fique evidente.

# **10. O frontend não deve identificar a lente**

Não enviar ou exibir desnecessariamente:

lens = PC

facet = AUTONOMY

score\_target = D

construct = PERSISTENCE

etc.

O participante recebe:

conteúdo necessário à resposta.

Não:

metadados de interpretação.

# **11. PC — conjunto oficial**

Os 24 itens P1.0 são:

PC-001
PC-002
PC-005
PC-007
PC-008
PC-009R
PC-010
PC-011R
PC-012
PC-014
PC-015
PC-016
PC-017
PC-018
PC-019
PC-020R
PC-021
PC-023
PC-027
PC-028
PC-029
PC-033
PC-035
PC-036.

Nenhum outro PC entra no P1.0.

# **12. Comportamento do PC**

Cada PC apresenta:

1 situação + 4 alternativas.

O participante deve escolher:

exatamente 1.

Não pode:

selecionar duas;

dar nota;

ordenar quatro;

deixar em branco e avançar.

# **13. Randomização PC**

Congelado:

**sim.**

As quatro alternativas podem ser apresentadas em ordem diferente.

Mas o sistema registra:

option\_id

e:

display\_position.

# **14. Nunca pontuar PC pela posição visual**

Proibido:

posição 1 = D

posição 2 = I

posição 3 = S

posição 4 = C

O score vem do:

canonical\_option\_id / score\_target.

Se a opção correspondente a D aparece em terceiro lugar:

continua:

D.

# **15. PC-035**

Permanece no P1.0 com foco em:

**I — Expressividade.**

Situação já congelada no Banco:

reunião sobre assunto conhecido.

Mapeamento semântico das alternativas:

A → D
B → I
C → S
D → C

O desenvolvedor não deverá reconstruir o texto com base nessa descrição.

O BANK-0.2 contém a redação oficial.

# **16. PC-036**

Permanece com foco em:

**C — Qualidade.**

Situação:

entrega importante utilizada como referência.

Mapeamento semântico:

A → D
B → I
C → S
D → C.

Novamente:

descrição técnica ≠ texto para interface.

# **17. Facet Signal**

Uma alternativa PC pode contribuir para:

dimensão principal

sem necessariamente gerar:

faceta específica.

Portanto:

facet\_signal é:

nullable.

Não preencher automaticamente:

D → qualquer faceta D;

I → qualquer faceta I.

Isso criaria evidência inexistente.

# **18. PRC Forced — conjunto oficial**

8 itens:

PRC-001

PRC-002

PRC-003

PRC-005

PRC-009

PRC-011

PRC-012

PRC-015.

Cada cenário:

3 alternativas.

Uma escolha.

# **19. Randomização PRC Forced**

Congelado:

**sim.**

V/A/C podem mudar de posição.

O participante não vê:

“Visual”

“Auditiva”

“Cinestésica”.

O sistema conhece o mapping.

# **20. PRC Independent — grupos oficiais**

Quatro:

PRC-004R

PRC-006R

PRC-010I

PRC-014I.

Cada cenário possui:

3 avaliações independentes.

Uma relacionada a V.

Uma a A.

Uma a C.

# **21. Escala PRC Independent**

Cada afirmação recebe:

rating de 1 a 5.

A semântica final dos rótulos da escala precisa ser exatamente a publicada no BANK-0.2.

A direção:

1 → 5

é fixa.

Não inverter visualmente.

# **22. Randomização PRC Independent**

Permitido:

randomizar a ordem dos três blocos V/A/C.

Não permitido:

inverter 1 e 5.

Não permitido:

transformar em ranking.

Não permitido:

obrigar que notas somem um valor.

São avaliações:

independentes.

A pessoa pode marcar:

5 / 5 / 5.

Isso é válido.

# **23. Um erro grave a evitar**

Não transformar PRC Independent em:

“Escolha qual dos três mais representa você.”

Isso faria dele:

forced-choice.

Seria outro instrumento.

# **24. DR — conjunto oficial**

Os 12 itens permanecem com IDs legados:

### **Velocidade**

TH-001
TH-006
TH-007

### **Impacto**

TH-004R
TH-008R
TH-009R

### **Persistência**

TH-002
TH-010
TH-015

### **Externalização**

TH-003
TH-012
TH-013

# **25. Por que ainda TH?**

Porque esses IDs já fazem parte da linhagem histórica do banco.

O construto passou a ser:

**DR™ — Dinâmica de Reação.**

Mas P1.0 conserva:

códigos legados TH.

Não renomear silenciosamente.

# **26. O sistema deve separar**

canonical\_item\_code = TH-003

de:

construct = DR.EXTERNALIZATION.

Isso resolve a questão elegantemente.

# **27. DR — comportamento**

Cada item:

situação + 4 alternativas ordinais.

Uma escolha.

# **28. Randomização DR**

Congelado:

# **NÃO.**

randomizable = false

A ordem das quatro alternativas faz parte da estrutura ordinal.

Se uma configuração publicada P1.0 trouxer:

DR randomizable=true

o Instrument Validator deve:

rejeitar.

# **29. Chaves DR**

### **Velocidade**

TH-001 / TH-006 / TH-007:

A=4
B=3
C=2
D=1

### **Impacto**

TH-004R / TH-008R / TH-009R:

A=4
B=3
C=2
D=1

### **Persistência**

TH-002 / TH-010 / TH-015:

A=1
B=2
C=3
D=4

### **Externalização**

TH-003 / TH-012 / TH-013:

A=4
B=3
C=2
D=1

Esta chave será formalizada também no Documento 05 — Scoring Specification.

# **30. Conteúdo DR que merece teste especial**

Particularmente:

TH-002, TH-010, TH-015

possuem direção de scoring oposta às três outras famílias.

Isso precisa de Golden Case específico.

Já temos:

Persistência D/D/D → 100.

# **31. Relation Groups**

Os seis pares oficiais do P1.0 são:

| **Grupo** | **Itens** | **Tema** |
| --- | --- | --- |
| RG-01 | PC-007 + PC-027 | autonomia |
| RG-02 | PC-001 + PC-023 | decisão sob incerteza |
| RG-03 | PC-016 + PC-033 | constância |
| RG-04 | PC-021 + PC-028 | critério/ambiguidade |
| RG-05 | TH-002 + TH-015 | persistência pós-conflito |
| RG-06 | TH-003 + TH-012 | externalização em contexto negativo |

Esses grupos:

não aparecem ao participante.

# **32. Relation Group não altera aplicação**

Não aproximar os pares visualmente de propósito.

Não avisar:

“Esta pergunta se parece com outra.”

Não calcular durante a aplicação:

“inconsistência detectada”.

A análise é posterior.

# **33. Relation Groups não geram índice de sinceridade**

Congelado:

não produzir:

honesty score;

lie score;

sincerity score;

consistency percentage

a partir desses pares no P1.0.

# **34. Instruções oficiais de abertura**

O texto metodológico congelado para a aplicação é:

**O Mapa de Governo Humano™ apresenta situações relacionadas à maneira como você costuma se comunicar, agir e reagir no ambiente profissional.**

**Não existem respostas certas ou erradas.**

**Responda pensando principalmente em como você costuma agir hoje, e não em como acredita que deveria agir.**

**Quando mais de uma alternativa parecer adequada, escolha aquela que mais frequentemente se aproxima do seu comportamento natural.**

**Algumas situações podem parecer semelhantes. Isso é intencional: contextos diferentes podem revelar respostas diferentes.**

**Responda com naturalidade. Não tente construir um perfil.**

**Este instrumento não avalia inteligência, caráter, competência profissional ou saúde mental.**

Alteração semântica desse texto:

Change Request metodológico.

# **35. O designer pode melhorar a apresentação**

Pode:

usar cards;

tipografia melhor;

espaçamento;

progress bar;

microinterações;

responsividade;

acessibilidade.

Não pode:

resumir a instrução;

destacar algumas palavras de forma a induzir resposta;

adicionar exemplo que revela a dimensão;

adicionar:

“Escolha rapidamente, sua primeira resposta é sempre a melhor.”

Essa instrução não foi autorizada.

# **36. Metadados pré-aplicação**

Precisamos registrar:

**cargo/função**

**área**

**tempo na função**

**lidera pessoas?**

**quantas?**, quando aplicável

**faixa etária opcional**, se permanecer na configuração publicada

**contexto profissional atual.**

Esses dados:

não entram automaticamente no Score Engine.

# **37. O contexto profissional não altera questões no P1.0**

P1.0 é:

padronizado.

Não haverá:

“é gestor → recebe pergunta A”

“não é gestor → pula pergunta B”.

Nada adaptativo nessa primeira versão.

# **38. MGH-P1.0 não é adaptive testing**

Congelado:

todos recebem os mesmos 48 cenários da versão.

A randomização permitida é apenas:

ordem de alternativas/blocos especificados.

Não:

seleção dinâmica de itens.

# **39. SELF pós-instrumento**

Depois do cenário 48:

não apresentar resultado.

Entramos nos 8 SELF.

Códigos:

SELF-01 a SELF-08.

Temas investigados:

| **Código** | **Referência de pesquisa** |
| --- | --- |
| SELF-01 | decidir apesar de informação incompleta |
| SELF-02 | espaço para definir execução |
| SELF-03 | importância de critérios claros |
| SELF-04 | perceptibilidade externa de impacto |
| SELF-05 | permanência de situações difíceis |
| SELF-06 | apoio da organização visual |
| SELF-07 | diálogo ajudando a organizar entendimento |
| SELF-08 | aplicação concreta ajudando a compreender |

Importante:

esta tabela descreve finalidade metodológica.

A interface utilizará **a redação oficial publicada no banco**, não paráfrases desta especificação.

# **40. Escala SELF**

1–5.

Todos os oito são necessários para conclusão do P1.0, salvo futura alteração versionada.

# **41. SELF não entra no score**

Congelado:

SELF → Research Layer

Não:

SELF → Main Score

Nem indiretamente.

# **42. SELF pode ser utilizado em hipóteses de pesquisa**

Exemplos já previstos:

PRC.V Independent ↔ SELF-06

PRC.A ↔ SELF-07

PRC.C ↔ SELF-08

autonomia ↔ SELF-02

critério ↔ SELF-03

Externalização ↔ SELF-04

Persistência ↔ SELF-05

Decision Speed ↔ SELF-01.

Mas isso ocorre:

depois.

Não durante scoring.

# **43. Feedback pós-teste**

Depois do SELF:

coletar informações sobre:

**dificuldade para escolher**

**ausência de alternativa adequada**

**item confuso**

**percepção de repetição**

**tentativa de escolher resposta profissionalmente desejável.**

Nada disso:

altera automaticamente score.

# **44. Nenhum “detector de mentira”**

Mesmo se participante disser:

“Em alguns momentos tentei escolher a resposta que parecia melhor profissionalmente.”

Isso gera:

dado de pesquisa / possível flag.

Não:

assessment automaticamente inválido.

A decisão metodológica acontece depois.

# **45. Revisão de respostas**

Antes do submit final:

o participante pode voltar e mudar respostas.

Se houver tela de revisão:

não mostrar resumo semântico.

Apenas algo como:

“Todas as situações foram respondidas.”

ou:

“Faltam 2 cenários.”

# **46. Nunca mostrar padrão de resposta antes do submit**

Proibido:

“Você selecionou muitas alternativas do mesmo tipo.”

“Revise a pergunta 17.”

“Seu resultado está muito concentrado.”

Isso contaminaria o instrumento.

# **47. Submissão final**

Backend valida:

**48/48 cenários**

**56/56 respostas pontuáveis**

**8/8 SELF**

**feedback obrigatório**

**consentimento**

**contexto profissional.**

Se válido:

COMPLETED.

# **48. Imutabilidade pós-submit**

Após COMPLETED:

nenhuma resposta muda.

Mesmo administrador:

não deve ter “editar resposta”.

Se houve erro:

ocorrência / invalidation / procedure.

# **49. Reabertura excepcional**

Eu não criaria botão comum:

“Reabrir assessment”.

Caso futuro exija isso:

precisará de regra formal.

Para P1.0:

não previsto.

# **50. Presentation Instance**

Para cada item randomizável, o sistema deve preservar:

exatamente a ordem que a pessoa recebeu.

Isso vale mesmo se:

fechar navegador;

voltar depois;

abrir novamente.

# **51. Randomização não ocorre novamente no resume**

Se a primeira apresentação foi:

C – A – D – B,

o participante continua vendo:

C – A – D – B.

Não:

B – C – A – D.

# **52. Randomização idealmente determinada pelo servidor**

Servidor:

seleciona ordem;

registra;

retorna para frontend.

Frontend:

renderiza.

Isso também facilita testes e segurança.

# **53. O banco não deve salvar apenas “A”**

Imagine PC com alternativas randomizadas.

Salvar:

“A”

é insuficiente.

Precisamos salvar:

option\_id.

Display A/B/C/D, se existir, é apenas apresentação.

# **54. Códigos são opacos para a UI**

Sufixos:

R

I

ou outros

não devem produzir comportamento automaticamente apenas pelo nome.

Exemplo:

não escrever código:

if item\_code.endswith("R"):

reverse\_score()

Isso seria frágil.

As regras vêm da configuração publicada.

Muito importante.

# **55. Banco de itens não deve depender de convenção de nome**

TH-004R

não pontua de determinada forma porque contém:

“R”.

Pontua assim porque:

sua scoring\_rule\_version determina isso.

# **56. Publication Validator**

Antes de MGH-P1.0 ser liberado, o Instrument Validator deve confirmar:

**48 cenários**

**números 1–48 sem duplicação**

**24 PC**

**8 PRC forced**

**4 PRC independent**

**12 ratings independentes**

**12 DR**

**todos os itens existentes**

**todas opções publicadas**

**DR não randomizável**

**PC randomizável conforme regra**

**PRC forced randomizável**

**scale direction válida**

**56 respostas pontuáveis**

**8 SELF existentes**

**6 Relation Groups válidos.**

# **57. Configuração inválida não publica**

Exemplo:

faltou TH-013.

Resultado:

INSTRUMENT\_CONFIGURATION\_ERROR.

Não liberar:

“porque são só 47 e depois corrigimos.”

# **58. O instrumento e scoring são componentes separados**

Isso é fundamental.

Instrumento responde:

o que é apresentado.

Scoring responde:

como respostas viram números.

Por isso:

MGH-P1.0

e:

SCORE-P1.0

são versões diferentes.

Mesmo que inicialmente andem juntas.

# **59. Instrument Version não deve carregar interpretação**

O item não deve conter lógica como:

“se respondeu B, diga que gosta de autonomia.”

No máximo:

score mapping.

A interpretação pertence a outra camada.

# **60. Conteúdo metodológico protegido de edição casual**

Não precisamos transformar o sistema num cofre impossível de administrar.

Mas precisamos impedir:

admin comum editar enunciado publicado.

Papel apropriado + workflow de versão.

# **61. Estado do item**

Devemos suportar pelo menos:

DRAFT

CANDIDATE

PILOT

APPROVED

DEPRECATED

RETIRED.

Mas apenas itens compatíveis e publicados para P1.0 entram naquela versão.

# **62. Um item pode existir no banco e não estar no instrumento**

Muito importante.

O banco candidato possui mais itens do que P1.0.

Portanto:

ITEM exists

não significa:

ITEM belongs to MGH-P1.0.

A relação precisa ser explícita.

# **63. Scenario Membership**

Conceitualmente:

INSTRUMENT\_VERSION

↓

SCENARIO

↓

ITEM

Assim sabemos:

qual subconjunto foi publicado.

# **64. O BANK-0.2 não é o MGH-P1.0**

Distinção:

**BANK-0.2**

= universo versionado de itens disponível naquele estágio.

**MGH-P1.0**

= seleção e ordem publicada para o piloto.

Muito importante para o desenvolvedor.

# **65. Conteúdo visual neutro**

No P1.0 eu evitaria:

ícones sugerindo “força”;

cores associadas a D/I/S/C;

imagens de olho/orelha/mão para PRC;

termômetros emocionais para DR.

Isso poderia revelar o construto ou enviesar resposta.

A experiência deve ser:

visualmente elegante, mas semanticamente neutra.

# **66. Cores não podem sugerir alternativa “boa”**

Todas as alternativas precisam ter:

peso visual equivalente.

Não:

opção verde;

opção vermelha.

Não:

estrela na primeira opção.

# **67. Mobile**

Alternativas precisam ser inteiramente legíveis no celular.

Evitar:

tabelas apertadas.

Preferir:

cards/botões de seleção.

Mas sem transformar cada alternativa em CTA com força visual diferente.

# **68. Acessibilidade**

Cada opção precisa possuir:

label acessível;

estado selecionado claro;

navegação por teclado;

foco;

mensagem de erro textual.

Não depender apenas de:

cor.

# **69. Tempo não deve ser exibido ao participante**

Não precisamos de:

cronômetro;

countdown;

“você levou 38 segundos”.

O timing é:

pesquisa invisível.

Mostrar tempo poderia alterar comportamento.

# **70. Não estimular velocidade artificial**

Não usar copy:

“Responda rápido!”

“Não pense muito!”

“Sua primeira impressão é sempre correta!”

Essas afirmações não fazem parte do instrumento.

# **71. Também não estimular análise excessiva**

Podemos manter interface simples.

Se pessoa demorar:

não mostrar “Você está pensando demais.”

O sistema observa.

Não interfere.

# **72. Interrupção**

Se conexão cair:

respostas persistidas ficam.

Ao retornar:

resume.

Não começar tudo novamente.

# **73. Duas sessões simultâneas**

Quando possível:

prevenir.

Não queremos:

celular no cenário 20;

desktop no cenário 11;

ambos sobrescrevendo.

# **74. Eventos invisíveis**

Além da resposta, podemos registrar:

SCENARIO\_OPENED

FIRST\_SELECTION

SELECTION\_CHANGED

BACK\_NAVIGATION

RESUME

SUBMIT.

Mas eventos de pesquisa precisam ser:

úteis.

Não transformar o produto em captura invasiva de cada movimento do mouse.

# **75. Não fazer biometria comportamental**

P1.0 não precisa registrar:

trajetória do cursor;

velocidade de digitação;

pressão do toque;

fingerprinting avançado.

Isso não é necessário para nossas hipóteses.

# **76. Configuração SELF e Feedback também deve ser versionada**

Se mudarmos pergunta de feedback:

precisamos saber:

quem respondeu qual versão.

Mesmo que não afete scoring.

Pesquisa também exige rastreabilidade.

# **77. Algoritmo não deve inferir ausência de resposta**

Se opção não foi marcada:

missing.

Não:

assumir resposta neutra.

Não:

preencher automaticamente.

# **78. PRC Independent incompleto**

Exemplo:

V=5

A=4

C=missing.

O cenário:

incompleto.

Não calcular média parcial como resultado válido do assessment concluído.

# **79. Final Submit é a barreira definitiva**

Antes:

revisão permitida.

Depois:

dados congelados.

Isso cria uma fronteira clara de pesquisa.

# **80. Contrato entre Instrument Engine e Score Engine**

Instrument Engine entrega ao Score Engine:

assessment;

instrument\_version;

responses canônicas;

item IDs;

option IDs;

ratings;

presentation metadata quando necessário.

Score Engine:

não consulta texto da pergunta para descobrir o que fazer.

Ele utiliza:

configuração estruturada.

# **81. Nunca fazer scoring por NLP**

Proibido:

IA lê a alternativa e decide se ela parece D.

A chave é:

determinística.

Isso vale inclusive se futuramente traduzirmos.

# **82. Testes de instrumento**

Precisamos de testes automáticos como:

**P1.0 contém exatamente 48 cenários.**

**Scenario 1 = PC-001.**

**Scenario 48 = PC-011R.**

**DR options não randomizam.**

**PC randomiza sem mudar option\_id.**

**PRC Independent exige três ratings.**

**Resume preserva presentation order.**

**SELF não aparece antes do cenário 48.**

# **83. Teste de exposição**

Frontend público nunca deve receber campos como:

score\_target

facet\_signal

evidence\_code

relation\_group

quando desnecessários.

Isso integra:

Security + Instrument Spec.

# **84. Teste de integridade da versão**

Se assessment foi criado com:

MGH-P1.0

e alguém publica:

MGH-P1.1

o assessment antigo continua:

P1.0.

Nunca migra automaticamente.

# **85. Assessment iniciado congela seu manifesto**

Não queremos:

participante responde cenários 1–20 com versão A;

sistema atualiza;

21–48 com versão B.

O Release Manifest acompanha toda aquela aplicação.

# **86. Mudança durante O0**

Se precisarmos modificar item:

não editamos P1.0.

Criamos, conforme gravidade:

P1.1;

ou wave revisada.

Participantes anteriores:

permanecem na versão antiga.

# **87. O que é metodologicamente imutável no P1.0**

Congelado:

**IDs**

**seleção de itens**

**ordem 1–48**

**textos publicados**

**alternativas**

**tipo de cenário**

**randomization policy**

**escala**

**requiredness**

**Relation Groups**

**SELF versionado**

**instruções.**

# **88. O que o designer/desenvolvedor pode alterar sem nova versão metodológica**

Desde que significado não mude:

**tipografia**

**spacing**

**layout**

**responsividade**

**animações discretas**

**componentes visuais**

**acessibilidade**

**posição visual de botões de navegação**

**copy puramente operacional**, como mensagens de save/erro aprovadas.

# **89. Zona cinzenta**

Alterações como:

destacar palavras específicas;

inserir emojis;

transformar alternativa em imagem;

adicionar exemplos;

abreviar enunciado

podem parecer visuais, mas podem alterar interpretação.

Logo:

revisão metodológica obrigatória.

# **90. Definition of Done — Instrument P1.0**

O desenvolvedor só pode declarar MGH-P1.0 corretamente implementado quando:

* 48 cenários corretos;
* ordem correta;
* 56 respostas pontuáveis;
* 24 PC;
* 8 PRC Forced;
* 4 grupos PRC Independent;
* 12 ratings independentes;
* 12 DR;
* randomização conforme política;
* DR não randomiza;
* Option Presentation persistida;
* resume preserva apresentação;
* SELF 8/8;
* feedback pós-teste;
* instruções corretas;
* nenhum score target exposto;
* itens publicados imutáveis;
* versão associada ao Release Manifest;
* Instrument Validator passa;
* Golden Cases relacionados ao instrumento passam.

# **91. Status deste documento**

Com isso:

# **DOCUMENTO 04 — MGH-P1.0 INSTRUMENT SPECIFICATION — DRAFT 0.1 CONCLUÍDO**

O conteúdo integral dos 48 cenários e suas alternativas seguirá como **anexo canônico do BANK-0.2** no pacote final. Essa separação é importante: o documento técnico explica **como o instrumento funciona**, enquanto o Banco de Itens contém **exatamente o que deve ser apresentado**.

Agora temos:

**01 — Executive Product Brief**

**02 — Functional Specification**

**03 — Architecture & Data Model**

**04 — Instrument Specification**

E chegamos ao documento em que não pode existir praticamente nenhuma ambiguidade matemática:

