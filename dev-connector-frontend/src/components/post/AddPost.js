import { Form } from "react-router-dom";
import { useState } from "react";

import styles from "../auth/auth.module.css";

function AddPost() {
  const [post, setPost] = useState("");
  const [postIsTouched, setPostIsTouched] = useState(false);

  const postValidation = (e) => {
    setPostIsTouched(true);
    setPost(e.target.value);
  };

  let postIsValid = false;
  if (postIsTouched && post.trim().length >= 1) {
    postIsValid = true;
  }

  return (
    <Form method="post" className={styles.form}>
      <h2>Welcome to the community.</h2>
      <div>
        <label htmlFor="text" className={styles.post}>
          Say something....
        </label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Create a post"
          required
          onChange={postValidation}
        ></textarea>
        {postIsTouched && postIsValid === false && (
          <p className={styles.bump}>Can't submit empty post.</p>
        )}
      </div>
      <div className={styles.actions}>
        <button
          disabled={!postIsTouched || postIsValid === false}
        >
          Submit
        </button>
      </div>
    </Form>
  );
}

export default AddPost;
