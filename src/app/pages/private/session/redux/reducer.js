import { handleActions } from 'redux-actions';

import {
    SET_TOKEN,
    LOGOUT,
} from './actions';

export function getInitialState() {
    return {
        token: null,
    };
}

export default handleActions({
    [SET_TOKEN]: (state, { payload: token }) => ({
        ...state,
        token,
    }),

    [LOGOUT]: getInitialState,

}, getInitialState());
