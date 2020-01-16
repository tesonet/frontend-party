import * as types from "../types";

export function authUser(username, authToken) {
  return {
    type: types.AUTH_USER,
    username,
    authToken
  };
}

export function logoutUser() {
  return {
    type: types.LOG_OUT
  };
}
