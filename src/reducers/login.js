import { LOGIN_ACTION_TYPES } from '../constants/types';

const INITIAL_STATE = {
    userToken: null,
    errorType: null
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
            return { ...state, userToken: action.payload, errorType: null };
        case LOGIN_ACTION_TYPES.LOGIN_FAIL:
            return { ...state, errorType: action.payload };
        case 'LOGOUT_USER':
            return { ...state, userToken: null };
        default:
            return state;
    }
}
