import { IAppState } from 'common/store/types';
import { compareNumberAsc, compareStringAsc } from 'common/utils/sort';
import { createSelector } from 'reselect';
import { IServer, OrderBy } from './types';

const compareServersByNameAsc = (a: IServer, b: IServer) =>
  compareStringAsc(a.name, b.name);
const compareServersByDistanceAsc = (a: IServer, b: IServer) =>
  compareNumberAsc(a.distance, b.distance);

export const getIds = createSelector(
  (state: IAppState) => state.serverList.ids,
  (state: IAppState) => state.serverList.byId,
  (state: IAppState) => state.serverList.orderBy,
  (ids, byId, orderBy) =>
    ids
      .map(id => byId[id])
      .sort(
        orderBy === OrderBy.Name
          ? compareServersByNameAsc
          : compareServersByDistanceAsc
      )
      .map(server => server.id)
);
