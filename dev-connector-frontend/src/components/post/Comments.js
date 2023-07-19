import { Form, Link } from "react-router-dom";
import styles from "../auth/auth.module.css";
import { useState } from "react";

function Comments() {
  const [reply, setReply] = useState("");
  const [replyInputTouched, setInputReplyTouched] = useState(false);

  const replyChangeHandler = function (e) {
    setInputReplyTouched(true);
    setReply(e.target.value);
  };

  let replyInputIsValid = false;

  if (replyInputTouched && reply.trim().length > 0) {
    replyInputIsValid = true;
  }

  return (
    <Form method="post" className={styles.form}>
      <Link to=".." relative="path">
        🢀 <span>Go Back</span>
      </Link>

      <div>
        <label htmlFor="text" className={styles.post} />
        <textarea
          name="text"
          cols="20"
          rows="3"
          placeholder="Add your reply...."
          onChange={replyChangeHandler}
          required
        ></textarea>
      </div>
      <div className={styles.actions}>
        <button>Submit</button>
      </div>
      {replyInputTouched && replyInputIsValid === false && (
        <p className={styles.bump}>Can't submit empty reply.</p>
      )}
    </Form>
  );
}

export default Comments;
