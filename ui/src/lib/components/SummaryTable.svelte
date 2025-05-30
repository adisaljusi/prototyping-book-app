<script>
  let { summaries } = $props();
</script>

<table class="table table-striped align-middle">
  <thead>
    <tr>
      <th scope="col">Summary</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {#each summaries as { summary, type, date }}
      <tr>
        <td>{summary}</td>
        <td>{type}</td>
        <td>{date}</td>
      </tr>
    {/each}
  </tbody>
</table>
