<script>
  import BookTable from "$lib/components/BookTable.svelte";

  let { data } = $props();
</script>

<BookTable books={data.books} />
