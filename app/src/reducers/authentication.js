import { AUTHENTICATE, AUTHENTICATION_ERROR } from '../constants/types';

const actionHash = {
  [AUTHENTICATE]: (state, payload) => ({ ...state, authenticated: payload }),
  [AUTHENTICATION_ERROR]: (state, payload) => ({ ...state, errorMessage: payload }),
};

export default (state = { authenticated: false }, { type, payload }) =>
  (actionHash[type]
    ? actionHash[type](state, payload)
    : state);
