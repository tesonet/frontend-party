import authReducer from './authReducer';
import { TYPE_LOG_IN, TYPE_LOG_OUT } from './authActions';

it('should return an initial state', () => {
  // `defaultState` is initialized the first time the `authReducer` is required, in this
  // case it calls a mockAPI behind the scenes, which returns a valid token, which should
  // mean that by default, the `isLoggedIn` should be `true`
  const state = authReducer(undefined, { type: '' });
  expect(state).toEqual({ isLoggedIn: true });
});

it('should handle the TYPE_LOG_IN', () => {
  const state = authReducer({ isLoggedIn: false }, { type: TYPE_LOG_IN });
  expect(state).toEqual({ isLoggedIn: true });
});

it('should handle the TYPE_LOG_OUT', () => {
  const state = authReducer({ isLoggedIn: true }, { type: TYPE_LOG_OUT });
  expect(state).toEqual({ isLoggedIn: false });
});
