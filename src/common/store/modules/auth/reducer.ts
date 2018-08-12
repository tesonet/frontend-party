import { createReducer, set } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { SET_IS_AUTHENTICATED, SET_TOKEN } from './constants';
import { IState } from './types';

const isAuthenticatedReducer = createReducer<boolean>(
  {
    [SET_IS_AUTHENTICATED]: set
  },
  false
);

const tokenReducer = createReducer<string | null>(
  {
    [SET_TOKEN]: set
  },
  null
);

const reducer = combineReducers<IState>({
  isAuthenticated: isAuthenticatedReducer,
  token: tokenReducer
});

export default reducer;
