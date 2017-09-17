import * as Joi from 'joi';
import RequestHTTP from './RequestHTTP';
import { validate } from './Validation';

interface ITokenByUsernameAndPassword {
  token: string;
}

const fetchTokenByUsernameAndPasswordSchema = Joi.object().keys({
  token: Joi.string(),
});

export const fetchTokenByUsernameAndPassword = async (
  username: string,
  password: string,
): Promise<string> => {
  const resp = await RequestHTTP.post('v1/tokens', { username, password });
  const data = validate<ITokenByUsernameAndPassword>(resp.data, fetchTokenByUsernameAndPasswordSchema);
  return data.token;
};
