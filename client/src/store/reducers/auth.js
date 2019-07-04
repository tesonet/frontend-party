const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      action.payload.isLogged = true;
      return action.payload;
    case 'LOGGED_OUT':
      return {};
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
      return null;
  }
};

const LoginUserName = (state = '', action) => {
  switch (action.type) {
    case 'USER_NAME':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const LoginUserPassword = (state = '', action) => {
  switch (action.type) {
    case 'USER_PASSWORD':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const LoginError = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default { user, activity, LoginUserName, LoginUserPassword, LoginError };