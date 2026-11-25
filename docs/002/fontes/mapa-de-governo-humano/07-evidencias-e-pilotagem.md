---
name: 07-evidencias-e-pilotagem
description: Etapas 2.12 a 2.16: evidências, hipóteses, protocolo e kit da Onda 0.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 9071-12221
---

# Evidências E Pilotagem

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.12 — FORMALIZAÇÃO DA BIBLIOTECA MESTRE**

Este é o próximo passo.

Agora pegaremos as **40 UIGs sobreviventes + 2 regras de síntese + 5 bloqueios** e passaremos cada uma pelo schema que acabamos de criar.

Mas eu faria isso de maneira ainda mais organizada.

Primeiro criaremos o:

# **DICIONÁRIO OFICIAL DE EVIDÊNCIAS MGH™**

Antes de escrever:

PC.DOMINANCE == RELEVANT

precisamos determinar **quais evidências podem existir oficialmente no Motor**.

Por exemplo:

PC.DOMINANCE
PC.INFLUENCE
PC.STABILITY
PC.CONFORMITY

mas também:

PC.AUTONOMY
PC.CONFRONTATION
PC.CRITERION

e:

PRC.VISUAL\_FORCED
PRC.VISUAL\_INDEPENDENT

e:

DR.SPEED
DR.IMPACT
DR.PERSISTENCE
DR.EXTERNALIZATION.

Precisamos dar a cada uma:

**ID oficial, origem, tipo de métrica, possíveis estados, contextos em que pode ser usada e grau de independência.**

Sem esse dicionário, as UIGs acabariam utilizando conceitos escritos de maneiras diferentes.

Com ele, teremos um **vocabulário computacional fechado do MGH™**.

E esse seria exatamente o nosso próximo movimento: **Etapa 2.12 — construir o Dicionário Oficial de Evidências que alimentará todas as regras do Motor.**

Sim. Agora entramos na **Etapa 2.12 — Dicionário Oficial de Evidências MGH™**.

Até aqui criamos o Motor e sua gramática. Agora precisamos definir o **vocabulário fechado** que o Motor poderá utilizar. Isso é importante porque uma UIG nunca poderá simplesmente inventar uma condição como “pessoa muito analítica”. Ela só poderá trabalhar com evidências formalmente existentes no dicionário.

# **ETAPA 2.12 — DICIONÁRIO OFICIAL DE EVIDÊNCIAS MGH™**

### **Evidence Dictionary — versão candidata 0.1**

A regra central será:

**Se uma evidência não estiver registrada no Dicionário Oficial, o Motor de Governo™ não está autorizado a utilizá-la.**

Isso protege metodologia, interpretação e código.

## **1. Estrutura oficial de uma evidência**

Cada evidência terá estes campos:

| **Campo** | **Função** |
| --- | --- |
| evidence\_code | código único |
| lens | PRC, PC ou DR |
| level | dimensão, faceta, contexto ou métrica auxiliar |
| construct | aquilo que está sendo observado |
| metric\_type | como o valor foi produzido |
| direction | significado de valores maiores/menores |
| possible\_states | estados interpretativos permitidos |
| source\_items | itens capazes de alimentá-la |
| context\_scope | onde a evidência pode ser usada |
| independence\_group | origem para controle de dupla contagem |
| reportable | pode aparecer diretamente no relatório? |
| interpretive\_use | pode ativar UIG? |
| status | candidate/pilot/approved etc. |
| version | versão da definição |

Uma diferença importante:

**Nem toda variável calculada será uma evidência interpretável.**

Algumas existirão apenas para pesquisa e controle.

# **2. Estados interpretativos**

Antes do dicionário, precisamos padronizar os estados.

Não vou utilizar imediatamente:

baixo / médio / alto

porque ainda não temos dados normativos que justifiquem cortes.

No Piloto 1.0 teremos estados internos provisórios como:

| **Código** | **Significado** |
| --- | --- |
| UNCLASSIFIED | valor calculado, mas ainda sem classificação |
| WEAK\_SIGNAL | sinal preliminar |
| RELEVANT | evidência suficientemente presente segundo regra piloto |
| CONSISTENT | aparece de modo recorrente no conjunto pertinente |
| CONTEXTUAL | sinal particularmente associado a determinado contexto |
| CONTRADICTORY | evidências relevantes apontam em direções incompatíveis |
| INSUFFICIENT | dados insuficientes para interpretação |

Os critérios numéricos que transformam um valor em RELEVANT ou CONSISTENT ainda serão **versionados e testados no piloto**.

Não vamos fingir que esses cortes já foram validados.

# **3. PRC™ — evidências oficiais**

Aqui precisamos preservar a diferença entre:

**escolha forçada** e **avaliação independente**.

## **Camada principal**

| **Código** | **Evidência** | **Métrica** | **Reportável** |
| --- | --- | --- | --- |
| PRC.V.FORCED | preferência relativa Visual | frequência nas 8 escolhas forçadas | Sim |
| PRC.A.FORCED | preferência relativa Auditiva | frequência | Sim |
| PRC.C.FORCED | preferência relativa Cinestésica | frequência | Sim |
| PRC.V.INDEPENDENT | utilidade visual declarada | média 1–5 | Sim |
| PRC.A.INDEPENDENT | utilidade auditiva declarada | média 1–5 | Sim |
| PRC.C.INDEPENDENT | utilidade cinestésica declarada | média 1–5 | Sim |

Essas seis métricas **não serão automaticamente fundidas**.

# **4. Evidências derivadas de PRC**

Também poderemos produzir:

| **Código** | **Função** |
| --- | --- |
| PRC.V.CONVERGENCE | escolha forçada e avaliação independente convergem para V |
| PRC.A.CONVERGENCE | convergência em A |
| PRC.C.CONVERGENCE | convergência em C |
| PRC.MULTIMODALITY | diferentes modalidades apresentam utilidade declarada semelhante |
| PRC.CONCENTRATION | preferência relativa aparece mais concentrada em uma modalidade |
| PRC.DIVERGENCE | escolha forçada e avaliação independente contam histórias diferentes |

Mas estas são **evidências derivadas**, não novas características psicológicas.

Por exemplo:

PRC.MULTIMODALITY

não significa:

“essa pessoa é multimodal.”

Significa apenas que, **naquela aplicação**, diferentes recursos receberam avaliações semelhantes.

# **5. Grupos de independência PRC**

Precisamos registrar:

PRC\_FORCED

PRC\_INDEPENDENT

Esses dois grupos são relacionados, mas vêm de formatos de resposta diferentes.

Portanto uma convergência entre ambos pode oferecer evidência adicional.

Já:

PRC.V.FORCED

e

PRC.A.FORCED

não são independentes.

Uma escolha em V necessariamente reduz oportunidade para A/C naquela pergunta.

Isso precisa estar explícito no sistema.

# **6. PC — quatro dimensões principais**

Teremos:

| **Código** | **Construto** |
| --- | --- |
| PC.D | Dominância |
| PC.I | Influência |
| PC.S | Estabilidade |
| PC.C | Conformidade |

Métrica principal no Piloto:

quantidade/frequência relativa de escolhas associadas a cada padrão nos 24 itens.

São **reportáveis**.

Porém:

PC.D = 0,375

não significa 37,5% da personalidade.

É apenas uma métrica do instrumento.

# **7. Facetas PC — Dominância**

| **Código** | **Faceta** |
| --- | --- |
| PC.D.ASSERTIVENESS | Assertividade |
| PC.D.DECISION\_SPEED | Velocidade decisória |
| PC.D.CONFRONTATION | Enfrentamento |
| PC.D.AUTONOMY | Autonomia |
| PC.D.RESULT\_ORIENTATION | Orientação a resultado |

No Piloto 1.0:

**não serão necessariamente exibidas como notas individuais.**

Servirão principalmente para:

contexto, modulação, precedência e UIGs.

# **8. Facetas PC — Influência**

| **Código** | **Faceta** |
| --- | --- |
| PC.I.EXPRESSIVENESS | Expressividade |
| PC.I.SOCIABILITY | Sociabilidade |
| PC.I.PERSUASION | Persuasão |
| PC.I.ENTHUSIASM | Entusiasmo |
| PC.I.MOBILIZATION | Mobilização |

Novamente: facetas são inicialmente instrumentos de **cobertura e interpretação**, não necessariamente subescalas psicometricamente independentes.

# **9. Facetas PC — Estabilidade**

| **Código** | **Faceta** |
| --- | --- |
| PC.S.PATIENCE | Paciência |
| PC.S.COOPERATION | Cooperação |
| PC.S.CONSTANCY | Constância |
| PC.S.PREDICTABILITY | Previsibilidade |
| PC.S.RELATIONAL\_MAINTENANCE | Manutenção relacional |

# **10. Facetas PC — Conformidade**

| **Código** | **Faceta** |
| --- | --- |
| PC.C.ANALYSIS | Análise |
| PC.C.PRECISION | Precisão |
| PC.C.CRITERION | Critério |
| PC.C.QUALITY | Qualidade |
| PC.C.CAUTION | Cautela |

# **11. Um cuidado importante com as facetas**

Não quero que o software apresente:

Assertividade = 81
Autonomia = 74
Persuasão = 68...

só porque conseguimos calcular alguma coisa.

Com poucos itens por faceta, essa precisão seria enganosa.

Portanto no Piloto:

### **Dimensão PC**

Pode gerar escore principal.

### **Faceta PC**

Pode produzir sinal contextual.

Isso ficará registrado como:

reportable = false

interpretive\_use = true

Pelo menos inicialmente.

# **12. Evidências relativas entre dimensões PC**

Agora entram métricas muito úteis:

| **Código** | **Descrição** |
| --- | --- |
| PC.P1 | dimensão com maior ocorrência |
| PC.P2 | segunda maior |
| PC.GAP12 | diferença P1 – P2 |
| PC.GAP23 | diferença P2 – P3 |
| PC.RANKING | ordenação das quatro dimensões |
| PC.ENTROPY | distribuição/concentração exploratória |
| PC.BALANCE | métrica exploratória de uniformidade |

Mas:

P1 **não será automaticamente chamado de perfil predominante**.

Primeiro precisamos saber o tamanho do gap e o comportamento da distribuição.

# **13. Grupos de independência PC**

Aqui a situação é mais delicada porque todos os padrões vêm dos mesmos 24 itens.

Portanto:

PC\_GENERAL

é um único grande grupo de origem.

As facetas possuem subconjuntos:

PC\_D\_AUTONOMY

PC\_D\_CONFRONTATION

PC\_C\_CRITERION

...

Mas o sistema precisa saber quais itens se sobrepõem.

Em vez de simplesmente declarar independência, teremos:

source\_items[]

e poderemos calcular o grau de sobreposição.

Isso é superior a uma etiqueta binária independente/não independente.

# **14. Proponho uma métrica futura de sobreposição**

Não necessariamente reportável:

### **EVIDENCE.OVERLAP**

Se duas evidências A e B utilizam conjuntos de itens:

A = {1, 2, 3, 4}

B = {3, 4, 5}

temos interseção real.

O Engine poderá calcular conceitualmente:

itens compartilhados / itens totais envolvidos.

Não precisamos definir agora qual sobreposição é “excessiva”.

Mas precisamos armazenar os dados para poder fazê-lo.

# **15. Contextos PC**

Além das dimensões/facetas, armazenaremos contexto de cada item.

Vocabulário fechado:

DECISION

COMMUNICATION

DELEGATION

PRESSURE

CONFLICT

CHANGE

RELATIONSHIP

EXECUTION

Assim poderemos produzir sinais como:

PC.D.CONTEXT.DECISION

ou:

PC.C.CONTEXT.EXECUTION.

Mas atenção:

Esses resultados serão inicialmente **exploratórios**.

Não criaremos 32 novas “subpersonalidades”.

# **16. DR™ — quatro evidências principais**

Aqui a arquitetura é limpa.

