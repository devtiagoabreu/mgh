---
name: 14-freeze-e-handoff
description: Etapas 2.28 e 2.29: master specification freeze e início do handoff.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 28507-30070
---

# Congelamento E Handoff

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.28 — MASTER SPECIFICATION FREEZE™**

A finalidade desta etapa é produzir uma resposta inequívoca para o desenvolvedor:

**“Qual é exatamente a versão do MGH que deve ser implementada para a Onda 0?”**

E, igualmente importante:

**“O que ele NÃO está autorizado a alterar por decisão técnica.”**

O Freeze não significa que o MGH está psicometricamente validado. Significa que existe uma **baseline metodológica e técnica controlada para implementação e pilotagem**.

# **1. A baseline oficial**

Vou registrar nossa primeira baseline integrada como:

## **MGH-MASTER-P1.0-RC1**

**Status metodológico:** PILOT
**Finalidade:** Onda 0
**Validated:** false
**decision\_use\_allowed:** false
**commercial\_decision\_use:** false

O RC1 significa:

**Release Candidate 1 da especificação para o piloto.**

Isso é melhor do que chamar simplesmente de “versão final”, porque estamos entrando justamente numa fase cujo objetivo é descobrir o que precisará ser melhorado.

# **2. MATRIZ-MESTRA DE VERSÕES**

Esta passa a ser a combinação oficial da Onda 0:

| **Componente** | **Versão congelada** |
| --- | --- |
| Master Specification | MGH-MASTER-P1.0-RC1 |
| Instrumento | MGH-P1.0 |
| Banco de Itens | BANK-0.2 |
| Scoring Engine | SCORE-P1.0 |
| Estrutura operacional de dados | DATA-P1.0 |
| Evidence Dictionary | EVID-0.2 |
| UIG Library | UIG-LIB-0.2 |
| Synthesis Library | SYN-0.2 |
| Interpretation Engine | INTERP-0.2 |
| Claim Dictionary | CLAIM-DICT-0.1 |
| Action Registry | ACTION-REG-0.1 |
| Language Policy | LANG-POL-0.1 |
| Report Composer | REPORT-COMP-0.1 |
| Golden Cases | GOLDEN-P1.0 |
| Protocolo de Piloto | PILOT-O0-0.1 |
| Data Model | DATA-MODEL-0.1 |
| API Specification | API-SPEC-0.1 |
| Security Baseline | SEC-BASE-0.1 |

Essa matriz será extremamente importante no futuro.

Um resultado nunca poderá ser simplesmente:

“resultado do MGH”.

Ele será resultado de:

instrumento X + scoring Y + evidence Z + interpretation W.

# **3. MANIFESTO DE RELEASE**

A implementação deverá manter algo conceitualmente equivalente a:

release\_manifest:

master\_spec: MGH-MASTER-P1.0-RC1

instrument: MGH-P1.0

item\_bank: BANK-0.2

scoring: SCORE-P1.0

evidence: EVID-0.2

uig\_library: UIG-LIB-0.2

synthesis: SYN-0.2

interpretation: INTERP-0.2

claim\_dictionary: CLAIM-DICT-0.1

action\_registry: ACTION-REG-0.1

language\_policy: LANG-POL-0.1

report\_composer: REPORT-COMP-0.1

golden\_cases: GOLDEN-P1.0

validation\_status: PILOT

decision\_use\_allowed: false

Assim, daqui a três anos, conseguiremos responder:

“Com qual Motor esse resultado foi produzido?”

Isso vale ouro.

# **4. FREEZE DO INSTRUMENTO**

Para MGH-P1.0 ficam congelados:

| **Elemento** | **P1.0** |
| --- | --- |
| Cenários apresentados | **48** |
| Respostas pontuáveis | **56** |
| PC | 24 |
| PRC Forced | 8 |
| PRC Independent | 12 ratings |
| DR | 12 |
| SELF | 8 |
| Relation Groups | 6 |

O progresso visível ao participante será:

**cenários concluídos / 48**

e não:

