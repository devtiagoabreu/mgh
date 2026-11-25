---
name: 15-handoff-01-executive-e-funcional
description: Documentos 01 e 02 do Developer Handoff Package.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 30071-32824
---

# Handoff 01: Executive E Functional

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **DOCUMENTO 01 — EXECUTIVE PRODUCT BRIEF**

## **MAPA DE GOVERNO HUMANO™ — MGH™**

### **1. Visão do produto**

O **Mapa de Governo Humano™** é um sistema desenvolvido dentro da metodologia M2M para ajudar gestores a compreender melhor como pessoas tendem a:

**se comunicar, agir, decidir e reagir em situações profissionais**, transformando essas evidências em orientações práticas de gestão.

O MGH não foi concebido como um simples teste de perfil.

Sua arquitetura prevê uma evolução em quatro grandes níveis:

**MGH Individual → MGH Liderança → MGH Equipe → MGH Organização.**

A implementação inicial, entretanto, é exclusivamente uma plataforma de **pilotagem e pesquisa do instrumento**.

# **2. Problema que o MGH pretende resolver**

Gestores frequentemente aplicam a mesma forma de liderança a pessoas diferentes.

Delegam da mesma maneira.

Cobram da mesma maneira.

Dão feedback da mesma maneira.

Conduzem conflitos da mesma maneira.

E interpretam comportamentos a partir de impressões pessoais.

A proposta do MGH é criar uma camada estruturada de evidência que permita responder:

**“Diante desta pessoa e deste contexto, como posso governar melhor?”**

O sistema não procura definir:

“quem esta pessoa é”.

Ele procura apoiar:

**como esta pessoa pode ser melhor governada naquele contexto profissional.**

# **3. Princípio central do produto**

O princípio metodológico que deve acompanhar todo desenvolvimento é:

**O teste mede. O Motor interpreta. O gestor decide.**

Isso significa que o software não possui autoridade automática para:

contratar;

demitir;

promover;

diagnosticar;

avaliar caráter;

avaliar inteligência;

avaliar competência;

avaliar saúde mental;

determinar cargo ideal.

O MGH fornece hipóteses e orientações de governo.

A decisão continua humana.

# **4. Estrutura conceitual do instrumento**

O MGH utiliza três lentes.

### **PRC™ — Preferências de Representação e Comunicação**

Investiga preferências relativas relacionadas a:

**Visual**

**Auditiva**

**Cinestésica**

Sem tratá-las como estilos fixos de aprendizagem.

### **PC — Padrões Comportamentais**

Base conceitual no modelo comportamental associado à tradição DISC:

**D — Dominância**

**I — Influência**

**S — Estabilidade**

**C — Conformidade/Critério**

Utilizado como lente comportamental, não como tipologia absoluta.

### **DR™ — Dinâmica de Reação**

Modelo proprietário utilizado para observar quatro eixos:

**Velocidade**

**Impacto**

**Persistência**

**Externalização**

O DR não produz um “temperamento” nem um score total.

# **5. A camada proprietária do MGH**

O produto não termina em PRC, PC ou DR.

Esses dados alimentam o:

# **Motor de Governo™**

O Motor transforma evidências em orientações gerenciais.

Arquitetura conceitual:

**PRC + PC + DR → Evidências → Regras Interpretativas → Claims → Ações de Governo**

O resultado futuro se manifesta principalmente em:

**Assinatura de Governo™**

e:

**Manual de Governo™**

# **6. O que deve ser construído agora**

A primeira implementação será:

# **FASE A — PILOT CORE**

Objetivo:

executar corretamente a Onda 0 do instrumento MGH-P1.0.

Não será ainda o produto comercial.

O sistema precisa permitir:

**aplicação do instrumento**

**armazenamento confiável das respostas**

**registro dos eventos**

**pontuação**

**gestão dos participantes**

**pesquisa cognitiva**

**auditoria dos itens**

**versionamento**

**exportação**

e:

**testes automatizados das regras críticas.**

# **7. Perfil de usuários da Fase A**

Existirão inicialmente quatro papéis lógicos:

### **PARTICIPANT**

Responde ao instrumento.

### **RESEARCHER**

Acompanha aplicações e realiza entrevistas cognitivas.

### **METHODOLOGIST**

Analisa itens, evidências, regras e resultados metodológicos.

### **ADMIN**

Gerencia acessos e operações administrativas.

Na primeira versão, algumas funções internas podem ser acumuladas pela mesma pessoa.

Mas o modelo de dados e permissões deve permitir separação futura.

# **8. Jornada do participante**

Fluxo oficial:

**link seguro → consentimento → contexto profissional → instruções → 48 cenários → SELF → feedback → submissão final**

O participante poderá interromper e continuar depois.

As respostas deverão ser salvas automaticamente.

Alterações de resposta precisam preservar:

**resposta inicial**

**resposta final**

**eventos de revisão.**

Depois do envio final:

o assessment fica bloqueado.

# **9. O participante NÃO recebe resultado na Onda 0**

Esta é uma regra metodológica.

Após finalizar:

o sistema apresenta apenas confirmação de conclusão.

Não apresentar:

scores;

perfil;

relatório;

Assinatura de Governo;

Manual de Governo;

recomendações.

O Motor poderá rodar:

internamente, em modo de pesquisa.

Mas o resultado não será entregue ao participante.

# **10. Estrutura do instrumento P1.0**

Baseline:

**48 cenários**

**56 respostas pontuáveis**

**8 SELF**

Distribuição:

