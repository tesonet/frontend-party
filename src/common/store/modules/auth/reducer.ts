import { createReducer } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { IState, Status } from './types';

const statusReducer = createReducer<Status>({}, Status.Idle);

const isAuthenticatedReducer = createReducer<boolean>({}, false);

const reducer = combineReducers<IState>({
  status: statusReducer,
  isAuthenticated: isAuthenticatedReducer
});

export default reducer;
