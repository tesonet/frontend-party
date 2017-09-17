import * as Joi from 'joi';

export const validate = <T>(
  content: T,
  schema: Joi.AnySchema<any>,
): T => {
  const data = Joi.validate<T>(content, schema, {
    presence: 'required',
    stripUnknown: true,
  });
  if (data.error) {
    throw data.error;
  } else {
    return data.value;
  }
};
