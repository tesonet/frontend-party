import {handleActions} from 'redux-actions'
import {
  fetchServers,
  fetchServersFulfilled,
  fetchServersFailed,
  updateServersSortParams,
} from '../actions'

const initialState = {
  list: [],
  sortParams: {key: 'distance', order: 'asc'},
  loading: false,
  error: null,
}

export default handleActions(
  {
    [fetchServers]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchServersFulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
      loading: false,
    }),
    [fetchServersFailed]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    [updateServersSortParams]: (state, action) => ({
      ...state,
      sortParams: action.payload,
    }),
  },
  initialState,
)
