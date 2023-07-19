import { useRouteLoaderData } from "react-router-dom";
import { getProfileStatus } from "../../util/auth";

import styles from "./CurrentUserDashboard.module.css";

function CurrentUserDashboard(props) {
  const hasEducation = props.hasEducation;
  const hasExprience = props.hasExprience;

  const userData = useRouteLoaderData('deshboard');

  let isActive = getProfileStatus();
  userData ? (isActive = true) : (isActive = false);

  const experience = userData.experience.map((exp) => exp)[0];
  const education = userData.education.map((edu) => edu)[0];

  sessionStorage.setItem("user_id", userData.user._id);

  return (
    <>
      {userData && isActive === true ? (
        <div className={styles["developer-backgroumd"]}>
          <div className={styles.content}>
            <img
              src={userData.user.avatar}
              alt={userData.user._id}
              className={[styles.image]}
            />
            <ul className={styles.text}>
              {userData.user.name}, {userData.location}
            </ul>
            <div className={styles.text1}>
              {experience && hasExprience && (
                <div>
                  ({experience.title} at {experience.company})
                </div>
              )}
              <br />
              <ul>
                <li>skills : {userData.skills}</li>
              </ul>
              <br />
              <div
                className={styles["education-box"]}
                style={{ color: "black" }}
              >
                <h3>Education Details</h3>
                {education && hasEducation ? (
                  <div>
                    <h4 className={styles.h4}>
                      Institute name : {education.school}
                    </h4>
                    <h4 className={styles.h4}>Stream : {education.degree}</h4>
                    <h4 className={styles.h4}>
                      Course duration : {education.fieldofstudy}
                    </h4>
                  </div>
                ) : (
                  <h4 style={{ color: "red" }}>No education details found</h4>
                )}
              </div>
              <br />
              <h5 style={{ color: "white" }}>About : {userData.bio}</h5>
            </div>
          </div>
          <br />
        </div>
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>
          No user profile found.
        </p>
      )}
    </>
  );
}

export default CurrentUserDashboard;
