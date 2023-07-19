import * as Yup from "yup";

export const AddEducationValidation = Yup.object({
  institute: Yup.string()
    .min(2)
    .required("Please enter your institute or bootcamp name."),
  education: Yup.string().required("Please select your education."),
  certificate: Yup.string().required(
    "Please select a certificate file."
  ),
  duration: Yup.number().max(50).required("Please enter your Course duration"),
  startingDate: Yup.string().required(
    "Please enter your course starting date."
  ),
  finishingDate: Yup.string().required(
    "Please enter your course finishing date."
  ),
  eduction_description: Yup.string()
    .min(10)
    .required("Please tell us about Your education in minimum 10 characters."),
});
