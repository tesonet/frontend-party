import {
    AUTHENTICATION_START,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    LAST_USER_API_KEY,
    LOGOUT,
    AuthState,
    AuthenticationStartAction,
    AuthenticationSuccessAction,
    AuthenticationErrorAction,
    LogoutAction
} from "../types";

const initialState = {
    loading: false,
    error: null,
    authenticated: false
} as AuthState;

const authReducer = (
    state = initialState,
    action:
        AuthenticationStartAction |
        AuthenticationSuccessAction |
        AuthenticationErrorAction |
        LogoutAction
) => {

    switch (action.type) {

        case AUTHENTICATION_START:
            return {
                ...state,
                loading: true,
                authenticated: false
            };

        case AUTHENTICATION_SUCCESS:

            // Store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(LAST_USER_API_KEY, action.payload.token);

            // Do not store the returned auth token to redux
            return {
                ...state,
                authenticated: true,
                loading: false,
                error: null
            };

        case AUTHENTICATION_ERROR:

            return {
                ...state,
                loading: false,
                authenticated: false,
                error: action.payload.error
            };

        case LOGOUT:

            // Remove only api key. Leave persistent data from redux
            localStorage.removeItem(LAST_USER_API_KEY);

            // Clears everything - including persistent data from redux
            //localStorage.clear();

            return {
                ...state,
                authenticated: false,
                loading: false,
                error: null
            };

        default:
            return state;
    }
};

export default authReducer;