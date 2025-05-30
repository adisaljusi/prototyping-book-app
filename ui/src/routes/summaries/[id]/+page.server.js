import * as db from "$lib/server/db.js";
import * as OpenLibraryAPI from "$lib/server/openlibrary_api";

export async function load({ params }) {
  const book = await OpenLibraryAPI.getBookDetails(params.id);
  const summaries = await db.getSummaryByBookId(params.id);
  const isInBookshelf = await db.getBookById(params.id);

  return {
    book,
    summaries,
    isInBookshelf,
  };
}
