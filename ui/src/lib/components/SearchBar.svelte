<script>
  let { query = $bindable(), onSearch } = $props();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
    
    onSearch(query);
  }
</script>

<form class="d-flex" role="search" onsubmit={handleSubmit}>
  <input
    class="form-control me-2"
    type="text"
    placeholder="Search"
    aria-label="Search"
    bind:value={query}
  />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>
