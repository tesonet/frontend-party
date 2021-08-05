import { errorMessages, useApiAction } from '@Common';

import getToken from '../services/getToken';

const useLogin = (errorHandler) => useApiAction(
  (username, password) => getToken(username, password),
  errorHandler,
  (status) => (status === 401 ? errorMessages.AUTH_ERROR : errorMessages.DEFAULT_ERROR),
);

export default useLogin;
