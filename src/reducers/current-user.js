export const userActions = {
  setToken: 'set-token',
};

const currentUser = (state = {}, action) => {
  switch(action.type) {
    case userActions.setToken:
      return {
        ...state,
        token: action.payload,
        loggedIn: true
      }
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false
      }
    default:
      return state
  }
};

export default currentUser;