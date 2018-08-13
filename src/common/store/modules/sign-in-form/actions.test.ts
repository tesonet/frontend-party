jest.mock('./validation');
jest.mock('./api');

import configureStore from 'common/store/configure-store';
import { signIn, validateField } from './actions';
import { fetchToken } from './api';
import { Status } from './types';
import { validatePassword, validateUsername } from './validation';

describe('sign-in-form actions', () => {
  describe('#validateField', () => {
    it('should set field isValid to true when validator does not throw', () => {
      const store = configureStore({
        signInForm: {
          fields: {
            username: { isValid: false, value: 'test', error: 'test error' }
          }
        }
      });

      (validateUsername as any).mockImplementation();

      store.dispatch(validateField('username'));
      const nextState = store.getState().signInForm.fields.username;

      expect(nextState.isValid).toEqual(true);
      expect(nextState.error).toEqual(null);
    });

    it('should set field to isValid false when validator throws', () => {
      const store = configureStore({
        signInForm: {
          fields: {
            username: { isValid: true, value: 'test', error: null }
          }
        }
      });

      const error = new Error('test error');

      (validateUsername as jest.Mock).mockImplementation(() => {
        throw error;
      });

      store.dispatch(validateField('username'));
      const nextState = store.getState().signInForm.fields.username;

      expect(nextState.isValid).toEqual(false);
      expect(nextState.error).toEqual(error);
    });
  });

  describe('#signIn', () => {
    it('should set auth flags to true, when fields are valid and request succeeds', async () => {
      const store = configureStore({
        signInForm: {
          fields: {
            password: { value: 'test-password', isValid: true, error: null },
            username: { value: 'test-username', isValid: true, error: null }
          }
        }
      });

      const token = 'test-token';
      (validateUsername as jest.Mock).mockImplementation();
      (validatePassword as jest.Mock).mockImplementation();
      (fetchToken as jest.Mock).mockImplementation(() => ({
        token
      }));

      await store.dispatch(signIn());
      const nextState = store.getState();

      expect(nextState.auth.token).toEqual(token);
      expect(nextState.auth.isAuthenticated).toEqual(true);
      expect(nextState.signInForm.status).toEqual(Status.Idle);
    });

    it('should set error when fields are valid and request fails', async () => {
      const store = configureStore({
        signInForm: {
          fields: {
            password: { value: 'test-password', isValid: true, error: null },
            username: { value: 'test-username', isValid: true, error: null }
          }
        }
      });

      (validateUsername as jest.Mock).mockImplementation();
      (validatePassword as jest.Mock).mockImplementation();
      (fetchToken as jest.Mock).mockImplementation(() => {
        throw new Error('Fail!');
      });

      await store.dispatch(signIn());
      const nextState = store.getState();

      expect(nextState.auth.token).toEqual(null);
      expect(nextState.auth.isAuthenticated).toEqual(false);
      expect(nextState.signInForm.error).toBeTruthy();
      expect(nextState.signInForm.status).toEqual(Status.Error);
    });

    it('should set status to `loading` while waiting for reponse', () => {
      const store = configureStore({
        signInForm: {
          fields: {
            password: { value: 'test-password', isValid: true, error: null },
            username: { value: 'test-username', isValid: true, error: null }
          }
        }
      });

      (validateUsername as jest.Mock).mockImplementation();
      (validatePassword as jest.Mock).mockImplementation();
      (fetchToken as jest.Mock).mockImplementation(() => ({
        token: 'test'
      }));

      store.dispatch(signIn());
      const nextState = store.getState();

      expect(nextState.signInForm.status).toEqual(Status.Loading);
    });
  });
});
