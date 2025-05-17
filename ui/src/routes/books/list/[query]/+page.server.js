import { searchBooks } from "$lib/server/openlibrary_api.js";

export async function load({ params }) {
  const books = await searchBooks(params.query);

  return {
    books,
  };
}
