<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data, children } = $props();
  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/summaries", label: "Summaries" },
  ];
</script>

<Navbar title="Bookshelf" {links} />

<main class="container mt-4">
  {@render children()}
</main>

<Footer />
