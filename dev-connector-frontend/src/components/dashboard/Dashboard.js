import {
  Link,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

import { useState } from "react";

import styles from "../pages/MainNavigation.module.css";
import CurrentUserDashboard from "./CurrentUserDashboard";
import { getProfileStatus, getToken } from "../../util/auth";

function Dashboard() {
  const [hasEducation, setHasEducation] = useState(true);
  const [hasExprience, setHasExprience] = useState(true);

  const profileStatus = getProfileStatus();

  const userData = useRouteLoaderData("deshboard");

  const submit = useSubmit();

  function profileDeleteHandler() {
    const prompt = window.confirm("Are you sure?");

    if (prompt) {
      submit(null, { method: "delete" });
    }

    sessionStorage.setItem("profileStatus", "false");
    sessionStorage.removeItem('token');
  }

  async function educationDeleteHandler() {
    const prompt = window.confirm("Are you sure?");

    if (prompt) {
      setHasEducation(false);
      const token = getToken();

      const response = await fetch(
        `http://localhost:5000/api/profile/education/${userData.user._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        // error handling
      }
    }
  }

  async function experienceDeleteHandler() {
    const prompt = window.confirm("Are you sure?");

    if (prompt) {
      setHasExprience(false);
      const token = getToken();

      const response = await fetch(
        `http://localhost:5000/api/profile/experience/${userData.user._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        // error handling
      }
    }
  }

  const background = userData ? "#BA8C63" : "white";

  return (
    <>
      <div style={{ backgroundColor: background }}>
        <header className={styles.header}>
          <ul className={styles.list}>
            <li className={styles.li}>
              <Link to="createProfile" style={{ color: "black" }}>
                {userData ? "Update profile" : "Create Profile"}
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="addEducation" style={{ color: "black" }}>
                {userData?.education?.length > 0
                  ? "Update Education"
                  : "Add Education"}
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="addExperience" style={{ color: "black" }}>
                {userData?.experience?.length > 0
                  ? "Update Experience"
                  : "Add Experience"}
              </Link>
            </li>
          </ul>

          {userData && (
            <ul className={styles.list}>
              <li className={styles.li}>
                <button
                  style={{ color: "black" }}
                  onClick={profileDeleteHandler}
                >
                  Delete profile
                </button>
              </li>
              {hasEducation && userData.education.length > 0 && (
                <li className={styles.li}>
                  <button
                    style={{ color: "black" }}
                    onClick={educationDeleteHandler}
                  >
                    Delete Education
                  </button>
                </li>
              )}
              {hasExprience && userData.experience.length > 0 && (
                <li className={styles.li}>
                  <button
                    style={{ color: "black" }}
                    onClick={experienceDeleteHandler}
                  >
                    Delete Experience
                  </button>
                </li>
              )}
            </ul>
          )}
        </header>
        {userData && profileStatus === "true" ? (
          <CurrentUserDashboard
            hasEducation={hasEducation}
            hasExprience={hasExprience}
          />
        ) : (
          <p className={styles.text}>Create your profile to join bootcamp.</p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
