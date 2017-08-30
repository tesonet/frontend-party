const initialState = {
  userAuthenticated: false,
  pending: false,
  errorMessage: '',
  token: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_REQUEST_PENDING": {
      state = {...state, pending: true, errorMessage: false};
      console.log('pending should be true');
      break;
    }
    case "LOGIN_REQUEST_FULFILLED": {
      state = {...state, pending: false, token: action.payload.data.token, userAuthenticated: true};
      console.log('yas kween');
      break;
    }
    case "LOGIN_REQUEST_REJECTED": {
      state = {...state, pending: false, errorMessage: "oops"};
      console.log('nekazka ' + state.errorMessage);
      break;
    }
    default: {
      state
    }
  }
  return state;
}
