import { Axios } from '../../../common/Axios';
import { config } from '../../../common/Config';

import { Credentials } from './model';

type AuthService = typeof authService;

const authService = {
  login: (credentials: Credentials) =>
    Axios<{ token: string }>({
      url: `${config.apiUrl}/tokens`,
      method: 'POST',
      data: credentials,
      responseType: 'json',
    }),
};

export { authService, AuthService };
