import { MONGODB_URI } from "$env/static/private";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(MONGODB_URI);
await client.connect();
const db = client.db("Bookshelf");

export async function getMovies() {
  try {
    const moviesCollection = db.collection("movies");
    const movies = await moviesCollection.find({}).toArray();
    const serializedMovies = movies.map((movie) => {
      return {
        ...movie,
        _id: movie._id.toString(),
      };
    });

    return serializedMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function getMovieById(movieId) {
  try {
    const moviesCollection = db.collection("movies");
    const movie = await moviesCollection.findOne({
      _id: new ObjectId(movieId),
    });
    if (!movie) {
      throw new Error("Movie not found");
    }

    return {
      ...movie,
      _id: movie._id.toString(),
    };
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
}

export async function createMovie(movie) {
  try {
    const moviesCollection = db.collection("movies");
    const result = await moviesCollection.insertOne(movie);
  } catch (error) {
    console.error("Error creating movie:", error);
    return null;
  }

  return {
    ...movie,
    _id: movie._id.toString(),
  };
}

export async function deleteMovie(movieId) {
  try {
    const moviesCollection = db.collection("movies");
    const result = await moviesCollection.deleteOne({
      _id: new ObjectId(movieId),
    });
    if (result.deletedCount === 0) {
      throw new Error("Movie not found");
    }
  } catch (error) {
    console.error("Error deleting movie:", error);
    return false;
  }

  return true;
}
