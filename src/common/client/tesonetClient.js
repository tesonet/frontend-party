import axios from 'axios';

const createTesonetClient = () => {
  const instance = axios.create({
    baseURL: 'https://playground.tesonet.lt/v1',
  });

  const getToken = async (username, password) => {
    const response = await instance.post('/tokens', {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.token;
  };

  const getServers = async (token) => {
    const response = await instance.get('/servers', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  return {
    getToken,
    getServers,
  };
};

const tesonetClient = createTesonetClient();

export default tesonetClient;
