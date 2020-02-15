import axios from 'axios';
import { uniqueId } from 'lodash-es';

export const login = async (values: { username: string; password: string }) => {
  const res = await axios.post<{ token: string }>('http://playground.tesonet.lt/v1/tokens', values, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};

type ServerResponseItem = {
  name: string;
  distance: number;
};

export type Server = ServerResponseItem & {
  id: string;
};

export const fetchServers = async (token: string) => {
  const res = await axios.get<ServerResponseItem[]>('http://playground.tesonet.lt/v1/servers', {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  return res.data.map(server => ({
    ...server,
    id: uniqueId(),
  }));
};
