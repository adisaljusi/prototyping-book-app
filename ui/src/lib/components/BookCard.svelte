<script>
  let { book, addToBookshelf, isInBookshelf } = $props();
</script>

<a
  class="card h-100"
  data-id={book.id}
  style="max-width: 200px;"
  role="button"
  tabindex="0"
  href="/books/{book.id}"
>
  <img
    class="card-img-top"
    src={book.cover_url}
    alt={`Cover of ${book.title}`}
    style="height: 180px; object-fit: cover; background: #f4f4f4;"
  />
  <div class="card-body text-center p-2">
    <h5 class="card-title mb-2">
      <p
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none; color: inherit;"
      >
        {book.title}
      </p>
    </h5>
    {#if book.authors && book.authors.length}
      <p class="card-text mb-1 text-muted" style="font-size: 0.95rem;">
        {book.authors.join(", ")}
      </p>
    {/if}
    {#if book.year}
      <p class="card-text mb-0 text-secondary" style="font-size: 0.95rem;">
        {book.year}
      </p>
    {/if}
    <button
      class="btn btn-primary btn-sm mt-2"
      type="button"
      onclick={addToBookshelf}
    >
      Add to Bookshelf
    </button>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
