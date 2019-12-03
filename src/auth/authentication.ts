const AUTHENTICATION_INFO = 'auth_info';

export const logout = () => {
  localStorage.removeItem(AUTHENTICATION_INFO);
  window.location.href = `${window.location.origin}/login`;
};

export const isLoggedIn = () => !!localStorage.getItem(AUTHENTICATION_INFO);
