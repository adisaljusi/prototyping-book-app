<script>
  import { goto } from "$app/navigation";
  import BookCard from "$lib/components/BookCard.svelte";
  import BookTable from "$lib/components/BookTable.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import { bookshelf, bookShelfActions } from "$lib/store/bookshelfStore.js";
  import { writable } from "svelte/store";

  let { data } = $props();
  let searchQuery = $state("");

  bookshelf.set(data.internalBooks);

  function isBookInBookshelf(bookId) {
    return $bookshelf.some((internalBook) => internalBook.id === bookId);
  }

  function handleSearch() {
    goto(`/books/list/${encodeURIComponent(searchQuery)}`);
  }
</script>

<div class="container">
  <div class="container mb-4">
    <SearchBar bind:query={searchQuery} onSearch={handleSearch} />
  </div>

  <h2>My book Library</h2>
  {#if $bookshelf.length}
    <BookTable
      books={$bookshelf}
      removeFromBookshelf={(book) => bookShelfActions.removeFromBookshelf(book)}
      setRead={(book, isRead) =>
        bookShelfActions.updateBook({ ...book, isRead })}
    />
  {/if}

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
