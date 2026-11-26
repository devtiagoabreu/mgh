"use client";

import { useId, type RefObject } from "react";
import { INFO_TOPICS, type InfoTopicKey } from "./structural-copy";
import { StructuralDialog } from "./structural-dialog";

type InfoDialogProps = {
  topic: InfoTopicKey;
  returnFocusRef: RefObject<HTMLElement | null>;
  inertRootId: string;
  onClose: () => void;
};

/** Modal de explicação estrutural, sobre o dialog acessível existente. */
export function InfoDialog({
  topic,
  returnFocusRef,
  inertRootId,
  onClose,
}: InfoDialogProps) {
  const reactId = useId();
  const info = INFO_TOPICS[topic];

  return (
    <StructuralDialog
      titleId={`${reactId}-title`}
      descriptionId={`${reactId}-description`}
      title={info.title}
      description={info.description}
      closeLabel="Fechar informações"
      returnFocusRef={returnFocusRef}
      inertRootId={inertRootId}
      onClose={onClose}
    >
      <div className="mgh-info-details">
        {info.details.map((paragraph) => (
          <p key={paragraph} className="mgh-copy">
            {paragraph}
          </p>
        ))}
      </div>
    </StructuralDialog>
  );
}
