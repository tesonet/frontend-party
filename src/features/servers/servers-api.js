import axios from 'axios';
import { API_URL } from '../../api/constants';
import { isNonEmptyObject } from '../../api/helper';
import { getBearerConfig } from '../../api/auth-token';

export const sortServers = (a, b) => {
  if (!isNonEmptyObject(a) || !isNonEmptyObject(b)) {
    return null;
  }
  const o1 = (a.name || '').toLowerCase();
  const o2 = (b.name || '').toLowerCase();
  const p1 = parseInt(a.distance, 10);
  const p2 = parseInt(b.distance, 10);
  if (p1 < p2) return -1;
  if (p1 > p2) return 1;
  if (o1 < o2) return -1;
  if (o1 > o2) return 1;
  return 0;
};

export const getServers = () => new Promise((resolve, reject) => axios.get(`${API_URL}servers`, getBearerConfig())
  .then(
    (res) => {
      const servers = res.data;
      servers.sort(sortServers);
      return resolve(servers);
    },
    (err) => {
      reject(new Error(err.message));
    },
  ));
