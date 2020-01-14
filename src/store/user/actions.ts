import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { State } from "../store";
import { fetchToken } from "../../utils/api";
import localStorageUtils from "./../../utils/localStorage";
export enum ActionTypes {
  LOG_IN_REQUEST = "LOG_IN_REQUEST",
  LOG_IN_SUCCESS = "LOG_IN_SUCCESS",
  LOG_OUT = "LOG_OUT",
  LOG_IN_ERROR = "LOG_IN_ERROR"
}

export type Actions =
  | {
      type: ActionTypes.LOG_IN_REQUEST;
      payload: { username: string; password: string };
    }
  | {
      type: ActionTypes.LOG_IN_SUCCESS;
      payload: { token: string };
    }
  | { type: ActionTypes.LOG_OUT }
  | {
      type: ActionTypes.LOG_IN_ERROR;
      payload: string;
    };

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export enum Errors {
  USERNAME_EMPTY = "Username cannot be empty",
  PASSWORD_EMPTY = "Password cannot be empty",
  INVALID_CREDENTIALS = "Invalid credentials"
}

export const logOut = (): AnyAction => {
  localStorageUtils.destroyToken();
  return { type: ActionTypes.LOG_OUT };
};

export const logInSuccess = (token: string): AnyAction => {
  return { type: ActionTypes.LOG_IN_SUCCESS, payload: { token } };
};

export const logInRequest = (): AnyAction => {
  return { type: ActionTypes.LOG_IN_REQUEST };
};

export const logInError = (error: string): AnyAction => {
  return { type: ActionTypes.LOG_IN_ERROR, payload: error };
};

export const logIn = (
  username: string,
  password: string
): ThunkResult<Promise<void>> => {
  return (dispatch: ThunkDispatch<State, void, AnyAction>) => {
    dispatch(logInRequest());
    return fetchToken(username, password).then(token => {
      if (token) {
        dispatch(logInSuccess(token));
        localStorageUtils.setToken(token);
      } else {
        dispatch(logInError(Errors.INVALID_CREDENTIALS));
      }
    });
  };
};
