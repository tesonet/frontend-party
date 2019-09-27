import { SERVER_FETCH_ACTION_TYPES } from '../constants/actionTypes';

export const INITIAL_STATE = {
    serversList: [],
    loading: false,
    errorType: null
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SERVER_FETCH_ACTION_TYPES.FETCH_SUCCESS:
            return { ...state, loading: false, serversList: payload.servers };
        case SERVER_FETCH_ACTION_TYPES.FETCH_PENDING:
            return { ...state, loading: true };
        case SERVER_FETCH_ACTION_TYPES.FETCH_FAIL:
            return { ...state, loading: false, errorType: payload.error };
        default:
            return state;
    }
}
