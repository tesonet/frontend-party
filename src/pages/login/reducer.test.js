import * as actions from './actions';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to create a token', () => {
    const authToken = 'token';
    const expectedAction = {
      type: types.SET_TOKEN,
      payload: { authToken },
    };
    expect(actions.token(authToken)).toEqual(expectedAction);
  });

  it('should create an action to set an error', () => {
    const error = 'error';
    const expectedAction = {
      type: types.ERROR,
      payload: { message: error },
    };
    expect(actions.setError(error)).toEqual(expectedAction);
  });
});
