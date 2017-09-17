import * as Joi from 'joi';
import RequestHTTP from './RequestHTTP';
import { validate } from './Validation';

export interface IServerEntity {
  distance: number;
  name: string;
}

const schema = Joi.array().items(Joi.object().keys({
  distance: Joi.number(),
  name: Joi.string(),
}));

export const fetchServersList = async (
): Promise<IServerEntity[]> => {
  const resp = await RequestHTTP.get('v1/servers');
  return validate<IServerEntity[]>(resp.data, schema);
};
