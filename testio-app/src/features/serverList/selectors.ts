import { IApp } from 'types';

export const getServerByUid = (state: IApp, { uid }: IUid) =>
  state.serverList.byUid[uid];
