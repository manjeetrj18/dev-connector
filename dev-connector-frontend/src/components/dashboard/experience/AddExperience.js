import { useReducer, useState, useEffect } from "react";

import { Form, Link, useRouteLoaderData, useActionData } from "react-router-dom";

import styles from "../../auth/auth.module.css";

import {
  AddexperienceInputReducer,
  addExperienceInitialValues,
} from "./ExperienceReducer";

function AddExperience() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputState, dispatchFun] = useReducer(
    AddexperienceInputReducer,
    addExperienceInitialValues
  );

  const experienceData = useRouteLoaderData('deshboard')?.experience[0]
  // console.log(experienceData);

  const backendErr = useActionData();

  let day = new Date(experienceData?.from).getDate();
  day < 10 ? (day = `0${day}`) : (day = day);

  let month = new Date(experienceData?.from).getMonth() + 1;
  month < 10 ? (month = `0${month}`) : (month = month);

  let year = new Date(experienceData?.from).getFullYear();

  const date = `${year}-${month}-${day}`;

  const location = useRouteLoaderData("deshboard")?.location;

  const { isValid: jobIsValid } = inputState.job;
  const { isValid: companyIsValid } = inputState.company;
  const { isValid: locationIsValid } = inputState.location;
  const { isValid: experienceIsValid } = inputState.experience;
  const { isValid: jobDescriptionIsValid } = inputState.job_description;
  const { isValid: dateIsvalid } = inputState.date;

  useEffect(() => {
    const checkingFormValidity = setTimeout(() => {
      setFormIsValid(
        jobIsValid &&
          companyIsValid &&
          locationIsValid &&
          experienceIsValid &&
          jobDescriptionIsValid &&
          dateIsvalid 
      );
    }, 100);

    return () => {
      clearTimeout(checkingFormValidity);
    };
  }, [
    jobIsValid,
    companyIsValid,
    locationIsValid,
    experienceIsValid,
    jobDescriptionIsValid,
    dateIsvalid
  ]);

  const jobInputHandler = (e) => {
    dispatchFun({ type: "JOB", val: e.target.value });
  };

  const validateJobHandler = (e) => {
    dispatchFun({ type: "JOB_INPUT_BLUR" });
  };

  const companyInputHandler = (e) => {
    dispatchFun({ type: "COMPANY", val: e.target.value });
  };

  const validateCompanyHandler = (e) => {
    dispatchFun({ type: "COMPANY_INPUT_BLUR" });
  };

  const locationInputHandler = (e) => {
    dispatchFun({ type: "LOCATION", val: e.target.value });
  };

  const validateLocationHandler = (e) => {
    dispatchFun({ type: "LOCATION_INPUT_BLUR" });
  };

  const experienceInputHandler = (e) => {
    dispatchFun({ type: "EXPERIENCE", val: e.target.value });
  };

  const validateExperienceHandler = (e) => {
    dispatchFun({ type: "EXPERIENCE_INPUT_BLUR" });
  };

  const jobDescriptionInputHandler = (e) => {
    dispatchFun({ type: "JOB_DESCRIPTION", val: e.target.value });
  };

  const validateJobDescriptionHandler = (e) => {
    dispatchFun({ type: "JOB_DESCRIPTION_INPUT_BLUR" });
  };

  const dateInputHandler = (e) => {
    dispatchFun({ type: "DATE", val: e.target.value });
  };

  const validateDateHandler = (e) => {
    dispatchFun({ type: "DATE_INPUT_BLUR" });
  };

  // const clearInputFields = () => {
  //   dispatchFun({ type: "CLEAR_FIELDS" });
  // };

  // function formSubmitHandler() {
  //   clearInputFields();
  // }

  return (
    <Form method="post" className={styles.form}>
      <Link to=".." relative="path">
        🢀 <span>Go Back</span>
      </Link>

      <h1 style={{ color: "blue" }}>Add Your Job Experience</h1>
      <h3>
        Add any developer/programming positions that you have had in past.
      </h3>
      <br />
      <h4>* shows required fields.</h4>
      <br />
      <div>
        <label htmlFor="institute" />
        <input
          placeholder="*Job Title"
          id="job"
          type="text"
          name="job"
          // value={inputState.job.value}
          onChange={jobInputHandler}
          onBlur={validateJobHandler}
          defaultValue={experienceData ? experienceData?.title : ''}
          required
        />
        {backendErr && backendErr.title && (
          <p className={styles.bump}>{backendErr.title}</p>
        )}
        {!backendErr && !formIsValid && !inputState.job.isValid && (
          <p className={styles.bump}>{inputState.job.errMsg}</p>
        )}
      </div>
      <div>
        <label htmlFor="company" />
        <input
          placeholder="*Company/Companies"
          id="company"
          type="text"
          name="company"
          // value={inputState.company.value}
          onChange={companyInputHandler}
          onBlur={validateCompanyHandler}
          defaultValue={experienceData ? experienceData?.company : ''}
          required
        />
        {backendErr && backendErr.company && (
          <p className={styles.bump}>{backendErr.company}</p>
        )}
        {!backendErr && !inputState.company.isValid && (
          <p className={styles.bump}>{inputState.company.errMsg}</p>
        )}
      </div>
      <div>
        <label htmlFor="dateFrom">Current Company joining date</label>
        <input
          type="date"
          name="dateFrom"
          onChange={dateInputHandler}
          onBlur={validateDateHandler}
          defaultValue={experienceData ? date : ''}
          required
        />
        {backendErr && backendErr.from && (
          <p className={styles.bump}>{backendErr.from}</p>
        )}
        {!backendErr && !inputState.date.isValid && (
          <p className={styles.bump}>{inputState.date.errMsg}</p>
        )}
      </div>
      <div>
        <label htmlFor="location" />
        <input
          type="text"
          name="location"
          placeholder="*Last job Location"
          // value={inputState.location.value}
          onChange={locationInputHandler}
          onBlur={validateLocationHandler}
          defaultValue={experienceData ? location : ''}
          required
        />
        {!inputState.location.isValid && (
          <p className={styles.bump}>{inputState.location.errMsg}</p>
        )}
      </div>
      <div>
        <label htmlFor="experience" />
        <input
          type="number"
          name="experience"
          placeholder="*Total job experience (in years)"
          // value={inputState.experience.value}
          onChange={experienceInputHandler}
          onBlur={validateExperienceHandler}
          required
        />
        {!inputState.experience.isValid && (
          <p className={styles.bump}>{inputState.experience.errMsg}</p>
        )}
      </div>
      <div>
        <textarea
          name="job-description"
          id="job-description"
          cols="40"
          rows="7"
          placeholder="Job Description (minimum 20 characters)"
          // value={inputState.job_description.value}
          onChange={jobDescriptionInputHandler}
          onBlur={validateJobDescriptionHandler}
          required
        ></textarea>
        {!inputState.job_description.isValid && (
          <p className={styles.bump}>{inputState.job_description.errMsg}</p>
        )}
      </div>
      <div className={styles.actions}>
        <Link to=".." relative="path">
          Back
        </Link>
        <button >{experienceData ? 'Update' : 'Submit'}</button>
      </div>
    </Form>
  );
}

export default AddExperience;
