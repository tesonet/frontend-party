import wretch from 'wretch';
import { ServersReponseJSON } from './types';

const serversAPI = wretch('http://playground.tesonet.lt/v1/servers');

export const fetchServers = async (token: string) => {
  const response = await serversAPI
    .headers({ Authorization: token })
    .get()
    .res();

  if (!response.ok || response.status !== 200) {
    throw new Error('Failed to fetch servers list');
  }

  return (await response.json()) as ServersReponseJSON;
};
