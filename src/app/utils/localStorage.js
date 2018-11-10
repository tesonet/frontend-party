const ACCESS_TOKEN = 'access_token';

export const setAuthToken = token => localStorage.setItem(ACCESS_TOKEN, token);
export const getAuthToken = () => localStorage.getItem(ACCESS_TOKEN);
