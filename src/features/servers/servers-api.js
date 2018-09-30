import axios from 'axios';
import { API_URL } from '../../api/constants';
import { sortByTwoColumns } from '../../api/helper';
import { getBearerConfig } from '../../api/auth-token';

export const noop = () => null;

export const getServers = () => new Promise((resolve, reject) => axios.get(`${API_URL}servers`, getBearerConfig())
  .then(
    (res) => {
      const servers = res.data;
      servers.sort(sortByTwoColumns);
      return resolve(servers);
    },
    (err) => {
      reject(new Error(err.message));
    },
  ));
