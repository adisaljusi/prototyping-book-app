import { getBooks } from "$lib/server/db";

export async function load() {
  const internalBooks = await getBooks();
  return {
    books: internalBooks,
  };
}
