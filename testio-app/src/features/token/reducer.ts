import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { updateSimpleValue } from '../../utils/createReducer';
import { SET_TOKEN } from './constants';
import { IToken } from './types'

const setTokenReducer = handleAction(SET_TOKEN, updateSimpleValue, null);

export default combineReducers<IToken>({
    token: setTokenReducer
});
