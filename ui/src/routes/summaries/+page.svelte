<script>
  import BookTable from "$lib/components/BookTable.svelte";
  import { json } from "@sveltejs/kit";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<BookTable books={data.books} />
