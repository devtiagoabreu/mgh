---
name: 09-api-seguranca-e-golden-cases
description: Etapas 2.20 a 2.22: API, NFR, segurança, Golden Cases e testes.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 14760-19073
---

# Api, Segurança E Golden Cases

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.20 — ESPECIFICAÇÃO DA API E DOS MÓDULOS DO SISTEMA**

O próximo passo que eu recomendo é começarmos a fechar a ponte técnica.

Não entraremos ainda em uma linguagem de programação específica. Vamos definir **os módulos e contratos do sistema**:

criar aplicação;

obter cenário;

registrar resposta;

alterar resposta;

registrar evento;

finalizar assessment;

executar scoring;

gerar evidências;

executar UIGs;

resolver colisões;

gerar claims;

registrar interpretação.

Também definiremos o que cada módulo **pode ler, o que pode escrever e o que jamais pode alterar**.

Quando terminarmos essa etapa, teremos algo muito próximo de uma **especificação técnica de backend** pronta para ser entregue ao desenvolvedor.

Perfeito. Agora entramos na **Etapa 2.20 — Especificação da API e dos Módulos do Sistema MGH™**.

Aqui começamos a falar uma linguagem que qualquer desenvolvedor backend experiente entenderá. Ainda não estamos escolhendo Node, Python, Supabase, AWS ou qualquer stack específica. Estamos definindo **contratos de funcionamento**.

A regra central desta etapa será:

**Cada módulo conhece apenas aquilo que precisa conhecer e possui autoridade apenas sobre aquilo que deve modificar.**

Isso reduz erros e impede, por exemplo, que o módulo responsável pelo relatório altere respostas originais.

# **ETAPA 2.20 — BACKEND & API SPECIFICATION**

### **MGH™ — TECH-P1.0**

## **Visão geral da arquitetura**

O backend do MGH será dividido conceitualmente nestes módulos:

| **Módulo** | **Responsabilidade** |
| --- | --- |
| **Identity & Access** | usuários, pesquisadores e permissões |
| **Participant Registry** | participante pseudonimizado e identidade protegida |
| **Instrument Registry** | versões, cenários, itens e alternativas |
| **Assessment Engine** | ciclo de vida da aplicação |
| **Response Engine** | respostas RAW e revisões |
| **Event Engine** | eventos, tempos e audit trail |
| **Score Engine** | cálculo PRC/PC/DR |
| **Evidence Engine** | transforma scores em evidências |
| **Interpretation Engine** | UIGs, bloqueios e precedências |
| **Collision & Synthesis Engine** | colisões e sínteses |
| **Claim Engine** | conclusões autorizadas |
| **Language/Report Engine** | redação e composição do relatório |
| **Research Module** | entrevistas, flags, hipóteses, survival e Gate |
| **Audit & Version Module** | mudanças, versões e rastreabilidade |

Fisicamente, alguns desses módulos podem inicialmente viver dentro do mesmo backend.

Mas conceitualmente **não serão misturados**.

# **1. REGRA DE OURO DA API**

A API pública nunca deverá permitir algo genérico como:

POST /assessment/update

{

"whatever": "whatever"

}

Isso dá poder demais ao cliente.

Preferimos operações específicas:

POST /assessments/{id}/responses

POST /assessments/{id}/submit

POST /assessments/{id}/consent

Cada endpoint conhece exatamente:

quem pode chamar;
em qual estado;
quais campos podem mudar;
o que precisa registrar como evento.

# **2. CICLO DE VIDA DO ASSESSMENT**

Estados oficiais:

CREATED

STARTED

IN\_PROGRESS

COMPLETED

ABANDONED

WITHDRAWN

INVALIDATED

E não permitiremos transições arbitrárias.

Matriz principal:

| **Estado atual** | **Próximo estado permitido** |
| --- | --- |
| CREATED | STARTED, WITHDRAWN |
| STARTED | IN\_PROGRESS, ABANDONED, WITHDRAWN |
| IN\_PROGRESS | COMPLETED, ABANDONED, WITHDRAWN |
| COMPLETED | INVALIDATED, WITHDRAWN |
| ABANDONED | IN\_PROGRESS\*, WITHDRAWN |
| INVALIDATED | WITHDRAWN |
| WITHDRAWN | nenhum fluxo normal |

\* reabertura somente por ação administrativa autorizada e auditada.

O usuário não pode simplesmente enviar:

"status": "COMPLETED"

A conclusão ocorre através de uma ação específica que valida todos os pré-requisitos.

# **3. PARTICIPANT API**

### **Criar participante**

****POST /admin/participants

Entrada conceitual:

full\_name

email?

phone?

pilot\_wave

creator\_participant

O backend:

gera UUID;

gera código humano MGH-O0-XXX;

armazena identidade em área protegida;

cria registro pseudonimizado;

pode opcionalmente criar Assessment.

Resposta para admin:

participant\_id

public\_code

assessment\_id

secure\_access\_link

O endpoint nunca devolve score ou interpretação.

# **4. Criar aplicação**

****POST /admin/participants/{participant\_id}/assessments

Entrada:

instrument\_version = MGH-P1.0

pilot\_wave = O0

application\_mode = SELF

O backend busca automaticamente:

item\_bank\_version

scoring\_version

consent\_version

compatíveis com aquele instrumento.

Isso é importante.

O admin **não deve montar manualmente combinações incompatíveis**.

# **5. Obter aplicação pelo link do participante**

****GET /public/assessments/{access\_token}

Retorna somente aquilo que o participante precisa:

public\_code

status

consent\_required

current\_scenario

progress

instrument\_display\_name

Nunca retorna:

score\_target

facet

dimension

D/I/S/C

PRC classification

DR axis mapping

UIG

scoring\_key

A chave psicométrica não vai para o frontend.

# **6. Instrument Registry**

Esse módulo guarda a verdade sobre:

qual cenário pertence a qual versão.

Endpoint administrativo:

GET /admin/instruments/MGH-P1.0

Pode retornar:

instrument metadata

48 scenarios

item versions

option versions

randomization rules

progress weights

relation groups

Mas para o participante:

GET /public/assessments/{token}/scenario/{number}

retorna apenas apresentação.

Exemplo conceitual:

scenario\_id

progress

stem

response\_format

options[]

As opções podem vir randomizadas.

# **7. Randomização precisa acontecer no servidor**

Essa decisão é importante.

O frontend não deveria receber:

A = D

B = I

C = S

D = C

e depois embaralhar.

Melhor:

backend monta a apresentação;

registra OPTION\_PRESENTATION;

devolve apenas:

option\_id

display\_text

display\_position

Assim sabemos exatamente **o que a pessoa viu**.

E a chave fica protegida no servidor.

# **8. Registro de resposta**

Operação:

PUT /public/assessments/{token}/scenarios/{scenario\_id}/responses

Uso de PUT faz sentido conceitualmente porque representa o estado final atual da resposta daquele item, enquanto o histórico completo continua sendo registrado em RESPONSE\_EVENT.

Entrada PC:

item\_id

selected\_option\_id

Entrada PRC independente:

responses:

PRC-004R-V = 5

PRC-004R-A = 4

PRC-004R-C = 3

O frontend **não envia score**.

Nunca:

"PC.D": +1

Quem sabe a chave é o servidor.

# **9. O backend valida a resposta**

Ao receber:

PC-007 → option XYZ

ele verifica:

a aplicação existe?

está aberta?

PC-007 pertence ao instrumento desta aplicação?

aquela opção pertence à versão correta do item?

a opção foi efetivamente apresentada a essa pessoa?

o cenário já foi submetido?

alteração ainda é permitida?

Se qualquer condição falhar:

a resposta não entra no RAW como válida.

# **10. Primeiro clique e resposta final**

Quando a pessoa seleciona pela primeira vez:

first\_value

é preservado.

Se depois muda:

final\_value

muda.

E:

revision\_count++.

Além disso:

RESPONSE\_EVENT

registra toda transição.

Isso significa que RESPONSE guarda o estado consolidado.

RESPONSE\_EVENT guarda a história.

# **11. Eventos comportamentais da aplicação**

Endpoint lógico:

POST /public/assessments/{token}/events

Tipos permitidos:

SCENARIO\_VIEWED

OPTION\_SELECTED

OPTION\_CHANGED

SCENARIO\_SUBMITTED

WINDOW\_BLUR

WINDOW\_FOCUS

REVIEW\_STARTED

REVIEW\_ENDED

Mas cuidado:

não queremos transformar o MGH num sistema invasivo de rastreamento.

Registramos apenas aquilo que possui **justificativa metodológica clara**.

Nada de:

mouse movement;

keystroke dynamics;

device fingerprinting para inferir comportamento;

câmera;

microfone.

# **12. Idempotency Key**

Para operações críticas:

submit answer

finish assessment

create participant

run scoring

a API deverá aceitar uma:

idempotency\_key

Se a mesma requisição chegar duas vezes, o sistema reconhece que já foi executada.

Exemplo:

internet oscilou.

Frontend reenviou.

Resultado:

**uma resposta**, não duas.

# **13. Finalização da aplicação**

Endpoint:

POST /public/assessments/{token}/submit

O backend verifica obrigatoriamente:

**consentimento válido**

**contexto obrigatório preenchido**

**48 cenários concluídos**

**56 respostas pontuáveis válidas**

**8 SELF respondidas**

**feedback obrigatório concluído**

Se alguma coisa faltar:

ASSESSMENT\_NOT\_READY

retorna quais seções estão incompletas.

Só depois:

status = COMPLETED

submitted\_at = UTC

E as respostas tornam-se bloqueadas.

# **14. Nenhuma edição direta depois de COMPLETED**

Se algo precisar ser corrigido administrativamente, não teremos:

Edit answer.

Teremos processos separados.

Por exemplo:

**invalidar a aplicação**

ou eventualmente:

**criar nova aplicação**.

Isso mantém o RAW confiável.

# **15. Score Engine**

Agora entramos num módulo crítico.

Endpoint interno:

POST /internal/assessments/{assessment\_id}/score

