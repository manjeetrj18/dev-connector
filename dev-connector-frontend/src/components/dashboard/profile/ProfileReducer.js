export const initialState = {
  userProfile: { value: "", isValid: null },
  profession: { value: "", isValid: null },
  company: { value: "", isValid: null },
  location: { value: "", isValid: null },
  skill: { value: "", isValid: null },
  github: { value: "", isValid: null },
  bio: { value: "", isValid: null },
  handle: { value: "", isValid: null },
};

export const AddProfileInputReducer = (state, action) => {
  switch (action.type) {
    case "PROFILE":
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          value: action.val,
          isValid: action.val.trim().length >= 2,
        },
      };
    case "PROFILE_INPUT_BLUR":
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          value: state.userProfile.value,
          isValid: state.userProfile.value.trim().length >= 2,
        },
      };
    case "PROFESSION":
      return {
        ...state,
        profession: {
          ...state.profession,
          value: action.val,
          isValid: action.val !== "",
        },
      };
    case "PROFESSION_INPUT_BLUR":
      return {
        ...state,
        profession: {
          ...state.profession,
          value: state.profession.value,
          isValid: state.profession.value !== "",
        },
      };
    case "COMPANY_NAME":
      return {
        ...state,
        company: {
          ...state.company,
          value: action.val,
          isValid: action.val.trim().length >= 2,
        },
      };
    case "COMPANY_INPUT_BLUR":
      return {
        ...state,
        company: {
          ...state.company,
          value: state.company.value,
          isValid: state.company.value.trim().length >= 2,
        },
      };
    case "LOCATION":
      return {
        ...state,
        location: {
          ...state.location,
          value: action.val,
          isValid: action.val.trim().length >= 2,
        },
      };
    case "LOCATION_INPUT_BLUR":
      return {
        ...state,
        location: {
          ...state.location,
          value: state.location.value,
          isValid: state.location.value.trim().length >= 2,
        },
      };
    case "SKILL":
      return {
        ...state,
        skill: {
          ...state.skill,
          value: action.val,
          isValid: action.val.trim().length >= 2,
        },
      };
    case "SKILL_INPUT_BLUR":
      return {
        ...state,
        skill: {
          ...state.skill,
          value: state.skill.value,
          isValid: state.skill.value.trim().length >= 2,
        },
      };
    case "GITHUB":
      return {
        ...state,
        github: {
          ...state.github,
          value: action.val,
          isValid: action.val.trim().length > 0,
        },
      };
    case "GITHUB_INPUT_BLUR":
      return {
        ...state,
        github: {
          ...state.github,
          value: state.github.value,
          isValid: state.github.value.trim().length >= 0,
        },
      };
    case "BIO":
      return {
        ...state,
        bio: {
          ...state.bio,
          value: action.val,
          isValid: action.val.trim().length >= 100,
        },
      };
    case "BIO_INPUT_BLUR":
      return {
        ...state,
        bio: {
          ...state.bio,
          value: state.bio.value,
          isValid: state.bio.value.trim().length >= 100,
        },
      };
    case "HANDLE":
      return {
        ...state,
        handle: {
          ...state.handle,
          value: action.val,
          isValid: action.val.trim().length >= 2,
        },
      };
    case "HANDLE_INPUT_BLUR":
      return {
        ...state,
        handle: {
          ...state.handle,
          value: state.handle.value,
          isValid: state.handle.value.trim().length >= 2,
        },
      };
    case "CLEAR_FIELDS":
      return initialState;
    default:
      return state;
  }
};
