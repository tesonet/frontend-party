import types from "../actions/types";

const loggedIn = !!localStorage.getItem("token");

const initialState = {
  isFetching: false,
  loggedIn,
  error: false,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUESTED:
      return {
        ...state,
        error: false,
        isFetching: true
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        error: false,
        isFetching: false,
        loggedIn: true,
        token: action.token
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.LOGIN_CLEAR_ERROR:
      return {
        ...state,
        error: false
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
