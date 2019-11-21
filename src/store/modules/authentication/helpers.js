import LOCAL_STORAGE_KEYS from 'shared/constants/LOCAL_STORAGE_KEYS';

export const getStoredAuthToken = () => localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

export const setAuthTokenToLocalStorage = (token) => (
  localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token)
);

export const resetLocalStorage = () => (
  localStorage.clear()
);
