import { updateBook } from "$lib/server/db";

import { error, json } from "@sveltejs/kit";

export const PUT = async ({ request, params }) => {
  const bookId = params.id;
  const book = await request.json();
  try {
    const succeeded = await updateBook(bookId, book);
    if (!succeeded) {
      throw new Error("Book not found");
    }
    return json(book);
  } catch (err) {
    console.error("Error updating book :", err);
    error(500, { message: `Failed to update book with id ${bookId}` });
  }
};
