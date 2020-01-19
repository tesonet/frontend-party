import * as types from "../types";

export function onLoginLoading() {
  return {
    type: types.LOGIN_FORM_LOADING
  };
}

export function onLoginError(error) {
  return {
    type: types.LOGIN_FORM_ERROR,
    error
  };
}

export function onLoginSuccess() {
  return {
    type: types.LOGIN_FORM_SUCCESS
  };
}
