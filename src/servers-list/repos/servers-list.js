import axios from 'axios';

import { BASE_URL } from '../../app';

const SERVERS_URL = `${BASE_URL}/v1/servers`;

const getServerslist = authToken => axios.get(SERVERS_URL, { headers: { Authorization: `Bearer ${authToken}` } });

export default getServerslist;
