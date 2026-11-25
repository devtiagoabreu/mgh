import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MGH — Fase A",
  description: "Pilot Core do Mapa de Governo Humano",
  robots: { index: false, follow: false },
};

/**
 * Aplica o tema antes da primeira pintura para evitar flash de tema errado.
 * Preferência salva > preferência do sistema > claro. Nenhum dado do produto.
 */
const themeInit = [
  "try{",
  "var t=localStorage.getItem('mgh-theme');",
  "if(t!=='light'&&t!=='dark'){",
  "t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';",
  "}",
  "document.documentElement.dataset.theme=t;",
  "}catch(e){document.documentElement.dataset.theme='light';}",
].join("");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <a className="mgh-skip-link" href="#mgh-conteudo">
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
