import { MONGODB_URI } from "$env/static/private";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(MONGODB_URI);
await client.connect();
const db = client.db("Bookshelf");

export async function getBooks(query = {}) {
  try {
    const booksCollection = db.collection("books");
    const books = await booksCollection.find(query).toArray();
    return books.map((book) => ({
      ...book,
      _id: book._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export async function getBookById(bookId) {
  try {
    const booksCollection = db.collection("books");
    const book = await booksCollection.findOne({
      id: bookId,
    });
    if (!book) {
      throw new Error("Book not found");
    }
    return {
      _id: book._id.toString(),
      url: book.url,
      isRead: book.isRead,
    };
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    return null;
  }
}

export async function createBook(book, isRead = false) {
  try {
    const booksCollection = db.collection("books");
    const result = await booksCollection.insertOne({ ...book, isRead });

    if (!result.insertedId) {
      throw new Error("Failed to insert book");
    }

    return {
      _id: result.insertedId.toString(),
      ...book,
      isRead,
    };
  } catch (error) {
    console.error("Error creating book:", error);
    return null;
  }
}

export async function deleteBook(bookId) {
  try {
    if (bookId === undefined || bookId === null) {
      throw new Error("Invalid book ID");
    }

    const booksCollection = db.collection("books");
    const query = {
      id: bookId,
    };
    const result = await booksCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      throw new Error("Book not found");
    }
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
}
