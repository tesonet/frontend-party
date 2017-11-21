import { serverListFetch, serverListReceived, serverListError } from '../serverList';
import { SERVER_LIST_FETCH, SERVER_LIST_RECEIVED, SERVER_LIST_ERROR } from '../types';


describe('# Server list page actions', () => {
  it('should contain required properties', () => {
    const expectedServerListFetch = {
      type: SERVER_LIST_FETCH,
      token: 'expectedToken',
    };

    const expectedServerListReceived = {
      type: SERVER_LIST_RECEIVED,
      list: [],
    };

    const expectedServerListError = {
      type: SERVER_LIST_ERROR,
      error: 'error',
    };

    expect(serverListFetch('expectedToken')).toEqual(expectedServerListFetch);
    expect(serverListReceived([])).toEqual(expectedServerListReceived);
    expect(serverListError('error')).toEqual(expectedServerListError);
  });
});
