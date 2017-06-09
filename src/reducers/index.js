import { combineReducers } from 'redux';
import login from './login';
import servers from './servers';

const rootReducer = combineReducers({ login, servers });

export default rootReducer;
