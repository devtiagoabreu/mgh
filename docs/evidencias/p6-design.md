---
name: evidencias-p6-design
description: Evidências da superfície estrutural da Fase A (P6) — tokens, componentes e projeto de acessibilidade
source: docs/plano-de-desenvolvimento.md (P6)
version: 0.1
status: STRUCTURAL_ONLY
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: false
---

# Evidências — P6 (superfície do participante e consentimento estrutural)

> Escopo desta frente: **somente superfície estrutural**. Não há API, banco,
> persistência, score, relatório, perfil, acesso a respostas individuais nem
> texto definitivo. Nenhuma rota API foi alterada; `Cache-Control` pertence a
> outra frente.

## 1. Comandos executados e resultados

| Comando | Resultado |
|---|---|
| `npm run lint` | **Saída limpa**, exit 0 (`eslint .`) |
| `npm run typecheck` | **Saída limpa**, exit 0 (`tsc --noEmit`) |
| `npx eslint app components` | **Saída limpa**, exit 0 (escopo restrito desta frente) |
| `npx eslint app components styles` | Exit 1 **por configuração de glob, não por código**: `styles/` contém apenas `README.md`; o ESLint informa que todos os arquivos correspondentes são ignorados. Não há arquivo JS/TS em `styles/` para lintar. |
| `git diff --check` | Saída limpa, exit 0 |
| `git status --short` | Alterações próprias restritas a `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components/`, `styles/` e este documento. Demais alterações visíveis (`README.md`, `docs/`, `lib/`, `prisma/`, `tests/`) pertencem a outros agentes e **não foram tocadas**. |

Observação: a primeira execução de `npm run lint` encontrou
`react-hooks/set-state-in-effect` em `theme-toggle.tsx`. O componente foi
reescrito com `useSyncExternalStore` + `MutationObserver`; a execução final
está limpa.

### Contraste calculado por código (projeto, não medição renderizada)

Script temporário fora do repositório converteu OKLCH → sRGB linear →
luminância WCAG e calculou as razões abaixo. Ele **não** substitui medição do
navegador nem auditoria com leitor de tela.

| Par | Tema claro | Par | Tema escuro |
|---|---:|---|---:|
| texto / superfície | 16,20:1 | texto / superfície | 18,01:1 |
| texto atenuado / superfície | 8,33:1 | texto atenuado / superfície | 12,29:1 |
| borda de controle / superfície | 3,31:1 | borda de controle / superfície | 3,42:1 |
| texto da ação / fundo da ação | 6,54:1 | texto da ação / fundo da ação | 8,11:1 |
| texto da ação / fundo do hover | 9,18:1 | foco / superfície | 8,11:1 |
| foco / superfície | 4,65:1 | falha / superfície | 9,28:1 |
| falha / superfície | 7,05:1 | positivo / superfície | 11,28:1 |
| positivo / superfície | 6,11:1 | cautela / superfície | 11,74:1 |
| cautela / superfície | 5,54:1 | — | — |

Todos os pares de texto excedem 4,5:1; borda de controle e anel de foco
excedem 3:1. Estados `hover`, `focus`, `disabled` e `error` foram mapeados nos
dois temas por tokens, mas **a medição renderizada ainda é pendente**.

## 2. Tokens criados

Camada **primitiva** (`app/globals.css`, único local com cor crua):

- `--mgh-primitive-color-n-0 … n-950` (neutros);
- `--mgh-primitive-color-accent-50/200/400/600/700/800`;
- `--mgh-primitive-color-danger-50/300/600/700`;
- `--mgh-primitive-color-positive-300/700`,
  `--mgh-primitive-color-caution-300/700`;
- `--mgh-primitive-space-1/2/3/4/6/8/12/16` = 4/8/12/16/24/32/48/64 px;
- `--mgh-primitive-font-caption/label/body/h3/h2/h1/display`, pesos e
  entrelinhas;
- `--mgh-primitive-radius-1/2/3/full` = 4/8/12/full;
- `--mgh-primitive-shadow-1/2`, `--mgh-primitive-motion-fast/medium`.

Camada **semântica**: `--mgh-color-surface`, `-surface-raised`,
`-surface-sunken`, `-text`, `-text-muted`, `-border`, `-border-subtle`,
`-action-bg`, `-action-hover-bg`, `-action-fg`, `-focus`, `-selection-bg`,
`-selection-border`, `-danger-bg`, `-danger-fg`, `-danger-border`,
`-positive-fg`, `-caution-fg`, `-skeleton`; aliases de espaço, tipografia,
raio, sombra e movimento. Light/dark trocam **somente os valores** desses
tokens por `data-theme`; não existem classes `dark` ad hoc.

