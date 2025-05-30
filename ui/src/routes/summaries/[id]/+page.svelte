<script>
  import BookDetails from "$lib/components/BookDetails.svelte";
  import SummaryTable from "$lib/components/SummaryTable.svelte";
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
<div class="container">
  <div class="row">
    <div class="col-4">
      <BookDetails book={$selectedBook} />
    </div>
    <div class="col-8">
      <a class="btn btn-primary" href="/summaries/create/{data.book.id}"
        >Create summary</a
      >
      {#if data.summaries && data.summaries.length}
        <SummaryTable summaries={data.summaries} />
      {:else}
        <p class="mt-5 text-center">No summaries found</p>
      {/if}
    </div>
  </div>
</div>
