import wretch from 'wretch';

const tokensAPI = wretch('http://playground.tesonet.lt/v1/tokens');

interface IResponseBody {
  token: string;
}

const UNAUTHORIZED_ERROR = 'Wrong username or password';

export const fetchToken = async (username: string, password: string) => {
  const response = await tokensAPI
    .post({ username, password })
    .unauthorized(() => {
      throw new Error(UNAUTHORIZED_ERROR);
    })
    .res();

  return (await response.json()) as IResponseBody;
};
