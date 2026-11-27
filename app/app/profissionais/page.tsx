import { CreateCollaboratorForm, ToolGrantsForm } from "@/components/collaborator-forms";
import { assertMentorOwner } from "@/lib/actions/access";
import { requireVerifiedSession } from "@/lib/auth/session";
import { getPrisma } from "@/lib/db/client";
import { listCollaborators } from "@/lib/db/collaborators";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profissionais — MGH — Fase A",
};

/** Administração de colaboradores e concessões, restrita a MENTOR_OWNER. */
export default async function CollaboratorsPage() {
  const { context } = await requireVerifiedSession();
  assertMentorOwner(context.role);
  const collaborators = await listCollaborators(await getPrisma(), context);

  return (
    <div className="mgh-shell">
      <header className="mgh-header">
        <div className="mgh-header__brand">
          <p className="mgh-kicker">MGH — Pilot Core</p>
          <h1 className="mgh-heading-1">Profissionais</h1>
        </div>
        <Link className="mgh-link" href="/app">
          Visão geral
        </Link>
      </header>
      <main id="mgh-conteudo" className="mgh-main" tabIndex={-1}>
        <CreateCollaboratorForm />
        <ToolGrantsForm />
        <section className="mgh-card" aria-labelledby="mgh-colaboradores-title">
          <h2 id="mgh-colaboradores-title" className="mgh-heading-2">
            Colaboradores do workspace
          </h2>
          {collaborators.length === 0 ? (
            <p className="mgh-copy mgh-copy--muted">
              Nenhum colaborador cadastrado.
            </p>
          ) : (
            <ul className="mgh-list">
              {collaborators.map((item) => (
                <li key={item.id}>{item.email}</li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
