import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./../store/reducers/auth.js";
import serverListReducer from "./../store/reducers/serverList.js";

//dev build
// import { createLogger } from "redux-logger";
// const loggerMiddleware = createLogger();
// export default function() {
// 	return createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
// }

const rootReducer = combineReducers({
	auth: authReducer,
	serverList: serverListReducer,
});

export default function() {
	return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
