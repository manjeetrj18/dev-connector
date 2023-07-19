import { useReducer, useState, useEffect } from "react";

import {
  Form,
  Link,
  useRouteLoaderData,
  useActionData,
} from "react-router-dom";
import styles from "../../auth/auth.module.css";
import { AddProfileInputReducer, initialState } from "./ProfileReducer";
import { getProfileStatus } from "../../../util/auth";

function AddProfile() {
  const profileData = useRouteLoaderData("deshboard");

  const isActive = getProfileStatus();

  const backendErr = useActionData();

  const [formIsValid, setFormIsValid] = useState(false);

  const [inputState, dispatchFun] = useReducer(
    AddProfileInputReducer,
    initialState
  );

  const profileInputHandler = (e) => {
    dispatchFun({ type: "PROFILE", val: e.target.value });
  };

  const professionInputHandler = (e) => {
    dispatchFun({ type: "PROFESSION", val: e.target.value });
  };

  const companynNameChangeHandler = (e) => {
    dispatchFun({ type: "COMPANY_NAME", val: e.target.value });
  };

  const locationChangeHandler = (e) => {
    dispatchFun({ type: "LOCATION", val: e.target.value });
  };

  const skillInputChangeHandler = (e) => {
    dispatchFun({ type: "SKILL", val: e.target.value });
  };

  const githubInputChangeHandler = (e) => {
    dispatchFun({ type: "GITHUB", val: e.target.value });
  };

  const bioChangeHandler = (e) => {
    dispatchFun({ type: "BIO", val: e.target.value });
  };

  const handleInputHandler = (e) => {
    dispatchFun({ type: "HANDLE", val: e.target.value });
  };

  const validateProfession = (e) => {
    dispatchFun({ type: "PROFESSION_INPUT_BLUR" });
  };

  const validateProfle = (e) => {
    dispatchFun({ type: "PROFILE_INPUT_BLUR" });
  };

  const validateCompanyName = (e) => {
    dispatchFun({ type: "COMPANY_INPUT_BLUR" });
  };

  const validateLocation = (e) => {
    dispatchFun({ type: "LOCATION_INPUT_BLUR" });
  };

  const validateSkill = (e) => {
    dispatchFun({ type: "SKILL_INPUT_BLUR" });
  };

  const validateGithub = (e) => {
    dispatchFun({ type: "GITHUB_INPUT_BLUR" });
  };

  const validateBio = (e) => {
    dispatchFun({ type: "BIO_INPUT_BLUR" });
  };

  const validateHandle = (e) => {
    dispatchFun({ type: "HANDLE_INPUT_BLUR" });
  };

  const clearInputFields = () => {
    dispatchFun({ type: "CLEAR_FIELDS" });
  };

  const { isValid: profileIsvalid } = inputState.userProfile;
  const { isValid: professionIsValid } = inputState.profession;
  const { isValid: companyIsValid } = inputState.company;
  const { isValid: locationIsValid } = inputState.location;
  const { isValid: githubIsValid } = inputState.github;
  const { isValid: skillIsValid } = inputState.skill;
  const { isValid: bioIsValid } = inputState.bio;
  const { isValid: handleIsValid } = initialState.handle;

  // console.log(handleIsValid);

  useEffect(() => {
    const checkingFormValidity = setTimeout(() => {
      setFormIsValid(
        profileIsvalid &&
          professionIsValid &&
          companyIsValid &&
          locationIsValid &&
          githubIsValid &&
          skillIsValid &&
          bioIsValid
      );

      return clearTimeout(checkingFormValidity);
    }, 100);
  }, [
    profileIsvalid,
    professionIsValid,
    companyIsValid,
    locationIsValid,
    githubIsValid,
    skillIsValid,
    bioIsValid,
    backendErr,
  ]);

  const submitHandler = () => {
    formIsValid && sessionStorage.setItem("profileStatus", "true");
  };

  return (
    <Form className={styles.form} method="post">
      <Link to=".." relative="path">
        🢀 <span>Go Back</span>
      </Link>

      <h1 style={{ color: "blue" }}>Create Your Profile</h1>
      <h3 style={{ margin: "0.4rem" }}>
        Let's get some information to make your stand out.
      </h3>
      <br />
      <h4>* shows required fields.</h4>
      <br />
      <div>
        <label htmlFor="handle" />
        <input
          id="handle"
          type="text"
          name="handle"
          placeholder="*Enter your unique userhandle"
          defaultValue={profileData ? profileData?.handle : ""}
          onChange={handleInputHandler}
          onBlur={validateHandle}
          required
        />
        {backendErr && backendErr.handle && (
          <p className={styles.bump}>{backendErr.handle}</p>
        )}
        {!backendErr && inputState.handle.isValid === false && (
          <p className={styles.bump}>Please enter your unique handle.</p>
        )}
        <label htmlFor="avatar">Image</label>
        <input
          id="image"
          type="text"
          name="avatar"
          placeholder="*Enter your image link"
          onChange={profileInputHandler}
          onBlur={validateProfle}
          defaultValue={profileData ? profileData?.user?.avatar : ""}
          required
        />
        {inputState.userProfile.isValid === false && (
          <p className={styles.bump}>Please insert your your image link.</p>
        )}
      </div>
      <div>
        <label htmlFor="jobStatus">*Select Professional Status</label>
        <select
          name="jobStatus"
          id="jobStatus"
          required
          onChange={professionInputHandler}
          onBlur={validateProfession}
        >
          <option value="">Select Professional Status</option>
          <option value="student">Student or Learner</option>
          <option value="teacher">Instructor or teacher</option>
          <option value="jd">Junior Developer</option>
          <option value="sd">Senior Developer</option>
          <option value="manager">Manager</option>
          <option value="other">Other</option>
        </select>
        {backendErr && backendErr.status && (
          <p className={styles.bump}>{backendErr.status}</p>
        )}
        {!backendErr && inputState.profession.isValid === false && (
          <p className={styles.bump}>Please select your profession.</p>
        )}
        <small>Give us an idea of where you are at in your career</small>
      </div>
      <div>
        <label htmlFor="company" />
        <input
          placeholder="*Company"
          id="company"
          type="text"
          name="company"
          required
          // value={inputState.company.value}
          onChange={companynNameChangeHandler}
          onBlur={validateCompanyName}
          defaultValue={profileData ? profileData?.company : ""}
        />
        {inputState.company.isValid === false && (
          <p className={styles.bump}>Please enter your valid Company name.</p>
        )}
        <small>Could be your own company or one you work for</small>
      </div>
      <div>
        <label htmlFor="website" />
        <input
          placeholder="Website (Optional)"
          id="website"
          type="text"
          name="website"
          defaultValue={profileData ? profileData?.website : ""}
        />
        <small>Could be your own or your company website</small>
      </div>

      <div>
        <label htmlFor="location" />
        <input
          type="text"
          name="location"
          placeholder="*Location"
          required
          // value={inputState.location.value}
          onChange={locationChangeHandler}
          onBlur={validateLocation}
          defaultValue={profileData ? profileData?.location : ""}
        />
        {inputState.location.isValid === false && (
          <p className={styles.bump}>Please enter your valid address.</p>
        )}
        <small>City and state.</small>
      </div>
      <div>
        <label htmlFor="skills" />
        <input
          type="text"
          placeholder="*Skills"
          name="skills"
          required
          // value={inputState.skill.value}
          onChange={skillInputChangeHandler}
          onBlur={validateSkill}
          defaultValue={profileData ? (profileData?.skills).toString() : ""}
        />
        {backendErr && backendErr.skills && (
          <p className={styles.bump}>{backendErr.skills}</p>
        )}
        {!backendErr && inputState.skill.isValid === false && (
          <p className={styles.bump}>Please enter a valid skill-set.</p>
        )}
        <small>
          Please use comma seprated values(eg. HTML,CSS,Javascript,PHP etc.)
        </small>
      </div>
      <div>
        <label htmlFor="github" />
        <input
          type="text"
          placeholder="*Github Username"
          name="github"
          required
          // value={inputState.github.value}
          onChange={githubInputChangeHandler}
          onBlur={validateGithub}
          defaultValue={
            profileData
              ? profileData?.githubusername
              : isActive
              ? "demo@123"
              : ""
          }
        />
        {inputState.github.isValid === false && (
          <p className={styles.bump}>Please enter a valid Github username.</p>
        )}
        <small>
          If you want your latest repos and a Github link, include your username
        </small>
      </div>
      <div>
        <label htmlFor="socialMedia" />
        <input
          type="text"
          name="socialMedia"
          placeholder="Add Your Social Media Links (Optional)"
          defaultValue={profileData ? profileData?.social : ""}
        />
      </div>
      <div>
        <textarea
          name="profile"
          id="profile"
          cols="40"
          rows="7"
          placeholder="*A short bio of yourself(minimum 100 character)"
          required
          // value={inputState.bio.value}
          onChange={bioChangeHandler}
          onBlur={validateBio}
          defaultValue={profileData ? profileData?.bio : ""}
        />
        {inputState.bio.isValid === false && (
          <p className={styles.bump}>Please tell us a little more about you.</p>
        )}
        <small>Tell us a little about yourself</small>
      </div>
      <div className={styles.actions}>
        <Link to=".." relative="path">
          Back
        </Link>
        <button onClick={submitHandler}>
          {profileData ? "Update" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default AddProfile;
