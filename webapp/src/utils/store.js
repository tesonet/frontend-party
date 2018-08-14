import { combineReducers, createStore } from 'redux';
import authReducer from '../pages/Auth/authReducer';

const reducers = combineReducers({
  auth: authReducer
});

export default createStore(reducers);
