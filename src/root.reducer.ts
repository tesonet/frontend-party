import { combineReducers } from 'redux';
import auth, { AuthState } from './ducks/auth.duck';
import servers, { ServersState } from './ducks/servers.duck';

export type RootState = {
    session: AuthState;
    servers: ServersState;
};

const rootReducer = combineReducers({
    session: auth,
    servers,
});

export default rootReducer;
