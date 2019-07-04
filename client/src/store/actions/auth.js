const loggedIn = (user) => {
  return {
    type: 'LOGGED_IN',
    payload: user
  }
};

const loggedOut = () => {
  return {
    type: 'LOGGED_OUT'
  }
};

const logIn = () => {
  return {
    type: 'LOG_IN'
  }
};

const logOut = () => {
  return {
    type: 'LOG_OUT'
  }
};

const username = (payload = null) => {
  return {
    type: 'USER_NAME',
    payload: payload
  }
};

const password = (payload = null) => {
  return {
    type: 'USER_PASSWORD',
    payload: payload
  }
};

const loginError = (bool) => {
  return {
    type: 'LOG_IN_ERROR',
    payload: bool
  }
};

export default { loggedIn, loggedOut, logIn, logOut, username, password, loginError };