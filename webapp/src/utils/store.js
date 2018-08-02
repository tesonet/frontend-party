import { combineReducers, createStore } from 'redux';
import authReducer from '../containers/Auth/authReducer';

const reducers = combineReducers({
  auth: authReducer
});

export default createStore(reducers);
