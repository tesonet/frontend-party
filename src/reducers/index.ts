import { combineReducers } from "redux";
import login from "./loginReducer";
import servers from './serverReducer';

const ReduxState = combineReducers({ login, servers });

export type State = ReturnType<typeof ReduxState>

export default ReduxState;
