import auth from './auth';
import sort from './sort';
import list from './list';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: auth.user,
  activity: auth.activity,
  'login:username': auth.LoginUserName,
  'login:password': auth.LoginUserPassword,
  'login:error': auth.LoginError,
  'sort:servers': sort.servers,
  'list:servers': list.servers
});

export default rootReducer;