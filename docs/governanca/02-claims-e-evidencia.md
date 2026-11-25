---
name: 02-claims-e-evidencia
description: Regras operacionais de nível de evidência, Forbidden Claims e linguagem por lente na Fase A
source: docs/002/context.md
version: 0.1
status: OPERATIONAL_DRAFT
verified: 2026-11-25
classification: CONFIDENTIAL - METHODOLOGY IP
canonical: false
derived_from:
  - docs/plano-de-desenvolvimento.md
  - docs/002/fontes/fase-3-consolidacao/02-23-anx-014-forbidden-claim-registrytm.md
  - docs/002/fontes/developer-handoff-pdf/02-documento-06.md
  - docs/002/fontes/anx-004-xlsx/01-00-readme.md
  - docs/002/fontes/anx-005-xlsx/01-00-readme.md
  - skill:people-governance-psychology
---

# 02 — Claims e evidência (Fase A)

> Regras **operacionais e derivadas**. Este arquivo não cria, renomeia nem
> revoga claims, UIGs, regras de scoring ou níveis metodológicos. Se um
> claim não existe no catálogo canônico, ele **não pode ser dito**. Em
> conflito, valem anexos canônicos (`ANX-*`) e `docs/002`.

## 1. Níveis E1 / E2 / E3

A linguagem **nunca aumenta o nível de evidência**. O nível vem da regra e
da origem dos dados; adjective mais forte não transforma sinal em fato.

| Nível | Sentido canônico | Permite | Não permite |
|---|---|---|---|
| **E1 — sinal** | Uma lente sugere algo | "as respostas sugerem"; "há um sinal"; "pode ser útil". Pergunta de trabalho, hipótese fraca | Recomendação forte, rótulo de identidade, conclusão sobre a pessoa |
| **E2 — convergência** | Duas evidências **independentes** apontam na mesma direção | Hipótese gerencial; "as evidências convergem"; "apareceu de forma recorrente" | Verdade absoluta, decisão de emprego, generalização sem contexto |
| **E3 — convergência forte** | Múltiplos indicadores + consistência suficiente + presença em **diferentes contextos** | Recomendação mais assertiva **sem** tratar como verdade absoluta; apenas pesquisa interna autorizada | Uso externo no P1.0: `external_reporting_max = E2`; relatório ao participante, mentor ou comercial |

Regras de não inflação:

- Evidência derivada **não aumenta força sozinha**.
- Métricas diferentes que compartilham os **mesmos itens** não contam como
  fontes independentes.
- Síntese fica limitada ao componente requerido **mais fraco**, salvo
  suporte independente explicitamente autorizado.
- Regras com teto próprio prevalecem: `DEC-004` e `DEC-005` ficam no
  máximo **E1**.
- Silêncio é output válido quando falta evidência.
- IA não cria interpretação, não eleva nível, não altera números e não
  recebe autoridade decisória (e está **fora da Fase A** de qualquer forma).

## 2. Forbidden Claim Registry aplicado

Aplicação operacional do registro canônico `ANX-014`. Nenhum termo abaixo
é redefinido aqui.

**Proibido afirmar, sugerir ou insinuar:**

- inteligência; competência; maturidade; caráter; honestidade;
- saúde mental; diagnóstico; estabilidade emocional; resiliência;
- `job fit`; `hiring`; `promotion`; `termination`;
- `fixed learning style`; identidade absoluta; valor moral;
- qualidade de liderança; `compatibility score` / compatibilidade
  percentual;
- variações de superfície: "perfil definitivo", "tipo de pessoa",
  "flight risk", "laudo", "nota de desempenho", "pronto para promoção".

**Forma segura (padrão de raciocínio, não texto final de relatório):**

```text
lente de origem → contexto observado → nível E1/E2 → hipótese gerencial
→ pergunta ao humano → "o que estes dados não permitem dizer"
```

Nunca converter esse padrão em frase categórica sobre a pessoa. A decisão
final é humana, nomeada, datada e justificada.

## 3. Regras por lente

Os exemplos de "permitido" descrevem **alcance de afirmação**, não redação
de item, opção, rótulo SELF ou relatório.

