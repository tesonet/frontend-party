import { combineReducers } from 'redux';
import ui from './reducers/ui';
import servers from './reducers/servers';

const rootReducer = combineReducers({ ui, servers });

export default rootReducer;
