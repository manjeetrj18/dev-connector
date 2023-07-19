import { useState } from "react";

import { Form, Link, useActionData, useNavigation } from "react-router-dom";

import styles from "./auth.module.css";
import Spinner from "../spinner/Spinner";

function Login() {
  const navigation = useNavigation();
  const loggingIn = navigation.state === "submitting";
  const [email, setEmail] = useState("");

  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passIsTouched, setPassIsTouched] = useState(false);

  const [password, setPassword] = useState("");

  const emailValidation = (e) => {
    setEmailIsTouched(true);
    setEmail(e.target.value);
  };

  let emailIsValid = false;

  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

  if (emailIsTouched && regEx.test(email)) {
    emailIsValid = true;
  }

  const passwordIsValid = passIsTouched && password.trim().length >= 6;

  const passwordValidation = (e) => {
    setPassIsTouched(true);
    setPassword(e.target.value);
  };

  const loginBackendData = useActionData();

  let formIsValid = false;
  if (emailIsValid && passwordIsValid && !loginBackendData) {
    formIsValid = true;
  }

  return (
    <Form method="post" className={styles.form}>
      <h2>Welcome back!</h2>
      <span>Please Login to access account.</span>
      <br /> <br />
      {loginBackendData && loginBackendData.email && (
        <p className={styles.bump}>{loginBackendData.email}</p>
      )}
      {loggingIn && <Spinner />}
      <p>
        <label htmlFor="email">Email</label>
        <input
          onChange={emailValidation}
          id="email"
          type="email"
          name="email"
          required
        />
      </p>
      {emailIsTouched && !emailIsValid && (
        <p className={styles.bump}>Please enter a valid email.</p>
      )}
      <p>
        <label htmlFor="password">Password</label>
        <input
          onChange={passwordValidation}
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          required
        />
      </p>
      {loginBackendData && loginBackendData.password && (
        <p className={styles.bump}>{loginBackendData.password}</p>
      )}
      {passIsTouched && !passwordIsValid && (
        <p className={styles.bump}>Please enter a valid Password.</p>
      )}
      <div className={styles.actions}>
        <button disabled={!emailIsValid || !passwordIsValid || loggingIn}>
          {loggingIn ? "LoggingIn" : "Next"}
        </button>
      </div>
      <p>
        <samp>Not a menber? </samp>
        <Link to="/resister">Resister</Link>
      </p>
    </Form>
  );
}

export default Login;
