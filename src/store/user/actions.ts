import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { State } from "../store";
export enum ActionTypes {
  LOG_IN_REQUEST = "LOG_IN_REQUEST",
  LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
}

export type Actions =
  | {
      type: ActionTypes.LOG_IN_REQUEST;
      payload: { username: string; password: string };
    }
  | {
      type: ActionTypes.LOG_IN_SUCCESS;
      payload: { token: string };
    };

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

const getToken = (username: string, password: string): Promise<Response> => {
  return fetch("http://playground.tesonet.lt/v1/tokens", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

export const logIn = (
  username: string,
  password: string
): ThunkResult<Promise<void>> => {
  return (dispatch: ThunkDispatch<State, void, AnyAction>) => {
    return getToken(username, password).then(token => {
      dispatch({ type: ActionTypes.LOG_IN_SUCCESS, payload: token });
    });
  };
};
