jest.mock('./api');

import configureStore from 'common/store/configure-store';
import { fetchList, normalizeServerList } from './actions';
import { fetchServers } from './api';
import { IServerJSON, ServersReponseJSON } from './types';

const firstServer: IServerJSON = { name: 'first', distance: 1 };
const secondServer: IServerJSON = { name: 'second', distance: 2 };
const serversResponse: ServersReponseJSON = [firstServer, secondServer];

describe('server-list actions', () => {
  describe('#normalizeServerList', () => {
    it('should deserialize array to byId', () => {
      const normalizedData = normalizeServerList(serversResponse);

      const ids = Object.keys(normalizedData);

      const firstId = ids[0];
      const secondId = ids[1];

      expect(normalizedData[firstId]).toEqual({ ...firstServer, id: firstId });
      expect(normalizedData[secondId]).toEqual({
        ...secondServer,
        id: secondId
      });
    });
  });

  describe('#fetchList', () => {
    it('should fetch and set to store', async () => {
      const store = configureStore({
        auth: { isAuthenticated: true, token: 'TEST' }
      });

      (fetchServers as any).mockResolvedValue(serversResponse);

      await store.dispatch(fetchList());
      const state = store.getState();

      expect(state.serverList.ids.length).toEqual(serversResponse.length);

      const firstId = state.serverList.ids[0];
      expect(state.serverList.byId[firstId]).toEqual({
        ...firstServer,
        id: firstId
      });

      const secondId = state.serverList.ids[1];
      expect(state.serverList.byId[secondId]).toEqual({
        ...secondServer,
        id: secondId
      });
    });
  });
});
