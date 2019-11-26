import { handleActions } from 'redux-actions';
import * as AUTHENTICATION_ACTION_TYPES from './constants';

type DefaultState = {
  token: null
}

export const DEFAULT_STATE: DefaultState = {
  token: null,
};

const reducer = handleActions({
  [AUTHENTICATION_ACTION_TYPES.SET_TOKEN]: (state, { payload: { token } }) => ({
    ...state,
    token,
  }),
},
DEFAULT_STATE);


export default reducer;
