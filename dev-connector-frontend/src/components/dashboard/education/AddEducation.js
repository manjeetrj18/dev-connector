import {
  Form,
  Link,
  useRouteLoaderData,
  useActionData,
} from "react-router-dom";

import { useFormik } from "formik";

import styles from "../../auth/auth.module.css";
import { AddEducationValidation } from "../../../schemas/AddEducationValidation";

const initialValues = {
  institute: "",
  education: "",
  certificate: "",
  duration: "",
  startingDate: "",
  finishingDate: "",
  eduction_description: "",
};

function AddEducation() {
  const educationDetails = useRouteLoaderData("deshboard")?.education[0];

  const backendErr = useActionData();

  let day = new Date(educationDetails?.from).getDate();
  day < 10 ? (day = `0${day}`) : (day = day);

  let month = new Date(educationDetails?.from).getMonth() + 1;
  month < 10 ? (month = `0${month}`) : (month = month);

  let year = new Date(educationDetails?.from).getFullYear();

  const date = `${year}-${month}-${day}`;

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddEducationValidation,
    onSubmit: (_, action) => {
      action.resetForm();
    },
  });

  let formIsValid = false;
  if (
    !Formik.errors.institute &&
    !Formik.errors.education &&
    !Formik.errors.certificate &&
    !Formik.errors.duration &&
    !Formik.errors.startingDate &&
    !Formik.errors.finishingDate &&
    !Formik.errors.eduction_description
  ) {
    formIsValid = true;
  }

  return (
    <Form method="post" className={styles.form}>
      <Link to=".." relative="path">
        🢀 <span>Go Back</span>
      </Link>

      <h1 style={{ color: "blue" }}>Add Your Education</h1>
      <h3>Share your learning journey.</h3>
      <br />
      <h4>* shows fields.</h4>
      <br />
      <div>
        <label htmlFor="institute" />
        <input
          placeholder="*Institute or Bootcamp name"
          id="institute"
          type="text"
          name="institute"
          // value={Formik.values.institute}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          defaultValue={educationDetails ? educationDetails?.school : ""}
          required
        />
        {backendErr && backendErr.school && (
          <p className={styles.bump}>{backendErr.school}</p>
        )}
        {!backendErr && Formik.touched.institute && (
          <p className={styles.bump}>{Formik.errors.institute}</p>
        )}
      </div>
      <div>
        <label htmlFor="education">*Select your Education</label>
        <select
          name="education"
          id="education"
          // value={Formik.values.education}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          defaultValue={educationDetails ? educationDetails?.degree : ""}
          required
        >
          <option value="" disabled>
            Select your Education
          </option>
          <option value="computer">BCa/MCa</option>
          <option value="science">BSc/MSc</option>
          <option value="arts">BA/MA</option>
          <option value="other">Other</option>
        </select>
        {backendErr && backendErr.fieldofstudy && (
          <p className={styles.bump}>{backendErr.fieldofstudy}</p>
        )}
        {!backendErr && Formik.touched.education && (
          <p className={styles.bump}>{Formik.errors.education}</p>
        )}
      </div>
      <div>
        <label htmlFor="certificate">Choose Certificate</label>
        <input
          id="certificate"
          type="file"
          name="certificate"
          value={Formik.values.certificate}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.certificate && (
          <p className={styles.bump}>{Formik.errors.certificate}</p>
        )}
      </div>
      <div>
        <label htmlFor="duration" />
        <input
          type="number"
          name="duration"
          autoComplete="off"
          placeholder="*Course duration(in months)"
          // value={Formik.values.duration}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          defaultValue={educationDetails ? educationDetails?.fieldofstudy : ""}
          required
        />
        {Formik.errors.duration && Formik.touched.duration && (
          <p className={styles.bump}>{Formik.errors.duration}</p>
        )}
        <p></p>
        <label htmlFor="startingDate">From date:</label>
        <input
          className={styles.date}
          name="startingDate"
          type="date"
          // value={Formik.values.startingDate}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          defaultValue={date}
          required
        />
        {backendErr && backendErr.from && (
          <p className={styles.bump}>{backendErr.from}</p>
        )}
        {!backendErr && Formik.touched.startingDate && (
          <p className={styles.bump}>{Formik.errors.startingDate}</p>
        )}
      </div>
      <div>
        <label htmlFor="finishingDate">To date : </label>
        <input
          className={styles.date}
          name="finishingDate"
          type="date"
          value={Formik.values.finishingDate}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          required
        />
        {Formik.touched.finishingDate && (
          <p className={styles.bump}>{Formik.errors.finishingDate}</p>
        )}
      </div>
      <div>
        <textarea
          name="eduction_description"
          id="eduction_description"
          cols="40"
          rows="7"
          placeholder="Education Description"
          value={Formik.values.eduction_description}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          required
        ></textarea>
        {Formik.touched.eduction_description && (
          <p className={styles.bump}>{Formik.errors.eduction_description}</p>
        )}
      </div>
      <div className={styles.actions}>
        <Link to=".." relative="path">
          Back
        </Link>
        <button>{educationDetails ? "Update" : "Submit"}</button>
      </div>
    </Form>
  );
}

export default AddEducation;
