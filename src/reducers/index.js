import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serversReducer from './serversReducer';

export default combineReducers({
  auth: authReducer,
  list: serversReducer
});
