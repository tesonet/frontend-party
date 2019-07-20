const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      localStorage.setItem("loggedIn", true);
      return { ...state, userToken: action.payload.data.token };
    }
    default:
      return state;
  }
};

export default rootReducer;
