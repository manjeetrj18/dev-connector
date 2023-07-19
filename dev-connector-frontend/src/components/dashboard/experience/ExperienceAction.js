import { redirect } from "react-router-dom";

import { getToken } from "../../../util/auth";

export async function ExperienceActions({ request }) {
  const data = await request.formData();

  const experienceDetails = {
    title: data.get("job"),
    company: data.get("company"),
    from: data.get("dateFrom"),
  };

  const token = getToken();

  const response = await fetch("http://localhost:5000/api/profile/experience", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(experienceDetails),
  });

  console.log(response);

  if (!response.ok) {
    return response;
  }

  return redirect("/dashboard");
}
