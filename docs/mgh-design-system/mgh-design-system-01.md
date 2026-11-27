# MGH™ Design System (v1.0) — Especificação UI/UX & Arquitetura de Interface

O **MGH™ Design System (v1.0)** estabelece a linguagem visual, os componentes de interface e os tokens de design para o software **Mapa de Governo Humano (MGH™)**. Inspirado na estética moderna *Cyber-Gov High-Tech* (Dark-First), a interface combina elegância visual com rigor psicométrico, oferecendo uma experiência imersiva e intuitiva tanto para os participantes durante a aplicação dos 48 cenários situacionais quanto para gestores e mentores na Sala de Comando Humana™.

---

## 1. Princípios Fundamentais de Design

* **Modo Escuro Nativo (*Dark-First*)**: A interface é construída sobre superfícies profundas em tons de *Obsidian Navy*, reduzindo a fadiga visual durante aplicações longas e destacando dados com neon e acentos vibrantes.
* **Clareza Científica & Rigor sem Rotulagem**: Os gráficos e dashboards evitam cores punitivas ou rótulos patológicos. A visualização de dados foca na distribuição contínua e nas tendências comportamentais sem julgamento moral.
* **Profundidade por Camadas (Glassmorphism Sutil)**: Transição suave entre superfícies elevadas utilizando bordas translúcidas de `1px` (`rgba(255, 255, 255, 0.08)`), fundos com efeito desfoque (*backdrop-blur-xl*) e iluminação interna.
* **Respostas Visuais Neon & Fluidez**: Interações com o usuário (hover, seleção de alternativas, progresso dos cenários) utilizam iluminação neon em roxo elétrico (`#8B5CF6`) e ciano vibrante (`#06B6D4`).

---

## 2. Tokens de Design

### 2.1. Paleta de Cores (Color Tokens)

A paleta de cores foi estruturada para garantir contraste acessível (WCAG 2.1 AA) e forte hierarquia visual sobre fundos escuros.

#### Cores de Fundo e Superfície (Background & Surface Tokens)
| Token Tailwind | Valor Hex | Aplicação no Sistema MGH |
| :--- | :--- | :--- |
| `bg-obsidian-950` | `#0B0E1B` | Fundo principal da aplicação (Canvas Base). |
| `bg-obsidian-900` | `#0F172A` | Fundo de painéis laterais (Sidebar e Header). |
| `bg-obsidian-800` | `#13192E` | Fundo de Cards, Contêineres e Seções elevadas. |
| `bg-obsidian-700` | `#1E293B` | Fundo de modais, dropdowns e elementos sobrepostos. |
| `border-glass` | `rgba(255, 255, 255, 0.08)` | Bordas finas translúcidas de cards e divisores. |

#### Cores Primárias e Acentos Gerais (Accent Tokens)
| Token Tailwind | Valor Hex | Aplicação no Sistema |
| :--- | :--- | :--- |
| `purple-electric` | `#8B5CF6` | Ação primária, botões ativos, indicador de destaque. |
| `purple-glow` | `#7C3AED` | Estado de hover, gradientes primários e foco. |
| `cyan-vibrant` | `#06B6D4` | Métricas secundárias, dados de PRC, indicadores de fluxo. |
| `cyan-light` | `#38BDF8` | Links de ação, destaques de texto e linhas de gráficos. |
| `emerald-status` | `#10B981` | Status de aprovação ("Approved"), taxas positivas de variação (`+23%`). |
| `rose-alert` | `#EF4444` | Alertas de atenção, taxas negativas (`-3%`), erros de validação. |

#### Gradientes Especiais (Mesh & Accent Gradients)
* **Mesh Gradient Destaque**: `linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #EC4899 100%)` — Utilizado em cards de destaque da Sala de Comando Humana™ e assinaturas individuais.
* **Gradiente de Progresso**: `linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)` — Utilizado na barra de progresso dos 48 cenários.

