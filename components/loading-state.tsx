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
      <h3 id="mgh-loading-title" className="mgh-heading-3">
        Carregando estrutura
      </h3>
      <span className="mgh-skeleton" aria-hidden="true" />
      <p className="mgh-copy mgh-copy--muted">
        A estrutura está sendo preparada. Nenhuma resposta foi registrada.
      </p>
    </section>
  );
}
