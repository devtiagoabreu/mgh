"use client";

import { useId } from "react";
import { FEEDBACK_ITEMS } from "@/lib/canonical/instrument";

type FeedbackPanelProps = {
  answers: Record<string, string>;
  details: Record<string, string>;
  onAnswer: (id: string, value: string) => void;
  onDetail: (id: string, value: string) => void;
};

/** Feedback metodológico do participante — não entra no score. */
export function FeedbackPanel({
  answers,
  details,
  onAnswer,
  onDetail,
}: FeedbackPanelProps) {
  const titleId = useId();

  return (
    <section className="mgh-card" aria-labelledby={titleId}>
      <h2 id={titleId} className="mgh-heading-2">
        Feedback
      </h2>
      {FEEDBACK_ITEMS.map((item, index) => {
        const legendId = `${titleId}-${item.id}`;
        const detailId = `${titleId}-${item.id}-detail`;
        return (
          <fieldset key={item.id} className="mgh-fieldset">
            <legend className="mgh-legend" id={legendId}>
              {item.question}
            </legend>
            <div className="mgh-choice-list mgh-choice-list--inline">
              {item.options.map((option) => (
                <label
                  key={option}
                  className={`mgh-choice mgh-choice--compact ${
                    answers[item.id] === option ? "mgh-choice--selected" : ""
                  }`}
                >
                  <input
                    className="mgh-choice__input"
                    type="radio"
                    name={`mgh-feedback-${item.id}`}
                    value={option}
                    checked={answers[item.id] === option}
                    onChange={() => onAnswer(item.id, option)}
                    aria-labelledby={legendId}
                  />
                  <span className="mgh-choice__text">{option}</span>
                </label>
              ))}
            </div>
            {"detailLabel" in item && answers[item.id] === "Sim" ? (
              <div className="mgh-feedback-detail">
                <label className="mgh-legend" htmlFor={detailId}>
                  {item.detailLabel}
                </label>
                <input
                  id={detailId}
                  className="mgh-input"
                  type="text"
                  value={details[item.id] ?? ""}
                  onChange={(event) => onDetail(item.id, event.target.value)}
                />
              </div>
            ) : null}
            {index === FEEDBACK_ITEMS.length - 1 ? (
              <p className="mgh-note">
                Essa última pergunta não é detector de mentira. Serve para
                estudar desejabilidade percebida dos itens.
              </p>
            ) : null}
          </fieldset>
        );
      })}
      <p className="mgh-note">Não entra no cálculo.</p>
    </section>
  );
}
