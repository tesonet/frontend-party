import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from 'store/modules/authentication/reducer';
import notification from 'store/modules/notification/reducer';
import servers from 'store/modules/servers/reducer';
import loading from 'store/modules/loading/reducer';
import { LocationState } from 'history';
import * as ROOT_REDUCER_ACTION_TYPES from './constants';

const appReducer = (history: LocationState) => combineReducers({
  router: connectRouter(history),
  authentication,
  notification,
  servers,
  loading,
});

const rootReducer = (history: LocationState) => (state: any, action: any) => {
  if (action.type === ROOT_REDUCER_ACTION_TYPES.RESET_STATE) {
    state = undefined; // eslint-disable-line no-param-reassign
  }
  return appReducer(history)(state, action);
};

export default rootReducer;
