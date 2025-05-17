import { getBookDetails } from "$lib/server/openlibrary_api";

export async function load({ params }) {
  const book = await getBookDetails(params.id);

  return {
    book
  };
}
