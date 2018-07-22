import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { updateSimpleValue } from '../../utils/createReducer';
import { LOGIN_TOGGLER, SET_TOKEN } from './constants';
import { IUser } from './types';

const setLoginState = handleAction(LOGIN_TOGGLER, updateSimpleValue, false);
const setTokenReducer = handleAction(SET_TOKEN, updateSimpleValue, null);

export default combineReducers<IUser>({
  isLoggedIn: setLoginState,
  token: setTokenReducer
});
