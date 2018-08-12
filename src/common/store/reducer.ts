import { combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';
import signInFormReducer from './modules/sign-in-form/reducer';

const reducer = combineReducers({
  auth: authReducer,
  signInForm: signInFormReducer
});

export default reducer;
