import { handleActions } from 'redux-actions';
import * as SERVERS_ACTION_TYPES from './constants';

type DefaultState = {
  all: null
}

export const DEFAULT_STATE: DefaultState = {
  all: null,
};

const reducer = handleActions({
  [SERVERS_ACTION_TYPES.SET_ALL]: (state, { payload: { all } }) => (
    { ...state, all }
  ),
  [SERVERS_ACTION_TYPES.CLEAR_ALL]: (state) => (
    { ...state, all: null }
  ),
},
DEFAULT_STATE);

export default reducer;
