---
name: 17-handoff-03-scoring-o0-golden
description: Documentos 05, 06 e 07 do Developer Handoff Package.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 37821-43420
---

# Handoff 03: Scoring, O0 E Golden

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.29E — SCORING SPECIFICATION**

No próximo passo vamos congelar em formato de desenvolvimento:

**PC D/I/S/C**

**frequências relativas**

**ranking**

**empates**

**gaps**

**entropia**

**facetas**

**PRC Forced**

**PRC Independent**

**DR**

**normalizações**

**precisão e arredondamento**

**Relation Groups**

**SELF exclusion**

**versões**

**input/output do Score Engine**

e todos os **Golden Cases matemáticos** que o desenvolvedor deverá reproduzir exatamente.

Esse provavelmente será um dos documentos mais objetivos de todo o handoff: **mesma entrada → mesmo resultado, sempre.**

Perfeito. Agora entramos no documento mais matemático do pacote. Aqui a regra é simples:

**Mesma entrada + mesma versão de scoring = mesmo resultado, sempre.**

# **ETAPA 2.29E — SCORING SPECIFICATION**

## **Documento 05 — Especificação do Motor de Pontuação**

**Versão do documento:** MGH-SCORE-SPEC-0.1
**Scoring Engine:** SCORE-P1.0
**Instrumento compatível:** MGH-P1.0
**Banco de Itens:** BANK-0.2
**Master Specification:** MGH-MASTER-P1.0-RC1
**Status:** PILOT

O Score Engine deverá ser **determinístico, versionado, independente do relatório e independente de IA**.

# **1. Responsabilidade do Score Engine**

O Score Engine recebe respostas canônicas de um assessment compatível e produz medidas matemáticas.

Ele **não** decide se algo é:

“alto”, “baixo”, “bom”, “ruim”, “consistente”, “relevante” ou “perfil predominante”.

Essas classificações pertencem às camadas posteriores.

O contrato é:

**Resposta → número. Não resposta → interpretação psicológica.**

# **2. Entrada obrigatória**

Para executar SCORE-P1.0, o sistema precisa receber um assessment:

| **Validação** | **Requisito** |
| --- | --- |
| Status | COMPLETED |
| Instrumento | MGH-P1.0 |
| Respostas pontuáveis | 56/56 |
| PC | 24/24 |
| PRC Forced | 8/8 |
| PRC Independent | 12/12 ratings |
| DR | 12/12 |
| Release Manifest | compatível |
| Scoring Version | SCORE-P1.0 |

SELF não é entrada do cálculo principal.

Feedback pós-teste também não.

# **3. Falha de compatibilidade**

Se houver:

MGH-P1.0 + SCORE-P9.7

sem compatibilidade declarada, o Score Engine não tenta “fazer o melhor possível”.

Resultado:

VERSION\_MISMATCH

e nenhum SCORING\_RUN concluído.

# **4. SCORING\_RUN**

Cada execução produz uma nova instância.

Campos conceituais:

scoring\_run\_id

assessment\_id

instrument\_version

scoring\_version

status

started\_at

completed\_at

input\_hash

engine\_version

initiated\_by

created\_at

Status possíveis:

PENDING

RUNNING

COMPLETED

FAILED

# **5. Resultado antigo nunca é sobrescrito**

Se futuramente existir:

SCORE-P1.1

o mesmo assessment poderá ser recalculado.

Teremos:

SCORING\_RUN A → SCORE-P1.0

e:

SCORING\_RUN B → SCORE-P1.1

Não substituímos A por B.

# **6. Regra geral de precisão**

O banco preserva precisão matemática suficiente.

A apresentação arredonda somente no final.

Exemplo:

2 / 3 = 0.666666666...

Internamente:

preservar precisão.

Interface:

0,67

ou:

66,67

conforme a métrica.

Nunca recalcular resultados posteriores utilizando o valor já arredondado da interface.

# **7. PC — Padrões Comportamentais**

Existem:

**24 itens forced-choice.**

Cada item possui quatro opções semanticamente mapeadas para:

D

I

S

C.

A opção escolhida concede:

**1 ponto para exatamente uma dimensão principal.**

Pesos P1.0:

todos = 1.0.

# **8. Fórmula PC**

Para dimensão $d$:

$PC\_{d}=\sum\_{i=1}^{24}I(option\_{i}\rightarrow d)$

onde:

I = 1 quando a opção escolhida corresponde à dimensão.

Caso contrário:

0.

Portanto, obrigatoriamente:

$D+I+S+C=24$

Se não:

erro de scoring/configuração.

# **9. Exemplo PC**

Respostas produzem:

D = 9
I = 7
S = 3
C = 5

Validação:

9 + 7 + 3 + 5 = 24.

# **10. Frequência relativa PC**

Para cada dimensão:

$RF\_{d}=PC\_{d}/24$

Exemplo:

D = 9:

$9/24=0.375$

I = 7:

$7/24=0.291666...$

S = 3:

$3/24=0.125$

C = 5:

$5/24=0.208333...$

Esses valores são **ipsativos**, não percentuais normativos de traço.

# **11. Proibição de linguagem no Score Engine**

D relative\_frequency = 0.375

não significa:

“37,5% dominante”.

O Score Engine guarda o número.

Não cria texto interpretativo.

# **12. PC é ipsativo no P1.0**

Essa é uma das restrições mais importantes do documento.

As quatro contagens são relativas **dentro da mesma pessoa**.

Portanto:

João D=9

e:

Maria D=7

não autorizam automaticamente:

“João é mais dominante que Maria.”

Comparação interpessoal direta permanece não autorizada no P1.0.

# **13. Ranking PC**

O motor pode calcular ranking interno das quatro contagens.

Exemplo:

D=9
I=7
C=5
S=3

Ranking:

D > I > C > S

Mas ranking não produz automaticamente:

“perfil D predominante”.

É apenas medida derivada.

# **14. Empates PC**

Empate nunca pode ser resolvido arbitrariamente por:

ordem alfabética;

ordem D-I-S-C;

ordem no código;

primeiro registro.

Exemplo:

D=6
I=6
S=6
C=6

Resultado:

TOP\_TIE = [D,I,S,C]

Não:

P1=D.

# **15. Estrutura sugerida de ranking**

O motor pode produzir algo como:

ranking:

rank\_1: [D]

rank\_2: [I]

rank\_3: [C]

rank\_4: [S]

Em empate:

ranking:

rank\_1: [D,I]

rank\_2: [C]

rank\_3: [S]

Sem desempate artificial.

# **16. GAP12**

Diferença entre o maior raw count e o segundo nível de raw count.

Exemplo:

9 / 7 / 5 / 3:

$GAP12=9-7=2$

Se topo empatado:

$GAP12=0$

# **17. GAP23**

Diferença entre segundo e terceiro níveis relevantes do ranking.

No exemplo:

9 / 7 / 5 / 3:

$GAP23=7-5=2$

Essa métrica permanece:

exploratória.

Não define força de perfil.

# **18. Entropia PC**

Para estudar concentração/distribuição de escolhas, usaremos a **entropia de Shannon normalizada**:

$H=-\frac{\sum\_{d=1}^{4}p\_{d}ln(p\_{d})}{ln(4)}$

onde:

$p\_{d}=PC\_{d}/24$

e:

$0ln0=0$

Resultado:

intervalo 0–1.

# **19. Interpretação matemática da entropia**

Distribuição:

6 / 6 / 6 / 6

produz:

$H=1$

Distribuição:

24 / 0 / 0 / 0

produz:

$H=0$

Mas o Score Engine não afirma:

“equilibrado” ou “desequilibrado”.

Ele apenas calcula.

# **20. PC.BALANCE**

Podemos manter PC.BALANCE como métrica exploratória derivada da distribuição.

Porém sua fórmula ainda não precisa ser congelada caso não esteja metodologicamente definida.

Portanto:

**não inventar fórmula no desenvolvimento.**

Se não houver specification:

PC.BALANCE = NOT\_IMPLEMENTED

até definição formal.

Esse é exatamente o comportamento que queremos.

# **21. Facetas PC**

As 20 facetas continuam sendo sinais internos.

Cada opção pode ter:

facet\_signal = <facet>

ou:

NULL.

A dimensão principal sempre pontua.

A faceta:

somente quando o Banco/Scoring Matrix explicitamente autorizar.

# **22. Proibição de inferência automática de faceta**

Não implementar:

se target = D:

pontuar todas as facetas D

Isso seria metodologicamente errado.

Um item pode pontuar:

D principal

mas não possuir evidência suficiente para:

Assertividade;

Autonomia;

Confrontation;

Decision Speed;

Result Orientation

simultaneamente.

# **23. Facet Hits**

Quando autorizado:

$FacetHits\_{f}=\sum\_{}^{}signal\_{f}$

Precisamos também armazenar:

opportunities.

Exemplo:

Autonomia possui duas oportunidades relevantes.

Se ambas sinalizarem autonomia:

hits = 2

opportunities = 2.

# **24. Não transformar 2/2 em “100% autonomia”**

Congelado.

Mesmo que matematicamente:

2/2 = 1,

interface não apresenta:

“Autonomia 100%”.

Facetas:

reportable = false

no P1.0.

# **25. Lineage das facetas**

O Derived Score deve saber:

quais itens contribuíram.

Exemplo:

PC.D.AUTONOMY

source\_items:

PC-007

PC-027.

Isso será necessário para o Evidence Engine impedir falsa independência.

# **26. PRC™ — duas arquiteturas de scoring independentes**

Temos:

### **PRC Forced**

8 escolhas relativas.

### **PRC Independent**

12 ratings independentes.

Elas são calculadas separadamente.

Nunca fundidas pelo Score Engine.

# **27. PRC Forced**

8 itens.

Cada resposta seleciona:

V

A

ou:

C.

Cada escolha:

+1 na modalidade correspondente.

Obrigatoriamente:

$V\_{f}+A\_{f}+C\_{f}=8$

# **28. Frequência relativa PRC Forced**

$PRC\_{m,forced}=count\_{m}/8$

Exemplo:

V=4
A=3
C=1

produz:

V = 0.50
A = 0.375
C = 0.125.

# **29. Linguagem proibida**

Não chamar:

“50% Visual”.

O dado correto é:

“50% das escolhas forced daquela aplicação corresponderam à alternativa visual.”

Mesmo isso é linguagem de pesquisa, não necessariamente texto final ao usuário.

# **30. PRC Forced concentrado**

Exemplo:

V=8
A=0
C=0

Resultados:

V=1.0
A=0
C=0.

O motor não conclui:

“100% Visual.”

# **31. PRC Independent**

Quatro grupos.

Cada grupo contém:

V rating 1–5;

A rating 1–5;

C rating 1–5.

Total:

4 observações independentes para cada modalidade.

# **32. Média PRC Independent**

Para modalidade $m$:

$Mean\_{m}=\frac{r\_{1}+r\_{2}+r\_{3}+r\_{4}}{4}$

Range:

1–5.

# **33. Exemplo Visual Independent**

Ratings:

