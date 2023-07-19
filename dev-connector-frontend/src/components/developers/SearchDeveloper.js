import { FaSearch } from "react-icons/fa";
import classes from "./SearchBar.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";
import styles from "../developers/FindDevelopers.module.css";

function SearchDeveloper(props) {
  const [input, setInput] = useState("");

  return (
    <>
      <div className={classes["input-wrapper"]}>
        <FaSearch className={classes["search-icon"]} />
        <input
          type="text"
          placeholder="Search Developer"
          className={classes.input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className={styles.body}>
        <div>
          <ul>
            {props.profileData
              .filter((profile) => {
                if (input === "") {
                  return profile;
                } else if (
                  profile.user.name
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  profile.location.toLowerCase().includes(input.toLowerCase())
                ) {
                  return profile;
                }
              })
              .map((profile) => (
                <li
                  className={styles["card-container"]}
                  key={profile._id}
                  style={{ marginBottom: "40px" }}
                >
                  <img
                    className={styles.round}
                    src={profile.user.avatar}
                    alt={profile._id}
                  />
                  <h3>{profile.user.name}</h3>
                  <h6>{profile.location}</h6>
                  <p>{`${profile.status} at ${profile.company}`}</p>
                  <div className={styles.skills}>
                    <h6>Skills</h6>
                    <h5 className={styles.li}>{profile.skills}</h5>
                    <h5>Contact :</h5>
                    <p>
                      {profile.website ? profile.website : "demo@gmail.com"}
                    </p>
                  </div>
                  <p>
                    <Link to={profile.handle} className={styles.button}>
                      View Profile
                    </Link>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchDeveloper;
