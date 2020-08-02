import { combineEpics } from 'redux-observable';
import { authEpic } from './ducks/auth';
import { routesEpic } from './ducks/routes';
import { serversEpic } from './ducks/servers';

export const rootEpic = combineEpics(...[...authEpic, ...routesEpic, ...serversEpic]);