Não é público.

Recebe:

assessment\_id

scoring\_version

O Score Engine:

carrega RAW final;

carrega chave correspondente;

valida integridade;

calcula métricas;

cria SCORING\_RUN;

grava DERIVED\_SCORE.

Ele **não altera RESPONSE**.

# **16. Score Engine não conhece UIG**

Isso precisa estar claro para o desenvolvedor.

Ele sabe calcular:

PC.D.raw

PC.I.raw

PC.S.raw

PC.C.raw

PC.GAP12

PC.ENTROPY

PRC.V.FORCED

PRC.A.FORCED

PRC.C.FORCED

PRC.V.INDEPENDENT

...

DR.SPEED

DR.IMPACT

DR.PERSISTENCE

DR.EXTERNALIZATION

E termina.

Não pode produzir:

“essa pessoa prefere autonomia.”

Essa frase pertence a outro módulo.

# **17. Scoring Run imutável**

Se hoje rodarmos:

SCORE-P1.0

e amanhã criarmos:

SCORE-P1.1

não atualizamos o run anterior.

Criamos:

SCORING\_RUN #2

supersedes = #1

Os dois continuam disponíveis.

# **18. Evidence Engine**

Endpoint interno:

POST /internal/scoring-runs/{run\_id}/evidence

Recebe scores.

Consulta:

Evidence Dictionary version.

Produz:

PC.D = RELEVANT

PC.D.AUTONOMY = CONSISTENT

DR.EXTERNALIZATION = LOW

...

se as regras daquela versão permitirem.

Na fase piloto, algumas evidências poderão continuar:

UNCLASSIFIED

porque ainda não temos cortes aprovados.

Isso não é erro.

# **19. Evidence Engine conhece linhagem**

Cada evidência precisa carregar:

source\_metrics

source\_items

independence\_groups

overlap\_information

Assim o próximo módulo sabe que:

PC.D

e

PC.D.AUTONOMY

podem compartilhar origem.

Logo, não contam automaticamente como duas evidências independentes.

# **20. Interpretation Engine**

Endpoint interno:

POST /internal/evidence-runs/{run\_id}/interpret

O fluxo interno será:

load evidence

↓

find eligible UIGs

↓

test required conditions

↓

apply strengthening

↓

apply weakening

↓

apply blocking

↓

apply precedence

↓

register candidate activations

Saída:

UIG\_ACTIVATION.

# **21. Importante: uma UIG bloqueada continua registrada**

Exemplo:

UIG-CON-001

status = BLOCKED

reason = CONTEXTUAL\_CONTRADICTION

Não desaparece.

Isso é fundamental para auditabilidade.

# **22. Collision Resolver**

Depois:

POST /internal/interpretation-runs/{id}/resolve

Detecta:

**C1 complementar**

**C2 tensão produtiva**

**C3 contradição contextual**

**C4 contradição lógica**

E aplica regras como:

SIN-DEL-001.

# **23. Resultado de uma colisão**

Exemplo:

ativadas:

UIG-DEL-001

UIG-DEL-002

Resolver encontra:

SIN-DEL-001

Então:

UIG-DEL-001

status = SUPPRESSED\_BY\_SYNTHESIS

UIG-DEL-002

status = SUPPRESSED\_BY\_SYNTHESIS

SIN-DEL-001

status = ACTIVATED

As evidências permanecem.

Apenas evitamos duas mensagens isoladas.

# **24. Semantic Compression**

O próximo passo pode ser parte do Synthesis Engine:

semantic\_family

Exemplo:

três interpretações diferentes pertencem a:

FEEDBACK\_OBJECTIVITY

Em vez de produzir três recomendações:

o sistema consolida uma.

Isso pode ocorrer deterministicamente antes da IA.

# **25. Claim Engine**

Aqui considero uma das partes mais importantes.

Entrada:

interpretações já resolvidas.

Saída:

claim\_code

evidence\_level

domain

allowed\_language\_strength

source\_trace

Exemplo:

claim\_code:

DELEGATION\_AUTONOMY\_WITH\_CRITERIA

evidence\_level:

E2

Ainda sem escrever frase.

# **26. Lista de claims fechada**

Nenhum modelo generativo poderá inventar:

claim\_code = NATURAL\_BORN\_LEADER

porque não existe.

O catálogo possui somente claims previamente aprovados.

Se não existe:

**não pode ser dito.**

Esse é um princípio fortíssimo do MGH.

# **27. Language Engine**

Somente agora chegamos à redação.

Entrada:

claim\_code

evidence\_level

audience

output\_type

approved\_facts

forbidden\_claims

tone

language

Saída:

texto.

Exemplo:

E1:

“As respostas sugerem que pode ser útil...”

E3:

“Este padrão apareceu de forma consistente nas situações avaliadas...”

A intensidade textual é controlada.

# **28. IA será opcional**

Quero congelar uma decisão estratégica:

**O MGH deverá conseguir produzir relatório funcional mesmo sem IA generativa.**

Teremos templates determinísticos.

Exemplo:

TMPL-DEL-014-PTBR

A IA poderá:

melhorar fluidez;

reduzir repetição;

adaptar tom;

costurar parágrafos.

Mas se a API de IA cair:

o MGH continua funcionando.

Isso evita transformar nosso produto em dependência completa de um terceiro.

# **29. A IA nunca recebe todo o RAW se não precisar**

Idealmente ela recebe algo como:

{

"claim": "DELEGATION\_AUTONOMY\_WITH\_CRITERIA",

"evidence\_level": "E2",

"approved\_points": [...],

"forbidden\_points": [...]

}

Não:

as 56 respostas completas + “analise essa pessoa”.

Isso é coerente com toda nossa arquitetura.

# **30. Report Composer**

Endpoint:

POST /internal/interpretation-runs/{id}/report

Com público:

SELF

MANAGER

TECHNICAL

Futuramente:

RELATION

TEAM

O mesmo assessment poderá gerar diferentes relatórios porque o **conteúdo autorizado é o mesmo**, mas a linguagem e finalidade mudam.

# **31. Research API**

Precisamos também especificar o lado da Onda 0.

Principais contratos:

POST /admin/assessments/{id}/cognitive-interviews

POST /admin/cognitive-interviews/{id}/item-reviews

POST /admin/item-reviews/{id}/flags

POST /admin/assessments/{id}/occurrences

PATCH /admin/item-survival/{item\_id}

POST /admin/change-proposals

POST /admin/gate-reviews

Mas as operações que alteram metodologia precisam exigir permissões mais altas.

# **32. Change Proposal ≠ Change**

Um pesquisador pode registrar:

“PC-014 deveria ser reescrito.”

Mas isso não altera o instrumento.

Fluxo:

PROPOSED

↓

UNDER\_REVIEW

↓

APPROVED / REJECTED

↓

NEW\_VERSION\_CREATED

Ótima proteção de processo.

# **33. Hypothesis API**

O endpoint não terá:

PATCH /hypothesis/{id}/statement

depois que a onda começou.

Permitirá apenas:

POST /hypothesis/{id}/analysis

POST /hypothesis/{id}/conclusion

O texto original continua imutável.

# **34. Audit API**

Toda ação administrativa sensível gera:

ADMIN\_AUDIT\_EVENT

Campos:

actor

action

object\_type

object\_id

before\_state

after\_state

timestamp

reason

Especialmente:

invalidar aplicação;

aprovar mudança;

criar nova versão;

executar novo scoring;

alterar Gate;

acessar identidade protegida.

# **35. Autorização por objeto**

Não basta:

“é admin.”

Futuramente poderemos ter organizações.

Então já vale pensar em permissões conceitualmente:

assessment:read

assessment:create

identity:read

research:write

methodology:write

instrument:publish

scoring:execute

gate:approve

Isso será melhor que um booleano:

is\_admin = true.

# **36. API pública e API interna devem ser separadas**

### **PUBLIC/PARTICIPANT API**

Pode:

consentir;

ler seus cenários;

enviar respostas;

revisar antes da conclusão;

enviar SELF;

enviar feedback;

finalizar.

### **ADMIN/RESEARCH API**

Pode:

administrar piloto;

entrevistar;

auditar;

registrar ocorrências.

### **INTERNAL ENGINE API**

Pode:

score;

evidence;

interpret;

resolve;

claim;

report.

O navegador do participante **jamais chama diretamente o Score Engine**.

# **37. Modelo de erro**

Precisamos de códigos de negócio previsíveis.

Exemplos:

ASSESSMENT\_NOT\_FOUND

ASSESSMENT\_ALREADY\_COMPLETED

ASSESSMENT\_WITHDRAWN

CONSENT\_REQUIRED

SCENARIO\_NOT\_AVAILABLE

OPTION\_NOT\_PRESENTED

INVALID\_OPTION

MISSING\_REQUIRED\_RESPONSE

VERSION\_MISMATCH

ASSESSMENT\_NOT\_READY

SCORING\_INTEGRITY\_FAILURE

EVIDENCE\_VERSION\_INCOMPATIBLE

INTERPRETATION\_VERSION\_INCOMPATIBLE

PERMISSION\_DENIED

O frontend traduz para mensagens humanas.

# **38. Version compatibility**

Teremos uma matriz interna.

Exemplo:

MGH-P1.0

BANK-0.2

SCORE-P1.0

EVIDENCE-0.1

INTERP-0.1

O sistema não permitirá:

MGH-P1.0 + SCORE-4.7

a menos que aquela combinação esteja explicitamente registrada como compatível para recálculo histórico.

Isso evita combinações acidentais.

# **39. Reprocessamento histórico**

Futuramente teremos uma operação:

POST /admin/assessments/{id}/reprocess

Entrada:

new\_scoring\_version

new\_evidence\_version

new\_interpretation\_version

O sistema:

não altera o relatório histórico;

gera nova cadeia.

Teremos então:

Interpretation Original — 2026

Interpretation Reprocessed — 2028

Excelente para pesquisa longitudinal do próprio instrumento.

# **40. Transações**

Algumas operações precisam ser atômicas.

