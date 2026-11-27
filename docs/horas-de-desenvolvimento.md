---
name: horas-de-desenvolvimento
description: Apontamento estimado de esforço por feature da Fase A, derivado do volume de linhas versionadas
source: git log --numstat; docs/historico.md
version: 0.1
status: DERIVED_ESTIMATE
verified: 2026-11-26
classification: CONFIDENTIAL - METHODOLOGY IP
canonical: false
derived_from:
  - docs/historico.md
  - docs/plano-de-desenvolvimento.md
---

# Horas de Desenvolvimento — Fase A

> Todo valor neste arquivo é **ESTIMATIVA**. Não é medição de tempo, não é
> apontamento de horas trabalhadas, não é base de cobrança e não substitui
> evidência registrada em `docs/evidencias/`. Em conflito, valem as fontes
> canônicas (`ANX-*`) e o histórico operacional.

---

## 1. Regra de leitura

- `ESTIMATIVA` = tempo que um desenvolvedor levaria para produzir aquele
  volume de linhas, considerando escrita, leitura e verificação local.
- Linhas contadas com `git log --numstat` (adicionadas). Remoções e
  lockfiles gerados não entram como esforço autoral.
- Nenhum número abaixo foi medido por cronômetro. Onde havia dúvida, o
  valor foi arredondado para 5, 10, 15 ou 30 minutos.
- Auditorias feitas fora do repositório (CDP, axe, Lighthouse) não geram
  linhas versionadas; quando relevantes, entram como estimativa separada.

---

## 2. Premissas da estimativa

| Tipo de linha | Taxa usada | Observação |
|---|---:|---|
| Código, testes, SQL, Prisma, config | 50 linhas/hora | `ESTIMATIVA` de autoria cuidadosa |
| Documentação narrativa e decisões | 150 linhas/hora | `ESTIMATIVA` de redação derivada |
| Conversão assistida de `docs/002` | 1.500 linhas/hora | `ESTIMATIVA` de conversão/validação |
| Lockfile e arquivo gerado | 0 min | Sem autoria direta |

Fórmula: `minutos ≈ (linhas de código / 50 + linhas de docs / 150) × 60`.
Ela é uma convenção deste documento, não uma regra da metodologia MGH™.

---

## 3. Features já criadas

