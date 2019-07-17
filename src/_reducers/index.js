import { combineReducers } from "redux";
import authReducer from "./auth";
import serverListReducer from "./server-list";

const reducers = combineReducers({
  authReducer,
  serverListReducer
});

export default reducers;