5, 5, 4, 5

$Mean\_{V}=19/4=4.75$

Armazenar:

4.75.

# **34. Normalização opcional PRC Independent**

Pode ser calculada:

$N=\frac{Mean-1}{4}×100$

Para 4.75:

$(4.75-1)/4×100=93.75$

Essa transformação apenas reposiciona a escala 1–5 para 0–100.

Não transforma a métrica em:

“93,75% visual.”

# **35. Exemplo completo PRC Independent**

V:

5,5,4,5 → 4.75 → 93.75

A:

4,4,4,4 → 4.00 → 75.00

C:

3,3,4,2 → 3.00 → 50.00.

# **36. Independência significa que 5/5/5 é permitido**

Exemplo:

em todos os quatro grupos:

V=5
A=5
C=5.

Resultado:

V mean = 5
A mean = 5
C mean = 5.

Não normalizar para:

33% / 33% / 33%.

Isso destruiria a natureza independente das escalas.

# **37. PRC Forced × Independent**

O Score Engine preserva:

PRC.V.FORCED

e:

PRC.V.INDEPENDENT

separadamente.

Não calcula no P1.0:

FINAL\_VISUAL = média dos dois

Proibido.

Convergência entre os dois pertence ao:

Evidence Engine.

# **38. DR™ — estrutura**

Temos quatro eixos:

Velocidade;

Impacto;

Persistência;

Externalização.

Cada eixo:

3 itens.

Cada item:

1–4 pontos conforme scoring key.

# **39. DR Velocidade**

Itens:

TH-001

TH-006

TH-007

Chave:

A=4
B=3
C=2
D=1.

Raw:

$3\leq DR.Speed.raw\leq 12$

# **40. DR Impacto**

Itens:

TH-004R

TH-008R

TH-009R

Chave:

A=4
B=3
C=2
D=1.

Raw:

3–12.

# **41. DR Persistência**

Itens:

TH-002

TH-010

TH-015

Chave:

A=1
B=2
C=3
D=4.

Raw:

3–12.

Essa direção diferente precisa ser explícita na configuração.

Não depende do sufixo do item.

# **42. DR Externalização**

Itens:

TH-003

TH-012

TH-013

Chave:

A=4
B=3
C=2
D=1.

Raw:

3–12.

# **43. Normalização DR**

Para qualquer eixo:

$DR\_{norm}=\frac{raw-3}{9}×100$

Assim:

raw=3 → 0

raw=12 → 100.

# **44. Exemplo DR raw=9**

$(9-3)/9×100$

$6/9×100$

$66.666666...$

Armazenamento:

precisão completa.

Display sugerido:

66,67.

# **45. Alto não significa bom**

Score Engine nunca codifica:

100 = bom

0 = ruim.

Isso vale para todos os quatro eixos.

# **46. Não existe DR Total**

O seguinte cálculo é estruturalmente proibido:

DR\_TOTAL =

Speed + Impact + Persistence + Externalization

Também proibidos:

PRESSURE\_SCORE

RESILIENCE\_SCORE

ou equivalentes sem specification futura.

# **47. Configurações derivadas DR**

Podemos futuramente identificar combinações como:

FAST\_HIGH\_IMPACT

HIGH\_PERSIST\_LOW\_EXTERNAL.

Porém isso pertence ao:

Evidence/Interpretation Engine.

O Score Engine entrega:

quatro eixos.

Pode, quando formalmente configurado, produzir features derivadas para pesquisa, mas nunca como novo score psicológico independente sem specification.

# **48. Relation Groups — tratamento no Score Engine**

Os seis Relation Groups são:

RG-01 PC-007 / PC-027
RG-02 PC-001 / PC-023
RG-03 PC-016 / PC-033
RG-04 PC-021 / PC-028
RG-05 TH-002 / TH-015
RG-06 TH-003 / TH-012.

No P1.0 eles servem para:

pesquisa de relações entre respostas.

Não geram score principal.

# **49. Outputs permitidos para Relation Groups**

O sistema pode preservar para análise:

item A;

resposta A;

item B;

resposta B;

score target A/B quando metodologicamente apropriado;

dados derivados explicitamente aprovados.

Mas não gera:

CONSISTENCY\_PERCENT = 83%.

# **50. Não existe penalidade por divergência**

Se RG-01 não “convergir”:

não reduzir:

PC;

qualidade;

score;

Evidence automaticamente.

Isso será analisado posteriormente.

# **51. SELF — exclusão formal do Score Engine**

SELF-01 a SELF-08 não entram em:

PC;

PRC;

DR;

facetas;

ranking;

gaps;

entropia.

O Score Engine pode apenas disponibilizá-los paralelamente para o Research Module.

# **52. Participant Feedback também não pontua**

Dificuldade;

desejabilidade;

confusão;

comentários.

Não alteram automaticamente o score.

Podem gerar:

quality flags posteriores.

# **53. Ocorrências também não reescrevem Score RAW**

Se um assessment receber:

TIMING\_ANALYSIS\_EXCLUDED

isso não modifica respostas.

Se receber:

INVALIDATED

o Score Run já produzido pode continuar historicamente armazenado.

O status controla:

elegibilidade para análises futuras.

Não destrói resultado histórico.

# **54. Matriz de scoring**

A implementação deverá usar configuração estruturada equivalente a:

| **Campo** | **Função** |
| --- | --- |
| item\_id | identifica item |
| option\_id | alternativa canônica |
| scoring\_version | versão da regra |
| primary\_metric | dimensão/eixo |
| raw\_points | valor atribuído |
| facet\_signal | opcional |
| facet\_points | opcional |
| scoring\_group | grupo de cálculo |
| valid\_from\_version | compatibilidade |
| status | regra publicada |

Isso deve ser importável/testável.

# **55. Não fazer scoring por texto**

O Score Engine não pode ler:

“Gosto de decidir rapidamente”

e usar NLP/IA para inferir:

D.

Ele usa:

option\_id → scoring rule.

Determinístico.

# **56. Não fazer scoring pelo código visível da opção**

Também não:

A=4 sempre.

No PC, A/B/C/D visuais podem mudar com randomização.

Pontuar:

option canonical identity.

No DR, a regra ordinal está explicitamente configurada.

# **57. Rounding Policy**

Sugestão congelada:

### **Armazenamento**

precision completa suportada pela implementação.

### **API interna**

não truncar arbitrariamente.

### **Display**

duas casas quando útil.

Exemplo:

0.2916666667

display:

0,29 ou 29,17%, conforme tela de pesquisa.

Mas a interface deve preservar significado da métrica.

# **58. Entropia e logaritmo**

Pode usar:

log natural;

log base 2;

qualquer base matematicamente consistente

desde que normalizada por:

log(4) na mesma base.

Resultado normalizado será idêntico.

No specification recomendamos:

natural log.

# **59. Zero na entropia**

Programador deve tratar:

$0ln(0)=0$

por convenção matemática de limite.

Não permitir:

NaN.

# **60. Ties e gaps**

Ties são dados válidos.

Nunca lançar:

erro porque duas dimensões empataram.

O software precisa modelar ranking com empates.

# **61. Golden Cases — PC**

Agora congelamos os casos matemáticos principais.

### **GOLD-SCORE-001**

Entrada:

D=6
I=6
S=6
C=6

Esperado:

relative\_frequency = .25 cada

TOP\_TIE = D,I,S,C

GAP12 = 0

normalized entropy = 1.0.

Proibido:

escolher D como primeiro só porque vem primeiro no código.

# **62. GOLD-SCORE-002**

Entrada:

D=24
I=0
S=0
C=0.

Esperado:

D relative = 1.0

I/S/C = 0

GAP12 = 24

entropy = 0.

# **63. GOLD-SCORE-003**

Entrada:

D=9
I=7
S=3
C=5.

Esperado:

D = .375

I = .291666...

S = .125

C = .208333...

Ranking:

D > I > C > S

GAP12 = 2

GAP23 = 2.

# **64. GOLD-SCORE-004**

PC-007 = opção semanticamente D/Autonomia.

PC-027 = opção semanticamente D/Autonomia.

Esperado para faceta:

hits = 2

opportunities = 2

reportable = false.

Proibido:

“Autonomia 100%”.

# **65. GOLD-SCORE-005**

PC-021 = opção C/Critério.

PC-028 = opção C/Critério.

Esperado:

criterion hits = 2

opportunities = 2.

# **66. GOLD-SCORE-006**

Executar o mesmo conjunto de escolhas com posições visuais diferentes.

Esperado:

exatamente os mesmos scores PC.

Isso prova:

scoring por option\_id, não display position.

# **67. Golden Cases — PRC**

### **GOLD-PRC-001**

Forced:

8 escolhas V.

Esperado:

V raw = 8

A = 0

C = 0

V relative = 1.0.

Proibido:

“100% visual”.

# **68. GOLD-PRC-002**

Forced:

V=4
A=3
C=1.

Esperado:

V=.50

A=.375

C=.125.

# **69. GOLD-PRC-003**

Independent:

V: 5,5,4,5
A: 4,4,4,4
C: 3,3,4,2.

Esperado:

V mean=4.75 → normalized=93.75

A mean=4.00 → normalized=75

C mean=3.00 → normalized=50.

# **70. GOLD-PRC-004**

Todos os 12 ratings:

Esperado:

V mean=5

A mean=5

C mean=5.

Proibido:

converter para:

33/33/33.

# **71. GOLD-PRC-005**

Forced:

V=7
A=1
C=0.

Independent:

V=4.8
A=4.7
C=4.6.

Esperado:

preservar ambos os conjuntos separadamente.

Score Engine não resolve a aparente diferença.

Isso pertence às camadas posteriores.

# **72. Golden Cases — DR**

### **GOLD-DR-001**

Todos os itens de cada eixo recebem pontuação máxima.

Esperado:

Speed=100

Impact=100

Persistence=100

Externalization=100.

Para Persistência:

D/D/D.

# **73. GOLD-DR-002**

Todos recebem mínima pontuação.

Esperado:

todos os quatro eixos = 0.

Persistência:

A/A/A.

# **74. GOLD-DR-003**

Qualquer eixo com raw sum=9.

Esperado:

$66.666666...$

Display:

66.67.

# **75. GOLD-DR-004**

Persistência:

TH-002 = D

TH-010 = D

TH-015 = D.

Esperado:

raw=12

normalized=100.

Esse teste protege contra erro de chave reversa.

# **76. GOLD-DR-005**

Configuração publicada de qualquer DR com:

randomizable=true.

Esperado:

falha na validação da versão.

Não executar silenciosamente.

# **77. Golden Case de integridade PC**

Devemos acrescentar explicitamente:

### **GOLD-PC-INTEGRITY-001**

Qualquer assessment válido P1.0:

$D+I+S+C=24$

Se não:

SCORE\_CONFIGURATION\_ERROR

ou:

INVALID\_SCORING\_INPUT.

# **78. Golden Case de integridade PRC Forced**

$V+A+C=8$

Sempre.

Se não:

erro.

# **79. Golden Case PRC Independent completeness**

