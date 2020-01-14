import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { State } from "../store";
import { fetchToken } from "../../utils/api";
import localStorageUtils from "./../../utils/localStorage";
export enum ActionTypes {
  LOG_IN_REQUEST = "LOG_IN_REQUEST",
  LOG_IN_SUCCESS = "LOG_IN_SUCCESS",
  LOG_OUT = "LOG_OUT"
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
  | { type: ActionTypes.LOG_OUT };

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export const logOut = (): AnyAction => {
  localStorageUtils.destroyToken();
  return { type: ActionTypes.LOG_OUT };
};

export const logInSuccess = (token: string): AnyAction => {
  return { type: ActionTypes.LOG_IN_SUCCESS, payload: { token } };
};

export const logIn = (
  username: string,
  password: string
): ThunkResult<Promise<void>> => {
  return (dispatch: ThunkDispatch<State, void, AnyAction>) => {
    return fetchToken(username, password).then(token => {
      dispatch(logInSuccess(token));
      localStorageUtils.setToken(token);
    });
  };
};
