import axios from 'axios';

const URL = 'http://playground.tesonet.lt/v1/servers';
const HEADER = 'Authorization';
const AUTHENTICATION_SCHEME = 'Bearer';

const apiTesonetServers = {
  loginData(token) {
    return axios({
      method: 'GET',
      url: URL,
      headers: {
        [HEADER]: `${AUTHENTICATION_SCHEME} ${token}`
      }
    });
  }
};

export default apiTesonetServers;
