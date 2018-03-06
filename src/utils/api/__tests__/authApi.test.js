import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getAuthToken } from '../authApi';
import { API_ENDPOINT_AUTH } from '../../../constants/endpoints';
import { errors as copy } from '../../../assets/copy/global.json';

describe('Auth API: getAuthToken', () => {
  const token = 'auth-token-12345';
  const username = 'John Doe';
  const password = 'qwerty';
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  it('should return an auth token when it is called with a valid username & password.', () => {
    axiosMock.onPost(API_ENDPOINT_AUTH).reply(200, { token });

    getAuthToken(username, password).then(response => {
      expect(response).toBe(token);
    });
  });

  it('should throw an error when it is called with empty fields or the wrong data.', () => {
    const error = copy.errorAuthFail;
    axiosMock.onPost(API_ENDPOINT_AUTH).reply(401, { message: 'Unauthorized' });

    getAuthToken().catch(responseError => {
      expect(responseError).toEqual(new Error(error));
    });
  });
});