Exemplo:

finalizar assessment.

Ou acontece:

validate all

set COMPLETED

register submit event

timestamp

tudo junto,

ou:

nada.

Não podemos ter:

status COMPLETED

mas evento de submissão ausente.

Isso será responsabilidade transacional do backend.

# **41. Concorrência**

Imagine que a mesma aplicação esteja aberta no celular e no computador.

Precisamos decidir.

No P1.0 eu recomendaria:

permitir uma sessão ativa por vez.

Se abrir nova sessão:

**Sua aplicação está aberta em outro dispositivo. Deseja continuar aqui?**

Ao assumir:

sessão anterior é invalidada.

Isso evita respostas concorrentes.

# **42. Segurança do access token**

O link do participante não pode conter:

/MGH-O0-001

como único segredo.

Precisa usar token suficientemente aleatório.

Exemplo conceitual:

/a/6FksP9...long\_random\_token

No banco, idealmente guardar **hash do token**, não necessariamente o token em texto puro.

Princípio semelhante ao armazenamento de senha.

# **43. Rate limiting**

A API pública deverá limitar:

tentativas excessivas;

brute force de tokens;

requisições abusivas.

Sem prejudicar aplicação normal.

Outro item para o handoff do desenvolvedor.

# **44. Backup**

RAW será um dos ativos mais importantes do projeto.

Precisaremos posteriormente de:

backup automático;

retenção;

restauração testada;

logs;

criptografia;

controle de acesso.

Não basta dizer:

“Supabase já salva.”

Precisamos perguntar ao desenvolvedor:

**Qual é a estratégia de recuperação se o banco for corrompido amanhã?**

# **45. Observabilidade**

O sistema precisa dizer quando algo quebrou.

Exemplos:

12 respostas começaram a falhar depois do deploy;

Score Engine gerou erro;

aplicação terminou sem 56 respostas;

versões incompatíveis tentaram rodar.

Futuramente teremos:

logs estruturados;

error tracking;

métricas;

alertas.

Essa parte pode ser leve no protótipo, mas deve existir na arquitetura.

# **46. Testes automatizados que serão obrigatórios**

Quando chegarmos ao desenvolvimento, há algumas coisas que eu exigiria.

Exemplo PC:

entrada conhecida:

9 D

7 I

3 S

5 C

deve produzir exatamente os mesmos scores sempre.

Exemplo DR:

soma persistência = 9

deve produzir:

66,666...

Exemplo de síntese:

UIG-DEL-001 + UIG-DEL-002

deve ativar:

SIN-DEL-001

e suprimir textos isolados.

São os chamados **testes determinísticos de regra de negócio**.

O desenvolvedor não deve depender de “testamos clicando e parece certo”.

# **47. Golden Cases™**

Quero inclusive criar futuramente algo específico:

# **MGH GOLDEN CASES™**

Perfis artificiais, não pessoas reais, com respostas construídas para produzir determinados resultados conhecidos.

Exemplo:

**GOLD-001**

respostas definidas.

Resultado esperado:

PC.D = X

DR.PERSISTENCE = Y

UIG-DEL-001 = ACTIVE

SIN-DEL-001 = INACTIVE

Toda vez que alguém alterar o código:

roda Golden Cases.

Se algo que não deveria mudar mudou:

deploy bloqueado.

Isso será extremamente poderoso.

# **48. O que NÃO pertence à API P1.0**

Ainda não construir:

pagamento;

Hotmart;

CRM;

gamificação;

ranking;

rede social;

empresa completa;

Mapa de Relação;

Sala de Comando Humana;

WhatsApp automático;

app iOS/Android.

Não porque não existirão.

Porque:

**não devemos construir escala antes de demonstrar que o instrumento merece escala.**

# **49. Backend lógico consolidado**

Agora podemos desenhar o fluxo completo:

PARTICIPANT

↓

PUBLIC API

↓

ASSESSMENT ENGINE

↓

RESPONSE / EVENTS

↓

RAW DATABASE

após conclusão

RAW

↓

SCORE ENGINE

↓

DERIVED SCORES

↓

EVIDENCE ENGINE

↓

EVIDENCE RESULTS

↓

UIG ENGINE

↓

BLOCK + PRECEDENCE

↓

COLLISION RESOLVER

↓

SYNTHESIS

↓

CLAIM ENGINE

↓

LANGUAGE ENGINE

↓

REPORT

Paralelamente:

RESEARCHER

↓

ADMIN API

↓

INTERVIEWS

FLAGS

OCCURRENCES

ITEM SURVIVAL

CHANGE LOG

HYPOTHESES

GATE REVIEW

Essa é uma arquitetura de produto real.

# **50. O que o desenvolvedor receberá dessa etapa**

Ele não receberá apenas:

“Faça uma API.”

Receberá a orientação:

**quais domínios existem;**

**o que cada módulo faz;**

**quais dados entram;**

**quais dados saem;**

**quem possui autorização;**

**quais objetos são imutáveis;**

**quais operações exigem versionamento;**

**qual é a sequência do processamento;**

**onde IA pode e não pode participar.**

Com isso ele poderá propor a implementação.

E nós avaliaremos a proposta contra a especificação — não contra gosto pessoal.

# **ETAPA 2.21 — REQUISITOS NÃO FUNCIONAIS E SEGURANÇA**

Nosso próximo passo deve tratar de algo que normalmente só aparece tarde demais:

**segurança, privacidade, disponibilidade, desempenho, backups, criptografia, LGPD, retenção, exclusão, logs, autorização, recuperação, acessibilidade e critérios mínimos de qualidade do software.**

Isso é especialmente importante no nosso caso porque o MGH armazenará **informações relacionadas a funcionamento comportamental profissional de pessoas**.

Depois da Etapa 2.21 teremos:

**o que o sistema faz** — funcional.

e

**como ele precisa se comportar para ser confiável** — não funcional.

A partir daí começamos a nos aproximar do ponto em que podemos produzir o **Developer Handoff Package** completo que você levará para essa reunião.

Vamos. Agora entramos na **Etapa 2.21 — Requisitos Não Funcionais, Segurança, Privacidade e LGPD do MGH™**.

Até aqui definimos **o que o sistema faz**. Agora vamos definir **em que condições ele pode ser considerado confiável para operar**. Essa etapa é importante porque um software pode cumprir perfeitamente todas as regras do MGH e ainda assim ser inadequado se perder respostas, expuser dados, permitir alterações sem registro ou ficar indisponível durante aplicações.

# **ETAPA 2.21 — NFR & SECURITY SPECIFICATION**

### **MGH™ — NFR-P1.0**

A regra central será:

**O MGH precisa proteger três coisas ao mesmo tempo: a pessoa, o dado e a integridade da metodologia.**

Não basta segurança contra hackers. Também precisamos de proteção contra alterações acidentais, acesso interno excessivo e mudanças metodológicas sem rastreabilidade.

## **1. Classificação interna dos dados**

Eu criaria quatro níveis próprios de classificação.

| **Classe** | **Exemplos MGH** | **Tratamento** |
| --- | --- | --- |
| **PUBLIC** | textos institucionais públicos | proteção básica |
| **INTERNAL** | documentação metodológica sem dados pessoais | acesso da equipe |
| **CONFIDENTIAL** | respostas, scores, entrevistas, relatórios | acesso restrito |
| **RESTRICTED** | identidade + respostas associáveis, credenciais, tokens e segredos | proteção máxima |

Importante: chamar algo de **RESTRICTED internamente não significa afirmar que é “dado pessoal sensível” na definição jurídica da LGPD**.

É simplesmente nossa política de segurança.

Isso é uma distinção importante.

# **2. Separação identidade × resultado**

Quero transformar em requisito obrigatório:

**Nenhuma tabela analítica precisa saber o nome da pessoa para calcular o MGH.**

A associação:

participant\_uuid ↔ identidade

fica protegida em camada separada.

A cadeia psicométrica trabalha com:

UUID / assessment ID.

Assim, mesmo um analista que tenha acesso aos dados do piloto pode trabalhar sem necessariamente saber quem respondeu.

# **3. Princípio do menor privilégio**

Nenhum usuário deve receber acesso simplesmente porque:

“faz parte da equipe”.

Cada papel recebe somente o necessário.

Exemplo:

| **Permissão** | **Researcher** | **Methodologist** | **Admin técnico** |
| --- | --- | --- | --- |
| Ver respostas pseudonimizadas | ✓ | ✓ | limitado |
| Ver identidade | opcional/restrito | opcional | não necessariamente |
| Registrar entrevista | ✓ | ✓ | — |
| Alterar metodologia | — | ✓ | — |
| Publicar versão | — | autorizado específico | — |
| Gerenciar infraestrutura | — | — | ✓ |

Uma pessoa técnica pode administrar o banco **sem precisar ter acesso funcional aos relatórios individuais**.

Isso é desejável.

# **4. MFA no ambiente administrativo**

Para ambiente de pesquisa/administração:

# **MFA obrigatório em produção.**

Senha sozinha é pouco para um sistema que armazenará dados pessoais e informações de perfil profissional.

Para participante:

não precisamos necessariamente de conta/senha no piloto.

O link seguro pode funcionar como credencial temporária.

# **5. Senhas**

Se houver senha:

nunca armazenar texto puro.

O desenvolvedor deverá utilizar algoritmo moderno de hashing próprio para senha, com salt, fornecido por biblioteca confiável.

Não quero implementação caseira de criptografia.

Regra geral:

**não inventar criptografia.**

# **6. Criptografia**

Precisamos de duas proteções.

### **Em trânsito**

Toda comunicação:

HTTPS/TLS.

Sem exceção em produção.

### **Em repouso**

Banco, backups e armazenamento contendo dados CONFIDENTIAL/RESTRICTED devem utilizar criptografia compatível com a infraestrutura escolhida.

Também precisamos perguntar ao fornecedor:

quem controla as chaves?

como backups são criptografados?

quem pode acessá-los?

# **7. Segredos do sistema**

Nunca colocar:

