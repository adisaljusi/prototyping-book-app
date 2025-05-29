import { createBook, deleteBook, getBooks } from "$lib/server/db";
import { addBook } from "$lib/store/bookshelfStore";

import { error, json } from "@sveltejs/kit";

export const POST = async ({ request }) => {
  const book = await request.json();

  const books = await getBooks();
  const bookExists = books.some((existingBook) => existingBook.id === book.id);

  if (bookExists) {
    error(400, "Book already exists in the bookshelf");
  }

  try {
    await createBook(book);
  } catch (error) {
    console.error("Error adding book to bookshelf:", error);
    error(500, "Failed to add book to bookshelf");
  }

  return json(book);
};

export const DELETE = async ({ request }) => {
  const book = await request.json();

  try {
    await deleteBook(book.id);
  } catch (error) {
    console.error("Error adding book to bookshelf:", error);
    error(500, "Failed to add book to bookshelf");
  }

  return json(book);
};
