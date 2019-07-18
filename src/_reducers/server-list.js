import { SERVER_LIST, ORDER_TYPE_NAME, ORDER_TYPE_DISTANCE } from "../_actions";

export default (
  state = {
    serverList: {
      filterType: "",
      data: []
    }
  },
  action
) => {
  switch (action.type) {
    case SERVER_LIST:
      return {
        ...state,
        serverList: { filterType: "", data: action.payload }
      };
    case ORDER_TYPE_NAME: {
      const sorted = state.serverList.data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return { ...state, serverList: { filterType: "byName", data: sorted } };
    }
    case ORDER_TYPE_DISTANCE: {
      const sorted = state.serverList.data.sort((a, b) => {
        if (a.distance < b.distance) {
          return -1;
        }
        if (a.distance > b.distance) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        serverList: { filterType: "byDistance", data: sorted }
      };
    }
    default:
      return state;
  }
};