API keys;

senha do banco;

token de IA;

chave de e-mail;

secret JWT

dentro do código ou Git.

Devem ficar em:

secret manager / variáveis de ambiente seguras.

E ambientes diferentes usam segredos diferentes.

# **8. Ambientes separados**

No mínimo:

### **DEVELOPMENT**

dados artificiais.

### **STAGING**

teste integrado.

Idealmente dados artificiais ou anonimizados.

### **PRODUCTION**

dados reais.

Regra:

**desenvolvedor não copia banco de produção para o notebook para “testar uma coisa”.**

Se precisarmos reproduzir um problema:

usar dados anonimizados/sintéticos quando possível.

# **9. Dados reais nunca serão o conjunto de teste do software**

Isso conversa diretamente com nossos **Golden Cases™**.

Para testes automáticos:

usaremos perfis artificiais.

Não:

“Vamos testar com as respostas da Maria porque já sabemos o resultado dela.”

Os Golden Cases existem justamente para evitar isso.

# **10. Consentimento versionado**

Já definimos:

consent\_version

Agora acrescentamos requisito:

o sistema precisa conseguir responder:

qual texto exatamente MGH-O0-007 aceitou?

Não basta guardar:

YES.

Portanto cada consentimento publicado possui conteúdo/versionamento preservados.

Se o texto mudar:

nova versão.

# **11. LGPD — papel das partes**

Na implantação, precisaremos definir formalmente quem exerce o papel de **controlador** e quem atua como **operador** para cada fluxo de dados.

Em termos práticos, quem determina as finalidades e meios essenciais do tratamento tende a assumir responsabilidades de controlador; fornecedores que tratam dados seguindo essas instruções podem atuar como operadores.

Isso precisa estar claro nos contratos com:

desenvolvedor;

hosting/cloud;

provedor de e-mail;

eventual fornecedor de IA;

analytics.

E precisa passar por revisão jurídica antes da operação comercial.

# **12. Base legal**

Para o Piloto Onda 0, estamos estruturando participação voluntária com aviso e consentimento informado, o que é coerente com a natureza experimental do projeto.

Mas eu não congelaria agora:

“consentimento será a base legal de todo MGH para sempre.”

Quando o produto tiver empresas clientes, usuários internos, colaboradores convidados e outras finalidades, a base legal adequada pode variar conforme o contexto.

Isso precisa ser analisado juridicamente em cada modelo de uso.

# **13. Minimização**

O sistema só deve perguntar:

precisamos realmente desse dado?

Exemplo:

para o piloto:

nome pode ser necessário operacionalmente.

CPF?

Provavelmente não.

Endereço residencial?

Não.

Data exata de nascimento?

Provavelmente não — faixa etária já atende ao objetivo inicial.

Essa lógica será aplicada a todo novo campo.

# **14. Finalidade explícita**

Cada família de dado precisa possuir propósito definido.

Exemplo:

age\_band

→ análise exploratória de amostra.

time\_per\_item

→ qualidade do instrumento.

response\_revision

→ ambiguidade/usabilidade.

Se daqui a um ano quisermos usar determinado dado para outro propósito importante, não devemos simplesmente assumir que “já temos o dado”.

Precisamos avaliar compatibilidade, transparência e requisitos jurídicos.

# **15. Retenção**

Precisaremos de uma Política de Retenção.

No piloto eu não fixaria hoje um número de anos arbitrário.

Definiremos posteriormente, com orientação jurídica e necessidades de pesquisa:

**quanto tempo identidade é necessária;**

**quanto tempo RAW é necessário;**

**quando podemos desidentificar;**

**quando devemos excluir.**

Mas o software precisa nascer preparado para isso.

Campos:

retention\_policy

retention\_until

legal\_hold

quando aplicável.

# **16. Direito de retirada**

No piloto:

se participante pede retirada:

status = WITHDRAWN.

Mas precisamos distinguir duas coisas:

### **metodologicamente**

não usamos mais a aplicação nas análises definidas.

### **juridicamente**

o que deve ser apagado ou preservado depende da situação, finalidade e eventual obrigação de retenção.

Não queremos que:

clicar em WITHDRAWN

execute cegamente um DELETE CASCADE.

Teremos processo controlado.

# **17. Direito de exclusão/desidentificação**

O sistema deverá permitir futuramente:

**localizar dados associados ao titular;**

**avaliar solicitação;**

**executar exclusão/desidentificação aplicável;**

**registrar a operação.**

Mas sem criar backups “fantasmas” eternos que mantenham dados teoricamente apagados acessíveis indefinidamente.

A estratégia de backup precisa conversar com a política de exclusão.

# **18. Exportação de dados**

Devemos conseguir gerar, quando aplicável:

dados do participante em formato compreensível.

Mas isso não significa entregar:

**chaves proprietárias de scoring;**

**UIG library;**

**segredos comerciais;**

**dados de outros participantes.**

Dados do titular e propriedade intelectual metodológica são coisas diferentes.

# **19. Privacy by Design**

Quero esse conceito explicitamente no handoff:

**Privacidade não será tela de termos colocada no final do projeto.**

Ela entra no design.

Exemplo:

não enviar identidade para Score Engine.

não enviar RAW completo para IA.

não colocar nome em logs técnicos.

não retornar chaves psicométricas para frontend.

Isso é Privacy by Design aplicada à arquitetura.

# **20. Fornecedor de IA**

Futuramente, se usarmos IA generativa para linguagem, precisamos saber:

**qual provedor;**

**que dados serão enviados;**

**onde são processados;**

**retenção;**

**treinamento com dados;**

**subprocessadores;**

**contrato;**

**região geográfica.**

Nossa arquitetura já reduz muito o risco porque podemos enviar:

claim autorizado

em vez de:

identidade + 56 respostas.

Isso é uma vantagem enorme.

# **21. Identificadores nos prompts de IA**

Ideal:

não enviar:

“João da Silva, gerente da empresa X…”

Enviar:

pessoa avaliada / participante.

A personalização nominal do relatório pode ser aplicada localmente depois.

A IA não precisa conhecer identidade para melhorar uma frase.

# **22. Segurança do relatório**

Um relatório MGH não deveria ter URL pública previsível.

Nada como:

/report/156

Precisará:

autenticação;

token seguro;

ou download temporário autorizado.

Futuramente, gestor e colaborador podem ter permissões distintas.

Essa discussão será central no MGH Organizacional.

# **23. Audit logs**

Precisamos diferenciar:

### **log técnico**

erro de API, servidor etc.

### **log de segurança**

login, falha de autenticação, acesso sensível.

### **audit log de negócio**

usuário invalidou assessment, publicou versão, acessou identidade etc.

Os três têm finalidades diferentes.

# **24. O Audit Log não deve ser editável pelo usuário auditado**

Se um admin executou:

INVALIDATE ASSESSMENT

não pode depois apagar o log dizendo:

“foi engano”.

Pode existir evento seguinte:

REVERT\_DECISION

Mas a ação original permanece registrada.

Isso aumenta confiabilidade.

# **25. Logs também têm dados pessoais**

Cuidado.

Não devemos resolver segurança criando logs que armazenam:

nome;

telefone;

resposta completa;

token;

senha;

conteúdo sensível

em texto puro.

Logs devem guardar apenas o necessário.

Nunca:

console.log(request.body)

indiscriminadamente em produção.

Essa é uma orientação que eu daria explicitamente ao desenvolvedor.

# **26. Backup**

Para o piloto comercializado futuramente, quero requisito mínimo:

**backup automático diário**

e, conforme escala, frequência maior.

Mas backup só existe de verdade se for possível restaurar.

Portanto:

**restore test periódico.**

Pergunta obrigatória ao desenvolvedor:

“Quando foi a última vez que testamos restaurar o banco?”

Backup nunca testado é esperança.

# **27. RPO e RTO**

Dois conceitos entram na especificação.

### **RPO — Recovery Point Objective**

Quanto dado podemos aceitar perder?

Para respostas:

idealmente muito pouco.

Como cada resposta é salva imediatamente, nossa expectativa é alta durabilidade.

### **RTO — Recovery Time Objective**

Quanto tempo o sistema pode levar para voltar?

No piloto, não precisamos de infraestrutura bancária.

Sugestão inicial:

| **Ambiente** | **RPO** | **RTO** |
| --- | --- | --- |
| Piloto O0 | até 24h no desastre extremo, preferindo menor | até algumas horas |
| Produto comercial futuro | meta mais agressiva a definir | meta contratual a definir |

Não quero fingir agora um SLA 99,999%.

Primeiro dimensionamos necessidade e custo.

# **28. Disponibilidade**

Para Onda 0:

best effort profissional.

Para versão comercial:

eu estabeleceria inicialmente um objetivo de disponibilidade como:

**≥99,5% mensal**, excluindo manutenção planejada claramente definida, e reavaliaria conforme negócio.

Isso significa cerca de 3h39 de indisponibilidade máxima teórica num mês de 30 dias.

Podemos futuramente subir.

Mas não venderia “alta disponibilidade” sem arquitetura e monitoramento capazes de sustentar isso.

# **29. Desempenho**

O MGH não é um sistema de alta frequência financeira.

Mas precisa parecer instantâneo.

Metas iniciais razoáveis em condições normais:

| **Operação** | **Meta** |
| --- | --- |
| carregar próximo cenário | <1 s percebido na maioria dos casos |
| salvar resposta | <500 ms ideal / <1 s aceitável |
| abrir aplicação | <2 s |
| dashboard O0 | <2–3 s |
| Score Engine | poucos segundos por assessment |
| relatório individual | <10 s sem dependência generativa pesada |

Esses são **alvos de engenharia**, não garantias contratuais nesta fase.

# **30. Salvamento resiliente**

Se a resposta demora a salvar:

mostrar estado discreto:

Salvando…

Depois:

Salvo.

Se falhar:

não avançar silenciosamente.

Mostrar:

Não conseguimos salvar sua resposta. Tente novamente.

O frontend pode tentar retry controlado.

Nunca fingir persistência.