| **Componente** | **Quantidade** |
| --- | --- |
| PC forced-choice | 24 |
| PRC forced-choice | 8 |
| PRC independent ratings | 12 |
| DR | 12 |
| SELF | 8 |

O progresso mostrado ao usuário utiliza:

cenários concluídos / 48.

Não:

respostas / 56.

# **11. Princípio técnico mais importante**

O banco deve preservar a informação histórica.

Portanto:

# **RAW É IMUTÁVEL.**

Isso não significa que o usuário não possa mudar uma resposta antes do envio.

Significa que:

uma alteração gera novo registro/evento.

Nunca apagamos silenciosamente o que aconteceu anteriormente.

# **12. Outro princípio central**

**O RAW precisa sobreviver à evolução do algoritmo.**

Se daqui a dois anos mudarmos:

scoring;

evidence;

UIG;

claims;

relatório,

devemos conseguir recalcular a mesma aplicação sem destruir:

o resultado original.

Por isso teremos:

scoring\_run

evidence\_run

interpretation\_run

e outras execuções versionadas.

# **13. Arquitetura lógica de alto nível**

A arquitetura final do MGH prevê:

Banco de Itens
↓
Assessment Engine
↓
Response Engine
↓
Score Engine
↓
Evidence Engine
↓
Interpretation Engine
↓
Claim Engine
↓
Action Engine
↓
Language Engine
↓
Report Composer

Porém, para a **Fase A**, a implementação obrigatória termina principalmente em:

**Score Engine + Research Platform.**

As camadas posteriores podem existir apenas como interfaces arquitetônicas ou módulos futuros.

# **14. IA não é requisito da Fase A**

Não implementar a arquitetura como:

respostas → ChatGPT/LLM → resultado.

Essa abordagem é incompatível com a metodologia.

O sistema precisa funcionar completamente:

**sem IA generativa.**

No futuro a IA poderá melhorar a escrita de Claims já autorizados.

Não interpretar respostas livremente.

# **15. Regra permanente para IA**

O princípio é:

**A IA não interpreta a pessoa. O Motor autoriza os Claims; a IA pode redigir.**

Ela não deverá receber as 56 respostas para produzir uma análise livre.

# **16. Tecnologia**

A recomendação inicial é:

**Web App responsivo.**

Não há necessidade de:

iOS nativo;

Android nativo;

microservices;

arquitetura de hyperscale.

A recomendação técnica é:

**modular monolith**, salvo justificativa técnica muito forte em contrário.

Queremos uma arquitetura:

robusta;

testável;

versionável;

mas proporcional ao estágio do projeto.

# **17. Prioridade de dispositivos**

### **Participante**

**mobile-first.**

A maior parte da experiência deve funcionar muito bem em celular.

### **Administração/Pesquisa**

**desktop-first responsivo.**

# **18. Ambientes**

A implementação deve separar:

**DEV**

**STAGING**

**PRODUCTION / PILOT**

Dados reais da Onda 0 não devem ser utilizados em desenvolvimento/testes comuns.

# **19. Segurança mínima obrigatória**

A Fase A já precisa nascer com:

**HTTPS/TLS**

**controle de acesso**

**tokens seguros**

**proteção de credenciais**

**logs técnicos**

**audit log administrativo**

**backups**

**teste de restauração**

**separação de identidade e assessment**

**segregação DEV/STAGING/PROD**

Não aceitaremos:

“depois colocamos segurança.”

# **20. Versionamento não é opcional**

O sistema deverá saber, para qualquer aplicação:

qual instrumento;

qual banco de itens;

qual scoring;

qual interpretação;

qual versão das regras

foram utilizados.

Uma pergunta não deverá ser simplesmente:

“Pergunta 17”.

Mas:

item + versão de texto + instrumento compatível.

# **21. Regra sobre mudanças**

O desenvolvedor pode propor melhorias técnicas.

Mas não poderá alterar por decisão própria:

**itens**

**textos**

**pontuação**

**randomização**

**ordem oficial**

**significado de score**

**Evidence Rules**

**Claims**

**Action Codes**

**limites metodológicos.**

Mudanças metodológicas passam por:

**Change Request + Change Log + nova versão quando aplicável.**

# **22. O que deliberadamente NÃO será construído na Fase A**

Esta parte deve estar em destaque no orçamento.

Não construir agora:

**Mapa de Relação™**

**Sala de Comando Humana™**

**dashboard empresarial completo**

**app nativo**

**e-commerce**

**pagamentos**

**Hotmart**

**assinaturas**

**IA interpretando pessoas**

**PDF comercial sofisticado**

**matching de cargos**

**score de compatibilidade**

**MGH 360**

**relatório automático para o participante.**

Isso protege orçamento e prazo.

# **23. Critério de sucesso da Fase A**

Fase A não estará concluída simplesmente porque:

“o questionário abre e salva respostas.”

Será considerada pronta quando:

**Golden Cases passarem**

**RAW estiver preservado**

**randomização estiver correta**

**Score Engine reproduzir os valores conhecidos**

**submit for transacional**

**versões forem registradas**

**permissões funcionarem**

**retomada funcionar**

**eventos forem preservados**

**backup/restauração estiverem testados**

e:

**o sistema estiver apto para receber MGH-O0-001.**

# **24. Golden Cases são parte do produto**

Eles não são:

documentação opcional.

São critérios de aceite.

Exemplo:

PC 24D precisa produzir:

D=24, I=0, S=0, C=0.

PRC independent 5/5/4/5:

média 4,75.

DR soma 9:

66,666...

Se o software não reproduzir:

a implementação está errada.

