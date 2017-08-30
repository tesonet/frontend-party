const initialState = {
  pending: false,
  errorMessage: '',
  servers: [],
  showServers: false
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_SERVERS_PENDING": {
      state = {...state, pending: true};
      console.log('pending should be true');
      break;
    }
    case "FETCH_SERVERS_FULFILLED": {
      state = {...state,  servers: action.payload.data, showServers: true, pending: false};
      console.log('yas kween' + state.servers);
      break;
    }
    case "FETCH_SERVERS_REJECTED": {
      state = {...state, errorMessage: "oops"};
      console.log('nekazka ' + state.errorMessage);
      break;
    }
  }
  return state;
}
