export const addExperienceInitialValues = {
  job: { value: "", isValid: null, errMsg: "" },
  company: { value: "", isValid: null, errMsg: "" },
  location: { value: "", isValid: null, errMsg: "" },
  experience: { value: "", isValid: null, errMsg: "" },
  job_description: { value: "", isValid: null, errMsg: "" },
  date: { value: "", isValid: null, errMsg: "" },
};

export const AddexperienceInputReducer = (state, action) => {
  switch (action.type) {
    case "JOB":
      return {
        ...state,
        job: {
          ...state.job,
          value: action.val,
          isValid: action.val.trim().length >= 2,
          errMsg: "Please enter your valid job position.",
        },
      };
    case "JOB_INPUT_BLUR":
      return {
        ...state,
        job: {
          ...state.job,
          value: state.job.value,
          isValid: state.job.value.trim().length >= 2,
          errMsg: "Please enter your valid job position.",
        },
      };
    case "COMPANY":
      return {
        ...state,
        company: {
          ...state.company,
          value: action.val,
          isValid: action.val.trim().length >= 2,
          errMsg: "Please enter valid company/companies name",
        },
      };
    case "COMPANY_INPUT_BLUR":
      return {
        ...state,
        company: {
          ...state.company,
          value: state.company.value,
          isValid: state.company.value.trim().length >= 2,
          errMsg: "Please enter valid company/companies name",
        },
      };
    case "LOCATION":
      return {
        ...state,
        location: {
          ...state.location,
          value: action.val,
          isValid: action.val.trim().length >= 2,
          errMsg: "Please enter your last valid job location.",
        },
      };
    case "LOCATION_INPUT_BLUR":
      return {
        ...state,
        location: {
          ...state.location,
          value: state.location.value,
          isValid: state.location.value.trim().length >= 2,
          errMsg: "Please enter your last valid job location.",
        },
      };
    case "EXPERIENCE":
      return {
        ...state,
        experience: {
          ...state.experience,
          value: action.val,
          isValid: action.val >= 0,
          errMsg: "Please enter your experience.",
        },
      };
    case "EXPERIENCE_INPUT_BLUR":
      return {
        ...state,
        experience: {
          ...state.experience,
          value: state.experience.value,
          isValid: state.experience.value >= 0,
          errMsg: "Please enter your experience.",
        },
      };
    case "JOB_DESCRIPTION":
      return {
        ...state,
        job_description: {
          ...state.job_description,
          value: action.val,
          isValid: action.val.trim().length >= 20,
          errMsg: "Please tell us about your job more specific.",
        },
      };
    case "JOB_DESCRIPTION_INPUT_BLUR":
      return {
        ...state,
        job_description: {
          ...state.job_description,
          value: state.job_description.value,
          isValid: state.job_description.value.trim().length >= 20,
          errMsg: "Please tell us about your job more specific.",
        },
      };
    case "DATE":
      return {
        ...state,
        date: {
          ...state.date,
          value: action.val,
          isValid: action.val.trim().length === 10,
          errMsg: "Please fill the correct date.",
        },
      };
    case "DATE_INPUT_BLUR":
      return {
        ...state,
        date: {
          ...state.date,
          value: state.date.value,
          isValid: state.date.value.trim().length === 10,
          errMsg: "Please fill the correct date.",
        },
      };
    case "CLEAR_FIELDS":
      return addExperienceInitialValues;
    default:
      return state;
  }
};
