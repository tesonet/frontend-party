const loggedIn = () => {
  return {
    type: 'LOGGED_IN',
    payload: ''
  }
};

const loggedOut = () => {
  return {
    type: 'LOGGED_OUT',
    payload: ''
  }
};

export default { loggedIn, loggedOut };