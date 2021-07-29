import { useApiAction } from '@Common/hooks';

import getToken from '../services/getToken';

const useLogin = (showError) => useApiAction(
  (username, password) => getToken(username, password),
  showError,
);

export default useLogin;
