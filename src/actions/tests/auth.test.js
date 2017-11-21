import { authError, authSuccess, authorize } from '../auth';
import { AUTH_SUCCESS, AUTH_LOGIN_REQUEST, AUTH_ERROR } from '../types';


describe('# Auth page actions', () => {
  it('should contain required properties', () => {
    const expectedAuth = {
      type: AUTH_LOGIN_REQUEST,
      username: 'user',
      password: 'pass',
    };

    const expectedAuthSuccess = {
      type: AUTH_SUCCESS,
      token: 'token',
    };

    const expectedAuthError = {
      type: AUTH_ERROR,
      error: 'error',
    };

    expect(authorize('user', 'pass')).toEqual(expectedAuth);
    expect(authSuccess('token')).toEqual(expectedAuthSuccess);
    expect(authError('error')).toEqual(expectedAuthError);
  });
});
