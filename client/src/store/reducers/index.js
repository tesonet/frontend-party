import auth from './auth';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  isLogged: auth.isLogged,
  userName: auth.userName,
  userPassword: auth.userPassword,
  activity: auth.activity
});

export default rootReducer;
