import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../redux/actionsConst';

/* Action payloads interfaces */
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Error {
  error: string;
}

/* Action interfaces */
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  data: LoginCredentials;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  data: Error
}

export type LoginActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

/* Actions */
export const loginRequest= (data: LoginCredentials) => ({
  type: LOGIN_REQUEST,
  data
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = (data: Error) => ({
  type: LOGIN_FAILURE,
  data
});
