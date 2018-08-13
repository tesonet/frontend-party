import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import authReducer from './modules/auth/reducer';
import serverListReducer from './modules/server-list/reducer';
import signInFormReducer from './modules/sign-in-form/reducer';

const createReducer = (history: History) =>
  enableBatching(
    connectRouter(history)(
      combineReducers({
        auth: authReducer,
        signInForm: signInFormReducer,
        serverList: serverListReducer
      })
    )
  );

export default createReducer;
