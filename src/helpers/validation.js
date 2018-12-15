import { USERNAME_ERROR_MSG, PASSWORD_ERROR_MSG } from "./constants";

const validate = credentials => {
  const errors = {};

  if (!credentials.username) errors.username = USERNAME_ERROR_MSG;
  if (!credentials.password) errors.password = PASSWORD_ERROR_MSG;

  return errors;
};
export default validate;
