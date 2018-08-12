import { createActionCreator } from 'common/utils/redux';
import { SET_IS_AUTHENTICATED, SET_TOKEN } from './constants';

export const setIsAuthenticated = createActionCreator<boolean>(
  SET_IS_AUTHENTICATED
);

export const setToken = createActionCreator<string | null>(SET_TOKEN);
