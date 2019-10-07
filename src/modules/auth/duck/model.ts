import { GetActionTypes } from '@redux/createAction';

import { authActions } from './actions';

export interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export type AuthAction = GetActionTypes<typeof authActions>;
export type AuthActions = typeof authActions;
export type GetAuthActions<T extends keyof typeof authActions> = ReturnType<
  typeof authActions[T]
>;
