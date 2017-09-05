import LoginReducer from '../../reducers/LoginReducer';
import * as types from '../../actions/Actions';

describe('Login Reducer', () => {

  const initialState = {
    userAuthenticated: false,
    pending: false,
    errorMessage: false,
    token: false
  }

  it('has a default state', () => {
    expect(LoginReducer(initialState, { type: null })).toEqual(initialState);
  });
  it('can handle bad LOGIN', () => {
    expect(LoginReducer(initialState,
       {
         type: 'LOGIN_REQUEST',
         payload:
       })).toEqual(initialState);
  });
  it('can handle LOGOUT', () => {
    expect(LoginReducer(undefined, { type: 'LOGOUT' })).toEqual(initialState);
  });
});