Quatro ratings V?

Quatro A?

Quatro C?

Se uma modalidade possui apenas três por erro de dados:

Score Run não deve ser concluído como válido.

# **80. Golden Case DR completeness**

Cada eixo:

exatamente três itens válidos P1.0.

Se faltou um:

não calcular 2-item mean improvisado.

Resultado:

erro/incomplete scoring input.

# **81. Output mínimo do Score Engine**

Um SCORING\_RUN completo precisa produzir pelo menos:

| **Família** | **Outputs** |
| --- | --- |
| PC | D/I/S/C raw |
| PC | relative frequencies |
| PC | ranking/ties |
| PC | GAP12/GAP23 |
| PC | entropy |
| PC | facet hits/opportunities autorizados |
| PRC Forced | V/A/C raw + relative |
| PRC Independent | V/A/C means |
| PRC Independent | normalized optional |
| DR | 4 raw sums |
| DR | 4 normalized axes |
| Lineage | source items por métrica |
| Metadata | versions + run IDs |

# **82. Outputs que NÃO pertencem ao Score Engine**

Não produzir:

**perfil predominante**

**Assinatura de Governo**

**recomendação**

**UIG**

**Claim**

**Action**

**compatibilidade**

**resiliência**

**maturidade**

**competência**

**job fit**

**liderança**

**temperamento histórico final.**

# **83. API conceitual do Score Engine**

Entrada:

assessment\_id

requested\_scoring\_version

idempotency\_key

Saída de sucesso:

scoring\_run\_id

status

scoring\_version

instrument\_version

completed\_at

Os resultados detalhados ficam associados ao Run.

# **84. Endpoint conceitual**

Como já havíamos definido:

POST /internal/assessments/{assessment\_id}/score

Somente internal service/admin autorizado.

Nunca endpoint público do participante.

# **85. Idempotência**

Se exatamente a mesma solicitação técnica chegar duas vezes por retry:

não devemos criar dois resultados acidentalmente.

O desenvolvedor pode implementar:

idempotency key;

unique execution key;

ou equivalente.

Reprocessamento manual intencional:

deve ser distinguido de retry.

# **86. Falha parcial**

Não queremos:

60% dos Derived Scores salvos

e Run marcado COMPLETED.

Ou:

Run precisa ser atomicamente válido;

ou:

FAILED.

Implementação pode usar transação adequada.

# **87. Determinismo**

Se:

RAW idêntico

Instrument Version idêntica

Scoring Version idêntica,

então:

Derived Scores precisam ser idênticos.

Sempre.

# **88. IA proibida no Score Engine**

Nenhuma etapa matemática depende de:

LLM;

machine learning;

prompt;

heurística generativa.

No P1.0:

scoring é 100% determinístico.

# **89. Normas externas inexistem no P1.0**

Não temos norming congelado.

Logo não produzir:

percentil;

T-score;

stanine;

posição na população;

“acima da média”.

Essas métricas simplesmente não existem ainda.

# **90. Thresholds interpretativos também não pertencem aqui**

Mesmo que futuramente o Evidence Engine diga:

DR.PERSISTENCE = RELEVANT

isso não muda o Score Engine.

Score:

66.666...

Evidence:

classificação posterior.

Excelente separação.

# **91. Golden Cases e CI**

Todos os Golden Cases matemáticos bloqueantes devem rodar automaticamente na pipeline.

Se desenvolvedor muda código e:

GOLD-DR-004

passa a dar 0 em vez de 100,

build:

# **FALHA.**

Não chega em produção.

# **92. Fixtures versionados**

Dataset:

GOLDEN-P1.0.

Esses fixtures entram no repositório.

Não devem depender de dados reais da Onda 0.

# **93. Se metodologia mudar**

Exemplo:

P1.1 modifica scoring legítimo.

Não editar:

GOLDEN-P1.0

para o teste “voltar a passar”.

Criar:

GOLDEN-P1.1.

Os dois podem coexistir.

# **94. Cobertura obrigatória**

Quero:

**100% das regras matemáticas críticas cobertas por testes.**

Isso não significa:

100% de line coverage da aplicação inteira.

São conceitos diferentes.

Precisamos garantir integralmente:

chaves;

somas;

randomização;

normalizações;

empates;

reverse scoring;

completude;

versionamento.

# **95. Score Engine não conhece UIG**

Outra fronteira arquitetônica:

Score Engine não deve importar:

UIG-LIB-0.2.

Ele não precisa saber o que é:

Delegação;

Feedback;

Conflito.

Produz somente:

medidas.

# **96. Score Engine não conhece Claim**

Também não deve haver código como:

if D > 10:

claim = AUTONOMY

Isso seria mistura de camadas.

# **97. Facet signal não é Evidence**

Mesmo quando o Score Engine contabiliza:

Autonomy hits=2,

isso ainda não significa:

CONSISTENT.

A classificação pertence ao:

Evidence Engine.

# **98. Scoring Matrix congelada**

O handoff deverá incluir uma tabela canônica contendo, para os 56 responses:

item;

option/rating;

métrica;

pontos;

faceta quando aplicável;

grupo;

versão.

A nossa planilha operacional já possui a estrutura inicial dessa matriz e servirá como referência para o artefato canônico final.

# **99. Um cuidado importante na implementação**

Scoring rules não devem ficar espalhadas em:

frontend;

backend controller;

SQL manual;

relatório.

Deve existir:

uma fonte de verdade versionada para SCORE-P1.0.

Isso reduz divergência.

# **100. Definition of Done — SCORE-P1.0**

O Score Engine só será aceito quando:

| **Critério** | **Status necessário** |
| --- | --- |
| PC 24 itens | PASS |
| soma PC=24 | PASS |
| frequências PC | PASS |
| ties | PASS |
| gaps | PASS |
| entropia | PASS |
| facet signals | PASS |
| PRC Forced | PASS |
| PRC Independent | PASS |
| escalas independentes | PASS |
| DR 4 eixos | PASS |
| Persistência reversa | PASS |
| normalização DR | PASS |
| SELF excluído | PASS |
| Relation Groups sem score de sinceridade | PASS |
| randomização não altera resultado | PASS |
| precisão | PASS |
| versões compatíveis | PASS |
| Run imutável | PASS |
| Golden Cases | **100% PASS** |

# **DOCUMENTO 05 — CONCLUÍDO**

Agora temos formalmente:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification**

E há uma consequência importante: neste ponto o desenvolvedor já dispõe de informações suficientes para estimar com bastante precisão **Participant App + Backend + Data + Score Engine**.

O próximo documento será:

# **ETAPA 2.29F — O0 RESEARCH & PILOT PROTOCOL**

Ele vai responder ao que acontece **depois que o software funciona**: como selecionamos e codificamos participantes, como rodamos as primeiras 8–12 aplicações, como realizamos entrevistas cognitivas sem contaminar o instrumento, como registramos problemas, como decidimos KEEP/REWRITE/RETIRE e quais critérios permitem avançar para a Onda 1.

Esse documento é o que garante que nossa Onda 0 não vire simplesmente:

“mandamos o teste para algumas pessoas e perguntamos se gostaram”.

Ela será uma **operação de pesquisa estruturada**.

Perfeito. Agora vamos transformar a Onda 0 em um protocolo de pesquisa de verdade, para que ela produza informação utilizável — e não apenas opiniões do tipo “gostei” ou “achei longo”.

# **ETAPA 2.29F — O0 RESEARCH & PILOT PROTOCOL**

## **Documento 06 — Protocolo de Pesquisa e Onda 0**

**Versão do documento:** MGH-O0-PROTOCOL-0.1
**Instrumento:** MGH-P1.0
**Master Specification:** MGH-MASTER-P1.0-RC1
**Wave:** O0
**Status:** PILOT

A regra-mãe deste documento será:

**A Onda 0 existe para descobrir se o instrumento está sendo compreendido e respondido como planejado antes de começarmos a discutir sua validade em escala maior.**

# **1. Objetivo da Onda 0**

A Onda 0 não tenta provar que o MGH:

é válido;

é confiável;

prediz performance;

mede melhor que outros instrumentos;

possui normas populacionais.

A Onda 0 responde principalmente:

**As pessoas entendem o que estamos perguntando?**

**As alternativas representam possibilidades plausíveis?**

**Existem itens ambíguos?**

**Alguma alternativa denuncia a resposta “socialmente melhor”?**

**Existem palavras ou situações confusas?**

**As relações entre os itens se comportam minimamente como esperado?**

**A experiência de aplicação está funcionando tecnicamente?**

# **2. Tamanho inicial**

Baseline:

# **8 a 12 participantes**

Isso não é amostra para validação psicométrica.

É:

laboratório cognitivo estruturado.

Se surgirem alterações relevantes no instrumento, podemos executar:

O0-B

ou nova rodada equivalente antes da Onda 1.

# **3. Código dos participantes**

Formato inicial:

MGH-O0-001

MGH-O0-002

...

Até:

MGH-O0-012

Esses códigos são:

pseudônimos operacionais.

O banco utiliza:

UUIDs.

# **4. O criador também pode participar**

Mantemos:

creator\_participant = true

quando aplicável.

Mas existe uma regra importante:

**o criador não é o gabarito do instrumento.**

Suas respostas podem ajudar a testar:

fluxo;

tempo;

experiência;

coerência técnica.

Mas não servem para decidir:

“essa opção está certa porque comigo funcionou”.

# **5. Perfil desejado da Onda 0**

Não precisamos de representatividade estatística perfeita.

Mas devemos evitar 10 participantes excessivamente parecidos.

Idealmente buscar alguma diversidade em:

**função**

**nível de liderança**

**área**

**tempo de experiência profissional**

**porte de empresa**

**familiaridade ou não com testes comportamentais.**

Objetivo:

aumentar chance de encontrar problemas de compreensão.

# **6. Critério de inclusão**

Participante deve:

ser adulto;

compreender português brasileiro;

possuir experiência profissional suficiente para interpretar os contextos utilizados;

aceitar consentimento da Onda 0;

conseguir participar da aplicação e da entrevista posterior.

# **7. Critério de exclusão metodológica**

Não precisamos excluir pessoas apenas porque:

não lideram equipe.

Mas precisamos registrar:

contexto profissional.

Dependendo das hipóteses futuras, determinadas análises poderão utilizar subconjuntos.

# **8. Não selecionar apenas amigos próximos**

Isso pode produzir:

desejo de agradar;

conhecimento excessivo da metodologia;

pouca crítica.

Podemos ter conhecidos.

Mas idealmente parte da Onda 0 deve incluir pessoas capazes de:

criticar sem compromisso emocional com o projeto.

# **9. Convite**

A comunicação precisa ser neutra.

Evitar:

“Estamos testando um instrumento revolucionário.”

“Quero saber se ele acertou seu perfil.”

“Tenho certeza de que você vai se identificar.”

Melhor:

“Estamos realizando uma etapa piloto de um instrumento voltado ao contexto profissional. Nesta fase queremos principalmente avaliar clareza das situações, alternativas e experiência de aplicação.”

