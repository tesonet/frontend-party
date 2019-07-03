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

const activity = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.type;
    case 'LOG_OUT':
      return action.type;
    default:
      return state;
  }
};

const userName = (state = '', action) => {
  switch (action.type) {
    case 'USER_NAME':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const userPassword = (state = '', action) => {
  switch (action.type) {
    case 'USER_PASSWORD':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default { isLogged, activity, userName, userPassword };