"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/app", label: "Visão geral" },
  { href: "/app/mgh", label: "MGH" },
  { href: "/app/perfil", label: "Perfil" },
];

/**
 * Navegação da casca SaaS. Somente MGH está ativo; os demais módulos não são
 * nomeados porque o Parking Lot está congelado até decisão explícita.
 */
export function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <nav className="mgh-sidebar" aria-label="Navegação do workspace">
      <p className="mgh-kicker">Workspace</p>
      <ul className="mgh-sidebar__list">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="mgh-sidebar__link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mgh-sidebar__note">
        MGH é o único módulo ativo nesta fase. Os demais módulos estão
        indisponíveis.
      </p>
    </nav>
  );
}
