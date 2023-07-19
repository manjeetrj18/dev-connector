import { Form, Link, useActionData } from "react-router-dom";
import styles from "../auth/auth.module.css";

function AddBootcamp() {
  return (
    <Form className={styles.form}>
      <Link to=".." relative="path">
        🢀 <span>Go Back</span>
      </Link>
      <h1>Add new Bootcamp here.</h1>
      <div>
        <label htmlFor="msg">Bootcamp name</label>
        <input
          type="text"
          name="msg"
          placeholder="Enter bootcamp name"
          required
        />
      </div>
      <div>
        <label htmlFor="location">Bootcamp location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter bootcamp vanue"
          required
        />
      </div>
      <div>
        <label htmlFor="param">Bootcamp description</label>
        <textarea
          name="param"
          cols="30"
          rows="10"
          placeholder="Please add a short description about bootcamp."
          required
        ></textarea>
      </div>
      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </Form>
  );
}

export default AddBootcamp;
