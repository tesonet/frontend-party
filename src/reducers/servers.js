import { SERVER_LIST } from "../actions";

export default (
  state = {
    serverList: {
      data: [],
    }
  },
  action
) => {
  switch (action.type) {
    case SERVER_LIST:
      return {
        ...state,
        serverList: { data: action.payload }
      };
    default:
      return state;
  }
};