# **25. O produto pertence à empresa**

O desenvolvimento precisa evitar dependência tecnológica do fornecedor.

O projeto deve possuir controle sobre:

**repositório**

**cloud**

**banco de dados**

**domínio**

**credenciais administrativas**

**documentação**

**processo de deploy**

**código-fonte**

**backups.**

Questões contratuais e propriedade intelectual deverão ser formalizadas juridicamente.

# **26. Filosofia técnica da Fase A**

A frase que resume o escopo é:

**Neste momento não precisamos de escala. Precisamos de integridade.**

Preferimos:

20 aplicações perfeitamente rastreáveis

a:

20 mil aplicações sem saber qual versão produziu qual resultado.

# **27. Filosofia metodológica**

Outra frase que deve acompanhar a implementação:

**Se uma conclusão não possui evidência autorizada, o sistema deve permanecer em silêncio.**

O software não deve tentar “preencher espaços”.

Isso vale especialmente para futuras camadas de relatório.

# **28. Resultado esperado da primeira contratação**

Ao final da Fase A devemos ter:

**uma plataforma real, utilizável e segura o suficiente para executar a Onda 0, coletar dados confiáveis e permitir que a metodologia evolua sem perder o histórico.**

Isso é o MVP técnico do MGH.

Não:

o produto comercial final.

# **29. Como você pode abrir a reunião com o desenvolvedor**

Você pode explicar aproximadamente assim:

“Eu não estou procurando alguém para simplesmente criar um formulário de perfil. Nós já construímos a metodologia, o instrumento, o sistema de pontuação, o modelo de dados, as regras de versionamento e os testes esperados. A primeira etapa é uma plataforma de pesquisa para validar o instrumento. Quero que você entenda a arquitetura completa, mas o orçamento inicial deve se concentrar na Fase A — o Pilot Core.”

Depois:

“O ponto mais importante para mim é rastreabilidade. Eu preciso saber exatamente qual versão de cada regra produziu qualquer resultado e preciso preservar o dado original mesmo quando os algoritmos evoluírem.”

E então:

“IA não será o motor da análise. Se futuramente usarmos IA, ela trabalhará apenas sobre Claims já autorizados pelo nosso Motor.”

Essas três explicações provavelmente farão o desenvolvedor compreender rapidamente que não estamos falando de um quiz comum.

# **ETAPA 2.29A CONCLUÍDA**

Com isso temos o primeiro documento do Developer Handoff:

# **01 — EXECUTIVE PRODUCT BRIEF — DRAFT 0.1**

A próxima peça será mais técnica e muito importante:

# **ETAPA 2.29B — FUNCTIONAL SPECIFICATION**

Nela vamos definir tela por tela e fluxo por fluxo:

**o que existe**

**quem pode acessar**

**o que cada botão faz**

**quais estados existem**

**quais validações ocorrem**

**quais erros devem aparecer**

**o que é salvo**

**o que acontece ao voltar**

**o que acontece ao abandonar**

**o que acontece no submit**

**o que acontece depois do submit**

A partir desse documento, o desenvolvedor já conseguirá começar a transformar nossa metodologia em **backlog técnico e estimativa de horas**.

Perfeito. Vamos para a próxima peça do Developer Handoff, agora descendo do “o que é o produto” para **como ele precisa funcionar na prática**.

# **ETAPA 2.29B — FUNCTIONAL SPECIFICATION**

## **Documento 02 — Especificação Funcional da Fase A**

Versão inicial:

**MGH-FUNC-SPEC-0.1**Compatibilidade: **MGH-MASTER-P1.0-RC1**Escopo: **Pilot Core / Onda 0**

O objetivo deste documento é permitir que o desenvolvedor transforme o projeto em:

telas → histórias de usuário → backend → regras → testes → estimativa.

# **1. Regra geral da Fase A**

A plataforma terá dois ambientes principais:

### **AMBIENTE DO PARTICIPANTE**

Objetivo:

responder ao MGH-P1.0 com segurança, simplicidade e rastreabilidade.

### **AMBIENTE INTERNO**

Objetivo:

administrar participantes, acompanhar aplicações e operar a pesquisa da Onda 0.

Não teremos ainda:

ambiente comercial do cliente.

# **2. Perfis de acesso**

A arquitetura deve suportar:

| **Papel** | **Função principal** |
| --- | --- |
| PARTICIPANT | responder assessment |
| RESEARCHER | acompanhar O0 e realizar entrevista |
| METHODOLOGIST | analisar instrumento e ocorrências |
| ADMIN | administração operacional e acesso |

Na Fase A, uma mesma pessoa poderá acumular:

RESEARCHER + METHODOLOGIST + ADMIN

mas o sistema não deve assumir que isso será assim para sempre.

# **3. Estados oficiais do Assessment**

Precisamos congelar a máquina de estados.

CREATED

↓

STARTED

↓

IN\_PROGRESS

↓

COMPLETED

Estados alternativos:

ABANDONED

WITHDRAWN

INVALIDATED



# **4. Significado de cada estado**

### **CREATED**

Assessment foi criado, porém o participante ainda não iniciou.

### **STARTED**

Participante abriu efetivamente a aplicação e iniciou o fluxo.

Pode rapidamente evoluir para IN\_PROGRESS.

### **IN\_PROGRESS**

Existe atividade de resposta não concluída.

### **COMPLETED**

Submit final executado com sucesso.

Depois disso:

respostas bloqueadas.

### **ABANDONED**

Aplicação iniciada, mas não concluída dentro da política que futuramente definirmos.

