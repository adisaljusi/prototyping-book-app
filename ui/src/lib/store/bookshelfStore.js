import { writable } from "svelte/store";

export const bookshelf = writable([]);

export function addBook(book) {
  bookshelf.update((books) => [...books, book]);
}

export function removeBook(book) {
  bookshelf.update((books) => {
    const updatedBooks = books.filter((b) => b.id !== book.id);
    return [...updatedBooks];
  });
}
