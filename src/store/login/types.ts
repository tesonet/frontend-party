export interface UserLogin {
    name: string;
    password: string;
}

export interface LoginState {
    authenticated: boolean;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_TOKEN = "SET_TOKEN";

interface LoginAction {
    type: typeof LOGIN;
}

interface logoutAction {
    type: typeof LOGOUT;
}

export type LoginActionTypes = LoginAction | logoutAction;