#### Cores das 3 Lentes Diagnósticas (Diagnostic Lens Colors)
| Lente / Dimensão | Cor Principal | Hex | Aplicação em Gráficos |
| :--- | :--- | :--- | :--- |
| **PC — Dominância (D)** | Vermelho Coral / Terracota | `#F43F5E` | Barras e gráficos do fator Dominância. |
| **PC — Influência (I)** | Âmbar Ouro / Amarelo Neon | `#F59E0B` | Barras e gráficos do fator Influência. |
| **PC — Estabilidade (S)** | Verde Esmeralda / Menta | `#10B981` | Barras e gráficos do fator Estabilidade. |
| **PC — Conformidade (C)** | Azul Safira / Cobalto | `#3B82F6` | Barras e gráficos do fator Conformidade. |
| **PRC — Visual (V)** | Violeta Elétrico | `#8B5CF6` | Representação da modalidade Visual. |
| **PRC — Auditivo (A)** | Ciano Marinho | `#06B6D4` | Representação da modalidade Auditiva. |
| **PRC — Cinestésico (C)** | Rosa Magenta Neon | `#EC4899` | Representação da modalidade Cinestésica. |
| **DR — Dinâmica de Reação** | Gradiente Roxo-Ciano | `linear-gradient(#8B5CF6, #06B6D4)` | Eixos de reação (Speed, Impact, Persistence, Externalization). |

---

### 2.2. Tipografia (Typography Tokens)

O MGH-DS adota a família tipográfica **Inter** ou **Plus Jakarta Sans** para máxima clareza em telas digitais de alta densidade.

* **Display H1**: `32px` / `Line Height: 40px` / `Font Weight: 700 (Bold)` — Títulos principais da Sala de Comando.
* **Heading H2**: `24px` / `Line Height: 32px` / `Font Weight: 600 (SemiBold)` — Títulos de cenários e seções do relatório.
* **Heading H3**: `18px` / `Line Height: 24px` / `Font Weight: 600 (SemiBold)` — Títulos de cards e métricas.
* **Body Normal**: `14px` / `Line Height: 20px` / `Font Weight: 400 (Regular)` — Descrição de cenários e alternativas.
* **Body Small**: `12px` / `Line Height: 16px` / `Font Weight: 500 (Medium)` — Legendas, metadados e badges.
* **Code / Mono**: `13px` / `Font: JetBrains Mono` — Exibição de UUIDs, tokens e IDs de auditoria.

---

### 2.3. Elevação, Sombras e Arredondamento (Border Radius & Shadows)

* **Arredondamento (Border Radius)**:
  * `rounded-sm`: `6px` — Badges e pequenos botões de ação.
  * `rounded-md`: `12px` — Inputs, botões padrão e selects.
  * `rounded-lg`: `16px` — Cards de métricas e opções de cenários.
  * `rounded-xl`: `24px` — Painéis principais, contêineres de dashboards e cards de destaque.
* **Sombras & Brilho (Glow Shadows)**:
  * `shadow-card`: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
  * `glow-purple`: `0 0 20px rgba(139, 92, 246, 0.35)`
  * `glow-cyan`: `0 0 20px rgba(6, 182, 212, 0.35)`

---

## 3. Componentes de Interface Básicos (Atômicos)

### 3.1. Botões (Buttons)

#### Botão Primário (Primary Action Button)
```html
<button class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
  Continuar Cenário
</button>
```

#### Botão Secundário / Ghost (Secondary Button)
```html
<button class="bg-slate-800/60 hover:bg-slate-700/60 border border-white/10 text-slate-200 font-medium px-5 py-2.5 rounded-xl transition-all duration-200">
  Salvar Rascunho
</button>
```

#### Status Badge (Badge de Status com Indicador Pulsante)
```html
<span class="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
  Approved
</span>
```

---

## 4. Componentes Específicos do MGH™

### 4.1. Barra de Progresso da Aplicação (48 Cenários)
A barra de progresso orienta o participante através dos 48 cenários situacionais sem expor os bastidores do cálculo psicométrico:

