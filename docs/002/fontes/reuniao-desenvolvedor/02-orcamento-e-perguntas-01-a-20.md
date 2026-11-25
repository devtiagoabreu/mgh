---
name: 02-orcamento-e-perguntas-01-a-20
description: Seções 7 a 27: orçamento e perguntas técnicas iniciais.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 133-461
---

# Orçamento E Perguntas 1 A 20

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **7. O que pedir para ele orçar**

A frase deve ser objetiva:

“Quero uma proposta detalhada para a Fase A. Para as demais fases quero apenas uma estimativa arquitetural, sem compromisso de preço fechado.”

A Fase A deve ser quebrada pelo menos em:

| **Bloco** | **Precificação separada** |
| --- | --- |
| Participant App | sim |
| Admin/Research O0 | sim |
| Backend & Data Model | sim |
| Instrument Registry | sim |
| Response/Event Engine | sim |
| Score Engine | sim |
| Security/Infrastructure | sim |
| Automated Tests/Golden Cases | sim |
| Deployment | sim |
| Documentation/Handoff | sim |

Não aceitar apenas:

“Sistema completo: R$ XX mil.”

# **8. Pergunta técnica nº 1**

Pergunte:

**“Como você modelaria a diferença entre a resposta atual e o histórico de alterações dessa resposta?”**

Resposta esperada conceitualmente:

Response + Response Event, ou arquitetura equivalente.

Alerta:

“A gente só atualiza a resposta na tabela.”

Isso perderia dados importantes da Onda 0.

# **9. Pergunta nº 2**

**“Como você garantiria que uma pergunta já respondida por participantes nunca seja alterada silenciosamente depois?”**

Boa resposta deve envolver:

**versionamento**

**immutable published version**

**novo item text version**

ou conceitos equivalentes.

# **10. Pergunta nº 3**

**“Se eu alterar o algoritmo de scoring daqui a um ano, como você recalcularia um assessment antigo sem apagar o resultado original?”**

Boa resposta:

novo Scoring Run, versão nova, mesmo RAW.

Alerta:

UPDATE no score antigo.

# **11. Pergunta nº 4**

**“Como você garantiria que a randomização das opções não afete o score?”**

Boa resposta:

option ID canônico + presentation order separado.

Muito boa resposta:

server-side randomization persistida em Option Presentation.

# **12. Pergunta nº 5**

**“Se a pessoa fechar o navegador e retornar amanhã, como garantimos que ela veja as mesmas alternativas na mesma ordem em que foram originalmente apresentadas?”**

Boa resposta:

persistir presentation instance/order.

Não:

randomizar de novo.

# **13. Pergunta nº 6**

**“Como você impediria o frontend de conhecer que determinada opção vale D, I, S ou C?”**

Queremos:

scoring mapping somente server-side.

Se ele disser:

“Não tem problema mandar no JSON, ninguém olha”,

é um sinal ruim.

# **14. Pergunta nº 7**

**“Como você faria o submit final ser idempotente?”**

Busque conceitos como:

idempotency key;

transaction;

unique constraint;

job uniqueness;

state validation.

Não é necessário usar exatamente essas tecnologias.

O raciocínio importa.

# **15. Pergunta nº 8**

**“Se o usuário clicar duas vezes em concluir por causa de conexão lenta, como evitamos dois score jobs?”**

Essa pergunta torna idempotência concreta.

# **16. Pergunta nº 9**

**“Como você estruturaria o sistema para eu ter RAW, resultados derivados e interpretações versionadas separadamente?”**

Boa resposta:

camadas separadas;

runs;

immutable history;

foreign keys;

data lineage.

# **17. Pergunta nº 10**

**“Como separaríamos nome, e-mail e telefone dos dados metodológicos?”**

Esperamos:

Identity Vault ou estrutura equivalente.

Alerta:

replicar nome/e-mail em todas as tabelas.

# **18. Pergunta nº 11**

**“Um pesquisador precisa conseguir trabalhar com MGH-O0-005 sem necessariamente saber quem é a pessoa. Como você faria isso?”**

Testa:

privacy by design

RBAC.

# **19. Pergunta nº 12**

**“Como as permissões seriam organizadas?”**

Boa resposta:

role + permissions.

Não apenas:

isAdmin=true.

# **20. Pergunta nº 13**

**“Como você implementaria versões publicadas e imutáveis do instrumento?”**

Boa resposta pode envolver:

publication state;

immutable records;

new versions;

database constraints;

admin workflow.

# **21. Pergunta nº 14**

**“Como o sistema impediria que MGH-P1.0 fosse executado com uma versão incompatível do scoring?”**

Queremos:

release manifest;

compatibility validation;

ou solução equivalente.

Não:

confiar que ninguém escolherá errado.

# **22. Pergunta nº 15**

**“Como você colocaria nossos Golden Cases dentro do CI/CD?”**

Boa resposta:

automated tests;

pipeline;

bloqueio de deploy quando falham.

Alerta:

“No final a gente confere manualmente.”

Manual pode complementar.

Não substituir testes críticos.

# **23. Pergunta nº 16**

**“Como você faria backup e, mais importante, como provaria que ele pode ser restaurado?”**

Queremos:

backup

restore test.

Essa pergunta costuma separar bastante nível técnico.

# **24. Pergunta nº 17**

**“Como você faria deploy sem editar a aplicação manualmente em produção?”**

Procure:

Git;

CI/CD;

staging;

release;

migration.

Alerta:

FTP/manual copy como fluxo normal.

# **25. Pergunta nº 18**

**“Como outro desenvolvedor assumiria o projeto se você não pudesse continuar?”**

Essa pergunta é extremamente importante.

Boa resposta envolve:

repo;

docs;

infra acessível;

migrations;

deploy;

secrets sob controle da empresa;

handoff.

# **26. Pergunta nº 19**

**“Quem será dono do Git, cloud, banco de dados e domínio?”**

Resposta desejável:

# **a empresa/projeto.**

O fornecedor:

possui acesso.

Não:

propriedade exclusiva.

# **27. Pergunta nº 20**

**“Que stack você recomendaria e por quê?”**

Não pergunte:

“Você sabe React?”

Primeiro queremos:

decisão arquitetural.

Ele deverá justificar em termos de:

manutenção;

custo;

testabilidade;

segurança;

mercado de profissionais;

escalabilidade proporcional.

