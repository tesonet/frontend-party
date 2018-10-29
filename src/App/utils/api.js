import axios from 'axios';

const loginUrl = 'http://playground.tesonet.lt/v1/tokens';
const getServersUrl = 'http://playground.tesonet.lt/v1/servers';

const getToken = () => localStorage.getItem('token');

export default {
  login: (data) => axios.post(loginUrl, data, { headers: { 'Content-Type': 'application/json' } }),
  getServers: () => axios.get(getServersUrl, { headers: { Authorization: getToken() } }),
}
