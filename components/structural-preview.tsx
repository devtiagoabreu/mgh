"use client";

import { logoutAction } from "@/app/actions/auth";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  FINALIZE_BACK_BUTTON,
  FINALIZE_CONFIRMATION_DESCRIPTION,
  FINALIZE_CONFIRMATION_TITLE,
  FINAL_BUTTON,
  SCENARIOS,
  SCENARIO_TOTAL,
  SELF_ITEMS,
  type Scenario,
} from "@/lib/canonical/instrument";
import { AutosaveStatus } from "./autosave-status";
import { BlockedState } from "./blocked-state";
import { CompletionPanel } from "./completed-panel";
import { ConsentGate } from "./consent-gate";
import { ContextPanel } from "./context-panel";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";
import { FeedbackPanel } from "./feedback-panel";
import { ForcedChoice } from "./forced-choice";
import { InfoButton } from "./info-button";
import { InfoDialog } from "./info-dialog";
import { LoadingState } from "./loading-state";
import { NeutralConfirmation } from "./neutral-confirmation";
import { OpeningPanel } from "./opening-panel";
import { PreInstructions } from "./pre-instructions";
import { RatingGroup } from "./rating-group";
import { ScenarioCard } from "./scenario-card";
import { SelfPanel } from "./self-prompt";
import { StructuralDialog } from "./structural-dialog";
import { ThemeToggle } from "./theme-toggle";
import { TransitionPanel } from "./transition-panel";
import type {
  ConsentDecision,
  InfoTopicKey,
} from "./structural-copy";

type Stage =
  | "consent"
  | "opening"
  | "context"
  | "instructions"
  | "scenario"
  | "transition"
  | "self"
  | "feedback"
  | "confirmation"
  | "completed";

type Inspection = "none" | "loading" | "empty" | "error" | "blocked";

type DialogState =
  | { kind: "exit" }
  | { kind: "finalize" }
  | { kind: "info"; topic: InfoTopicKey }
  | null;

const INSPECTION_STATES: readonly Inspection[] = [
  "loading",
  "empty",
  "error",
  "blocked",
];

/**
 * Sequência canônica da Fase A em memória local: consentimento, abertura,
 * contexto, instruções, 48 cenários, transição, SELF, feedback e encerramento.
 * Não há API, persistência, score, relatório, perfil nem resposta individual.
 */
