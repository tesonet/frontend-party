import { setItem, getItem, removeItem } from './storage';

const authKey = 'auth-token';

export const setToken = token => setItem(authKey, token);
export const getToken = () => getItem(authKey);
export const removeToken = () => removeItem(authKey);
export const isAuthToken = () => !!getItem(authKey);
