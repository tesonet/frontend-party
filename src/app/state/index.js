import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(apiMiddleware));

export default store;