respostas / 56.

# **5. Os SELF continuam fora do Score Engine**

Isso fica oficialmente congelado.

SELF-01 a SELF-08:

**não alteram PC, PRC ou DR.**

São material de:

**pesquisa**

**convergência exploratória**

**validação futura**

e não parte do score principal.

O desenvolvedor não pode pensar:

“Já que temos a resposta, vou somar no resultado.”

Proibido.

# **6. Os Relation Groups também não viram “percentual de consistência”**

Os seis RGs continuam instrumentos experimentais para investigar relações entre itens.

Não teremos no P1.0:

“Você foi 82% consistente.”

Nem:

“Índice de sinceridade: 91%.”

Congelado.

# **7. FREEZE DO PC**

Os 24 itens continuam:

forced-choice.

Pontuação:

alternativa escolhida → option\_id canônico → +1 para D/I/S/C correspondente.

Sempre:

D + I + S + C = 24.

Pesos:

1.0.

# **8. Randomização PC**

As alternativas podem mudar de posição visual.

Mas o score nunca utiliza:

A/B/C/D apresentados.

Utiliza:

canonical\_option\_id.

Isso está congelado e coberto pelos Golden Cases.

# **9. PC continua ipsativo no P1.0**

Isso precisa entrar no documento técnico em destaque.

As contagens:

9D / 7I / 3S / 5C

representam **preferências relativas dentro daquela própria resposta forced-choice**.

Portanto o sistema não poderá, por enquanto, dizer:

“João tem mais Dominância que Maria porque João marcou 9 e Maria 7.”

Esse tipo de comparação interpessoal exige tratamento metodológico apropriado que ainda não está autorizado.

# **10. Facetas PC**

As vinte facetas continuam existindo como camada analítica.

Mas:

reportable = false

no P1.0.

E:

interpretive\_use = true

quando sua cobertura e Evidence Ceiling autorizarem.

Isso impede que apareça no relatório:

“Autonomia: 100%”.

# **11. FREEZE DO PRC™**

Mantemos duas fontes separadas:

### **Forced**

8 escolhas relativas.

### **Independent**

4 grupos × 3 ratings.

Elas jamais serão fundidas pelo Score Engine num único:

“Visual = 82%”.

Congelado.

# **12. PRC Forced**

Exemplo:

4 V
3 A
1 C

gera:

V=.50

A=.375

C=.125.

Isso significa:

distribuição relativa das escolhas forced.

Não:

“50% visual”.

# **13. PRC Independent**

As médias ficam em escala:

1–5.

Podemos manter uma transformação matemática auxiliar:

((mean - 1) / 4) × 100

mas somente como normalização interna/apresentação apropriada.

Não transformar em:

“93,75% visual”.

# **14. PRC Forced e Independent não precisam concordar perfeitamente**

Isso também fica congelado.

Uma pessoa pode ter:

Forced muito concentrado em V

e:

Independent alto em V, A e C.

O sistema preserva os dois fenômenos.

Isso pode futuramente indicar algo como:

preferência relativa + utilidade multimodal.

Mas o Score Engine não inventa uma síntese.

# **15. FREEZE DO DR™**

Os quatro eixos permanecem:

**Velocidade**

**Impacto**

**Persistência**

**Externalização.**

Cada um possui:

3 itens.

Raw:

3–12.

Normalização:

((raw - 3) / 9) × 100.

# **16. O DR não possui score total**

Congelado como proibição estrutural:

DR.TOTAL = INVALID.

Também:

PRESSURE\_SCORE = INVALID.

E:

RESILIENCE\_SCORE = INVALID.

Não somaremos os quatro eixos.

# **17. Códigos históricos TH permanecem no P1.0**

Temos um pequeno detalhe técnico que agora congelo conscientemente.

Embora o construto tenha evoluído para **DR™**, os itens atuais permanecem registrados no blueprint com IDs como:

TH-001

TH-002

etc.

Não vamos silenciosamente renomeá-los para DR-001.

Por quê?

Porque isso quebraria:

**rastreabilidade**

**Golden Cases**

**planilhas**

**versionamento**

**linhagem histórica.**

No futuro podemos criar:

alias ou migração formal.

Mas:

# **P1.0 mantém os IDs legados TH.**

# **18. Randomização DR**

Congelado:

**DR não randomiza alternativas.**

Isso faz parte da semântica ordinal dos itens.

Se configuração de P1.0 aparecer com:

randomizable=true

para DR:

erro de configuração.

Já temos Golden Case para isso.

# **19. O temperamento histórico continua fora do scoring principal**

Os códigos:

HR.CHOLERIC

HR.SANGUINE

HR.PHLEGMATIC

HR.MELANCHOLIC

permanecem:

interpretive\_use = false

no P1.0.

Podem existir como:

Historical Reference.

Não como:

resultado do instrumento.

# **20. FREEZE DA ORDEM**

Mantemos a sequência de:

**48 cenários já definida.**

Não caberá ao frontend:

“embaralhar as perguntas para ficar mais dinâmico.”

A ordem de cenários é parte da versão do instrumento.

O que pode randomizar está explicitamente definido no nível das alternativas.

# **21. FREEZE DO EVIDENCE ENGINE**

Uma regra central permanece:

**UIG não consulta resposta RAW.**

Fluxo obrigatório:

RAW → Score → Evidence → UIG.

Não:

RAW → IA → interpretação.

Esse ponto deve estar em letras grandes no handoff.

# **22. Evidence states**

Continuamos com:

UNCLASSIFIED

WEAK\_SIGNAL

RELEVANT

CONSISTENT

CONTEXTUAL

CONTRADICTORY

INSUFFICIENT

Mas aqui existe um ponto deliberadamente NÃO congelado:

# **OS THRESHOLDS NUMÉRICOS DEFINITIVOS.**

Eles dependem do piloto.

Isso não é uma falha da especificação.

É uma decisão metodológica.

# **23. Evidence Ceiling™**

Agora passa a integrar formalmente o Master Freeze.

Cada regra pode possuir:

max\_evidence\_level.

No P1.0:

nenhuma interpretação externa ultrapassa E2.

Formalmente:

external\_reporting\_max = E2

E3 permanece preparado, porém:

external\_enabled = false.

# **24. DEC-004 e DEC-005**

As evidências contextuais:

PC.DECISION.CONSULTATIVE\_INPUT

e:

PC.DECISION.PROGRESSIVE\_COMMITMENT

continuam com:

max\_evidence\_level = E1

no P1.0.

Não mudaremos isso por entusiasmo com a interpretação.

Precisamos de cobertura maior.

# **25. Linhagem**

Fica congelada esta regra:

**dois nomes de métricas não significam automaticamente duas evidências independentes.**

Exemplo:

PC.D

PC.D.AUTONOMY

podem compartilhar os mesmos itens.

Logo:

não sobem Evidence Level automaticamente.

# **26. Derived Evidence**

Outra regra congelada:

**Derived evidence não aumenta Evidence Level por si só.**

Exemplo:

DR.PERSISTENCE

e:

DR.CONFIG.HIGH\_PERSIST\_LOW\_EXTERNAL

não são duas fontes independentes.

A segunda é derivada.

# **27. Synthesis Evidence Ceiling**

Regra formal:

nível de evidência da síntese não pode exceder o componente obrigatório mais fraco, salvo presença de evidência independente adicional prevista explicitamente.

Portanto:

E2 + E1 →

síntese máxima E1.

Não:

“duas evidências juntas viraram E3”.

# **28. FREEZE DA UIG LIBRARY™**

Após nossa auditoria transversal:

# **32 UIGs**

divididas em:

**25 PRIMARY**

**7 MODULATORS.**

Isso substitui oficialmente a nomenclatura antiga de:

40 UIGs.

As ideias das oito restantes não desapareceram.

Foram corretamente movidas para:

Synthesis Rules.

# **29. FREEZE DAS SÍNTESES**