# **31. Offline**

Para P1.0:

não desenvolveria modo offline completo.

Complexidade desnecessária.

Se conexão cair:

preservar estado local temporariamente quando tecnicamente possível;

tentar novamente;

não avançar sem confirmação do backend.

No futuro podemos rever.

# **32. Escalabilidade**

Não precisamos construir para:

10 milhões de usuários amanhã.

Mas arquitetura deve evitar becos sem saída.

Objetivo inicial:

centenas/milhares de assessments sem reescrever todo o produto.

PostgreSQL bem estruturado + aplicação stateless e jobs assíncronos quando necessário já nos dá amplo espaço.

Não começaria com microserviços.

# **33. Monólito modular antes de microserviços**

Minha recomendação técnica para discutir com o desenvolvedor:

**monólito modular bem organizado.**

Ou seja:

um backend implantável;

módulos lógicos separados;

interfaces internas claras.

Não:

14 microserviços;

Kafka;

Kubernetes;

service mesh

para 10 participantes.

Complexidade também é risco.

Quando escala justificar, módulos podem ser separados.

# **34. Processamento assíncrono**

Algumas tarefas poderão rodar em background:

scoring pós-conclusão;

Evidence Engine;

Interpretation Engine;

relatório;

e-mail;

exportações.

A conclusão da aplicação não precisa esperar todo relatório ser produzido.

Fluxo:

COMPLETED → job de scoring.

Se job falhar:

respostas continuam seguras.

Podemos reprocessar.

# **35. Observabilidade**

No mínimo precisamos de:

**error tracking;**

**logs estruturados;**

**health checks;**

**métricas de API;**

**jobs falhos.**

Alertas relevantes:

respostas não estão salvando;

taxa de erro subiu;

Score Engine falhou repetidamente;

backup falhou;

banco está indisponível.

# **36. Incidentes**

Precisamos de um procedimento simples desde o início.

Classificação:

**SEV-1 — crítico:** exposição de dados, perda relevante de RAW, sistema comprometido.

**SEV-2 — alto:** aplicação amplamente indisponível, falha de scoring massiva.

**SEV-3 — moderado:** funcionalidade secundária quebrada.

**SEV-4 — baixo:** defeito sem impacto relevante.

O plano precisa definir:

detecção;

contenção;

investigação;

correção;

comunicação;

registro pós-incidente.

Questões de notificação legal em incidente de dados devem ser avaliadas conforme LGPD e orientação jurídica aplicável no momento.

# **37. Deploy**

Não quero:

desenvolvedor alterando código diretamente em produção por FTP.

Fluxo mínimo:

**Git**

↓

**Pull Request / revisão**

↓

**testes automáticos**

↓

**staging**

↓

**produção**

E deploy precisa ser rastreável.

# **38. Banco e migrations**

Toda mudança estrutural do banco:

migration versionada.

Nunca:

“Abri o banco e acrescentei uma coluna manualmente.”

Queremos conseguir recriar a infraestrutura a partir do repositório.

# **39. Rollback**

Se novo deploy quebrar o salvamento de respostas:

precisamos conseguir voltar.

Então cada release:

release\_version

e estratégia de rollback compatível.

Migrations destrutivas precisam de extremo cuidado.

# **40. Feature flags**

Podem ajudar bastante.

Exemplo:

novo relatório experimental

ligado só para O0.

Ou:

Evidence Engine 0.2

disponível apenas para metodólogos.

Assim podemos testar novas funções sem expor a todos.

# **41. Acessibilidade**

Isso precisa existir desde o início, não virar correção posterior.

Meta futura:

**WCAG 2.1 AA ou padrão vigente equivalente na época da implantação.**

No protótipo já exigir:

contraste adequado;

navegação por teclado;

labels corretamente associados;

leitores de tela;

texto escalável;

estados de erro perceptíveis;

não depender apenas de cor;

botões grandes o suficiente em mobile.

E cuidado especial com as escalas PRC 1–5 no celular.

# **42. Mobile first**

Mesmo começando como Web App:

o participante provavelmente responderá muito pelo celular.

Portanto:

### **participante**

design mobile-first.

### **admin**

desktop-first responsivo.

Isso faz muito sentido para nosso uso.

# **43. Compatibilidade**

Para primeira versão comercial:

últimas versões estáveis dos principais navegadores:

Chrome;

Edge;

Safari;

Firefox.

Mobile:

Android moderno;

iOS moderno.

Não tentaria suportar browsers muito antigos.

Mas documentamos requisitos.

# **44. Idioma e internacionalização**

Mesmo começando em português:

textos não devem ficar enterrados no código.

Teremos:

locale = pt-BR

e catálogo de textos.

Isso facilitará futuramente:

en-US

es-ES.

Mas tradução de itens psicométricos **não será simples tradução automática**.

Cada versão linguística poderá exigir adaptação e nova investigação.

Excelente distinção para deixar documentada.

# **45. Datas e fusos**

Como já definimos:

banco:

UTC.

Interface:

timezone do usuário/empresa.

E timestamps preservam precisão.

# **46. Integridade referencial**

O banco deverá impedir:

resposta para item inexistente;

item de outra versão;

option de outro item;

score sem Scoring Run;

evidence sem Evidence Run;

claim sem Interpretation Run.

Isso deve ser reforçado por:

**foreign keys + regras de aplicação.**

Não confiar só no frontend.

# **47. Soft delete não em tudo**

Muitos sistemas colocam:

deleted\_at

em toda tabela.

Não quero isso indiscriminadamente.

Para RAW e histórico:

append/imutabilidade.

Para master data versionado:

status RETIRED.

Para registros administrativos:

política específica.

Exclusão jurídica:

processo próprio.

Não uma mesma abstração para tudo.

# **48. Proteção contra enumeração**

URLs e APIs não podem permitir:

/participants/1
/participants/2
/participants/3

e alguém descobrir participantes.

UUIDs + autorização por objeto.

Mesmo autenticado:

acessar um UUID não significa automaticamente ter permissão.

# **49. Uploads**

O P1.0 provavelmente não precisa de uploads.

Ótimo.

Quanto menos superfície de ataque, melhor.

Quando futuramente permitirmos documentos:

antivírus;

tipos permitidos;

tamanho;

storage isolado;

URLs assinadas.

Mas não construir agora.

# **50. Dependências de terceiros**

Antes de contratar tecnologia, o desenvolvedor precisará listar:

| **Serviço** | **Finalidade** | **Dados enviados** | **Criticidade** |
| --- | --- | --- | --- |
| Cloud/DB | infraestrutura | dados MGH | crítica |
| E-mail | convites | e-mail + link | média |
| IA | redação futura | claims, idealmente pseudonimizados | variável |
| Error tracking | erros | dados técnicos minimizados | média |
| Analytics | UX | minimizado | baixa/média |

Nada de instalar 12 scripts de marketing no questionário experimental sem discutir privacidade.

# **51. Analytics**

Durante avaliação, prefiro analytics próprios ou muito controlados.

Não precisamos enviar cada resposta psicométrica para uma ferramenta de marketing.

Eventos como:

assessment\_started

assessment\_completed

podem ser úteis.

Mas:

PC007\_D\_SELECTED

não precisa ir para plataforma externa.

Fica em nosso backend.

# **52. Segurança na cadeia de dependências**

O desenvolvedor deverá:

manter dependências atualizadas;

usar lockfile;

monitorar vulnerabilidades conhecidas;

remover bibliotecas abandonadas;

não instalar pacote obscuro para resolver algo trivial.

Podemos estabelecer processo de atualização periódico.

# **53. Pentest e revisão de segurança**

Para Onda 0:

não precisamos contratar um pentest empresarial enorme.

Antes de uma operação comercial relevante:

eu recomendaria revisão de segurança independente e, conforme escala/risco, pentest.

Especialmente antes de armazenar resultados de equipes de múltiplas empresas.

# **54. RIPD / avaliação de impacto**

À medida que o MGH escalar e passar a tratar dados de trabalhadores em contexto organizacional, pode ser prudente — e em certas circunstâncias necessário — elaborar uma avaliação formal de riscos/impacto de proteção de dados com apoio jurídico e de privacidade.

Não tentaria preencher isso agora apenas para ter um documento.

Primeiro teremos o fluxo real de dados totalmente definido.

Nossa arquitetura já facilitará muito esse trabalho.

# **55. Não utilizar resultado piloto em decisão profissional**

Isso vira regra funcional e jurídica da versão experimental.

No P1.0:

decision\_use\_allowed = false

Isso pode inclusive aparecer como propriedade da versão do instrumento.

Futuramente, se determinados usos forem autorizados:

serão associados explicitamente à versão/finalidade.

Excelente mecanismo de governança.

# **56. Termos de uso por versão do instrumento**

Cada versão poderá carregar:

intended\_use

prohibited\_use

target\_population

validation\_status

limitations

Exemplo P1.0:

**intended:** pesquisa/desenvolvimento.

**prohibited:** seleção/demissão/promoção.

**validation:** pilot/experimental.

Isso impede que alguém pegue um PDF experimental e diga:

“O MGH disse que essa pessoa não serve.”

# **57. Requisitos mínimos para produção comercial**

Antes de chamarmos o sistema de produção comercial, eu colocaria como Gate técnico:

| **Área** | **Obrigatório** |
| --- | --- |
| TLS | ✓ |
| MFA admin | ✓ |
| backup automatizado | ✓ |
| restore testado | ✓ |
| logs/auditoria | ✓ |
| monitoramento de erros | ✓ |
| política de retenção | ✓ |
| privacy notice adequado | ✓ |
| controle de acesso | ✓ |
| ambientes separados | ✓ |
| CI/CD | ✓ |
| testes de regra de negócio | ✓ |
| Golden Cases | ✓ |
| revisão de segurança | ✓ |
| documentação de incidente | ✓ |

Nenhum deles torna o software “impossível de invadir”.

Segurança absoluta não existe.

O objetivo é gestão séria de risco.

# **58. E o desenvolvedor não decide sozinho sobre essas regras**

