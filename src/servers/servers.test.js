import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import fetch from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from './actionTypes';
import * as actions from './actions';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SERVERS actions', () => {
  it('should provide servers list', () => {
    let servers = [
      { server: 1, name: 'first' },
      { server: 2, name: 'second' },
      { server: 3, name: 'third' }
    ];

    let expectedAction = {
      type: types.GET_SERVERS_SUCCESS,
      payload: {
        servers: servers
      }
    };

    expect(actions.getServersSuccess(servers)).toEqual(expectedAction);
  });

  it('should create an action to get the error message', () => {
    let error = 'Unauthorized';

    let expectedAction = {
      type: types.GET_SERVERS_FAILURE,
      payload: {
        error: 'Something went wrong. Try logging out and then back in.'
      }
    };

    expect(actions.getServersFailure(error, 'servers')).toEqual(expectedAction);
  });
});

describe('SERVERS async actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should create an action for authorization', () => {
    fetch.mockResponse('http://playground.tesonet.lt/v1/servers', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer fakeTokenXXX123'
      }
    });

    let expectedAction = [
      { type: types.GET_SERVERS_REQUEST },
      {
        type: types.GET_SERVERS_FAILURE,
        payload: {
          error: 'Something went wrong. Try logging out and then back in.'
        }
      }
    ];

    let store = mockStore();

    return store
      .dispatch(actions.getServers('username', 'password'))
      .then(() => {})
      .catch(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
