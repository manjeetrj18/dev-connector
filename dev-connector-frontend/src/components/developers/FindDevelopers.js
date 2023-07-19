import { useLoaderData } from "react-router-dom";
import SearchDeveloper from "./SearchDeveloper";

function FindDevelopers() {
  const profileData = useLoaderData();
  console.log(profileData);

  return (
    <>
      <SearchDeveloper profileData={profileData} />
    </>
  );
}

export default FindDevelopers;
