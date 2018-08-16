import axios from 'axios';
import _orderBy from 'lodash/orderBy';

export const LS_TOKEN_KEY = 'api_token';
export const ERROR_MISSING_TOKEN = 'Token is missing.';

const api = {
  setToken: function(token) {
    if (token === null) {
      localStorage.removeItem(LS_TOKEN_KEY);
    } else {
      localStorage.setItem(LS_TOKEN_KEY, token);
    }
  },

  getToken: function() {
    return localStorage.getItem(LS_TOKEN_KEY);
  },

  servers: {
    get: function() {
      const token = api.getToken();

      if ( ! token) {
        throw new Error(ERROR_MISSING_TOKEN);
      }

      return axios
        .get('http://playground.tesonet.lt/v1/servers', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(({ data }) => data)
        .then(data => _orderBy(data, ['distance', 'name']))
    }
  },

  tokens: {
    post: function(username, password) {
      return axios
        .post('http://playground.tesonet.lt/v1/tokens', { username, password })
        .then(({ data }) => data);
    }
  }
};

export default api;
