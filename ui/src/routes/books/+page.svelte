<script>
  import BookCard from "$lib/components/BookCard.svelte";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<div class="container">
  <div class="row"></div>

  <h2 class="text-center mb-4">Bestsellers</h2>
  <div class="row">
    {#each data.externalBooks as book, i}
      <div class="col-md-3 mb-4">
        <BookCard {book} />
      </div>
    {/each}
  </div>
</div>
