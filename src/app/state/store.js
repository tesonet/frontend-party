import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {apiMiddleware} from 'redux-api-middleware';

// import * as reducers from './reducers';
import history from './history';


const store = createStore(
  combineReducers({
    form: formReducer,
    router: routerReducer,
    // ...reducers,
  }),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
    apiMiddleware,
  )),
);

export default store;
