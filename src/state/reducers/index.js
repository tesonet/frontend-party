import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import serverList from './serverList';

export default combineReducers({
  auth,
  serverList,
  router: routerReducer,
});
