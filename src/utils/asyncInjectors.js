import createReducer from '../reducers/createReducer';

/**
 * Inject an asynchronously loaded reducer
 */
const injectAsyncReducer = (store) => (name, asyncReducer) => {
  if (Reflect.has(store.asyncReducers, name)) {
    return;
  }
  store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(createReducer(store.asyncReducers));
};

/**
 * Inject an asynchronously loaded saga
 */
const injectAsyncSagas = (store) => (sagas) => sagas.map(store.runSaga);

/**
 * Helper for creating injectors
 */
export const getAsyncInjectors = (store) => ({
  injectReducer: injectAsyncReducer(store),
  injectSagas: injectAsyncSagas(store),
});
