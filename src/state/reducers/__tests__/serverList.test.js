import serverListReducer from '../serverList';
import {
  serverListRequest,
  serverListReceive,
  serverListError,
} from '../../actions/serverList';

describe('ServerList reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      list: [],
      isLoading: false,
      error: null,
    };
  });

  it('should set loading state when serverListFetch action received', () => {
    const token = 'auth-token-12345';
    const expectedState = {
      ...state,
      isLoading: true,
    };

    expect(serverListReducer(state, serverListRequest(token))).toEqual(expectedState);
  });

  it('should set loading state when serverListFetch action received', () => {
    const expectedList = [1, 2, 3, 4, 5];
    const expectedState = {
      ...state,
      list: expectedList,
    };

    expect(serverListReducer(state, serverListReceive(expectedList))).toEqual(expectedState);
  });

  it('should set error state when serverListError action received', () => {
    const expectedError = 'Error';
    const expectedState = {
      ...state,
      error: expectedError,
    };

    expect(serverListReducer(state, serverListError(new Error(expectedError)))).toEqual(expectedState);
  });
});