Isso é importante para sua futura reunião.

O desenvolvedor pode dizer:

“Tecnicamente eu faria assim.”

Ótimo.

Mas existem três categorias de decisão:

### **Metodológica**

Nós definimos.

### **Técnica**

Desenvolvedor propõe.

### **Jurídica/privacidade**

Profissional competente revisa.

Quando se misturam essas três coisas, projetos ficam perigosos.

# **59. Matriz de responsabilidades futura**

Eu quero inclusive colocar no Developer Handoff:

| **Questão** | **Responsável primário** |
| --- | --- |
| significado do score | Metodologia MGH |
| regra UIG | Metodologia MGH |
| arquitetura backend | Tech |
| mecanismo de criptografia | Tech |
| base legal LGPD | Jurídico/Privacy |
| UX do questionário | Produto + Metodologia |
| infraestrutura | Tech |
| validação psicométrica | Psicometria |
| finalidade comercial | Negócio + Jurídico |
| texto do relatório | Metodologia + Produto |

Isso evita que um especialista invada a área do outro.

# **60. NFR-P1.0 — congelamento**

Agora o MGH possui requisitos formais de:

**segurança**

**privacidade**

**LGPD**

**identidade**

**criptografia**

**autorização**

**imutabilidade**

**backups**

**recuperação**

**disponibilidade**

**desempenho**

**observabilidade**

**incidentes**

**deploy**

**acessibilidade**

**compatibilidade**

**internacionalização**

**dependências**

**IA**

**auditoria**

**governança de uso.**

Isso significa que já temos duas grandes metades da especificação tecnológica:

**FUNCIONAL:** o que o sistema deve fazer.

e

**NÃO FUNCIONAL:** em que condições ele precisa funcionar.

# **ETAPA 2.22 — GOLDEN CASES™ + TEST SPECIFICATION**

Antes de montarmos o pacote para o desenvolvedor, eu faria uma última etapa de engenharia crítica: definir **como vamos provar que a implementação dele está obedecendo à metodologia**.

Vamos construir casos artificiais com respostas conhecidas e resultados matematicamente esperados, testes do Score Engine, DR, PRC, randomização, versionamento, imutabilidade, bloqueios, UIGs, colisões e sínteses.

A ideia é simples:

**O desenvolvedor não poderá dizer “está funcionando”. O sistema terá que provar que está produzindo exatamente o resultado esperado.**

Depois dessa etapa, estaremos muito próximos de começar a consolidar o **Developer Handoff Package** que você levará para a reunião.

Vamos. Agora entramos na **Etapa 2.22 — Golden Cases™ + Test Specification do MGH™**.

Esta etapa fecha um ponto crítico: **como saberemos que o software implementado pelo desenvolvedor está obedecendo exatamente à metodologia que construímos?**

A regra passa a ser:

**Nenhuma implementação é aceita porque “parece estar funcionando”. Ela precisa produzir resultados conhecidos a partir de entradas conhecidas.**

# **ETAPA 2.22 — GOLDEN CASES™ + TEST SPECIFICATION**

### **MGH™ — TEST-P1.0**

Há uma separação importantíssima antes de começarmos.

Ainda **não temos cortes empíricos definitivos** dizendo, por exemplo:

DR.SPEED = 72 → HIGH
PC.D = 37,5% → RELEVANT.

Portanto, não vamos inventar esses números apenas para escrever testes.

Teremos duas famílias independentes:

**Golden Cases de Pontuação:** começam em respostas e terminam em números exatos. Já podem ser congelados.

**Golden Cases de Interpretação:** começam em evidências artificiais já classificadas e testam UIGs, bloqueios, colisões, sínteses e claims.

Assim não misturamos matemática já definida com classificações que ainda dependerão do piloto.

# **1. Cinco camadas de teste**

| **Camada** | **O que testa** |
| --- | --- |
| **UNIT** | fórmula ou regra isolada |
| **INTEGRATION** | comunicação entre módulos |
| **E2E** | fluxo completo do participante/pesquisador |
| **REGRESSION** | algo antigo não quebrou depois de uma alteração |
| **SECURITY** | acesso, tokens, permissões, exposição de dados |

Os Golden Cases serão principalmente testes de **regressão determinística**.

# **2. GOLD-SCORE-001 — PC perfeitamente distribuído**

Construiremos artificialmente 24 respostas:

**6 D | 6 I | 6 S | 6 C**

Resultado obrigatório:

| **Métrica** | **Esperado** |
| --- | --- |
| PC.D.raw | 6 |
| PC.I.raw | 6 |
| PC.S.raw | 6 |
| PC.C.raw | 6 |
| PC.D.relative | 0,25 |
| PC.I.relative | 0,25 |
| PC.S.relative | 0,25 |
| PC.C.relative | 0,25 |
| GAP12 | 0 |
| Entropia normalizada | 1,0000 |

Aqui surge uma regra importante.

O Score Engine **não poderá inventar um P1 único em situação de empate**.

Não queremos:

P1 = D

simplesmente porque D vem primeiro no código.

O sistema deverá registrar:

TOP\_TIE = D,I,S,C

ou estrutura equivalente.

### **GOLD RULE 001**

**Empate matemático não pode ser resolvido arbitrariamente pela ordem das dimensões.**

# **3. GOLD-SCORE-002 — concentração máxima em D**

Todas as 24 escolhas semanticamente D.

Resultado:

| **Métrica** | **Esperado** |
| --- | --- |
| D | 24 |
| I | 0 |
| S | 0 |
| C | 0 |
| D.relative | 1,0000 |
| GAP12 | 24 |
| Entropia | 0 |

É um caso artificial extremo.

Não porque esperamos encontrar alguém assim, mas porque ele testa os **limites matemáticos**.

# **4. GOLD-SCORE-003 — distribuição de referência**

Usaremos aquele exemplo que aparece desde nossa engenharia matemática:

**D = 9 | I = 7 | S = 3 | C = 5**

Resultados:

| **Métrica** | **Esperado** |
| --- | --- |
| D | 9 |
| I | 7 |
| S | 3 |
| C | 5 |
| D relative | 0,3750 |
| I relative | 0,291666… |
| S relative | 0,1250 |
| C relative | 0,208333… |
| P1 | D |
| P2 | I |
| P3 | C |
| P4 | S |
| GAP12 | 2 |
| GAP23 | 2 |

A entropia deverá ser calculada de forma determinística pela fórmula congelada.

Internamente, usaremos precisão superior à exibida.

Exemplo:

cálculo interno: casas suficientes para estabilidade
interface: arredondamento normalmente em 2 casas.

Nunca arredondaremos cedo demais durante os cálculos.

# **5. GOLD-SCORE-004 — faceta Autonomia**

Respostas específicas:

PC-007 → opção semântica D

PC-027 → opção semântica D

Resultado obrigatório:

PC.D.AUTONOMY.hits = 2

opportunities = 2

Mas continua:

reportable = false

O sistema **não pode transformar automaticamente** isso em:

“Autonomia = 100%”.

Esse teste verifica matemática e governança interpretativa ao mesmo tempo.

# **6. GOLD-SCORE-005 — Critério**

Respostas:

PC-021 → C

PC-028 → C

Esperado:

PC.C.CRITERION.hits = 2

opportunities = 2

Novamente:

**sinal interno, não percentual público.**

# **7. GOLD-SCORE-006 — randomização não altera PC**

Esse teste é indispensável.

Primeira apresentação de PC-007:

| **Posição** | **option\_id** |
| --- | --- |
| 1 | PC007\_D |
| 2 | PC007\_I |
| 3 | PC007\_C |
| 4 | PC007\_S |

Participante seleciona:

posição 1 → PC007\_D.

Em outro assessment:

| **Posição** | **option\_id** |
| --- | --- |
| 1 | PC007\_S |
| 2 | PC007\_C |
| 3 | PC007\_I |
| 4 | PC007\_D |

Participante seleciona:

posição 4 → PC007\_D.

Resultado nos dois casos:

**PC.D +1**

Nunca:

posição 1 = D.

### **GOLD RULE 002**

**Score deriva de option\_id, jamais de display\_position.**

# **8. GOLD-PRC-001 — Forced totalmente Visual**

Nos oito PRC Forced:

V selecionado em todos.

Esperado:

| **Métrica** | **Valor** |
| --- | --- |
| V.raw | 8 |
| A.raw | 0 |
| C.raw | 0 |
| V.relative | 1,0 |
| A.relative | 0 |
| C.relative | 0 |

E continua proibido produzir:

“Pessoa 100% visual.”

# **9. GOLD-PRC-002 — Forced distribuído**

Resultado construído:

V = 4
A = 3
C = 1

Esperado:

V = 0,50
A = 0,375
C = 0,125.

Sem inferência adicional no Score Engine.

# **10. GOLD-PRC-003 — avaliação independente**

Nos quatro contextos:

Visual:

5 | 5 | 4 | 5

Auditivo:

4 | 4 | 4 | 4

Cinestésico:

3 | 3 | 4 | 2

Esperado:

| **Modalidade** | **Média** |
| --- | --- |
| V | 4,75 |
| A | 4,00 |
| C | 3,00 |

Normalização:

((média - 1) / 4) × 100

Portanto:

| **Modalidade** | **Normalizado** |
| --- | --- |
| V | 93,75 |
| A | 75,00 |
| C | 50,00 |

# **11. GOLD-PRC-004 — multimodalidade declarada**

Todas as doze avaliações independentes:

Resultado:

V = 5
A = 5
C = 5.

Isso testa algo importante:

O sistema deve ser capaz de preservar:

**alta avaliação simultânea das três modalidades.**

Não poderá normalizar internamente forçando:

33% / 33% / 33%.

A avaliação independente **não é ipsativa**.

# **12. GOLD-PRC-005 — Forced versus Independent divergentes**

Forced:

V = 7
A = 1
C = 0

Independent:

V = 4,8
A = 4,7
C = 4,6

O Score Engine preserva ambas as histórias.

Ele não deve automaticamente produzir:

