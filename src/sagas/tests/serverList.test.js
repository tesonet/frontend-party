import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import { serverListFlow } from '../serverList';
import { getServerList } from '../../utils/api';
import { serverListFetch, serverListError, serverListReceived } from '../../actions/serverList';
import reducer from '../../reducers/serverList';

describe('# Server list page sagas', () => {
  const fakeServerList = [
    { name: 'Server 1', distance: '1' },
    { name: 'Server 2', distance: '2' },
    { name: 'Server 3', distance: '3' },
  ];

  const fakeToken = { token: 'token' };

  it('should fetch new server list', () => expectSaga(serverListFlow, fakeToken)
    .provide([
      [call(getServerList)], // eslint-disable-line redux-saga/yield-effects
      [matchers.call.fn(getServerList), fakeServerList],
    ])
    .withReducer(reducer)
    .put(serverListReceived(fakeServerList))
    .dispatch(serverListFetch(fakeToken.token))
    .run());

  it('should throw error if something goes wrong', () => expectSaga(serverListFlow, fakeToken)
    .provide([
      [call(getServerList)], // eslint-disable-line redux-saga/yield-effects
      [matchers.call.fn(getServerList), throwError('error')],
    ])
    .withReducer(reducer)
    .put(serverListError('error'))
    .dispatch(serverListFetch(fakeToken.token))
    .run());
});
