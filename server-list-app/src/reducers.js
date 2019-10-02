import { combineReducers } from "redux";
import LoginReducer from "./Login/State/Reducer"
import ServerListRecuder from "./ServerList/State/Reducer"

export default combineReducers({
    Login: LoginReducer,
    ServerList: ServerListRecuder
  });