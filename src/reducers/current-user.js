export const userActions = {
  setToken: 'set-token',
  logout: 'logout',
};

const initialState = {
  token: undefined,
};

const currentUser = (state = initialState, action = {}) => {
  switch(action.type) {
    case userActions.setToken:
      return {
        ...state,
        token: action.payload,
      }
    case userActions.logout:
      return {
        ...initialState,
      }
    default:
      return state
  }
};

export default currentUser;