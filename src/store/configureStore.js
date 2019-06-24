import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import setAuthToken from '../reducers/setAuthToken';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      authToken: setAuthToken
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
