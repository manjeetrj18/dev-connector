import { redirect } from "react-router-dom";
import { getToken } from "../../../util/auth";

export async function ProfileActions({ request }) {
  const data = await request.formData();

  const profileDetails = {
    avatar: data.get("avatar"),
    company: data.get("company"),
    website: data.get("website"),
    location: data.get("location"),
    bio: data.get("profile"),
    status: data.get("jobStatus"),
    githubusername: data.get("github"),
    skills: data.get("skills"),
    social: data.get("socialMedia"),
    handle: data.get("handle"),
  };

  const token = getToken();

  const response = await fetch("http://localhost:5000/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(profileDetails),
  });

  if (!response.ok) {
    return response;
  }

  return redirect("/dashboard");
}

export async function ProfileDetailsLoader() {
  const response = await fetch("http://localhost:5000/api/profile/all");

  const responseData = await response.json();
  console.log(responseData);

  return responseData;
}
