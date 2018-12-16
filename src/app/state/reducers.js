import { combineReducers } from "redux";
import management from "../management";

export default combineReducers({
  [management.constants.NAME]: management.reducer
});
