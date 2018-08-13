import { IById } from 'common/utils/types';

export interface IServer {
  id: string;
  name: string;
  distance: number;
}

export enum OrderBy {
  Distance = 'distance',
  Name = 'name'
}

export interface IState {
  byId: IById<IServer>;
  ids: string[];
  orderBy: OrderBy;
}

export interface IServerJSON {
  name: string;
  distance: number;
}

export type ServersReponseJSON = IServerJSON[];
