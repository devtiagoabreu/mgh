---
name: 10-escopo-roadmap-e-fases
description: Etapa 2.23: Fase A/B/C/D/E e MGH Parking Lot.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 19074-19821
---

# Escopo, Roadmap E Fases

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.23 — ESCOPO DE IMPLEMENTAÇÃO + ROADMAP TÉCNICO**

Antes de mergulharmos nas 40 UIGs, vamos separar claramente o que o desenvolvedor precisa construir:

### **FASE A — O0 / PILOTO**

Questionário + RAW + pesquisa + Score Engine.

### **FASE B — MOTOR INTERPRETATIVO**

Evidence Engine + 40 UIGs formalizadas + Block + Collision + Synthesis + Claims.

### **FASE C — PRODUTO**

Relatórios + Mapa de Relação + Sala de Comando Humana + empresas + equipes etc.

Isso vai impedir que você chegue à reunião pedindo que ele construa **todo o ecossistema de uma vez**.

Na próxima etapa, eu montaria esse roadmap com **MVP técnico, prioridades, dependências, entregáveis, critérios de aceite e o que explicitamente NÃO construir em cada fase**.

Depois dele, voltamos para a formalização integral da biblioteca interpretativa — e aí fechamos o pacote de handoff sem deixar buraco metodológico.

Vamos. Agora vamos transformar tudo que desenhamos em **uma sequência de construção racional**, para que você não chegue ao desenvolvedor pedindo um sistema gigantesco antes de termos provado o instrumento.

# **ETAPA 2.23 — ESCOPO DE IMPLEMENTAÇÃO + ROADMAP TÉCNICO MGH™**

A decisão mais importante desta etapa é:

**O primeiro software do MGH não será o produto comercial. Será a máquina que nos permitirá testar e aperfeiçoar o instrumento.**

Isso muda custo, prazo, risco e prioridade.

## **1. Cinco fases de implementação**

Eu estruturaria o desenvolvimento assim:

| **Fase** | **Objetivo** | **Resultado** |
| --- | --- | --- |
| **A — Pilot Core** | executar Onda 0 | plataforma funcional de pesquisa |
| **B — Research & Scoring** | sustentar Onda 1/2 | instrumento analisável e versionável |
| **C — Motor de Governo™** | interpretar evidências | Interpretation Engine determinístico |
| **D — MGH Individual** | transformar metodologia em produto | produto comercial individual |
| **E — Ecossistema Humano** | cruzar pessoas e equipes | Mapa de Relação + Sala de Comando Humana |

Isso evita tentar construir na primeira versão aquilo que só fará sentido depois de termos dados reais.

# **FASE A — PILOT CORE**

### **MVP TÉCNICO DA ONDA 0**

Essa é a primeira coisa que eu pediria ao desenvolvedor.

Não:

“Crie o MGH completo.”

Mas:

**“Implemente a plataforma necessária para executarmos corretamente o MGH-P1.0 Onda 0.”**

### **O participante precisa conseguir**

Entrar por link seguro, aceitar o consentimento versionado, informar contexto profissional, responder os 48 cenários, produzir as 56 respostas pontuáveis, voltar e revisar antes da conclusão, responder SELF e feedback, finalizar e retomar uma aplicação interrompida.

### **O sistema precisa registrar**

RAW, primeira resposta, resposta final, revisões, opção apresentada, ordem randomizada, timestamps, duração, eventos essenciais, versão do instrumento e contexto profissional.

### **O pesquisador precisa conseguir**

Criar participante, gerar MGH-ID, gerar link seguro, acompanhar andamento, registrar entrevista cognitiva, Audit Flags, ocorrências, Item Survival Matrix, Change Log e Gate Review.

### **O Score Engine precisa conseguir**

Calcular:

**PC:** D/I/S/C, frequências, ranking, gaps e entropia exploratória.

**PRC:** forced + avaliações independentes.

**DR:** Velocidade, Impacto, Persistência e Externalização.

**Facetas:** sinais internos definidos no P1.0.

Mas **não precisa interpretar a pessoa ainda**.

# **2. O que NÃO construir na Fase A**

Esse ponto deve entrar no contrato.

Não construir ainda:

Mapa de Relação™, Sala de Comando Humana™, aplicativo iOS/Android, pagamentos, Hotmart, CRM, gamificação, ranking, IA interpretando respostas, relatórios comerciais sofisticados, empresa/equipe completa, matching de cargos ou “compatibilidade”.

Também não precisamos construir todo o Motor de Governo.

Podemos inclusive deixar:

Evidence Engine → futuro.

O primeiro objetivo é muito mais simples:

# **CONSEGUIR COLETAR DADOS CONFIÁVEIS.**

