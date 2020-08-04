import Cookies from 'js-cookie';

export const storeToken = (token: string) => {
  Cookies.set('token', token);
};

export const removeToken = () => {
  Cookies.remove('token');
};

export const getToken = () => Cookies.get('token');
