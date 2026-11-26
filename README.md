# MGH — Mapa de Governaça Humana

Pilot Core da Fase A do MGH™. Repositório público para visualização, sem
licença de redistribuição, com contexto metodológico canônico em `docs/002`
e acervo original intacto em `docs/001`.

> A metodologia é experimental. Nada aqui é diagnóstico, laudo, avaliação de
> competência ou fundamento isolado para decisão profissional.

## Fontes de verdade

- `docs/002/context.md` — entrada única do contexto canônico para IA.
- `docs/002/00-mapa-de-fatiamento.md` — mapa das 11 fontes e 47 fatimentos.
- `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` — decisão
  `PROD-TEN-001`.
- `docs/plano-de-desenvolvimento.md` — evolução e plano completo da Fase A.
- `docs/001` — acervo binário original; não editar.

Em conflito: anexo canônico (`ANX-*`) > documento narrativo > histórico de
conversa. `docs/exemplo_projeto_mgh.txt` foi descartado em 26/11/2026 e não
deve ser recriado.

## Stack

TypeScript · Next.js App Router · NeonDB/Postgres · Prisma · Zod · Vitest ·
Vercel · GitHub.

## Começando

```bash
cp .env.example .env
npm install
npm run dev
```

Preencha `DATABASE_URL` (pool) e `DIRECT_URL` (direta) no `.env`. O arquivo
`.env` é ignorado pelo Git; nunca commite segredos nem os cole no chat.

Gates da Fase A ficam em `MGH_*` no `.env.example`. O padrão é o mais
restritivo: sem participantes reais, sem IA, sem randomização de DR, sem SELF
no score e sem acesso do mentor a respostas individuais.

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
npm run prisma:generate
npm run prisma:migrate
npm run prisma:deploy
```

## Estado

Acompanhe em `docs/plano-de-desenvolvimento.md` e em `docs/evidencias/`.
Cada fase só é considerada concluída com comando + resultado registrados.

## Segurança e privacidade

- `tenantId` somente de sessão/JWT verificada; nunca de header, query ou body.
- Shared DB + shared schema + `tenant_id`; RLS `ENABLE` + `FORCE`.
- RAW append-only; scores derivados recomputáveis por `runId + versão`.
- Branches de preview/QA/recovery usam schema-only e seed sintético, nunca PII.
- Agregados com `n >= 5` e checagem de inferência por subtração.

## Licença

Código e metodologia sem licença de redistribuição (ver `LICENSE`). A
metodologia MGH™ é propriedade intelectual registrada como
`CONFIDENTIAL - METHODOLOGY IP` nos documentos derivados.
