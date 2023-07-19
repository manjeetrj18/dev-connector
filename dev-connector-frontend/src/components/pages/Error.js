import MainNavigation from "./MainNavigation";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong";

  if (error.status === 400) {
    message = error.status.message;
  }

  if (error.status === 500) {
    message = error.status.message;
  }

  if(error.status === 404){
    message = error.status.message
  }

  if (error.status === 401) {
    message = 'Unauthorized, Please login!';
  }

  return (
    <>
      <MainNavigation />
      <h1 style={{ color: "red", textAlign: "center" }}>{title}</h1>
      <h2 style={{ color: "red", textAlign: "center" }}>{message}</h2>
    </>
  );
}

export default ErrorPage;
