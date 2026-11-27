"use client";

import { useRef } from "react";
import { INFO_TOPICS, type InfoTopicKey } from "./structural-copy";

type InfoButtonProps = {
  topic: InfoTopicKey;
  onOpen: (topic: InfoTopicKey, trigger: HTMLButtonElement | null) => void;
};

/**
 * Gatilho "i" de um tópico explicativo. O rótulo visível é curto; o nome
 * acessível vem do tópico e a referência ao gatilho volta ao modal para o
 * retorno de foco.
 */
export function InfoButton({ topic, onOpen }: InfoButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const info = INFO_TOPICS[topic];

  return (
    <button
      ref={ref}
      type="button"
      className="mgh-info-button"
      title={info.label}
      onClick={() => onOpen(topic, ref.current)}
    >
      <span>i</span>
      <span className="mgh-visually-hidden">{info.label}</span>
    </button>
  );
}
