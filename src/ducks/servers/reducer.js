import { names } from './actions';

const defaultState = {
  list: [],
};

export const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case names.LOAD_SERVERS_DONE:
      const serverList = action.payload;
      return {
        ...state,
        list: serverList,
      };

    default: return state;
  }
};
