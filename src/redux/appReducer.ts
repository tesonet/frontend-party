import { combineReducers } from 'redux';

import { login } from '../components/Login/reducer';
import { serversList } from '../components/ServersList/reducer';

const reducers = {
  login,
  serversList
};

export const appReducer = combineReducers(reducers);
