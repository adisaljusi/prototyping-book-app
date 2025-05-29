<script>
  import BookCard from "$lib/components/BookCard.svelte";
  import BookTable from "$lib/components/BookTable.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import { bookshelf, bookShelfActions } from "$lib/store/bookshelfStore.js";

  let { data } = $props();

  let searchQuery = $state("");
  bookshelf.set(data.internalBooks);

  $inspect(searchQuery);

  function isBookInBookshelf(bookId) {
    return $bookshelf.some((internalBook) => internalBook.id === bookId);
  }
</script>

<div class="container">
  <h2>My book Library</h2>
  {#if $bookshelf.length}
    <BookTable
      books={$bookshelf}
      removeFromBookshelf={(book) => bookShelfActions.removeFromBookshelf(book)}
    />
  {/if}

  <div class="container">
    <h2>Search for books</h2>
    <SearchBar query={searchQuery} />
  </div>

  <h2 class="text-center mb-4">Bestsellers</h2>

  <div class="row">
    {#if data.externalBooks.length > 0}
      {#each data.externalBooks as book}
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
