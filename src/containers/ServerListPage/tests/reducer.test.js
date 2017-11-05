import { fromJS, List } from 'immutable';
import { serverListFetch, serverListReceived, serverListError } from '../actions';
import serverListReducer from '../reducer';

describe('# Server list page reducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      list: [],
      loading: false,
      error: null,
    });
  });

  it('should set loading state when serverListFetch action received', () => {
    const token = 'token';
    const expectedResult = state
      .set('loading', true);

    expect(serverListReducer(state, serverListFetch(token))).toEqual(expectedResult);
  });

  it('should set loading state when serverListFetch action received', () => {
    const expectedResult = state
      .set('loading', false)
      .set('list', new List([]));

    expect(serverListReducer(state, serverListReceived([]))).toEqual(expectedResult);
  });

  it('should set error state when serverListError action received', () => {
    const expectedError = 'error';
    const expectedResult = state
      .set('loading', false)
      .set('error', expectedError);

    expect(serverListReducer(state, serverListError(new Error(expectedError)))).toEqual(expectedResult);
  });
});
