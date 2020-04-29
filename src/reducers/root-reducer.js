import { combineReducers } from 'redux';

import currentUser from './current-user';
import serverList from './server-list';

const rootReducer = combineReducers({
  currentUser,
  serverList,
});

export default rootReducer