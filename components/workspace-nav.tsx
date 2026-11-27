"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/app", label: "Visão geral" },
  { href: "/app/mgh", label: "MGH" },
  { href: "/app/perfil", label: "Perfil" },
];

/**
 * Navegação da casca SaaS. No mobile é um drawer oculto por padrão; no desktop
 * é uma sidebar que pode ser recolhida. Somente MGH está ativo: os demais
 * módulos não são nomeados porque o Parking Lot está congelado.
 */
export function WorkspaceNav() {
  const pathname = usePathname();
  const [drawerState, setDrawerState] = useState({
    pathname,
    open: false,
  });
  const [collapsed, setCollapsed] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Trocar de rota fecha o drawer sem efeito de sincronização: o estado é
  // comparado ao pathname atual, então um pathname novo já começa fechado.
  const drawerOpen = drawerState.pathname === pathname && drawerState.open;
  const setDrawerOpen = useCallback(
    (next: boolean | ((open: boolean) => boolean)) => {
      setDrawerState((current) => {
        const currentOpen = current.pathname === pathname && current.open;
        const value = typeof next === "function" ? next(currentOpen) : next;
        return { pathname, open: value };
      });
    },
    [pathname],
  );
  const closeDrawer = useCallback(() => setDrawerOpen(false), [setDrawerOpen]);

  // Um drawer aberto no mobile não pode deixar o conteúdo `inert` no desktop.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 60rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setDrawerOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [setDrawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;

    const content = document.querySelector<HTMLElement>(
      ".mgh-workspace__content",
    );
    const skipLink = document.querySelector<HTMLElement>(".mgh-skip-link");
    const toggle = toggleRef.current;
    content?.setAttribute("inert", "");
    skipLink?.setAttribute("inert", "");
    let focusFrame = 0;
    const focusWhenVisible = () => {
      const close = closeRef.current;
      if (!close) return;
      if (getComputedStyle(close).visibility === "visible") {
        close.focus();
        return;
      }
      focusFrame = requestAnimationFrame(focusWhenVisible);
    };
    focusFrame = requestAnimationFrame(focusWhenVisible);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setDrawerOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = [
        toggleRef.current,
        ...Array.from(
          drawerRef.current?.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ) ?? [],
        ),
      ].filter((node): node is HTMLElement => Boolean(node));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      content?.removeAttribute("inert");
      skipLink?.removeAttribute("inert");
      toggle?.focus();
    };
  }, [drawerOpen, setDrawerOpen]);

  const toggleLabel = drawerOpen ? "Fechar navegação" : "Abrir navegação";
  const collapseLabel = collapsed
    ? "Expandir navegação"
    : "Recolher navegação";

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="mgh-nav-toggle mgh-icon-button"
        aria-expanded={drawerOpen}
        aria-controls="mgh-nav-drawer"
        aria-label={toggleLabel}
        title={toggleLabel}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <svg
          className="mgh-icon-button__icon"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <nav
        ref={drawerRef}
        id="mgh-nav-drawer"
        className={[
          "mgh-sidebar",
          drawerOpen ? "mgh-sidebar--open" : "",
          collapsed ? "mgh-sidebar--collapsed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Navegação do workspace"
      >
        <div className="mgh-sidebar__top">
          <p className="mgh-kicker">Workspace</p>
          <button
            ref={closeRef}
            type="button"
            className="mgh-sidebar__close mgh-icon-button"
            aria-label="Fechar navegação"
            title="Fechar navegação"
            onClick={closeDrawer}
          >
            <svg
              className="mgh-icon-button__icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            className="mgh-sidebar__collapse mgh-icon-button"
            aria-expanded={!collapsed}
            aria-controls="mgh-nav-list"
            aria-label={collapseLabel}
            title={collapseLabel}
            onClick={() => setCollapsed((value) => !value)}
          >
            <svg
              className="mgh-icon-button__icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 6l-6 6 6 6" />
            </svg>
          </button>
        </div>

        <ul id="mgh-nav-list" className="mgh-sidebar__list">
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

      {drawerOpen ? (
        <button
          type="button"
          className="mgh-nav-backdrop"
          aria-label="Fechar navegação"
          onClick={closeDrawer}
        />
      ) : null}
    </>
  );
}
