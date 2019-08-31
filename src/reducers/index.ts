import {combineReducers} from "redux";
import serverReducer from "./server.reducer";

export default combineReducers({
    servers: serverReducer
});