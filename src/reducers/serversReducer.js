import { FETCH_SERVERS } from '../actions/types';

const INITIAL_STATE = {
    servers: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_SERVERS:
      return { ...state, servers: action.payload };
    default:
      return state;
  }
};
