import configureStore from 'redux-mock-store';
import AxiosMock from 'axios-mock-adapter';

import { actions } from '../actions';
import { api, initApi } from '../../../util/api';
import { getSortedServers } from '../selectors';

const mockStore = configureStore([]);
const axiosMock = new AxiosMock(api);

describe('async actions', () => {
  it('should load servers', async () => {
    const mockServers = [
      { name: 'server1', distance: 20 },
      { name: 'server2', distance: 30 },
      { name: 'server3', distance: 40 },
    ];

    axiosMock
      .onGet('/api/servers')
      .reply(200, mockServers);

    const store = mockStore({});
    initApi(store);

    await actions.loadServers()(store.dispatch);
    const expectedActions = [
      actions.loadServersDone(mockServers),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('selectors', () => {
  it('should return sorted servers', async () => {
    const unsortedServers = [
      { name: 'a', distance: 30 },
      { name: 'd', distance: 20 },
      { name: 'b', distance: 20 },
      { name: 'c', distance: 40 },
    ];
    const sortedServers = [
      { name: 'b', distance: 20 },
      { name: 'd', distance: 20 },
      { name: 'a', distance: 30 },
      { name: 'c', distance: 40 },
    ];

    const mockState = {
      servers: { list: unsortedServers },
    };

    expect(getSortedServers(mockState)).toEqual(sortedServers);
  });
});
