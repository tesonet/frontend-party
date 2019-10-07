import { toasterManagerActions } from '@modules/toaster/duck/actions';
import { EpicType } from '@redux/epicType';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { ServerActionTypes, serverActions } from './actions';
import { GetServerActions } from './model';

const getAll: EpicType<GetServerActions<'getAll'>, Action> = (
  action$,
  _,
  { serverService },
) =>
  action$.pipe(
    ofType(ServerActionTypes.GetAll),
    switchMap(() =>
      serverService.getServers().pipe(
        switchMap(({ data }) => of(serverActions.getAllDone(data))),
        catchError(e => of(toasterManagerActions.error({ text: e.message }))),
      ),
    ),
  );

export const serverEpics = {
  getAll,
};