| Feature | Commit | Linhas (código + docs) | Estimativa |
|---|---|---:|---:|
| Bootstrap do repositório | `aa0902d` | 0 + 180 | ≈ 1 h |
| Contexto canônico `002` + `PROD-TEN-001` | `de13285` | 0 + 74.267 | ≈ 50 h |
| P0 — fundação, versões, gates, tenant, CI | `47f2bbf` | 436 + 586 | ≈ 12 h 30 min |
| P5 — Score Engine determinístico e golden cases | `e4748c4` | 1.625 + 84 | ≈ 33 h |
| Governança humana, roadmap e README | `f3a2ef4` | 0 + 701 | ≈ 4 h 45 min |
| P6 — superfície estrutural e tokens | `51e1424` | 1.692 + 248 | ≈ 35 h 30 min |
| P1/P2 — modelo tenant-scoped, RLS, DAL, seed | `57611d3` | 2.203 + 137 | ≈ 45 h |
| Evidência final de integração | `3009899` | 0 + 61 | ≈ 25 min |
| Histórico operacional de retomada | `9404065` | 0 + 316 | ≈ 2 h |
| Guia didático da Fase A | `267ff77` | 0 + 447 | ≈ 3 h |
| `PROD-TEN-001` v0.2 — autoria e procedência | `7f5d2ce` | 0 + 26 | ≈ 10 min |
| Regra §3.6 — nunca inventar | `1f4350d` | 0 + 105 | ≈ 45 min |
| Registro de hashes de commit/push | `a26df34` | 0 + 22 | ≈ 10 min |
| Licença proprietária e alinhamento do README | `dd07bd3` | 0 + 44 | ≈ 20 min |
| Correção do build na Vercel | `c09f8e7` | 0 + 10 | ≈ 15 min |
| Instrumento canônico `MGH-P1.0` + testes de paridade | `6288ec3` | 970 + 0 | ≈ 19 h 30 min |
| Fluxo canônico renderizado + botões “i” | `1476267` | 968 + 0 | ≈ 19 h 30 min |
| Registro de divergências canônicas | `2ff2d9b` | 0 + 78 | ≈ 30 min |
| Botões “i” sem caminhos de arquivo | `41e4511` | 13 + 0 | ≈ 15 min |
| Login no banco, sessão, gate e logout | `e032200` | 456 + 8 | ≈ 9 h 15 min |
| Encerramento canônico sem resultado | `8fb9119` | 178 + 0 | ≈ 3 h 30 min |
| `AGENTS.md` gerado pelo Next.js | `e90caa9` | 0 + 9 | 0 min |
| Registro documental do login e do push | `bf25460` | 0 + 75 | ≈ 30 min |
| Responsividade e acessibilidade da superfície | `06085dc` + `0a2c2a5` | 30 + 290 | ≈ 3 h |
| Modal de saída, cabeçalho e ícones de informação | `d430a12` + `f20216e` | 124 + 78 | ≈ 3 h |
| F0 — Auth.js Credentials e sessão tenant-scoped | `36d8778` | 595 + 138 | ≈ 12 h 50 min |
| F0.1 — remoção do login legado | `6001748` | 240 + 50 | ≈ 5 h 10 min |
| Ambiente local operacional e registro documental do push | commit documental neste ciclo | 0 + 75 | ≈ 30 min |
| F1 — preferência de aparência no `User`, com cookie-espelho validado | `43adab5` | 329 + 98 | ≈ 7 h 15 min |
| F2 — tokens do MGH Design System v1.0 traduzidos para CSS | `0a030c4` | 436 + 267 | ≈ 10 h 30 min |
| Registro documental da F2 | commit documental neste ciclo | 0 + 91 | ≈ 35 min |
| Correção do `CONTINUAR` antes da hidratação | commit neste ciclo | 35 + 65 | ≈ 1 h |
| F3 — seletor de aparência, Perfil e DS no tema escuro | commit neste ciclo | 340 + 120 | ≈ 7 h 30 min |
| F4 — casca SaaS `/app`, navegação e instrumento em `/app/mgh` | commit neste ciclo | 309 + 90 | ≈ 7 h |
| F4.1 — dashboard operacional, KPIs reais e nav ocultável | commit neste ciclo | 971 + 107 | ≈ 21 h |

**Total estimado das features publicadas:** ≈ 321 h 20 min.
O total é a soma das estimativas acima; não é tempo medido.

---

## 4. Frente em andamento

A F1 foi publicada em `43adab5` + `6815414` (push `265415e..6815414`); a F2
foi comitada em `0a030c4`; a correção do `CONTINUAR` em `2eee2a0`. A frente
**F3 — seletor de tema no cabeçalho e em `Perfil → Aparência`** foi concluída
localmente, com commit neste ciclo e nenhuma operação contra o Neon. As
checagens locais passaram com 15 arquivos / 84 testes, build com
`/app/perfil` dinâmico, `audit` sem vulnerabilidades e `diff --check` limpo.
A auditoria em navegador cobriu 1440×900 e 390×844 com axe sem violações nem
`incomplete`, além da persistência das três opções e da aplicação do DS só no
tema escuro (≈ 45 min de auditoria fora do repositório, estimativa).

A frente F4 concluiu a casca SaaS local em `/app`: visão geral estrutural,
instrumento em `/app/mgh`, `Perfil` preservado, navegação lateral no desktop e
barra compacta no mobile. Os gates locais passaram com 16 arquivos / 90
testes, build com três rotas dinâmicas sob `/app`, auditoria axe limpa em
1440×900 e 390×844, Lighthouse de acessibilidade `1` nas três rotas e
verificação do fluxo de saída/reinício (≈ 45 min de auditoria fora do
repositório, estimativa). Nenhuma operação foi feita contra o Neon.

A frente F4.1 transformou `/app` em dashboard operacional com sete KPIs reais
do tenant local sintético e navegação ocultável (drawer no mobile, sidebar
recolhível no desktop). Os gates locais passaram com 18 arquivos / 99 testes,
build com cinco rotas dinâmicas, `audit` sem vulnerabilidades, schema válido e
`diff --check` limpo. A auditoria em navegador cobriu nove estados com axe sem
violações nem `incomplete`, exceto o conhecido falso positivo de forced colors
(19,56:1 calculado). A geometria confirmou a colapsagem de `224px 945px` para
`56px 1113px`, o foco no drawer e a ausência de termos proibidos no painel
(≈ 45 min de auditoria fora do repositório, estimativa). Nenhuma operação foi
feita contra o Neon; commit e push autorizados neste ciclo.

