import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app';
import { loginReducer as login } from '../../login';
import servers from '../../servers-list/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    app,
    login,
    servers
});
