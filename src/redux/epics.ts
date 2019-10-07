import { authEpics } from '@modules/auth/duck/epics';
import { routeEpics } from '@modules/routes/duck/epics';
import { serverEpics } from '@modules/servers/duck/epics';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { Dependencies } from './dependencies';

const createEpicsContext = (dependencies: Dependencies) => {
  const epics = [authEpics, routeEpics, serverEpics];
  const flattenedEpics = epics
    .map(Object.values)
    .reduce((acc, epicsArr) => acc.concat(epicsArr), []);
  const rootEpics = combineEpics(...flattenedEpics);
  const epicMiddleware = createEpicMiddleware({ dependencies });
  return { rootEpics, epicMiddleware };
};

export { createEpicsContext };
