<script>
  let { book } = $props();
</script>

<div class="card h-100" data-id={book.id} style="max-width: 200px;">
  <img
    class="card-img-top"
    src={book.cover_url}
    alt={`Cover of ${book.title}`}
    style="height: 180px; object-fit: cover; background: #f4f4f4;"
  />
  <div class="card-body text-center p-2">
    <h5 class="card-title mb-2">{book.title}</h5>
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
  </div>
</div>
