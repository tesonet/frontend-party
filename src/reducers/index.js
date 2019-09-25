import { combineReducers } from 'redux';
import login from './login';
import servers from './servers';

export default combineReducers({
    login,
    servers
});
