import { Thunk } from 'common/store/types';
import { createActionCreator } from 'common/utils/redux';
import { SET_IS_AUTHENTICATED, SET_TOKEN } from './constants';

export const setIsAuthenticated = createActionCreator<boolean>(
  SET_IS_AUTHENTICATED
);

const setTokenAction = createActionCreator<string | null>(SET_TOKEN);

const STORAGE_KEY = 'token';

const getTokenFromStorage = () => localStorage.getItem(STORAGE_KEY);

export const init = (): Thunk => dispatch => {
  const token = getTokenFromStorage();

  if (!token) {
    return;
  }

  dispatch(setToken(token, false));
  dispatch(setIsAuthenticated(true));
};

export const setToken = (
  token: string | null,
  save: boolean = true
): Thunk => dispatch => {
  dispatch(setTokenAction(token));

  if (!save) {
    return;
  }

  if (token) {
    localStorage.setItem(STORAGE_KEY, token);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};
