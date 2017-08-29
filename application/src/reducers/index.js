import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './LoginReducer';

const allReducers = combineReducers({
  LoginReducer,
  form: formReducer
})

export default allReducers;
