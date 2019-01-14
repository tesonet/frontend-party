const initialState = {
    loading: false,
    serversList: [],
    password: '',
    username: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
case "AUTH_REQUEST":
  return {
    ...state,
    password: action.payLoad.password,
    username: action.payLoad.username,
  }
case "FETCH_SERVERS_LIST_BEGIN":
  return {
    ...state,
    loading: true,
  }
 case "FETCH_SERVERS_LIST_SUCCESS":
   return {
     ...state,
     serversList: action.payload.serversList,
     loading: false,
   }
    default:
      return state;
  }
};

export default reducer;