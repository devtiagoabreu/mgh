import { logoutAction } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { parseStoredPreference } from "@/lib/appearance/preference";
import { requireVerifiedSession } from "@/lib/auth/session";
import {
  PHASE_A_SHAPE,
  PHASE_A_VERSIONS,
} from "@/lib/config/versions";
import { getPrisma } from "@/lib/db/client";
import { getMghOperationalRaw } from "@/lib/db/dashboard";
import { findUserAppearancePreference } from "@/lib/db/repositories";
import {
  AGGREGATE_MIN_N,
  deriveMghOperationalMetrics,
} from "@/lib/metrics/dashboard";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Visão geral — MGH — Fase A",
};

/**
 * Dashboard operacional do workspace (F4.1). Contagens vêm do banco local
 * tenant-scoped. Não há score, KPI de pessoas, resposta individual nem nome
 * de módulo congelado.
 */
export default async function WorkspaceHome() {
  const { session, context } = await requireVerifiedSession();
  const email = session.user?.email;
  if (!email) redirect("/login");

  const client = await getPrisma();
  const raw = await getMghOperationalRaw(client, context);
  const user = await findUserAppearancePreference(client, context);
  const metrics = deriveMghOperationalMetrics(raw);
  const stored = (user as { appearancePreference?: unknown } | null)
    ?.appearancePreference;

  const kpis: ReadonlyArray<{
    label: string;
    value: string;
    detail: string;
  }> = [
    {
      label: "Execuções concluídas",
      value: String(metrics.completedRuns),
      detail: `De ${metrics.totalRuns} execuções registradas no tenant.`,
    },
    {
      label: "Em andamento",
      value: String(metrics.inProgressRuns),
      detail: "Execuções iniciadas e ainda não concluídas.",
    },
    {
      label: "Invalidadas",
      value: String(metrics.invalidatedRuns),
      detail: "Execuções invalidadas por evento; RAW preservado.",
    },
    {
      label: "Participantes com execução concluída",
      value: String(metrics.participantsWithCompletedRun),
      detail: "Referências opacas distintas, sem identificação de pessoas.",
    },
    {
      label: "Respostas RAW",
      value: String(metrics.responseRawCount),
      detail: `Registros append-only; até ${PHASE_A_SHAPE.scoredResponses} por execução concluída.`,
    },
    {
      label: "Taxa de conclusão",
      value:
        metrics.completionRate === null
          ? "—"
          : `${metrics.completionRate}%`,
      detail: metrics.completionRateSuppressed
        ? `Suprimida: n < ${AGGREGATE_MIN_N} execuções.`
        : `Concluídas / total (n = ${metrics.totalRuns}).`,
    },
    {
      label: "Membros ativos",
      value: String(metrics.activeMembers),
      detail: "Vínculos ativos no workspace.",
    },
  ];

  return (
    <div className="mgh-shell mgh-shell--dashboard">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core · Workspace</p>
          <h1 className="mgh-heading-1">Visão geral</h1>
        </div>
        <div className="mgh-actions">
          <ThemeToggle preference={parseStoredPreference(stored)} />
          <div className="mgh-header__session">
            <span className="mgh-kicker">{email}</span>
            <form action={logoutAction}>
              <button type="submit" className="mgh-button mgh-button--ghost">
                Encerrar sessão
              </button>
            </form>
          </div>
        </div>
      </header>

      <main id="mgh-conteudo" className="mgh-main" tabIndex={-1}>
        <section className="mgh-dashboard__intro" aria-labelledby="mgh-dashboard-intro">
          <div>
            <p className="mgh-kicker">Painel operacional</p>
            <h2 id="mgh-dashboard-intro" className="mgh-heading-2">
              Motor MGH
            </h2>
          </div>
          <p className="mgh-copy mgh-copy--muted">
            Números lidos do banco local sintético do tenant. Nenhum
            participante real foi liberado.
          </p>
        </section>

        <section
          className="mgh-dashboard__section"
          aria-labelledby="mgh-dashboard-kpis"
        >
          <div className="mgh-section-heading">
            <h2 id="mgh-dashboard-kpis" className="mgh-heading-2">
              Execuções e registro
            </h2>
            <span className="mgh-badge">Dados locais</span>
          </div>
          <ul className="mgh-kpi-grid">
            {kpis.map((kpi) => (
              <li className="mgh-kpi" key={kpi.label}>
                <p className="mgh-kpi__label">{kpi.label}</p>
                <p className="mgh-kpi__value">{kpi.value}</p>
                <p className="mgh-kpi__detail">{kpi.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mgh-dashboard__section"
          aria-labelledby="mgh-dashboard-module"
        >
          <div className="mgh-card mgh-card--module">
            <div>
              <p className="mgh-kicker">Módulo ativo</p>
              <h2 id="mgh-dashboard-module" className="mgh-heading-2">
                MGH — sequência do instrumento
              </h2>
              <p className="mgh-copy">
                A demonstração mantém a sequência canônica em memória. Nenhuma
                resposta é registrada nesta tela.
              </p>
            </div>
            <div className="mgh-actions">
              <Link href="/app/mgh" className="mgh-button">
                Abrir MGH
              </Link>
              <Link
                href="/app/perfil"
                className="mgh-button mgh-button--secondary"
              >
                Aparência
              </Link>
            </div>
          </div>
        </section>

        <section
          className="mgh-dashboard__section"
          aria-labelledby="mgh-dashboard-state"
        >
          <div className="mgh-card">
            <h2 id="mgh-dashboard-state" className="mgh-heading-2">
              Estado do motor
            </h2>
            <dl className="mgh-dashboard__versions">
              <div>
                <dt>Instrumento</dt>
                <dd>{PHASE_A_VERSIONS.instrument}</dd>
              </div>
              <div>
                <dt>Banco de itens</dt>
                <dd>
                  {PHASE_A_VERSIONS.itemBank} · {PHASE_A_VERSIONS.itemBankStatus}
                </dd>
              </div>
              <div>
                <dt>Scoring</dt>
                <dd>{PHASE_A_VERSIONS.scoring}</dd>
              </div>
            </dl>
            <p className="mgh-copy mgh-copy--muted">
              <strong>O que estes dados NÃO permitem dizer:</strong> não
              identificam quem está em risco, não medem competência, maturidade
              ou caráter, não autorizam contratação, promoção, demissão ou
              remuneração, e não substituem conversa com a pessoa nem avaliação
              profissional.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
