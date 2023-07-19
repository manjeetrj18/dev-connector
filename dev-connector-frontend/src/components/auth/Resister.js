import { useState } from "react";

import { Form, Link, useActionData, useNavigation } from "react-router-dom";

import styles from "./auth.module.css";

function Resister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");

  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passIsTouched, setPassIsTouched] = useState(false);
  const [confirmPassIsTouched, setConfirmPassIsTouched] = useState(false);
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

  const navigation = useNavigation();
  const resistering = navigation.state === 'submitting'

  const emailValidation = (e) => {
    setEmailIsTouched(true);
    setEmail(e.target.value);
  };

  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

  let emailIsValid = false;

  if (emailIsTouched && regEx.test(email)) {
    emailIsValid = true;
  }

  const passwordIsValid = passIsTouched && password.trim().length >= 6;

  const passwordValidation = (e) => {
    setPassIsTouched(true);
    setPassword(e.target.value);
  };

  const usernameIsValid = username.trim().length >= 2;

  const usernameValidation = (e) => {
    setNameInputIsTouched(true);
    setUsername(e.target.value);
  };

  const confirmPassValidation = (e) => {
    setConfirmPassIsTouched(true);
    setConfirmPass(e.target.value);
  };

  let confirmPasswordIsValid = false;
  if (confirmPass === password) {
    confirmPasswordIsValid = true;
  }

  let formIsValid = false;

  if (
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const resistrationBackendData = useActionData();

  return (
    <>
      <Form method="post" className={styles.form}>
        <h3>Resister to become a member</h3>
        <br />

        <p>
          <label htmlFor="name">Username</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={usernameValidation}
            required
          />
        </p>
        {nameInputIsTouched && !usernameIsValid && (
          <p className={styles.bump}>
            Username must be atleast 2 character long.
          </p>
        )}

        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={emailValidation}
            required
          />
        </p>
        {resistrationBackendData && resistrationBackendData.email && (
          <p className={styles.bump}>{resistrationBackendData.email}</p>
        )}
        {emailIsTouched && !emailIsValid && (
          <p className={styles.bump}>Please enter a valid email.</p>
        )}

        <p>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            onChange={passwordValidation}
            required
          />
        </p>
        {resistrationBackendData && resistrationBackendData.password && (
          <p className={styles.bump}>{resistrationBackendData.password}</p>
        )}
        {passIsTouched && !passwordIsValid && (
          <p className={styles.bump}>Password must be 6 character long.</p>
        )}

        <p>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            disabled={!passwordIsValid}
            id="confirm_password"
            type="password"
            name="confirm_password"
            autoComplete="off"
            onChange={confirmPassValidation}
            required
          />
        </p>
        {resistrationBackendData && resistrationBackendData.password2 && (
          <p className={styles.bump}>{resistrationBackendData.password2}</p>
        )}
        {confirmPassIsTouched && !confirmPasswordIsValid && (
          <p className={styles.bump}>Incorrect Password</p>
        )}

        <div className={styles.actions}>
          <button disabled={!formIsValid || resistering}>{resistering ? 'Submitting' : 'Resister'}</button>
        </div>
        <br />
        <p>
          <samp>Already a menber? </samp>
          <Link to="/login">Login</Link>
        </p>
      </Form>
    </>
  );
}

export default Resister;