As cinco sínteses oficiais de SYN-0.2 são:

| **ID** | **Síntese** |
| --- | --- |
| SIN-DEL-001 | Autonomia × Critério |
| SIN-DEC-001 | Velocidade decisória × Análise |
| SIN-FDB-001 | Impacto × Baixa Externalização |
| SIN-PRS-001 | Reação mais imediata × Impacto elevado |
| SIN-PRS-002 | Persistência elevada × Baixa Externalização |

Estas possuem:

status = PILOT.

As outras combinações permanecem:

status = CANDIDATE.

# **30. Candidate significa exatamente o quê?**

Essa definição precisa ser congelada.

### **DRAFT**

Ainda em elaboração.

### **CANDIDATE**

Metodologicamente interessante, pode ser estudada internamente, mas **não entra na interpretação oficial**.

### **PILOT**

Autorizada para execução experimental na versão piloto especificada.

### **APPROVED**

Autorizada pelo processo formal de governança para o uso declarado naquela versão.

### **DEPRECATED**

Ainda reconhecida por compatibilidade histórica, mas não deve ser utilizada em novas execuções.

### **RETIRED**

Não deve ser usada em novas execuções e permanece somente para auditoria histórica.

Muito importante:

APPROVED não significa automaticamente “cientificamente validado”.

Por isso existe separadamente:

validation\_status.

# **31. FREEZE DOS BLOCK RULES**

Continuam cinco:

### **B1**

Evidência insuficiente.

### **B2**

Evidência contraditória.

### **B3**

Contexto específico prevalece.

### **B4**

Domínio externo.

### **B5**

Generalização imprópria.

Esses blocos têm precedência sobre o desejo de produzir relatório.

# **32. Regra de ouro do Block Engine**

**Se bloquear significa ter uma seção vazia, a seção fica vazia.**

Não substituímos por texto genérico.

Isso está alinhado ao Golden Case:

GOLD-INT-007.

Silêncio metodologicamente correto é superior a interpretação inventada.

# **33. FREEZE DA PRECEDÊNCIA**

A ordem permanece:

1. evidência contextual específica;
2. faceta diretamente relacionada;
3. dimensão geral;
4. convergência entre lentes;
5. referência histórica.

E:

convergência entre lentes não pode atropelar contradição contextual forte.

# **34. FREEZE DOS CLAIMS**

Passamos a ter:

# **30 Claims reportáveis**

em:

CLAIM-DICT-0.1.

Nenhum texto final poderá aparecer sem:

claim\_code.

Isso é obrigatório.

# **35. Regra estrutural**

Se uma frase não consegue responder:

“Qual Claim autorizou isso?”

ela não deveria estar no relatório interpretativo.

Exceções apenas para:

**texto institucional**

**instruções**

**explicações metodológicas**

**disclaimers.**

Não para conclusões sobre o respondente.

# **36. Global Forbidden Claim Registry™**

Fica congelado como barreira global.

O Motor não poderá inferir diretamente:

**inteligência**

**competência**

**maturidade**

**caráter**

**honestidade**

**saúde mental**

**diagnóstico**

**job fit**

**decisão de contratação**

**promoção**

**demissão**

**resiliência**

**estabilidade emocional**

**estilo de aprendizagem fixo**

**identidade psicológica absoluta**

**valor moral**

**qualidade de liderança**

**compatibilidade percentual.**

# **37. FREEZE DO ACTION REGISTRY™**

Mantemos:

# **30 Action Codes canônicos**

em:

ACTION-REG-0.1.

Isso permitirá:

claims diferentes → mesma ação nuclear → compressão.

Por exemplo:

DEFINE\_ESSENTIAL\_CRITERIA

não precisa existir quatro vezes.

# **38. Modifiers continuam sem Claim próprio**

Os sete moduladores:

**não criam conclusão central isoladamente.**

Eles alteram:

**como**

**quando**

**quanto**

**com que cautela**

uma recomendação deve ser aplicada.

Essa distinção fica congelada.

# **39. FREEZE DA LANGUAGE POLICY™**

