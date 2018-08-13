import wretch from 'wretch';

const tokensAPI = wretch('http://playground.tesonet.lt/v1/tokens');

interface IResponseBody {
  token: string;
}

export const fetchToken = async (username: string, password: string) => {
  const response = await tokensAPI.post({ username, password }).res();

  if (!response.ok || response.status !== 200) {
    throw new Error('Failed to sign in');
  }

  return (await response.json()) as IResponseBody;
};
