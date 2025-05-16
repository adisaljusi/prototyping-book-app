import { getBooks } from "$lib/server/db";
import { searchBooks } from "$lib/server/openlibrary_api";

export async function load() {
  let externalBooks = [];
  let internalBooks = [];

  try {
    externalBooks = await searchBooks("bestsellers");
    internalBooks = await getBooks();
  } catch (error) {
    console.error("Error fetching external books:", error);
  }

  return {
    externalBooks,
    internalBooks,
  };
}
