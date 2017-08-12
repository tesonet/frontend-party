import { combineReducers } from 'redux';
import login from './login/reducer';
import servers from './servers/reducer';

export default combineReducers({
  login,
  servers
});