# **3. Critério de aceite da Fase A**

A Fase A não termina quando:

“as telas estão bonitas.”

Ela termina quando os Golden Cases e requisitos críticos passam.

Precisaremos comprovar, entre outras coisas:

| **Requisito** | **Aceite** |
| --- | --- |
| 48 cenários corretos | PASS |
| 56 respostas registradas | PASS |
| randomização sem alterar score | PASS |
| DR ordinal preservado | PASS |
| revisões mantêm primeira escolha | PASS |
| autosave | PASS |
| retomada de aplicação | PASS |
| submissão transacional | PASS |
| RAW não editável | PASS |
| Score Engine exato | PASS |
| consentimento versionado | PASS |
| segurança básica | PASS |
| Golden Cases P1.0 | PASS |

Só então colocamos:

MGH-O0-001

na plataforma.

# **4. GATE A — ONDA 0**

Depois entram as primeiras **8–12 pessoas**.

O software deixa de ser o foco temporariamente.

Passamos a analisar:

**as pessoas entendem?**

**as alternativas funcionam?**

**há desejabilidade?**

**há itens ambíguos?**

**o tempo está aceitável?**

**quais itens precisam morrer?**

A Onda 0 pode gerar:

MGH-P1.1.

E isso é esperado.

Portanto o desenvolvedor precisa construir uma plataforma que aceite **versionamento do instrumento**, não uma aplicação com as 48 perguntas escritas diretamente no código.

Essa diferença é crítica.

# **FASE B — RESEARCH & SCORING PLATFORM**

Depois da Onda 0, teremos um instrumento revisado para Onda 1.

Aqui começa uma plataforma de pesquisa mais poderosa.

Passaremos de:

“consigo aplicar”

para:

**“consigo estudar como o instrumento está funcionando.”**

Entrariam recursos como:

distribuição das respostas por item; taxas de revisão; tempos; alternativas pouco escolhidas; alternativas excessivamente escolhidas; comparação dos Relation Groups; PRC Forced × Independent; SELF × medidas relacionadas; exportação dos dados; relatórios de Item Survival; comparação entre versões do instrumento.

Esse módulo deve permitir que o psicometrista futuramente receba dados limpos.

# **5. Uma coisa importante: não construir estatística sofisticada no backend cedo demais**

Eu não pediria agora:

“Faça análise fatorial dentro do aplicativo.”

Nem IRT, modelos forced-choice sofisticados ou toda análise psicométrica.

Inicialmente:

**o sistema coleta e exporta dados com enorme qualidade.**

A análise estatística avançada poderá ser realizada externamente em R/Python por nós e pelo psicometrista.

Se posteriormente determinada análise precisar virar funcionalidade permanente, incorporamos ao sistema.

Isso evita transformar o software num laboratório estatístico desnecessariamente cedo.

# **6. GATE B — INSTRUMENTO ESTÁVEL**

Depois da Onda 1 e, principalmente, com dados maiores da Onda 2, começaremos a responder algo que hoje deliberadamente ainda não respondemos:

**Quando uma medida pode ser classificada como RELEVANT, CONSISTENT, LOW, HIGH etc.?**

Esse ponto é fundamental.

Hoje sabemos calcular:

DR.Persistence = 66,67.

Mas ainda não afirmamos:

“Persistência alta.”

Primeiro queremos ver os dados.

Portanto o **Evidence Engine definitivo não deve ser construído em cima de cortes inventados antes da pilotagem**.

Podemos construir sua arquitetura.

Não seus thresholds definitivos.

# **FASE C — MOTOR DE GOVERNO™ 1.0**

Aqui entramos no verdadeiro cérebro aplicado do produto.

Somente quando tivermos:

**Score Engine razoavelmente estável + Evidence Dictionary definido + classificações utilizáveis**, começamos a ligar tudo.

Fluxo:

Scores
↓
Evidence Engine
↓
UIG Engine
↓
Block Engine
↓
Precedence Engine
↓
Collision Resolver
↓
Synthesis Engine
↓
Claim Engine
↓
Language Engine

Essa é a Fase C.

# **7. Para a Fase C, precisamos terminar algo metodológico antes**

As **40 UIGs sobreviventes** precisam ser formalizadas uma por uma.

Hoje temos:

arquitetura;

schema;

biblioteca;

auditoria;

exemplos formalizados;

Golden Cases.

Mas não preenchemos formalmente as 40 fichas completas.

Antes de pedir ao desenvolvedor que implemente o Motor inteiro, precisamos fechar isso.

Esse trabalho ainda faremos aqui.

# **8. Primeiro produto do Motor não precisa usar IA**

Quando a Fase C estiver funcionando, quero poder gerar:

**Manual de Governo™**

utilizando templates determinísticos.