Visual absoluto.

Futuramente, o Evidence Engine pode reconhecer algo como:

preferência relativa visual + alta utilidade multimodal.

Este Golden Case garante que **uma camada não destrua a outra**.

# **13. GOLD-DR-001 — máximo dos quatro eixos**

Velocidade:

A / A / A → 4+4+4 = 12

Impacto:

A / A / A → 12

Persistência:

D / D / D → 4+4+4 = 12

Externalização:

A / A / A → 12

Fórmula:

(soma − 3) / 9 × 100

Resultado:

**100 em todos os eixos.**

Não significa “bom”, “ruim” ou “intenso emocionalmente”.

É apenas teste de limite.

# **14. GOLD-DR-002 — mínimo**

Velocidade:

D/D/D → 3

Impacto:

D/D/D → 3

Persistência:

A/A/A → 3

Externalização:

D/D/D → 3

Resultado:

**0 em todos os eixos.**

# **15. GOLD-DR-003 — valor intermediário conhecido**

Para cada eixo construímos respostas cuja soma = **9**.

Esperado:

(9−3)/9 ×100

=

**66,666666…**

Armazenamento não deve truncar para:

Interface poderá exibir:

**66,67**

se decidirmos mostrar numericamente.

# **16. GOLD-DR-004 — direção da Persistência**

Esse é particularmente importante porque a chave da Persistência é invertida em relação a outros eixos.

TH-002:

D = 4

TH-010:

D = 4

TH-015:

D = 4

Esperado:

Persistência = 100.

Se alguém programar genericamente:

A=4, D=1 para tudo,

esse teste falha imediatamente.

# **17. GOLD-DR-005 — ordem não pode ser randomizada**

Para qualquer scenario DR:

tentativa de:

randomizable = true

deve provocar falha de validação da configuração da versão.

O instrumento **não deveria nem ser publicado** com DR randomizável.

Esse teste pertence ao Instrument Registry.

# **18. Agora passamos aos Golden Cases do Motor**

Aqui não começamos em respostas.

Injetamos **Evidence fixtures**.

Isso é intencional porque ainda não congelamos os cortes numéricos que produzirão HIGH, LOW, CONSISTENT etc.

Dessa forma conseguimos testar a lógica interpretativa **sem inventar psicometria**.

# **19. GOLD-INT-001 — Autonomia × Critério**

Fixture:

PC.D.AUTONOMY = CONSISTENT

PC.C.CRITERION = CONSISTENT

sem bloqueios contextuais.

Esperado:

UIG-DEL-001 = ACTIVATED

UIG-DEL-002 = ACTIVATED

depois:

SIN-DEL-001 = ACTIVATED

e:

UIG-DEL-001 = SUPPRESSED\_BY\_SYNTHESIS

UIG-DEL-002 = SUPPRESSED\_BY\_SYNTHESIS

Claim final:

DELEGATION\_AUTONOMY\_WITH\_CRITERIA

O relatório **não deve repetir** os dois textos isolados.

# **20. GOLD-INT-002 — Precedência contextual**

Fixture:

PC.D = RELEVANT

mas:

PC.D.CONFRONTATION = LOW\_OR\_MODERATE

em contexto de conflito.

Esperado:

uma interpretação genérica:

“D → enfrenta conflitos diretamente”

**não pode ser gerada.**

A regra contextual CON-006 deve impedir a generalização.

Esse teste garante o:

# **PRINCÍPIO DA PRECEDÊNCIA CONTEXTUAL™**

# **21. GOLD-INT-003 — Impacto alto sem externalização**

Fixture:

DR.IMPACT = HIGH

DR.EXTERNALIZATION = LOW

Esperado:

UIG-FDB-006 = ACTIVATED

Claim permitido:

a reação externa pode subestimar o impacto declarado.

Claims proibidos:

reprime emoções;

esconde sentimentos;

é emocionalmente fechado;

é desonesto.

O teste deve verificar não apenas o que apareceu, mas também **o que não apareceu**.

# **22. GOLD-INT-004 — dupla contagem proibida**

Fixture:

PC.D = RELEVANT

PC.D.AUTONOMY = CONSISTENT

mas ambas possuem forte sobreposição nos source\_items.

O Motor pode utilizar autonomia para **refinar** a interpretação.

Mas não pode simplesmente dizer:

duas evidências independentes → E2.

O Lineage Check precisa impedir promoção artificial do nível de evidência.

### **GOLD RULE 003**

**Mesma origem não gera independência pela simples existência de dois códigos de evidência.**

# **23. GOLD-INT-005 — independência legítima entre lentes**

Fixture:

PRC.V.FORCED = RELEVANT

e:

PRC.V.INDEPENDENT = RELEVANT

com:

independence\_group = PRC\_FORCED

e

independence\_group = PRC\_INDEPENDENT.

Aqui existe evidência proveniente de **dois formatos de resposta diferentes**.

Se as demais regras forem atendidas:

PRC.V.CONVERGENCE

pode ser produzida.

Isso contrasta deliberadamente com GOLD-INT-004.

# **24. GOLD-INT-006 — contradição lógica**

Entrada artificial defeituosa:

DR.EXTERNALIZATION = HIGH

e simultaneamente:

DR.EXTERNALIZATION = LOW

na mesma classificação/run.

Esperado:

**nenhuma UIG polar forte deverá avançar.**

O Engine deverá:

registrar contradição;

produzir flag de integridade;

bloquear interpretação polar.

Não deve:

escolher HIGH porque apareceu primeiro.

# **25. GOLD-INT-007 — Motor sabe ficar calado**

Fixture:

evidências insuficientes para determinado domínio.

Esperado:

nenhuma recomendação para aquele domínio.

Não queremos:

“Como não achei nada, vou escrever uma frase genérica sobre trabalho em equipe.”

### **GOLD RULE 004**

**Ausência de evidência nunca é preenchida com conteúdo genérico.**

# **26. GOLD-INT-008 — lista negra**

Vamos tentar deliberadamente pedir ao Claim Engine:

GOOD\_LEADER

ou:

JOB\_FIT

ou:

HONEST\_PERSON

Resultado obrigatório:

**REJECTED / FORBIDDEN\_CLAIM**

Mesmo que existam muitas evidências.

O Block Engine está acima do entusiasmo interpretativo.

# **27. GOLD-SYN-001 — Compressão Semântica**

Suponha três UIGs ativadas que gerem orientações muito semelhantes dentro de:

COMMUNICATION\_VISUAL\_STRUCTURE.

Esperado:

uma recomendação consolidada.

Não três parágrafos dizendo essencialmente:

use informação visual.

Isso testa o:

# **PRINCÍPIO DA COMPRESSÃO INTERPRETATIVA™**

# **28. GOLD-SYN-002 — complementaridade**

Fixture:

Visual relevante + Auditivo relevante.

Esperado:

síntese multimodal adequada.

Não:

escolher Visual porque teve 0,1 a mais

caso as regras não determinem uma predominância suficiente.

A síntese precisa preservar coexistência.

# **29. Golden Cases de estado da aplicação**

Agora saímos do conteúdo psicométrico e testamos o produto.

### **GOLD-FLOW-001**

Assessment possui:

55 das 56 respostas obrigatórias.

Tentativa:

POST /submit

Esperado:

ASSESSMENT\_NOT\_READY

e status continua:

IN\_PROGRESS.

# **30. GOLD-FLOW-002 — conclusão válida**

Temos:

consentimento;

contexto completo;

48 cenários;

56 respostas válidas;

8 SELF;

feedback requerido.

POST /submit

Esperado:

COMPLETED

submitted\_at registrado

respostas bloqueadas.

# **31. GOLD-FLOW-003 — edição após conclusão**

Assessment = COMPLETED.

Tentativa:

alterar PC-007.

Esperado:

ASSESSMENT\_ALREADY\_COMPLETED

RAW permanece intacto.

# **32. GOLD-FLOW-004 — idempotência**

Dois requests idênticos de finalização, mesma idempotency\_key.

Esperado:

uma única finalização.

Não:

dois eventos finais;

dois scoring jobs;

dois relatórios.

# **33. GOLD-FLOW-005 — opção não apresentada**

Servidor apresentou para determinado scenario um conjunto específico de option\_ids.

Cliente tenta enviar:

outro option\_id válido no banco, mas que **não foi apresentado naquela aplicação**.

Resultado:

OPTION\_NOT\_PRESENTED

Isso reduz manipulação da API.

# **34. GOLD-FLOW-006 — versão incompatível**

Assessment criado com:

MGH-P1.0 / SCORE-P1.0.

Tentativa normal de execução com:

SCORE-9.0 não cadastrado como compatível.

Resultado:

VERSION\_MISMATCH

Nenhum score criado.

# **35. GOLD-FLOW-007 — invalidação não apaga RAW**

Assessment COMPLETED.

Admin marca:

INVALIDATED.

Esperado:

RAW permanece.

Aplicação é excluída das análises conforme regra.

Audit log registra:

quem;

quando;

por quê.

# **36. GOLD-FLOW-008 — retirada**

Assessment → WITHDRAWN.

Fluxos normais de:

score;

report;

reentrada do participante

devem respeitar política da versão.

A retirada não deve ser tratada tecnicamente como:

DELETE sem rastreabilidade.

O processo legal de exclusão, quando aplicável, é separado.

# **37. Golden Cases de segurança**

Também teremos testes obrigatórios.

| **Código** | **Tentativa** | **Esperado** |
| --- | --- | --- |
| SEC-001 | participante solicita score\_target | campo nunca retornado |
| SEC-002 | Researcher sem identity:read solicita nome | 403 |
| SEC-003 | token aleatório inválido | acesso negado sem revelar existência |
| SEC-004 | participante A tenta assessment B | acesso negado |
| SEC-005 | senha aparece em log | teste falha |
| SEC-006 | access token aparece em log | teste falha/redação obrigatória |
| SEC-007 | admin invalida assessment | audit event obrigatório |
| SEC-008 | request repetido/brute force | rate limit conforme configuração |

