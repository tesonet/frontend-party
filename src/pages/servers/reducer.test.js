import * as actions from './actions';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to set an error', () => {
    const error = 'error';
    const expectedAction = {
      type: types.FETCH_ERROR,
      payload: { error },
    };
    expect(actions.setError(error)).toEqual(expectedAction);
  });
});
