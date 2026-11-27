"use client";

import { useRef } from "react";
import { INFO_TOPICS, type InfoTopicKey } from "./structural-copy";

type InfoButtonProps = {
  topic: InfoTopicKey;
  onOpen: (topic: InfoTopicKey, trigger: HTMLButtonElement | null) => void;
};

/**
 * Gatilho iconográfico "i" de um tópico explicativo. O nome acessível vem do
 * tópico (texto oculto visualmente) e a referência ao gatilho volta ao modal
 * para o retorno de foco. O ícone é decorativo e não participa do nome.
 */
export function InfoButton({ topic, onOpen }: InfoButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const info = INFO_TOPICS[topic];

  return (
    <button
      ref={ref}
      type="button"
      className="mgh-icon-button mgh-info-button"
      title={info.label}
      onClick={() => onOpen(topic, ref.current)}
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
      </svg>
      <span className="mgh-visually-hidden">{info.label}</span>
    </button>
  );
}
