import { LoginState, LoginActionTypes, LOGIN, LOGOUT } from "./types";

const initialState: LoginState = {
    authenticated: false,
};

export function loginReducer(state = initialState, action: LoginActionTypes):LoginState {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
            };
        case LOGOUT:
            return {
                authenticated: false,
            };
        default:
            return state;
    }
}
