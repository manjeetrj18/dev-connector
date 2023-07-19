import { redirect } from "react-router-dom";
import { getToken } from "../../util/auth";

export async function DeleteProfileAction() {
  const token = getToken();

  const response = await fetch("http://localhost:5000/api/profile", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    // error handling
  }

  return redirect("/resister");
}
