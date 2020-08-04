import { Epic, ofType } from 'redux-observable';
import { createAction, ActionType } from 'typesafe-actions';
import { push as routerPush } from 'connected-react-router';
import { map } from 'rxjs/operators';

export const RoutesMap = {
  LOGIN_ROUTE: '/login',
  HOME_ROUTE: '/',
  UNKNOWN_ROUTE: '*',
};

enum RoutesActionTypes {
  PUSH = '@routes/PUSH',
}

export const actions = {
  push: createAction(RoutesActionTypes.PUSH)<string>(),
};

export type RouteAction = ActionType<typeof actions>;

const pushRoute: Epic<RouteAction, any> = action$ =>
  action$.pipe(
    ofType(RoutesActionTypes.PUSH),
    map(({ payload }) => routerPush(payload)),
  );

export const routesEpic = [pushRoute];
