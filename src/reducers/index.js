import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import serversReducer from './serversReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  list: serversReducer
});
