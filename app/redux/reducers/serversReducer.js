import {
  CLEAR_SERVERS,
  RECEIVE_SERVERS,
  REJECT_SERVERS,
  REQUEST_SERVERS,
  SORT_SERVERS
} from 'app/utils/constants';

const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SERVERS:
      return {
        ...state,
        loading: action.loading,
      };
    case RECEIVE_SERVERS:
      return {
        ...state,
        loading: action.loading,
        data: action.data,
      };
    case REJECT_SERVERS:
      return {
        ...state,
        loading: action.loading
      };
    case SORT_SERVERS:
      return {
        ...state,
        data: action.data,
      };
    case CLEAR_SERVERS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
