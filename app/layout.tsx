import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MGH — Fase A",
  description: "Pilot Core do Mapa de Governo Humano",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
