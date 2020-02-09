import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/types";

const initialState = {
  loggingIn: false,
  loggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggedIn: false,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false
      };
    case LOGOUT:
      return {
        loggingIn: false,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
