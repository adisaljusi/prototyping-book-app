<script>
  let { title, links } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{title}</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {#each links as link}
          <li class="nav-item">
            <a class="nav-link" href={link.href}>
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
