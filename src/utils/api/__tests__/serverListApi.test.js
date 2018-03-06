import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { orderServerList, getServerList } from '../serverListApi';
import { API_ENDPOINT_SERVERS } from '../../../constants/endpoints';
import { errors as copy } from '../../../assets/copy/global.json';
import serverListMock from './__mocks__/serverList.json';

describe('Server list API', () => {
  const token = 'auth-token-12345';
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  describe('orderServerList', () => {
    it('should order the supplied list of servers correctly.', () => {
      expect(orderServerList(serverListMock.raw)).toEqual(serverListMock.sorted);
    });
  });

  describe('getServerList', () => {
    it('should return a server list when it is called with a valid auth token.', () => {
      axiosMock.onGet(API_ENDPOINT_SERVERS).reply(200, serverListMock.raw);

      getServerList(token).then(response => {
        expect(response).toEqual(serverListMock.sorted);
      });
    });

    it('should throw an error when it is called without a valid auth token.', () => {
      const error = copy.errorServerListRetrieve;
      axiosMock.onGet(API_ENDPOINT_SERVERS).reply(401, { message: error });

      getServerList().catch(responseError => {
        expect(responseError).toEqual(new Error(error));
      });
    });
  });
});
