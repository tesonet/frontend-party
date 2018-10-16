import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import auth, { AuthState } from './auth';
import servers, { ServersState } from './servers';

export interface ReduxState {
  auth: AuthState;
  routing: RouterState;
  servers: ServersState;
}

export default combineReducers<ReduxState>({
  auth,
  servers,
  routing: routerReducer,
});
