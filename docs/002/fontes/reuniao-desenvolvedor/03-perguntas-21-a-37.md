---
name: 03-perguntas-21-a-37
description: Seções 28 a 37: perguntas técnicas seguintes.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 462-651
---

# Perguntas 21 A 37

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **28. Pergunta nº 21**

**“Você vê alguma razão concreta para não começarmos com modular monolith?”**

Estamos abertos a argumento.

Mas queremos saber se existe:

necessidade real

ou:

entusiasmo por microservices.

Se ele imediatamente propõe quinze serviços:

pergunte o benefício real para 8–12 participantes O0.

# **29. Pergunta nº 22**

**“Quais partes você considera mais difíceis ou arriscadas neste projeto?”**

Essa é excelente.

Um desenvolvedor experiente provavelmente identificará coisas como:

versionamento;

event history;

workflow de publicação;

runs;

randomization;

idempotência;

research tools;

security.

Se ele responder:

“É tudo bem simples”,

pode ser sinal de que ainda não compreendeu.

# **30. Pergunta nº 23**

**“O que você cortaria primeiro se precisássemos reduzir 20% do orçamento?”**

Resposta desejável:

polimento;

P2;

analytics adicionais;

shadow UI.

Resposta ruim:

versionamento;

RAW events;

tests;

security.

# **31. Pergunta nº 24**

**“O que você se recusaria a cortar mesmo se eu pedisse para economizar?”**

Essa pergunta também é ótima.

Um bom profissional talvez cite:

security;

data integrity;

versioning;

backups;

tests críticos.

Queremos alguém que também saiba dizer:

não.

# **32. Pergunta nº 25**

**“Quais decisões você precisa que eu tome antes de começar e quais você consegue propor tecnicamente?”**

Isso testa:

capacidade de separar:

metodologia

de:

tecnologia.

# **33. Pergunta nº 26**

**“Quando você encontrar uma lacuna na specification, o que fará?”**

Resposta desejável:

registrar/consultar.

Não:

decidir silenciosamente no código.

# **34. Pergunta nº 27**

**“Como você documentaria as mudanças de escopo?”**

Esperamos:

Change Requests;

issues;

estimates;

impact on timeline.

# **35. Pergunta nº 28**

**“Como você diferencia bug de nova funcionalidade?”**

Muito importante comercialmente.

Se specification diz:

DR não randomiza,

e o software randomiza:

bug.

Não:

“alteração solicitada pelo cliente”.

# **36. Pergunta nº 29**

**“Qual período de estabilização pós-release você recomenda?”**

Queremos entender:

suporte;

bugfixes;

monitoramento inicial.

# **37. Pergunta nº 30**

**“Quais custos recorrentes existirão além do desenvolvimento?”**

Pedir:

cloud;

database;

storage;

backup;

auth;

e-mail;

monitoring;

error tracking;

outros SaaS.

Queremos TCO, não apenas preço do código.

