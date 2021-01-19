import {combineReducers} from "redux";

import auth from "./auth";
import serverList from "./server-list";


export default combineReducers({auth, serverList});
