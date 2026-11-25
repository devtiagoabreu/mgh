---
name: 06-checklists-e-frases-de-protecao
description: Seções 54 a 64: checklists, contratação e frases de proteção.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 979-1195
---

# Checklists E Frases De Proteção

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

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

