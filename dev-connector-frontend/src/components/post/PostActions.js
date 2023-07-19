import { redirect } from "react-router-dom";
import { getToken } from "../../util/auth";

export async function PostAction({ request }) {
  const token = getToken();
  const data = await request.formData();

  const postData = {
    text: data.get("text"),
  };

  const response = await fetch("http://localhost:5000/api/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(postData),
  });

  console.log(response);

  if (!response.ok) {
    // return response;
  }

  return redirect("/posts");
}

export async function PostLoader() {
  const token = getToken();

  const response = await fetch("http://localhost:5000/api/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const responseData = await response.json();

  return responseData;
}

export async function PostLike(id) {
  const token = getToken();

  const response = await fetch(`http://localhost:5000/api/posts/like/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

const deleteHandler = async function (post_id) {
  const token = getToken();
  const response = await fetch(`http://localhost:5000/api/posts/${post_id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  console.log(response);
  if (!response.ok) {
    // error handling
  }
};

export default deleteHandler
