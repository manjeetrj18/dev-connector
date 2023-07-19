import { getToken } from "../../util/auth";

export async function EditDeshboard() {
  const token = getToken();

  const response = await fetch("http://localhost:5000/api/profile/", {
    headers: {
      Authorization: token,
    },
  });

  const responseData = await response.json();
  // console.log(responseData);

  return responseData;
}
