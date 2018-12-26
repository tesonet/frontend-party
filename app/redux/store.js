import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'redux/reducers';


export function configureStore(initialState, sagaMiddleware) {
  let middleware = applyMiddleware(sagaMiddleware);

  middleware = composeWithDevTools(middleware);

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );

  return store;
}
