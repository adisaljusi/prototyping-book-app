<script>
  let { summaries } = $props();
</script>

<table class="table table-striped align-middle">
  <thead>
    <tr>
      <th scope="col">Summary</th>
      <th scope="col">Type</th>
      <th scope="col">Created</th>
      <th scope="col">Updated</th>
    </tr>
  </thead>
  <tbody>
    {#each summaries as { text, type, created_at, updated_at }}
      <tr>
        <td>{text}</td>
        <td>{type}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
      </tr>
    {/each}
  </tbody>
</table>