Não necessariamente precisa ser atribuído automaticamente no P1.0.

### **WITHDRAWN**

Participante retirou sua participação ou houve procedimento formal de retirada.

Isso não significa DELETE automático.

### **INVALIDATED**

Assessment concluído ou iniciado, mas posteriormente considerado inadequado para determinado uso analítico.

RAW permanece.

# **5. Estados proibidos**

Não criar coisas genéricas como:

DONE

FINISHED

CANCELED

em paralelo aos estados oficiais.

Isso geraria ambiguidade.

# **6. JORNADA DO PARTICIPANTE — VISÃO GERAL**

Fluxo:

LINK SEGURO

↓

TELA DE BOAS-VINDAS

↓

CONSENTIMENTO

↓

CONTEXTO PROFISSIONAL

↓

INSTRUÇÕES

↓

48 CENÁRIOS

↓

SELF

↓

FEEDBACK PÓS-TESTE

↓

REVISÃO FINAL, se habilitada

↓

SUBMIT

↓

CONFIRMAÇÃO



# **7. TELA P01 — LINK / ACESSO**

O participante recebe um link individual.

Exemplo conceitual:

/apply/<secure-token>

O token:

* precisa ser imprevisível;
* não deve conter ID sequencial;
* não deve carregar nome;
* deve ser revogável;
* deve ter comportamento seguro em caso de tentativa inválida.

# **8. Token inválido**

Nunca responder:

“O participante João não existe.”

Ou:

“Este ID pertence a outra pessoa.”

Resposta neutra:

“Este acesso não está disponível. Verifique o link recebido ou entre em contato com o responsável pela pesquisa.”

Isso evita exposição de existência.

# **9. Token já concluído**

Se Assessment = COMPLETED:

o participante não volta às respostas.

Exibir:

“Esta aplicação já foi concluída.”

Opcionalmente:

data de conclusão.

Nunca mostrar resultado.

# **10. TELA P02 — BOAS-VINDAS**

Objetivo:

contextualizar sem influenciar respostas.

Conteúdo:

**Mapa de Governo Humano™**

Breve descrição neutra.

Exemplo:

“Você responderá a situações relacionadas à maneira como costuma agir, se comunicar e reagir no ambiente profissional.”

CTA:

**Iniciar**

Ainda não inicia pontuação.

# **11. TELA P03 — CONSENTIMENTO**

Consentimento versionado.

Campos conceituais:

consent\_version

accepted\_at

acceptance\_ip — avaliar necessidade jurídica/técnica antes de congelar

user\_agent — uso técnico quando necessário

accepted = true/false

# **12. Consentimento obrigatório**

Sem consentimento:

aplicação não continua.

O participante pode:

recusar.

Se recusar:

não iniciar assessment.

Registrar conforme política metodológica e de privacidade.

# **13. Conteúdo do consentimento**

Precisa informar, em linguagem adequada:

finalidade de pesquisa/piloto;

natureza experimental;

participação voluntária;

tratamento dos dados;

possibilidade de retirada;

limitações do instrumento;

não utilização para decisões automáticas de emprego naquela fase;

contato responsável.

Texto jurídico final passa por revisão especializada.

O desenvolvedor implementa:

versionamento e aceite.

Não inventa conteúdo legal.

# **14. TELA P04 — CONTEXTO PROFISSIONAL**

Campos já previstos:

**cargo/função**

**área**

**tempo na função**

**lidera pessoas?**

se sim:

**quantas?**

**faixa etária**, quando mantida como opcional.

**contexto profissional atual**.

# **15. Regra de minimização**

Não coletar na Fase A dados que não tenham finalidade clara.

Exemplos que eu não pediria automaticamente:

CPF;

RG;

endereço residencial;

salário;

estado civil;

religião.

Não precisamos deles para o piloto.

# **16. Validações do contexto**

Exemplo:

role → obrigatório.

area → obrigatório ou catálogo + “outro”.

role\_tenure → obrigatório.

leads\_people → obrigatório.

Se leads\_people=true:

number\_of\_people\_led obrigatório.

Não aceitar números negativos.

# **17. TELA P05 — INSTRUÇÕES**

Texto P1.0 já definido metodologicamente.

Elementos centrais:

Não existem respostas certas ou erradas.

Responda pensando principalmente em como costuma agir hoje.

Quando mais de uma alternativa parecer adequada, escolha a que mais frequentemente se aproxima do seu comportamento natural.

Algumas situações podem parecer semelhantes intencionalmente.

Não tente construir um perfil.

O instrumento não avalia inteligência, caráter, competência profissional ou saúde mental.

Botão:

**Começar**

Neste ponto:

assessment.started\_at

caso ainda não registrado.

# **18. TELA P06 — CENÁRIO**

Esta será a tela mais utilizada.

Regra UX:

**um cenário por tela.**

No topo:

Cenário 12 de 48

Não mostrar:

“Você está respondendo Dominância.”

“Questão de Externalização.”

“Bloco DISC.”

Nada que revele scoring.

# **19. PC — apresentação**

Mostrar:

situação;

quatro alternativas.

O participante escolhe:

uma.

As posições das alternativas podem estar randomizadas conforme especificação.

Frontend recebe:

opções já apresentadas naquela ordem.

Não decide scoring.

# **20. PRC Forced**

Mesmo padrão:

situação;

alternativas V/A/C randomizadas;

uma escolha.

Não mostrar:

Visual / Auditivo / Cinestésico.

# **21. PRC Independent**

Aqui a tela tem um cenário/grupo, mas três ratings.

