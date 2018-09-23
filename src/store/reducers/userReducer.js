// @flow

import { LOGIN_SUCCESS, LOGOUT_ACTION } from '../actions/constants';

const initialState = {
  isLoggedIn: false,
};

type State = {
  isLoggedIn: boolean,
};

export default (previousState: State = initialState, { type }: any) => {
  if (type === LOGIN_SUCCESS) {
    return { ...previousState, isLoggedIn: true };
  }
  if (type === LOGOUT_ACTION) {
    return { ...previousState, isLoggedIn: false };
  }
  return previousState;
};
