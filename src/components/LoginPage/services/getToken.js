import tesonetClient from '@Common/client/tesonetClient';

const getToken = async (username, password) => {
  const token = await tesonetClient.getToken(username, password);

  return token;
};

export default getToken;
