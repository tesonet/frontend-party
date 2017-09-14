import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {action} from '~/common/redux';

import * as utilsMock from './utils';
import * as selectorsMock from './selectors';
import * as actions from './actions';
import * as types from './actionTypes';


utilsMock.isActuallyAuthenticated = jest.fn();
utilsMock.removeSession = jest.fn();
utilsMock.setSession = jest.fn();
utilsMock.getToken = jest.fn();
selectorsMock.isAuthenticated = jest.fn();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


// logIn ===============================================================================================================
describe('logIn', () => {
  beforeEach(() => {
    utilsMock.setSession.mockReset();
  });


  it('throws error when no token given', () => {
    expect(actions.logIn).toThrow(Error);
  });


  it('sets session token', () => {
    const token = 'sample_token1';

    expect(actions.logIn(token)).toEqual(action(types.LOGGED_IN));
    expect(utilsMock.setSession.mock.calls.length).toBe(1);
    expect(utilsMock.setSession.mock.calls[0][0]).toEqual(token);
  });
});


// logOut ==============================================================================================================
describe('logOut', () => {
  beforeEach(() => {
    utilsMock.removeSession.mockReset();
  });


  it('removes session', () => {
    expect(actions.logout()).toEqual(action(types.LOGGED_OUT));
    expect(utilsMock.removeSession.mock.calls.length).toBe(1);
  });
});


// syncAuth ============================================================================================================
describe('syncAuth', () => {
  let store;

  beforeEach(() => {
    store = mockStore(null);
    utilsMock.isActuallyAuthenticated.mockReset();
    utilsMock.removeSession.mockReset();
    selectorsMock.isAuthenticated.mockReset();
  });


  it('takes no actions when NOT authenticated in store and in storage', () => {
    utilsMock.isActuallyAuthenticated.mockReturnValue(true);
    selectorsMock.isAuthenticated.mockReturnValue(true);
    const expectedActions = [];
    return store.dispatch(actions.syncAuth())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('takes no actions when authenticated in store and in storage', () => {
    utilsMock.isActuallyAuthenticated.mockReturnValue(false);
    selectorsMock.isAuthenticated.mockReturnValue(false);
    const expectedActions = [];
    return store.dispatch(actions.syncAuth())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('sets authenticated to store when is authenticated in storage', () => {
    utilsMock.isActuallyAuthenticated.mockReturnValue(true);
    selectorsMock.isAuthenticated.mockReturnValue(false);
    const expectedActions = [action(types.AUTHENTICATION_SET, true)];
    return store.dispatch(actions.syncAuth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('sets not authenticated to store when is not authenticated in storage', () => {
    utilsMock.isActuallyAuthenticated.mockReturnValue(false);
    selectorsMock.isAuthenticated.mockReturnValue(true);
    const expectedActions = [action(types.AUTHENTICATION_SET, false)];
    return store.dispatch(actions.syncAuth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(utilsMock.removeSession.mock.calls.length).toBe(1);
    });
  });
});
