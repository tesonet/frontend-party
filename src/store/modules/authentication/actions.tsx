import { createAction } from 'redux-actions';
import * as AUTHENTICATION_ACTION_TYPES from './constants';

export const init = createAction(AUTHENTICATION_ACTION_TYPES.INIT);

export const initLogout = createAction(AUTHENTICATION_ACTION_TYPES.INIT_LOGOUT);

export const initTokenStorage = createAction(AUTHENTICATION_ACTION_TYPES.INIT_TOKEN_STORAGE);

export const setToken = createAction(AUTHENTICATION_ACTION_TYPES.SET_TOKEN);

export const authRequest = createAction(AUTHENTICATION_ACTION_TYPES.AUTH_REQUEST);

export const authSuccess = createAction(AUTHENTICATION_ACTION_TYPES.AUTH_SUCCESS);

export const authFailure = createAction(AUTHENTICATION_ACTION_TYPES.AUTH_FAILURE);
