import { actions as authActions } from '../ducks/auth/actions';

export const loadPersistedToken = (store) => {
  store.dispatch(authActions.registerToken(localStorage.getItem('token')));
};