Exemplo lógico:

V → 1–5

A → 1–5

C → 1–5

Mas o participante vê somente o conteúdo das três afirmações.

Regra:

as três avaliações precisam estar preenchidas para o cenário ser considerado concluído.

A ordem dos três blocos pode ser randomizada.

A direção da escala 1→5:

não randomiza.

# **22. DR**

Mostrar:

situação;

quatro alternativas ordinais.

Não randomizar opções.

Isso é regra metodológica.

# **23. Botões do cenário**

Idealmente:

**Voltar**

**Continuar**

Não precisamos de:

“Salvar”.

Salvamento é automático.

# **24. Autosave**

Ao escolher uma alternativa:

salvar imediatamente.

Para PRC Independent:

cada rating pode ser salvo conforme é preenchido, mas o cenário só conta como completo quando os três estão preenchidos.

# **25. Estado visual do save**

Pode haver indicador discreto:

“Salvo”

ou:

ícone adequado.

Não fazer pop-up em toda resposta.

UX deve ser fluida.

# **26. O que acontece se o save falhar**

Não avançar silenciosamente.

Mensagem:

“Não foi possível salvar esta resposta. Verifique sua conexão e tente novamente.”

Se houver retry seguro:

usar.

Não apresentar:

stack trace;

SQL error;

códigos técnicos.

# **27. Mudança de resposta**

Se participante marcou opção X e depois Y:

RAW/eventos precisam preservar:

**primeira seleção**

**alteração**

**resposta atual.**

Não simplesmente:

UPDATE answer = Y

apagando toda a história.

# **28. RESPONSE\_EVENT**

Eventos relevantes podem incluir:

OPTION\_SELECTED

OPTION\_CHANGED

SCENARIO\_OPENED

SCENARIO\_COMPLETED

BACK\_NAVIGATION

ASSESSMENT\_RESUMED

FINAL\_SUBMIT

A lista definitiva poderá ser refinada tecnicamente, mas os eventos metodologicamente necessários precisam ser preservados.

# **29. Timing**

Registrar, quando tecnicamente confiável:

scenario\_opened\_at

first\_response\_at

last\_response\_at

duration\_ms

Mas tempo não deve ser tratado como perfeito.

Se usuário:

abre a tela;

vai almoçar;

volta uma hora depois,

isso não significa:

levou uma hora cognitivamente para responder.

Por isso temos flags e análises cuidadosas.

# **30. Navegação para trás**

Permitida antes do submit final.

Se voltar:

mostrar a resposta atual.

Se mudar:

registrar alteração.

# **31. Navegação direta**

Eu evitaria no P1.0 uma grade estilo:

1 2 3 4 5 ... 48

permitindo pular livremente.

Melhor fluxo:

sequencial.

Podemos permitir revisão ao final.

Isso reduz complexidade cognitiva e UX.

# **32. Fechar navegador**

Nenhum problema.

Como respostas são salvas:

ao retornar pelo mesmo acesso seguro:

retomar do ponto apropriado.

# **33. Qual cenário mostrar ao retomar**

Sugestão:

primeiro cenário ainda incompleto.

Se todos os 48 estiverem completos e SELF não:

ir para SELF.

Se SELF completo e feedback não:

feedback.

# **34. Não recalcular ordem de opções na retomada**

Importantíssimo.

Se PC-001 foi apresentado como:

option\_C

option\_A

option\_D

option\_B

ao retomar:

manter exatamente essa apresentação.

Por isso existe:

OPTION\_PRESENTATION.

Randomização ocorre uma vez para aquela apresentação.

# **35. Progress bar**

Base:

48 cenários.

Pode mostrar:

25 de 48

ou percentual derivado da quantidade de cenários.

Não contar os ratings PRC como três passos.

# **36. Após cenário 48**

Entramos em:

# **SELF**

Explicação breve:

“Agora responda algumas afirmações sobre como você percebe seu funcionamento profissional.”

Não revelar:

“vamos verificar se suas respostas batem com o teste.”

Isso criaria viés.

# **37. TELA P07 — SELF**

Oito itens.

Escala:

1–5.

Precisamos definir visualmente os rótulos conforme specification final.

Todos obrigatórios para submit final no P1.0.

Mas continuam:

fora do Score Engine.

# **38. SELF não deve influenciar resultado**

Implementação precisa garantir separação.

Não aceitar algo como:

main\_score += self\_response

Nunca.

SELF pertence ao:

Research layer.

# **39. TELA P08 — FEEDBACK PÓS-TESTE**

Coletaremos informações como:

dificuldade para escolher;

alternativa inadequada;

item confuso;

percepção de repetição;

tentativa de escolher a opção profissionalmente desejável.

Precisamos decidir quais campos são:

**globais**

e quais podem referenciar:

**item específico.**

# **40. “Desejabilidade” não é detector de mentira**

A pergunta sobre tentativa de responder de forma profissionalmente desejável deve entrar como:

dado de pesquisa.

Não produzir:

“score de sinceridade”.

Nem invalidar automaticamente assessment.

# **41. TELA P09 — REVISÃO FINAL**

Eu manteria como funcionalidade configurável.

Se habilitada:

mostrar apenas:

cenários ainda incompletos

ou permitir revisão antes do envio.

Não mostrar:

score;

dimensões;

alertas do tipo “Você marcou D demais”.

# **42. TELA P10 — SUBMISSÃO FINAL**

Antes do submit:

mensagem clara:

“Após concluir, suas respostas não poderão mais ser alteradas.”

Botão:

# **Concluir aplicação**

