import { IApp } from 'types';

export const isUserLoggedIn = (state: IApp) => {
  // This code be change to double destructing, but for some people its harder to read.
  const { user } = state;
  const { isLoggedIn, token } = user;

  if (isLoggedIn && token) {
    return true;
  }

  return false;
};
