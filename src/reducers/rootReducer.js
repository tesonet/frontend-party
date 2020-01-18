import { combineReducers } from "redux";
import loginReducer from "./userReducers/loginReducer";
import authReducer from "./userReducers/authReducer";
import fetchServerListReducer from "./fetchDataReducers/serverListReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  authUser: authReducer,
  fetchServerList: fetchServerListReducer
});

export default rootReducer;
