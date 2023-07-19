import { json } from "react-router-dom";
import { getProfileStatus, getToken } from "../../util/auth";

export async function CurrentUserDetailsLoader() {
  const token = getToken();
  const isActive = getProfileStatus()

  if (isActive === 'true') {
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for selected developer profile." },
        {
          status: 500,
        }
      );
    }

    return response;
  }

  return null;
}
