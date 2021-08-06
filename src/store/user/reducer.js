import { SET_IS_AUTHENTICATED } from './actions';

const initialValues = {
  isAuthenticated: false,
};

const reducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case SET_IS_AUTHENTICATED: {
      return {
        isAuthenticated: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
