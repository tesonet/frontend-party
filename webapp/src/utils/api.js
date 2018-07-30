import axios from 'axios';

export const LS_TOKEN_KEY = 'api_token';

export default {
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
      return axios
        .get('http://playground.tesonet.lt/v1/servers', { headers: { 'Authorization': 'Bearer f9731b590611a5a9377fbd02f247fcdf' } })
        .then(({ data }) => data);
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