Camada de **componente** (aliases locais em `.mgh-shell`): `--mgh-button-bg`,
`--mgh-button-fg`, `--mgh-button-border`, `--mgh-card-bg`,
`--mgh-card-border`, `--mgh-field-border`, `--mgh-field-bg`,
`--mgh-choice-selected-bg`, `--mgh-choice-selected-border`,
`--mgh-progress-fill`, `--mgh-progress-track`, `--mgh-banner-danger-bg`,
`--mgh-banner-danger-fg`, `--mgh-banner-danger-border`.

Componentes (TSX) **não contêm** `#hex`, `oklch(...)` ou nome de paleta: eles
consomem classes CSS que leem apenas `var()` das camadas semântica/componente.
Tipografia: corpo 16px, H1 32px; display 48px foi declarado mas não usado,
para evitar aparência de métrica gamificada.

## 3. Componentes criados

`components/`

| Arquivo | Papel |
|---|---|
| `structural-copy.ts` | Marcador sintético, contagens 48/8, rótulos de controle, estados de autosave |
| `consent-gate.tsx` | Consentimento estrutural: sem pré-marcação, opt-out visível, sem urgência e sem confirm-shaming |
| `context-panel.tsx` | Contexto anterior ao instrumento |
| `scenario-card.tsx` | Uma tela por cenário; progresso `<progress>` + texto `x/48` |
| `forced-choice.tsx` | Escolha forçada com `fieldset`/`legend` e radio nativo |
| `ordinal-scale.tsx` | Escala ordinal com radio nativo, sem pré-seleção |
| `self-prompt.tsx` | SELF textual, fora do score, com opção de pular |
| `feedback-panel.tsx` | Feedback estrutural, sem score e sem interpretação |
| `neutral-confirmation.tsx` | Confirmação neutra, sem relatório ou perfil |
| `autosave-status.tsx` | `role="status"` / `aria-live="polite"` com quatro estados nomeados |
| `loading-state.tsx` | Skeleton rotulado, `aria-busy="true"` |
| `empty-state.tsx` | Vazio com borda tracejada e texto honesto |
| `error-state.tsx` | `role="alert"` com ação de nova tentativa |
| `blocked-state.tsx` | `role="alert"`, sem ação automática e com borda de cautela |
| `structural-dialog.tsx` | `role="dialog"`, `aria-modal`, nome, foco inicial, Esc, armadilha de Tab, `inert` no fundo e retorno de foco |
| `theme-toggle.tsx` | Alterna `data-theme` via `useSyncExternalStore` |
| `structural-preview.tsx` | Orquestra a demonstração em memória (uma etapa por vez) |

`app/layout.tsx`: `lang="pt-BR"`, script inline de tema antes da primeira
pintura, skip link para `#mgh-conteudo`, `robots: noindex`.
`app/page.tsx`: renderiza apenas a superfície estrutural.
`styles/README.md`: contrato de camadas, lista de tokens e componentes.

Estados de carregamento, vazio, erro e bloqueio são tratamentos distintos e
linguisticamente honestos: nenhum afirma que dados foram salvos quando não
foram. O painel de inspeção no rodapé é **apenas da demonstração** e permite
ver cada estado sem conectar dados.

## 4. Checklist WCAG 2.2 AA — projeto verificado por código

Alvo declarado: **AA** (2.4.13 é AAA e fica como reforço, não como promessa).

