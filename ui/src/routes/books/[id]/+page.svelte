<script>
  import BookDetails from "$lib/components/BookDetails.svelte";
  import { bookShelfActions, selectedBook } from "$lib/store/bookshelfStore";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  $effect(() => {
    selectedBook.set({ ...data.book, isInBookshelf: data.isInBookshelf });
  });

  const removeFromBookshelf = (book) => {
    const remove = bookShelfActions.removeFromBookshelf(book);
    selectedBook.set();
  };
</script>

{@debug data}

<BookDetails book={$selectedBook} />
