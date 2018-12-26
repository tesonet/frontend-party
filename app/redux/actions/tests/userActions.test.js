import {
  CLEAR_USER,
  RECEIVE_USER,
  REJECT_USER,
  REQUEST_USER
} from 'app/utils/constants';
import {
  clearUser,
  receiveUser,
  rejectUser,
  requestUser
} from 'app/redux/actions/userActions';

describe('User Actions', () => {
  describe('requestUser', () => {
    it('should return the correct type, loading/rejected boolean values and passed credentials', () => {
      const credentials = {
        username: 'user',
        password: 'pass',
      };

      const expectedResult = {
        type: REQUEST_USER,
        loading: true,
        rejected: false,
        credentials,
      };

      expect(requestUser(credentials))
        .toEqual(expectedResult);
    });
  });

  describe('receiveUser', () => {
    it('should return the correct type and loading boolean', () => {
      const expectedResult = {
        type: RECEIVE_USER,
        loading: false
      };

      expect(receiveUser({}))
        .toEqual(expectedResult);
    });
  });

  describe('rejectUser', () => {
    it('should return the correct type and loading/rejected boolean values', () => {
      const error = 'sample-error';

      const expectedResult = {
        type: REJECT_USER,
        loading: false,
        rejected: true,
      };

      expect(rejectUser(error))
        .toEqual(expectedResult);
    });
  });

  describe('clearUser', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CLEAR_USER
      };

      expect(clearUser())
        .toEqual(expectedResult);
    });
  });
});
