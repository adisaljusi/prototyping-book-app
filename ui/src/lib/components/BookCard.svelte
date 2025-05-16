<script>
  let { book, addToBookshelf, removeFromBookshelf, isInBookshelf } = $props();
</script>

<div class="card h-100" data-id={book.id} role="button" tabindex="0">
  <img
    class="card-img-top"
    src={book.cover_url}
    alt={`Cover of ${book.title}`}
    style="height: 180px; object-fit: cover; background: #f4f4f4;"
  />
  <div class="card-body text-center p-2">
    <h5 class="card-title mb-2">
      <p href={book.url} style="text-decoration: none; color: inherit;">
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

    <div
      class="d-flex flex-column justify-content-center align-items-center mt-3"
    >
      <a class="btn btn-sm btn-outline" href="/books/{book.id}">View book</a>

      {#if isInBookshelf}
        <button
          class="btn btn-sm btn-outline-danger mt-2"
          onclick={() => removeFromBookshelf(book)}
          data-id={book.id}
        >
          Remove from Bookshelf
        </button>
      {:else}
        <button
          class="btn btn-sm btn-outline-primary mt-2"
          onclick={() => addToBookshelf(book)}
          data-id={book.id}
        >
          Add to Bookshelf
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
