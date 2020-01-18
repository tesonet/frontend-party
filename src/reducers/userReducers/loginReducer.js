import * as types from "../../actions/types";

const initialState = {
  error: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FORM_LOADING:
      return { ...state, loading: true };
    case types.LOGIN_FORM_ERROR:
      return { ...state, error: action.error, loading: false };
    case types.LOGIN_FORM_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false
      };
    default:
      return state;
  }
};
