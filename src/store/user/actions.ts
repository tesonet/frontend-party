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
