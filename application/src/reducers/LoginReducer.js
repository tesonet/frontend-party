const initialState = {
  userAuthenticated: false,
  pending: false,
  errorMessage: false,
  token: false
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "persist/REHYDRATE": {
      state = {...state, ...action.payload.LoginReducer, errorMessage: false};
      break;
    }
    case "LOGIN_REQUEST_PENDING": {
      state = {...state, pending: true, errorMessage: false};
      break;
    }
    case "LOGIN_REQUEST_FULFILLED": {
      state = {...state, pending: false, token: action.payload.data.token, userAuthenticated: true};
      break;
    }
    case "LOGIN_REQUEST_REJECTED": {
      state = {...state, pending: false, errorMessage: "Username and/or password invalid"};
      break;
    }
    case "LOGOUT": {
      state = initialState;
      break;
    }
    default: {
      state = {...state};
    }
  }
  return state;
}
