import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { authReducer } from './containers/auth/authReducer';
import { serversReducer } from './containers/servers/serversReducer';
import { AppState } from './configureStore';

const history = createBrowserHistory();
const createRootReducer = () =>
  combineReducers<AppState>({
    auth: authReducer,
    servers: serversReducer,
    router: connectRouter(history)
  });

export { createRootReducer, history };