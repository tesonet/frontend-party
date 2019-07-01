const isLogged = (state = false, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return true;
    case 'LOGGED_OUT':
      return false;
    default:
      return state;
  }
};

export default { isLogged };