import * as actionTypes from "../constants/auth.constants";

const initialState = {
    error: null,
    loading: false,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false,
                error: null
            };
        case actionTypes.AUTH_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                error: null,
                loading: false,
                token: null
            };
        default:
            return state;
    }
};

export default authReducer;
