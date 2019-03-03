export const logIn = (formState) => ({
  type: 'LOG_IN',
  payload: formState,
});

export const logInSuccess = () => ({
  type: 'LOG_IN_SUCCESS',
});

export const logInError = (error) => ({
  type: 'LOG_IN_ERROR',
  payload: {
    error: error,
  },
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

export const checkToken = () => ({
  type: 'CHECK_TOKEN',
});

export const localTokenFound = () => ({
  type: 'LOCAL_TOKEN_FOUND',
});

export const localTokenNotFound = () => ({
  type: 'LOCAL_TOKEN_NOT_FOUND',
});
