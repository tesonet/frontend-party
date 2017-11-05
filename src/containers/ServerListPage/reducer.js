/**
 * Server list page reducer
 */
import { fromJS, List } from 'immutable';
import {
  SERVER_LIST_FETCH,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  list: [],
  loading: false,
  error: null,
});

function serverListPageReducer(state = initialState, action) {
  switch (action.type) {
    case SERVER_LIST_FETCH:
      return state
        .set('loading', true);
    case SERVER_LIST_RECEIVED:
      return state
        .set('loading', false)
        .set('list', new List(action.list));
    case SERVER_LIST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error.message);
    default:
      return state;
  }
}

export default serverListPageReducer;
