<script>
  import BookCard from "$lib/components/BookCard.svelte";
  import { bookshelf, bookShelfActions } from "$lib/store/bookshelfStore.js";

  let { data } = $props();

  function isBookInBookshelf(bookId) {
    return $bookshelf.some((internalBook) => internalBook.id === bookId);
  }
</script>

{@debug data}
<div class="container">
  <div class="container">
    <h2>Results for:</h2>
    <p>{data.query}</p>
    <p>{data.books.length} books found.</p>
  </div>
  <div class="row">
    {#if data.books.length > 0}
      {#each data.books as book}
        <div class="col-md-4 mb-4">
          <BookCard
            data-id={book.id}
            {book}
            isInBookshelf={isBookInBookshelf(book.id)}
            addToBookshelf={(book) => bookShelfActions.addToBookshelf(book)}
            removeFromBookshelf={(book) =>
              bookShelfActions.removeFromBookshelf(book)}
          />
        </div>
      {/each}
    {:else}
      <p class="text-center">No books found.</p>
    {/if}
  </div>
</div>
