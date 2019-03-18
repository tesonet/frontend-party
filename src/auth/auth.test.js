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

describe('AUTH actions', () => {
  it('should create an action to log user IN', () => {
    let expectedAction = {
      type: types.AUTH_SUCCESS,
      payload: {
        isLogged: true
      }
    };

    expect(actions.authorizationSuccess()).toEqual(expectedAction);
  });

  it('should create an action to log user OUT', () => {
    let expectedAction = {
      type: types.LOG_OUT,
      payload: {
        isLogged: false
      }
    };

    expect(actions.logUserOut()).toEqual(expectedAction);
  });

  it('should create an action to get the error message', () => {
    let error = 'Unauthorized';

    let expectedAction = {
      type: types.AUTH_FAILURE,
      payload: {
        error: 'The user name or password is incorrect. Please try again.'
      }
    };

    expect(actions.authorizationFailure(error)).toEqual(expectedAction);
  });
});

describe('AUTH async actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should create an action for authorization', () => {
    fetch.mockResponse('http://playground.tesonet.lt/v1/tokens', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'username',
        password: 'password'
      })
    });

    let expectedAction = [
      { type: types.AUTH_REQUEST },
      {
        type: types.AUTH_FAILURE,
        payload: {
          error: 'The user name or password is incorrect. Please try again.'
        }
      }
    ];

    let store = mockStore();

    return store
      .dispatch(actions.authorization('username', 'password'))
      .then(() => {})
      .catch(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
