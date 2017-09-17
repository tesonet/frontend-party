import { REHYDRATE } from 'redux-persist/constants';
import { Action } from 'redux-actions';
import {
  authorizeErr,
  authorizeRehydrate,
  authorizeReq,
  authorizeRes,
  destroy,
  IPayloadAuthorizeReq,
  IPayloadAuthorizeRes,
} from '../reducers/tokenReducer';
import { initialize } from '../reducers/initializationReducer';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { fetchTokenByUsernameAndPassword } from '../services/RequestToken';
import { setAuthorizationToken } from '../services/RequestHTTP';
import { IStore } from '../reducers';

const authorizeReqEpic = (
  observable: ActionsObservable<any>,
) =>
  observable
    .ofType(authorizeReq.toString())
    .mergeMap((action: Action<IPayloadAuthorizeReq>) =>
      fetchTokenByUsernameAndPassword(
        action.payload!.username,
        action.payload!.password,
      ).then((token: string) => {
        setAuthorizationToken(token);
        return authorizeRes({ token });
      }).catch(() => authorizeErr()),
    );

const authorizeSetAxiosToken = (
  observable: ActionsObservable<any>,
  store: IStore,
) =>
  observable
    .ofType(
      authorizeRes.toString(),
      authorizeRehydrate.toString(),
      destroy.toString())
    .map(store.getState)
    .do((state) => setAuthorizationToken(state.token.token))
    .filter(() => false);

const authorizeResetOnRehydrateEpic = (
  observable: ActionsObservable<any>,
  store: IStore,
) =>
  observable
    .ofType(REHYDRATE)
    .do(() => store.dispatch(authorizeRehydrate()))
    .do(() => store.dispatch(initialize()))
    .filter(() => false);

export const tokenEpic = combineEpics(
  authorizeReqEpic,
  authorizeSetAxiosToken,
  authorizeResetOnRehydrateEpic,
);
