const TOKEN_KEY = 'token';

const getStorage = () => window.localStorage;

export default {
  setToken(token) {
    getStorage().setItem(TOKEN_KEY, token);
  },

  getToken() {
    return getStorage().getItem(TOKEN_KEY);
  },

  removeToken() {
    getStorage().removeItem(TOKEN_KEY);
  }
};
