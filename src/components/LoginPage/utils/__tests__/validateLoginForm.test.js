import { errorMessages } from '@Common';

import { USERNAME, PASSWORD } from '../../../../config/constants';
import validateLoginForm from '../validateLoginForm';

const emptyFieldError = errorMessages.EMPTY_FIELD_ERROR;

const constructFieldsWithError = (fields) => fields.reduce((errors, field) => ({
  [field]: emptyFieldError,
  ...errors,
}), {});

describe('validateLoginForm', () => {
  it.each([
    [
      'should return errors for all fields if no values supplied', [USERNAME, PASSWORD], {},
    ],
    [
      'should return error for password field if password is not supplied',
      [PASSWORD],
      {
        [USERNAME]: 'test',
      },
    ],
    [
      'should return error for username field if username is not supplied',
      [USERNAME],
      {
        [PASSWORD]: 'test',
      },
    ],
    [
      'should return no errors if form is fully filed',
      [],
      {
        [USERNAME]: 'test',
        [PASSWORD]: 'test',
      },
    ],
  ])(
    '%s',
    (description, expectedFieldsWithErrors, values) => {
      const expectedErrors = constructFieldsWithError(expectedFieldsWithErrors);
      const errors = validateLoginForm(values);

      expect(errors).toStrictEqual(expectedErrors);
    },
  );
});
