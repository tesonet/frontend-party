/* eslint-disable no-param-reassign */
// @flow
import { createReducer } from 'redux-starter-kit';
import ls from 'local-storage';
import get from 'lodash/get';

import actions from './actions';


export type AuthReducerT = {
    token: ?string,
    isAuthInProcessing: boolean
};

const initialState = {
    token: ls('token') || null,
    isAuthInProcessing: false,
};

const reducer = createReducer(initialState, {
    [actions.types.GET_TOKEN.REQUEST]: (state: AuthReducerT) => {
        state.isAuthInProcessing = true;
    },
    [actions.types.GET_TOKEN.RESPONSE]: (state: AuthReducerT, action) => {
        if (!action.error) {
            const token = get(action, 'payload.token', null);

            state.token = token;
            ls('token', token);
        }

        state.isAuthInProcessing = false;
    },
    [actions.types.LOGOUT]: (state: AuthReducerT) => {
        state.token = null;
        ls('token', null);
    },
});

export default reducer;
