import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    credentials: null
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case SIGN_IN:
      return { ...state, isSignedIn: true, credentials: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, credentials: null };
    default:
     return state;
  }
};
