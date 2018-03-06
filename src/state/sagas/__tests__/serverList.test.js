import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  serverListRequest,
  serverListReceive,
  serverListError,
} from '../../actions/serverList';
import { serverList } from '../serverList';
import serverListReducer from '../../reducers/serverList';
import { getServerList } from '../../../utils/api';
import { errors as copy } from '../../../assets/copy/global.json';

describe('ServerList sagas', () => {
  const token = 'auth-token-12345';
  const serverListMock = [
    { name: 'Lithuania #1', distance: '123' },
    { name: 'USA #2', distance: '234' },
    { name: 'Brazil #3', distance: '345' },
    { name: 'Australia #4', distance: '456' },
    { name: 'Japan #5', distance: '567' },
  ];
  const initialState = {
    list: [],
    isLoading: false,
    error: null,
  };

  it('should retrieve the server list and store it in state.', () => {
    const expectedState = {
      ...initialState,
      list: serverListMock,
    };

    return expectSaga(serverList, { token })
      .provide([
        [call(getServerList)],
        [matchers.call.fn(getServerList), serverListMock],
      ])
      .withReducer(serverListReducer, initialState)
      .put(serverListReceive(serverListMock))
      .dispatch(serverListRequest(token))
      .hasFinalState(expectedState)
      .run();
  });

  it('should throw an error if token is not provided to the saga.', () => {
    const error = copy.errorUnauthorized;
    const expectedState = {
      ...initialState,
      error,
    };

    expectSaga(serverList, {})
      .provide([
        [call(getServerList)],
        [matchers.call.fn(getServerList), throwError(error)],
      ])
      .withReducer(serverListReducer, initialState)
      .put(serverListError(error))
      .hasFinalState(expectedState)
      .run();
  });

  it('should throw an error if something goes wrong during the request.', () => {
    const error = copy.errorServerListRetrieve;
    const expectedState = {
      ...initialState,
      error,
    };

    expectSaga(serverList, { token })
      .provide([
        [call(getServerList)],
        [matchers.call.fn(getServerList), throwError(error)],
      ])
      .withReducer(serverListReducer, initialState)
      .put(serverListError(error))
      .dispatch(serverListRequest)
      .hasFinalState(expectedState)
      .run();
  });
});
