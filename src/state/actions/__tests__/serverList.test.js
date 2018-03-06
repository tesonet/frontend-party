import {
  serverListRequest,
  serverListReceive,
  serverListError,
} from '../serverList';
import {
  SERVER_LIST_REQUESTED,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_ERROR,
} from '../../../constants/actionTypes';

describe('ServerList actions', () => {
  it('should fire with the expected props.', () => {
    const serverListRequestPayload = {
      type: SERVER_LIST_REQUESTED,
      token: 'auth-token-12345',
    };

    const serverListReceivePayload = {
      type: SERVER_LIST_RECEIVED,
      serverList: [],
    };

    const serverListErrorPayload = {
      type: SERVER_LIST_ERROR,
      error: 'Error',
    };

    expect(serverListRequest(serverListRequestPayload.token)).toEqual(serverListRequestPayload);
    expect(serverListReceive(serverListReceivePayload.serverList)).toEqual(serverListReceivePayload);
    expect(serverListError(serverListErrorPayload.error)).toEqual(serverListErrorPayload);
  });
});
