---
name: 05-flags-verdes-vermelhas-e-postura
description: Seções 43 a 53: sinais de qualidade e postura diante de sugestões.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 740-978
---

# Green Flags, Red Flags E Postura

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

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

