import axios from 'axios';

const URL = 'http://playground.tesonet.lt/v1/tokens';
const HEADER = 'Content-Type';
const MIME_TYPE = 'application/json';
const CHARSET = 'charset=UTF-8';

const apiTesonetTokens = {
  loginData({ username, password }) {
    return axios({
      method: 'POST',
      url: URL,
      headers: {
        [HEADER]: `${MIME_TYPE}; ${CHARSET}`
      },
      data: {
        username: username,
        password: password
      }
    });
  }
};

export default apiTesonetTokens;