Isso reduz expectativa de “acerto”.

# **10. Antes da aplicação**

O participante recebe:

link individual;

breve orientação operacional;

informação sobre duração aproximada quando tivermos dados suficientes;

consentimento.

Não recebe:

explicação de D/I/S/C;

explicação de V/A/C;

explicação dos quatro eixos DR;

hipóteses;

scoring;

Relation Groups.

# **11. Regra importante**

# **NÃO FAZER THINK-ALOUD NA PRIMEIRA PASSAGEM.**

Ou seja:

o participante não fica verbalizando:

“agora estou pensando nisso…”

enquanto responde pela primeira vez.

Por quê?

Porque isso alteraria:

tempo;

processo de escolha;

atenção;

forma de responder.

Primeiro:

aplicação natural.

Depois:

entrevista cognitiva retrospectiva.

# **12. Fluxo oficial O0**

****CONVITE

↓

CONSENTIMENTO

↓

APLICAÇÃO NATURAL

↓

SELF

↓

FEEDBACK

↓

SUBMIT

↓

ENTREVISTA COGNITIVA

↓

ITEM REVIEW

↓

FLAGS / OCCURRENCES

↓

ANÁLISE DA ONDA

↓

ITEM SURVIVAL

↓

CHANGE LOG

↓

GATE REVIEW



# **13. Aplicação natural**

Durante o primeiro preenchimento:

o pesquisador não explica a pergunta;

não sugere alternativa;

não diz:

“essa pergunta quer medir autonomia”.

Se participante pedir ajuda:

registrar ocorrência.

Se for necessário esclarecer algo para que a aplicação continue:

anotar exatamente:

o que foi perguntado;

o que foi respondido pelo pesquisador.

Isso pode afetar o item.

# **14. Ambiente**

Idealmente, parte da Onda 0 pode ser:

remota;

parte acompanhada presencialmente ou por chamada,

desde que a intervenção seja mínima durante a resposta.

Objetivo:

observar também se o instrumento funciona no contexto real em que futuramente será aplicado.

# **15. Dados automáticos coletados**

Durante aplicação:

início;

fim;

tempo por cenário quando confiável;

primeira escolha;

escolha final;

revisões;

back navigation;

resumes;

ordem das opções apresentadas;

falhas técnicas;

submit.

Esses dados são auxiliares.

Não são interpretações psicológicas.

# **16. Após a aplicação**

Somente depois do submit:

entrevista cognitiva.

Essa ordem é importante porque o participante não consegue voltar e alterar respostas baseado na conversa com o pesquisador.

# **17. Objetivo da entrevista cognitiva**

Não perguntar apenas:

“Você gostou?”

Perguntas melhores:

“Teve alguma situação que você não entendeu de primeira?”

“Em quais perguntas duas alternativas pareceram igualmente verdadeiras para você?”

“Em alguma situação nenhuma alternativa parecia adequada?”

“Teve alguma palavra que pareceu estranha ou pouco natural?”

“Alguma pergunta pareceu repetitiva?”

“Alguma alternativa parecia claramente mais profissional ou mais bonita que as outras?”

“Em quais perguntas o contexto mudaria muito sua resposta?”

“Houve alguma em que você marcou uma opção, mas ela não representava bem o que queria dizer?”

Esse é o tipo de informação que queremos.

# **18. Interviewer neutrality**

O entrevistador não deve dizer:

“Ah, mas essa pergunta significa X.”

Antes de registrar a interpretação do participante.

Primeiro:

“O que você entendeu?”

Depois, se necessário:

investigar.

# **19. Técnicas de probing**

Podemos utilizar perguntas como:

### **Comprehension probe**

“Com suas palavras, o que essa situação estava perguntando?”

### **Paraphrase probe**

“Como você explicaria essa alternativa para outra pessoa?”

### **Confidence probe**

“Você teve certeza da escolha ou ficou dividido?”

### **Recall probe**

“Em que situação real você pensou ao responder?”

### **Category-selection probe**

“Por que escolheu esta e não a outra?”

### **Context probe**

“Em qual contexto sua resposta mudaria?”

Essas perguntas ajudam muito.

# **20. Não transformar entrevista em terapia**

Não queremos saber:

“por que você é assim desde a infância?”

A investigação permanece:

compreensão do item e processo de resposta profissional.

# **21. Flag System oficial**

Mantemos os dez códigos:

| **Código** | **Significado** |
| --- | --- |
| CMP | problema de compreensão |
| AMB | ambiguidade |
| NFA | nenhuma alternativa adequada |
| TWO | duas alternativas igualmente adequadas |
| DES | desejabilidade social/profissional |
| CTX | contexto altera fortemente a resposta |
| VOC | vocabulário problemático |
| RED | repetição percebida |
| COG | esforço cognitivo excessivo |
| MAP | resposta não representa o construto pretendido |

# **22. Uma flag não condena o item**

Um participante pode ter:

VOC

em um item.

Isso não significa:

item deve morrer.

Queremos padrões.

# **23. Severidade de flag**

Sugestão:

MINOR

MODERATE

MAJOR

INVALIDATING

Exemplo:

### **MINOR**

palavra um pouco formal, mas compreensão ocorreu.

### **MODERATE**

dúvida relevante, mas participante conseguiu decidir.

### **MAJOR**

interpretação diferente da intenção metodológica.

### **INVALIDATING**

item não funcionou para aquela aplicação de forma substancial.

# **24. MAP é especialmente importante**

MAP significa:

a alternativa escolhida não representa adequadamente o construto que acreditávamos estar capturando.

Exemplo hipotético:

construímos uma alternativa pensando em:

autonomia.

Participante escolheu porque:

queria terminar mais rápido.

Então:

o mapping precisa ser analisado.

Isso é muito mais importante que simplesmente saber:

“ele escolheu D”.

# **25. DES — desejabilidade**

Perguntar:

“Alguma alternativa parecia a opção que um bom profissional deveria escolher?”

Se muitos participantes identificarem a mesma:

risco de desejabilidade.

Não significa automaticamente que a opção é inútil.

Mas pode exigir:

reescrita;

balanceamento;

ou substituição.

# **26. TWO**

Se repetidamente dois padrões aparecem como:

igualmente verdadeiros

pode existir:

ambiguidade;

overlap semântico;

contexto insuficiente;

ou simplesmente natureza forced-choice.

Precisamos distinguir.

# **27. NFA**

Se vários participantes dizem:

“nenhuma alternativa me representa”

isso pode indicar:

lacuna real no conjunto.

Mas não adicionamos uma quinta alternativa imediatamente.

Primeiro:

entendemos por quê.

# **28. CTX**

Esse flag é particularmente importante porque o MGH é contextual.

Se pessoa diz:

“Depende se estou falando com meu diretor ou com meu funcionário.”

isso pode significar:

o item precisa especificar contexto;

ou:

a variação é justamente informação útil.

Não devemos corrigir automaticamente.

# **29. RED**

Alguma repetição é intencional.

Temos Relation Groups.

Logo:

“pareceu repetido”

não é automaticamente problema.

Pergunta:

a repetição ficou óbvia a ponto de contaminar a resposta?

Esse é o ponto.

# **30. COG**

Queremos identificar itens que exigem:

releitura excessiva;

carga verbal;

muitas condições;

comparação mental difícil.

Nosso objetivo não é testar compreensão verbal sofisticada.

# **31. Registro de observações**

Cada observação precisa ligar:

participante;

assessment;

item;

flag;

severidade;

comentário;

possível ação.

Isso permite depois consultar:

quantos participantes tiveram AMB no PC-027?

# **32. OCCURRENCE LOG**

Ocorrência é diferente de problema do item.

Exemplos:

internet caiu;

participante recebeu ligação;

pesquisador explicou item;

browser travou;

participante respondeu acompanhado por outra pessoa;

aplicação foi interrompida;

erro de sistema.

Isso vai para:

OCCURRENCE.

# **33. Exclude Scope**

Mantemos:

NONE

ITEM

TIMING\_ANALYSIS

ASSESSMENT

SPECIFIC\_ANALYSIS.

Exemplo:

participante deixou notebook aberto por duas horas.

Resposta pode continuar válida.

Timing daquele trecho:

não.

Logo:

TIMING\_ANALYSIS.

# **34. INVALIDATING não significa DELETE**

Se uma ocorrência invalida o assessment para determinada análise:

RAW permanece.

Isso é central.

# **35. Post-test participant feedback**

Além da entrevista, a plataforma coleta feedback estruturado.

Esse feedback permite comparar:

percepção imediata do participante

com:

entrevista do pesquisador.

Interessante metodologicamente.

# **36. Hypothesis Register**

A Onda 0 já possui 12 hipóteses iniciais.

Elas não são todas “validação” no sentido forte.

São:

verificações exploratórias pré-definidas.

# **37. H-001**

PRC.V.INDEPENDENT

deve mostrar associação positiva exploratória com:

SELF-06.

Não definimos agora:

tamanho mínimo final aceitável.

O0 observa direção e comportamento inicial.

# **38. H-002**

PRC Auditiva ↔ SELF-07.

# **39. H-003**

PRC Cinestésica ↔ SELF-08.

# **40. H-004**

Autonomia ↔ SELF-02.

# **41. H-005**

Critério ↔ SELF-03.

# **42. H-006**

DR Externalização ↔ SELF-04.

# **43. H-007**

DR Persistência ↔ SELF-05.

# **44. H-008**

Decision Speed ↔ SELF-01.

# **45. H-009**

Os seis Relation Groups devem apresentar mais coerência interna, em média, que pares sem relação teórica comparável.

Na O0:

observação exploratória.

Não transformação imediata em índice de qualidade.

# **46. H-010**

PC options não devem apresentar sistematicamente concentração extrema na mesma alternativa em grande parte dos itens.

Se um item recebe 90–100% da mesma opção numa amostra maior:

pode haver:

desejabilidade;

formulação desigual;

opção obviamente superior.

O0 apenas começa a sinalizar.

# **47. H-011**

PRC Forced e Independent devem mostrar:

alguma convergência,

sem expectativa de:

equivalência perfeita.

Eles medem formatos diferentes.

# **48. H-012**

Os quatro eixos DR devem mostrar:

independência parcial.

Não queremos descobrir que:

Velocidade;

Impacto;

Persistência;

Externalização

são apenas quatro nomes para uma única variável geral.

O0 não consegue provar estrutura.

Mas pode revelar problemas óbvios.

# **49. Regra importante sobre hipóteses**

Não fazemos:

“rodei os dados, encontrei algo interessante, então vou dizer que essa sempre foi a hipótese”.

O Hypothesis Register existe justamente para:

pré-documentar o que estamos observando.

# **50. Análise qualitativa vem primeiro na O0**

Com 8–12 participantes, números precisam ser interpretados com extremo cuidado.

Prioridades:

1. compreensão;
2. adequação das alternativas;
3. problemas de contexto;
4. desejabilidade;
5. UX/aplicação;
6. padrões preliminares.

Não:

p-value hunting.