| Critério | Situação | Mecanismo no código | Verificação renderizada |
|---|---|---|---|
| 1.1.1 Texto alternativo | projeto verificado por código | Skeleton e decorações com `aria-hidden="true"`; sem imagens informativas nesta frente | pendente |
| 1.3.1 Informação e relações | projeto verificado por código | `h1`→`h2`→`h3`, `fieldset`/`legend`, `label`/`htmlFor`, `<progress>` com `aria-valuetext` | pendente |
| 1.4.3 Contraste mínimo (AA) | projeto verificado por código por cálculo | Tokens com razões 4,65:1 a 18,01:1 nos pares projetados (tabela acima) | pendente |
| 1.4.11 Contraste não textual (AA) | projeto verificado por código por cálculo | Bordas de controle 3,31:1 (claro) e 3,42:1 (escuro); foco 4,65:1 / 8,11:1 | pendente |
| 2.1.1 / 2.1.2 Teclado e sem armadilha | projeto verificado por código | Botões e radios nativos; dialog com Esc e armadilha de Tab; `inert` no fundo | pendente (Tab real) |
| 2.4.3 Ordem de foco | projeto verificado por código | Skip link antes do shell; foco movido para `<main>` nas trocas de etapa; retorno ao gatilho no dialog | pendente |
| 2.4.7 Foco visível (AA) | projeto verificado por código | `:focus-visible` global com `outline: 2px` e `outline-offset: 2px` | pendente |
| 2.4.11 Foco não oculto (AA) | projeto verificado por código | Sem header sticky; `scroll-padding-top` e `scroll-margin-top` definidos | pendente |
| 2.4.13 Aparência do foco (AAA, reforço) | projeto verificado por código | Anel de 2px com contraste ≥ 3:1 contra superfícies adjacentes nos dois temas | pendente |
| 2.5.8 Alvo mínimo 24×24 (AA) | projeto verificado por código | Radios 24×24; botões e labels de escolha `min-height: 44px` (meta mobile) | pendente (medição em 390px) |
| 3.2.6 Ajuda consistente (A) | projeto verificado por código | Texto de ajuda sempre sob o grupo, via `aria-describedby` estável | pendente |
| 3.3.7 Entrada redundante (A) | projeto verificado por código | Nenhum dado solicitado duas vezes; escolhas ficam em estado local por etapa | pendente |
| 3.3.8 Autenticação acessível (AA) | não aplicável nesta frente | Não há login, CAPTCHA ou campo de credencial na superfície estrutural | não aplicável |
| 4.1.2 Nome, função, valor (A) | projeto verificado por código | Controles nativos; `aria-pressed` no toggle; `aria-modal`/`aria-labelledby`/`aria-describedby` no dialog; nenhum `role="menu"` | pendente |
| 4.1.3 Mensagens de status (AA) | projeto verificado por código | Autosave com `role="status"`; falha bloqueante com `role="alert"`; erro de resposta com `role="alert"` | pendente (leitor de tela) |
| prefers-reduced-motion | projeto verificado por código | Media query zera animações e transições sem remover informação | pendente |
| forced-colors | projeto verificado por código | Bordas explícitas em `CanvasText` para botões, cartões, escolhas, estados e dialog | pendente |

### Antes de MARCAR "pronto": auditoria manual/renderizada pendente

Não há build integrado nem URL estável nesta frente; portanto **nenhuma
afirmação de conformidade renderizada é feita**. Ainda é necessário:

1. axe/Lighthouse nos temas claro e escuro, incluindo a regra `target-size`;
2. Tab/Shift+Tab em 1280×800 e 390×844, nos dois temas;
3. leitor de tela (NVDA+Firefox ou VoiceOver+Safari) no consentimento, nas
   escolhas, no autosave, no alerta e no dialog;
4. zoom 200% e 400% (reflow), forced colors e `prefers-reduced-motion`;
5. capturas nas quatro combinações (1280 claro/escuro, 390 claro/escuro),
   incluindo os quatro estados e o dialog.

Pelo `design-review-critic`, sem evidência renderizada o veredito provisional
é **`rework — escopo incompleto`**; não há base para `aprovar`. Isso é uma
pendência de auditoria, não uma correção de código identificada.

## 5. Ausência de texto canônico

**Declaração:** nenhum texto canônico, jurídico ou metodológico foi inventado.
Todo conteúdo de consentimento, cenário, opção, escala, SELF, feedback e
confirmação usa exclusivamente
`[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]`. Rótulos de interface ("Continuar",
"Aceitar", "Não aceitar", "Sair", "Tentar novamente") são apenas controles e
não constituem redação de instrumento ou de consentimento. Nenhum número de
versão de consentimento, contato de crise, dono humano nomeado ou texto de
Privacy Notice foi criado — estes permanecem com a frente de governança/legal.

## 6. Pendências fora desta frente

- Gate de crise com dono humano nomeado e contatos revalidados.
- Conexão a run real, consentimento registrado e autosave persistente.
- Publicação de itens (`ANX-003`/`BANK-0.2` ainda DRAFT).
- `Cache-Control`, rotas API, laminador de score e respostas individuais.
