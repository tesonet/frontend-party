import { LOGIN_ACTION_TYPES } from '../constants/types';

export const INITIAL_STATE = {
    userToken: '',
    loading: false,
    errorType: ''
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
            return { ...state, loading: false, userToken: action.payload, errorType: '' };
        case LOGIN_ACTION_TYPES.LOGIN_PENDING:
            return { ...state, loading: true };
        case LOGIN_ACTION_TYPES.LOGIN_FAIL:
            return { ...state, loading: false, errorType: action.payload };
        case LOGIN_ACTION_TYPES.LOGOUT:
            return { ...INITIAL_STATE, userToken: '' };
        default:
            return state;
    }
}
