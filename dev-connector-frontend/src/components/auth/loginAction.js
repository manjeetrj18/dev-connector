import { redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const data = await request.formData();

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const responseData = await response.json();

  if (!response.ok) {
    return responseData;
  }

  const token = responseData.token;
  sessionStorage.setItem("token", token);

  const profileStatus = responseData.user.isProfile;
  sessionStorage.setItem("profileStatus", profileStatus);

  return redirect("/dashboard");
}
