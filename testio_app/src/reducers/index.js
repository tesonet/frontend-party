const reducer = (state = {}, action) => {
  switch (action.type) {
case "AUTH_REQUEST":
  return {
    ...state,
    password: action.payLoad.password,
    username: action.payLoad.username,
  }
    default:
      return state;
  }
};

export default reducer;