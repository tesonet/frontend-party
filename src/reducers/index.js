import { combineReducers } from 'redux';
import ui from './ui';
import servers from './servers';

const rootReducer = combineReducers({ ui, servers });

export default rootReducer;
