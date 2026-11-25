---
name: 04-seguranca-onda0-score-e-motor
description: Seções 38 a 42: segurança, O0, Score Engine e Motor futuro.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 652-739
---

# Segurança, Onda 0, Score E Motor

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **38. Perguntas sobre segurança**

Não precisa transformar a reunião numa auditoria de cibersegurança, mas deve perguntar:

Como protegerá secrets?

Como separará DEV, STAGING e PILOT?

Como fará RBAC?

Como evitará PII nos logs?

Como protegerá os links dos participantes?

Como controlará exportações?

Como implementará MFA administrativo?

Como lidará com rate limiting?

Como fará restore?

Se ele não souber tudo de cabeça:

não é necessariamente problema.

Mas precisa reconhecer os riscos e propor abordagem.

# **39. Perguntas sobre a Onda 0**

Explique:

“A primeira aplicação real terá apenas 8–12 pessoas, mas preciso preservar muito mais informação do que num formulário comum, porque estamos pesquisando o instrumento.”

Pergunte:

“Você consegue construir o Admin O0 sem transformar isso num dashboard comercial gigante?”

Queremos:

ferramenta de pesquisa eficiente.

Não:

Salesforce.

# **40. Perguntas sobre Instrument Registry**

Pergunte:

“Você conseguiria estruturar o instrumento como configuração versionada em vez de colocar as 48 perguntas hard-coded nas telas?”

Boa resposta:

sim.

Mas também explique:

não queremos CMS onde qualquer admin edita pergunta publicada.

Precisamos de:

registry controlado.

# **41. Perguntas sobre Score Engine**

Explique:

“O score precisa ser 100% determinístico.”

Pergunte:

“Como você isolaria esse módulo para que nenhuma mudança na interface ou no relatório altere o scoring?”

Queremos:

domínio isolado + tests.

# **42. O que mostrar sobre o Motor futuro**

Não precisa ensinar as 32 UIGs uma por uma na primeira reunião.

Explique assim:

“Depois do scoring teremos uma camada de evidências, uma camada de regras interpretativas, bloqueios, sínteses, claims e actions. Quero que a arquitetura atual deixe espaço para isso, mas não quero construir tudo agora.”

Isso é suficiente inicialmente.