| **Código** | **Significado** |
| --- | --- |
| DR.SPEED | velocidade declarada da reação |
| DR.IMPACT | impacto funcional percebido |
| DR.PERSISTENCE | duração/persistência da reação |
| DR.EXTERNALIZATION | manifestação externa percebida |

Cada eixo terá:

**3 itens**

→ escore bruto

→ transformação 0–100.

# **17. Direções oficiais DR**

Precisamos congelar semanticamente:

### **DR.SPEED**

0 → mais gradual
100 → mais imediata

### **DR.IMPACT**

0 → menor interferência funcional percebida
100 → maior interferência funcional percebida

### **DR.PERSISTENCE**

0 → tende a dissipar mais rapidamente
100 → tende a permanecer por mais tempo

### **DR.EXTERNALIZATION**

0 → menos perceptível externamente
100 → mais perceptível externamente

Essa definição seguirá junto ao dado para evitar interpretações erradas.

# **18. Estados DR**

No futuro talvez tenhamos:

baixo / intermediário / alto.

Mas no Piloto manteremos prioritariamente:

**escore contínuo** + **classificação experimental versionada**.

Isso é importante porque podemos descobrir que a distribuição real não é simétrica.

Por exemplo, talvez EXTERNALIZATION concentre grande parte das pessoas entre 35–65.

Logo, cortes intuitivos 33/66 podem ser péssimos.

# **19. Evidências derivadas de DR**

Podemos criar configurações, sem torná-las novos “tipos”.

Exemplos:

| **Código** | **Combinação** |
| --- | --- |
| DR.CONFIG.FAST\_HIGH\_IMPACT | velocidade + impacto elevados |
| DR.CONFIG.FAST\_LOW\_EXTERNAL | velocidade elevada + externalização baixa |
| DR.CONFIG.HIGH\_PERSIST\_LOW\_EXTERNAL | persistência elevada + externalização baixa |
| DR.CONFIG.GRADUAL\_HIGH\_PERSIST | velocidade gradual + persistência elevada |
| DR.CONFIG.FAST\_LOW\_PERSIST | velocidade elevada + persistência baixa |

Essas configurações podem ativar UIGs.

Mas o relatório principal continua mostrando os quatro eixos.

# **20. E os quatro temperamentos?**

Não entrarão no Dicionário Principal de Evidências do Motor 1.0.

Teremos uma camada separada:

# **HISTORICAL\_REFERENCE**

Com possíveis códigos futuros:

HR.CHOLERIC

HR.SANGUINE

HR.PHLEGMATIC

HR.MELANCHOLIC

Porém:

interpretive\_use = false

no Motor Piloto 1.0.

Ou seja:

eles não poderão ativar recomendações.

No máximo, no futuro, poderão sustentar uma seção histórica/educacional.

Essa é uma decisão importante.

# **21. Evidências de qualidade da aplicação**

Além das evidências sobre funcionamento, precisamos de outra família:

# **AQ — Assessment Quality**

| **Código** | **Função** |
| --- | --- |
| AQ.COMPLETION | aplicação concluída |
| AQ.RESPONSE\_TIME | tempo total |
| AQ.ITEM\_TIME\_PATTERN | padrão de tempo por item |
| AQ.REVISIONS | alterações de resposta |
| AQ.COHERENCE | coerência entre itens relacionados |
| AQ.VARIABILITY | variabilidade de respostas |
| AQ.QUALITY\_FLAG | sinalizador geral de possíveis problemas |

Estas métricas:

**não descrevem personalidade.**

Servem para avaliar:

quanta confiança podemos depositar na interpretação daquela aplicação.

# **22. Nunca teremos “SINCERITY\_SCORE”**

Quero congelar isso explicitamente.

Não haverá:

sinceridade 73%.

Não temos capacidade de medir diretamente sinceridade pela estrutura proposta.

No máximo teremos:

padrão de respostas com determinada coerência/variabilidade.

Essa é uma distinção ética e metodológica importante.

# **23. FE — Força de Evidência**

Outra família independente:

FE.E1

FE.E2

FE.E3

Mas tecnicamente isso não pertence à pessoa.

Pertence à **interpretação**.

Logo:

UIG-FDB-006 pode estar em E2.

Enquanto UIG-COM-001 pode estar em E3.

No mesmo relatório.

Não teremos simplesmente:

“Seu teste tem confiança 87%.”

# **24. AC — Application Consistency**

Já a aplicação poderá possuir uma classificação mais global.

Algo conceitualmente como:

AC.INTERPRETABLE

AC.CAUTION

AC.LOW\_CONFIDENCE

Ainda não definiremos os cortes.

E provavelmente a interface deve usar uma linguagem amigável, não alarmista.

Exemplo futuro:

“Alguns padrões apareceram de maneira bastante variável entre situações. Por isso, determinadas conclusões devem ser tratadas como hipóteses de observação.”

Muito melhor que:

“Teste inválido.”

# **25. Consolidando o vocabulário oficial**

Nosso Motor passa a reconhecer cinco famílias principais de informação:

| **Família** | **Conteúdo** |
| --- | --- |
| **PRC** | preferência de representação/comunicação |
| **PC** | padrões comportamentais |
| **DR** | dinâmica de reação |
| **AQ/AC** | qualidade e interpretabilidade da aplicação |
| **FE** | força de cada interpretação |

E uma camada auxiliar:

**HR — Historical Reference**, sem poder decisório no Piloto.

# **26. Exemplo real de uma evidência completa**

****evidence\_code:

DR.EXTERNALIZATION

lens:

DR

level:

DIMENSION

metric\_type:

ORDINAL\_NORMALIZED

direction:

0 = LESS\_EXTERNALLY\_PERCEIVABLE

100 = MORE\_EXTERNALLY\_PERCEIVABLE

source\_items:

TH-003

TH-012

TH-013

context\_scope:

PRESSURE

FEEDBACK

CONFLICT

GENERAL\_REACTION

independence\_group:

DR\_EXTERNALIZATION

reportable:

true

interpretive\_use:

true

status:

PILOT

version:

0.1

Isso é suficientemente claro para banco de dados e código.

# **27. Outro exemplo: faceta**

****evidence\_code:

PC.D.AUTONOMY

lens:

PC

level:

FACET

construct:

DOMINANCE

facet:

AUTONOMY

source\_items:

PC-007

PC-027

[demais itens após congelamento final]

reportable:

false

interpretive\_use:

true

context\_scope:

DELEGATION

EXECUTION

status:

PILOT

Observe:

isso impede que um desenvolvedor futuramente decida sozinho mostrar:

“Autonomia: 92%.”

O próprio dicionário diz:

reportable = false.

# **28. E um exemplo de evidência derivada**

****evidence\_code:

PRC.V.CONVERGENCE

type:

DERIVED

requires:

PRC.V.FORCED

PRC.V.INDEPENDENT

reportable:

false

interpretive\_use:

true

purpose:

Strengthen visual communication interpretation

independence\_requirement:

DISTINCT\_RESPONSE\_FORMATS

Excelente para o UIG Engine.

# **29. Agora conseguimos fechar uma importante regra de software**

**UIGs não podem consultar respostas brutas diretamente.**

Isso é fundamental.

A sequência será:

**item → scoring → Evidence Dictionary → evidence → UIG**

Nunca:

**item → UIG.**

Por quê?

Porque se mudarmos posteriormente a forma de pontuar PC-007, não precisamos reescrever quarenta regras interpretativas.

Há uma camada intermediária estável.

# **30. E UIGs também não consultam texto**

Nada como:

if answer contains "liberdade":

Isso seria péssimo.

UIG só conhece:

PC.D.AUTONOMY = CONSISTENT

O significado da alternativa pertence ao **Score Engine**, não ao Motor de interpretação.

# **31. O Dicionário também nos dá uma proteção contra “feature creep”**

Imagine que daqui a seis meses alguém diga:

“Vamos colocar resiliência no relatório.”

A pergunta será:

**Onde está RESILIENCE no Dicionário Oficial de Evidências?**

Não existe.

Então:

o MGH atual não mede isso.

Se quisermos medir, precisamos:

**definir construto → criar itens → pilotar → pontuar → validar → adicionar ao dicionário.**

Não basta acrescentar uma frase bonita ao relatório.

Essa disciplina pode proteger muito o MGH ao longo dos anos.

# **32. Status ao final da Etapa 2.12**

Agora possuímos um vocabulário computacional formal composto por:

**6 métricas-base PRC**

**4 dimensões PC**

**20 facetas PC**

**métricas relativas PC**

**8 contextos**

**4 dimensões DR**

**configurações derivadas DR**

**métricas AQ/AC**

**níveis FE**

**camada histórica HR isolada**

mais:

**origem, independência, sobreposição, reportabilidade e permissão interpretativa.**

A metodologia agora sabe **quais palavras o próprio Motor tem permissão para entender**.

# **ETAPA 2.13 — CONGELAMENTO DA MATRIZ DE PONTUAÇÃO**

Agora chegamos a uma etapa inevitável.

Temos:

**itens → mas precisamos registrar exatamente o que cada alternativa produz.**

Na próxima etapa construiremos a **Scoring Matrix MGH-P1.0**, item por item.

Exemplo:

| **Item** | **Resposta** | **Evidência** | **Pontuação** |
| --- | --- | --- | --- |
| PC-001 | A | PC.D | +1 |
| PC-001 | B | PC.I | +1 |
| PC-001 | C | PC.S | +1 |
| PC-001 | D | PC.C | +1 |

Mas acrescentaremos também:

**faceta**, **contexto**, **polaridade**, **randomizável ou não**, **grupo de consistência**, **versão da chave** e **regras para PRC/DR**.

Esse será o primeiro momento em que poderemos pegar as **48 perguntas do MGH Piloto 1.0 e construir uma tabela completa dizendo exatamente o que acontece matematicamente quando alguém clica em cada resposta.**

E depois dessa matriz, estaremos muito perto de ter um **MGH Piloto 1.0 realmente aplicável e calculável**, ainda que sem escrever o aplicativo.

Vamos. Agora chegamos à etapa em que o **MGH Piloto 1.0 deixa de ser uma arquitetura e passa a existir como questionário aplicável**.

# **ETAPA 2.14 — BLUEPRINT FINAL DO MGH™ PILOTO 1.0**

Vou congelar primeiro algumas decisões de experiência.

O **P1.0 terá ordem fixa dos 48 cenários**. Não vamos randomizar a ordem do questionário nesta primeira versão, porque quero que todos os participantes passem pela mesma experiência e que os pares de coerência permaneçam deliberadamente afastados. Mais adiante poderemos testar randomização controlada de blocos.

Nas questões PC e PRC de escolha, **as alternativas serão randomizadas**. Na DR, nunca. Nas quatro telas PRC de avaliação independente, os três recursos V/A/C podem trocar de posição na tela, mas a escala **1 → 5 permanece fixa**.

A barra de progresso será calculada por **cenário**, não por resposta pontuável:

cenários concluídos / 48

Assim, uma tela PRC que contém três avaliações continua valendo uma etapa visual. Para o participante, são 48 situações; tecnicamente, armazenamos 56 respostas pontuáveis.

## **Abertura oficial**

### **TELA 0 — BOAS-VINDAS**

**MAPA DE GOVERNO HUMANO™**

Este instrumento apresenta situações relacionadas à maneira como você costuma se comunicar, agir e reagir no ambiente profissional.

Não existem respostas certas ou erradas.

Responda pensando principalmente em **como você costuma agir hoje**, e não em como acredita que deveria agir.

Quando mais de uma alternativa parecer adequada, escolha aquela que **mais frequentemente se aproxima do que acontece naturalmente com você**.

Algumas situações poderão parecer semelhantes. Isso é intencional: contextos diferentes podem produzir respostas diferentes.

Responda com naturalidade. Não tente construir um perfil.

O MGH™ não avalia inteligência, caráter, competência profissional ou saúde mental.

Botão:

**INICIAR MEU MAPA**

# **Contexto profissional — não pontuado**

Antes dos 48 cenários:

