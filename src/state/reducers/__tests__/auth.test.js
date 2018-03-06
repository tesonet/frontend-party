import authReducer from '../auth';
import {
  authLogin,
  authLogout,
  authSuccess,
  authError,
  authErrorDismiss,
} from '../../actions/auth';

describe('Auth reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      token: null,
      isLoading: false,
      error: null,
    };
  });

  it('should handle the authLogin with a correct resulting state.', () => {
    const expectedState = { ...state, isLoading: true };

    expect(authReducer(state, authLogin('John', 'Doe'))).toEqual(expectedState);
  });

  it('should handle the authLogout with a correct resulting state.', () => {
    const expectedState = { ...state, isLoading: true };

    expect(authReducer(state, authLogout())).toEqual(expectedState);
  });

  it('should handle the authSuccess with a correct resulting state.', () => {
    const expectedToken = 'auth-token-12345';
    const expectedState = { ...state, token: expectedToken };

    expect(authReducer(state, authSuccess(expectedToken))).toEqual(expectedState);
  });

  it('should handle the authError with a correct resulting state.', () => {
    const error = 'Error';
    const expectedState = { ...state, error };

    expect(authReducer(state, authError(new Error(error)))).toEqual(expectedState);
  });

  it('should handle the authErrorDismiss with a correct resulting state.', () => {
    const expectedState = { ...state };

    expect(authReducer(state, authErrorDismiss())).toEqual(expectedState);
  });
});
