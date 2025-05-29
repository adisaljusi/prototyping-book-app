<script>
  let { book, addToBookshelf, removeFromBookshelf, isInBookshelf } = $props();
</script>

{#if book}
  <section class="book-details">
    <h1>{book.title}</h1>
    {#if book.authors && book.authors.length}
      <p class="card-text mb-1 text-muted" style="font-size: 0.95rem;">
        {book.authors.join(", ")}
      </p>
    {/if}
    {#if book.cover_url}
      <img
        src={book.cover_url}
        alt="Cover of {book.title}"
        class="book-cover"
      />
    {/if}
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
    <p class="book-description">{book.description}</p>
    <ul class="book-meta">
      {#if book.links && book.links.length}
        {#each book.links as link}
          <li>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        {/each}
      {/if}
    </ul>
  </section>
{:else}
  <p>No book details available.</p>
{/if}

<style>
  .book-details {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  }
  .book-cover {
    max-width: 200px;
    margin: 1rem 0;
    display: block;
  }
  .book-description {
    margin: 1rem 0;
    color: #444;
  }
  .book-meta {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
  }
  .book-meta li {
    margin-bottom: 0.5rem;
  }
</style>
