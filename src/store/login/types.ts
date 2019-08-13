export interface UserLogin {
    name: string;
    password: string;
}

export interface LoginState {
    authenticated: boolean;
    error: boolean;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";

interface LoginAction {
    type: typeof LOGIN;
}

interface logoutAction {
    type: typeof LOGOUT;
}

interface errorAction {
    type: typeof LOGIN_ERROR;
}

interface clearRrrorAction {
    type: typeof CLEAR_LOGIN_ERROR;
}

export type LoginActionTypes =
    | LoginAction
    | logoutAction
    | errorAction
    | clearRrrorAction;
