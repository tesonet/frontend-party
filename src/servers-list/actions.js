import { createAction } from 'redux-actions';

export const setServersList = createAction('SET_SERVERS_LIST');
export const setServersLoading = createAction('SET_SERVERS_LOADING');
export const setServersFailToLoad = createAction('SET_SERVERS_FAIL_TO_LOAD');
