import ActionTypes from "../constants/actionTypes";
import {
  loggedIn,
  loggedOut,
  loggingIn,
  loginFailed
} from "../actions/loginActions";

type Actions =
  | ReturnType<typeof loggedIn | typeof loginFailed>
  | typeof loggingIn
  | typeof loggedOut;

interface State {
  token?: string;
  loading: boolean;
  error?: string;
}

const defaultState: State = {
  token: undefined,
  loading: false,
  error: undefined
};

function login(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case ActionTypes.LoggedIn:
      return {
        ...state,
        token: action.token,
        loading: false
      };
    case ActionTypes.LoggingIn:
      return {
        ...state,
        error: undefined,
        loading: true
      };
    case ActionTypes.LoggedOut:
      return defaultState;
    case ActionTypes.LoginFailed:
      return { ...state, error: action.error, loggingIn: false };
    default:
      return state;
  }
}

export default login;
