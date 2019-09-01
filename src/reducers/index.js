import { combineReducers } from "redux";
import authReducer from "./auth";
import serverListReducer from "./servers";

const reducers = combineReducers({
  authReducer,
  serverListReducer
});

export default reducers;