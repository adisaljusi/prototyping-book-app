<script>
  import BookCard from "$lib/components/BookCard.svelte";
  import { goto } from "$app/navigation";

  let { data } = $props();
</script>

<div class="container">
  <h2>My book Library</h2>

  <div class="row"></div>

  <h2 class="text-center mb-4">Bestsellers</h2>

  <div class="row">
    {#if data.externalBooks.length > 0}
      {#each data.externalBooks as book}
        <div class="col-md-4 mb-4">
          <BookCard {book} />
        </div>
      {/each}
    {:else}
      <p class="text-center">Keine Bücher gefunden.</p>
    {/if}
  </div>
</div>
