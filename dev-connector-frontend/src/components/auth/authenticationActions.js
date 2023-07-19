import { redirect } from "react-router-dom";

export async function resistrationAction({ request }) {
  const data = await request.formData();

  const resistrationData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    password2: data.get("confirm_password"),
  };

  const response = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resistrationData),
  });

  if (!response.ok) {
    return response;
  }

  return redirect("/login");
}
