const ACCESS_TOKEN = 'access_token';

export const setAuthTokenToStorage = token => localStorage.setItem(ACCESS_TOKEN, token);
export const removeAuthTokenFromStorage = () => localStorage.removeItem(ACCESS_TOKEN);
export const getAuthTokenFromStorage = () => localStorage.getItem(ACCESS_TOKEN);
