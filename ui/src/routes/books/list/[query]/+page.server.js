import { searchBooks } from "$lib/server/openlibrary_api.js";

export async function load({ params }) {
  const query = decodeURIComponent(params.query);
  const books = await searchBooks(params.query);
  return {
    books,
    query,
  };
}