Isso prova que:

**o Motor sozinho funciona.**

Depois podemos adicionar IA para costurar e melhorar a linguagem.

Essa ordem é muito importante:

**Motor → texto funcional → IA como melhoria.**

Não:

respostas → IA → torcer para sair algo bom.

# **9. GATE C — MOTOR AUDITÁVEL**

Antes de produto comercial:

pegamos um relatório e conseguimos clicar em uma recomendação como:

“Defina critérios claros, mas preserve liberdade de método.”

e responder:

**qual Claim gerou isso?**

DELEGATION\_AUTONOMY\_WITH\_CRITERIA

**qual síntese?**

SIN-DEL-001

**quais UIGs?**

DEL-001 + DEL-002

**quais evidências?**

autonomia + critério

**quais scores?**

determinados dados do Assessment

**quais respostas contribuíram?**

itens específicos.

Se não conseguimos fazer esse caminho para trás:

o Motor ainda não está pronto.

# **FASE D — MGH INDIVIDUAL**

Somente aqui começo a chamar o sistema de **produto comercial**.

A aplicação deixa de ser apenas ferramenta de pesquisa.

Poderemos ter:

conta do usuário;

histórico dos seus mapas;

Assinatura de Governo™;

Manual de Governo™;

relatório elegante;

PDF;

painel individual;

reavaliação futura;

comparação longitudinal cuidadosa.

E agora aparecem questões comerciais:

planos;

pagamentos;

convites;

onboarding;

suporte;

termos comerciais;

marca;

experiência premium.

# **10. Isso também muda a interface**

O Piloto pode dizer:

MGH-P1.0.

O produto provavelmente apresentará algo muito mais elegante:

# **MAPA DE GOVERNO HUMANO™**

**Entenda como você tende a se comunicar, agir e reagir — e transforme essa leitura em decisões de liderança mais inteligentes.**

Por baixo continua toda a nossa engenharia.

O usuário não precisa enxergar a complexidade.

# **11. GATE D — PRODUTO INDIVIDUAL**

Antes de vender em escala eu exigiria:

instrumento suficientemente estável; escopo de uso definido; metodologia documentada; revisão psicométrica adequada; segurança; LGPD revisada; Motor auditável; Golden Cases completos; relatório testado; limitações explicitadas.

Só depois:

escala.

# **FASE E — ECOSSISTEMA HUMANO**

Aí chegamos ao projeto maior que imaginamos.

Primeiro:

# **MAPA DE RELAÇÃO™**

Pessoa A + Pessoa B.

Não:

“compatibilidade 84%”.

Mas:

**convergências**

**possíveis ruídos**

**ajustes de governo**

**diferenças de comunicação**

**delegação**

**feedback**

**decisão**

**pressão**

**conflito**

Exemplo:

O gestor tende a delegar por resultado e autonomia, enquanto o liderado apresenta maior evidência de necessidade de critérios. O ajuste não é retirar autonomia, mas aumentar clareza antes da execução.

Isso é Governo Humano.

# **12. Depois vem a SALA DE COMANDO HUMANA™**

Gestor cadastra:

empresa → equipes → pessoas.

E passa a enxergar:

**arquitetura comportamental**

**padrões de comunicação**

**dinâmica de reação agregada**

**possíveis pontos de ruído**

**necessidades de governo**

**composição das equipes**

Mas com uma regra:

**agregação nunca deve virar julgamento de valor da equipe.**

Não:

“Sua equipe é fraca.”

E muito menos:

“Demita estas quatro pessoas.”

# **13. Posteriormente: integração com Alinhamento Vital**

E aqui acontece algo estratégico para o ecossistema M2M.

MGH responde:

**Como essa pessoa tende a funcionar?**

Mas precisamos de outras camadas.

Futuramente:

**MGH™** — funcionamento humano.

**Maturidade** — quanto essa pessoa consegue assumir.

**Competência** — o que sabe fazer.

**Responsabilidade** — o que deve entregar.

**Performance** — o que efetivamente entrega.

Aí podemos chegar a algo como:

**PESSOA × PERFIL × MATURIDADE × RESPONSABILIDADE × PERFORMANCE**

Isso será muito maior que um teste comportamental.

Será uma plataforma de **Governo Humano Empresarial**.

# **14. Portanto, o roadmap técnico completo fica**

| **Fase** | **Construir** | **Só avançar quando** |
| --- | --- | --- |
| **A — Pilot Core** | questionário + pesquisa + RAW + Score | Golden Cases + Onda 0 |
| **B — Research** | analytics + versões + exportação | Onda 1/2 mostrar estabilidade suficiente |
| **C — Motor** | Evidence + UIG + Blocks + Collision + Claims | interpretações auditáveis |
| **D — Individual** | produto comercial individual | método + segurança + uso definidos |
| **E — Ecossistema** | Relação + Equipe + Organização | produto individual consolidado |

