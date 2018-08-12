import { combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';

const reducer = combineReducers({
  device: (state = { test: true }) => state,
  auth: authReducer
});

export default reducer;