No P1.0:

### **E1**

“as respostas sugerem…”

“pode ser útil…”

“há um sinal…”

### **E2**

“apareceu de forma recorrente…”

“as evidências convergem…”

“nas situações avaliadas…”

### **E3**

preparado, mas não apresentado externamente.

# **40. Uma regra particularmente importante**

A IA não pode transformar:

E1

em:

E2 linguisticamente.

Exemplo proibido:

Evidence Level = E1.

IA escreve:

“Você demonstra claramente…”

Falha de linguagem.

O resultado deve ser rejeitado ou substituído pelo:

deterministic fallback.

# **41. FREEZE DO REPORT COMPOSER™**

O Composer seguirá esta prioridade:

**sínteses oficiais**

↓

**Claims contextuais**

↓

**Claims primários**

↓

**Modifiers.**

E deverá comprimir redundâncias.

# **42. A Assinatura de Governo™ não será um tipo**

Congelado:

não teremos coisas como:

“Executor Estratégico Visual”.

“Governante Dominante”.

“Perfil Visionário Analítico.”

A Assinatura será:

**síntese narrativa dos Claims prioritários.**

# **43. Limites iniciais de densidade**

Para futura versão individual:

### **Assinatura de Governo™**

idealmente:

**3–5 mensagens centrais.**

### **Manual de Governo™**

**5–8 recomendações prioritárias.**

Isso não precisa ser limite absoluto de código ainda, mas é a política do Composer.

# **44. FREEZE DO USO DE IA**

Isto merece um bloco próprio.

A IA futura:

## **PODE**

melhorar fluidez;

eliminar repetição;

adaptar texto à audiência;

combinar Claims já autorizados.

## **NÃO PODE**

ler as 56 respostas para “descobrir o perfil”;

inventar Claim;

criar diagnóstico;

alterar Evidence Level;

alterar número;

alterar score;

inventar nova categoria;

ignorar constraint;

remover caveat obrigatório.

# **45. O MGH deve funcionar sem IA**

Congelado como requisito de arquitetura.

Se o provedor de IA desaparecer amanhã:

o MGH ainda calcula, interpreta e produz relatório determinístico.

A IA é:

camada de linguagem.

Não:

cérebro metodológico.

# **46. FREEZE DO FLUXO O0**

Participante:

link seguro → consentimento → contexto → instruções → 48 cenários → SELF → feedback → submit.

Depois:

# **NÃO MOSTRAR RESULTADO AUTOMÁTICO.**

Isso continua congelado.

# **47. O Motor poderá rodar internamente**

Muito importante.

Após a submissão, podemos rodar:

Score → Evidence → Interpretation

em modo:

research\_internal.

Assim estudamos o que o Motor teria produzido.

Mas:

participant\_report\_enabled = false

na Onda 0.

# **48. FREEZE DO RAW**

RAW continua:

append-only.

Resposta alterada:

não apaga resposta anterior.

Registra:

evento.

Primeira escolha:

preservada.

Escolha final:

preservada.

Ordem de apresentação:

preservada.

Timestamp:

preservado.

# **49. Final Submit**

Depois de COMPLETED:

resposta não pode mais ser editada.

Se houver problema metodológico:

assessment pode receber status/invalidação apropriado.

Não:

editar RAW para “corrigir”.

# **50. FREEZE DO VERSIONAMENTO**

Agora criamos uma regra formal de mudança.

| **Mudança** | **Versão que deve mudar** |
| --- | --- |
| texto de item com alteração semântica | Instrument + Item Text |
| alternativas/semântica do item | Instrument |
| chave/pontuação | Scoring |
| threshold de evidência | Evidence |
| regra UIG | UIG Library + Interpretation |
| regra de síntese | Synthesis + Interpretation |
| significado de Claim | Claim Dictionary |
| ação gerencial | Action Registry |
| força/linguagem permitida | Language Policy |
| composição/ordenação | Report Composer |
| texto cosmético sem significado metodológico | Template/App |
| UI meramente visual | App version |