# **15. O que eu pediria ao desenvolvedor na primeira reunião**

Não pediria orçamento para as cinco fases juntas.

Pediria:

**estimativa arquitetural do sistema completo**

mas:

**proposta comercial detalhada somente para a Fase A.**

E separadamente:

estimativa indicativa das fases posteriores.

Por quê?

Porque a Onda 0 pode nos obrigar a alterar partes do instrumento.

Não faz sentido contratar hoje R$ X em funcionalidades dependentes de coisas que ainda estamos testando.

# **16. Também não quero dependência do desenvolvedor**

Outro princípio importante para sua negociação:

# **O MGH pertence ao projeto, não ao programador.**

Precisamos garantir contratualmente, com revisão jurídica:

código-fonte acessível à empresa;

repositório sob controle da empresa;

credenciais de cloud controladas pela empresa;

domínio controlado pela empresa;

banco controlado pela empresa;

documentação técnica;

migrations;

instruções de deploy;

propriedade intelectual claramente definida;

possibilidade real de outro desenvolvedor assumir.

Nunca queremos:

“O sistema está no servidor do fulano e só ele sabe mexer.”

Isso seria uma fragilidade empresarial enorme.

# **17. E não quero que o desenvolvedor seja o dono da metodologia**

Outra separação.

Ele terá acesso suficiente para programar.

Mas:

**Banco Mestre**

**Scoring Matrix**

**Evidence Dictionary**

**UIG Library**

**Motor de Governo**

são ativos metodológicos do MGH.

Os contratos precisam refletir isso.

Mais um ponto para revisão jurídica.

# **18. Como pedir orçamento**

Eu daria ao desenvolvedor uma tabela como:

| **Módulo Fase A** | **Estimativa** |
| --- | --- |
| Participant Web App | horas/R$ |
| Admin O0 | horas/R$ |
| Auth & Permissions | horas/R$ |
| Data Model | horas/R$ |
| Response/Event Engine | horas/R$ |
| Score Engine | horas/R$ |
| Research Tools | horas/R$ |
| Golden Tests/CI | horas/R$ |
| Infra/Deploy | horas/R$ |
| Security baseline | horas/R$ |
| Documentation | horas/R$ |

E pediria:

custo inicial;

prazo;

custo mensal de infraestrutura;

custo mensal de manutenção;

terceiros necessários;

o que está fora do escopo.

Isso permite comparar duas propostas tecnicamente.

# **19. Cuidado com a proposta “barata”**

Um desenvolvedor pode dizer:

“Faço isso em 10 dias usando formulário + GPT.”

Provavelmente estará construindo algo muito diferente.

Outro pode transformar o projeto em infraestrutura de banco.

Também seria inadequado.

Queremos:

**engenharia proporcional ao estágio.**

Robusta nas partes que precisam ser robustas:

RAW;

versionamento;

scoring;

segurança;

testes.

Simples nas partes que podem ser simples:

interface administrativa inicial;

visual da Onda 0;

infraestrutura de pequena escala.

# **20. Uma expressão que quero que você leve para essa reunião**

Se surgir dúvida sobre prioridade:

**“Neste momento eu não preciso de escala. Eu preciso de integridade.”**

Essa frase resume a Fase A.

Se tivermos:

20 usuários e dados perfeitos,

temos algo valioso.

Se tivermos:

20.000 usuários e não soubermos qual versão da pergunta produziu cada resultado,

temos um problema.

# **21. E outra**

**“O RAW precisa sobreviver à evolução do algoritmo.”**

Isso explica por que desenhamos Runs e versões.

# **22. E uma terceira**

**“A IA não interpreta a pessoa. O Motor autoriza os claims; a IA pode redigir.”**

Essa frase explica metade da arquitetura interpretativa em poucos segundos.

# **23. Onde estamos no projeto**

Nossa estrutura agora está dividida de maneira muito clara:

### **INSTRUMENTO**

Praticamente especificado para P1.0.

### **PILOTAGEM**

Especificada.

### **DATA MODEL**

Especificado.

### **SOFTWARE PILOTO**

Funcionalmente especificado.

### **BACKEND**

Arquitetonicamente especificado.

### **SEGURANÇA**

Especificada em requisitos.

### **TESTES**

Especificados.

### **ROADMAP**

Agora especificado.

O principal bloco metodológico ainda aberto antes do **Developer Handoff completo** é exatamente aquele que já identificamos:

# **FORMALIZAR AS 40 UIGs RESTANTES.**

E eu sugiro que agora retornemos para esse núcleo.

