import update from 'immutability-helper';

import * as types from './actionTypes';


export const DEFAULT_RESOURCE_STATE = {
  loading: false,
  loaded: false,
  data: null,
};
const DEFAULT_STATE = {};


export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case types.LOADING_STARTED:
      if (state[payload] == null) {
        return update(state, {$merge: {
          [payload]: {
            ...DEFAULT_RESOURCE_STATE,
            loading: true,
          },
        }});
      }
      return update(state, {
        [payload]: {
          $merge: {
            loading: true,
            loaded: DEFAULT_RESOURCE_STATE.loaded,
            data: DEFAULT_RESOURCE_STATE.data,
          },
        },
      });
    case types.LOADING_FINISHED:
      return update(state, {
        [payload.type]: {
          $merge: {
            loading: false,
            loaded: true,
            data: payload.data,
          },
        },
      });
    default:
      return state;
  }
};
