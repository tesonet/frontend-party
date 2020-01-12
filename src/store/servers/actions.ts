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
