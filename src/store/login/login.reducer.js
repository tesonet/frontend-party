import loginConstants from './login.constants';
import { getStorageToken } from '../../utils/localStorage';

const initialState = {
  token: getStorageToken('token'),
  loggingIn: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        ...state,
        token: null,
        isError: false,
        loggingIn: true,
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loggingIn: false,
      };
    case loginConstants.LOGIN_FAIL:
      return {
        ...state,
        isError: true,
        loggingIn: false,
      };
    case loginConstants.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
