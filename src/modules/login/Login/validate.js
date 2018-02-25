import {
  either,
  filter,
  fromPairs,
  isEmpty,
  isNil,
  keys,
  not,
  map,
  pipe,
} from 'ramda';

const required = value => ({
  valid: pipe(either(isEmpty, isNil), not)(value),
  error: 'Field is required',
});

const validators = {
  username: required,
  password: required,
};

export const fields = keys(validators);

const test = (key, value) => validators[key](value);

export default values => {
  const errors = pipe(
    map(key => [key, values[key]]),
    props => props,
    map(([key, value]) => {
      const { valid, error } = test(key, value);
      return valid ? null : [key, error];
    }),
    filter(pipe(isNil, not)),
    fromPairs,
  )(fields);
  return isEmpty(errors) ? null : errors;
};
