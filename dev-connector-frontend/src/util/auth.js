import { redirect } from "react-router-dom";

export function getToken() {
  const token = sessionStorage.getItem("token");
  return token;
}

export function getProfileStatus() {
  const profileStatus = sessionStorage.getItem("profileStatus");

  if (profileStatus === "true") {
    return profileStatus;
  }

  return null;
}

export function logoutAction() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("profileStatus");
  sessionStorage.removeItem("user_id");

  return redirect("/login");
}

export function checkAuthLoader() {
  const token = sessionStorage.getItem("token");
  const profileStatus = sessionStorage.getItem("profileStatus");

  if (!token) {
    return redirect("/resister");
  }

  if (token && !profileStatus) {
    return redirect("/dashboard/createProfile");
  }

  return null;
}