Isso será crucial no desenvolvimento.

# **51. Uma mudança de frase pode ser metodológica**

Exemplo:

Original:

“Em algumas situações, pode ser útil…”

Alguém muda para:

“Essa pessoa necessita…”

Isso não é:

revisão de copy.

É alteração de força interpretativa.

Logo:

passa por governança metodológica.

O programador não decide sozinho.

O designer não decide sozinho.

A IA não decide sozinha.

# **52. FREEZE DE ONDA**

A partir do momento em que:

MGH-O0-001

começar a responder,

não mudamos silenciosamente os itens no meio da Onda 0.

Se surgir erro grave:

interrompemos;

documentamos;

criamos nova versão;

eventualmente criamos O0-B.

Não fazemos:

metade respondeu pergunta A, metade pergunta B, mas no banco ambas aparecem como a mesma versão.

Isso destruiria a pesquisa.

# **53. AMBIENTES**

Eu congelaria esta matriz:

| **Ambiente** | **DRAFT** | **CANDIDATE** | **PILOT** | **APPROVED** |
| --- | --- | --- | --- | --- |
| DEV | sim | sim | sim | sim |
| STAGING | limitado | sim | sim | sim |
| O0 PILOT | não | pesquisa interna\* | sim | sim |
| Comercial futuro | não | não | conforme política | sim |

\* Candidate pode ser executada em shadow mode para pesquisa, mas não gerar relatório oficial.

Essa ideia de:

# **SHADOW MODE**

é muito boa.

# **54. O que é Shadow Mode?**

Uma regra candidata pode rodar por trás.

Exemplo:

SIN-COM-001 CANDIDATE.

O Motor registra:

“Teria ativado.”

Mas não mostra ao usuário.

Depois analisamos:

frequência;

coerência;

utilidade.

Isso permite desenvolver o MGH sem usar participantes como cobaias de interpretações não aprovadas.

# **55. AUDITORIA DE CONTRADIÇÕES — RESULTADO**

Agora fiz uma revisão transversal lógica das peças que construímos.

Resultado:

# **nenhuma contradição estrutural impeditiva encontrada.**

Mas existem alguns pontos **deliberadamente abertos**, que precisam ser marcados como tal — e não “preenchidos no chute”.

# **56. OPEN ITEM 01 — Thresholds de Evidence**

Ainda não temos cortes empíricos definitivos para:

WEAK\_SIGNAL

RELEVANT

CONSISTENT.

Status:

**OPEN — DEPENDS ON PILOT DATA**

Não bloqueia:

O0.

Bloqueia:

alegar Motor empiricamente calibrado.

# **57. OPEN ITEM 02 — Evidence Ceilings completos das facetas**

Já definimos casos importantes.

Mas precisamos compilar uma tabela completa:

cada faceta × cobertura × teto P1.0.

Isso deve entrar como apêndice técnico antes do Motor comercial.

Para O0:

não bloqueia a aplicação.

# **58. OPEN ITEM 03 — 120 templates determinísticos**

Temos:

Language Policy;

templates exemplares;

estrutura.

Mas ainda não escrevemos os:

30 Claims × 2 audiências × E1/E2.

Ou seja:

potencialmente 120 templates-base.

Isso **não bloqueia O0**, porque o participante não verá relatório.

Bloqueia:

relatório comercial deterministicamente completo.

Essa distinção precisa ficar registrada com honestidade.

# **59. OPEN ITEM 04 — Claim → Action Matrix completa**

Temos Claims, Actions e vários mapeamentos principais.

Ainda precisamos transformar a relação total em tabela formal:

cada Claim → quais Actions pode ativar → obrigatórias/opcionais → constraints.

Isso deve entrar no Handoff do Motor, mas:

não bloqueia Fase A/O0.

# **60. OPEN ITEM 05 — Retenção LGPD**

Arquitetura suporta política.

Mas valores como:

“guardar X anos”

ainda não devem ser inventados.

Precisamos de decisão operacional e revisão jurídica.

Status:

