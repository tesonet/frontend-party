import memoryHistory from 'common/memoryHistory';
import { Routes } from 'common/routes';
import configureStore from 'common/store/configure-store';
import { maybeRedirect } from './actions';

describe('home actions', () => {
  describe('#maybeRedirect', () => {
    // Currently changing route in actions doesn't work in tests
    it.skip('should redirect to sign in route if user is not authenticated', () => {
      const store = configureStore(
        {
          auth: { isAuthenticated: false, token: null },
          router: {
            location: {
              pathname: Routes.Home
            }
          }
        },
        memoryHistory
      );

      store.dispatch(maybeRedirect());
      const nextState = store.getState();
      expect(nextState.router.location.pathname).toEqual(Routes.SignIn);
    });
  });
});
