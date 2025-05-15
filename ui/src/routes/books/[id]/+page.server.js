import { getBookDetails } from "$lib/server/openlibrary_api";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const book = await getBookDetails(params.id);

  return {
    book
  };
}
