import { RouterState, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';

import AuthReducer, { UserState } from './ducks/auth';
import ServersReducer, { ServersState } from './ducks/servers';

export interface State {
  router: RouterState;
  user: UserState;
  servers: ServersState;
}

export const createRootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    user: AuthReducer,
    servers: ServersReducer,
  });
