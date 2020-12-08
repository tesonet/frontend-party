import { ErrorMessage } from './error';
import { LoginResponse, Server } from './common';

// Authentication

export const AUTHENTICATION_START = 'AUTHENTICATION_START';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const LOGOUT = 'LOGOUT';

// Inventory

export const GET_SERVERS_START = 'GET_SERVERS_START';
export const GET_SERVERS_SUCCESS = 'GET_SERVERS_SUCCESS';
export const GET_SERVERS_ERROR = 'GET_SERVERS_ERROR';

// Modals

export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

// Auth actions

export interface AuthenticationStartAction {
    type: typeof AUTHENTICATION_START
}

export interface AuthenticationSuccessAction {
    type: typeof AUTHENTICATION_SUCCESS,
    payload: LoginResponse
}

export interface AuthenticationErrorAction {
    type: typeof AUTHENTICATION_ERROR,
    payload: { error: ErrorMessage }
}

export interface LogoutAction {
    type: typeof LOGOUT
}

// Inventory update actions

export interface GetServersStartAction {
    type: typeof GET_SERVERS_START
}

export interface GetServersSuccessAction {
    type: typeof GET_SERVERS_SUCCESS,
    payload: { servers: Server[] }
}

export interface GetServersErrorAction {
    type: typeof GET_SERVERS_ERROR,
    payload: { error: ErrorMessage }
}

// Modal actions

export interface ModalShowAction {
    type: typeof MODAL_SHOW,
    payload: { modal: string }
}

export interface ModalHideAction {
    type: typeof MODAL_HIDE
}