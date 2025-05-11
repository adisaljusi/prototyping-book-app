<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data, children } = $props();
  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/books/create", label: "Create Book" },
    { href: "/authors", label: "Authors" },
    { href: "/authors/create", label: "Create Author" },
  ];
</script>

<Navbar title="Productz" {links} />

<main class="container mt-4">
  {@render children()}
</main>

<Footer />
