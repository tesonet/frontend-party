import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import middlewares from '../middleware';
import { requestServers } from './actions';
import { getServersData } from './selectors';
import * as types from './actionTypes';
import appStore from '../store';

const mockStore = configureMockStore(middlewares);

describe('servers', () => {
  const servers = [
    { name: 'first', distance: 400 },
    { name: 'second', distance: 123 },
    { name: 'third', distance: 435 },
    { name: 'fourth', distance: 6436 },
  ];

  it('should fetch servers', () => {
    const { store } = appStore;
    store.dispatch({
      type: types.REQUEST_SERVERS_SUCCESS,
      payload: servers,
    });
    expect(getServersData(store.getState())).toEqual(servers);
  });

  it('should dispatch REQUEST_SERVERS when requestServers is called and then follow with REQUEST_SERVERS_SUCCESS', () => {
    const store = mockStore({});

    nock('http://playground.tesonet.lt/v1')
      .persist()
      .get('/servers')
      .reply(200, { servers });

    const expectedActions = [
      { type: types.REQUEST_SERVERS },
      { type: types.REQUEST_SERVERS_SUCCESS, payload: { servers } },
    ];
    return store.dispatch(requestServers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
