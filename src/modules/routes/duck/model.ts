import { GetActionTypes } from '@redux/createAction';

import { routeActions } from './actions';

export type RouteAction = GetActionTypes<typeof routeActions>;
export type RouteActions = typeof routeActions;
export type GetRouteActions<T extends keyof typeof routeActions> = ReturnType<
  typeof routeActions[T]
>;
