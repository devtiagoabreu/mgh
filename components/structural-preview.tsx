"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AutosaveStatus } from "./autosave-status";
import { BlockedState } from "./blocked-state";
import { ConsentGate } from "./consent-gate";
import { ContextPanel } from "./context-panel";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";
import { FeedbackPanel } from "./feedback-panel";
import { ForcedChoice } from "./forced-choice";
import { LoadingState } from "./loading-state";
import { NeutralConfirmation } from "./neutral-confirmation";
import { OrdinalScale } from "./ordinal-scale";
import { ScenarioCard } from "./scenario-card";
import { SelfPrompt } from "./self-prompt";
import { StructuralDialog } from "./structural-dialog";
import { ThemeToggle } from "./theme-toggle";
import {
  PLACEHOLDER,
  SCENARIO_TOTAL,
  SELF_TOTAL,
  type ConsentDecision,
} from "./structural-copy";

type Stage =
  | "consent"
  | "context"
  | "scenario"
  | "self"
  | "feedback"
  | "confirmation";

type Inspection = "none" | "loading" | "empty" | "error" | "blocked";

const CHOICE_OPTIONS = [
  { id: "option-a", label: PLACEHOLDER },
  { id: "option-b", label: PLACEHOLDER },
] as const;

const ORDINAL_POINTS = 4;
const INSPECTION_STATES: readonly Inspection[] = [
  "loading",
  "empty",
  "error",
  "blocked",
];

/**
 * Demonstração estrutural da P6. Toda a navegação é memória local: não há
 * API, persistência, score, relatório, perfil nem resposta individual.
 */
export function StructuralPreview() {
  const [stage, setStage] = useState<Stage>("consent");
  const [consentDeclined, setConsentDeclined] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(1);
  const [choice, setChoice] = useState("");
  const [rating, setRating] = useState("");
  const [selfText, setSelfText] = useState("");
  const [answerError, setAnswerError] = useState(false);
  const [inspection, setInspection] = useState<Inspection>("none");
  const [dialogOpen, setDialogOpen] = useState(false);

  const mainRef = useRef<HTMLElement>(null);
  const exitRef = useRef<HTMLButtonElement>(null);
  const stageMounted = useRef(false);
  const scenarioHeadingId = useId();
  const selfId = useId();
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
    setRating("");
    setSelfText("");
    setAnswerError(false);
    setInspection("none");
  }

  function handleConsent(decision: ConsentDecision) {
    if (decision === "decline") {
      setConsentDeclined(true);
      return;
    }
    setConsentDeclined(false);
    setStage("context");
  }

  function advanceScenario() {
    if (choice === "" || rating === "") {
      setAnswerError(true);
      return;
    }
    setAnswerError(false);
    if (scenarioIndex < SCENARIO_TOTAL) {
      setScenarioIndex(scenarioIndex + 1);
      setChoice("");
      setRating("");
      return;
    }
    setStage("self");
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
    content = consentDeclined ? (
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
      </>
    ) : (
      <ConsentGate onDecision={handleConsent} />
    );
  } else if (stage === "context") {
    content = (
      <>
        <ContextPanel />
        <div className="mgh-actions">
          <button
            type="button"
            className="mgh-button"
            onClick={() => setStage("scenario")}
          >
            Iniciar cenários
          </button>
        </div>
      </>
    );
  } else if (stage === "scenario") {
    content = (
      <ScenarioCard index={scenarioIndex} headingId={scenarioHeadingId}>
        <ForcedChoice
          name="mgh-forced-choice"
          options={CHOICE_OPTIONS}
          value={choice}
          onChange={setChoice}
          describedBy={answerError ? answerErrorId : undefined}
        />
        <OrdinalScale
          name="mgh-ordinal-scale"
          points={ORDINAL_POINTS}
          value={rating}
          onChange={setRating}
          describedBy={answerError ? answerErrorId : undefined}
        />
        {answerError ? (
          <p id={answerErrorId} className="mgh-field-error" role="alert">
            Selecione uma opção e um ponto para continuar.
          </p>
        ) : null}
        <AutosaveStatus />
        <div className="mgh-actions">
          <button type="button" className="mgh-button" onClick={advanceScenario}>
            {scenarioIndex < SCENARIO_TOTAL ? "Próximo cenário" : "Concluir cenários"}
          </button>
        </div>
      </ScenarioCard>
    );
  } else if (stage === "self") {
    content = (
      <>
        <p className="mgh-kicker">{`Registro reflexivo 1 de ${SELF_TOTAL}`}</p>
        <SelfPrompt id={selfId} value={selfText} onChange={setSelfText} />
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
      </>
    );
  } else if (stage === "feedback") {
    content = (
      <>
        <FeedbackPanel />
        <div className="mgh-actions">
          <button
            type="button"
            className="mgh-button"
            onClick={() => setStage("confirmation")}
          >
            Ver confirmação
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <NeutralConfirmation />
        <div className="mgh-actions">
          <button type="button" className="mgh-button" onClick={resetAll}>
            Reiniciar demonstração
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mgh-shell" id="mgh-app-shell">
        <header className="mgh-header">
          <div className="mgh-header__brand">
            <p className="mgh-kicker">MGH — Pilot Core</p>
            <h1 className="mgh-heading-1">Superfície estrutural</h1>
          </div>
          <div className="mgh-actions">
            <ThemeToggle />
            <button
              ref={exitRef}
              type="button"
              className="mgh-button mgh-button--ghost"
              onClick={() => setDialogOpen(true)}
            >
              Sair
            </button>
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
        </footer>
      </div>

      {dialogOpen ? (
        <StructuralDialog
          titleId="mgh-dialog-title"
          descriptionId="mgh-dialog-description"
          returnFocusRef={exitRef}
          inertRootId="mgh-app-shell"
          onClose={() => setDialogOpen(false)}
        >
          <div className="mgh-actions">
            <button
              type="button"
              className="mgh-button mgh-button--secondary"
              onClick={() => {
                resetAll();
                setDialogOpen(false);
              }}
            >
              Encerrar demonstração
            </button>
          </div>
        </StructuralDialog>
      ) : null}
    </>
  );
}
