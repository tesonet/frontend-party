import { combineReducers } from "redux";
import loginReducer from "./userReducers/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer;