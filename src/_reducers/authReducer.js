import {
  LOGIN_IN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SET_USERNAME,
  SET_PASSWORD,
  AUTH_SERVER_ERROR
} from "../_constants/types";

const initialState = {
  username: undefined,
  password: undefined,
  isAuthenticated: null,
  isLoading: false,
  user: null,
  authErrorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
        authErrorMessage: false
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        authErrorMessage: false
      };
    case LOGIN_IN_PROCESS:
      return {
        ...state,
        isLoading: true,
        authErrorMessage: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        authErrorMessage: false
      };
    case AUTH_SERVER_ERROR:
      return {
        ...state,
        isLoading: false,
        authErrorMessage: "Server is unavailable, please try later"
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        authErrorMessage: "The username or password is incorrect"
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        username: undefined,
        password: undefined
      };
  }
  return state;
};
