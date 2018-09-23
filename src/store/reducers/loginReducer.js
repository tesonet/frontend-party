// @flow

import { LOGIN_SUCCESS } from '../actions/constants';

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
  return previousState;
};
