import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import middlewares from '../middleware';
import { authenticate } from './actions';
import { getToken } from './selectors';
import * as types from './actionTypes';
import appStore from '../store';

const mockStore = configureMockStore(middlewares);

describe('authentication', () => {
  it('should get user authentication token', () => {
    const { store } = appStore;
    const payload = {
      token: 'TOKEN',
    };

    store.dispatch({
      type: types.AUTHENTICATE_SUCCESS,
      payload,
    });
    expect(getToken(store.getState())).toEqual(payload.token);
  });

  it('should dispatch AUTHENTICATE when authenticate is called and then follow with AUTHENTICATE_SUCCESS', () => {
    const store = mockStore({});
    const body = {
      username: 'tesonet',
      password: 'partyanimal',
    };

    const token = 'TOKEN';

    nock('http://playground.tesonet.lt/v1')
      .persist()
      .post('/tokens', body)
      .reply(200, { token });

    const expectedActions = [
      { type: types.AUTHENTICATE },
      { type: types.AUTHENTICATE_SUCCESS, payload: { token } },
    ];
    return store.dispatch(authenticate(body.username, body.password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
