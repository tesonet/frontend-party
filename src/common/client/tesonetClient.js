import axios from 'axios';

const createTesonetClient = () => {
  const baseUrl = 'https://playground.tesonet.lt/v1';

  const getToken = async (username, password) => {
    const response = await axios.post(`${baseUrl}/tokens`, {
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
    const response = await axios.get(`${baseUrl}/servers`, {
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
