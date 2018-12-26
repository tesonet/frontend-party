import { combineReducers } from 'redux';
import user from './userReducer';
import servers from './serversReducer';

export const rootReducer = combineReducers({
  user,
  servers
});
