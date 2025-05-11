import { searchBooks } from "$lib/server/openlibrary_api";

export async function load() {
  const externalBooks = await searchBooks("bestsellers");

  return {
    externalBooks,
  };
}
