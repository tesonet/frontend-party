exports.validate = credentials => {
  const errors = {};

  if (!credentials.username) errors.username = "Name is required!";
  if (!credentials.password) errors.password = "Password is required!";

  return errors;
};
