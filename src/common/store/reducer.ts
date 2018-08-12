import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import browserHistory from '../browserHistory';
import authReducer from './modules/auth/reducer';
import signInFormReducer from './modules/sign-in-form/reducer';

const reducer = connectRouter(browserHistory)(
  combineReducers({
    auth: authReducer,
    signInForm: signInFormReducer
  })
);

export default reducer;