export function StructuralPreview({ username }: { username: string }) {
  const [stage, setStage] = useState<Stage>("consent");
  const [consentDeclined, setConsentDeclined] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(1);
  const [choice, setChoice] = useState("");
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [selfValues, setSelfValues] = useState<Record<string, string>>({});
  const [feedbackAnswers, setFeedbackAnswers] = useState<Record<string, string>>({});
  const [feedbackDetails, setFeedbackDetails] = useState<Record<string, string>>({});
  const [answerError, setAnswerError] = useState(false);
  const [inspection, setInspection] = useState<Inspection>("none");
  const [dialog, setDialog] = useState<DialogState>(null);

  const mainRef = useRef<HTMLElement>(null);
  const exitRef = useRef<HTMLButtonElement>(null);
  const finalizeRef = useRef<HTMLButtonElement>(null);
  const infoReturnRef = useRef<HTMLElement | null>(null);
  const stageMounted = useRef(false);
  const scenarioHeadingId = useId();
  const answerErrorId = useId();

  useEffect(() => {
    if (!stageMounted.current) {
      stageMounted.current = true;
      return;
    }
    mainRef.current?.focus();
  }, [stage]);

  function resetAll() {
    setStage("consent");
    setConsentDeclined(false);
    setScenarioIndex(1);
    setChoice("");
    setRatings({});
    setSelfValues({});
    setFeedbackAnswers({});
    setFeedbackDetails({});
    setAnswerError(false);
    setInspection("none");
    setDialog(null);
  }

  function handleFinalize() {
    setDialog(null);
    setStage("completed");
  }

  function openInfo(topic: InfoTopicKey, trigger: HTMLButtonElement | null) {
    infoReturnRef.current = trigger;
    setDialog({ kind: "info", topic });
  }

  function handleConsent(decision: ConsentDecision) {
    if (decision === "decline") {
      setConsentDeclined(true);
      return;
    }
    setConsentDeclined(false);
    setStage("opening");
  }

  const current: Scenario | undefined = SCENARIOS[scenarioIndex - 1];
  const ratingsComplete =
    current?.kind === "rating" &&
    current.subitems.every((_, index) => ratings[String(index)] !== undefined);

  function advanceScenario() {
    const answered =
      current?.kind === "choice" ? choice !== "" : ratingsComplete;
    if (!answered) {
      setAnswerError(true);
      return;
    }
    setAnswerError(false);
    setChoice("");
    setRatings({});
    if (scenarioIndex < SCENARIO_TOTAL) {
      setScenarioIndex(scenarioIndex + 1);
      return;
    }
    setStage("transition");
  }

  let content: ReactNode;

  if (inspection !== "none") {
    if (inspection === "loading") {
      content = <LoadingState />;
    } else if (inspection === "empty") {
      content = (
        <EmptyState
          action={
            <button
              type="button"
              className="mgh-button mgh-button--secondary"
              onClick={() => setInspection("none")}
            >
              Voltar ao fluxo
            </button>
          }
        />
      );
    } else if (inspection === "error") {
      content = <ErrorState onRetry={() => setInspection("none")} />;
    } else {
      content = <BlockedState />;
    }
  } else if (stage === "consent") {
    content = (
      <>
        {consentDeclined ? (
          <>
            <BlockedState reason="Participação não aceita. Nenhuma resposta foi registrada." />
            <div className="mgh-actions">
              <button
                type="button"
                className="mgh-button mgh-button--secondary"
                onClick={() => setConsentDeclined(false)}
              >
                Voltar ao consentimento
              </button>
            </div>
            <InfoButton topic="consentimento" onOpen={openInfo} />
          </>
        ) : (
          <ConsentGate
            onDecision={handleConsent}
            info={<InfoButton topic="consentimento" onOpen={openInfo} />}
          />
        )}
      </>
    );
  } else if (stage === "opening") {
    content = (
      <>
        <OpeningPanel onStart={() => setStage("context")} />
        <InfoButton topic="abertura" onOpen={openInfo} />
      </>
    );
  } else if (stage === "context") {
    content = (
      <>
        <ContextPanel onContinue={() => setStage("instructions")} />
        <InfoButton topic="procedencia" onOpen={openInfo} />
      </>
    );
  } else if (stage === "instructions") {
    content = (
      <>
        <PreInstructions onStart={() => setStage("scenario")} />
        <InfoButton topic="procedencia" onOpen={openInfo} />
      </>
    );
  } else if (stage === "scenario" && current) {
    content = (
      <>
        <ScenarioCard scenario={current} headingId={scenarioHeadingId}>
          {current.kind === "choice" ? (
            <ForcedChoice
              name="mgh-forced-choice"
              options={current.options}
              value={choice}
              onChange={setChoice}
              describedBy={answerError ? answerErrorId : undefined}
            />
          ) : (
            <RatingGroup
              scenario={current}
              values={ratings}
              onChange={(index, value) =>
                setRatings((previous) => ({ ...previous, [index]: value }))
              }
              describedBy={answerError ? answerErrorId : undefined}
            />
          )}
          {answerError ? (
            <p id={answerErrorId} className="mgh-field-error" role="alert">
              Responda todos os campos desta tela para continuar.
            </p>
          ) : null}
          <AutosaveStatus />
          <div className="mgh-actions">
            <button type="button" className="mgh-button" onClick={advanceScenario}>
              {scenarioIndex < SCENARIO_TOTAL
                ? "Próximo cenário"
                : "Concluir cenários"}
            </button>
          </div>
        </ScenarioCard>
        <InfoButton topic="banco" onOpen={openInfo} />
      </>
    );
  } else if (stage === "transition") {
    content = (
      <>
        <TransitionPanel onContinue={() => setStage("self")} />
        <InfoButton topic="procedencia" onOpen={openInfo} />
      </>
    );
  } else if (stage === "self") {
    content = (
      <>
        <p className="mgh-kicker">{`${SELF_ITEMS.length} afirmações`}</p>
        <SelfPanel
          values={selfValues}
          onChange={(code, value) =>
            setSelfValues((previous) => ({ ...previous, [code]: value }))
          }
        />
        <div className="mgh-actions">
          <button
            type="button"
            className="mgh-button"
            onClick={() => setStage("feedback")}
          >
            Continuar
          </button>
          <button
            type="button"
            className="mgh-button mgh-button--secondary"
            onClick={() => setStage("feedback")}
          >
            Pular registro
          </button>
        </div>
        <InfoButton topic="self" onOpen={openInfo} />
      </>
    );
  } else if (stage === "feedback") {
    content = (
      <>
        <FeedbackPanel
          answers={feedbackAnswers}
          details={feedbackDetails}
          onAnswer={(id, value) =>
            setFeedbackAnswers((previous) => ({ ...previous, [id]: value }))
          }
          onDetail={(id, value) =>
            setFeedbackDetails((previous) => ({ ...previous, [id]: value }))
          }
        />
        <div className="mgh-actions">
          <button
            type="button"
            className="mgh-button"
            onClick={() => setStage("confirmation")}
          >
            Ver confirmação
          </button>
        </div>
        <InfoButton topic="score" onOpen={openInfo} />
      </>
    );
  } else if (stage === "completed") {
    content = (
      <>
        <CompletionPanel onRestart={resetAll} />
        <InfoButton topic="encerramento" onOpen={openInfo} />
      </>
    );
  } else {
    content = (
      <>
        <NeutralConfirmation
          buttonRef={finalizeRef}
          onFinish={() => setDialog({ kind: "finalize" })}
        />
        <InfoButton topic="encerramento" onOpen={openInfo} />
      </>
    );
  }

  return (
    <>
      <div className="mgh-shell" id="mgh-app-shell">
        <header className="mgh-header">
          <div className="mgh-header__brand">
            <p className="mgh-kicker">MGH — Pilot Core</p>
            <h1 className="mgh-heading-1"> Sequência do instrumento</h1>
          </div>
          <div className="mgh-actions">
            <InfoButton topic="demonstracao" onOpen={openInfo} />
            <ThemeToggle />
            <div className="mgh-header__session">
              <span className="mgh-kicker">{username}</span>
              <button
                ref={exitRef}
                type="button"
                className="mgh-button mgh-button--ghost"
                onClick={() => setDialog({ kind: "exit" })}
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        <main
          ref={mainRef}
          id="mgh-conteudo"
          className="mgh-main"
          tabIndex={-1}
        >
          {content}
        </main>

        <footer className="mgh-footer">
          <div className="mgh-footer__row">
            <details className="mgh-disclosure">
              <summary>Inspecionar estados estruturais</summary>
              <div className="mgh-disclosure__body">
                <p className="mgh-field-help">
                  Painel apenas da demonstração — não faz parte do instrumento.
                </p>
                <div
                  className="mgh-actions"
                  role="group"
                  aria-label="Estados estruturais"
                >
                  {INSPECTION_STATES.map((state) => (
                    <button
                      key={state}
                      type="button"
                      className="mgh-button mgh-button--secondary"
                      onClick={() => setInspection(state)}
                    >
                      {state}
                    </button>
                  ))}
                  {inspection !== "none" ? (
                    <button
                      type="button"
                      className="mgh-button mgh-button--ghost"
                      onClick={() => setInspection("none")}
                    >
                      Voltar ao fluxo
                    </button>
                  ) : null}
                </div>
              </div>
            </details>
            <InfoButton topic="operacao" onOpen={openInfo} />
          </div>
        </footer>
      </div>

      {dialog?.kind === "exit" ? (
        <StructuralDialog
          titleId="mgh-dialog-title"
          descriptionId="mgh-dialog-description"
          title="Sair da demonstração?"
          description="Nenhuma resposta será registrada."
          closeLabel="Voltar à demonstração"
          returnFocusRef={exitRef}
          inertRootId="mgh-app-shell"
          onClose={() => setDialog(null)}
        >
          <div className="mgh-actions">
            <form action={logoutAction}>
              <button type="submit" className="mgh-button mgh-button--secondary">
                Encerrar sessão
              </button>
            </form>
            <button
              type="button"
              className="mgh-button mgh-button--secondary"
              onClick={() => {
                resetAll();
                setDialog(null);
              }}
            >
              Reiniciar sequência MGH
            </button>
          </div>
        </StructuralDialog>
      ) : null}

      {dialog?.kind === "finalize" ? (
        <StructuralDialog
          titleId="mgh-finalize-title"
          descriptionId="mgh-finalize-description"
          title={FINALIZE_CONFIRMATION_TITLE}
          description={FINALIZE_CONFIRMATION_DESCRIPTION}
          closeLabel={FINALIZE_BACK_BUTTON}
          returnFocusRef={finalizeRef}
          inertRootId="mgh-app-shell"
          onClose={() => setDialog(null)}
        >
          <div className="mgh-actions">
            <button
              type="button"
              className="mgh-button mgh-button--secondary"
              onClick={handleFinalize}
            >
              {FINAL_BUTTON}
            </button>
          </div>
        </StructuralDialog>
      ) : null}

      {dialog?.kind === "info" ? (
        <InfoDialog
          topic={dialog.topic}
          returnFocusRef={infoReturnRef}
          inertRootId="mgh-app-shell"
          onClose={() => setDialog(null)}
        />
      ) : null}
    </>
  );
}
