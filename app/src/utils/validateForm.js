export const validateLoginForm = (values) => {
  const errors = {};
  const requiredFields = ['username', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This is required';
    }
  });
  return errors;
};

export const validateSignupForm = () => {};
