import update from 'immutability-helper';

import * as types from './actionTypes';
import {isActuallyAuthenticated} from './utils';


const DEFAULT_STATE = {
  isAuthenticated: isActuallyAuthenticated(),
};


export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case types.AUTHENTICATION_SET:
      return update(state, {$merge: {
        isAuthenticated: !!payload,
      }});
    case types.LOGGED_IN:
      return update(state, {$merge: {
        isAuthenticated: true,
      }});
    case types.LOGGED_OUT:
      return update(state, {$merge: {
        isAuthenticated: false,
      }});
    default:
      return state;
  }
};
