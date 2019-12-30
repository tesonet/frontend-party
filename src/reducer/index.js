import { combineReducers } from 'redux';
import login from '../pages/login/reducer';
import servers from '../pages/servers/reducer';

export default combineReducers({
  login,
  servers,
});
