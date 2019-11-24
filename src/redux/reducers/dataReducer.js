import { SET_SERVERS, LOADING_DATA } from '../types';

const initialState = {
  servers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SERVERS:
      return {
        ...state,
        servers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
