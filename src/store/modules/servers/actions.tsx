import { createAction } from 'redux-actions';
import * as SERVERS_ACTION_TYPES from './constants';

export const getAll = createAction(SERVERS_ACTION_TYPES.GET_ALL);

export const getAllRequest = createAction(SERVERS_ACTION_TYPES.GET_ALL_REQUEST);

export const getAllSuccess = createAction(SERVERS_ACTION_TYPES.GET_ALL_SUCCESS);

export const getAllFailure = createAction(SERVERS_ACTION_TYPES.GET_ALL_FAILURE);

export const setAll = createAction(SERVERS_ACTION_TYPES.SET_ALL);

export const clearAll = createAction(SERVERS_ACTION_TYPES.CLEAR_ALL);
