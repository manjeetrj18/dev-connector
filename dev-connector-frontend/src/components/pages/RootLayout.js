import { useEffect } from "react";
import { Outlet, useSubmit } from "react-router-dom";
import { getToken } from "../../util/auth";
import MainNavigation from "./MainNavigation";

function RootLayout() {
  const token = getToken();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
