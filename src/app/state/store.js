import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {reducer as formReducer} from 'redux-form';

import auth from '~/auth';

import history from './history';
// import * as reducers from './reducers';
import epics from './epics';


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
    createEpicMiddleware(combineEpics(...Object.keys(epics).map(key => epics[key]))),
  )),
);

export default store;
