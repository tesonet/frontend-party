import axios from 'axios';

const getToken = async (username, password) => {
  const response = await axios.post('https://playground.tesonet.lt/v1/tokens', {
    username,
    password,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.token;
};

export default getToken;
