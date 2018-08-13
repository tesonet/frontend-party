import configureStore from 'common/store/configure-store';
import { IAppState } from 'common/store/types';
import { DeepPartial } from 'common/utils/types';
import { init, logOut, setToken, STORAGE_KEY } from './actions';

describe('auth actions', () => {
  describe('#logOut', () => {
    it('should remove token and set isAuthenticated to false', () => {
      const state: DeepPartial<IAppState> = {
        auth: { isAuthenticated: true, token: 'TEST' }
      };
      const store = configureStore(state);

      store.dispatch(logOut());

      const nextState = store.getState();

      expect(nextState.auth.isAuthenticated).toEqual(false);
      expect(nextState.auth.token).toEqual(null);
    });
  });

  describe('#setToken', () => {
    it('should set token to store when token is not null', () => {
      const store = configureStore({
        auth: { isAuthenticated: false, token: null }
      });
      const token = 'TEST';

      store.dispatch(setToken(token));
      const nextState = store.getState();
      expect(nextState.auth.token).toEqual(token);
    });

    it('should set token to localstorage when token is not null', () => {
      const store = configureStore({
        auth: { isAuthenticated: false, token: null }
      });
      const token = 'TEST';

      store.dispatch(setToken(token));
      const result = localStorage.getItem(STORAGE_KEY);

      expect(result).toEqual(token);
    });

    it('should remove token from localstorage when token is null', () => {
      const store = configureStore({
        auth: { token: 'TEST' }
      });
      const token = null;

      store.dispatch(setToken(token));
      const result = localStorage.getItem(STORAGE_KEY);

      expect(result).toEqual(token);
    });
  });

  describe('#init', () => {
    it('should set token and isAuthenticated to true when token is retrieved from localStorage', () => {
      const token = 'TEST';
      localStorage.setItem(STORAGE_KEY, token);
      const store = configureStore({
        auth: { token: null, isAuthenticated: false }
      });

      store.dispatch(init());

      const state = store.getState();

      expect(state.auth.token).toEqual(token);
      expect(state.auth.isAuthenticated).toEqual(true);
    });
  });
});