Isso entra no Definition of Done.

# **38. Golden Cases de versionamento**

### **VERSION-001**

Item publicado:

PC-007 v1.0.

Não pode ser editado em lugar.

Mudança textual relevante:

cria v1.1 ou novo item conforme impacto.

Resultados antigos continuam ligados a v1.0.

### **VERSION-002**

SCORE-P1.0 já produziu Run 001.

Implementamos SCORE-P1.1.

Reprocessamos o mesmo RAW.

Esperado:

Run 002.

Nunca:

modificar Run 001.

### **VERSION-003**

INTERP-0.2 muda apenas interpretação.

RAW e Score permanecem intactos.

Cria novo:

Interpretation Run.

Isso testa nossa separação arquitetônica.

# **39. Testes do RAW**

Algumas regras merecem teste explícito:

**RAW-001:** primeira escolha nunca desaparece após revisão.

**RAW-002:** cada alteração produz RESPONSE\_EVENT.

**RAW-003:** option presentation é preservada.

**RAW-004:** timestamps UTC.

**RAW-005:** ocorrência que invalida timing não modifica duration\_ms; apenas marca aquele dado como impróprio para análise de tempo.

Isso é extremamente importante.

# **40. O Test Suite terá três classificações**

Cada teste será:

### **BLOCKING**

Se falhar:

**não pode ir para produção.**

Exemplo:

Score errado.

RAW editável.

Participant vendo chave psicométrica.

### **CRITICAL-PILOT**

Pode não comprometer segurança, mas impede a Onda 0.

Exemplo:

revision\_count não funciona.

SELF não grava.

### **NON-BLOCKING**

Defeito menor que pode ser registrado para correção.

Exemplo:

pequeno problema visual sem impacto na aplicação.

# **41. Matriz de aceitação**

Cada requisito futuro terá:

| **Campo** | **Exemplo** |
| --- | --- |
| Requirement | PC scoring by option\_id |
| Test | GOLD-SCORE-006 |
| Type | Regression |
| Severity | BLOCKING |
| Automated | Yes |
| Expected | Same score independent of position |
| Status | PASS/FAIL |

Isso será entregue ao desenvolvedor.

Ele saberá desde antes de começar:

**como o trabalho será aceito.**

Isso muda bastante uma negociação de software.

# **42. Testes unitários obrigatórios do Score Engine**

Eu exigiria **100% de cobertura das regras matemáticas críticas**, não necessariamente 100% de todas as linhas de código do sistema.

Ou seja, absolutamente todas as fórmulas precisam de testes:

PC counts;

frequências;

ties;

ranking;

gaps;

entropia;

PRC forced;

PRC independent;

normalização;

DR nas quatro direções;

facetas;

relation groups.

Se uma fórmula existe, existe um teste conhecido.

# **43. Testes do Motor**

Da mesma forma:

cada UIG publicada futuramente deverá possuir pelo menos:

**caso positivo**

e

**caso negativo/bloqueador**.

Exemplo:

UIG-FDB-006:

Caso positivo:

Impact HIGH + External LOW → ativa.

Caso negativo:

Impact HIGH + External HIGH → não ativa essa UIG específica.

Bloqueio:

application quality LOW\_CONFIDENCE → comportamento definido conforme regra.

Isso significa que, quando formalizarmos as 40 UIGs completamente, cada uma ganhará sua própria pequena suíte.

# **44. Testes das Synthesis Rules**

Cada SIN precisa possuir:

**gatilho completo**

**gatilho incompleto**

**colisão incompatível**

**supressão correta das UIGs originais**

**claim final correto.**

Exemplo:

SIN-DEL-001 só ativa se ambas as condições necessárias realmente existirem.

# **45. Teste da linguagem**

Mesmo o Language Engine terá controle.

Com template determinístico:

entrada fixa → saída fixa.

Com IA generativa:

não podemos exigir frase idêntica.

Então testamos restrições:

texto contém conceito autorizado;

não contém claim proibido;

não aumenta nível de certeza;

não inventa competência;

não menciona diagnóstico;

não altera números;

não cria novo perfil.

Se falhar:

texto descartado e template determinístico pode servir de fallback.

# **46. Fallback é obrigatório**

Imagine:

Claim Engine produziu resultado correto.

IA generativa falhou.

O MGH não deverá responder:

“Não foi possível gerar seu relatório.”

Teremos:

**template determinístico aprovado.**

A IA é aprimoramento de linguagem.

Não dependência metodológica.

# **47. CI — integração contínua**

Quando o desenvolvedor fizer:

commit / pull request

o pipeline deverá rodar automaticamente, pelo menos:

**testes unitários**

**Golden Cases**

**lint/build**

**testes críticos de integração**

Se um Golden Case BLOCKING falhar:

merge/deploy bloqueado.

Isso transforma nossa metodologia em uma barreira automática contra regressão.

# **48. Golden Dataset versionado**

Os Golden Cases também precisam de versão.

Exemplo:

GOLDEN-P1.0

Não editaremos uma resposta artificial antiga para fazer o novo algoritmo passar.

Se a metodologia mudou legitimamente:

criamos:

GOLDEN-P1.1

e documentamos por quê.

É o mesmo princípio que aplicamos ao instrumento.

# **49. Golden Case não é pessoa ideal**

Outra regra importante.

Não teremos:

“Perfil ideal de vendedor.”

“Perfil ideal de gerente.”

Golden Cases existem para:

**testar software e metodologia**.

Não para criar modelos normativos de pessoa.

# **50. Golden Case não é dado de validação**

Também não confundiremos:

o algoritmo acertou um caso que nós mesmos construímos

com:

o instrumento foi validado.

Golden Cases provam:

**a implementação obedece às regras.**

Pessoas reais provarão ou questionarão:

**se as regras fazem sentido como medida.**

Essa diferença é fundamental.

# **51. Definition of Done — Score Engine**

Eu só aceitaria Score Engine P1.0 como concluído quando:

| **Requisito** | **Obrigatório** |
| --- | --- |
| 24 PC pontuados corretamente | ✓ |
| randomização não interfere | ✓ |
| ties tratados corretamente | ✓ |
| PRC Forced correto | ✓ |
| PRC Independent correto | ✓ |
| 4 DR corretos | ✓ |
| persistência invertida corretamente | ✓ |
| facetas registradas | ✓ |
| relação de origem preservada | ✓ |
| Scoring Run imutável | ✓ |
| Golden Cases passando | ✓ |

# **52. Definition of Done — Assessment**

Da mesma forma:

| **Requisito** | **Obrigatório** |
| --- | --- |
| consentimento versionado | ✓ |
| 48 cenários corretos | ✓ |
| 56 respostas | ✓ |
| autosave | ✓ |
| revisões preservadas | ✓ |
| progress correto | ✓ |
| retomada após fechamento | ✓ |
| conclusão transacional | ✓ |
| edição pós-submit bloqueada | ✓ |
| eventos essenciais registrados | ✓ |
| access token seguro | ✓ |

# **53. Definition of Done — Admin O0**

| **Requisito** | **Obrigatório** |
| --- | --- |
| criar participante | ✓ |
| gerar MGH-ID | ✓ |
| link seguro | ✓ |
| acompanhar aplicação | ✓ |
| entrevista cognitiva | ✓ |
| audit flags | ✓ |
| ocorrências | ✓ |
| Item Survival | ✓ |
| Change Log | ✓ |
| Hypothesis Register | ✓ |
| Gate Review | ✓ |
| audit administrativo | ✓ |

# **54. Um detalhe estratégico para sua reunião com o desenvolvedor**

Você poderá perguntar:

**“Como você pretende automatizar os Golden Cases no pipeline de desenvolvimento?”**

A resposta dele vai revelar bastante.

Se a resposta for:

“A gente testa manualmente depois.”

isso é um sinal de alerta para um sistema como este.

Queremos alguém confortável com:

versionamento;

testes automatizados;

regras determinísticas;

migrations;

auditabilidade;

CI/CD.

Não necessariamente alguém que conheça psicometria.

A psicometria somos nós + especialista futuro.

Mas ele precisa saber **implementar regras sem deformá-las**.

# **55. Outra pergunta importante**

**“Se daqui a dois anos eu mudar o algoritmo, você consegue recalcular um assessment antigo sem apagar o resultado original?”**

Se a arquitetura dele tornar isso difícil, precisamos discutir.

Porque para o MGH isso é requisito central, não luxo.

# **56. E outra**

**“A IA vai interpretar as respostas ou vai apenas redigir claims previamente autorizados?”**

A resposta correta para nossa arquitetura é:

**redigir claims autorizados.**

Se ele propuser:

“Joga tudo no GPT e pede o relatório”,

ele está propondo outro produto.

Não o MGH que construímos.

# **57. TEST-P1.0 — congelamento**

Agora possuímos Golden Cases para:

**PC**

**PRC Forced**

**PRC Independent**

**DR**

**facetas**

**randomização**

**linhagem**

**UIGs**

**bloqueios**

**precedência**

**colisões**

**sínteses**

**claims**

**compressão**

**estados da aplicação**

**imutabilidade**

**idempotência**

**versionamento**

**RAW**

**segurança**

**reprocessamento.**

E, acima de tudo:

**temos uma definição objetiva do que significa “funciona”.**

# **O MARCO EM QUE ESTAMOS**

Neste momento já desenhamos praticamente toda a engenharia necessária para conversar seriamente com um desenvolvedor sobre o **protótipo de pilotagem**.

Porém existe uma coisa que eu **não quero deixar pela metade antes do handoff**:

as 40 UIGs sobreviventes ainda não foram todas transformadas individualmente no schema computável que definimos. Fizemos a arquitetura, auditamos a biblioteca e formalizamos casos-modelo, mas não preenchemos ficha por ficha das 40.

Isso não impede desenvolver a **Onda 0**, porque nessa fase o participante não receberá relatório automático.

Mas impede dizer que o **Interpretation Engine completo** já está 100% especificado.

Por isso, eu faria uma escolha estratégica:

