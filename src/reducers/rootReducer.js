const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      localStorage.setItem("userToken", action.payload.data.token);
      return { ...state, userToken: action.payload.data.token };
    }
    default:
      return state;
  }
};

export default rootReducer;
