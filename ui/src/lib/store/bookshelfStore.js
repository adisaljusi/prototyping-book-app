import { writable } from "svelte/store";

export function setSelectedBook(book) {
  selectedBook.set(book);
}

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

export function updateBook(book) {
  bookshelf.update((books) =>
    books.map((b) => (b.id === book.id ? { ...b, ...book } : b))
  );
}

export const selectedBook = writable(null);

export const bookShelfActions = {
  async addToBookshelf(book) {
    const response = await fetch("/api/bookshelf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });

    if (response.ok) {
      const newBook = await response.json();
      addBook(book);
    } else {
      console.error("Failed to add book to bookshelf");
    }
  },
  async removeFromBookshelf(book) {
    const response = await fetch(`/api/bookshelf/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (response.ok) {
      removeBook(book);
    } else {
      console.error("Failed to remove book from bookshelf");
    }
  },
  async updateBook(book) {
    const response = await fetch(`/api/bookshelf/id=${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (response.ok) {
      const updatedBook = await response.json();
      updateBook(updatedBook);
    } else {
      console.error("Failed to update book with book id", book.id);
    }
  },
};
