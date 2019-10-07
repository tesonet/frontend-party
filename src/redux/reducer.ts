import { AuthState } from '@modules/auth/duck/model';
import { authReducers } from '@modules/auth/duck/reducers';
import { ServerState } from '@modules/servers/duck/model';
import { serverReducers } from '@modules/servers/duck/reducers';
import { ToasterManagerState } from '@modules/toaster/duck/model';
import { toasterManagerReducers } from '@modules/toaster/duck/reducers';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

interface State {
  toasterManager: ToasterManagerState;
  auth: AuthState;
  servers: ServerState;
  router?: RouterState;
}

const createRootReducer = (history: History) =>
  combineReducers<State>({
    toasterManager: toasterManagerReducers,
    auth: authReducers,
    servers: serverReducers,
    router: connectRouter(history),
  });

export { State, createRootReducer };
