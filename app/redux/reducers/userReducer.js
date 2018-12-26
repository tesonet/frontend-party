import {
  CLEAR_USER,
  RECEIVE_USER,
  REJECT_USER,
  REQUEST_USER
} from 'app/utils/constants';

const initialState = {
  loading: false,
  rejected: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: action.loading,
        rejected: action.rejected
      };
    case RECEIVE_USER:
      return {
        ...state,
        loading: action.loading
      };
    case REJECT_USER:
      return {
        ...state,
        loading: action.loading,
        rejected: action.rejected
      };
    case CLEAR_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
