import { TEST } from "../_actions";

export default function(state = { test: "test" }, action) {
  switch (action.type) {
    case TEST:
      return { ...state, test: "test1" };
    default:
      return state;
  }
}
