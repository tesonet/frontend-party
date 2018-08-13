import { maybeRedirect } from 'common/store/modules/home/actions';
import { Thunk } from 'common/store/types';
import { createActionCreator } from 'common/utils/redux';
import { IById } from 'common/utils/types';
import { batchActions } from 'redux-batched-actions';
import * as uuid from 'uuid/v4';
import wretch from 'wretch';
import { SET_BY_ID, SET_IDS, SET_ORDER_BY } from './constants';
import { IServer, OrderBy, ServersReponseJSON } from './types';

const setById = createActionCreator<IById<IServer>>(SET_BY_ID);
const setIds = createActionCreator<string[]>(SET_IDS);
export const setOrderBy = createActionCreator<OrderBy>(SET_ORDER_BY);

const normalizeServerList = (servers: ServersReponseJSON): IById<IServer> =>
  servers.reduce(
    (byId, server) => {
      const id = uuid();
      const entity: IServer = {
        ...server,
        id
      };

      byId[id] = entity;

      return byId;
    },
    {} as IById<IServer>
  );

const serversAPI = wretch('http://playground.tesonet.lt/v1/servers');

export const fetchList = (): Thunk => async (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) {
    return dispatch(maybeRedirect());
  }

  const response = await serversAPI
    .headers({ Authorization: token })
    .get()
    .res();

  if (!response.ok || response.status !== 200) {
    throw new Error('Failed to fetch servers list');
  }

  const servers = await response.json();
  const byId = normalizeServerList(servers);
  const ids = Object.keys(byId);

  return dispatch(batchActions([setById(byId), setIds(ids)]));
};
