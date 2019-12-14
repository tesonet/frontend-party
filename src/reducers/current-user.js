const currentUser = (state = {}, action) => {
  console.log(state, action);
  switch(action.type){
      case "set-token":
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
}

export default currentUser;