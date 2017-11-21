import { fromJS } from 'immutable';
import authPageReducer from '../../reducers/auth';
import { authorize, authSuccess, authError } from '../../actions/auth';

describe('# Auth page reducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      token: null,
      loading: false,
      error: null,
    });
  });

  it('should handle the authorize action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', null)
      .set('token', null);

    expect(authPageReducer(state, authorize('user', 'pass'))).toEqual(expectedResult);
  });

  it('should handle the authSuccess action correctly', () => {
    const expectedToken = 'token';
    const expectedResult = state
      .set('loading', false)
      .set('error', null)
      .set('token', expectedToken);

    expect(authPageReducer(state, authSuccess(expectedToken))).toEqual(expectedResult);
  });

  it('should handle the authError action correctly', () => {
    const expectedError = 'error';
    const expectedResult = state
      .set('loading', false)
      .set('error', expectedError)
      .set('token', null);

    expect(authPageReducer(state, authError(new Error(expectedError)))).toEqual(expectedResult);
  });
});