**Posição profissional:** Proprietário/Sócio | Diretor | Gestor | Líder | Colaborador | Outro

**Área principal:** Comercial | Operações | Financeiro | Pessoas/RH | Marketing | Administrativo | Produção | Tecnologia | Outra

**Tempo na função atual:** menos de 1 ano | 1–3 | 4–7 | 8–15 | mais de 15 anos

**Você lidera pessoas diretamente?** Sim | Não

Se sim: **1–5 | 6–10 | 11–20 | 21–50 | 51+**

**Faixa etária:** opcional.

Contexto da aplicação fica congelado como:

**MEU COMPORTAMENTO PROFISSIONAL ATUAL**

Nada disso altera diretamente o escore MGH. São metadados para análise posterior.

# **Ordem definitiva dos 48 cenários**

A distribuição foi construída em **12 blocos invisíveis de quatro telas**:

**2 PC + 1 PRC + 1 DR**

O participante não vê esses blocos.

## **01 — PC-001 | Decisão**

Você precisa tomar uma decisão importante, mas ainda não possui todas as informações que gostaria. O que mais se aproxima da sua reação?

A. Tomo a decisão com o que tenho e ajusto o caminho se necessário.
B. Converso com algumas pessoas antes para ampliar minha percepção.
C. Prefiro aguardar um pouco para reduzir a possibilidade de erro.
D. Busco primeiro os dados que considero indispensáveis para estabelecer um critério.

**RG-02 — primeira metade.**

## **02 — PRC-001 | Comunicação**

Alguém precisa explicar a você um processo relativamente complexo. Qual recurso você provavelmente pediria primeiro?

A. “Consegue me mostrar isso em um fluxo ou exemplo visual?”
B. “Me explica do começo ao fim?”
C. “Podemos fazer uma vez juntos para eu acompanhar na prática?”

## **03 — TH-003 | Externalização**

Quando algo no trabalho realmente incomoda você:

A. Normalmente as pessoas percebem imediatamente.
B. Minha reação aparece, embora eu tente controlá-la.
C. Nem sempre fica claro para os outros o quanto aquilo me afetou.
D. Geralmente consigo manter a reação pouco perceptível externamente.

**Ordem fixa. RG-06 — primeira metade.**

## **04 — PC-009R | Sociabilidade**

Em um grupo de trabalho recém-formado, no qual ninguém se conhece bem, o que tende a acontecer com você nas primeiras interações?

A. Rapidamente começo a direcionar a conversa para o que precisamos realizar.
B. Naturalmente inicio conversas e crio conexão com várias pessoas.
C. Aproximo-me gradualmente e vou construindo confiança com algumas pessoas.
D. Primeiro observo como as pessoas funcionam antes de me posicionar mais.

## **05 — TH-001 | Velocidade**

Algo importante sai completamente diferente do planejado. Quando você percebe o problema, sua reação costuma:

A. aparecer quase imediatamente.
B. surgir rapidamente, mas depois de alguns segundos para entender o que aconteceu.
C. aparecer depois que consigo organizar melhor a situação.
D. levar algum tempo até que eu perceba claramente como aquilo me afetou.

## **06 — PC-021 | Critério**

Você delega uma tarefa que pode ser executada de várias maneiras. O que tende a considerar mais importante?

A. Que a pessoa alcance o resultado esperado.
B. Que ela consiga envolver bem quem for necessário.
C. Que execute de maneira sustentável e integrada à rotina.
D. Que respeite os critérios essenciais definidos para a entrega.

**RG-04 — primeira metade.**

## **07 — PRC-004R | Avaliação independente**

Depois de uma reunião com muitas informações, quanto cada recurso costuma ajudá-lo a consolidar seu entendimento?

Avaliar **separadamente de 1 a 5**:

* Rever os principais pontos organizados visualmente.
* Retomar verbalmente as principais ideias.
* Aplicar algum dos pontos discutidos em uma situação concreta.

**1 = ajuda muito pouco | 5 = ajuda muito.**

## **08 — PC-014 | Paciência**

Uma pessoa da equipe demora mais do que você esperava para compreender uma orientação. O que tende a acontecer?

A. Vou rapidamente ao ponto e tento acelerar o entendimento.
B. Mudo a forma de explicar e tento manter a pessoa engajada.
C. Dou espaço e acompanho até perceber que ela compreendeu.
D. Procuro identificar exatamente onde está a dúvida.

## **09 — PC-007 | Autonomia**

Seu gestor entrega um objetivo importante, mas deixa a forma de execução em aberto. O que tende a acontecer?

A. Gosto da liberdade e começo a definir meu próprio caminho.
B. Procuro trocar ideias com outras pessoas antes de estruturar a execução.
C. Busco entender como normalmente aquilo é realizado antes de alterar a forma.
D. Defino critérios e etapas antes de começar.

**RG-01 — primeira metade.**

## **10 — PRC-003 | Decisão**

Você está avaliando uma nova ferramenta para a empresa. Depois de entender a proposta básica, o que mais ajuda você a formar uma opinião?

A. Ver claramente telas, recursos e funcionamento.
B. Conversar com alguém que consiga explicar as possibilidades e limitações.
C. Testar a ferramenta em uma situação real.

## **11 — TH-010 | Persistência**

Depois de cometer um erro profissional que considera importante:

A. Corrijo e normalmente deixo o episódio para trás rapidamente.
B. Penso nele por algum tempo e depois sigo.
C. Volto mentalmente ao episódio várias vezes.
D. Posso continuar refletindo sobre aquilo durante bastante tempo.

## **12 — PC-035 | Expressividade**

Em uma reunião com várias pessoas sobre um assunto que você conhece bem, o que tende a acontecer?

A. Procuro direcionar a conversa para aquilo que precisa ser decidido.
B. Costumo verbalizar minhas ideias com espontaneidade e participar ativamente da conversa.
C. Participo quando considero necessário, sem buscar ocupar muito espaço.
D. Prefiro me posicionar quando consigo organizar suficientemente o que quero apresentar.

## **13 — TH-006 | Velocidade**

Quando alguém questiona inesperadamente uma decisão importante sua:

A. Sei quase imediatamente o que quero responder.
B. Minha reação surge rápido, embora eu organize um pouco a resposta.
C. Prefiro alguns instantes para formar minha posição.
D. Frequentemente compreendo melhor minha reação depois da situação.

## **14 — PC-018 | Manutenção relacional**

Você precisa dar um feedback difícil a alguém com quem possui uma boa relação.

A. Vou diretamente ao ponto que precisa mudar.
B. Procuro conduzir a conversa de forma aberta e envolvente.
C. Tenho cuidado especial para que a correção não prejudique a relação.
D. Estruturo exemplos concretos para deixar claro o fundamento do feedback.

## **15 — PRC-012 | Sistema novo**

Você recebe um equipamento ou sistema novo para utilizar.

A. Observo telas, demonstrações ou instruções visuais.
B. Gosto que alguém explique como funciona.
C. Prefiro começar a utilizar e aprender explorando.

## **16 — PC-019 | Análise**

Duas alternativas parecem igualmente promissoras e a decisão é relevante.

A. Escolho a que oferece maior possibilidade de avanço.
B. Converso com pessoas em quem confio para ampliar minha leitura.
C. Prefiro aquela que traz maior segurança e continuidade.
D. Comparo critérios e consequências antes de escolher.

## **17 — PC-016 | Constância**

Você começa uma atividade importante que exigirá meses de acompanhamento. O que mais tende a sustentar sua execução?

A. Ter metas desafiadoras ao longo do caminho.
B. Ter pessoas envolvidas e celebrar os avanços.
C. Estabelecer um ritmo que consiga manter regularmente.
D. Acompanhar padrões e indicadores de qualidade.

**RG-03 — primeira metade.**

## **18 — PRC-005 | Procedimento**

Você precisa compreender um procedimento que nunca executou. Qual começo parece mais natural?

A. Observar como ele funciona e visualizar suas etapas.
B. Pedir que alguém explique a lógica e a sequência.
C. Executar acompanhado e ajustar durante a prática.

## **19 — TH-012 | Externalização**

Quando está preocupado com algo importante no trabalho:

A. Normalmente as pessoas próximas percebem com facilidade.
B. Alguns sinais aparecem, mesmo que eu não fale diretamente.
C. Poucas pessoas costumam perceber.
D. Geralmente mantenho a preocupação pouco visível.

**RG-06 — segunda metade.**

## **20 — PC-010 | Persuasão**

Você acredita muito em uma ideia, mas a equipe ainda não está convencida. Qual movimento tende a surgir primeiro?

A. Apresento com clareza por que considero que devemos avançar.
B. Tento gerar entusiasmo e fazer as pessoas enxergarem as possibilidades.
C. Escuto as preocupações e procuro construir adesão gradualmente.
D. Organizo argumentos, evidências e riscos para sustentar a proposta.

## **21 — TH-004R | Impacto**

Quando ocorre um problema profissional sério e inesperado, quanto isso tende a ocupar sua atenção naquele momento?

A. Ocupa grande parte da minha atenção.
B. Ocupa bastante, embora eu continue funcionando.
C. Percebo o impacto, mas consigo manter relativamente bem o foco.
D. Normalmente interfere pouco no que estou fazendo.

## **22 — PC-028 | Critério / ambiguidade**

Você recebe uma tarefa importante com poucas orientações.

A. Começo com o que sei e esclareço dúvidas conforme avanço.
B. Procuro alguém para conversar e compreender melhor a expectativa.
C. Busco referências de como aquilo costuma ser feito.
D. Prefiro esclarecer requisitos importantes antes de começar.

**RG-04 — segunda metade.**

## **23 — PRC-011 | Expressão**

Você precisa apresentar uma ideia importante.

A. Gosto de apoiar a explicação em elementos que as pessoas possam visualizar.
B. Concentro-me principalmente na forma como vou explicar a ideia.
C. Procuro trazer demonstrações, experiências ou exemplos concretos.

## **24 — PC-012 | Mobilização**

Uma mudança necessária encontrou resistência na equipe. Qual contribuição tende a ser mais natural para você?

A. Dar direção e fazer a mudança avançar.
B. Construir energia e adesão em torno da mudança.
C. Ajudar as pessoas a atravessarem a transição.
D. Tornar os critérios e o novo funcionamento mais claros.

**50% do Mapa construído.**

## **25 — PC-002 | Enfrentamento**

Durante uma reunião, um colega discorda abertamente de uma decisão sua. Qual reação tende a acontecer primeiro?

A. Defendo minha posição diretamente e entro no mérito da discordância.
B. Tento transformar a divergência em uma conversa mais leve e aberta.
C. Procuro evitar que a discussão prejudique a relação entre as pessoas.
D. Peço que os argumentos sejam apresentados objetivamente antes de continuar.

## **26 — PRC-006R | Avaliação independente**

Ao compreender um projeto novo com várias etapas, quanto cada recurso costuma ajudá-lo a formar uma visão do conjunto?

Avaliar de 1 a 5:

* Ver um quadro mostrando etapas e conexões.
* Ouvir uma explicação sequencial do projeto.
* Percorrer um exemplo concreto do projeto acontecendo do início ao fim.

## **27 — TH-007 | Velocidade positiva**

Quando recebe uma notícia profissional muito positiva:

A. Minha reação surge imediatamente.
B. Reajo rapidamente depois de compreender a notícia.
C. A reação cresce conforme assimilo o que aconteceu.
D. Normalmente levo algum tempo para sentir plenamente o impacto.

## **28 — PC-020R | Precisão**

Uma entrega atende ao objetivo principal, mas alguns detalhes poderiam ser aprimorados. O prazo combinado termina hoje. O que tende a pesar mais na sua decisão?

A. O objetivo principal já foi atingido; prefiro concluir e avançar.
B. Como a entrega será percebida por quem irá recebê-la.
C. Preservar o compromisso assumido e evitar alterar o fluxo.
D. A relevância dos detalhes para o padrão definido para a entrega.

## **29 — TH-002 | Persistência**

