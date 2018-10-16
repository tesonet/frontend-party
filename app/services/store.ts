import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import authMiddleware from 'Middlewares/authentication';
import reducers, { ReduxState } from 'Reducers/index';

export const getInitialState = (token: string): Partial<ReduxState> => {
  return token
    ? { auth: { token, isAuthenticated: true, loginError: '' } }
    : {};
};

export const configureStore = (initialState = {}, history) => {
  const middlewares = [reduxThunk, authMiddleware, routerMiddleware(history)];

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
};
