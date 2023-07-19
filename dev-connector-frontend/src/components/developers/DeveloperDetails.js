import {useLoaderData } from "react-router-dom";
import { useState } from "react";

import styles from "./DeveloperDetails.module.css";

function DeveloperDetails() {
  const profileData = useLoaderData();
  console.log(profileData);

  const experience = profileData.experience.map((exp) => exp)[0];
  const education = profileData.education.map((edu) => edu)[0];

  const date = Intl.DateTimeFormat('en-In',{month:'long', year: 'numeric'}).format(new Date(profileData.date));

  const [isConnected, setIsConnected] = useState(false)

  function connectionHandler(){
      setIsConnected(true)
  }

  return (
    <div className={styles["big-box"]}>
      <div>
        <img
          src={profileData.user.avatar}
          alt={profileData.user._id}
          className={styles.image}
        />
        <br />
        <h3 className={styles.text1}>
          {profileData.user.name}, {profileData.location}
        </h3>
        <div className={styles.text1}>
          {experience && (
            <div>
              ({experience.title} at {experience.company})
            </div>
          )}
          <div>Working in current company : since {date}</div>
          <br />
          <ul>
            <li>skills : {profileData.skills}</li>
          </ul>
          <br />
          <div style={{ color: "black" }}>
            <h3>Education Details</h3>
            {education ? (
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
          <h5 >About : {profileData.bio}</h5>
        </div>
        <button className={styles.connect} onClick={connectionHandler} >{isConnected ? 'Connected' : 'Connect'}</button>
      </div>
      <br />
    </div>
  );
}

export default DeveloperDetails;
