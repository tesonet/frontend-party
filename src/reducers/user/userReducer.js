const initialState = {
  userToken: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      return Object.assign({}, state, { userToken: action.payload });
    }
    case "logout": {
      return { ...state, userToken: null };
    }
    default:
      return state;
  }
};

export default userReducer;
