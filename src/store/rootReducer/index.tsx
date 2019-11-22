import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from 'store/modules/authentication/reducer';
import * as ROOT_REDUCER_ACTION_TYPES from './constants';

const appReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  authentication,
});

const rootReducer = (history: any) => (state: any, action: any) => {
  if (action.type === ROOT_REDUCER_ACTION_TYPES.RESET_STATE) {
    state = undefined; // eslint-disable-line no-param-reassign
  }
  return appReducer(history)(state, action);
};

export default rootReducer;
