const initialState = {
    loading: false,
    auth_success:false,
    serversList: [],
    password: '',
    username: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
case "AUTH_REQUEST":
  return {
    ...state,
    password: action.payLoad.password,
    username: action.payLoad.username,
    auth_success: false,
  }
case "AUTH_SUCCESS":
  return {
    ...state,
    auth_success: true,
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