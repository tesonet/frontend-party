import {event} from '~/common/redux';

import * as t from './actionTypes';
import * as s from './selectors';
import {setSession, removeSession, isActuallyAuthenticated} from './utils';


const loggedIn = () => event(t.LOGGED_IN);
const loggedOut = () => event(t.LOGGED_OUT);
const setAuthenticated = isAuthenticated => event(t.AUTHENTICATION_SET, isAuthenticated);


// async
export const syncAuth = () => async (dispatch, getState) => {
  const state = getState();
  const authenticated = s.isAuthenticated(state);
  const actuallyAuthenticated = isActuallyAuthenticated();

  if (authenticated !== actuallyAuthenticated) {
    await dispatch(setAuthenticated(actuallyAuthenticated));
    if (actuallyAuthenticated) removeSession();
  }
};


export const logIn = ({token}) => async (dispatch) => {
  setSession(token);
  await dispatch(loggedIn());
};


export const logOut = () => async (dispatch) => {
  await dispatch(loggedOut());
  removeSession();
};
