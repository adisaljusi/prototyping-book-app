import { createBook, createSummary } from "$lib/server/db";

export const actions = {
  create: async ({ request, params }) => {
    const formData = await request.formData();

    const bookId = params.id;
    const title = formData.get("title");
    const text = formData.get("summary-text");
    const type = formData.get("summary-type");

    const summary = {
      title,
      bookId,
      text,
      type,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      const res = await createSummary(summary);

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