Pode existir confirmação simples para evitar clique acidental.

# **43. Regras obrigatórias antes do Submit**

Backend deve verificar:

### **Consentimento válido**

sim.

### **Contexto profissional válido**

sim.

### **48 cenários completos**

sim.

### **56 respostas pontuáveis completas**

sim.

### **SELF 8/8**

sim.

### **feedback obrigatório conforme schema**

sim.

Se faltar qualquer requisito:

não completar.

# **44. Submit é transacional**

Isso é importante.

Não pode acontecer:

assessment recebe COMPLETED

mas metade das respostas ainda não foi salva.

A operação final precisa garantir consistência.

# **45. Idempotência do Submit**

Se participante clicar duas vezes ou houver retry:

não criar dois COMPLETED;

não criar dois score jobs;

não criar dois relatórios.

Mesma operação lógica:

mesmo resultado.

# **46. FLOW-001**

Já existe Golden Case:

55/56 respostas.

Resultado:

submit rejeitado.

Erro lógico:

ASSESSMENT\_NOT\_READY

Status:

continua IN\_PROGRESS.

# **47. FLOW-002**

Tudo válido.

Resultado:

status = COMPLETED

submitted\_at = timestamp

respostas bloqueadas.

# **48. FLOW-003**

Tentar alterar resposta após COMPLETED.

Resultado:

ASSESSMENT\_ALREADY\_COMPLETED

RAW:

não muda.

# **49. TELA P11 — CONCLUSÃO**

Mensagem simples:

“Sua participação foi concluída com sucesso. Obrigado.”

Pode conter:

contato da pesquisa.

Não conter:

score;

resultado;

perfil;

gráfico;

interpretação.

# **50. Agora o AMBIENTE INTERNO**

Entramos no:

# **RESEARCH / ADMIN APP**

Menu inicial provável:

**Dashboard**

**Participantes**

**Assessments**

**Entrevistas**

**Itens**

**Ocorrências**

**Hipóteses**

**Mudanças**

**Gate Review**

Configurações/usuários conforme acesso.

# **51. TELA A01 — LOGIN INTERNO**

Autenticação segura.

Em produção/piloto:

MFA recomendada/obrigatória conforme perfil e implementação final.

Não usar:

senha compartilhada da equipe.

Cada pessoa:

credencial individual.

# **52. TELA A02 — DASHBOARD O0**

Objetivo:

visão operacional, não analytics psicométrico sofisticado.

Exibir:

total de participantes;

CREATED;

IN\_PROGRESS;

COMPLETED;

WITHDRAWN;

INVALIDATED;

entrevistas realizadas;

itens com flags;

ocorrências abertas;

progresso da Onda 0.

# **53. Dashboard não deve mostrar “quem é mais D”**

Isso não é objetivo da tela.

Nada de:

ranking de perfis.

O Dashboard O0 é operacional e de pesquisa.

# **54. TELA A03 — PARTICIPANTES**

Tabela com:

public\_code

status;

assessment;

data de criação;

progresso;

entrevista realizada?;

flags?;

ocorrências?

Nome real apenas para quem tiver permissão adequada, idealmente separado.

# **55. Código público**

Exemplo:

MGH-O0-001

MGH-O0-002

etc.

Esse código:

não é chave primária.

Banco utiliza:

UUID.

# **56. TELA A04 — CRIAR PARTICIPANTE**

Campos mínimos:

nome/identidade na camada protegida;

código público;

informação de contato necessária;

wave;

creator\_participant = true/false;

observações operacionais quando apropriadas.

Ao salvar:

cria participante.

Depois:

gerar assessment.

# **57. Identidade separada**

Idealmente:

PARTICIPANT\_IDENTITY

fica separada do restante do assessment.

O Score Engine não precisa saber:

nome.

Isso é Privacy by Design.

# **58. TELA A05 — GERAR ASSESSMENT**

Ao criar:

selecionar:

instrument\_version = MGH-P1.0

Wave:

O0

Sistema gera:

assessment\_id

secure\_access\_token

status:

CREATED.

Não permitir ao admin trocar scoring arbitrariamente.

Compatibilidade vem do:

release manifest.

# **59. TELA A06 — DETALHE DO ASSESSMENT**

Mostrar:

public\_code;

status;

início;

última atividade;

progresso;

conclusão;

instrument\_version;

scoring version prevista;

qualidade/eventos;

SELF;

feedback;

flags;

ocorrências.

# **60. RAW não editável**

Na tela administrativa:

o pesquisador pode:

visualizar conforme permissão.

Não:

corrigir a resposta.

Se existir erro:

registrar:

occurrence / flag / invalidation.

# **61. Botões sensíveis**

Exemplos:

**Invalidar assessment**

**Marcar withdrawn**

**Revogar link**

Esses atos precisam:

confirmação;

motivo;

audit log.

# **62. Invalidar não é apagar**

Ao invalidar:

status = INVALIDATED

ou mecanismo equivalente.

Registrar:

reason\_code

notes

invalidated\_by

invalidated\_at

RAW permanece.

# **63. TELA A07 — ENTREVISTA COGNITIVA**

Associada ao participante/assessment.

Campos:

data;

entrevistador;

observações gerais;

dificuldade percebida;

contexto;

notas metodológicas.

A entrevista acontece:

depois da aplicação natural.

Não pensar em voz alta durante a primeira passagem.

# **64. TELA A08 — COGNITIVE ITEM REVIEW**

Para cada item relevante:

flags como:

CMP

AMB

NFA

TWO

DES

CTX

VOC

RED

COG

