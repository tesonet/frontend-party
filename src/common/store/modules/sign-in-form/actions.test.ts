jest.mock('./validation');

import configureStore from 'common/store/configure-store';
import { validateField } from './actions';
import { validateUsername } from './validation';

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

      (validateUsername as any).mockImplementation(() => {
        throw error;
      });

      store.dispatch(validateField('username'));
      const nextState = store.getState().signInForm.fields.username;

      expect(nextState.isValid).toEqual(false);
      expect(nextState.error).toEqual(error);
    });
  });
});