# **51. Métricas operacionais úteis**

Podemos acompanhar:

tempo total;

tempo mediano por cenário;

número de revisões;

cenários mais revisados;

abandono;

save failures;

resumes;

feedback de dificuldade.

Mas nenhuma delas recebe corte arbitrário como:

“mais de 40 segundos = problema”.

Primeiro observamos.

# **52. Item Review Meeting**

Ao final da O0, fazemos análise item a item.

Para cada item, perguntas:

Foi compreendido como pretendido?

As alternativas funcionaram?

Houve desejabilidade?

Houve ambiguidade?

O mapping continua defensável?

O contexto estava suficientemente claro?

Houve problema de vocabulário?

Existe redundância excessiva?

O item merece sobreviver?

# **53. Status de sobrevivência**

Cada item recebe uma decisão:

KEEP

REWRITE\_MINOR

REWRITE\_MAJOR

REKEY\_REVIEW

RESERVE

RETIRE

NEW\_ITEM\_REQUIRED

# **54. KEEP**

Sem problema relevante identificado para a próxima wave.

Não significa:

item psicometricamente validado.

Apenas:

sobrevive ao Gate daquela etapa.

# **55. REWRITE\_MINOR**

Alteração pequena:

vocabulário;

clareza;

fluidez.

Mas atenção:

mesmo uma mudança “minor” cria:

nova versão de texto.

Não altera silenciosamente P1.0.

# **56. REWRITE\_MAJOR**

Mudança que altera substancialmente:

cenário;

significado;

alternativas;

contexto.

Provavelmente exige:

nova pilotagem do item.

# **57. REKEY\_REVIEW**

Quando existe dúvida se:

a alternativa realmente representa o score/faceta pretendida.

É muito importante.

Não basta reescrever.

Pode existir erro de mapping conceitual.

# **58. RESERVE**

Item não segue para a próxima aplicação principal naquele momento, mas permanece no banco para estudo ou uso futuro.

# **59. RETIRE**

Item não deve ser utilizado em novas versões.

Continua historicamente disponível para rastreabilidade.

# **60. NEW\_ITEM\_REQUIRED**

Quando descobrimos:

o construto precisa de cobertura que o banco atual não está oferecendo adequadamente.

Isso é especialmente importante para facetas com cobertura baixa.

# **61. Regra de alteração durante a Wave**

Depois que O0 começou:

nada de editar item silenciosamente.

Se descobrimos um problema:

registramos.

Se for grave o suficiente:

interrompemos.

Criamos:

nova versão / nova wave.

Não misturamos diferentes itens sob o mesmo código/versão.

# **62. External expert review**

Antes da Onda 1, pode ser altamente valioso submeter:

itens;

construct map;

scoring;

limites;

protocolo

a revisão de profissional externo qualificado.

Especialmente:

psicometrista.

Isso não precisa acontecer antes de cada participante O0.

Mas deve entrar no roadmap antes de claims mais fortes.

# **63. Gate O0 → O1**

A decisão final precisa ser uma destas:

### **ADVANCE**

Instrumento pode seguir para O1 na versão aprovada.

### **ADVANCE\_WITH\_MINOR\_FIXES**

Existem correções limitadas e documentadas.

### **REPEAT\_O0\_WAVE**

Mudanças são importantes o suficiente para exigir nova verificação cognitiva.

### **STOP\_AND\_REDESIGN**

Problemas estruturais exigem revisão mais profunda.

# **64. Não existe “aprovação automática por nota”**

Não faremos:

“O0 score = 83, portanto avançar.”

O Gate é:

julgamento metodológico documentado.

# **65. Critérios mínimos de Gate**

Eu estruturaria o Gate em oito dimensões:

| **Critério** | **Pergunta** |
| --- | --- |
| Compreensão | itens foram interpretados adequadamente? |
| Alternativas | opções foram suficientemente plausíveis? |
| Desejabilidade | há alternativas obviamente “melhores”? |
| Contexto | situações possuem contexto adequado? |
| Mapping | scoring pretendido continua defensável? |
| Experiência | aplicação funciona sem fricção crítica? |
| Dados | RAW/eventos estão íntegros? |
| Instrumento | mudanças necessárias são administráveis? |

# **66. Exemplos de razão para repetir O0**

Muitos itens com:

MAJOR AMB.

Múltiplas opções percebidas como moralmente superiores.

Alteração estrutural do PC.

Problemas grandes no DR.

Vários itens reescritos substancialmente.

Mudança de instrução central.

Nesse caso:

repetir é qualidade, não fracasso.

# **67. Razões possíveis para STOP\_AND\_REDESIGN**

Exemplo extremo:

participantes sistematicamente não conseguem distinguir alternativas;

construct mapping mostra problemas amplos;

estrutura forced-choice se mostra inadequada para o objetivo atual;

DR não funciona cognitivamente como planejado.

A existência deste Gate mostra que:

estamos dispostos a corrigir a metodologia se os dados exigirem.

# **68. Onda 1**

Só depois do Gate.

Estimativa planejada:

# **40–60 participantes**

Aqui começamos a olhar com mais atenção:

distribuição;

itens;

relações;

consistência inicial;

comportamento do scoring.

Ainda não é validação final.

# **69. Onda 2**

Planejamento inicial:

# **~200–400 participantes**

O número final depende:

modelo psicométrico;

número de itens;

objetivos;

análises;

recomendação do especialista.

Não congelaremos:

“tem que ser exatamente 300”.

# **70. Onda 3**

Validação/norming e trabalhos avançados com:

profissional de psicometria qualificado.

É nessa fase que poderemos discutir com muito mais propriedade:

estrutura;

confiabilidade;

evidências de validade;

normas;

comparações;

limites interpretativos.

# **71. Resultados individuais na O0**

Mantemos:

**não entregar relatório automático.**

Isso é particularmente importante aqui.

Se mostrarmos relatório antes da entrevista:

o participante pode começar a:

reler suas respostas;

confirmar;

discordar;

reinterpretar;

tentar “encaixar” sua própria narrativa.

Isso contamina parte da pesquisa.

# **72. Shadow Interpretation**

Podemos internamente executar:

INTERP-0.2

em modo:

RESEARCH\_INTERNAL.

Mas isso deve ser analisado:

separadamente.

Não usamos o participante como “validador de perfil” simples.

# **73. Uma futura entrevista de interpretação pode existir**

Depois da etapa cognitiva, poderemos eventualmente fazer pesquisa separada sobre:

utilidade/compreensão do relatório.

Mas isso deve ser tratado como:

protocolo distinto.

Não misturar com a entrevista cognitiva dos itens.

# **74. LGPD e O0**

A arquitetura precisa oferecer:

consentimento versionado;

finalidade clara;

minimização;

segurança;

controle de acesso;

retirada;

rastreabilidade.

A redação/legal basis definitiva:

revisão jurídica.

# **75. Uso proibido dos resultados O0**

Resultados experimentais não devem ser utilizados para:

contratar;

demitir;

punir;

promover;

remunerar;

classificar formalmente alguém no trabalho.

Isso precisa constar do protocolo.

# **76. Identidade na análise**

Preferência:

trabalhar com public\_code.

Exemplo:

MGH-O0-007.

Nome real só quando operacionalmente necessário.

# **77. Export para análise**

Padrão:

pseudonimizado.

Se identidade não é necessária:

não exportar.

# **78. Interviewer access**

Sempre que possível:

o entrevistador não precisa visualizar:

score targets;

facet mappings;

interpretações automáticas

durante a entrevista.

Isso reduz viés.

# **79. Blindness parcial**

Não estamos fazendo ensaio clínico duplo-cego.

Mas podemos reduzir viés metodológico.

Por exemplo:

entrevistador vê o item e resposta

mas não:

“esta é uma questão de D-Autonomia”.

Quando possível.

# **80. O0 Kit operacional**

O sistema e/ou planilha já deve contemplar os nove componentes:

O0-01 Consentimento

O0-02 Participant Registration

O0-03 RAW Response Database

O0-04 Cognitive Interview Guide

O0-05 Cognitive Audit Sheet

O0-06 Occurrence Log

O0-07 Change Log

O0-08 Hypothesis Register

O0-09 Gate Review.

# **81. A planilha operacional existente**

Nossa planilha:

**MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx**

já representa uma versão operacional desse protocolo e poderá servir como:

referência de campos;

backup operacional inicial;

modelo de exportação;

apoio ao desenvolvimento do Admin O0.

O software não deve, porém, depender dela como banco principal.

# **82. Responsabilidade do pesquisador**

Na Onda 0, pesquisador deve:

não ensinar a metodologia durante o teste;

registrar dúvidas;

usar probes neutros;

distinguir opinião de evidência;

documentar intervenções;

não ajustar item informalmente;

registrar alterações no Change Log.

# **83. Responsabilidade do metodologista**

Analisar:

flags;

mappings;

Relation Groups;

SELF;

hipóteses;

item survival;

mudanças;

Gate.

E principalmente:

não defender item apenas porque foi ele quem escreveu.

# **84. Princípio de sobrevivência do item**

Quero preservar esta frase:

**Não escolheremos perguntas porque parecem boas. Cada pergunta terá que provar por que merece existir no MGH.**

Na O0, isso começa cognitivamente.

Nas ondas seguintes:

empiricamente.

# **85. Critério de sucesso da Onda 0**

O0 não é bem-sucedida quando:

“todo mundo gostou”.

É bem-sucedida quando conseguimos sair dela sabendo:

**o que manter**

**o que mudar**

**o que investigar**

**o que retirar**

**e por quê.**

Mesmo descobrir muitos problemas pode significar:

O0 funcionou muito bem.

# **86. Outputs oficiais da O0**

Ao final, teremos:

### **Wave Summary**

quantos participaram;

quantos completaram;

tempo;

ocorrências;

status.

### **Item Audit**

flags por item.

### **Item Survival**

KEEP / REWRITE / etc.

### **Hypothesis Notes**

observações H001–H012.

### **Change Proposals**

mudanças sugeridas.

### **Gate Review**

decisão O0→O1.

# **87. O que NÃO será produzido como conclusão científica**

Não escrever após 10 pessoas:

“O MGH tem validade comprovada.”

“O instrumento tem 95% de precisão.”

“As escalas são confiáveis.”

“Comprovamos quatro dimensões.”

Nada disso é autorizado.

# **88. Change after O0**

Se o Gate decidir:

ADVANCE\_WITH\_MINOR\_FIXES

e houver alteração no instrumento:

provavelmente nasce:

MGH-P1.1

ou versão equivalente.

Com:

novo Item Text Version;

novo Banco quando aplicável;

novo Golden Dataset quando scoring for afetado.

# **89. Se apenas UI mudar**

Exemplo:

botão maior;

melhoria de contraste;

spacing.

Sem alteração semântica:

App version muda.

Instrumento pode permanecer:

P1.0.

# **90. Se texto de item mudar semanticamente**

Mesmo que pareça:

“só duas palavras”,

se significado foi alterado:

nova versão metodológica.