MAP.

Precisamos permitir:

item;

flag;

gravidade;

comentário;

trecho/observação;

ação sugerida.

# **65. Significado das flags**

Exemplo:

CMP — compreensão.

AMB — ambiguidade.

NFA — nenhuma alternativa adequada.

TWO — duas alternativas percebidas como equivalentes.

DES — desejabilidade.

CTX — dependência de contexto.

VOC — vocabulário.

RED — repetição.

COG — esforço cognitivo.

MAP — alternativa escolhida não representa adequadamente o construto pretendido.

Esses significados precisam estar disponíveis no sistema.

# **66. TELA A09 — AUDIT FLAGS**

Consolida flags metodológicas/qualidade.

Não são rótulos do participante.

Podem ser ligados a:

assessment;

item;

timing;

qualidade;

coerência.

# **67. Flag não altera RAW**

Exemplo:

timing considerado inválido.

Não fazemos:

duration\_ms = NULL

silenciosamente.

Registramos:

TIMING\_ANALYSIS\_EXCLUDED.

RAW continua existente.

# **68. TELA A10 — OCCURRENCES**

Ocorrência é diferente de cognitive flag.

Exemplo:

problema técnico;

link errado;

queda de conexão;

participante recebeu orientação externa;

interrupção grave;

erro de versão;

outro evento capaz de afetar análise.

# **69. Severidade de ocorrência**

Congelamos:

MINOR

MODERATE

MAJOR

INVALIDATING

# **70. Scope de exclusão**

NONE

ITEM

TIMING\_ANALYSIS

ASSESSMENT

SPECIFIC\_ANALYSIS

Assim não precisamos invalidar tudo por qualquer ocorrência.

# **71. TELA A11 — ITEM SURVIVAL**

Cada item poderá receber status de decisão:

KEEP

REWRITE\_MINOR

REWRITE\_MAJOR

REKEY\_REVIEW

RESERVE

RETIRE

NEW\_ITEM\_REQUIRED

Isso deve ser versionado por wave/review.

# **72. Nenhuma edição silenciosa do item**

Se decisão:

REWRITE\_MINOR

não significa:

abrir o item e mudar o texto em produção.

Gera:

proposta de mudança.

Depois:

Change Log + nova versão.

# **73. TELA A12 — CHANGE LOG**

Campos:

change\_id;

componente;

versão atual;

mudança proposta;

razão;

impacto;

comparabilidade histórica;

Golden Cases afetados;

aprovador;

status.

Status possíveis:

PROPOSED

UNDER\_REVIEW

APPROVED

REJECTED

IMPLEMENTED.

# **74. TELA A13 — HYPOTHESIS REGISTER**

Cadastrar e acompanhar H-001 a H-012.

Campos:

hypothesis\_code;

description;

data\_required;

analysis\_method placeholder;

status;

result;

notes.

Não precisamos automatizar estatística sofisticada agora.

# **75. TELA A14 — GATE REVIEW**

Ao final da Onda 0, precisamos registrar:

critérios;

resultados;

evidências;

decisão.

Decisões possíveis:

ADVANCE

ADVANCE\_WITH\_MINOR\_FIXES

REPEAT\_O0\_WAVE

STOP\_AND\_REDESIGN.

# **76. Gate não deve ser um botão mágico**

Não:

sistema calcula 82% e decide “ADVANCE”.

A decisão é:

metodológica/humana.

O sistema organiza evidências e registra decisão.

# **77. TELA A15 — SCORES INTERNOS**

Depois de COMPLETED, o Score Engine pode rodar.

Pesquisador autorizado poderá visualizar:

PC raw/frequency;

PRC forced;

PRC independent;

DR axes;

facets internas;

relation data;

SELF.

Mas interface deve distinguir:

score bruto

de:

interpretação.

# **78. O que NÃO mostrar como “resultado”**

Não criar cards como:

“Dominante 82%”

“Visual 93%”

“Resiliência alta”

Mesmo na tela interna isso induziria erro metodológico.

Mostrar a métrica como ela realmente é.

# **79. Interpretation Shadow Mode**

Se implementado depois da Fase A mínima:

poderemos ter aba:

# **Experimental Interpretation**

Somente interna.

Exibe:

Evidence Run;

UIGs ativadas;

blocks;

synthesis;

claims;

actions;

suppressed rules.

Com banner:

**Experimental — Research Use Only**

# **80. Candidate Rules**

Se rodadas em Shadow Mode:

visualizar separadamente:

“Would have activated”.

Nunca misturar com:

official pilot output.

# **81. Auditoria administrativa**

Ações importantes precisam registrar:

quem;

quando;

o quê;

antes/depois quando aplicável;

razão.

Exemplos:

invalidar;

revogar acesso;

mudar status;

aprovar change request;

publicar versão.

# **82. Exportação**

Fase A precisa permitir exportação segura dos dados necessários para análise.

Idealmente:

CSV/XLSX estruturados.

Mas:

identidade pessoal deve ser exportada separadamente ou apenas quando permissão justificar.

# **83. Exportações mínimas**

Eu pediria:

**participants pseudonymized**

**assessments**

**responses**

**response events**

**SELF**

**feedback**

**cognitive reviews**

**flags**

**occurrences**

**scores**

**hypotheses**

**item survival**

**change log**

A planilha operacional que já construímos serve como boa referência conceitual para isso.

# **84. Não usar planilha como banco principal**

A planilha atual é:

ferramenta operacional/protótipo.

O sistema real deve usar:

banco estruturado.

Planilha entra como:

exportação ou apoio.

