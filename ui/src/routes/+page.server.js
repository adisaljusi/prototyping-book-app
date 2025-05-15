import { userId } from "$lib/store/userStore";

export async function load({ cookies }) {
  let id = cookies.get("user_id");
  console.log('here?');
  
  if (!id) {
    id = crypto.randomUUID();

    cookies.set("user_id", id, { path: "/" });
  }

  userId.set(id);

  return {
    userId: id,
  };
}
