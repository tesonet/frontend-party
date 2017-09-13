import { names } from './actions';

const defaultState = {
  token: null,
};

export const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case names.REGISTER_TOKEN:
      const token = action.payload;
      return {
        ...state,
        token,
      };

    default: return state;
  }
};
