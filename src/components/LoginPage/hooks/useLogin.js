import { useApiAction } from '@Common/hooks';

import getToken from '../services/getToken';

const useLogin = () => useApiAction((username, password) => getToken(username, password));

export default useLogin;
