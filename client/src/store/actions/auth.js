const loggedIn = () => {
  return {
    type: 'LOGGED_IN'
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

const userName = (payload = null) => {
  return {
    type: 'USER_NAME',
    payload: payload
  }
};

const userPassword = (payload = null) => {
  return {
    type: 'USER_PASSWORD',
    payload: payload
  }
};

export default { loggedIn, loggedOut, logIn, logOut, userName, userPassword };