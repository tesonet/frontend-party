import { ServersActions, ServersActionTypes } from './serversActions';

export interface Server {
  name: string,
  distance: number
}

export interface ServersState {
  servers: Server[];
  loading: boolean;
  error: any;
}

const initialState: ServersState = {
  servers: [],
  loading: false,
  error: null
};

export const serversReducer = (state = initialState, action: ServersActions): ServersState => {
  switch (action.type) {
    case ServersActionTypes.getServers:
      return { ...state, loading: true };
    case ServersActionTypes.getServersError:
      return { ...state, loading: false, error: action.payload.error };
    case ServersActionTypes.getServersSuccess:
      return { ...state, loading: false, servers: action.payload.servers };
    default:
      return state;
  }
};