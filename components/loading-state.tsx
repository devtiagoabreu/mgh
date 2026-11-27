/**
 * Carregamento: skeleton com rótulo e `aria-busy`. Não usa opacidade de
 * "desabilitado" nem spinner isolado — o texto diz o que está acontecendo.
 */
export function LoadingState() {
  return (
    <section
      className="mgh-state mgh-state--loading"
      role="status"
      aria-busy="true"
      aria-labelledby="mgh-loading-title"
    >
      <h2 id="mgh-loading-title" className="mgh-heading-2">
        Carregando estrutura
      </h2>
      <span className="mgh-skeleton" aria-hidden="true" />
      <p className="mgh-copy mgh-copy--muted">
        A estrutura está sendo preparada. Nenhuma resposta foi registrada.
      </p>
    </section>
  );
}
