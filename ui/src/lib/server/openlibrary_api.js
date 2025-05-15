const OPENLIB_BASE_URI = "https://openlibrary.org";
const OPENLIB_COVERS_BASE_URI = "https://covers.openlibrary.org/b/id";

const transformBookData = (book) => ({
  id: book.key,
  url: `${OPENLIB_BASE_URI}${book.key}`,
  title: book.title,
  authors: book.author_name,
  year: book.first_publish_year,
  cover_url: `${OPENLIB_COVERS_BASE_URI}/${book.cover_i}-M.jpg`,
});

export const searchBooks = async (query) => {
  const response = await fetch(
    `${OPENLIB_BASE_URI}/search.json?q=${query}&limit=15`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data.docs.map(transformBookData);
};

export const getBookDetails = async (bookId) => {
  const response = await fetch(`${OPENLIB_BASE_URI}/${bookId}.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }
  const data = await response.json();
  return transformBookData(data);
};
