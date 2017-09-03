import update from 'immutability-helper';

import * as t from './actionTypes';


const DEFAULT_STATE = {
  authenticationChecked: false,
  isAuthenticated: false,
};


export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case t.AUTHENTICATION_SET:
      return update(state, {$merge: {
        authenticationChecked: true,
        isAuthenticated: !!payload,
      }});
    case t.LOGGED_IN:
      return update(state, {$merge: {
        isAuthenticated: true,
      }});
    case t.LOGGED_OUT:
      return update(state, {$merge: {
        isAuthenticated: false,
      }});
    default:
      return state;
  }
};
