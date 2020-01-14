import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { userReducer, UserState } from "./user/reducer";
import { serversReducer, ServersState } from "./servers/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  servers: serversReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export interface State {
  user: UserState;
  servers: ServersState;
}

export default store;
