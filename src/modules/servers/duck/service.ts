import { Axios } from '../../../common/Axios';
import { config } from '../../../common/Config';

import { Server } from './model';

type ServerService = typeof serverService;

const serverService = {
  getServers: () =>
    Axios<Server[]>({
      url: `${config.apiUrl}/servers`,
      responseType: 'json',
    }),
};

export { serverService, ServerService };
