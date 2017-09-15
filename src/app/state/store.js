import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {reducer as formReducer} from 'redux-form';

import auth from '~/auth';
import resources from '~/resources';

import history from './history';
import epics from './epics';


const store = createStore(
  combineReducers({
    [auth.constants.NAME]: auth.reducer,
    [resources.constants.NAME]: resources.reducer,
    form: formReducer,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
    createEpicMiddleware(combineEpics(...Object.values(epics))),
  )),
);

export default store;
