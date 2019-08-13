import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./login/reducers";
import { serversReducer } from "./servers/reducers";

const rootReducer = combineReducers({
    auth: loginReducer,
    serversState: serversReducer,
});

const middlewares = [thunkMiddleware];
const middleWareEnhance = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhance));

export default store;
