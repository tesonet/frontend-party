import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './LoginReducer';
import ServersReducer from './ServersReducer';

const allReducers = combineReducers({
  LoginReducer,
  ServersReducer,
  form: formReducer
})

export default allReducers;
