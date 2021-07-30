import { useApiAction } from '@Common/hooks';

import { AUTH_ERROR, DEFAULT_ERROR } from '@Common/config/errorMessages';

import getToken from '../services/getToken';

const useLogin = (errorHandler) => useApiAction(
  (username, password) => getToken(username, password),
  errorHandler,
  (status) => (status === 401 ? AUTH_ERROR : DEFAULT_ERROR),
);

export default useLogin;
