import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};


export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      exact: true,
      name: 'server-list',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./containers/ServerListPage/reducer'),
          import('./containers/AuthPage/reducer'),
          import('./containers/ServerListPage/sagas'),
          import('./containers/AuthPage/sagas'),
          import('./containers/ServerListPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          serverListReducer,
          authReducer,
          serverListSagas,
          authSaga,
          component,
        ]) => {
          injectReducer('server-list', serverListReducer.default);
          injectReducer('auth', authReducer.default);
          injectSagas(serverListSagas.default);
          injectSagas(authSaga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/login',
      name: 'auth',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./containers/AuthPage/reducer'),
          import('./containers/AuthPage/sagas'),
          import('./containers/AuthPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('auth', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('./containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
