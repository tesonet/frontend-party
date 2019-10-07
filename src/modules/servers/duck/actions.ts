import { createAction } from '@redux/createAction';

import { Server } from './model';

export enum ServerActionTypes {
  GetAll = 'SERVERS_GET_ALL',
  GetAllDone = 'SERVERS_GET_ALL_DONE',
}

export const serverActions = {
  getAll: () => createAction(ServerActionTypes.GetAll),
  getAllDone: (servers: Server[]) =>
    createAction(ServerActionTypes.GetAllDone, { servers }),
};