LEGAL/PRIVACY REVIEW.

# **61. OPEN ITEM 06 — Base jurídica futura comercial**

Consentimento é adequado como referência para o piloto conforme desenhado, sujeito à revisão jurídica.

Mas não congelaremos:

“consentimento será sempre a base jurídica do MGH comercial”.

Isso precisa ser avaliado conforme:

**modelo de negócio**

**cliente controlador**

**uso**

**fluxo de dados.**

# **62. OPEN ITEM 07 — Validação psicométrica**

Obviamente permanece aberta.

Precisaremos:

O0 → compreensão.

O1 → comportamento inicial dos itens.

O2 → investigação maior.

O3 → validação/norming com profissional habilitado.

Isso não é dívida técnica.

É:

**processo científico previsto.**

# **63. Um ponto importante sobre esses Open Items**

Nenhum deles será apagado da documentação para o pacote parecer “mais pronto”.

Pelo contrário.

Um bom handoff precisa separar:

# **DEFINIDO**

de:

# **DELIBERADAMENTE NÃO DEFINIDO AINDA.**

Isso protege você do programador dizer:

“Eu achei que era assim e implementei.”

# **64. O QUE O DESENVOLVEDOR PODE DECIDIR**

Ele terá autonomia em coisas como:

**framework adequado**

**estrutura interna de código**

**biblioteca visual**

**serviços de infraestrutura**

**estratégia de cache**

**ferramentas CI/CD**

desde que respeite os requisitos.

# **65. O QUE O DESENVOLVEDOR NÃO PODE DECIDIR**

Sem Change Request metodológico:

**mudar pontuação**

**mudar item**

**alterar randomização**

**fundir PRC Forced + Independent**

**criar DR Total**

**criar perfil novo**

**mudar Evidence Level**

**criar Claim**

**deixar IA interpretar RAW**

**alterar sentido de Action**

**quebrar versionamento**

**editar RAW**

**mostrar resultado no O0.**

Esta separação deve estar explícita no contrato técnico.

# **66. REGRA DE CHANGE REQUEST**

Toda alteração metodológica após o Freeze deve responder:

**O que muda?**

**Por quê?**

**Qual componente é afetado?**

**Qual versão atual?**

**Qual nova versão?**

**Afeta comparabilidade histórica?**

**Afeta Golden Cases?**

**Exige novo teste?**

**Exige nova onda?**

**Quem aprovou?**

Depois:

CHANGE\_LOG.

# **67. GOLDEN CASES também ficam congelados**

GOLDEN-P1.0.

Se algoritmo futuro legitimamente mudar:

não fazemos:

editar o Golden Case antigo para ele voltar a ficar verde.

Criamos:

GOLDEN-P1.1.

O Golden antigo continua documentando:

comportamento esperado da versão antiga.

# **68. Definition of Freeze™**

Considerarei MGH-MASTER-P1.0-RC1 congelado quando conseguirmos responder “SIM” para estas perguntas:

| **Pergunta** | **Status** |
| --- | --- |
| Sabemos exatamente quais itens aplicar? | ✅ |
| Sabemos a ordem? | ✅ |
| Sabemos como pontuar? | ✅ |
| Sabemos o que randomiza? | ✅ |
| Sabemos o que armazenar? | ✅ |
| Sabemos como versionar? | ✅ |
| Sabemos como proteger RAW? | ✅ |
| Sabemos as fronteiras de interpretação? | ✅ |
| Temos Evidence Dictionary? | ✅ |
| Temos UIG Library? | ✅ |
| Temos sínteses? | ✅ |
| Temos Claims autorizados? | ✅ |
| Temos Actions? | ✅ |
| Temos Language Policy? | ✅ |
| Temos política de relatório? | ✅ |
| Temos Golden Cases? | ✅ |
| Sabemos o que não está definido ainda? | ✅ |
| Sabemos o que O0 deve entregar? | ✅ |

Portanto:

# **MASTER SPECIFICATION FREEZE APROVADO PARA HANDOFF DA FASE A.**

