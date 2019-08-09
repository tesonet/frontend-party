import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export default function ValidateInput(data) {
  let inputError = {};

  if (Validator.isEmpty(data.username)) {
    inputError.username = "You did not enter a username";
  }
  if (Validator.isEmpty(data.password)) {
    inputError.password = "You did not enter a password";
  }

  return {
    inputError,
    isValid: isEmpty(inputError)
  };
}
