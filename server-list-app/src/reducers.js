import { combineReducers } from "redux";
import LoginReducer from "./Login/State/Reducer"

export default combineReducers({
    Login: LoginReducer
  });