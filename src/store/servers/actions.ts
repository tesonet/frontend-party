import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { State } from "../store";
import { AnyAction } from "redux";
import { fetchServers } from "../../utils/api";

export interface Server {
  name: string;
  distance: number;
}

export enum ActionTypes {
  FETCH_SERVERS_REQUEST = "FETCH_SERVERS_REQUEST",
  FETCH_SERVERS_SUCCESS = "FETCH_SERVERS_SUCCESS"
}

export type Actions =
  | {
      type: ActionTypes.FETCH_SERVERS_REQUEST;
      payload: string;
    }
  | { type: ActionTypes.FETCH_SERVERS_SUCCESS; payload: Server[] };

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export const getServers = (token: string): ThunkResult<Promise<void>> => {
  return (dispatch: ThunkDispatch<State, void, AnyAction>) => {
    dispatch({ type: ActionTypes.FETCH_SERVERS_REQUEST });
    return fetchServers(token).then(servers => {
      dispatch({ type: ActionTypes.FETCH_SERVERS_SUCCESS, payload: servers });
    });
  };
};
