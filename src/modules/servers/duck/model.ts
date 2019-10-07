import { GetActionTypes } from '@redux/createAction';

import { serverActions } from './actions';

export interface ServerState {
  servers: Server[];
  loading: boolean;
}

export interface Server {
  name: string;
  distance: number;
}

export type ServerAction = GetActionTypes<typeof serverActions>;
export type ServerActions = typeof serverActions;
export type GetServerActions<T extends keyof typeof serverActions> = ReturnType<
  typeof serverActions[T]
>;
