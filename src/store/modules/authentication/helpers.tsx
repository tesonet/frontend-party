import LOCAL_STORAGE_KEYS from 'shared/constants/LOCAL_STORAGE_KEYS';
import { Token } from './types';

export const getStoredAuthToken = () => localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

export const setAuthTokenToLocalStorage = (token: Token) => (
  localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token)
);

export const resetLocalStorage = () => (
  localStorage.clear()
);
