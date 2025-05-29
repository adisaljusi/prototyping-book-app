import { createBook } from "$lib/server/db";

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const bookId = formData.get("title");
    const length = formData.get("length");
    const year = formData.get("year");
    const poster = formData.get("image");
    const actors = formData.get("actors");

    const movie = {
      title,
      length,
      year,
      poster,
      actors: actors.split(",").map((actor) => actor.trim()),
      watchlist: false,
    };

    try {
      const res = await createBook(movie);

      if (res === null) {
        throw new Error("Failed to create movie");
      }

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
  },
};
