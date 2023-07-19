import { json } from "react-router-dom";

export async function DeveloperDetailsLoader({ _, params }) {
  const handle = params.handle;
  const response = await fetch(
    `http://localhost:5000/api/profile/handle/${handle}`
  );

  console.log(response);

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
