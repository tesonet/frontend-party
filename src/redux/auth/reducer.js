const initialState = {
  tokenCheckDone: false,
  loggedIn: false,
  logInLoading: false,
  logInErrorText: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...state, logInLoading: true, logInErrorText: null };
    }
    case 'LOCAL_TOKEN_FOUND': {
      return { ...state, loggedIn: true, tokenCheckDone: true };
    }
    case 'LOG_IN_SUCCESS': {
      return { ...state, logInLoading: false, loggedIn: true };
    }
    case 'LOG_IN_ERROR': {
      const { error } = action.payload;
      return { ...state, logInLoading: false, logInErrorText: error };
    }
    case 'LOCAL_TOKEN_NOT_FOUND': {
      return { ...state, tokenCheckDone: true };
    }
    case 'LOG_OUT': {
      return { ...state, loggedIn: false };
    }

    default:
      return state;
  }
}
