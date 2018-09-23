// @flow

import { LOGIN_ACTION } from './constants';

export type LoginActionPayload = {
  username: string,
  password: string,
};

export const loginAction = (payload: LoginActionPayload) => ({
  type: LOGIN_ACTION,
  payload,
});
