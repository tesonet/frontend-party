const initialState = {
  pending: false,
  errorMessage: '',
  token: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_REQUEST_PENDING": {
      state = {...state, pending: true};
      console.log('pending should be true');
      break;
    }
    case "LOGIN_REQUEST_FULFILLED": {
      state = {...state,  token: action.payload.data.token};
      localStorage.setItem('token', state.token);
      console.log('yas kween');
      break;
    }
    case "LOGIN_REQUEST_REJECTED": {
      state = {...state, errorMessage: "oops"};
      console.log('nekazka ' + state.errorMessage);
      break;
    }
    default: {
      state
    }
  }
  return state;
}
