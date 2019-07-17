import { SERVER_LIST } from "../_actions";

export default (state = { serverList: [] }, action) => {
  switch (action.type) {
    case SERVER_LIST:
      return { ...state, serverList: action.payload };
    default:
      return state;
  }
};