# **91. Research Freeze antes da Wave**

Antes de iniciar O0:

precisamos congelar:

instrumento;

scoring;

consentimento;

feedback;

entrevista;

flags;

hipóteses;

Gate criteria.

Isso evita mover as regras no meio do jogo.

# **92. Pre-O0 Checklist**

Antes de MGH-O0-001:

| **Item** | **Status necessário** |
| --- | --- |
| P1.0 publicado | PASS |
| SCORE-P1.0 publicado | PASS |
| Instrument Validator | PASS |
| Golden Cases | PASS |
| consentimento | aprovado |
| Participant App | homologado |
| autosave | PASS |
| resume | PASS |
| event logging | PASS |
| admin O0 | funcional |
| cognitive interview | configurada |
| flags | configuradas |
| occurrences | configuradas |
| export | testado |
| backup | ativo |
| restore | testado |
| access control | PASS |

# **93. Dry Run**

Antes do primeiro participante real:

executar pelo menos:

**1 aplicação sintética completa.**

Idealmente mais de uma.

Testar:

mobile;

desktop;

internet interrompida;

resume;

mudança de respostas;

submit;

export;

score.

# **94. Fire Drill**

Eu faria também um teste simples:

“O banco falhou. Como restauramos?”

e:

“Um participante perdeu o link. Como revogamos e gerenciamos acesso?”

Melhor descobrir antes da O0.

# **95. O0 Operating Rule**

Quando a wave começar:

estabilidade acima de novas funcionalidades.

Evitar deploy de features desnecessárias no meio da O0.

Correções críticas:

sim.

Mudanças cosméticas:

preferencialmente depois.

# **96. Registro de versão por participante**

Todo assessment precisa registrar:

Master;

Instrument;

Scoring;

Consent;

Feedback version;

Research protocol version.

Assim sabemos:

exatamente sob quais regras aquela pessoa participou.

# **97. Definition of Done — O0 Protocol**

Consideraremos este protocolo implementado quando:

* participantes puderem ser registrados;
* consentimento estiver versionado;
* aplicação natural ocorrer sem interferência;
* entrevistas puderem ser registradas;
* flags por item puderem ser cadastradas;
* ocorrências puderem ser registradas;
* item survival funcionar;
* hypotheses existirem no sistema;
* Change Log estiver disponível;
* Gate Review estiver disponível;
* exports estiverem testados;
* raw permanecer íntegro;
* nenhum resultado experimental for mostrado ao participante.

# **98. Resultado do documento**

Com isso, a Onda 0 deixa de ser:

beta test informal.

E passa a ser:

# **uma etapa metodológica controlada do desenvolvimento do MGH™.**

# **DOCUMENTO 06 — CONCLUÍDO**

Nosso Developer Handoff agora possui:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol**

O próximo documento é fundamental para o contrato com o desenvolvedor:

# **ETAPA 2.29G — GOLDEN CASES & ACCEPTANCE TEST SPECIFICATION**

Nele vamos deixar de dizer apenas “o sistema deve funcionar” e definir **como provar que ele funciona**.

Vamos consolidar:

**testes matemáticos**

**testes de fluxo**

**testes de versionamento**

**testes de RAW**

**testes de segurança**

**testes do Instrument Validator**

**testes do Score Engine**

**futuros testes de Interpretation Engine**

**severidade BLOCKING / CRITICAL-PILOT / NON-BLOCKING**

e finalmente transformar tudo em uma:

# **Matriz de Aceite da Fase A**

Isso será extremamente útil para orçamento, contrato e homologação porque reduz uma frase perigosa:

“Pra mim está funcionando.”

para algo objetivo:

**“Os critérios definidos passaram ou não passaram.”**

Perfeito. Agora vamos transformar todos os requisitos anteriores em algo que possa ser **objetivamente homologado**.

# **ETAPA 2.29G — GOLDEN CASES & ACCEPTANCE TEST SPECIFICATION**

## **Documento 07 — Casos de Ouro e Critérios de Aceite**

**Versão:** MGH-TEST-SPEC-0.1
**Golden Dataset:** GOLDEN-P1.0
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Escopo principal:** Fase A — Pilot Core / Onda 0

A regra-mãe deste documento será:

**Nenhuma implementação é aceita porque “parece estar funcionando”. Ela precisa produzir resultados conhecidos a partir de entradas conhecidas.**

# **1. O que são Golden Cases no MGH™**

Golden Case é um cenário de teste no qual já sabemos antecipadamente:

**entrada**

→ **processamento esperado**

→ **saída correta.**

Exemplo simples:

Se os 24 itens PC forem pontuados como D, o resultado obrigatoriamente precisa ser D=24, I=0, S=0, C=0.

Se o software produzir:

D=23

ou:

D=24, I=1,

não existe discussão estética.

# **O SOFTWARE ESTÁ ERRADO.**

# **2. O que Golden Cases NÃO são**

Eles não são:

perfis ideais;

participantes reais;

casos psicológicos;

normas populacionais;

evidência de validade;

exemplos do “líder perfeito”.

São:

**fixtures técnicos/metodológicos sintéticos.**

# **3. Cinco classes de testes**

A suíte do MGH será organizada em:

| **Classe** | **Objetivo** |
| --- | --- |
| UNIT | testar regra isolada |
| INTEGRATION | testar módulos trabalhando juntos |
| E2E | testar fluxo completo como usuário |
| REGRESSION | garantir que algo que funcionava não quebrou |
| SECURITY | testar acesso, exposição e abuso |

Golden Cases podem aparecer em várias dessas classes.

# **4. Três níveis de severidade**

Precisamos separar claramente gravidade.

| **Severidade** | **Significado** |
| --- | --- |
| BLOCKING | sistema não pode ir para O0 |
| CRITICAL\_PILOT | operação do piloto fica comprometida |
| NON\_BLOCKING | defeito que pode ser corrigido sem invalidar a integridade central |

Exemplo:

Score errado:

BLOCKING.

Logo desalinhada 3 pixels:

NON\_BLOCKING.

Autosave quebrado:

CRITICAL\_PILOT ou BLOCKING, conforme impacto.

# **5. Política de aceite**

Para iniciar O0:

**100% dos testes BLOCKING precisam passar.**

E:

**100% dos testes CRITICAL\_PILOT relacionados ao fluxo essencial precisam passar.**

Defeitos NON\_BLOCKING podem eventualmente permanecer, desde que:

tenham ticket;

sejam conhecidos;

não contaminem dados;

não alterem comportamento metodológico.

# **6. SCORE GOLDEN CASES — PC**

## **GOLD-SCORE-001 — distribuição totalmente empatada**

Entrada:

D = 6
I = 6
S = 6
C = 6

Esperado:

| **Métrica** | **Resultado** |
| --- | --- |
| D relative | 0.25 |
| I relative | 0.25 |
| S relative | 0.25 |
| C relative | 0.25 |
| GAP12 | 0 |
| Entropia normalizada | 1.0 |
| Top | TOP\_TIE: D,I,S,C |

Falha grave:

sistema escolhe D como “primeiro perfil” porque D aparece primeiro no código.

**Severidade:** BLOCKING.

# **7. GOLD-SCORE-002 — concentração máxima**

Entrada:

D=24
I=0
S=0
C=0.

Esperado:

D relative = 1.0.

I/S/C = 0.

GAP12 = 24.

Entropia = 0.

Também:

D+I+S+C=24.

**Severidade:** BLOCKING.

# **8. GOLD-SCORE-003 — distribuição assimétrica**

Entrada:

D=9
I=7
S=3
C=5.

Esperado:

D=.375

I=.291666666...

S=.125

C=.208333333...

Ranking:

D > I > C > S

GAP12=2.

GAP23=2.

O sistema armazena precisão interna e arredonda apenas para exibição.

**Severidade:** BLOCKING.

# **9. GOLD-SCORE-004 — faceta Autonomia**

Entrada:

PC-007 → alternativa que sinaliza D/Autonomia.

PC-027 → alternativa que sinaliza D/Autonomia.

Esperado:

autonomy\_hits = 2

autonomy\_opportunities = 2

reportable = false.

Resultado proibido:

“Autonomia 100%”.

**Severidade:** BLOCKING para scoring; apresentação indevida também é bloqueante metodologicamente.

# **10. GOLD-SCORE-005 — Critério**

PC-021 → C/Critério.

PC-028 → C/Critério.

Esperado:

criterion\_hits = 2

criterion\_opportunities = 2.

Nenhuma inferência adicional no Score Engine.

# **11. GOLD-SCORE-006 — randomização não altera score**

Executamos exatamente as mesmas escolhas semânticas em dois assessments sintéticos.

No primeiro, opção D pode aparecer como posição 1.

No segundo:

posição 4.

Esperado:

scores absolutamente idênticos.

Isso prova que:

option\_id, não display\_position, determina scoring.

**Severidade:** BLOCKING.

# **12. Teste de integridade PC**

Para qualquer assessment P1.0 válido:

$D+I+S+C=24$

Caso contrário:

INVALID\_SCORING\_INPUT

ou:

SCORE\_CONFIGURATION\_ERROR.

Não completar Run silenciosamente.

# **13. GOLDEN CASES — PRC Forced**

## **GOLD-PRC-001**

Entrada:

8 escolhas semanticamente V.

Esperado:

V raw = 8.

A=0.

C=0.

V relative=1.0.

Proibido:

“100% visual.”

# **14. GOLD-PRC-002**

Entrada:

V=4

A=3

C=1.

Esperado:

V=.50

A=.375

C=.125.

E:

$V+A+C=8$

em raw count.

# **15. GOLDEN CASES — PRC Independent**

## **GOLD-PRC-003**

V:

5,5,4,5.

A:

4,4,4,4.

C:

3,3,4,2.

Esperado:

| **Modalidade** | **Média** | **Normalização** |
| --- | --- | --- |
| V | 4.75 | 93.75 |
| A | 4.00 | 75.00 |
| C | 3.00 | 50.00 |

# **16. GOLD-PRC-004 — independência das escalas**

Entrada:

todos os 12 ratings = 5.

Esperado:

V=5

A=5

C=5.

Proibido:

33/33/33.

Esse teste é crítico porque protege a diferença entre:

independent ratings

e:

ipsative forced-choice.

# **17. GOLD-PRC-005 — Forced ≠ Independent**

Forced:

V=7

A=1

C=0.

Independent:

V=4.8

A=4.7

C=4.6.

Esperado:

preservar as duas arquiteturas separadamente.

Score Engine não produz:

FINAL\_PRC.

**Severidade:** BLOCKING.

# **18. PRC completeness test**

Para concluir Score Run:

Forced:

exatamente 8 respostas válidas.

Independent:

4 ratings V + 4 A + 4 C.

Se C possuir apenas três valores:

Run não deve usar média de três improvisadamente.

# **19. GOLDEN CASES — DR™**

## **GOLD-DR-001 — máximos**

Entrada:

pontuação máxima em todos os eixos.

Esperado:

Speed=100

Impact=100

Persistence=100

Externalization=100.

Para Persistência:

