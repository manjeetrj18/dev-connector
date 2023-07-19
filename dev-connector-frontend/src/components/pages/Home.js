import { useNavigate } from "react-router-dom";

import styles from "./theam.module.css";

function Home() {
  const navigate = useNavigate();
  function findDevelopers() {
    navigate("bootcamps");
  }

  return (
    <>
      <div className={styles.intro}>
        <h1>Find a Code Bootcamp</h1>
        <h5>Find,rate and review our Bootcamp </h5>
        <br /> <br />
        <button onClick={findDevelopers}>Find Bootcamp</button>
      </div>
    </>
  );
}

export default Home;
