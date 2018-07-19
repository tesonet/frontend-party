import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { updateSimpleValue } from '../../utils/createReducer';
import { LOGOUT } from './constants';
import { IUser } from './types'

const setLoginState = handleAction(LOGOUT, updateSimpleValue, false);

export default combineReducers<IUser>({
    isLoginIn: setLoginState
});