D/D/D.

# **20. GOLD-DR-002 — mínimos**

Entrada:

pontuação mínima.

Esperado:

todos os eixos = 0.

Persistência:

A/A/A.

# **21. GOLD-DR-003 — raw 9**

Entrada:

um eixo soma 9.

Esperado:

$66.666666...$

Exibição:

66.67.

Banco:

preserva precisão.

# **22. GOLD-DR-004 — proteção da Persistência**

TH-002=D

TH-010=D

TH-015=D.

Esperado:

raw = 12.

normalized = 100.

Este teste protege contra erro clássico de reverse key.

**Severidade:** BLOCKING.

# **23. GOLD-DR-005 — randomização proibida**

Configuração:

DR com:

randomizable=true.

Resultado esperado:

Instrument/Version Validator rejeita a configuração.

Não chegar ao participante.

**Severidade:** BLOCKING.

# **24. GOLD-DR-006 — ausência de total**

Mesmo com quatro eixos válidos, o Score Engine não deverá produzir:

DR\_TOTAL

PRESSURE\_TOTAL

RESILIENCE

ou equivalente.

Se aparecer:

teste falha.

# **25. Golden Cases de instrumento**

Precisamos validar a configuração publicada antes mesmo de um assessment existir.

INST-001

MGH-P1.0 contém exatamente:

48 cenários.

INST-002

Scenario 1:

PC-001.

INST-003

Scenario 48:

PC-011R.

INST-004

24 cenários PC.

INST-005

8 PRC Forced.

INST-006

4 PRC Independent.

INST-007

12 DR.

INST-008

PRC Independent gera 12 ratings.

INST-009

56 respostas pontuáveis totais.

INST-010

8 SELF.

INST-011

6 Relation Groups.

Qualquer falha:

versão não publica.

# **26. Teste de códigos TH**

Itens DR permanecem registrados como:

TH-001...

Não devem ser automaticamente renomeados.

Teste:

canonical\_item\_code deve preservar o código publicado.

O construct pode ser:

DR.SPEED

etc.

# **27. Testes de exposição pública**

Esses são críticos.

Frontend público não deve receber desnecessariamente:

score\_target

facet\_signal

construct

reverse\_key

relation\_group

evidence\_code

canonical\_dimension.

Teste:

inspecionar payload da API pública.

Se esses dados forem expostos:

SEC-001 FAIL.

**Severidade:** BLOCKING.

# **28. FLOW-001 — assessment incompleto**

Assessment contém:

55/56 respostas pontuáveis.

Usuário tenta submit.

Esperado:

ASSESSMENT\_NOT\_READY.

Status:

IN\_PROGRESS.

Nenhum submitted\_at.

Nenhum Score Job oficial.

# **29. FLOW-002 — submit válido**

Assessment:

48 cenários completos;

56 respostas;

8 SELF;

feedback obrigatório;

consentimento;

contexto.

Submit.

Esperado:

COMPLETED.

submitted\_at preenchido.

Respostas bloqueadas.

Evento FINAL\_SUBMIT.

Score job único quando configurado.

# **30. FLOW-003 — edição pós-submit**

Depois de COMPLETED, usuário tenta alterar uma resposta.

Esperado:

ASSESSMENT\_ALREADY\_COMPLETED.

RAW:

inalterado.

**Severidade:** BLOCKING.

# **31. FLOW-004 — idempotência**

Mesmo submit chega duas vezes com mesma idempotency key.

Esperado:

um único fechamento lógico.

Um único score job.

Nenhum assessment duplicado.

Nenhum segundo submitted\_at lógico.

# **32. FLOW-005 — opção não apresentada**

Payload tenta enviar:

option\_id

que pertence ao item, porém não fazia parte daquela OPTION\_PRESENTATION válida.

Esperado:

OPTION\_NOT\_PRESENTED.

Resposta não salva.

Isso protege integridade e manipulação.

# **33. FLOW-006 — version mismatch**

Assessment P1.0 tenta ser processado por scoring incompatível.

Esperado:

VERSION\_MISMATCH.

Nenhum resultado oficial.

# **34. FLOW-007 — invalidation**

Assessment concluído é posteriormente invalidado metodologicamente.

Esperado:

status apropriado.

Motivo.

Usuário que invalidou.

Timestamp.

Audit Log.

RAW preservado.

Score Run histórico preservado.

# **35. FLOW-008 — withdrawn**

Participante é marcado WITHDRAWN.

Esperado:

procedimento documentado.

Não:

DELETE CASCADE.

A política jurídica de eliminação, se aplicável, ocorre por workflow próprio.

# **36. Teste de resume**

Participante responde até cenário 20.

Fecha navegador.

Retorna.

Esperado:

respostas 1–20 preservadas.

Próximo cenário apropriado:

21, salvo incompletos.

# **37. Teste de randomização no resume**

PC-007 foi apresentado originalmente:

C → A → D → B.

Usuário fecha navegador.

Retorna.

Esperado:

C → A → D → B.

Não sortear novamente.

**Severidade:** CRITICAL\_PILOT.

# **38. Teste de Response Event**

Participante:

marca X;

muda para Y;

volta depois;

muda para Z.

RESPONSE final:

Z.

RESPONSE\_EVENT:

preserva X → Y → Z.

Não apenas:

Z.

# **39. Teste de primeira resposta**

Mesmo após três revisões:

first\_response

continua:

primeira escolha original.

Não muda para a segunda.

Isso é importante para pesquisa.

# **40. Teste de timing**

Cenário fica aberto 45 minutos.

Pesquisador marca:

TIMING\_ANALYSIS\_EXCLUDED.

Esperado:

duration\_ms RAW continua intacto.

Flag controla análise.

Não reescrever duração.

# **41. Teste de Option Presentation**

Cada item randomizado precisa registrar:

option;

position;

assessment;

presentation instance.

Depois da conclusão, precisamos reconstruir:

exatamente o que foi exibido.

Se não conseguimos:

teste falha.

# **42. Testes de estado**

Transições autorizadas precisam estar definidas.

Exemplo:

CREATED → STARTED

válido.

COMPLETED → IN\_PROGRESS

normalmente inválido.

Admin não deve poder reabrir silenciosamente.

# **43. Testes de Instrument Immutability**

Versão publicada:

MGH-P1.0.

Tentativa de alterar texto do PC-001 diretamente.

Esperado:

operação rejeitada.

Mudança exige:

nova versão de texto/instrumento conforme governança.

**Severidade:** BLOCKING.

# **44. Teste de Scoring Run Immutability**

Run SCORE-P1.0 concluído.

Novo algoritmo é publicado.

Esperado:

novo Run.

Não:

UPDATE no resultado antigo.

# **45. Teste de Interpretation Run futuro**

Mesmo princípio.

Nova:

INTERP-0.3

não sobrescreve:

INTERP-0.2.

# **46. Testes de Release Manifest**

Assessment criado com:

MGH-MASTER-P1.0-RC1.

Depois sistema publica outro Release Manifest.

Esperado:

assessment antigo continua ligado ao manifesto original.

Nunca migração automática.

# **47. Testes de Identity Vault**

Pesquisador sem permissão identity.read consegue ver:

MGH-O0-005.

Não consegue ver:

nome/e-mail correspondente.

Esperado:

403 ou ausência do dado conforme API.

# **48. SECURITY CASES**

## **SEC-001**

Participant não recebe score\_target.

## **SEC-002**

Researcher sem permissão de identidade tenta acessar Identity Vault.

Esperado:

## **SEC-003**

Token público inválido.

Esperado:

resposta neutra.

Não revelar se determinado participant existe.

## **SEC-004**

Participante A tenta acessar assessment de B.

Esperado:

acesso negado.

## **SEC-005**

Senha encontrada em log.

Resultado:

# **FAIL.**

## **SEC-006**

Token de acesso completo encontrado em log.

Resultado:

# **FAIL.**

## **SEC-007**

Admin invalida assessment.

Esperado:

Audit Log obrigatório.

## **SEC-008**

Abuso repetido de endpoint público.

Esperado:

rate limiting/proteção compatível.

# **49. Teste de exportação**

Researcher autorizado exporta dados pseudonimizados.

Esperado:

public\_code;

assessment;

respostas;

dados necessários.

Sem:

nome/e-mail

quando não solicitado/autorizado.

A exportação também deve gerar Audit Log.

# **50. Teste de role separation**

Usuário com permissão para:

registrar entrevista

não ganha automaticamente:

publicar Instrument Version.

Isso valida RBAC.

# **51. Golden Cases do Interpretation Engine**

Embora não sejam requisito integral da Fase A mínima, já precisam permanecer documentados para a próxima fase.

Essa separação é importante:

**Score Golden Cases utilizam respostas concretas.**

**Interpretation Golden Cases podem injetar evidências artificiais já classificadas.**

Assim não precisamos inventar thresholds antes da pilotagem.

# **52. GOLD-INT-001 — Autonomia × Critério**

Entrada artificial:

PC.D.AUTONOMY = CONSISTENT

PC.C.CRITERION = CONSISTENT

evidências independentes suficientes.

Esperado:

DEL-001 ativada.

DEL-002 ativada.

SIN-DEL-001 ativada.

Claims isolados redundantes suprimidos para renderização.

Claim final:

CLM-DEL-S01-AUTONOMY-WITH-CRITERIA.

Actions incluem:

resultado;

critério;

alçada;

liberdade de método;

prazo.

# **53. GOLD-INT-002 — Contextual Precedence**

Entrada:

PC.D geral relevante.

Mas evidência contextual de confrontation baixa/moderada.

Esperado:

Motor não produz:

“tende a confrontar diretamente porque é D.”

Evidência contextual prevalece.

# **54. GOLD-INT-003 — Impacto × Externalização**

Entrada:

DR Impact = HIGH.

DR Externalization = LOW.

Esperado:

SIN-FDB-001 ou regra correspondente ativada.

Claim permitido:

reação externa pode subestimar o impacto declarado.

Claims proibidos:

“reprime emoções”;

“esconde sentimentos”;

“é emocionalmente fechado”;

“é desonesto”.

# **55. GOLD-INT-004 — falsa independência**

PC.D relevante.

PC.D.AUTONOMY consistente.

Mas ambos dependem fortemente dos mesmos itens.

Esperado:

não promover automaticamente Evidence Level por “duas evidências”.

Lineage Check impede falsa independência.

# **56. GOLD-INT-005 — PRC convergence**

PRC.V Forced relevante.

PRC.V Independent relevante.

Fontes independentes apropriadas.

Esperado:

evidência de convergência pode ser criada se as regras futuras de threshold forem satisfeitas.

Score original permanece separado.

# **57. GOLD-INT-006 — contradição lógica**

Mesmo Run artificial contém:

Externalization HIGH

e:

Externalization LOW

como classificações mutuamente incompatíveis.

Esperado:

integrity flag.

Sem UIG polar forte.

Não escolher:

“o primeiro valor encontrado”.

# **58. GOLD-INT-007 — evidência insuficiente**

Evidence insuficiente.

