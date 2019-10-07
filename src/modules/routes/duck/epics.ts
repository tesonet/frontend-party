import { EpicType } from '@redux/epicType';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

import { RouteActionType } from './actions';
import { GetRouteActions } from './model';

const navigate: EpicType<GetRouteActions<'open'>, Action> = action$ =>
  action$.pipe(
    ofType(RouteActionType.Push),
    map(({ payload: { path } }) => push(path)),
  );

export const routeEpics = { navigate };