Depois de uma conversa profissional bastante difícil, quando o assunto termina:

A. Normalmente consigo deixá-lo para trás rapidamente.
B. Ainda penso um pouco sobre ele, mas logo sigo adiante.
C. Costumo revisitar mentalmente alguns pontos durante algum tempo.
D. A situação pode continuar repercutindo internamente por bastante tempo.

**RG-05 — primeira metade.**

## **30 — PC-023 | Cautela**

Surge uma oportunidade profissional com potencial elevado, mas com algumas informações ainda incertas.

A. Se o potencial justificar, avanço e administro os riscos.
B. Converso com pessoas e procuro perceber o nível de confiança em torno da oportunidade.
C. Prefiro avançar progressivamente.
D. Procuro reduzir as principais incertezas antes de assumir o compromisso.

**RG-02 — segunda metade.**

## **31 — PRC-002 | Comunicação de projeto**

Você precisa explicar para sua equipe como diferentes etapas de um projeto se conectam. O que tende a fazer?

A. Montar algum esquema para mostrar a relação entre as etapas.
B. Explicar verbalmente a sequência e abrir para perguntas.
C. Usar um caso real e percorrer com a equipe o que acontece em cada etapa.

## **32 — PC-033 | Constância**

Uma atividade importante é repetitiva e seus resultados aparecem somente depois de vários meses.

A. Crio metas intermediárias para manter sensação de avanço.
B. Procuro tornar a rotina mais estimulante junto às pessoas.
C. Consigo manter um ritmo regular mesmo sem resultados imediatos.
D. Acompanho indicadores para verificar se a execução continua correta.

**RG-03 — segunda metade.**

## **33 — PC-027 | Autonomia**

Você percebe que alguém está acompanhando muito de perto uma responsabilidade que foi delegada a você.

A. Tendo a querer mais espaço para conduzir sozinho.
B. Procuro conversar para alinhar melhor nossa forma de trabalhar.
C. Não me incomoda se isso ajudar a manter o trabalho fluindo.
D. Quero entender exatamente o que está sendo acompanhado e por quê.

**RG-01 — segunda metade.**

## **34 — PRC-014I | Avaliação independente**

Ao comparar duas propostas comerciais relativamente complexas, quanto cada recurso costuma facilitar sua análise?

Avaliar de 1 a 5:

* Ver os principais elementos organizados em um quadro comparativo.
* Ouvir uma explicação clara das diferenças.
* Ver exemplos concretos ou uma simulação de como cada opção funcionaria na prática.

## **35 — TH-013 | Externalização positiva**

Quando está muito satisfeito com alguma coisa:

A. Isso costuma ficar evidente rapidamente.
B. Demonstro, embora sem grande intensidade.
C. Minha satisfação aparece de maneira mais discreta.
D. Posso estar muito satisfeito sem que os outros percebam claramente.

## **36 — PC-036 | Qualidade**

Uma entrega importante será utilizada como referência para outros trabalhos da empresa. O que tende a ganhar sua atenção primeiro?

A. Garantir que cumpra o objetivo e avance dentro do necessário.
B. Considerar como a entrega será percebida pelas pessoas envolvidas.
C. Garantir que a forma de execução possa ser sustentada pela equipe.
D. Assegurar que a entrega alcance um padrão de qualidade consistente e sem falhas relevantes.

## **37 — TH-008R | Impacto**

Durante uma situação de pressão profissional que você considera importante, quanto sua reação tende a alterar seu ritmo naquele momento?

A. Altera claramente meu ritmo.
B. Produz alguma alteração perceptível.
C. Altera pouco meu ritmo.
D. Meu ritmo tende a permanecer praticamente igual.

## **38 — PC-015 | Cooperação**

Duas pessoas importantes da equipe entram em desacordo e ambas procuram você. Qual movimento parece mais natural?

A. Levar a conversa para uma decisão.
B. Facilitar o diálogo e recuperar a energia entre elas.
C. Buscar um caminho que preserve a cooperação.
D. Separar fatos, interpretações e responsabilidades antes de avançar.

## **39 — PRC-009 | Feedback**

Você recebe um feedback sobre algo que precisa mudar. O que tende a tornar a orientação mais clara?

A. Enxergar exemplos ou comparações do que precisa mudar.
B. Conversar detalhadamente sobre a situação.
C. Experimentar uma forma diferente de fazer e perceber o resultado.

## **40 — PC-008 | Resultado**

Um projeto está atrasado e o prazo final se aproxima. Qual tende a ser sua prioridade?

A. Remover rapidamente o que estiver impedindo a entrega.
B. Mobilizar as pessoas necessárias para recuperar o ritmo.
C. Reorganizar a execução para que a equipe consiga sustentar o novo ritmo.
D. Identificar precisamente onde ocorreu o desvio antes de alterar o plano.

## **41 — PC-017 | Previsibilidade**

Um projeto que estava organizado muda de prioridade inesperadamente. Sua primeira tendência é:

A. Redirecionar rapidamente a energia para a nova prioridade.
B. Conversar com as pessoas envolvidas e reorganizar o movimento.
C. Precisar compreender como a mudança afetará compromissos e rotina.
D. Revisar informações, dependências e consequências antes de reorganizar.

## **42 — PRC-010I | Avaliação independente**

Diante de um problema com muitas informações, quanto cada recurso costuma ajudá-lo a organizar o raciocínio?

Avaliar de 1 a 5:

* Colocar as informações diante de mim de maneira visualmente estruturada.
* Desenvolver o raciocínio por meio de uma explicação ou conversa.
* Trabalhar com um caso concreto para compreender as partes do problema.

## **43 — TH-015 | Persistência**

Depois de um conflito intenso que foi resolvido:

A. Resolvido o assunto, minha reação tende a diminuir rapidamente.
B. Preciso de algum tempo, mas consigo retomar normalmente.
C. Ainda processo internamente partes da situação.
D. Mesmo resolvido, posso sentir seus efeitos por bastante tempo.

**RG-05 — segunda metade.**

## **44 — PC-029 | Assertividade**

Em uma discussão de equipe, você percebe que todos estão evitando falar sobre um problema evidente. O que tende a fazer?

A. Coloco o problema diretamente na conversa.
B. Tento criar um ambiente em que as pessoas se sintam confortáveis para falar.
C. Observo um pouco mais antes de expor algo que possa gerar tensão.
D. Procuro primeiro separar o que é fato daquilo que é percepção.

## **45 — TH-009R | Impacto positivo**

Quando recebe um reconhecimento profissional muito importante, até que ponto isso tende a ocupar sua atenção naquele momento?

A. Produz um impacto muito forte e ocupa grande parte da minha atenção.
B. O impacto é claro, embora eu consiga continuar normalmente.
C. Percebo a satisfação, mas meu ritmo muda pouco.
D. Minha atenção e meu ritmo quase não se alteram.

## **46 — PC-005 | Delegação**

Você recebe uma responsabilidade nova de seu gestor. Qual condição mais ajuda você a começar bem?

A. Saber exatamente qual resultado ele espera e ter liberdade para chegar lá.
B. Poder conversar sobre a ideia e trocar percepções antes de começar.
C. Entender como a tarefa se encaixa na rotina e com quem vou contar.
D. Ter critérios, informações e padrões suficientemente claros.

## **47 — PRC-015 | Mudança de processo**

Você precisa entender uma mudança importante em um processo da empresa. Qual recurso mais gostaria de receber?

A. O fluxo anterior e o novo apresentados visualmente.
B. Uma explicação das mudanças e seus motivos.
C. Uma simulação prática de como o novo processo funcionará.

## **48 — PC-011R | Nova ideia**

Surge uma ideia que você considera promissora para a empresa. Antes de existir qualquer plano formal, o que tende a acontecer?

A. Começo a pensar em como transformá-la rapidamente em ação.
B. Sinto vontade de conversar sobre ela e envolver outras pessoas.
C. Prefiro deixá-la amadurecer antes de movimentar o grupo.
D. Começo a questionar premissas e verificar se a ideia realmente se sustenta.

**100% — Seu Mapa foi construído.**

# **O que acontece depois da questão 48**

Não mostramos o resultado.

A próxima tela diz:

## **MAIS ALGUNS MINUTOS**

Seu Mapa de Governo Humano™ foi construído.

Antes de encerrar, gostaríamos de entender como você percebe alguns aspectos do seu próprio funcionamento profissional.

As respostas a seguir **não alteram suas respostas anteriores** e serão utilizadas para aperfeiçoar o instrumento.

Isso evita que a pessoa interprete a etapa como “segunda chance”.

# **Autoavaliação pós-instrumento — dados auxiliares**

Eu usaria inicialmente oito afirmações, todas em escala **1–5: Discordo totalmente → Concordo totalmente**.

| **Código** | **Afirmação** |
| --- | --- |
| SELF-01 | Costumo conseguir tomar decisões mesmo quando ainda existem informações faltando. |
| SELF-02 | Prefiro ter espaço para definir como executar uma responsabilidade. |
| SELF-03 | Critérios claros são importantes para eu me sentir seguro sobre uma entrega. |
| SELF-04 | As pessoas geralmente percebem quando algo no trabalho me afeta. |
| SELF-05 | Depois de situações profissionais difíceis, o assunto pode continuar presente em meus pensamentos por algum tempo. |
| SELF-06 | Organizar informações visualmente costuma me ajudar a compreendê-las. |
| SELF-07 | Conversar sobre um assunto costuma me ajudar a organizar melhor meu entendimento. |
| SELF-08 | Ver ou experimentar uma aplicação concreta costuma me ajudar a compreender melhor uma ideia. |

Esses itens **não entram no Score Engine do MGH**.

São variáveis auxiliares de pesquisa para confrontarmos, com muito cuidado, medidas indiretas e autopercepção direta.

# **Feedback do participante**

Especialmente na Onda 0, acrescentaria quatro perguntas:

**Houve alguma situação em que você teve dificuldade para escolher uma resposta?**Sim/Não. Se sim, qual?

**Houve alguma pergunta em que nenhuma alternativa representou razoavelmente o que você faria?**Sim/Não. Qual?

**Alguma pergunta pareceu confusa ou difícil de entender?**Sim/Não. Qual?

**Durante o questionário, em algum momento você percebeu que estava tentando escolher a resposta que parecia “melhor” profissionalmente?**Nunca | Algumas vezes | Várias vezes.

Essa última pergunta não é detector de mentira. Serve para estudar **desejabilidade percebida dos itens**.

# **Tela final**

**Obrigado.**

Você concluiu o MGH™ Piloto 1.0.

Esta é uma versão experimental do instrumento. Os dados desta etapa serão utilizados para analisar clareza, funcionamento dos itens, padrões de resposta e qualidade da metodologia.

O resultado experimental, quando disponibilizado, deve ser tratado como uma hipótese estruturada de observação — não como diagnóstico, avaliação de competência ou definição da pessoa.

Botão:

**FINALIZAR**

# **Regras de UX congeladas**

Nesta versão, eu manteria **uma situação por tela**. Isso reduz poluição cognitiva e nos permite medir tempo por cenário com maior precisão.

O participante pode voltar e modificar respostas **até enviar definitivamente**. O sistema preserva:

initial\_response
final\_response
revision\_count
time\_first\_view
time\_final\_submission

Mas o relatório usa somente a resposta final.

Não haverá cronômetro visível.

Não haverá:

“Você está demorando.”

Não haverá perguntas-armadilha.

Não haverá mensagem como:

“Seja sincero.”

Além da orientação inicial de naturalidade.

E não haverá qualquer pista visual indicando PRC, PC, DR, D/I/S/C ou temperamentos.

# **Barra de progresso**

Eu manteria a linguagem do próprio produto.

Em vez de:

Questão 18 de 48.

podemos mostrar discretamente:

**Seu Mapa está 37% construído.**

Isso é muito mais coerente com a experiência.

No banco:

progress = completed\_scenarios / 48

e não answered\_fields / 56.

# **O que acabamos de congelar**

