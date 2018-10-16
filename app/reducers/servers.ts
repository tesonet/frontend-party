import { ServersActionType, FetchServersSuccessAction } from 'Actions/servers';
import { AuthActionType, LogoutAction } from 'Actions/auth';
import { Server } from 'Interfaces/common';

export interface ServersState {
  servers: Server[];
}

export type ServersAction = FetchServersSuccessAction | LogoutAction;

const servers = (state: ServersState = initialState, action: ServersAction) => {
  switch (action.type) {
    case ServersActionType.FETCH_SERVERS_SUCCESS:
      return { ...state, servers: action.servers };
    case AuthActionType.LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

const initialState: ServersState = {
  servers: [],
};

export default servers;
