import { Link } from "react-router-dom";

import styles from "../pages/theam.module.css";

import bootcamp1 from "../img/bootcamp1.jpg";
import bootcamp2 from "../img/bootcamp2.jpg";
import bootcamp3 from "../img/bootcamp3.jpg";
import { getToken } from "../../util/auth";

function Bootcamps() {
  const token = getToken();

  return (
    <>
      <h1 className={styles.logo}>
        Latest Bootcamps
        <Link to="form" style={{ float: "right", marginRight: "40px" }}>
          +
        </Link>
      </h1>
      <div className={styles.bootcamp}>
        <div className={styles["bootcamp-text"]}>
          <h2>Devworks Bootcamp</h2>
          <p>
            Devworks is a full stack JavaScript Bootstrap located in the heart
            of Bangalore that focuses on the technologies you need to get a high
            paying job as a web developer and shape your future.
          </p>
          <span>Web Development, UI/UX, Mobile Development</span>
          <span>Venue: Bangalore, India</span>
          <span>⭐⭐⭐⭐⭐</span>
          <br />
          <h4>
            Create profile for
            <Link className={styles.apply} to={token ? "/dashboard" : "/login"}>
              Apply
            </Link>
          </h4>
        </div>
        <img src={bootcamp1} alt="bootcamp1" />
      </div>

      <div className={styles.bootcamp}>
        <div className={styles["bootcamp-text"]}>
          <h2>ModernTech Bootcamp</h2>
          <p>
            ModernTech has one goal, and that is to make you a rockstar Web or
            mobile developer and/or expert in Artificial Intelligence with a six
            figure salary. We teach both development and Artificial
            Intelligence.
          </p>
          <span>
            Web Development, Mobile Development, Artificial Intelligence
          </span>
          <span>Venue: New Delhi, India</span>
          <span>⭐⭐⭐⭐✰</span>
          <br />
          <h4>
            Create profile for
            <Link className={styles.apply} to={token ? "/dashboard" : "/login"}>
              Apply
            </Link>
          </h4>
        </div>
        <img src={bootcamp3} alt="bootcamp3" />
      </div>

      <div className={styles.bootcamp}>
        <div className={styles["bootcamp-text"]}>
          <h2>Codemasters</h2>
          <p>
            Is coding your passion? Codemasters will provides you best plateform
            and tools to learn Machine Learming or Data science to land you in
            your dream companies or in big MNCs.We specialize in Machine
            learning and data science.
          </p>
          <span>Machine learning, Data Science,Marketing</span>
          <span>Venue: Pune, India</span>
          <span>⭐⭐⭐⭐✰</span>
          <br />
          <h4>
            Create profile for
            <Link className={styles.apply} to={token ? "/dashboard" : "/login"}>
              Apply
            </Link>
          </h4>
        </div>
        <img src={bootcamp2} alt="bootcamp2" />
      </div>
    </>
  );
}

export default Bootcamps;
