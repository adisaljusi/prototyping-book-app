<script>
  export let links;
  export let title;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{title}</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
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
