import { SERVER_FETCH_ACTION_TYPES } from '../constants/types';

export const INITIAL_STATE = {
    serversList: [],
    loading: false,
    errorType: ''
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SERVER_FETCH_ACTION_TYPES.FETCH_SUCCESS:
            return { ...state, loading: false, serversList: action.payload };
        case SERVER_FETCH_ACTION_TYPES.FETCH_PENDING:
            return { ...state, loading: true };
        case SERVER_FETCH_ACTION_TYPES.FETCH_FAIL:
            return { ...state, loading: false, errorType: action.payload };
        default:
            return state;
    }
}
