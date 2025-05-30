<script>
  let { form } = $props();
</script>

<form method="POST" action="?/create" class="form-group">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" required />
  </div>
  <div class="mb-3">
    <label for="summary-text" class="form-label">Summary</label>
    <div class="mb-3">
      <select class="form-select" id="summary-type" required>
        <option value="" disabled selected>Select summary type</option>
        <option value="key-takeaways">Key Takeaways</option>
        <option value="chapter-summary">Chapter Summary</option>
        <option value="character-analysis">Character Analysis</option>
        <option value="plot-overview">Plot Overview</option>
        <option value="thematic-summary">Thematic Summary</option>
        <option value="quotes-analysis">Quotes & Analysis</option>
        <option value="personal-reflection">Personal Reflection</option>
        <option value="visual-summary"
          >Visual Summary (Mind Map, Diagram)</option
        >
        <option value="timeline">Timeline</option>
      </select>
    </div>
    <label for="summary-type" class="form-label">Type of Summary</label>
    <textarea class="form-control" id="summary-text" rows="5" required
    ></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Create Summary</button>
</form>
