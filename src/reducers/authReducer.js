import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGIN_CLEAR_ERROR,
  LOGOUT
} from "../actions/types";
import { getFromLocalStorage } from "../utils/localStorage/localStorage";

const loggedIn = getFromLocalStorage("token") ? true : false;

const initialState = {
  isFetching: false,
  loggedIn,
  error: false,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        error: false,
        isFetching: true
      };
    case LOGIN_SUCCESSFUL:
      return {
        error: false,
        isFetching: false,
        loggedIn: true,
        token: action.payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case LOGIN_CLEAR_ERROR:
      return {
        ...state,
        error: false
      };
    case LOGOUT:
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
