import axios from 'axios';

export const login = async (values: { username: string; password: string }) => {
  const res = await axios.post<{ token: string }>('http://playground.tesonet.lt/v1/tokens', values, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};

export const fetchServers = async () => {
  const res = await axios.get<{ token: string }>('http://playground.tesonet.lt/v1/tokens', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
