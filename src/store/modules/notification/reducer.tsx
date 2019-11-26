import { handleActions } from 'redux-actions';
import * as NOTIFICATION_ACTION_TYPES from './constants';

type DefaultState = {
  message: null
}

export const DEFAULT_STATE: DefaultState = {
  message: null,
};

const reducer = handleActions({
  [NOTIFICATION_ACTION_TYPES.SET_MESSAGE]: (state, { payload: { message } }) => (
    { ...state, message }
  ),
  [NOTIFICATION_ACTION_TYPES.CLEAR_MESSAGE]: (state) => (
    { ...state, message: null }
  ),
},
DEFAULT_STATE);

export default reducer;
