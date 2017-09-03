import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import auth from '~/auth';

// import * as reducers from './reducers';
import history from './history';


const store = createStore(
  combineReducers({
    // ...reducers,
    [auth.constants.NAME]: auth.reducer,
    form: formReducer,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
  )),
);

export default store;
