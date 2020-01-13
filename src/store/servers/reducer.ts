import { Actions, Server, ActionTypes } from "./actions";

export interface ServersState {
  servers: Server[] | null;
}

const initialState: ServersState = {
  servers: null
};

export const serversReducer = (
  state: ServersState = initialState,
  action: Actions
): ServersState => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVERS_REQUEST:
      return {
        ...state,
        servers: null
      };
    case ActionTypes.FETCH_SERVERS_SUCCESS:
      return {
        ...state,
        servers: action.payload
      };
    default:
      return state;
  }
};
