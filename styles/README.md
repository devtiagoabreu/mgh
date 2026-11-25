# MGH — contrato da superfície estrutural (P6)

Escopo: apenas estrutura. Sem API, sem persistência, sem score, sem perfil,
sem respostas individuais e sem texto canônico.

## Camadas de tokens (`app/globals.css`)

1. **Primitiva** — `--mgh-primitive-color-*`, `--mgh-primitive-space-*`,
   `--mgh-primitive-font-*`, `--mgh-primitive-radius-*`,
   `--mgh-primitive-shadow-*`, `--mgh-primitive-motion-*`. É o único lugar com
   valores de cor crus (`oklch(...)`).
2. **Semântica** — `--mgh-color-surface`, `--mgh-color-surface-raised`,
   `--mgh-color-surface-sunken`, `--mgh-color-text`, `--mgh-color-text-muted`,
   `--mgh-color-border`, `--mgh-color-border-subtle`, `--mgh-color-action-bg`,
   `--mgh-color-action-hover-bg`, `--mgh-color-action-fg`, `--mgh-color-focus`,
   `--mgh-color-selection-bg`, `--mgh-color-selection-border`,
   `--mgh-color-danger-bg`, `--mgh-color-danger-fg`,
   `--mgh-color-danger-border`, `--mgh-color-positive-fg`,
   `--mgh-color-caution-fg`, `--mgh-color-skeleton`; mais `--mgh-space-*`,
   `--mgh-font-*`, `--mgh-weight-*`, `--mgh-radius-*`, `--mgh-shadow-*` e
   `--mgh-motion-*`.
3. **Componente** — aliases locais em `.mgh-shell` (por exemplo
   `--mgh-button-bg`, `--mgh-card-bg`, `--mgh-field-border`,
   `--mgh-progress-fill`, `--mgh-banner-danger-fg`). As regras de componente
   consomem **somente** `var()` dessas camadas.

Tema: `data-theme="light|dark"` no `<html>`. Nenhuma classe `dark` ad hoc,
nenhum seletor de tema em componente.

Escalas: corpo 16px, H1 32px, display 48px (declarado; não usado para evitar
aparência de métrica gamificada); espaçamento 4/8/12/16/24/32/48/64;
raio 4/8/12/full; no máximo `--mgh-shadow-rest` e `--mgh-shadow-elevated`.

## Componentes estruturais (`components/`)

| Arquivo | Papel |
|---|---|
| `consent-gate.tsx` | Consentimento estrutural, sem pré-marcação, opt-out visível |
| `context-panel.tsx` | Contexto antes do instrumento |
| `scenario-card.tsx` | Uma cena por tela, progresso semântico `x/48` |
| `forced-choice.tsx` | Escolha forçada com radio nativo e fieldset/legend |
| `ordinal-scale.tsx` | Escala ordinal com radio nativo, sem pré-seleção |
| `self-prompt.tsx` | SELF fora do score, com opção de pular |
| `feedback-panel.tsx` | Feedback sem score e sem interpretação |
| `neutral-confirmation.tsx` | Confirmação neutra, sem relatório |
| `autosave-status.tsx` | `role="status"` para autosave |
| `loading-state.tsx` | Skeleton rotulado e `aria-busy` |
| `empty-state.tsx` | Vazio com borda tracejada e texto honesto |
| `error-state.tsx` | `role="alert"` com ação de tentar novamente |
| `blocked-state.tsx` | `role="alert"` sem ação automática |
| `structural-dialog.tsx` | Nome, foco inicial, Esc, `inert`, retorno de foco |
| `theme-toggle.tsx` | Alterna `data-theme` |
| `structural-preview.tsx` | Orquestra a demonstração em memória |
| `structural-copy.ts` | Marcador sintético e contagens estruturais |

Navegação é `<nav>`/links ou `<button>` — nunca `role="menu"`.
Todo alvo interativo tem no mínimo 24×24 CSS px, com alvo de 44px em botões e
labels de escolha.

## Texto

`PLACEHOLDER = "[PLACEHOLDER SINTÉTICO — NÃO CANÔNICO]"` é usado em todo texto
de instrumento, cenário, opção, SELF, feedback, confirmação e consentimento.
Rótulos de controle ("Continuar", "Aceitar", "Não aceitar", "Sair") são apenas
interface; nenhuma redação legal ou metodológica foi inventada.
