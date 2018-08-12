const NO_USERNAME_ENTERED = 'You have to enter your username';
const NO_PASSWORD_ENTERED = 'You have to enter your password';
const USERNAME_TOO_LONG =
  "Username is too long, are you sure you've entered it correctly?";
const HACKERS_NOT_ALLOWWED = "Sorry, we don't allow hackers inside 😎";
const PASSWORD_TOO_LONG =
  "Username is too long, are you sure you've entered it correctly?";
const MAX_USERNAME_LENGTH = 16;
const MAX_PASSWORD_LENGTH = 16;

export const validateUsername = (value: string | null): void => {
  if (!value) {
    throw NO_USERNAME_ENTERED;
  }

  if (value === 'hax0r') {
    throw HACKERS_NOT_ALLOWWED;
  }

  if (value.length > MAX_USERNAME_LENGTH) {
    throw USERNAME_TOO_LONG;
  }
};

export const validatePassword = (value: string | null): void => {
  if (!value) {
    throw NO_PASSWORD_ENTERED;
  }

  if (value.length > MAX_PASSWORD_LENGTH) {
    throw PASSWORD_TOO_LONG;
  }
};