Esperado:

silêncio.

Não gerar texto genérico apenas para preencher seção.

Essa é uma das regras mais importantes de todo o MGH.

# **59. GOLD-INT-008 — Claim proibido**

Engine tenta produzir:

GOOD\_LEADER

JOB\_FIT

HONEST\_PERSON

ou equivalentes.

Esperado:

FORBIDDEN\_CLAIM.

Nenhum texto final.

# **60. GOLD-SYN-001 — compressão semântica**

Várias UIGs/Claims produzem ações praticamente iguais em Comunicação.

Esperado:

uma recomendação consolidada.

Não:

quatro parágrafos repetindo “use estrutura visual”.

# **61. GOLD-SYN-002 — multimodalidade**

PRC Visual relevante.

PRC Auditiva relevante.

Sem regra válida de dominância.

Esperado:

síntese multimodal quando autorizada.

Não escolher “Visual venceu” por diferença mínima não autorizada.

# **62. Golden Case da SIN-DEC-001**

Entrada:

Decision Forward Movement relevante.

Analysis relevante.

Esperado:

CLM-DEC-S01-MINIMUM-INFO-DEADLINE.

Actions:

ACT-022 DEFINE\_MINIMUM\_INFORMATION

e:

ACT-023 SET\_DECISION\_DEADLINE.

Não produzir dois conselhos soltos:

“decida rápido”

e:

“analise bastante”.

# **63. Golden Case do Evidence Ceiling**

DEC-004 no P1.0.

Mesmo que uma rotina interna tente classificar acima:

max\_evidence\_level = E1.

Esperado:

output final:

E1.

Nunca E2/E3.

# **64. Golden Case do External Reporting Ceiling**

P1.0.

Evidence hipoteticamente classificada como E3 internamente.

Esperado para relatório externo:

máximo E2.

external\_language\_ceiling = E2.

# **65. Language Engine test — certeza**

Claim E1.

Texto gerado:

“Você claramente precisa de…”

Esperado:

rejeição.

Fallback determinístico.

Porque a linguagem elevou indevidamente a certeza.

# **66. Language Engine test — Forbidden Domain**

Claims autorizados tratam Delegação.

IA produz:

“Isso demonstra alta maturidade profissional.”

Esperado:

rejeição.

FORBID-MATURITY.

# **67. Language Engine test — números**

Input aprovado contém:

DR.Persistence = 66.67.

IA escreve:

76.67.

Resultado:

falha.

Language layer não altera métricas.

# **68. Language Engine test — fallback**

Fornecedor de IA indisponível.

Esperado:

relatório determinístico continua disponível.

O sistema não fica incapaz de produzir resultado futuro por ausência de LLM.

# **69. TESTES DA ONDA 0**

Precisamos homologar também as ferramentas de pesquisa.

O0-TEST-001

Criar participante.

O0-TEST-002

Gerar assessment/link.

O0-TEST-003

Registrar entrevista.

O0-TEST-004

Registrar múltiplas flags por item.

O0-TEST-005

Registrar ocorrência e exclude scope.

O0-TEST-006

Registrar Item Survival.

O0-TEST-007

Registrar Change Proposal.

O0-TEST-008

Registrar hipótese.

O0-TEST-009

Registrar Gate Review.

Nenhum desses módulos pode editar RAW.

# **70. Teste de flag por item**

PC-027 recebe:

AMB Moderate.

Depois:

VOC Minor.

Sistema precisa preservar ambas.

Não uma coluna única:

flag = VOC

sobrescrevendo AMB.

# **71. Teste de ocorrência**

Ocorrência:

internet caiu por 10 minutos.

Scope:

TIMING\_ANALYSIS.

Esperado:

assessment pode continuar elegível para outras análises.

Não invalidar automaticamente tudo.

# **72. Teste de Item Survival**

Item PC-035:

KEEP em O0.

Depois, numa wave futura:

REWRITE\_MINOR.

Histórico O0 permanece.

Não substituir decisão anterior.

# **73. Teste de Change Log**

Proposta altera texto PC-035.

Esperado:

change proposal;

razão;

versão origem;

nova versão;

impacto;

approval.

Não:

editar diretamente o conteúdo publicado.

# **74. Teste do Gate Review**

Metodologista seleciona:

ADVANCE\_WITH\_MINOR\_FIXES.

Precisa registrar:

quem;

quando;

critérios;

notas.

Não apenas:

status mudou.

# **75. Testes de performance**

Não precisamos tratar performance como benchmark financeiro.

Mas teremos targets operacionais.

| **Operação** | **Target inicial** |
| --- | --- |
| abrir cenário | percepção <1s quando possível |
| salvar resposta | ideal <500ms; aceitável <1s |
| abrir aplicação | ~<2s em condição normal |
| dashboard simples | ~<2–3s |
| Score Engine | segundos |
| relatório futuro sem IA pesada | <10s como referência |

Falha ocasional não significa automaticamente reprovação metodológica.

Mas comportamento consistentemente ruim antes da O0 deve ser corrigido.

# **76. Teste mobile**

Aplicação completa em celular real.

Não apenas Chrome desktop redimensionado.

Precisamos testar:

cards;

scroll;

seleção;

PRC Independent;

voltar;

autosave;

submit.

# **77. Teste de conexão instável**

Simular:

save interrompido.

Esperado:

usuário não acredita que resposta foi salva quando não foi.

Sistema tenta novamente ou informa claramente.

Não perder silenciosamente a resposta.

# **78. Teste de acessibilidade básico**

Teclado.

Focus.

Labels.

Erro não dependente só de cor.

Estado selecionado identificável.

Contraste mínimo adequado.

Esses requisitos já devem entrar desde o piloto.

# **79. Teste de backup**

Não é suficiente verificar:

“backup job executou”.

Precisamos pelo menos uma vez antes da O0:

restaurar cópia em ambiente controlado.

Confirmar:

participants;

assessments;

responses;

events;

scores.

# **80. Teste de disaster restore**

Pergunta prática:

Se o banco de produção for perdido hoje, conseguimos reconstruir o ambiente a partir do backup?

Precisamos de resposta demonstrável.

# **81. CI/CD Gate**

A pipeline antes de merge/deploy deverá rodar, no mínimo:

**unit tests**

**Golden Score Cases**

**Instrument Validator**

**build**

**lint**

**critical integration tests.**

Se um teste BLOCKING falhar:

merge/deploy bloqueado conforme workflow técnico.

# **82. Testes de migration**

Antes de produção:

migration aplica em base de teste.

Schema fica consistente.

Se migration falha:

deploy bloqueado.

# **83. Golden Dataset versionado**

Fixtures:

GOLDEN-P1.0.

Localização no repositório pode ser algo como:

/tests/golden/P1.0/

O nome físico é decisão técnica.

O versionamento:

obrigatório.

# **84. Nunca modificar fixture antiga apenas para novo algoritmo “passar”**

Se P1.1 muda legitimamente:

criar:

GOLDEN-P1.1.

Manter:

GOLDEN-P1.0.

Assim podemos continuar testando compatibilidade histórica.

# **85. Acceptance Matrix oficial**

Toda funcionalidade crítica deverá possuir registro conceitualmente equivalente a:

| **Campo** | **Exemplo** |
| --- | --- |
| Requirement ID | SCORE-PC-001 |
| Test ID | GOLD-SCORE-001 |
| Type | Unit/Integration/E2E |
| Severity | BLOCKING |
| Automated | Yes/No |
| Expected Result | descrito |
| Actual Result | execução |
| Status | PASS/FAIL |
| Evidence | log/build/ref |
| Version | P1.0 |

Isso transforma homologação em processo.

# **86. Requirement Traceability Matrix™**

Quero ir um passo além.

Devemos conseguir ligar:

Requisito → Teste → Implementação → Resultado.

Exemplo:

REQ-PC-RANDOM-001

↓

GOLD-SCORE-006

↓

módulo Score Engine

↓

PASS build 1.0.34.

Isso torna o handoff muito profissional.

# **87. Definition of Done técnico**

Uma história do backlog não está pronta apenas porque:

desenvolvedor terminou o código.

Para funcionalidade crítica, Definition of Done exige:

implementação;

testes;

code review;

documentação mínima;

staging;

critério de aceite aprovado;

nenhum teste bloqueante quebrado.

# **88. Homologação não deve ser feita apenas pelo desenvolvedor**

Precisamos de pelo menos:

### **TECH ACCEPTANCE**

desenvolvedor/QA.

### **METHODOLOGY ACCEPTANCE**

responsável MGH.

Porque algo pode estar:

tecnicamente perfeito

e:

metodologicamente errado.

Exemplo:

frontend funciona lindamente, mas randomizou DR.

QA técnico talvez diga:

passou.

Metodologia diz:

falhou.

# **89. Security Acceptance**

Idealmente alguém com responsabilidade técnica adequada deverá revisar pelo menos:

auth;

permissions;

tokens;

logs;

backups;

secrets;

rate limiting;

deployment.

Em escala comercial futura:

revisão de segurança mais profunda/pentest.

# **90. Pre-O0 Acceptance Gate**

Antes de liberar primeiro participante:

| **Bloco** | **Condição** |
| --- | --- |
| Instrument Validator | PASS |
| Score Golden Cases | 100% PASS |
| Participant E2E | PASS |
| Resume | PASS |
| Autosave | PASS |
| Submit/idempotency | PASS |
| RAW/Event preservation | PASS |
| Admin O0 | PASS |
| Security blockers | PASS |
| Backup | PASS |
| Restore test | PASS |
| Exports | PASS |
| Consent version | published |
| Release Manifest | frozen |
| O0 protocol | frozen |

Somente então:

# **MGH-O0-001 = AUTHORIZED**

# **91. O desenvolvedor deve apresentar evidências de aceite**

Não apenas:

“Pronto.”

Queremos algo equivalente a:

build/test report;

Golden Cases;

staging URL;

migration version;

release version;

known issues.

Isso não precisa virar burocracia corporativa gigantesca.

Mas precisamos de rastreabilidade.

# **92. Known Issues List**

Antes do piloto:

problemas conhecidos devem estar documentados.

Exemplo:

UI-045 — espaçamento incorreto em tela pequena

Severity:

NON\_BLOCKING.

Aceito temporariamente.

Mas:

DATA-017 — revisão perde primeira resposta

Severity:

BLOCKING.

Não entra em O0.

# **93. Bug severity não é negociada apenas por prazo**

Se erro contamina RAW:

não liberamos porque:

“já marcamos os participantes para amanhã.”

Melhor atrasar.

Dados contaminados custam mais caro.

# **94. Princípio final de QA**

Quero congelar uma frase:

**No MGH, qualidade de software também é qualidade metodológica.**

Se:

resposta some;

opção muda;

versão sobrescreve;

score erra;

RAW é editado,

não temos apenas um bug.

Temos:

evidência contaminada.

# **95. DOCUMENTO 07 — CONCLUÍDO**

Agora o Developer Handoff contém:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests**

E agora chegamos a uma camada essencial antes da contratação:

