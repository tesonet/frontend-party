import { names } from "./actions";

const defaultState = {
  count: 0
}

export const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    
    case names.TEST_ACTION: 
      return {
        ...state, 
        count: state.count + 1
      };

    default: return state;
  }
}