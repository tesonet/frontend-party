import { combineEpics, ActionsObservable } from 'redux-observable';
import { fetchServersList, IServerEntity } from '../services/RequestServers';
import { requestServerList, setServerList, setServerListError } from '../reducers/serversReducer';

const requestServerListEpic = (
  observable: ActionsObservable<any>,
) =>
  observable
    .ofType(requestServerList.toString())
    .mergeMap(() =>
      fetchServersList().then(
        (servers: IServerEntity[]) => setServerList(servers),
        () => setServerListError(),
      ),
    );

export const serversEpic = combineEpics(
  requestServerListEpic,
);
