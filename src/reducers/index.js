import userReducer from "./user.reducer";
import { combineReducers } from "redux";
import serversReducer from "./servers.reducer";

const reducers = combineReducers({
  user: userReducer,
  servers: serversReducer,
});

export default reducers;
