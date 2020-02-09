import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./types";

export const loginRequested = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccessful = token => ({
  type: LOGIN_SUCCESS,
  token
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});

export const login = () => dispatch => {
  dispatch(loginRequested());

  const mockAuth = new Promise(resolve => {
    setTimeout(resolve, 200);
  });
  return mockAuth.then(() => dispatch(loginSuccessful()));
};
