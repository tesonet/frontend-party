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
  return {
    getToken,
  };
};

const tesonetClient = createTesonetClient();

export default tesonetClient;
