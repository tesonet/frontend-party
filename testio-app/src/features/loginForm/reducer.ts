import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { updateSimpleValue } from '../../utils/createReducer';
import { SET_LOGIN_VALUE, SET_PASSWORD_VALUE } from './constants';
import { IForm } from './types'



const loginInputReducer = handleAction(SET_LOGIN_VALUE, updateSimpleValue, 'tesonet');
const passwordInputReducer = handleAction(SET_PASSWORD_VALUE, updateSimpleValue, 'partyanimal');

export default combineReducers<IForm>({
    password: passwordInputReducer,
    username: loginInputReducer
});
