import { combineReducers } from "redux";
import loginReducer from "./userReducers/loginReducer";
import authReducer from "./userReducers/authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  authUser: authReducer
});

export default rootReducer;
