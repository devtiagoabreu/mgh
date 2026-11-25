---
name: 01-abertura-objetivos-e-showcase
description: Seções 1 a 6: objetivo da reunião, abertura e o que mostrar primeiro.
source: docs/001/REUNIÃO DESENVOLVEDOR.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-132
---

# Abertura, Objetivos E Showcase

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

Perfeito. Agora chegamos ao último documento do pacote pré-desenvolvimento. A partir daqui, você já consegue sentar com um desenvolvedor e conduzir a conversa sem depender da memória de tudo que construímos.

# **ETAPA 2.29L — DEVELOPER MEETING BRIEF**

## **Documento 12 — Roteiro Executivo para a Reunião com o Desenvolvedor**

**Versão:** MGH-MEETING-BRIEF-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Objetivo:** conduzir a primeira reunião técnica e obter uma proposta correta para a **Fase A — Pilot Core**.

A regra-mãe deste documento será:

**A reunião não existe para o desenvolvedor descobrir o produto. Existe para ele compreender a arquitetura, questionar o necessário e propor a melhor forma de implementá-la.**

# **1. Objetivo da reunião**

Ao final da conversa, precisamos sair sabendo se o desenvolvedor:

**entendeu o MGH;**

**entendeu que não é um quiz comportamental comum;**

**entendeu a diferença entre RAW, Score e Interpretation;**

**entendeu o papel do versionamento;**

**consegue preservar rastreabilidade;**

**consegue construir a Fase A sem tentar construir tudo agora;**

**possui maturidade para questionar tecnicamente sem alterar metodologia;**

e, principalmente:

**se é alguém em quem podemos confiar a fundação tecnológica do MGH.**

# **2. Como abrir a reunião**

Você pode abrir praticamente assim:

“Nós estamos desenvolvendo o Mapa de Governo Humano, o MGH. Ele não é apenas um teste de perfil. Estamos construindo um instrumento com uma camada de pontuação, uma camada de evidências e, posteriormente, um Motor de Governo que transforma evidências em orientações de gestão.

Nós já estruturamos o instrumento, a lógica de scoring, o modelo de dados, o versionamento, os critérios de piloto, os testes de aceite e a arquitetura futura do Motor.

O que eu quero contratar agora não é o sistema comercial inteiro. Quero construir corretamente a Fase A, que é o Pilot Core: a plataforma que vai permitir executar nossa Onda 0 com integridade.”

Essa abertura já posiciona a conversa.

# **3. A segunda mensagem**

Depois diga:

“Para mim, o ponto mais importante é a rastreabilidade. Se daqui a dois anos o algoritmo mudar, eu preciso conseguir pegar uma aplicação realizada hoje, recalcular com o algoritmo novo e ainda preservar exatamente o score e a interpretação que existiam na época.”

Isso força o desenvolvedor a pensar em:

**versionamento**

**runs**

**RAW**

**imutabilidade**

em vez de apenas pensar em telas.

# **4. A terceira mensagem**

E então:

“Outra regra importante: IA não será o cérebro metodológico. Se futuramente utilizarmos IA, ela poderá melhorar a linguagem de conclusões já autorizadas pelo nosso Motor. Não quero mandar todas as respostas para uma IA e pedir que ela interprete a pessoa.”

Com três minutos de conversa, ele já deve entender o tipo de projeto.

# **5. A frase que resume o projeto técnico**

Use esta:

**“Neste momento eu não preciso de escala. Eu preciso de integridade.”**

E depois:

**“Quero construir a fundação correta do MGH inteiro, mas implementar agora somente o necessário para executar a Onda 0.”**

Essas duas frases devem orientar orçamento e arquitetura.

# **6. O que mostrar primeiro**

Não entregue imediatamente 12 documentos e diga:

“Leia tudo.”

Sugiro esta sequência:

### **Primeiro**

**Documento 01 — Executive Product Brief**

Para ele compreender o produto.

### **Depois**

**Documento 10 — Technical Roadmap**

Para ele entender o que entra agora e o que fica depois.

### **Depois**

**Documento 02 — Functional Specification**

Para visualizar o sistema.

### **Depois**

**Documento 03 — Architecture & Data Model**

Para discutir tecnologia.

Só então aprofundamos:

Instrument;

Scoring;

Security;

Golden Cases;

O0;

Interpretation Engine.