```html
<div class="w-full bg-slate-900/80 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
  <div class="flex justify-between items-center mb-2">
    <span class="text-xs font-semibold text-slate-400">Progresso da Aplicação</span>
    <span class="text-xs font-bold text-purple-400">Cenário 24 de 48 (50%)</span>
  </div>
  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
    <div class="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-300" style="width: 50%"></div>
  </div>
</div>
```

---

### 4.2. Card de Cenário Situacional (Interface do Participante)
Garante leitura fluida e seleção rápida com realce neon em hover e estado ativo:

```html
<div class="bg-[#13192E] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
  <div class="flex items-center gap-2 mb-4">
    <span class="bg-purple-500/20 text-purple-300 text-xs font-bold px-2.5 py-1 rounded-md border border-purple-500/30">
      CENÁRIO 12 • DELEGAÇÃO
    </span>
  </div>
  <h2 class="text-lg font-semibold text-white mb-6">
    Diante de um projeto crítico com prazo reduzido, qual conduta melhor descreve sua reação habitual?
  </h2>
  
  <div class="space-y-3">
    <!-- Opção Selecionada -->
    <div class="p-4 rounded-xl border border-purple-500 bg-purple-500/10 text-white flex items-center justify-between cursor-pointer transition-all">
      <span class="text-sm font-medium">Assumo a liderança direta, estabeleço prazos rígidos e acompanho as entregas diariamente.</span>
      <div class="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">✓</div>
    </div>
    
    <!-- Opção Não Selecionada -->
    <div class="p-4 rounded-xl border border-white/5 bg-slate-800/40 hover:bg-slate-800/80 text-slate-300 flex items-center justify-between cursor-pointer transition-all">
      <span class="text-sm font-medium">Reúno a equipe para ouvir sugestões e construir a solução em conjunto.</span>
      <div class="w-5 h-5 rounded-full border border-slate-600"></div>
    </div>
  </div>
</div>
```

---

### 4.3. Card KPI de Métricas (Sala de Comando Humana™)
Inspirado na estrutura de cartões estatísticos do dashboard escuro:

```html
<div class="bg-[#13192E] border border-white/10 rounded-2xl p-5 shadow-xl">
  <div class="flex justify-between items-start mb-3">
    <div>
      <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Dominância (PC.D)</p>
      <h3 class="text-2xl font-bold text-white mt-1">18 / 24</h3>
    </div>
    <div class="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
      ⚡
    </div>
  </div>
  <div class="flex items-center gap-2 text-xs">
    <span class="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">Elevado</span>
    <span class="text-slate-400">• Entropia: 0.42</span>
  </div>
</div>
```

---

### 4.4. Tabela de Auditoria e Status ("Check Table")
Tabela escura para listagem de participantes, tokens e status da Onda 0:

```html
<div class="bg-[#13192E] border border-white/10 rounded-2xl p-5 overflow-hidden">
  <h4 class="text-sm font-bold text-white mb-4">Check Table — Auditoria MGH</h4>
  <table class="w-full text-left text-xs">
    <thead>
      <tr class="border-b border-white/10 text-slate-400 font-semibold uppercase">
        <th class="py-2.5">Código Participante</th>
        <th class="py-2.5">Status</th>
        <th class="py-2.5">Data Conclusão</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-white/5 text-slate-300">
      <tr>
        <td class="py-3 font-medium">MGH-O0-001</td>
        <td class="py-3">
          <span class="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-xs font-semibold">
            ✓ Approved
          </span>
        </td>
        <td class="py-3 text-slate-400">18 Apr 2026</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 5. Configuração do Tailwind CSS (`tailwind.config.js`)

Mapeamento completo para implementação nativa em projetos Next.js com Tailwind CSS:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0E1B',
          900: '#0F172A',
          800: '#13192E',
          700: '#1E293B',
        },
        mgh: {
          purple: '#8B5CF6',
          'purple-glow': '#7C3AED',
          cyan: '#06B6D4',
          'cyan-light': '#38BDF8',
          emerald: '#10B981',
          rose: '#EF4444',
          dominance: '#F43F5E',
          influence: '#F59E0B',
          steadiness: '#10B981',
          compliance: '#3B82F6',
        },
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.3)',
        'glass-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
```
