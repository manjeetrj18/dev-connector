import { redirect } from "react-router-dom";
import { getToken } from "../../util/auth";

export async function CommentAction({ request, params }) {
  const token = getToken();

  const data = await request.formData();
  const id = params._id;

  const commentData = {
    text: data.get("text"),
  };

  const response = await fetch(
    `http://localhost:5000/api/posts/comment/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(commentData),
    }
  );

  if (!response.ok) {
    // error
  }

  console.log("res", response);

  return redirect("/posts");
}
