import reducer from './userReducer';
import { LOGIN_SUCCESS, LOGOUT_ACTION } from '../actions/constants';

describe('userReducer', () => {
  const initialState = {
    isLoggedIn: false,
  };
  const loggedInState = {
    isLoggedIn: true,
  };
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it('should update user state after log in', () => {
    const action = {
      type: LOGIN_SUCCESS,
    };
    expect(reducer({}, action)).toEqual(loggedInState);
  });
  it('should update user state after log out', () => {
    const action = {
      type: LOGOUT_ACTION,
    };
    expect(reducer({}, action)).toEqual(initialState);
  });
});
