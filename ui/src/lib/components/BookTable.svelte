<script>
  let { books, removeFromBookshelf, setRead } = $props();
</script>

<table class="table table-striped table-bordered align-middle">
  <thead class="table">
    <tr>
      <th scope="col">Cover</th>
      <th scope="col">Title</th>
      <th scope="col">Authors</th>
      <th scope="col">Year</th>
      <th scope="col">Read</th>
      <th scope="col">Link</th>
      <th scope="col">Summaries</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {#each books as book (book.id)}
      <tr>
        <td>
          <img
            src={book.cover_url}
            alt="Cover"
            style="height: 60px; width: auto;"
          />
        </td>
        <td>{book.title}</td>
        <td>{book.authors.join(", ")}</td>
        <td>{book.year}</td>
        <td>
          {#if book.isRead}
            <button
              class="badge bg-success"
              onclick={() => setRead(book, false)}>Yes</button
            >
          {:else}
            <button
              class="badge bg-secondary"
              onclick={() => setRead(book, true)}>No</button
            >
          {/if}
        </td>
        <td>
          <a href="/books/{book.id}" class="btn btn-sm btn-primary">Open</a>
        </td>
        <td>
          <a href="/summaries/{book.id}" class="btn btn-sm btn-primary">Open</a>
        </td>
        <td>
          <button
            class="btn btn-sm btn-danger"
            onclick={() => removeFromBookshelf(book)}
            >Remove from Bookshelf</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>
