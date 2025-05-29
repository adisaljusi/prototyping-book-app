<script>
  let { form } = $props();

    let bookId = 
  function handleSubmit() {}
</script>

<form class="container mt-5" on:submit|preventDefault={() => handleSubmit()}>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input
      type="text"
      class="form-control"
      id="title"
      bind:value={title}
      required
    />
  </div>
  <div class="mb-3">
    <label for="summary" class="form-label">Summary</label>
    <textarea
      class="form-control"
      id="summary"
      rows="5"
      bind:value={summary}
      required
    ></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Create Summary</button>
</form>
