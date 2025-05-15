<script>
  import BookCard from "$lib/components/BookCard.svelte";
  import { redirect } from "@sveltejs/kit";

  let { data } = $props();
</script>

<div class="container">
  <h2>My book LIbrary</h2>

  <div class="row"></div>

  <h2 class="text-center mb-4">Bestsellers</h2>
  <div class="row">
    {#if data.externalBooks !== undefined}
      {#each data.externalBooks as book}
        <div class="col-md-4 mb-4">
          <BookCard {book} on:click={redirect(`/books/external/${book.id}`)} />
        </div>
      {/each}
    {:else}
      <p class="text-center">Keine Bücher gefunden.</p>
    {/if}
  </div>
</div>
