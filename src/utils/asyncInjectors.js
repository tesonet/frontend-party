import createReducer from '../reducers';
/**
 * Inject an asynchronously loaded reducer
 */
const injectAsyncReducer = (store) => {
  return function injectReducer(name, asyncReducer) {
    if (Reflect.has(store.asyncReducers, name)) {
      return;
    }
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
};
/**
 * Inject an asynchronously loaded saga
 */
const injectAsyncSagas = (store) => {
  return function injectSaga(sagas) {
    sagas.map(store.runSaga);
  }
};

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
  };
}
