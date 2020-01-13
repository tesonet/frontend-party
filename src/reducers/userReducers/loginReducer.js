import * as types from "../../actions/types";

const initialState = {
  username: "",
  password: "",
  error: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FORM_INPUT_CHANGE:
      return { ...state, [action.name]: action.value };
    case types.LOGIN_FORM_VALIDATING:
      return { ...state, error: "", loading: true };
    case types.LOGIN_FORM_ERROR:
      return { ...state, error: action.error, loading: false };
    case types.LOGIN_FORM_SUCCESS:
      return {
        ...state,
        username: "",
        password: "",
        error: "",
        loading: false
      };
    default:
      return state;
  }
};
