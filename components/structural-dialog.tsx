"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

type StructuralDialogProps = {
  titleId: string;
  descriptionId: string;
  title: ReactNode;
  description: ReactNode;
  closeLabel: string;
  returnFocusRef: RefObject<HTMLElement | null>;
  inertRootId: string;
  children: ReactNode;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal estrutural: nome, descrição, foco inicial, Esc, armadilha de Tab,
 * fundo e skip link `inert`, e retorno de foco ao gatilho. Navegação nunca
 * usa o padrão de menu de comandos.
 */
export function StructuralDialog({
  titleId,
  descriptionId,
  title,
  description,
  closeLabel,
  returnFocusRef,
  inertRootId,
  children,
  onClose,
}: StructuralDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previous = (returnFocusRef.current ??
      document.activeElement) as HTMLElement | null;
    const inertRoot = document.getElementById(inertRootId);
    const skipLink = document.querySelector<HTMLElement>(".mgh-skip-link");
    inertRoot?.setAttribute("inert", "");
    skipLink?.setAttribute("inert", "");
    initialFocusRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      inertRoot?.removeAttribute("inert");
      skipLink?.removeAttribute("inert");
      previous?.focus();
    };
  }, [inertRootId, returnFocusRef]);

  return (
    <div className="mgh-dialog-backdrop">
      <div
        ref={dialogRef}
        className="mgh-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <h2 id={titleId} className="mgh-heading-2">
          {title}
        </h2>
        <p id={descriptionId} className="mgh-copy">
          {description}
        </p>
        {children}
        <div className="mgh-actions">
          <button
            ref={initialFocusRef}
            type="button"
            className="mgh-button"
            onClick={onClose}
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
