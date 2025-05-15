<script>
  import BookDetails from "$lib/components/BookDetails.svelte";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<BookDetails book={data.book} />
