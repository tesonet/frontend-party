import {
  authLogin,
  authLogout,
  authSuccess,
  authError,
  authErrorDismiss,
} from '../auth';
import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
} from '../../../constants/actionTypes';

describe('Auth actions', () => {
  it('should fire with the expected props.', () => {
    const authLoginPayload = {
      type: AUTH_LOGIN_REQUESTED,
      username: 'John',
      password: 'Doe',
    };

    const authLogoutPayload = {
      type: AUTH_LOGOUT_REQUESTED,
    };

    const authSuccessPayload = {
      type: AUTH_SUCCESS,
      token: 'auth-token-12345',
    };

    const authErrorPayload = {
      type: AUTH_ERROR,
      error: 'Error',
    };

    const authErrorDismissPayload = {
      type: AUTH_ERROR_DISMISS,
    };

    expect(authLogin(authLoginPayload.username, authLoginPayload.password)).toEqual(authLoginPayload);
    expect(authLogout()).toEqual(authLogoutPayload);
    expect(authSuccess(authSuccessPayload.token)).toEqual(authSuccessPayload);
    expect(authError(authErrorPayload.error)).toEqual(authErrorPayload);
    expect(authErrorDismiss()).toEqual(authErrorDismissPayload);
  });
});
