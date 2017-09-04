const initialState = {
  pending: false,
  errorMessage: false,
  servers: [],
  sorting: 'default'
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "persist/REHYDRATE": {
      state = {...state, ...action.payload.ServersReducer};
      break;
    }
    case "FETCH_SERVERS_PENDING": {
      state = {...state, pending: true};
      console.log('pending should be true');
      break;
    }
    case "FETCH_SERVERS_FULFILLED": {
      state = {...state,  servers: action.payload.data, pending: false};
      break;
    }
    case "FETCH_SERVERS_REJECTED": {
      state = {...state, pending: false, errorMessage: "Something went wrong while fetching the servers list, please try again later"};
      break;
    }
    case "SORT_LIST": {
      state = {...state, sorting: action.sorting};
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
