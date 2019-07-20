//Helper functions
import { validateLoginAttempt } from "../helpers/validateLoginAttempt";

const rootReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const isLoggedIn = validateLoginAttempt(action.payload);
    default:
      console.log("default");
      break;
  }
};

export default rootReducer;
