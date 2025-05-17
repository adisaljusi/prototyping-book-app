<script>
  let { query, handleInput, handleSubmit } = $props();
</script>

<form class="d-flex" role="search" onsubmit={handleSubmit}>
  <input
    class="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    bind:value={query}
    oninput={handleInput}
  />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>
