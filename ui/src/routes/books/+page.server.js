import { searchBooks } from "$lib/server/openlibrary_api";

export async function load() {
  let externalBooks = [];

  try {
    externalBooks = await searchBooks("bestsellers");
  } catch (error) {
    console.error("Error fetching external books:", error);
  }

  return {
    externalBooks,
  };
}
