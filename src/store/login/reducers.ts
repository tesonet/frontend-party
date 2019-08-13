import {
    LoginState,
    LoginActionTypes,
    LOGIN,
    LOGOUT,
    LOGIN_ERROR,
    CLEAR_LOGIN_ERROR,
} from "./types";

const initialState: LoginState = {
    authenticated: false,
    error: false,
};

export function loginReducer(
    state = initialState,
    action: LoginActionTypes
): LoginState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: false,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: true,
            };
        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: false,
            };
        default:
            return state;
    }
}
