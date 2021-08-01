import { errorMessages } from '@Common';
import { USERNAME, PASSWORD } from '../../../config/constants';

const validateLoginForm = (values) => {
  const errors = {};

  if (!values[USERNAME]) {
    errors[USERNAME] = errorMessages.EMPTY_FIELD_ERROR;
  }

  if (!values[PASSWORD]) {
    errors[PASSWORD] = errorMessages.EMPTY_FIELD_ERROR;
  }

  return errors;
};
export default validateLoginForm;
