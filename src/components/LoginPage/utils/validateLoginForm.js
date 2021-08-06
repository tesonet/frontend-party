import { errorMessages } from '@Common';
import { USERNAME, PASSWORD } from '../../../config/constants';

const validateLoginForm = (values) => {
  const errors = {};
  const emptyFieldError = errorMessages.EMPTY_FIELD_ERROR;

  if (!values[USERNAME]) {
    errors[USERNAME] = emptyFieldError;
  }

  if (!values[PASSWORD]) {
    errors[PASSWORD] = emptyFieldError;
  }

  return errors;
};
export default validateLoginForm;
