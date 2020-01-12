import { Actions, Server } from "./actions";

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
    default:
      return state;
  }
};
