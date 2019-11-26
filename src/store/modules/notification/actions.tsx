import { createAction } from 'redux-actions';
import * as NOTIFICATION_ACTION_TYPES from './constants';

export const setMessage = createAction(NOTIFICATION_ACTION_TYPES.SET_MESSAGE);

export const clearMessage = createAction(NOTIFICATION_ACTION_TYPES.CLEAR_MESSAGE);
