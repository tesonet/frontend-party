import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ApiMiddleware } from '../utils';
import * as loginActions from '../reducers/login/actions';
import * as serversActions from '../reducers/servers/actions';
import loginReducer from '../reducers/login/reducer';
import * as loginTypes from '../reducers/login/actionTypes';
import { baseUrl } from '../utils/Constants';

const middlewares = [thunk, ApiMiddleware(baseUrl)];
const createMockStore = configureStore(middlewares);

describe('redux api middleware test', () => {
  describe('loginActions', () => {
    const loginData = { username: 'tesonet', password: 'partyanimal' };
    const badLoginData = { username: 'tesonet', password: 'empty' };
    const expectedPayload = { token: 'f9731b590611a5a9377fbd02f247fcdf' };
    const failPayload = { message: 'Unauthorized' };

    it('should dispatch FETCH_TOKEN & TOKEN_FAILURE', done => {
      const store = createMockStore({ login: { token: null } });

      store.subscribe(() => {
        const dispatchedActions = store.getActions();

        if (dispatchedActions.length === 1) {
          const action = dispatchedActions[0].type;
          expect(action).toEqual('tesonettask.login.FETCH_TOKEN');
        }

        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.login.FETCH_TOKEN');
          expect(dispatchedActions[1].type).toEqual('tesonettask.login.TOKEN_FAILURE');
          expect(dispatchedActions[1].payload).toEqual(failPayload);
          done();
        }

      });

      store.dispatch(loginActions.login(badLoginData));
    });

    it('should dispatch FETCH_TOKEN & TOKEN_SUCCESS', done => {
      const store = createMockStore({ login: { token: null } });

      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          const action = dispatchedActions[0].type;
          expect(action).toEqual('tesonettask.login.FETCH_TOKEN');
        }

        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.login.FETCH_TOKEN');
          expect(dispatchedActions[1].type).toEqual('tesonettask.login.TOKEN_SUCCESS');
          expect(dispatchedActions[1].payload).toEqual(expectedPayload);
          done();
        }
      });

      store.dispatch(loginActions.login(loginData));
    });

    it('should dispatch LOGOUT', done => {
      const store = createMockStore({ login: { token: 'dummyToken' } });

      store.subscribe(() => {
        const dispatchedActions = store.getActions();

        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.login.LOGOUT');
          done();
        }
      });

      store.dispatch(loginActions.logout());
    });

    it('should remove token on LOGOUT', () => {
      const initialState = { login: {
        errorMessage: false,
        isFetching: false,
        token: 'dummyToken'
      }};
      const expected = { errorMessage: false, isFetching: false, token: null };
      const action = { type: loginTypes.LOGOUT };

      expect(loginReducer(initialState, action)).toEqual(expected);
    });
  });

  describe('serversActions', () => {
    const failPayload = { message: 'Unauthorized' };
    const expectedKeys = ['name', 'distance'];

    it('should dispatch FETCH & FAILURE', done => {
      const store = createMockStore({ login: { token: null }, servers: {} });
      store.subscribe(() => {
        const dispatchedActions = store.getActions();

        if (dispatchedActions.length === 1) {
          const action = dispatchedActions[0].type;
          expect(action).toEqual('tesonettask.servers.FETCH');
        }

        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.servers.FETCH');
          expect(dispatchedActions[1].type).toEqual('tesonettask.servers.FAILURE');
          expect(dispatchedActions[1].payload).toEqual(failPayload);
          done();
        }
      });

      store.dispatch(serversActions.fetch());
    });

    it('should dispatch FETCH & SUCCESS', done => {
      const store = createMockStore({ login: { token: 'f9731b590611a5a9377fbd02f247fcdf' }, servers: {} });
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.servers.FETCH');
        }

        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).toEqual('tesonettask.servers.FETCH');
          expect(dispatchedActions[1].type).toEqual('tesonettask.servers.SUCCESS');
          expect(Array.isArray(dispatchedActions[1].payload)).toEqual(true);

          if (dispatchedActions[1].payload && dispatchedActions[1].payload.length > 0) {
            const dataObject = dispatchedActions[1].payload[0];
            expect(Object.keys(dataObject)).toEqual(expectedKeys);
          }

          done();
        }
      });

      store.dispatch(serversActions.fetch());
    });
  });
});
