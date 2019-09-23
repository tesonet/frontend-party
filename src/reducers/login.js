import * as types from '../constants/types';

const INITIAL_STATE = {
    userToken: ''
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return { ...state, userToken: action.payload };
        case 'LOGOUT_USER':
            return { ...state, userToken: null };
        default:
            return state;
    }
}
