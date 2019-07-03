import auth from './auth';
import sort from './sort';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  isLogged: auth.isLogged,
  userName: auth.userName,
  userPassword: auth.userPassword,
  activity: auth.activity,
  sort: sort.servers
});

export default rootReducer;
