import { redirect, json } from "react-router-dom";
import { getToken } from "../../../util/auth";

export async function EducationAction({ request }) {
  const token = getToken();
  const data = await request.formData();

  const educationData = {
    school: data.get("institute"),
    degree: data.get("education"),
    fieldofstudy: data.get("duration"),
    from: data.get("startingDate"),
  };

  const response = await fetch("http://localhost:5000/api/profile/education", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(educationData),
  });

  console.log(response);

  if (!response.ok) {
    return response;
  }

  return redirect("/dashboard");
}
