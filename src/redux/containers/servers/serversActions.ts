import { action, ActionType } from '../../actions';
import { Server } from './serversReducer';

export enum ServersActionTypes {
  getServers = 'GET_SERVERS',
  getServersSuccess = 'GET_SERVERS_SUCCESS',
  getServersError = 'GET_SERVERS_ERROR'
}

export const ServersActions = {
  getServers: () => action(ServersActionTypes.getServers),
  getServersSuccess: (servers: Server[]) => action(ServersActionTypes.getServersSuccess, { servers }),
  getServersError: (error: any) => action(ServersActionTypes.getServersError, { error })
};

export type ServersActions = ActionType<typeof ServersActions>;