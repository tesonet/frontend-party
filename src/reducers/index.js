import { combineReducers } from "redux";
import auth from "./authReducer";
import servers from "./serversReducer";

export default combineReducers({
  auth,
  servers
});