# **85. Error Catalog mínimo**

Quero uma taxonomia inicial.

### **Público**

INVALID\_ACCESS

ASSESSMENT\_ALREADY\_COMPLETED

ASSESSMENT\_NOT\_AVAILABLE

RESPONSE\_SAVE\_FAILED

ASSESSMENT\_NOT\_READY

SESSION\_CONFLICT

### **Interno**

VERSION\_MISMATCH

OPTION\_NOT\_PRESENTED

INVALID\_OPTION

INVALID\_SCENARIO\_STATE

SCORE\_CONFIGURATION\_ERROR

INSTRUMENT\_CONFIGURATION\_ERROR

UNAUTHORIZED\_ACTION

# **86. Erro técnico ≠ texto exibido**

Exemplo:

backend:

OPTION\_NOT\_PRESENTED

usuário:

“Não foi possível registrar esta resposta. Atualize a página e tente novamente.”

Internamente:

erro técnico detalhado.

# **87. Regras de concorrência**

Se participante abrir a aplicação em:

celular;

e computador;

ao mesmo tempo,

pode haver conflito.

Minha recomendação:

uma sessão ativa prioritária.

Na segunda sessão:

alertar.

Evitar duas telas gravando respostas concorrentes.

# **88. A sessão não pode perder respostas já salvas**

Se login/token expirar ou sessão fechar:

respostas já persistidas:

permanecem.

# **89. Configuração do instrumento não deve estar hard-coded na UI**

Evitar:

if question == 17:

show...

A aplicação deve carregar:

instrument;

scenario;

item;

option;

presentation rules;

validation.

Isso facilita P1.1 sem reescrever frontend inteiro.

# **90. Mas cuidado com “CMS livre”**

Também não quero um painel onde qualquer admin possa:

editar pergunta em produção.

Instrument Registry é versionado e controlado.

Publicação precisa ser uma ação metodologicamente governada.

# **91. Regras de publicação**

Uma versão publicada:

imutável.

Se texto precisa mudar:

nova versão.

Nunca editar a versão já utilizada por participantes.

# **92. Definition of Done — Participant App**

Fase participante só é aceita se:

* link seguro funcionar;
* consentimento versionado;
* contexto profissional validado;
* instruções corretas;
* 48 cenários;
* randomização correta;
* PRC independent correto;
* DR sem randomização;
* autosave;
* revisions preservadas;
* progresso correto;
* retomada;
* SELF;
* feedback;
* submit transacional;
* bloqueio pós-submit;
* nenhuma exposição de score target;
* nenhuma exposição de resultado.

# **93. Definition of Done — Research/Admin**

Só é aceita se:

* autenticação;
* participantes;
* geração de assessment;
* acompanhamento;
* entrevista cognitiva;
* item review;
* flags;
* ocorrências;
* item survival;
* change log;
* hypothesis register;
* gate review;
* score interno;
* exportação;
* audit log das ações sensíveis.

# **94. Definition of Done — Backend**

Precisa passar:

GOLDEN-P1.0

e também:

testes de fluxo;

testes de autorização;

testes de idempotência;

testes de versionamento;

testes de imutabilidade;

testes de randomização;

testes de submissão.

# **95. O que NÃO faz parte da aceitação da Fase A**

Não exigir:

relatório comercial;

design final de marca;

Mapa de Relação;

empresa/equipe;

billing;

app nativo;

IA;

dashboard executivo empresarial;

motor interpretativo comercial completo.

Isso evita scope creep.

# **96. Prioridades do backlog**

Eu organizaria:

### **P0 — BLOCKER**

Assessment;

RAW;

versionamento;

submit;

Score;

segurança;

Golden Cases.

### **P1 — CRITICAL PILOT**

Research screens;

interviews;

flags;

occurrences;

resume;

events;

export.

### **P2 — NICE FOR O0**

polimento visual adicional;

analytics internos mais sofisticados;

shadow interpretation UI;

relatórios operacionais refinados.

# **97. Um desenvolvedor pode sugerir cortar P1?**

Algumas coisas sim.

Mas não:

interview/audit/research capability inteira.

Porque o objetivo da Onda 0 não é apenas:

“as pessoas conseguirem responder.”

É:

**aprender se o instrumento funciona.**

Sem a camada de pesquisa, construiríamos metade do MVP.

# **98. Um ponto importante para orçamento**

Peça ao desenvolvedor para estimar separadamente:

**Participant App**

**Admin/Research**

**Data/Backend**

**Score Engine**

**Security**

**Golden Tests**

**Deploy/Infra**

**Documentation**

Assim conseguimos saber onde está o custo real.

# **99. Um bom sinal na reunião**

Se o desenvolvedor perguntar:

“Quais operações precisam ser imutáveis?”

“Como vocês querem versionar o instrumento?”

“Qual a diferença entre RAW e derived?”

“Como vamos garantir idempotência?”

“Quais Golden Cases entram no CI?”

isso é um ótimo sinal.

Ele entendeu o tipo de sistema.

# **100. Um sinal de alerta**

Se a resposta for:

“É tranquilo, faço isso num formulário e mando para uma IA analisar.”

Ele não entendeu a arquitetura.

Outro sinal de alerta:

“Depois a gente vê versionamento.”

Também ruim.

Porque versionamento precisa nascer junto com o dado.

# **DOCUMENTO 02 CONCLUÍDO**

Temos agora:

### **01 — Executive Product Brief — Draft 0.1**

e:

### **02 — Functional Specification — Draft 0.1**

O próximo documento muda de perspectiva.