Agora o **MGH-P1.0 possui uma experiência completa**, da entrada à saída:

**Abertura → Contexto profissional → 48 cenários intercalados → 56 respostas pontuáveis → registro comportamental da aplicação → 8 autoavaliações auxiliares → feedback metodológico → encerramento.**

E, pela primeira vez desde que começamos este projeto, já existe material suficiente para eu sentar diante de uma pessoa, entregar essa sequência e dizer:

**“Responda o MGH.”**

Ainda não precisamos de aplicativo para fazer isso.

Aliás, considero que o próximo passo deveria acontecer **antes de qualquer código**.

# **ETAPA 2.15 — PROTOCOLO DE PILOTAGEM MGH™**

Agora precisamos desenhar exatamente **como vamos testar esse instrumento em seres humanos**:

quem participa primeiro; quantas pessoas; como selecionamos; o que observamos; como conduzimos entrevista cognitiva; quais dados coletamos; quais métricas fazem um item sobreviver ou morrer; como registrar problemas; critérios para avançar Onda 0 → Onda 1 → Onda 2; e, sobretudo, **como impedir que nossa vontade de ver o MGH funcionando contamine a análise dos resultados**.

Essa etapa será o manual científico-operacional para colocar o **P1.0 diante das primeiras pessoas reais**.

Vamos. Agora entramos na etapa em que o MGH™ começa a ser confrontado com algo que nenhum desenho teórico consegue substituir: **pessoas reais respondendo perguntas reais**.

E, antes de colocar o P1.0 em campo, encontrei um ponto metodológico que merece entrar oficialmente no projeto porque ele afeta principalmente nosso PC.

# **ETAPA 2.15 — PROTOCOLO DE PILOTAGEM MGH™**

### **Protocolo científico-operacional — PILOT-P1.0**

