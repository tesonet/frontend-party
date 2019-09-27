import { LOGIN_ACTION_TYPES } from '../constants/actionTypes';

export const INITIAL_STATE = {
    userToken: null,
    loading: false,
    errorType: null
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
            return { ...state, loading: false, userToken: payload.token, errorType: null };
        case LOGIN_ACTION_TYPES.LOGIN_PENDING:
            return { ...state, loading: true };
        case LOGIN_ACTION_TYPES.LOGIN_FAIL:
            return { ...state, loading: false, errorType: payload.error };
        case LOGIN_ACTION_TYPES.LOGOUT:
            return { ...INITIAL_STATE, userToken: null };
        default:
            return state;
    }
}