Com uma ressalva essencial:

**“Aprovado para implementação do piloto” não significa “validado para uso psicométrico comercial”.**

Isso deve acompanhar a documentação.

# **69. Novo status do projeto**

Antes desta etapa eu havia colocado:

**~95% da engenharia pré-desenvolvimento.**

Com o Master Freeze concluído, eu atualizaria para:

# **~97%**

O que falta agora não é descobrir o MGH.

É organizar tudo que descobrimos numa documentação que um desenvolvedor consiga:

ler,

estimar,

construir,

testar,

entregar.

# **70. O PRÓXIMO MARCO**

Agora entramos formalmente em:

# **ETAPA 2.29 — DEVELOPER HANDOFF PACKAGE™**

Essa etapa vai transformar todo este trabalho em um pacote executivo de desenvolvimento, provavelmente dividido em algo como:

**Documento 01 — Executive Product Brief**

**Documento 02 — Functional Specification**

**Documento 03 — Architecture & Data**

**Documento 04 — MGH-P1.0 Instrument Specification**

**Documento 05 — Scoring Specification**

**Documento 06 — Research/O0 Protocol**

**Documento 07 — Golden Cases & Acceptance Tests**

**Documento 08 — Security, Privacy & Nonfunctional Requirements**

**Documento 09 — Interpretation Engine Specification**

**Documento 10 — Roadmap & Scope**

**Documento 11 — Open Items / Decision Log**

**Documento 12 — Developer Meeting Brief**

Mas aqui há uma mudança importante de dinâmica:

**não vamos simplesmente copiar nossas dezenas de páginas para esses documentos.**

Agora começa o trabalho de **compressão executiva**.

O desenvolvedor verá primeiro o necessário para construir a Fase A.

A engenharia completa ficará disponível nos anexos quando ele precisar aprofundar.

Esse é exatamente o ponto que queríamos alcançar antes de preparar sua reunião.

Perfeito. Agora entramos oficialmente na fase de empacotamento técnico.

# **ETAPA 2.29 — DEVELOPER HANDOFF PACKAGE™**

Até aqui construímos o MGH como metodologia, instrumento, motor lógico e arquitetura. A partir de agora, nosso trabalho muda:

**não precisamos mais descobrir o sistema; precisamos descrevê-lo de forma que outra pessoa consiga construí-lo sem inventar partes.**

Vou registrar o pacote como:

**MGH-DHP-0.1 — Developer Handoff Package**Compatível com: **MGH-MASTER-P1.0-RC1**Objetivo inicial: **implementação da Fase A — Pilot Core / Onda 0**.

A documentação completa ficará organizada em 12 documentos. Porém, o desenvolvedor não deverá começar lendo centenas de páginas. Ele começa pelo resumo executivo, depois pelo escopo funcional e vai descendo para os anexos técnicos conforme necessário.

| **Documento** | **Finalidade** |
| --- | --- |
| 01 — Executive Product Brief | entender rapidamente o MGH e o que será construído |
| 02 — Functional Specification | saber exatamente como o sistema deve funcionar |
| 03 — Architecture & Data Model | banco, módulos, entidades e rastreabilidade |
| 04 — Instrument Specification | 48 cenários, versões, randomização e aplicação |
| 05 — Scoring Specification | PC, PRC, DR e regras matemáticas |
| 06 — O0 Research Protocol | operação do piloto e pesquisa |
| 07 — Golden Cases & Acceptance | provar que a implementação está correta |
| 08 — Security & Privacy | segurança, LGPD e requisitos não funcionais |
| 09 — Interpretation Engine | Evidence, UIG, SIN, Claims, Actions e Language |
| 10 — Technical Roadmap | Fases A–E e dependências |
| 11 — Open Items & Decision Log | o que ainda não deve ser inventado |
| 12 — Developer Meeting Brief | pauta, perguntas, orçamento e critérios de escolha |

Hoje começamos pelo **Documento 01**, que é provavelmente o primeiro que você entregará ao desenvolvedor.