Os *Standards for Educational and Psychological Testing*, produzidos conjuntamente por AERA, APA e NCME, tratam a validade como um conjunto de evidências que inclui conteúdo do teste, processo de resposta, estrutura interna e relações com outras variáveis, entre outros aspectos. É exatamente essa lógica que vamos seguir: **não existe um único teste estatístico que “valide o MGH”**. Construiremos evidências progressivamente. [<u>NCME</u>](https://ncme.org/resources/books/testing-standards/?utm_source=chatgpt.com)

# **1. Uma correção metodológica importante antes do primeiro participante**

Nosso PC utiliza situações em que a pessoa precisa escolher entre uma alternativa D, I, S ou C.

Isso produz dados **ipsativos** na pontuação clássica: se uma pessoa aumenta D, necessariamente deixa de pontuar I, S ou C naquele item. Portanto, as quatro dimensões não são independentes.

Isso tem consequências importantes.

No P1.0, podemos perfeitamente utilizar:

D = 9 escolhas
I = 7
S = 3
C = 5

para estudar **a configuração relativa dentro daquela pessoa**.

Mas não devemos concluir:

“Alisson tem mais Dominância que João porque marcou 9 e João marcou 7.”

Também não devemos aplicar ingenuamente análises clássicas como alfa de Cronbach, correlações entre as quatro dimensões ou fatoração como se fossem escalas Likert independentes. A literatura sobre *multidimensional forced-choice* mostra justamente que a pontuação ipsativa tradicional impõe dependências entre dimensões e dificulta comparações normativas entre indivíduos; modelos mais avançados, como abordagens IRT para forced-choice, existem, mas também têm pressupostos e limitações que precisaremos avaliar mais adiante. [<u>PMC</u>](https://pmc.ncbi.nlm.nih.gov/articles/PMC10915382/?utm_source=chatgpt.com)

Isso não invalida o que construímos.

Na verdade, confirma uma decisão inteligente que já havíamos tomado:

**P1.0 primeiro investiga funcionamento e perfil intraindividual. A normatização vem muito depois.**

E nossa PRC já possui uma vantagem adicional: além das escolhas forçadas, criamos avaliações independentes 1–5 justamente para não depender somente de dados relativos.

# **2. O que o Piloto precisa descobrir**

O Piloto não deve responder:

“O MGH está certo?”

Essa pergunta é ampla demais.

Ele deve produzir evidências separadas sobre perguntas menores.

| **Área** | **O que queremos descobrir** |
| --- | --- |
| Compreensão | As pessoas entendem o cenário como pretendíamos? |
| Recuperação | Conseguem pensar em comportamento real para responder? |
| Julgamento | Conseguem diferenciar as alternativas? |
| Resposta | Existe uma opção razoavelmente representativa? |
| Desejabilidade | Alguma alternativa parece claramente “mais profissional”? |
| Discriminação | As pessoas realmente escolhem opções diferentes? |
| Redundância | Dois itens estão fazendo praticamente o mesmo trabalho? |
| Tempo | Existem itens excessivamente trabalhosos? |
| Revisão | Quais perguntas provocam muita troca de resposta? |
| Estrutura | Os itens relacionados apresentam padrões coerentes? |
| Convergência | Medidas diferentes relacionadas ao mesmo fenômeno conversam entre si? |
| Utilidade | As interpretações produzidas posteriormente são compreensíveis e úteis? |

Essa decomposição é crucial.

# **3. O Piloto será conduzido em ondas**

Eu congelaria quatro estágios.

| **Estágio** | **Participantes** | **Função principal** |
| --- | --- | --- |
| **Onda 0 — Laboratório Cognitivo** | 8–12 | Compreensão das perguntas |
| **Onda 1 — Piloto Inicial** | 40–60 | Funcionamento dos itens |
| **Onda 2 — Piloto Ampliado** | ~200–400 | Estrutura e propriedades psicométricas iniciais |
| **Onda 3 — Validação** | definida pelo modelo estatístico | Evidências robustas e normatização eventual |

Esses números **não são leis psicométricas**. A amostra necessária na Onda 2/3 dependerá das análises que escolhermos, particularmente porque o forced-choice exige tratamento próprio. Não quero usar aquela regra simplista de “10 pessoas por pergunta” como se resolvesse nosso desenho.

Na Onda 3, eu já gostaria de ter **um psicometrista formalmente envolvido**.

# **4. ONDA 0 — LABORATÓRIO COGNITIVO**

Aqui não estamos testando estatística.

Estamos testando:

**o que passa pela cabeça da pessoa quando ela responde.**

Cognitive interviewing é justamente uma técnica usada para administrar perguntas em desenvolvimento e coletar informação adicional sobre como o respondente compreendeu e produziu sua resposta, ajudando a identificar quando a pergunta não está gerando a informação pretendida. [<u>DOI</u>](https://doi.org/10.1093/poq/nfm006?utm_source=chatgpt.com)

Eu começaria com aproximadamente **8–12 pessoas**.

Não gostaria que fossem todas seus amigos, seus mentorados ou empresários muito parecidos.

Quero diversidade suficiente para quebrar nossas perguntas.

Por exemplo:

**proprietário/sócio | gestor | líder | colaborador**

e pessoas de áreas distintas.

Não precisamos equilibrar estatisticamente a Onda 0. Precisamos de **variação cognitiva e profissional**.

# **5. Você será um dos primeiros participantes**

Mas com uma regra.

Você **não será o gabarito do MGH**.

Primeiro você responde normalmente.

Depois fazemos a entrevista cognitiva.

Não vamos alterar uma pergunta porque:

“O resultado disse C, mas eu sei que sou D.”

Isso seria contaminar o instrumento para fazer com que ele confirme nossa expectativa.

Sua experiência será extremamente valiosa para identificar:

“Fiquei dividido entre essas duas.”

“Não faria nenhuma dessas.”

“Interpretei essa frase de outra maneira.”

“Essa resposta parece claramente melhor.”

Mas não para dizer:

“A chave correta deve ser esta porque comigo é assim.”

# **6. Como conduzir cada sessão da Onda 0**

Eu não usaria *think aloud* durante a primeira execução.

Quero que a pessoa responda o MGH naturalmente, porque precisamos preservar também:

**tempo de resposta; hesitação; revisões; experiência real.**

Depois da conclusão, fazemos uma **entrevista cognitiva retrospectiva**.

Para itens relevantes, perguntamos coisas como:

“O que você entendeu que essa pergunta estava perguntando?”

“Em que situação real você pensou para responder?”

“Você ficou entre quais alternativas?”

“Por que escolheu esta e não aquela?”

“Alguma alternativa pareceu claramente mais bonita ou profissional?”

“Existe uma resposta que representaria melhor você e não estava aqui?”

Essas respostas serão quase tão valiosas quanto o clique original.

# **7. Ficha de Auditoria Cognitiva**

Cada pergunta poderá receber estes sinais:

| **Código** | **Problema** |
| --- | --- |
| **CMP** | problema de compreensão |
| **AMB** | ambiguidade |
| **NFA** | nenhuma alternativa adequada |
| **TWO** | duas alternativas percebidas como equivalentes |
| **DES** | desejabilidade social evidente |
| **CTX** | contexto insuficiente ou interpretado de maneiras muito diferentes |
| **VOC** | palavra/expressão problemática |
| **RED** | percepção de repetição |
| **COG** | esforço cognitivo excessivo |
| **MAP** | resposta escolhida não representa aquilo que imaginávamos medir |

Esse último é especialmente importante.

Se alguém escolhe a alternativa que classificamos como D, mas explica:

“Escolhi porque tenho medo de incomodar as pessoas.”

há alguma coisa errada no item ou na nossa chave.

# **8. Não usaremos percentuais rígidos na Onda 0**

Com dez pessoas, dizer:

“20% não compreenderam, portanto eliminar”

seria falso rigor.

Se **duas pessoas independentes interpretarem um item de maneira inesperada**, já é motivo para investigar.

Se uma única pessoa levantar um problema conceitualmente grave, também pode ser suficiente.

As decisões continuarão:

**MANTER | REESCREVER | RESERVA | RETIRAR**

Mas acompanhadas de justificativa.

# **9. Regra de ouro durante uma onda**

Uma vez iniciada a Onda 0:

# **NÃO EDITAMOS SILENCIOSAMENTE O P1.0.**

Se descobrirmos um problema importante no PC-014, registramos.

Se for suportável, terminamos a onda e corrigimos depois.

Se for grave a ponto de invalidar respostas futuras, interrompemos e criamos:

**MGH-P1.0a**

ou

**MGH-P1.1**

Nunca teremos pessoas respondendo perguntas diferentes sob a mesma versão.

Isso será vital daqui a alguns anos.

# **10. Registro de alterações**

Toda alteração deve produzir algo como:

| **Campo** | **Exemplo** |
| --- | --- |
| Item | PC-014 |
| Versão anterior | P1.0 |
| Problema | ambiguidade |
| Evidência | entrevistas 03, 07 e 09 |
| Alteração | nova redação |
| Responsável | equipe MGH |
| Nova versão | P1.1 |
| Data | xx/xx/xxxx |
| Impacta chave? | Não |
| Impacta interpretação? | Não |

Isso cria nosso primeiro:

# **CHANGE LOG MGH™**

# **11. Onda 0 também deve medir duração real**

Não vou mais assumir “10–15 minutos”.

Vamos descobrir.

Precisamos observar:

**tempo total;**

**mediana por cenário;**

**itens com tempo muito acima do padrão individual;**

**revisões;**

**abandono;**

**cansaço percebido no final.**

Se o tempo real médio for 19 minutos, não vamos escrever no produto:

“leva 10 minutos.”

O instrumento deve obedecer aos dados, não ao marketing.

# **12. Critério para sair da Onda 0**

Eu só avançaria quando tivermos quatro condições simultâneas:

| **Condição** | **Pergunta** |
| --- | --- |
| Compreensão | Os principais itens são interpretados aproximadamente como planejado? |
| Cobertura | As pessoas conseguem encontrar respostas plausíveis? |
| Desejabilidade | Não há alternativas sistematicamente percebidas como “certas”? |
| Experiência | A aplicação é concluível sem fadiga ou confusão excessiva? |

Se ainda existirem problemas estruturais, fazemos **Onda 0B**.

Não existe vergonha nenhuma nisso.

# **13. ONDA 1 — PILOTO INICIAL**

Aqui mudamos de pergunta.

Não queremos mais perguntar apenas:

“As pessoas entenderam?”

Agora perguntamos:

**“Como os itens estão se comportando?”**

Eu buscaria algo como **40–60 participantes**.

Ainda não é amostra para provar estrutura psicométrica.

É amostra para descobrir itens suspeitos.

# **14. O que analisaremos no PC**

Como o PC é forced-choice, faremos inicialmente análises descritivas.

Para cada item:

| **Métrica** | **Função** |
| --- | --- |
| Distribuição D/I/S/C | verificar equilíbrio de escolha |
| alternativa dominante | identificar possível desejabilidade ou desequilíbrio |
| alternativa quase nunca escolhida | verificar opção pouco plausível |
| tempo mediano | esforço |
| taxa de revisão | ambiguidade |
| comentários | problemas percebidos |
| relação com facetas semelhantes | coerência exploratória |
| pares RG | comportamento de situações relacionadas |

Um cenário em que:

D 82%
I 8%
S 6%
C 4%

é **suspeito**.

Não automaticamente ruim.

Talvez o contexto realmente favoreça D.

Mas precisamos investigar se a alternativa D simplesmente parece a resposta profissionalmente correta.

# **15. Regras de triagem, não regras de eliminação**

Podemos usar indicadores provisórios como:

escolha de uma única alternativa por **~70–80% ou mais** dos participantes;

opção escolhida por **menos de ~5%**;

tempo mediano muito acima dos demais itens;

revisões muito acima do padrão geral;

repetidos relatos de falta de alternativa adequada.

Tudo isso gera:

# **FLAG.**

Não:

# **DELETE.**

Os limites são **heurísticas de triagem do piloto**, não propriedades psicométricas universais.

# **16. PRC Forced terá a mesma cautela**

Nos oito itens forced-choice analisaremos:

V/A/C por cenário.

Mas não faremos comparações normativas entre pessoas usando as frequências como se fossem escalas independentes.

E justamente aqui teremos uma oportunidade muito interessante.

Podemos comparar:

### **PRC Forced**

“Quando precisa escolher, qual recurso prefere?”

com:

### **PRC Independent**

“Quanto cada um desses recursos ajuda?”

Isso pode revelar estruturas que não enxergaríamos com um único formato.

# **17. PRC independente**

Aqui podemos analisar separadamente os quatro indicadores de V, quatro de A e quatro de C.

Vamos observar:

**médias; dispersão; teto; piso; correlação entre itens da mesma modalidade; diferenças de contexto.**

Mas não quero correr imediatamente para:

“Alpha = 0,78, então validado.”

Confiabilidade é apenas uma parte da evidência, e a interpretação depende do modelo de medida. Os próprios Standards tratam validade, confiabilidade/precisão, estrutura e uso como questões relacionadas, mas distintas. [<u>NCME</u>](https://ncme.org/resources/books/testing-standards/?utm_source=chatgpt.com)

# **18. DR™ permite investigação diferente**

Aqui temos escalas ordinais.

Para cada eixo:

**Velocidade
Impacto
Persistência
Externalização**

teremos três itens.

Analisaremos:

distribuição ordinal;

piso/teto;

relações entre itens do mesmo eixo;

relações entre contextos positivos e negativos;

pares de coerência;

e posteriormente correlações apropriadas para variáveis ordinais.

Se chegarmos a estimativas de consistência interna, prefiro trabalhar posteriormente com métodos apropriados para itens ordinais e não depender exclusivamente do alfa clássico.

E, com apenas **três itens por eixo**, qualquer conclusão deverá ser especialmente cuidadosa.

# **19. Nossa autoavaliação pós-teste agora ganha função formal**

Lembra dos SELF-01 a SELF-08?

Podemos registrar **hipóteses antes de ver os dados**.

Isso é muito importante para reduzir nossa tentação de inventar explicações depois.

| **Evidência MGH** | **Relação esperada** |
| --- | --- |
| PC.D.DECISION\_SPEED | SELF-01 |
| PC.D.AUTONOMY | SELF-02 |
| PC.C.CRITERION | SELF-03 |
| DR.EXTERNALIZATION | SELF-04 |
| DR.PERSISTENCE | SELF-05 |
| PRC.V.INDEPENDENT | SELF-06 |
| PRC.A.INDEPENDENT | SELF-07 |
| PRC.C.INDEPENDENT | SELF-08 |

Não esperamos correlações perfeitas.

Na verdade, SELF é também autorrelato e tem limitações próprias.

Mas estamos criando **hipóteses de convergência a priori**.

Isso é metodologicamente muito melhor do que olhar os dados e depois decidir qual relação “faz sentido”.

# **20. Pré-registro interno de hipóteses**

Eu criaria um documento:

# **MGH™ — HYPOTHESIS REGISTER P1.0**

Antes da Onda 1, registramos:

o que esperamos;

por que esperamos;

qual evidência poderia apoiar;

qual resultado nos faria questionar a hipótese.

Por exemplo:

**H-PRC-01**

Esperamos associação positiva entre PRC.V.INDEPENDENT e SELF-06.

E também:

Se a associação for sistematicamente ausente numa amostra adequada, a interpretação da escala visual deverá ser revista.

Isso nos obriga a permitir que o MGH esteja errado.

Excelente proteção científica.

# **21. ONDA 2 — PILOTO AMPLIADO**

Se o instrumento sobreviver à Onda 1, então paramos de mexer em redação por impulso.

Criamos uma versão congelada:

**MGH-P2.0**

e buscamos uma amostra consideravelmente maior e mais diversa.

Minha faixa inicial de planejamento seria algo como **200–400 respondentes**, mas a decisão final deve depender das análises escolhidas e, idealmente, da orientação do psicometrista.

Nesse ponto começaremos a investigar de forma muito mais séria:

**estrutura interna;**

**precisão;**

**funcionamento dos itens;**

**relações com variáveis externas;**

**diferenças entre subgrupos que mereçam investigação;**

**estabilidade das pontuações;**

**modelos adequados para forced-choice.**

# **22. O PC poderá exigir uma mudança matemática nessa fase**

Hoje nosso PC utiliza:

contagem clássica D/I/S/C.

Isso é adequado como **pontuação experimental intraindividual do P1.0**.

Mas, se quisermos futuramente:

comparar pessoas;

gerar percentis;

dizer que uma pessoa está acima ou abaixo de determinada população;

precisaremos reconsiderar seriamente a modelagem.

A literatura contemporânea estuda modelos IRT multidimensionais justamente para recuperar escores de traços a partir de forced-choice sem depender da pontuação ipsativa clássica, embora esses métodos também exijam desenho e pressupostos cuidadosos. [<u>PMC</u>](https://pmc.ncbi.nlm.nih.gov/articles/PMC10915382/?utm_source=chatgpt.com)

Portanto:

# **SCORE-P1.0 NÃO É PROMESSA DE SCORE-FINAL.**

Isso deve ficar registrado.

# **23. O observador externo entra somente depois**

Eu não colocaria MGH 360™ na Onda 0.

Primeiro precisamos garantir que a medida-base funciona.

Na Onda 1 ou principalmente Onda 2, podemos selecionar um subconjunto e pedir que uma pessoa que convive profissionalmente com o participante responda uma versão de observação.

Exemplo:

Participante:

“Costumo ter espaço para decidir meu método.”

Observador:

“Quando recebe uma responsabilidade, essa pessoa tende a buscar espaço para definir como executar.”

Mas isso exigirá **instrumento próprio**.

Não podemos simplesmente trocar “eu” por “ele” e assumir validade.

# **24. Proteção contra contaminação pelo próprio criador**

Quero implementar uma regra operacional interessante.

Durante as análises quantitativas principais, os participantes serão tratados por:

MGH-0001
MGH-0002
MGH-0003...

Não:

Fabrício
Gleici
Evely
Fulano.

Quando estivermos analisando distribuição e funcionamento dos itens, não precisamos saber quem é quem.

Isso reduz nossa tendência de dizer:

“Ah, mas eu conheço essa pessoa e esse resultado está errado.”

Depois podemos fazer estudos de caso separadamente.

# **25. O arquivo bruto nunca é editado**

Outra regra.

Teremos:

### **RAW DATA**

Resposta original exatamente como foi coletada.

Imutável.

Depois:

### **CLEAN DATA**

Dados preparados para análise.

Depois:

### **DERIVED DATA**

Escores e evidências calculados.

Depois:

### **INTERPRETATION DATA**

UIGs e recomendações ativadas.

Nunca substituímos RAW.

Se corrigirmos um algoritmo, recalculamos derivados.

Não reescrevemos a história.

# **26. LGPD e ética operacional**

Como estaremos coletando informações pessoais e dados de trabalhadores, precisamos desde o piloto ter:

**consentimento/aviso de privacidade adequado; finalidade clara; minimização de dados; controle de acesso; prazo de retenção; possibilidade de retirada quando aplicável; pseudonimização para análise.**

E quero uma regra especialmente importante para participantes empregados:

**Resultados experimentais do MGH Piloto não serão utilizados para contratação, demissão, promoção, punição ou remuneração.**

Estamos testando o instrumento.

Não usando pessoas para testar decisões de RH.

Mais adiante, qualquer uso organizacional de maior consequência precisará ter evidências e governança compatíveis com aquela finalidade.

# **27. O participante precisa saber disso**

No consentimento da fase piloto eu colocaria claramente:

“O MGH™ P1.0 é uma versão experimental em desenvolvimento. Sua participação tem finalidade de pesquisa e aperfeiçoamento do instrumento. O resultado não deve ser utilizado como diagnóstico psicológico, avaliação de competência ou fundamento isolado para decisões profissionais.”

Isso protege participante e projeto.

# **28. Critérios de passagem entre ondas**

Teremos um **Gate Review** formal.

### **ONDA 0 → ONDA 1**

Precisamos ter resolvido problemas graves de:

**compreensão, alternativas, desejabilidade, experiência de aplicação e redação.**

### **ONDA 1 → ONDA 2**

Precisamos ter:

**itens suficientemente funcionais, dispersão minimamente útil, ausência de problemas sistemáticos, Score Engine funcionando e versão estável.**

### **ONDA 2 → CANDIDATO 1.0**

Precisaremos de um conjunto muito maior:

**evidência psicométrica adequada ao modelo escolhido, revisão externa, documentação, limitações conhecidas, regras interpretativas revisadas e escopo de uso claramente definido.**

Não existe avanço automático porque atingimos N participantes.

# **29. Item Survival Matrix™**

Cada item terá futuramente um histórico parecido com:

| **Critério** | **Resultado** |
| --- | --- |
| Clareza cognitiva | ✅ |
| Alternativas suficientes | ✅ |
| Desejabilidade | ⚠️ |
| Dispersão | ✅ |
| Tempo | ✅ |
| Revisão | ⚠️ |
| Coerência conceitual | ✅ |
| Evidência quantitativa | pendente |
| Relação esperada | pendente |
| Decisão | REVISAR |

Assim:

**nenhuma pergunta sobrevive porque “gostamos dela”.**

# **30. O mesmo vale para as UIGs**

Depois que começarmos a gerar relatórios experimentais, as 40 UIGs também entram em piloto.

Uma interpretação poderá receber:

| **Critério** | **Pergunta** |
| --- | --- |
| Suporte | os dados realmente autorizam essa afirmação? |
| Clareza | o usuário entende? |
| Especificidade | é útil ou genérica demais? |
| Extrapolação | diz mais do que medimos? |
| Contradição | conflita com outra saída? |
| Aplicabilidade | o gestor consegue agir a partir dela? |

Podemos descobrir que uma pergunta é ótima, mas uma interpretação nossa é ruim.

São problemas diferentes.

# **31. E finalmente poderemos medir utilidade sem confundir com validade**

Depois de a pessoa receber um relatório experimental, podemos perguntar:

“Esta orientação foi clara?”

“Você consegue identificar situações profissionais em que isso acontece?”

“Esta recomendação é aplicável?”

Mas:

“A pessoa gostou muito do relatório”

**não prova validade.**

Um horóscopo bem escrito também pode gerar identificação.

Por isso manteremos separado:

**ACEITAÇÃO**de
**EVIDÊNCIA DE VALIDADE.**

Essa distinção será muito importante para não sermos seduzidos pelo entusiasmo dos primeiros usuários.

# **32. Estrutura oficial do protocolo**

Fica congelado assim:

**PILOT-P1.0**

**Onda 0 — processo de resposta**8–12 pessoas.

**Onda 1 — funcionamento dos itens**40–60 pessoas.

**Onda 2 — propriedades iniciais da medida**planejamento ~200–400, sujeito ao modelo.

**Onda 3 — validação/normatização**desenho definido posteriormente com psicometria profissional.

Em paralelo:

**Change Log
Hypothesis Register
Item Survival Matrix
UIG Audit
Raw/Clean/Derived separation
Versionamento
Consentimento e proteção de uso.**

# **33. Onde estamos agora**

Isso é importante de visualizar.

Já construímos:

**o que medir**

↓

**como perguntar**

↓

**como pontuar**

↓

**como transformar pontuação em evidência**

↓

**como cruzar evidências**

↓

**o que podemos ou não concluir**

↓

**como apresentar o questionário**

↓

e agora:

# **COMO TESTAR SE TUDO ISSO REALMENTE FUNCIONA.**

O projeto começa a sair do território da opinião.

E é exatamente aí que eu queria chegar antes de qualquer programação pesada.

# **ETAPA 2.16 — KIT OPERACIONAL DA ONDA 0**

O próximo passo que eu faria é completamente prático.

Vamos criar o material que permitirá realizar **a primeira aplicação real**:

**Termo/aviso do participante**, **Ficha de identificação por ID**, **Roteiro da entrevista cognitiva**, **Ficha de auditoria dos 48 itens**, **Registro de ocorrências**, **Change Log**, **Hypothesis Register inicial**, **planilha/base de dados que receberá as 56 respostas**, e os **critérios de decisão após os 8–12 primeiros participantes**.

A partir da Etapa 2.16, não estaremos mais apenas projetando como um dia testaremos o MGH.

Estaremos preparando tudo para **aplicar o MGH-P1.0 pela primeira vez**.

Vamos. Agora entramos na **Etapa 2.16 — Kit Operacional da Onda 0 do MGH™**.

Até aqui desenhamos metodologia, instrumento, pontuação, interpretação e protocolo de pilotagem. Nesta etapa vamos transformar tudo isso em **procedimentos utilizáveis no primeiro teste com pessoas reais**.

A partir daqui, o MGH-P1.0 já precisa começar a ser tratado como se fosse um projeto de pesquisa de verdade: cada participante recebe um ID, cada ocorrência é registrada, cada alteração deixa rastro e nenhuma pergunta é mudada no meio da onda sem mudança de versão.

# **ETAPA 2.16 — KIT OPERACIONAL ONDA 0**

### **MGH™ PILOTO P1.0**

## **1. Estrutura do Kit**

O Kit da Onda 0 terá nove componentes operacionais.

| **Código** | **Documento/base** | **Função** |
| --- | --- | --- |
| O0-01 | Aviso e consentimento do participante | explicar natureza experimental e uso dos dados |
| O0-02 | Registro do participante | criar identificação pseudonimizada |
| O0-03 | Base bruta de respostas | preservar exatamente o que foi respondido |
| O0-04 | Roteiro de entrevista cognitiva | investigar como a pessoa interpretou itens |
| O0-05 | Ficha de Auditoria Cognitiva | registrar problema por item |
| O0-06 | Registro de Ocorrências | documentar eventos da aplicação |
| O0-07 | Change Log | controlar qualquer mudança no instrumento |
| O0-08 | Hypothesis Register | registrar hipóteses antes da análise |
| O0-09 | Gate Review | decidir se avançamos para Onda 1 |

Vamos construir todos agora.

# **O0-01 — AVISO E CONSENTIMENTO DO PARTICIPANTE**

Não precisa parecer um contrato jurídico gigantesco. Para a Onda 0, queremos algo claro, sério e compreensível.

## **MGH™ — MAPA DE GOVERNO HUMANO**

### **Participação no Piloto Experimental P1.0**

Você está sendo convidado(a) a participar da fase experimental do **Mapa de Governo Humano™ — MGH™**, um instrumento em desenvolvimento destinado a investigar padrões relacionados à comunicação, comportamento e reação no ambiente profissional.

Esta é uma versão piloto. O instrumento ainda está sendo estudado e aperfeiçoado.

Sua participação envolve responder a situações profissionais e, posteriormente, conversar sobre como você compreendeu algumas das perguntas e alternativas.

**Não existem respostas certas ou erradas.**

O MGH-P1.0 não avalia inteligência, caráter, saúde mental, competência profissional ou valor pessoal.

Os resultados desta fase são experimentais e **não devem ser utilizados para contratação, demissão, promoção, punição, remuneração ou qualquer decisão profissional de alto impacto.**

As informações coletadas poderão ser utilizadas para analisar clareza das perguntas, padrões de resposta, funcionamento do sistema de pontuação e desenvolvimento da metodologia.

Para as análises do piloto, sua identificação será substituída por um código de participante.

Sua participação é voluntária e você pode interromper a aplicação a qualquer momento.

Ao prosseguir, você declara ter compreendido a finalidade experimental desta aplicação e concorda em participar do piloto.

Checkbox:

**Li e concordo em participar do MGH™ Piloto P1.0.**

Botão:

**CONTINUAR**

Essa versão ainda deverá passar por uma revisão jurídica/LGPD antes de uma operação comercial em escala, mas é adequada como **base metodológica**.

# **O0-02 — REGISTRO DO PARTICIPANTE**

Não queremos o nome circulando na base analítica principal.

Cada pessoa recebe algo como:

MGH-O0-001

Depois:

MGH-O0-002
MGH-O0-003...

A tabela de identificação fica separada da base psicométrica.

| **Campo** | **Exemplo** |
| --- | --- |
| Participant ID | MGH-O0-001 |
| Nome | armazenado separadamente |
| Data da aplicação | 29/09/2026 |
| Instrument version | MGH-P1.0 |
| Scoring version | SCORE-P1.0 |
| Pilot wave | O0 |
| Função | gestor |
| Área | comercial |
| Tempo na função | 4–7 anos |
| Lidera pessoas | sim |
| Liderados | 11–20 |
| Entrevista cognitiva realizada | sim |
| Observações administrativas | — |

Na base analítica:

**nome não entra.**

Entra apenas:

MGH-O0-001

# **O0-03 — RAW RESPONSE DATABASE**

Aqui quero extrema disciplina.

Cada resposta precisa ser armazenada individualmente.

Exemplo:

| **participant\_id** | **scenario** | **item** | **option** | **value** | **initial** | **revisions** | **time\_ms** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MGH-O0-001 | 1 | PC-001 | PC001\_D | 1 | PC001\_D | 0 | 11240 |
| MGH-O0-001 | 2 | PRC-001 | PRC001\_V | 1 | PRC001\_A | 1 | 18320 |
| MGH-O0-001 | 3 | TH-003 | TH003\_C | 2 | TH003\_C | 0 | 8420 |

Para PRC independente:

| **participant\_id** | **parent** | **indicator** | **value** |
| --- | --- | --- | --- |
| MGH-O0-001 | PRC-004R | PRC-004R-V | 5 |
| MGH-O0-001 | PRC-004R | PRC-004R-A | 4 |
| MGH-O0-001 | PRC-004R | PRC-004R-C | 3 |

Além disso:

assessment\_started\_at

assessment\_completed\_at

total\_duration

scenario\_viewed\_at

scenario\_answered\_at

revision\_count

assessment\_status

Tudo isso fica no **RAW**.

Nunca editamos.

# **4. RAW, CLEAN, DERIVED E INTERPRETATION**

A partir deste momento, oficializamos quatro camadas de dados.

| **Camada** | **Conteúdo** |
| --- | --- |
| RAW | resposta original exatamente como coletada |
| CLEAN | dados organizados/corrigidos tecnicamente sem alterar resposta |
| DERIVED | scores PRC, PC, DR, gaps etc. |
| INTERPRETATION | evidências, UIGs, sínteses e recomendações |

Exemplo:

RAW:

PC-007 → opção A.

DERIVED:

PC.D +1
facet signal AUTONOMY +1.

INTERPRETATION:

UIG-DEL-001 candidata.

Cada camada nasce da anterior.

Nunca sobrescreve.

# **O0-04 — ROTEIRO DE ENTREVISTA COGNITIVA**

Depois que a pessoa concluir o questionário, começa uma segunda sessão.

Duração provável:

**20–30 minutos**, dependendo do participante.

Não vamos revisar necessariamente as 48 questões profundamente com todas as pessoas. Isso seria cansativo e produziria respostas ruins.

Teremos dois níveis.

### **Nível A — perguntas gerais**

Começaremos perguntando:

Como foi responder o instrumento?

Em algum momento você sentiu que não sabia o que a pergunta queria dizer?

Houve situações em que duas alternativas pareciam igualmente verdadeiras?

Houve alguma questão em que nenhuma alternativa representava você?

Percebeu alguma resposta que parecia claramente “mais correta” ou mais profissional?

Teve alguma pergunta que pareceu repetitiva?

Em algum momento começou a perceber um padrão nas alternativas?

Tentou descobrir o que o instrumento estava medindo?

Em algum momento respondeu pensando no que gostaria de fazer, em vez do que normalmente faz?

Essas respostas já nos darão sinais excelentes.

# **5. Nível B — investigação de itens**

Depois selecionamos itens relevantes.

Alguns serão escolhidos antecipadamente porque queremos testá-los.

Outros porque:

**demorou muito;**

**mudou a resposta;**

**o participante comentou;**

**pertence a uma área metodologicamente sensível.**

Para cada item investigado:

### **Pergunta 1 — Compreensão**

“Com suas palavras, o que você entendeu que essa pergunta queria saber?”

Isso é fundamental.

Não explicamos antes.

### **Pergunta 2 — Recuperação**

“Você pensou em alguma situação real quando respondeu?”

Se sim:

“Que tipo de situação?”

Não precisamos saber nomes.

Queremos entender o processo de resposta.

### **Pergunta 3 — Julgamento**

“Você ficou entre quais alternativas?”

Depois:

“O que fez você escolher esta?”

### **Pergunta 4 — Adequação**

“Essa alternativa descreve bem o que você costuma fazer ou foi apenas a mais próxima disponível?”

Essa diferença é importantíssima.

### **Pergunta 5 — Desejabilidade**

“Alguma alternativa parecia ser aquilo que uma pessoa profissionalmente competente deveria responder?”

Se sim:

registramos DES.

### **Pergunta 6 — Ausência**

“Se você pudesse escrever uma alternativa que representasse melhor sua reação, qual seria?”

Isso pode revelar categorias que não enxergamos.

# **6. Uma regra crítica para o entrevistador**

O entrevistador **não poderá explicar o que o item mede antes de terminar a investigação**.

Nada como:

“Essa pergunta mede sua autonomia.”

Isso contamina completamente a resposta.

Também não poderá dizer:

“Interessante, isso parece muito D.”

O participante não precisa sequer saber que existem D/I/S/C.

Durante a Onda 0, o entrevistador precisa se comportar mais como investigador do que como mentor.

# **O0-05 — FICHA DE AUDITORIA COGNITIVA**

Cada item terá uma ficha agregada.

Exemplo:

## **PC-007**

| **Campo** | **Registro** |
| --- | --- |
| Participantes investigados | 001, 003, 006, 009 |
| CMP | 0 |
| AMB | 1 |
| NFA | 0 |
| TWO | 2 |
| DES | 0 |
| CTX | 1 |
| VOC | 0 |
| RED | 0 |
| COG | 0 |
| MAP | 0 |

Comentários:

MGH-O0-003 ficou entre D e C.

MGH-O0-006 interpretou “liberdade” como falta de suporte.

Agora temos material para pensar.

Não apenas:

“PC-007 recebeu 7 respostas D.”

# **7. Status final de cada item na Onda 0**

Após análise:

| **Status** | **Significado** |
| --- | --- |
| KEEP | nenhuma alteração relevante |
| REWRITE\_MINOR | ajuste textual sem mudança conceitual |
| REWRITE\_MAJOR | mudança relevante de cenário/alternativas |
| REKEY\_REVIEW | chave de pontuação precisa ser investigada |
| RESERVE | sai do instrumento, permanece no Banco Mestre |
| RETIRE | item inadequado |
| NEW\_ITEM\_REQUIRED | cobertura ficou insuficiente após retirada |

Muito importante:

### **REKEY\_REVIEW**

não significa:

“vamos trocar D para S porque pareceu melhor.”

Significa:

a explicação dos participantes mostrou que nossa hipótese de chave precisa ser reavaliada.

# **O0-06 — REGISTRO DE OCORRÊNCIAS**

Nem tudo é problema de uma pergunta.

Exemplo:

Participante recebeu ligação na questão 23.

Aplicação ocorreu em ambiente muito barulhento.

Internet caiu.

Participante precisou sair por 15 minutos.

O navegador recarregou.

Essas ocorrências precisam existir.

| **Campo** | **Exemplo** |
| --- | --- |
| occurrence\_id | OCC-0007 |
| participant\_id | MGH-O0-004 |
| scenario | 23 |
| type | INTERRUPTION |
| severity | MODERATE |
| description | ligação profissional de aproximadamente 8 minutos |
| impact | possível impacto no tempo total |
| exclude? | não |
| reviewer | — |

Isso impede que futuramente olhemos:

“Por que essa pessoa demorou 34 minutos?”

e concluamos alguma coisa errada.

# **8. Severidade da ocorrência**

Eu usaria:

**MINOR** — provavelmente não altera aplicação.

**MODERATE** — pode afetar alguma métrica.

**MAJOR** — pode comprometer parte relevante da aplicação.

**INVALIDATING** — aplicação não deve entrar em determinadas análises.

Mais uma vez:

invalidar aplicação ≠ invalidar pessoa.

# **O0-07 — CHANGE LOG MGH™**

Exemplo:

| **Campo** | **Valor** |
| --- | --- |
| Change ID | CHG-001 |
| Date | — |
| Object | PC-014 |
| Current version | P1.0 |
| Change type | wording |
| Reason | interpretação ambígua |
| Evidence | O0-003 / O0-007 / O0-009 |
| Previous text | ... |
| New text | ... |
| Scoring impact | none |
| Interpretation impact | none |
| Approved by | — |
| New instrument version | P1.1 |

Também teremos mudanças de:

SCORING

UIG

SYNTHESIS

EVIDENCE

UX

DATA MODEL

Cada uma com registro próprio.

# **9. Regra de versionamento durante Onda 0**

Se for correção ortográfica que não altera significado:

P1.0.1

Se muda interpretação textual sem mudar construto:

P1.1

Se muda item, chave ou arquitetura relevante:

P2.0 pode ser necessário dependendo da magnitude.

Não quero uma obsessão com semver perfeito agora, mas precisamos começar com disciplina.

# **O0-08 — HYPOTHESIS REGISTER P1.0**

Este é um dos documentos que mais gosto no projeto porque ele nos obriga a escrever **antes dos resultados** aquilo que esperamos encontrar.

Primeira versão:

| **ID** | **Hipótese** |
| --- | --- |
| H-001 | PRC.V.INDEPENDENT apresentará relação positiva com SELF-06 |
| H-002 | PRC.A.INDEPENDENT apresentará relação positiva com SELF-07 |
| H-003 | PRC.C.INDEPENDENT apresentará relação positiva com SELF-08 |
| H-004 | sinais de PC.D.AUTONOMY apresentarão relação positiva com SELF-02 |
| H-005 | sinais de PC.C.CRITERION apresentarão relação positiva com SELF-03 |
| H-006 | DR.EXTERNALIZATION apresentará relação positiva com SELF-04 |
| H-007 | DR.PERSISTENCE apresentará relação positiva com SELF-05 |
| H-008 | sinais relacionados à velocidade decisória apresentarão relação positiva com SELF-01 |
| H-009 | pares RG-01 a RG-06 apresentarão convergência superior ao esperado por escolhas sem relação |
| H-010 | alternativas PC não apresentarão concentração sistemática extrema em uma única dimensão através da maioria dos itens |
| H-011 | PRC Forced e PRC Independent apresentarão alguma convergência, mas não equivalência perfeita |
| H-012 | os quatro eixos DR apresentarão padrões parcialmente independentes e não uma única dimensão geral |

Essas são **hipóteses piloto**, não afirmações científicas.

# **10. Também precisamos registrar hipóteses que podem falhar**

Para cada uma haverá:

### **EXPECTED**

o que imaginamos.

### **CHALLENGE CONDITION**

o que nos faria questionar.

Exemplo:

### **H-006**

**Esperado:**

DR.EXTERNALIZATION ↑ associado a SELF-04 ↑.

**Condição de questionamento:**

ausência persistente de associação em amostra adequada ou associação inversa.

Isso muda a postura.

Não tentamos “provar H-006”.

Tentamos dar a H-006 a oportunidade de estar errada.

# **11. Hypothesis Register das UIGs**

Também teremos hipóteses interpretativas.

Exemplo:

### **HI-001**

Se:

PRC.V.CONVERGENCE

então usuários tenderão a reconhecer utilidade de orientação visual em comunicação profissional.

### **HI-002**

Se:

PC.D.AUTONOMY + PC.C.CRITERION

então a síntese:

autonomia dentro de critérios claros

será percebida como mais representativa do que qualquer uma das orientações isoladas.

Isso nos permitirá testar nosso **Collision Resolver** futuramente.

# **O0-09 — GATE REVIEW**

Ao fim das 8–12 aplicações, fazemos uma reunião formal de decisão.

Não:

“Achei legal, vamos lançar.”

Teremos uma ficha.

## **GATE O0 → O1**

### **INSTRUMENTO**

| **Critério** | **Status** |
| --- | --- |
| Compreensão geral adequada | PASS / REVIEW / FAIL |
| Alternativas representativas | PASS / REVIEW / FAIL |
| Desejabilidade controlável | PASS / REVIEW / FAIL |
| Cobertura preservada | PASS / REVIEW / FAIL |
| Chaves sem problemas graves conhecidos | PASS / REVIEW / FAIL |

### **EXPERIÊNCIA**

| **Critério** | **Status** |
| --- | --- |
| Tempo aceitável | PASS / REVIEW / FAIL |
| Fadiga aceitável | PASS / REVIEW / FAIL |
| Navegação compreensível | PASS / REVIEW / FAIL |
| Progresso adequado | PASS / REVIEW / FAIL |

### **METODOLOGIA**

| **Critério** | **Status** |
| --- | --- |
| RAW confiável | PASS / REVIEW / FAIL |
| Registro de tempo confiável | PASS / REVIEW / FAIL |
| Revisões registradas | PASS / REVIEW / FAIL |
| Entrevistas cognitivas concluídas | PASS / REVIEW / FAIL |
| Change Log atualizado | PASS / REVIEW / FAIL |

# **12. Decisões possíveis do Gate**

Somente quatro:

### **ADVANCE**

P1.0/P1.1 está pronto para Onda 1.

### **ADVANCE\_WITH\_MINOR\_FIXES**

Pequenos ajustes devidamente versionados.

### **REPEAT\_O0**

Problemas suficientes para exigir nova rodada cognitiva.

### **STOP\_AND\_REDESIGN**

Problema estrutural.

E se acontecer o último?

Excelente.

Melhor descobrir com 8 pessoas do que com 8.000 usuários.

# **13. Quem eu escolheria para os primeiros 8–12**

Não quero uma amostra representativa ainda.

Quero **pessoas que consigam desafiar o instrumento por experiências diferentes**.

Eu buscaria diversidade entre:

gestão e não gestão;

mais e menos tempo profissional;

áreas comerciais e técnicas;

pessoas que lidam muito com gente e pessoas que lidam muito com processos;

níveis distintos de responsabilidade.

Evitaria concentrar a Onda 0 inteira em:

donos de empresa da sua mentoria.

Porque eles provavelmente compartilham vocabulário, experiências e exposição ao seu conteúdo.

Isso pode esconder problemas que apareceriam em outra população.

# **14. Existe uma pessoa especial na Onda 0: o próprio criador**

Você pode e deve responder.

Mas classificaremos:

creator\_participant = true

Isso significa:

sua resposta entra na análise qualitativa da experiência;

mas teremos cautela em usar sua familiaridade com o instrumento como evidência de compreensão natural.

Porque você já sabe muito mais sobre o MGH do que um participante comum.

Sua sessão será especialmente útil para:

**UX, ambiguidade percebida, adequação das alternativas e experiência geral.**

# **15. Outra pessoa importante: especialista externo**

Antes da Onda 1, eu incluiria uma revisão independente por alguém com formação adequada em psicometria/construção de instrumentos.

Não precisa assumir o projeto.

Pode receber:

**construct definitions;**

**blueprint;**

**itens;**

**scoring architecture;**

**pilot protocol;**

e responder:

Onde vocês estão fazendo afirmações que os itens não suportam?

Que problemas de desenho você identifica?

Que abordagem estatística recomendaria para o forced-choice?

Essa revisão pode evitar meses de trabalho errado.

# **16. Mas não vamos esperar por isso para começar a Onda 0**

A Onda 0 é justamente barata e exploratória.

Podemos encontrar dezenas de problemas de linguagem antes de pagar alguém para discutir modelos estatísticos sofisticados.

A ordem continua sendo:

**primeiro certificar que seres humanos entendem o que perguntamos.**

Depois discutimos matemática avançada.

# **17. O primeiro teste ainda pode ser manual**

Este ponto é importante.

Nós **não precisamos programar o MGH agora** para iniciar a Onda 0.

Podemos criar uma aplicação provisória em ferramenta de formulário ou protótipo, desde que consigamos preservar:

**ordem dos cenários;**

**ID do participante;**

**respostas;**

**timestamps quando possível;**

**versão;**

**exportação dos dados.**

Porém algumas funcionalidades sofisticadas:

revisão detalhada;

tempo por item;

randomização por option\_id;

audit trail completo;

serão melhores quando tivermos nosso próprio sistema.

Para Onda 0, não precisamos esperar toda a plataforma.

# **18. O que eu NÃO usaria**

Não colocaria o P1.0 inteiro numa IA pública dizendo:

“Descubra meu perfil.”

O objetivo do piloto é testar **nosso Motor**, não permitir que outro modelo invente interpretação.

Também não colocaria imediatamente no site público.

A Onda 0 deve ser:

**controlada, pequena e observável.**

# **19. Primeira sequência operacional real**

Quando começarmos, o processo será:

**participante recebe MGH-ID → lê consentimento → responde contexto profissional → responde 48 cenários → responde SELF → feedback rápido → envia definitivamente → entrevistador realiza entrevista cognitiva → auditor preenche ficha → ocorrências são registradas → dados permanecem congelados.**

Depois das 8–12 pessoas:

**auditoria agregada → Item Survival Matrix → Change Log → revisão do P1.0 → Gate Review.**

Essa é a Onda 0.

# **20. O Kit está conceitualmente completo**

Temos agora:

**Consentimento**

**Participant Registry**

**RAW Database**

**Cognitive Interview Guide**

**Cognitive Audit Sheet**

**Occurrence Log**

**Change Log**

**Hypothesis Register**

**Gate Review**

Ou seja, já sabemos exatamente **como conduzir o primeiro experimento do MGH™**.