A replicação da infraestrutura no Neon (migration faltante, remoção do legado,
seed sintético, criação da role de runtime sem `BYPASSRLS`, verificação de RLS e
execução do DAL do dashboard) consumiu ≈ 3–4 h de esforço estimado, incluindo
diagnóstico e evidências fora do repositório. Nenhuma senha foi versionada.
Deploy e sincronização do fork na Vercel ficam com o usuário; o agente faz push
somente em `origin` (`devtiagoabreu/mgh`).

Evidências já produzidas nas frentes F0/F0.1, F1 e F2: `typecheck`, `lint`,
`test` (14 arquivos / 75 testes), `build`, `prisma:validate`, `audit` (0
vulnerabilidades) e `diff --check` limpos; build com `/`,
`/api/auth/[...nextauth]` e `/app` dinâmicos e `/login` estático. Os testes
de identidade provam que a senha é conferida antes da consulta tenant-scoped e
que credencial inativa, senha errada, membro inativo e papel deferido são
rejeitados. A remoção do legado aplicou `20261127150000_drop_demo_login` e
confirmou 4 migrations com `Database schema is up to date!`. O banco local
`mgh_local` recebeu 5 migrations após a F1 e o seed sintético rodou duas vezes
de forma idempotente; o RLS foi confirmado sem e com `app.current_tenant_id`, e
o fluxo completo foi validado em navegador com 8 verificações positivas
(≈ 30 min de auditoria fora do repositório). A F1 acrescentou verificação de
tema/cookie em navegador e conferência da preferência gravada no `User`.
A F2 acrescentou checagem de cascade em navegador: sem `data-ds` nada muda;
com `data-ds` a superfície passa a `rgb(11, 14, 27)` e o corpo a 14px, inclusive
com `data-theme="dark"`; remover o atributo restaura o tema anterior. Commit e
push da F1 executados; commit da F2 executado em `0a030c4`, push autorizado
neste ciclo. O veredito P6 permanece `rework — escopo incompleto`.

---

## 5. Features futuras

| Feature | Origem | Estimativa | Dependência |
|---|---|---:|---|
| P3 — registry estrutural e sequência | `docs/plano-de-desenvolvimento.md` | 6–10 h | Banco canônico reconciliado |
| P4 — eventos, respostas e fechamento idempotente | `docs/plano-de-desenvolvimento.md` | 14–20 h | P3 + versões congeladas |
| P6 — auditoria renderizada restante (leitor de tela e crítica visual) | `docs/plano-de-desenvolvimento.md` | 4–6 h | Participante/ambiente real |
| Reconciliação formal `ANX-003` / `BANK-0.2` | `docs/historico.md` | 2–4 h | Autoridade MGH |
| Consentimento e Privacy Notice finais | `OPEN-LEGAL-001/002` | 3–5 h | MGH + Jurídico |
| RPO/RTO e restore testado | `OPEN-TECH-006` | 3–5 h | Neon + decisão de RPO/RTO |
| Substituir `AUTH_SECRET` local por valor independente | `docs/historico.md` | 10–20 min | Nenhuma |
| P7 — admin agregado, governança e release | `docs/plano-de-desenvolvimento.md` | 24–40 h | P4, P5, P6, `OPEN-TEN-001` |

Estimativas futuras são de planejamento macro. Não autorizam início de
implementação nem substituem gate ou decisão humana nomeada.

---

## 6. Atualização obrigatória

Gatilho: **todo `git commit` e todo `git push`**.

Antes de cada gatilho, atualizar:

1. `docs/historico.md`
2. `docs/guia-didatico-fase-a.md`
3. `docs/plano-de-desenvolvimento.md`
4. `docs/horas-de-desenvolvimento.md`

Nenhum dos quatro pode ficar para “depois do push”. Se a estimativa de uma
feature mudar, corrigir este arquivo no mesmo ciclo do commit.
