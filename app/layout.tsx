import { appearanceBootScript } from "@/lib/appearance/preference";
import type { Metadata } from "next";
import "./globals.css";
import "./mgh-ds-v1.css";

export const metadata: Metadata = {
  title: "MGH — Fase A",
  description: "Pilot Core do Mapa de Governo Humano",
  robots: { index: false, follow: false },
};

/**
 * Aplica o tema antes da primeira pintura para evitar flash de tema errado.
 * Cookie-espelho validado > preferência do sistema > claro. Nenhum dado do
 * produto. A fonte autoritativa é o User; o cookie é apenas o espelho.
 */
const themeInit = appearanceBootScript();

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
