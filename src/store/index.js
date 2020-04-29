import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as authTypes from './authorize/authorize.types';

import {
  initialState as initialAuthState,
  reducer as authReducer
} from './authorize';
import {
  initialState as initialServersState,
  reducer as serversReducer
} from './servers';

export const initialRootState = {
  auth: initialAuthState,
  servers: initialServersState
};

const appReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
  form: formReducer
});

export const rootReducer = (state, action) => {
  if (action.type === authTypes.ON_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