| Lente | Permite afirmar | Proíbe |
|---|---|---|
| **PC** — 24 escolhas forçadas, D/I/S/C, peso 1, ordem de opções randomizável, score por `option_id` canônico | E1: sinal de preferência relativa no contexto do cenário; E2 se convergir com fonte independente | Rótulo de identidade ("é dominante"), generalizar para competência/maturidade, usar posição exibida como score, inventar `option_id` |
| **PRC Forced** — 8 escolhas V/A/C, frequência relativa | E1: preferência relativa de modalidade; E2 se houver convergência parcial com PRC Independent (H011), **não** equivalência perfeita | "100% visual", tipologia, converter relativo em absoluto, expor V/A/C como rótulo metodológico ao participante, confundir com PRC Independent |
| **PRC Independent** — 4 grupos / 12 avaliações 1–5, média por modalidade, direção da escala fixa (blocos podem mudar de ordem) | E1: média relativa por modalidade; E2 se houver fonte independente | "tudo 5 = 33/33/33", trocar direção da escala, tratar como igualdade com PRC Forced, transformar média em compatibilidade percentual |
| **DR** — 12 avaliações ordinais, 4 eixos (velocidade, impacto, persistência, externalização), sem randomização, normalização 0–100 | E1: tendência observada em contexto; E2 se convergir com fonte independente | "esconde conflitos" a partir de externalização baixa isolada, tipologia ("colérico/melancólico"), reordenar DR, ler eixos como sinal clínico |
| **RG** — 6 relações internas de pesquisa entre pares de itens, invisíveis ao participante | E1: convergência/divergência exploratória **como pergunta de pesquisa**; E2 somente com fonte independente e autorização explícita | `lie score`, `honesty score`, `consistency %`, penalizar divergência, usar como flag de qualidade, expor IDs ao participante, incluir no score |
| **SELF-01..08 / feedback** — após os 48 cenários, escala 1–5, `scored=false`; feedback é dado de pesquisa, não detecção de verdade | E1: hipótese sobre **compreensão do instrumento e do fluxo**, nunca sobre a pessoa. Nenhum uso externo | Rótulos finais (`OPEN-INST-001`), usar no score, ler como personalidade ou satisfação individual, usar em decisão de RH, tratar feedback como checagem de sinceridade |

Regras transversais:

- SELF, feedback e RG ficam **fora do score** (`scored=false` / fora da
  entrada do Score Engine).
- Ordem fixa da sequência e DR sem randomização permanecem congeladas.
- Textos literais de cenários/opções continuam
  `SOURCE_REQUIRED_FROM_BANK-0.2`; nenhuma tabela acima autoriza
  preenchê-los.
- Sinal de crise em campo livre segue `docs/governanca/01-gate-de-crise.md`
  e **não** entra como evidência de nenhuma lente.

## 4. Campo obrigatório em agregados

Todo dashboard, exportação, síntese ou texto agregado termina com o campo
abaixo, mesmo quando a resposta for "nada":

```markdown
**O que estes dados NÃO permitem dizer:** ...
```

Exemplos do que costuma pertencer a esse campo:

- não identificam quem está em risco nem quem precisa de ajuda;
- não explicam causa individual nem intenção;
- não substituem conversa com a pessoa nem avaliação profissional;
- não autorizam contratação, promoção, demissão, punição ou remuneração;
- não comprovam que um item é "bom", "ruim" ou "mais válido".

A agregação também exige `n ≥ 5` por corte e checagem de inferência por
subtração entre recortes — ver
`docs/governanca/03-consentimento-e-privacidade.md`.

## 5. Checklist antes de publicar qualquer afirmação

- [ ] Nível E1/E2/E3 está explícito na origem da afirmação.
- [ ] Nível usado na linguagem é **igual ou menor** que o nível de origem.
- [ ] Não há Forbidden Claim, nem sinônimo disfarçado.
- [ ] Fontes são independentes de fato (não compartilham os mesmos itens).
- [ ] Teto externo do P1.0 foi respeitado (`E2`; E3 nunca externo).
- [ ] `DEC-004` / `DEC-005` não passaram de E1.
- [ ] Não há conclusão individual, diagnóstico ou decisão de RH.
- [ ] Campo "o que estes dados NÃO permitem dizer" está presente.
- [ ] Nenhuma IA interpretou, resumiu ou classificou respostas.

## 6. Fontes

- `docs/002/fontes/fase-3-consolidacao/02-23-anx-014-forbidden-claim-registrytm.md`
  — registro global.
- `docs/002/fontes/developer-handoff-pdf/02-documento-06.md` — Evidence
  Dictionary, níveis, teto externo, independência, Language Policy e
  fronteira da IA.
- `docs/002/fontes/mapa-de-governo-humano/05-piloto-1-0-e-matematica.md`
  §22 — definição de E1/E2/E3.
- `docs/002/fontes/anx-004-xlsx/01-00-readme.md` e
  `docs/002/fontes/anx-005-xlsx/01-00-readme.md` — contagens, RG e golden
  cases de PRC.
- `docs/002/fontes/anx-016-xlsx/01-00-readme.md` — `REQ-FLOW-015`
  (feedback é dado de pesquisa, não detecção de sinceridade) e
  `REQ-INST-010` (RG invisível).
- Skill `people-governance-psychology` — regra de agregação e da linha
  obrigatória de limitação.
