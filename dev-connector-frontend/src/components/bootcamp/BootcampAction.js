import { redirect } from "react-router-dom";
import { getToken } from "../../util/auth";

export async function BootcampAction({ requesst }) {
  const token = getToken();
  const data = await requesst.formData();

  const bootcampData = {
    msg: data.get("msg"),
    location: data.get("location"),
    param: data.get("param"),
  };

  const response = await fetch("http://localhost:5000/api/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(bootcampData),
  });

  console.log(response);

  if (!response.ok) {
    console.log(response);
    return response;
  }

  return redirect("/bootcamps");
}
