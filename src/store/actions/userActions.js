// @flow

import { LOGIN_ACTION, LOGOUT_ACTION } from './constants';

export type LoginActionPayload = {
  username: string,
  password: string,
};

export const loginAction = (payload: LoginActionPayload) => ({
  type: LOGIN_ACTION,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT_ACTION,
});
