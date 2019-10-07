import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';

import { createDependencies } from './dependencies';
import { createEpicsContext } from './epics';
import { createRootReducer } from './reducer';

const initializeStore = (history: History) => {
  const rootReducer = createRootReducer(history);
  const epicsDependencies = createDependencies();
  const { rootEpics, epicMiddleware } = createEpicsContext(epicsDependencies);
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(routerMiddleware(history), ...[epicMiddleware])),
  );
  epicMiddleware.run(rootEpics);

  return store;
};

export { initializeStore };
